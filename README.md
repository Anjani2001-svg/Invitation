# Catholic Wedding Invitation — Next.js + Tailwind CSS

An elegant, mobile-first, single-page invitation for a Catholic Nuptial Mass and wedding reception. Built with the **Next.js App Router**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and a server-only **Google Apps Script → Google Sheets** RSVP endpoint. Deployable to Vercel.

> **Before sharing the invitation:** Anjani & Vihan's date and Sri Lanka event times are set: **Saturday, 22 May 2027** (Nuptial Mass **4:00 PM**, reception **7:00 PM**). The church is now **St. Paul's Church, Waragoda, Kelaniya** (with its Google Maps listing). **Verify the reception venue, website URL and other sample details before sharing.** RSVP storage requires a Google Sheet, an Apps Script web app and two private server environment variables; without them, the form reports RSVP as unavailable rather than pretending to save data.

## 1. Quick start

**Requirements:** Node.js 20.9+ (Node 22 LTS recommended), npm, a Google account to own the RSVP sheet and Apps Script, and optionally GitHub and Vercel accounts. No Microsoft account is needed.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit **http://localhost:3000**. The invitation itself runs without a connected spreadsheet, but a real RSVP cannot be saved until section 3 below is completed.

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
| `date.iso` | **Wedding Mass start** in ISO 8601 with `+05:30` (Sri Lanka time), currently `2027-05-22T16:00:00+05:30`. Drives the countdown. |
| `date.display`, `date.short` | Human-readable wedding date labels |
| `verse` | Optional scripture text and reference (edit/replace as desired) |
| `invitation` | Short invitation from both families |
| `ceremony` | St. Paul's Church in Waragoda, Kelaniya; Mass time; Google Maps embed and directions (already filled in) |
| `reception` | Reception time and description |
| `location` | Reception venue, Google Maps embed and directions URL (still the original Royal Ramsess details; confirm independently) |
| `dressCode` | Set to `""` to hide it |
| `rsvp` | Short RSVP guidance and response note |

**Photo:** Replace `public/couple.jpg` with an actual couple portrait **using the same filename**. The included JPG is a decorative, clearly labelled placeholder. A portrait composition around 1000 × 1350 px works well. The image uses `next/image` with responsive image optimisation. The same image supplies WhatsApp/Open Graph previews; verify how the portrait crops in social previews. For a dedicated horizontal social card, see the optional OG note below.

**Music:** Replace `public/music.mp3` with a properly licensed instrumental MP3 if preferred. The included track is an original, generated soft instrumental demo. It plays at 40% volume and loops. Playback only starts after tapping **Open invitation**; the floating control pauses/resumes playback and remembers the user's preference locally. Music may not play if the device is muted or its browser disables sound.

**Google Maps:** The location section has **Nuptial Mass** and **Reception** tabs, with an embedded map for each. The Mass tab points to **St. Paul's Church, Waragoda, Kelaniya**; its Directions URL uses Google's specific place ID so it will not route guests to a different St. Paul's Church. Map previews use API-key-free search embeds. Confirm that both embedded previews resolve correctly when deployed; the **Open Google Maps** buttons are the reliable alternative. The original reception map is unchanged and its venue should be checked before sharing.

**US time zones:** In **The wedding day**, US guests can choose **Eastern, Central, Mountain or Pacific**; both event cards show the converted time and date. The site uses IANA time zones and accounts for daylight saving on 22 May 2027 automatically. Sri Lanka time always appears alongside the US time. Google and Apple/Outlook calendar buttons are equal-width/equal-height on wider screens, full-width on narrow phones, and generate events using the correct instant so calendar apps display local time.

**Bible verse:** The starter copy is 1 Corinthians 13:4. You can remove it from the Hero markup if you prefer not to display a verse.

## 3. Connect RSVPs to Google Sheets (no Microsoft account)

This project now uses **Next.js -> Google Apps Script -> Google Sheets**. All existing RSVP fields and the invitation design are unchanged. The guest's browser posts to `/api/rsvp`; the server checks the form, rate-limits requests, and securely forwards data to Apps Script. After the script appends a row and returns `{ "ok": true }`, the website displays a confirmation.

You need only a **Google account** to own the spreadsheet and Apps Script. Guests do not need accounts. Google Sheets itself must remain private. The full, beginner-friendly setup guide is **`docs/GOOGLE_SHEETS_SETUP.md`**.

**Summary of setup:**

1. Upload `docs/Wedding-RSVPs-Google-Sheets-Template.xlsx` to Google Drive and save it as a native Google Sheet.
2. Open **Extensions > Apps Script**, paste `docs/google-apps-script/Code.gs`, and save it.
3. In **Apps Script > Project Settings > Script Properties**, set `RSVP_SHEET_ID` to the spreadsheet ID and `RSVP_SHARED_SECRET` to a private, randomly generated value of at least 32 characters.
4. **Deploy > New deployment > Web app** with **Execute as Me** and **Who has access: Anyone**, if that deployment permission is available to your account. Authorise as the script owner. Copy the `/exec` URL.
5. Configure these two **server-side** values in `.env.local`, and also in Vercel Production environment settings when deployed:

   ```dotenv
   GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/EXAMPLE_ID/exec
   GOOGLE_SHEETS_SHARED_SECRET=YOUR_LONG_RANDOM_PRIVATE_SECRET
   ```

6. Redeploy the website. Submit one **Yes** and one **No** RSVP and check that new rows appear in the private `RSVPs` sheet.

**Spreadsheet columns:** `Timestamp | Name | Phone | Attending | Guests | Message`.

**Important security details:** The `GOOGLE_SHEETS_SHARED_SECRET` exists only in the server environment and Apps Script properties, never in website code or the spreadsheet. Apps Script executes under the spreadsheet owner's account, but checks the secret before writing. The endpoint deliberately requires a JSON `ok: true` confirmation before telling a guest their response was saved. Apps Script ContentService redirects JSON responses through `script.googleusercontent.com`, so the server follows that Google redirect.

**Troubleshooting:** A 503 response usually means missing or invalid server configuration. A 502 means the spreadsheet write was not confirmed; check the Apps Script execution logs, deployment access, `RSVP_SHEET_ID`, secret, and exact `RSVPs` tab headers. An Apps Script `/exec` URL opened directly in a browser returns `{ "ok": false }` by design. Managed Workspace accounts may block web apps accessible to anyone. There may also be Google Apps Script service quotas. A timeout after a successful write can still create a duplicate if retried; check the sheet first.

For details and source documentation, open **`docs/GOOGLE_SHEETS_SETUP.md`**.

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
5. Open **Project → Settings → Environment Variables**. Add **`GOOGLE_SHEETS_WEBAPP_URL`** and **`GOOGLE_SHEETS_SHARED_SECRET`** using the values from section 3. Select **Production** and any Preview environments you intend to test. Do **not** prefix either variable with `NEXT_PUBLIC_`.
6. **Redeploy** the latest production deployment after adding the environment variable so the server function has access to it.
7. Copy the resulting HTTPS address (e.g. `https://our-wedding-abc.vercel.app`), paste it into `wedding.siteUrl` in `config/wedding.ts`, commit and push so the generated Open Graph metadata points to the right domain.
8. Test a Yes and No RSVP **on the production URL** and check the private Google Sheets `RSVPs` tab.
9. To connect an optional custom domain: **Vercel Project → Settings → Domains → Add**, enter the domain, follow Vercel's DNS instructions, then update `wedding.siteUrl` to that final HTTPS domain and redeploy.
10. Share the deployed URL on WhatsApp. For the cleanest link preview, share it only **after** replacing `public/couple.jpg`, updating the names and `siteUrl`, and confirming Open Graph metadata.

> Changes pushed to your connected GitHub branch can trigger future Vercel deployments automatically. Environment variables are set in Vercel, **not** in the GitHub repo.

Optional: a portrait JPG is used for the social preview because it always stays in sync with the hero photo. WhatsApp may crop it. For a 1200 × 630 horizontal card, create `public/og-wedding.jpg`, change the `openGraph.images` and `twitter.images` URLs in `app/layout.tsx` to that asset, and preview the link again.

## 5. Testing checklist

- [ ] Verify the names and 22 May 2027 schedule; St. Paul's Church, Waragoda, Kelaniya is already entered. Confirm reception venue/location in `config/wedding.ts`.
- [ ] Verify the Mass and reception times, Colombo time zone (`+05:30`), and countdown.
- [ ] Replace `public/couple.jpg` and optionally `public/music.mp3`.
- [ ] On iPhone Safari and Android Chrome, tap **Open invitation**: page opens and music plays (subject to user device settings).
- [ ] Pause music, refresh, reopen: preference remains muted; manually resume and verify playback.
- [ ] Check at 320 px, 390 px, 768 px and desktop; time-zone pills, calendar buttons and map tabs remain tappable without overflow.
- [ ] Select Eastern / Central / Mountain / Pacific and verify Mass US times 6:30 / 5:30 / 4:30 / 3:30 AM, reception 9:30 / 8:30 / 7:30 / 6:30 AM on 22 May 2027. Calendar downloads/openings should match the event instant.
- [ ] Submit **RSVP Yes** with 1 guest; see confirmation and verify `Attending=Yes`, `Guests=1` in Google Sheets.
- [ ] Submit **RSVP Yes** with 5 guests; verify `Guests=5` in Google Sheets.
- [ ] Submit **RSVP No**; guest selector is hidden, no-success copy is friendly, Google Sheets shows `Attending=No`, `Guests=0`.
- [ ] Submit without a name or attendance choice: client-side validation blocks submission.
- [ ] Submit an invalid phone number: see a helpful validation message.
- [ ] Check both Google Maps tabs and **Open Google Maps** links: the Mass should point to St. Paul's Church in Waragoda (not Colombo/Kandy), and reception should point to the correct Royal Ramsess venue.
- [ ] Temporarily remove the Google Sheets environment variables: the form shows an error rather than a false success.
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
  usa-time-selector.tsx  # US regional clock picker
  calendar-actions.tsx   # Matched Google / Apple-Outlook buttons
  ornaments.tsx
  reveal.tsx
  rsvp-form.tsx
  section-title.tsx
  wedding-experience.tsx
config/wedding.ts         # Edit all names, copy, dates and links here
docs/GOOGLE_SHEETS_SETUP.md                  # Step-by-step setup and troubleshooting
docs/Wedding-RSVPs-Google-Sheets-Template.xlsx
docs/google-apps-script/Code.gs              # Server-side Google Apps Script
lib/us-time.ts           # Daylight-saving-aware US wedding time conversion
lib/rate-limit.ts         # Basic per-instance 5/15-minute IP limiter
lib/rsvp.ts               # Shared validation and spreadsheet text safety
public/couple.jpg         # Replace with wedding portrait
public/music.mp3          # Original placeholder tune; replace if desired
tests/rsvp.test.mjs
.env.example
README.md
```

## 7. Production safety and scaling

- The backend validates guest inputs again, uses a hidden honeypot, enforces a maximum JSON body length, forwards only the six expected spreadsheet fields plus a server-side secret, and never returns the Apps Script URL or secret to the client.
- **Rate limiting is best-effort**, based on IP and **in-memory state** (five requests per 15 minutes per warm server process). Vercel serverless functions can scale to multiple instances, so this does **not** provide a durable cross-instance guarantee. For a high-traffic public invitation, enable Vercel Firewall/WAF protections or replace `lib/rate-limit.ts` with a Redis-backed limiter (e.g., Upstash).
- The Apps Script deployment must allow anonymous access for the site server to call it without Google OAuth, but requires a long shared secret before it writes. If your Google Workspace account blocks such deployments, choose an approved authenticated backend instead. Apps Script quotas and availability apply.
- This template does not send confirmation SMS/email, keep a guest list publicly accessible or automatically prevent intentional duplicate submissions. You can add those later if needed.

---

Created to celebrate love, faith and a beautiful beginning. ♡
