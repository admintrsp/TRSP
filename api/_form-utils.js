const rateLimitWindowMs = 10 * 60 * 1000
const maxRequestsPerWindow = 5
const rateLimitStore = new Map()

export function getClientKey(req) {
  const forwardedFor = req.headers['x-forwarded-for']
  const ip = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : String(forwardedFor || '').split(',')[0]

  return ip.trim() || req.socket?.remoteAddress || 'unknown'
}

export function isRateLimited(key) {
  const now = Date.now()
  const current = rateLimitStore.get(key)

  if (!current || now > current.resetAt) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    })
    return false
  }

  current.count += 1
  rateLimitStore.set(key, current)

  return current.count > maxRequestsPerWindow
}

export function sanitizeText(value, maxLength = 500) {
  if (typeof value !== 'string') return ''

  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

export function sanitizeLongText(value, maxLength = 2000) {
  if (typeof value !== 'string') return ''

  return value.trim().slice(0, maxLength)
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
}

export function hasUnexpectedFields(body, allowedFields) {
  return Object.keys(body || {}).some((field) => !allowedFields.includes(field))
}

export function publicError(res, status = 400) {
  return res.status(status).json({
    success: false,
    error: 'We could not submit this form. Please review the fields and try again.',
  })
}
