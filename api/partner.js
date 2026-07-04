export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const scriptUrl =
    process.env.GOOGLE_PARTICIPANT_APPLICATION_SCRIPT_URL ||
    process.env.GOOGLE_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    return res.status(500).json({
      success: false,
      error: "Missing partner inquiry script URL",
    });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submissionType: "partnerInquiry",
        ...req.body,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      return res.status(500).json({
        success: false,
        error: data.error || "Partner inquiry script failed",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
