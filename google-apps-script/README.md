# Google Sheet form setup

Create a Google Sheet and rename the destination tab to `Leads` (or change `SHEET_NAME` in `Code.gs`). Put these headers in row 1:

`Timestamp | Name | Email | Company | Website | Service | Project | Budget | Submitted At | Source`

Open **Extensions -> Apps Script**, replace `Code.gs` with the provided script, then choose **Deploy -> New deployment -> Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone**. Deploy and copy the Web App URL ending in `/exec`.

At the project root, create `.env.local` from `.env.example` and paste the URL:

```env
NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart `npm run dev` after changing the environment file. On Vercel/another host, add the same environment variable in the project's environment settings and redeploy.
