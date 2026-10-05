export async function POST(request) {
  try {
    const data = await request.json();

    const endpoint = process.env.GOOGLE_SHEET_URL;

    if (!endpoint) {
      return Response.json(
        { error: "GOOGLE_SHEET_URL is missing" },
        { status: 500 }
      );
    }

    const googleResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (!googleResponse.ok) {
      const text = await googleResponse.text();

      console.error(
        "Google Apps Script error:",
        googleResponse.status,
        text
      );

      return Response.json(
        { error: "Google Sheet submission failed" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}