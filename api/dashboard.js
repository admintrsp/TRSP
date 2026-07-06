export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const expectedToken =
    process.env.DASHBOARD_ACCESS_TOKEN || process.env.DASHBOARD_ACCESS_CODE;
  const providedToken = String(req.headers.authorization || "").replace(
    /^Bearer\s+/i,
    "",
  );

  if (!expectedToken) {
    return res.status(500).json({
      success: false,
      error: "Missing DASHBOARD_ACCESS_CODE",
    });
  }

  if (!providedToken || providedToken !== expectedToken) {
    return res.status(401).json({
      success: false,
      error: "Dashboard access required",
    });
  }

  const scriptUrl = process.env.GOOGLE_DASHBOARD_SCRIPT_URL;

  if (!scriptUrl) {
    return res.status(500).json({
      success: false,
      error: "Missing GOOGLE_DASHBOARD_SCRIPT_URL",
    });
  }

  try {
    const response = await fetch(scriptUrl);

    if (!response.ok) {
      throw new Error(`Dashboard script failed with status ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Dashboard data could not be loaded right now.",
    });
  }
}
