/**
 * Wedding RSVP collector for Google Sheets (no Microsoft account needed).
 *
 * Setup:
 *   1. Import docs/Wedding-RSVPs-Google-Sheets-Template.xlsx into Google Sheets.
 *   2. Open Extensions > Apps Script, then paste this into Code.gs.
 *   3. Project Settings > Script Properties:
 *        RSVP_SHEET_ID       = ID from the Google Sheets URL
 *        RSVP_SHARED_SECRET  = a randomly generated 32+-character secret
 *   4. Deploy > New deployment > Web app:
 *        Execute as: Me
 *        Who has access: Anyone
 *   5. In your Next.js server/Vercel, configure GOOGLE_SHEETS_WEBAPP_URL
 *      and GOOGLE_SHEETS_SHARED_SECRET. Never use NEXT_PUBLIC_ for either.
 *
 * No spreadsheet sharing is needed for guests. Keep the Sheet private.
 */

const RSVP_SHEET_TAB_ = 'RSVPs';
const RSVP_HEADERS_ = ['Timestamp', 'Name', 'Phone', 'Attending', 'Guests', 'Message'];

/** Return JSON only: never expose guest data or secrets in the response. */
function rsvpResult_(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok === true }))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Constant-work comparison for equally sized secret strings. */
function matchesSecret_(given, expected) {
  if (typeof given !== 'string' || typeof expected !== 'string' ||
      expected.length < 32 || given.length !== expected.length) return false;
  let difference = 0;
  for (let i = 0; i < expected.length; i++) {
    difference |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return difference === 0;
}

/** Keep user-supplied text as text, never as a spreadsheet formula. */
function safeSpreadsheetText_(value) {
  const text = value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '');
  return /^[\s]*[=+\-@]/.test(text) ? "'" + text : text;
}

function isValidRsvp_(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return false;
  if (typeof body.Timestamp !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(body.Timestamp) ||
      !Number.isFinite(Date.parse(body.Timestamp))) return false;
  if (typeof body.Name !== 'string' || body.Name.trim().length < 2 || body.Name.length > 110) return false;
  if (typeof body.Phone !== 'string' || body.Phone.length > 35) return false;
  if (typeof body.Message !== 'string' || body.Message.length > 510) return false;
  if (body.Attending !== 'Yes' && body.Attending !== 'No') return false;
  if (!Number.isInteger(body.Guests) || body.Guests < 0 || body.Guests > 5) return false;
  if (body.Attending === 'Yes' && body.Guests < 1) return false;
  if (body.Attending === 'No' && body.Guests !== 0) return false;
  return true;
}

/** Triggered by POST requests from the wedding website's Next.js API route. */
function doPost(e) {
  try {
    const properties = PropertiesService.getScriptProperties();
    const secret = properties.getProperty('RSVP_SHARED_SECRET');
    const spreadsheetId = properties.getProperty('RSVP_SHEET_ID');
    if (!secret || !spreadsheetId || secret.length < 32) return rsvpResult_(false);
    if (!e || !e.postData || typeof e.postData.contents !== 'string' ||
        e.postData.contents.length > 8000) return rsvpResult_(false);

    const body = JSON.parse(e.postData.contents);
    if (!body || !matchesSecret_(body.secret, secret) || !isValidRsvp_(body)) {
      return rsvpResult_(false);
    }

    // Serialise writes when guests submit at almost the same moment.
    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) return rsvpResult_(false);
    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = spreadsheet.getSheetByName(RSVP_SHEET_TAB_);
      if (!sheet) throw new Error('RSVPs tab is missing');
      const headers = sheet.getRange(1, 1, 1, RSVP_HEADERS_.length).getDisplayValues()[0];
      if (!RSVP_HEADERS_.every(function (header, index) { return header === headers[index]; })) {
        throw new Error('RSVPs tab has incorrect column headers');
      }

      sheet.appendRow([
        body.Timestamp,
        safeSpreadsheetText_(body.Name),
        safeSpreadsheetText_(body.Phone),
        body.Attending,
        body.Guests,
        safeSpreadsheetText_(body.Message),
      ]);
      SpreadsheetApp.flush();
      return rsvpResult_(true);
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    // Diagnostic details are limited to the Apps Script execution log.
    console.error('RSVP write failed:', error instanceof Error ? error.message : 'unknown error');
    return rsvpResult_(false);
  }
}

/** Visiting the script URL in a browser is not how to test an RSVP. */
function doGet() {
  return rsvpResult_(false);
}
