const fallbackImpact = {
  participantsPlanned: 5,
  fundingRaised: 2132,
  fundingGoal: 7500,
  remainingGoal: 5368,
  sessionsNeeded: 80,
}

function numberOrFallback(value, fallback) {
  const number = Number(value)
  return Number.isFinite(number) ? number : fallback
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  const scriptUrl = process.env.GOOGLE_DASHBOARD_SCRIPT_URL

  if (!scriptUrl) {
    return res.status(200).json({
      success: true,
      source: 'fallback',
      impact: fallbackImpact,
    })
  }

  try {
    const response = await fetch(scriptUrl)

    if (!response.ok) {
      throw new Error(`Impact data failed with status ${response.status}`)
    }

    const data = await response.json()
    const dashboard = data.dashboard || {}
    const fundingRaised = numberOrFallback(
      dashboard.fundingRaised,
      fallbackImpact.fundingRaised,
    )
    const fundingGoal = numberOrFallback(
      dashboard.estimatedFundingGoal,
      fallbackImpact.fundingGoal,
    )
    const remainingGoal = numberOrFallback(
      dashboard.remainingGoal,
      Math.max(fundingGoal - fundingRaised, 0),
    )

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')

    return res.status(200).json({
      success: true,
      source: 'live',
      updatedAt: data.updatedAt || new Date().toISOString(),
      impact: {
        participantsPlanned: numberOrFallback(
          dashboard.pilotCapacity,
          fallbackImpact.participantsPlanned,
        ),
        fundingRaised,
        fundingGoal,
        remainingGoal,
        sessionsNeeded: numberOrFallback(
          dashboard.totalSessionsNeeded,
          fallbackImpact.sessionsNeeded,
        ),
      },
    })
  } catch (error) {
    console.error(error)

    return res.status(200).json({
      success: true,
      source: 'fallback',
      impact: fallbackImpact,
    })
  }
}
