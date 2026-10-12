import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { asExcelText, validateRsvp } from "@/lib/rsvp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 35;

const jsonHeaders = { "Cache-Control": "no-store" };

function reply(body: object, status: number) {
  return NextResponse.json(body, { status, headers: jsonHeaders });
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

  // Honeypot: bots that fill this invisible field receive a plausible response,
  // without any data being forwarded to the wedding spreadsheet.
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

  const webhookUrl = process.env.EXCEL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("RSVP webhook is not configured.");
    return reply({ error: "RSVP is temporarily unavailable. Please contact the couple." }, 503);
  }

  try {
    const destination = new URL(webhookUrl);
    if (destination.protocol !== "https:") throw new Error("Webhook must use HTTPS");

    const { name, phone, attending, guests, message } = result.data;
    const excelRow = {
      Timestamp: new Date().toISOString(),
      Name: asExcelText(name),
      Phone: asExcelText(phone),
      Attending: attending,
      Guests: guests,
      Message: asExcelText(message),
    };

    const response = await fetch(destination.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(excelRow),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(25000),
    });

    // A bare Power Automate HTTP trigger often returns 202 *before* Excel writes.
    // We require a Response action AFTER "Add a row" returning {"ok":true}.
    if (response.status !== 200) {
      console.error("RSVP flow did not confirm Excel write; HTTP status:", response.status);
      return reply({ error: "We couldn't confirm your RSVP. Please try again." }, 502);
    }

    let confirmed = false;
    try {
      const payload: unknown = await response.json();
      confirmed = !!payload && typeof payload === "object" && "ok" in payload && payload.ok === true;
    } catch {
      confirmed = false;
    }
    if (!confirmed) {
      console.error("RSVP flow returned an unexpected confirmation payload.");
      return reply({ error: "We couldn't confirm your RSVP. Please try again." }, 502);
    }

    return reply({ ok: true }, 200);
  } catch (error) {
    // Avoid printing the confidential webhook URL or any guest information.
    console.error("RSVP delivery failed:", error instanceof Error ? error.name : "unknown error");
    return reply({ error: "Something went wrong. Please try again shortly." }, 502);
  }
}
