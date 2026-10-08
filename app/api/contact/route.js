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

    // Convert JSON from frontend into normal form data
    const params = new URLSearchParams();

    params.append("name", data.name || "");
    params.append("email", data.email || "");
    params.append("company", data.company || "");
    params.append("website", data.website || "");
    params.append("service", data.service || "");
    params.append("project", data.project || "");
    params.append("budget", data.budget || "");
    params.append("submittedAt", data.submittedAt || "");
    // params.append("source", data.source || "");

    const googleResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params.toString(),
      redirect: "follow",
    });

    const result = await googleResponse.json();

    if (!googleResponse.ok || !result.ok) {
      throw new Error(
        result.error || "Google Sheet submission failed"
      );
    }

    return Response.json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        error: "Failed to submit form",
      },
      { status: 500 }
    );
  }
}