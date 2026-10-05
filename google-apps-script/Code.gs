/**
 * NasCore website -> Google Sheets form receiver.
 *
 * 1. Create/open your Google Sheet.
 * 2. Extensions -> Apps Script.
 * 3. Paste this file into Code.gs.
 * 4. Set SHEET_NAME below to the tab that should receive leads.
 * 5. Deploy -> New deployment -> Web app.
 * 6. Execute as: Me. Who has access: Anyone.
 * 7. Copy the /exec URL into NEXT_PUBLIC_GOOGLE_SHEET_URL in .env.local.
 */

const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error(`Sheet tab "${SHEET_NAME}" was not found.`);

    const p = e.parameter || {};
    sheet.appendRow([
      new Date(),
      p.name || "",
      p.email || "",
      p.company || "",
      p.website || "",
      p.service || "",
      p.project || "",
      p.budget || "",
      p.submittedAt || "",
      p.source || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
