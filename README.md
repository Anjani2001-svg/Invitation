# Catholic Wedding Invitation — Next.js + Tailwind CSS

An elegant, mobile-first, single-page invitation for a Catholic Nuptial Mass and wedding reception. Built with the **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and a server-only **Power Automate → Excel Online** RSVP endpoint. Deployable to Vercel.

> **Before sharing the invitation:** All names, wedding dates, church details and times are *sample values*. Update them in `config/wedding.ts`. RSVP storage requires a Power Automate flow and `EXCEL_WEBHOOK_URL`; without the webhook, the form intentionally reports that RSVP is unavailable rather than pretending to save data.

## 1. Quick start

**Requirements:** Node.js 20.9+ (Node 22 LTS recommended), npm, a Microsoft account with suitable Power Automate/Excel access, and optionally GitHub and Vercel accounts.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit **http://localhost:3000**. The invitation itself runs without any webhook, but a real RSVP cannot be saved until section 3 below is completed.

Useful commands:

```bash
npm run test         # basic validation and rate-limiter tests (Node 22+)
npm run typecheck    # TypeScript
npm run lint         # ESLint
npm run build        # production build
npm run start        # run production build locally
```

`next/font/google` downloads and self-hosts the fonts at build time. A build machine must have access to Google Fonts; Vercel normally does.

## 2. Personalise your invitation

Edit **only `config/wedding.ts` for all event information and wording**:

| Setting | What to change |
| --- | --- |
| `bride`, `groom`, `hashtag` | Full names and preferred wedding hashtag |
| `siteUrl` | The real `https://...` Vercel/custom domain, for canonical link previews |
| `date.iso` | **Wedding Mass start** in ISO 8601 with `+05:30` (Sri Lanka time), e.g. `2027-02-14T10:00:00+05:30`. Drives the countdown. |
| `date.display`, `date.short` | Human-readable wedding date labels |
| `verse` | Optional scripture text and reference (edit/replace as desired) |
| `invitation` | Short invitation from both families |
| `ceremony` | Church name, address, time and optional directions URL |
| `reception` | Reception time and description |
| `location` | Royal Ramsess venue label, Google Maps embed URL and directions URL |
| `dressCode` | Set to `""` to hide it |
| `rsvp` | Short RSVP guidance and response note |

**Photo:** Replace `public/couple.jpg` with an actual couple portrait **using the same filename**. The included JPG is a decorative, clearly labelled placeholder. A portrait composition around 1000 × 1350 px works well. The image uses `next/image` with responsive image optimisation. The same image supplies WhatsApp/Open Graph previews; verify how the portrait crops in social previews. For a dedicated horizontal social card, see the optional OG note below.

**Music:** Replace `public/music.mp3` with a properly licensed instrumental MP3 if preferred. The included track is an original, generated soft instrumental demo. It plays at 40% volume and loops. Playback only starts after tapping **Open invitation**; the floating control pauses/resumes playback and remembers the user's preference locally. Music may not play if the device is muted or its browser disables sound.

**Google Maps:** The embedded map uses a Google Maps search URL, so no API key is required. Check that Google resolves the correct venue; if not, update both URLs in the config to the verified listing or place ID. The external directions link opens Google Maps.

**Bible verse:** The starter copy is 1 Corinthians 13:4. You can remove it from the Hero markup if you prefer not to display a verse.

## 3. Connect RSVPs to Excel Online on OneDrive

The browser posts JSON only to **`/api/rsvp`**. The Next.js API route validates inputs, limits basic spam, converts them to the Excel column names, adds a UTC timestamp, and forwards the payload to the private Power Automate HTTP endpoint. The webhook URL never appears in browser code.

### 3A. Create and prepare the workbook

1. Sign in to Excel for the web through **OneDrive for Business** (Microsoft 365 work/school account) or SharePoint.
2. Create a file, for example **`Wedding-RSVPs.xlsx`**.
3. In row 1, add the six headers, **exactly** as follows and in this order:

   `Timestamp | Name | Phone | Attending | Guests | Message`

4. Select the header row and a blank row under it, then **Insert → Table** (tick **My table has headers**).
5. Under **Table Design → Table Name**, name the table **`RSVPs`** (no spaces). Save the workbook.
6. Leave the table editable. Avoid simultaneously modifying the Excel workbook in multiple clients while the flow adds rows.

**Which OneDrive?** The action **Excel Online (Business) → Add a row into a table** works with **OneDrive for Business**, SharePoint, and certain Microsoft 365 group libraries. For a **personal OneDrive / consumer Microsoft account**, use the separate **Excel Online (OneDrive)** connector if available in your Power Automate account; select the same `RSVPs` table there. These are distinct connectors. If neither connector/trigger is available with your licence, consider Microsoft Graph or another RSVP storage provider.

### 3B. Create the HTTP-triggered flow

1. Open **https://make.powerautomate.com/** and sign in with the account that can edit the workbook.
2. Create a new cloud flow with the **Request → When an HTTP request is received** trigger. Depending on the Power Automate designer, you may start from a blank automated flow or add the trigger after creating a flow.
3. In **Request Body JSON Schema**, paste `docs/power-automate-schema.json` below (the same schema is in the file):

```json
{
  "type": "object",
  "properties": {
    "Timestamp": { "type": "string", "format": "date-time" },
    "Name": { "type": "string" },
    "Phone": { "type": "string" },
    "Attending": { "type": "string", "enum": ["Yes", "No"] },
    "Guests": { "type": "integer", "minimum": 0, "maximum": 5 },
    "Message": { "type": "string" }
  },
  "required": ["Timestamp", "Name", "Phone", "Attending", "Guests", "Message"]
}
```

4. **Authentication setting (important):** This project's basic server-to-flow webhook does **not** send Microsoft Entra bearer tokens. In the trigger's **Who can trigger the flow?** setting, select **Anyone** if your organisation permits it. Newer flows may default to **Any user in my tenant**, which requires OAuth and would return HTTP 401 for this starter code. The `Anyone` setting grants access to anyone possessing the secret signed trigger URL, so keep that URL private. If your organisation prohibits anonymous triggers, don't bypass its security policy; implement the Microsoft Entra service-principal OAuth variant instead.
5. Add an **Excel Online (Business) → Add a row into a table** action. Choose the **Location** (OneDrive for Business or SharePoint), **Document Library**, **File**, and **Table = RSVPs**.
6. Map each Excel column to its identically named value from the HTTP trigger's Dynamic Content (or expressions `triggerBody()?['Name']`, etc.):

   | Excel column | Request field |
   | --- | --- |
   | Timestamp | `Timestamp` |
   | Name | `Name` |
   | Phone | `Phone` |
   | Attending | `Attending` |
   | Guests | `Guests` |
   | Message | `Message` |

7. **Mandatory for reliable confirmation:** Add a **Response** action **after** the Excel action (in the success path). Set **Status Code = 200**, `Content-Type = application/json` and Response Body to:

   ```json
   { "ok": true }
   ```

   This is essential: without a Response action, an HTTP-triggered flow may return `202 Accepted` immediately, even if the Excel action fails later. The API deliberately only treats **HTTP 200 plus `{ "ok": true }`** as a confirmed RSVP. If possible, add a separate **Response (500)** action configured to run after the Excel action fails/times out, to provide explicit failure feedback.
8. **Save the flow** and copy the **HTTP POST URL** from the trigger. This URL is a secret and may contain a signed access token. **Never paste it into React, `config/wedding.ts`, a public README, or a GitHub repository.**
9. Locally, add the URL to **`.env.local`**:

   ```dotenv
   EXCEL_WEBHOOK_URL=https://YOUR-PRIVATE-POWER-AUTOMATE-POST-URL
   ```

10. Restart `npm run dev` after changing `.env.local`. Submit a real Yes RSVP and inspect **Power Automate → My flows → Run history**, then verify the new row inside the `RSVPs` table.

### Example JSON sent to Power Automate

```json
{
  "Timestamp": "2027-02-01T11:42:00.000Z",
  "Name": "Example Guest",
  "Phone": "+94 77 123 4567",
  "Attending": "Yes",
  "Guests": 2,
  "Message": "Congratulations and blessings!"
}
```

For **No** RSVPs, `Attending` is `"No"` and `Guests` is `0`. The timestamp is ISO UTC, produced by the server rather than trusting the visitor's device. The API prefixes potentially dangerous Excel formula characters (`=`, `+`, `-`, `@`) with a text marker to prevent formula injection.

### Notes and troubleshooting

- **503 error / RSVP unavailable:** `EXCEL_WEBHOOK_URL` has not been configured on the Next.js server.
- **401/403 from the flow:** Verify who can trigger the flow (see step 4) and that the trigger URL has not expired or been regenerated.
- **502 / couldn't confirm:** Verify the Excel step succeeded **and** the final Response action returns HTTP 200 with a JSON object containing `ok: true`. A bare 202 is rejected intentionally.
- **Excel table missing:** Confirm the range was converted to a real **Table** named `RSVPs` rather than being a plain worksheet, and that your account has edit access.
- **Row appears late:** Microsoft's Excel connector can take a short time to reflect a write. Check the flow run history before retrying; repeated retries after timeouts can produce duplicate rows.
- **Premium licensing:** Microsoft licensing and your tenant's policies may restrict availability of HTTP request triggers/flow actions. Check your plan with the Microsoft 365 administrator before launch.
- **Privacy:** Names, phone numbers and optional notes are personal data. Restrict workbook access, define a reasonable retention period, and include an appropriate privacy disclosure before public launch.

Official connector and authentication references:

- [Excel Online (Business) connector](https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/)
- [Excel Online (OneDrive/personal) connector](https://learn.microsoft.com/en-us/connectors/excelonline/)
- [Microsoft: HTTP trigger authentication](https://learn.microsoft.com/en-us/power-automate/oauth-authentication)
- [Microsoft: Secure inputs and outputs](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-secure-inputs-outputs-triggers)

## 4. Deploy on Vercel through GitHub

1. Make a new **private GitHub repository** (or a public repository if you are comfortable publishing the wedding source code). Do not upload `.env.local`.
2. From the project folder, commit and push:

   ```bash
   git init
   git add .
   git commit -m "Create wedding invitation"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. Sign in to **https://vercel.com/** → **Add New → Project** → **Import** your GitHub repository.
4. Vercel should detect **Next.js** automatically. Keep its default install/build settings and deploy. It will install the project dependencies and build the App Router application.
5. Open **Project → Settings → Environment Variables**. Add **`EXCEL_WEBHOOK_URL`** with the actual private HTTP POST URL; select **Production** and any Preview environments you intend to test. Do **not** prefix the variable with `NEXT_PUBLIC_`.
6. **Redeploy** the latest production deployment after adding the environment variable so the server function has access to it.
7. Copy the resulting HTTPS address (e.g. `https://our-wedding-abc.vercel.app`), paste it into `wedding.siteUrl` in `config/wedding.ts`, commit and push so the generated Open Graph metadata points to the right domain.
8. Test a Yes and No RSVP **on the production URL** and check the Excel `RSVPs` table.
9. To connect an optional custom domain: **Vercel Project → Settings → Domains → Add**, enter the domain, follow Vercel's DNS instructions, then update `wedding.siteUrl` to that final HTTPS domain and redeploy.
10. Share the deployed URL on WhatsApp. For the cleanest link preview, share it only **after** replacing `public/couple.jpg`, updating the names and `siteUrl`, and confirming Open Graph metadata.

> Changes pushed to your connected GitHub branch can trigger future Vercel deployments automatically. Environment variables are set in Vercel, **not** in the GitHub repo.

Optional: a portrait JPG is used for the social preview because it always stays in sync with the hero photo. WhatsApp may crop it. For a 1200 × 630 horizontal card, create `public/og-wedding.jpg`, change the `openGraph.images` and `twitter.images` URLs in `app/layout.tsx` to that asset, and preview the link again.

## 5. Testing checklist

- [ ] Replace all names, example wedding dates/times and church details in `config/wedding.ts`.
- [ ] Verify the Mass and reception times, Colombo time zone (`+05:30`), and countdown.
- [ ] Replace `public/couple.jpg` and optionally `public/music.mp3`.
- [ ] On iPhone Safari and Android Chrome, tap **Open invitation**: page opens and music plays (subject to user device settings).
- [ ] Pause music, refresh, reopen: preference remains muted; manually resume and verify playback.
- [ ] Check layout at 320 px and 390 px widths; links, text and controls remain usable.
- [ ] Submit **RSVP Yes** with 1 guest; see confirmation and verify `Attending=Yes`, `Guests=1` in Excel.
- [ ] Submit **RSVP Yes** with 5 guests; verify `Guests=5` in Excel.
- [ ] Submit **RSVP No**; guest selector is hidden, no-success copy is friendly, Excel shows `Attending=No`, `Guests=0`.
- [ ] Submit without a name or attendance choice: client-side validation blocks submission.
- [ ] Submit an invalid phone number: see a helpful validation message.
- [ ] Check the Google Maps iframe and **Get directions** link point to the correct Royal Ramsess listing.
- [ ] Temporarily remove webhook setting: the form shows an error rather than a false success.
- [ ] Verify title, description, portrait thumbnail and HTTPS link when shared on WhatsApp.
- [ ] Run `npm run test`, `npm run typecheck`, `npm run lint`, `npm run build` before launch.

## 6. Project structure

```text
app/
  api/rsvp/route.ts      # Protected-by-env Next.js POST endpoint
  globals.css            # Tailwind theme + small custom styles
  icon.svg               # Cross favicon
  layout.tsx             # Fonts, SEO + Open Graph image
  page.tsx               # Single-page invitation
components/
  countdown.tsx
  event-card.tsx
  ornaments.tsx
  reveal.tsx
  rsvp-form.tsx
  section-title.tsx
  wedding-experience.tsx
config/wedding.ts         # Edit all names, copy, dates and links here
docs/power-automate-schema.json
lib/rate-limit.ts         # Basic per-instance 5/15-minute IP limiter
lib/rsvp.ts               # Shared validation and Excel text safety
public/couple.jpg         # Replace with wedding portrait
public/music.mp3          # Original placeholder tune; replace if desired
tests/rsvp.test.mjs
.env.example
README.md
```

## 7. Production safety and scaling

- The backend validates guest inputs again, uses a hidden honeypot, enforces a maximum JSON body length, forwards only a known six-column payload, and never returns the private webhook URL to the client.
- **Rate limiting is best-effort**, based on IP and **in-memory state** (five requests per 15 minutes per warm server process). Vercel serverless functions can scale to multiple instances, so this does **not** provide a durable cross-instance guarantee. For a high-traffic public invitation, enable Vercel Firewall/WAF protections or replace `lib/rate-limit.ts` with a Redis-backed limiter (e.g., Upstash).
- If your organisation requires an **authenticated HTTP flow**, implement Microsoft Entra ID service-to-service authentication (with confidential server-side credentials) or consider the **Microsoft Graph API** to append table rows through an Azure app registration. Graph requires tenant/app permissions, token acquisition and careful workbook write permissions; it is intentionally not hidden behind a fictional "public OneDrive link" shortcut.
- This template does not send confirmation SMS/email, keep a guest list publicly accessible or automatically prevent intentional duplicate submissions. You can add those later if needed.

---

Created to celebrate love, faith and a beautiful beginning. ♡
