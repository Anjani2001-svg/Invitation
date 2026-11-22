# Set up Google Sheets RSVP storage (no Microsoft account)

This version of the wedding website keeps the existing invitation and RSVP form. It replaces the old **Power Automate -> Excel Online** connection with **Next.js -> Google Apps Script -> Google Sheets**.

**You need:** a Google account, permission to deploy an Apps Script web app, and your wedding website's existing hosting (for example Vercel). **You do NOT need a Microsoft account, Power Automate, Microsoft 365, or Excel Online.** The Google Sheet must remain private. The wedding guests do not need Google accounts.

## Step 1 - Create your Google spreadsheet

1. Download `Wedding-RSVPs-Google-Sheets-Template.xlsx` from the `docs/` folder.
2. In [Google Drive](https://drive.google.com/), choose **New > File upload** and upload the `.xlsx` file.
3. Open the uploaded workbook with Google Sheets. Choose **File > Save as Google Sheets** if it is still in Excel editing mode.
4. Confirm that the spreadsheet has a tab named **`RSVPs`**. Its first row must be exactly:

   `Timestamp | Name | Phone | Attending | Guests | Message`

5. The optional `Summary` tab counts responses and guests. Do not change the name or headers of the `RSVPs` tab.
6. Copy the **spreadsheet ID** from the URL:

   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`

Keep the spreadsheet private. Do not enable public link-sharing: wedding guests only interact with your website.

## Step 2 - Add the Apps Script

1. From the newly saved **Google Sheets** file, choose **Extensions > Apps Script**.
2. Delete the starter function in `Code.gs` and replace it with the entire content of `docs/google-apps-script/Code.gs` in this project.
3. Save the script. A descriptive project name is `Wedding RSVP collector`.
4. Open **Project Settings** (gear icon) in the Apps Script left sidebar.
5. Under **Script Properties**, add both properties:

   | Property | Value |
   | --- | --- |
   | `RSVP_SHEET_ID` | The spreadsheet ID copied in Step 1 |
   | `RSVP_SHARED_SECRET` | A new, randomly generated private string of at least 32 characters |

   A convenient way to generate a secret if Node.js is installed:

   ```bash
   node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
   ```

   Store the secret in a password manager. Do not put it in the website source code or a public GitHub repository.

## Step 3 - Deploy the Apps Script as a web app

1. Select **Deploy > New deployment** in the Apps Script editor.
2. Choose the **Web app** deployment type.
3. Set **Execute as: Me** (the Google account that can edit the sheet).
4. Set **Who has access: Anyone**. This means the website server can contact the Apps Script endpoint without a Google sign-in; it does **not** make the spreadsheet public. The endpoint checks `RSVP_SHARED_SECRET` before saving.
5. Select **Deploy** and complete the Google authorisation screens as the script owner.
6. Copy the **Web app URL** ending in `/exec`, such as:

   `https://script.google.com/macros/s/EXAMPLE_DEPLOYMENT_ID/exec`

**Important:** Do not use the `/dev` test URL. If your organisation restricts **Anyone** access, this method may not be available in that Google account; use an allowed account or a different authenticated backend. The `/exec` endpoint is intended to be called by the website server, not by directly opening it in a browser.

## Step 4 - Connect your website

In the wedding project, add these two environment variables to a new `.env.local` file for local development:

```dotenv
GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/EXAMPLE_DEPLOYMENT_ID/exec
GOOGLE_SHEETS_SHARED_SECRET=THE_SAME_SECRET_FROM_STEP_2
```

Replace the examples with your real URL and secret. Keep both values on the **server only**; never prefix them with `NEXT_PUBLIC_`.

If your site is deployed on **Vercel**, add the two variables in **Project > Settings > Environment Variables**, select the right environments (especially Production), and **redeploy**. If the site was previously deployed with the Power Automate version, deploy this updated project code first. You can then remove the old `EXCEL_WEBHOOK_URL` value from Vercel because it is no longer used.

## Step 5 - Test it end to end

1. Run the updated wedding website locally or open the updated live site.
2. Submit an RSVP with **Yes** and 2 guests. Confirm the website says it was received, then open Google Sheets > **RSVPs** and verify a row with `Attending=Yes` and `Guests=2`.
3. Submit a **No** RSVP. Confirm another row with `Attending=No` and `Guests=0`.
4. Review the `Summary` tab to see updated counts.
5. If a response fails, check **Apps Script > Executions** (for Apps Script errors), your Vercel function logs, and both environment variables. If you edited the Apps Script code after deploying it, update the web app deployment to a new version.

**Privacy:** The sheet stores guest names and possibly phone numbers and personal messages. Keep sharing restricted, restrict access to the Apps Script project, and delete submissions when no longer needed.

## Troubleshooting

- **The RSVP form says unavailable (503)**: the two Vercel/server environment variables are missing, invalid, or not loaded after a redeploy. The secret must be at least 32 characters.
- **The website says it could not confirm the RSVP (502)**: check the Apps Script web app `/exec` URL, deployment permissions, script properties, `RSVPs` tab name and its exact six headers.
- **The Apps Script URL shows `{"ok":false}` when I visit it directly**: expected. A browser GET request is not a signed RSVP submission.
- **I can submit locally, but not on the live site**: add the two variables to the **production** environment on Vercel and redeploy.
- **New Apps Script changes do not appear**: edit your existing deployment and publish a new version. The `/exec` endpoint uses the deployed version.
- **The spreadsheet is accessible publicly**: turn off broad file sharing. Only your server needs access to the protected Apps Script web app; the sheet itself stays private.
- **Google requires sign-in when the website posts**: verify access is **Anyone**, not **Anyone with Google account**. Some managed Google Workspace accounts restrict public deployments.
- **Possible duplicate row after a network timeout**: check the spreadsheet before retrying. A write may have succeeded even if your website lost the confirmation response.

## Official Google references

- Web apps: https://developers.google.com/apps-script/guides/web
- Content service redirects: https://developers.google.com/apps-script/guides/content
- Script properties: https://developers.google.com/apps-script/guides/properties
- Google Sheets appendRow: https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendrowrowcontents
- Apps Script quotas: https://developers.google.com/apps-script/guides/services/quotas
