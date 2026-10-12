import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { asSpreadsheetText, validateRsvp } from "@/lib/rsvp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 35;

const jsonHeaders = { "Cache-Control": "no-store" };

function reply(body: object, status: number) {
  return NextResponse.json(body, { status, headers: jsonHeaders });
}

/** Only the official, deployed Google Apps Script URL is an acceptable destination. */
function getSheetsWebAppUrl(value: string): URL | null {
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.hostname !== "script.google.com" ||
      !/^\/macros\/s\/[^/]+\/exec$/.test(url.pathname) ||
      url.search ||
      url.hash ||
      url.username ||
      url.password
    ) {
      return null;
    }
    return url;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return reply({ error: "Expected a JSON request." }, 415);
  }

  let raw: unknown;
  try {
    const text = await request.text();
    if (text.length > 8000) return reply({ error: "Request is too large." }, 413);
    raw = JSON.parse(text);
  } catch {
    return reply({ error: "Invalid request. Please try again." }, 400);
  }

  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
    return reply({ error: "Invalid request." }, 400);
  }

  // Honeypot: do not store submissions from basic form-filling bots.
  if ("website" in raw && typeof raw.website === "string" && raw.website.trim()) {
    return reply({ ok: true }, 200);
  }

  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again a little later." },
      { status: 429, headers: { ...jsonHeaders, "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const result = validateRsvp(raw);
  if (!result.success) {
    return reply({ error: "Please review your details.", fields: result.errors }, 400);
  }

  const endpoint = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  const sharedSecret = process.env.GOOGLE_SHEETS_SHARED_SECRET;
  if (!endpoint || !sharedSecret || sharedSecret.length < 32) {
    console.error("Google Sheets RSVP configuration is missing or incomplete.");
    return reply({ error: "RSVP is temporarily unavailable. Please contact the couple." }, 503);
  }

  const url = getSheetsWebAppUrl(endpoint);
  if (!url) {
    console.error("Google Sheets RSVP web app URL has an invalid format.");
    return reply({ error: "RSVP is temporarily unavailable. Please contact the couple." }, 503);
  }

  const { name, phone, attending, guests, message } = result.data;
  const sheetsRow = {
    secret: sharedSecret,
    Timestamp: new Date().toISOString(),
    Name: asSpreadsheetText(name),
    Phone: asSpreadsheetText(phone),
    Attending: attending,
    Guests: guests,
    Message: asSpreadsheetText(message),
  };

  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetsRow),
      cache: "no-store",
      // Google Apps Script ContentService redirects to script.googleusercontent.com.
      redirect: "follow",
      signal: AbortSignal.timeout(25000),
    });

    // An RSVP is successful ONLY after the Google Apps Script confirms appendRow.
    if (!response.ok) {
      console.error("Google Sheets RSVP endpoint did not confirm a save; HTTP:", response.status);
      return reply({ error: "We couldn't confirm your RSVP. Please try again." }, 502);
    }

    let confirmed = false;
    try {
      const responseBody = await response.text();
      if (responseBody.length <= 1024) {
        const data: unknown = JSON.parse(responseBody);
        confirmed = !!data && typeof data === "object" && "ok" in data && data.ok === true;
      }
    } catch {
      confirmed = false;
    }

    if (!confirmed) {
      console.error("Google Sheets RSVP endpoint returned no valid save confirmation.");
      return reply({ error: "We couldn't confirm your RSVP. Please try again." }, 502);
    }

    return reply({ ok: true }, 200);
  } catch (error) {
    // Do not log the URL, secret, or guests' personal information.
    console.error("Google Sheets RSVP delivery failed:", error instanceof Error ? error.name : "unknown error");
    return reply({ error: "Something went wrong. Please try again shortly." }, 502);
  }
}
