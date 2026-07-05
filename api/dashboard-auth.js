export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  const expectedCode = process.env.DASHBOARD_ACCESS_CODE
  const dashboardToken =
    process.env.DASHBOARD_ACCESS_TOKEN || process.env.DASHBOARD_ACCESS_CODE

  if (!expectedCode || !dashboardToken) {
    return res.status(500).json({
      success: false,
      error: 'Dashboard access is not configured.',
    })
  }

  const providedCode = String(req.body?.accessCode || '').trim()

  if (!providedCode || providedCode !== expectedCode) {
    return res.status(401).json({
      success: false,
      error: 'Invalid access code.',
    })
  }

  return res.status(200).json({
    success: true,
    token: dashboardToken,
  })
}
