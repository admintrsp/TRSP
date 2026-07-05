import { useEffect, useState } from 'react'
import Dashboard from './Dashboard.jsx'

const storageKey = 'trsp_dashboard_token'

export default function DashboardGate() {
  const [accessCode, setAccessCode] = useState('')
  const [token, setToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const savedToken = window.sessionStorage.getItem(storageKey)

    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/dashboard-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessCode }),
      })

      const data = await response.json()

      if (!response.ok || data.success === false || !data.token) {
        throw new Error(data.error || 'Access code was not accepted.')
      }

      window.sessionStorage.setItem(storageKey, data.token)
      setToken(data.token)
      setAccessCode('')
    } catch (error) {
      console.error(error)
      setErrorMessage('That access code did not work. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleSignOut() {
    window.sessionStorage.removeItem(storageKey)
    setToken('')
  }

  if (token) {
    return <Dashboard onSignOut={handleSignOut} />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <div className="border border-slate-800 bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/30">
          <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-semibold mb-5">
            Private Dashboard
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Founder access required.
          </h1>

          <p className="text-slate-300 leading-relaxed mb-8">
            This dashboard contains internal pilot operations, funding, and
            follow-up information for The Renewed Strength Project.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Access Code
              </label>

              <input
                type="password"
                value={accessCode}
                onChange={(event) => setAccessCode(event.target.value)}
                autoComplete="current-password"
                required
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4 text-white focus:border-[#d8a066] focus:outline-none"
              />
            </div>

            {errorMessage && (
              <p className="text-red-300 text-sm leading-relaxed">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d8a066] hover:bg-[#e6b684] disabled:bg-slate-600 disabled:cursor-not-allowed text-slate-950 font-semibold text-lg py-4 rounded-2xl transition"
            >
              {isSubmitting ? 'Checking...' : 'Open Dashboard'}
            </button>
          </form>

          <p className="text-slate-500 text-sm leading-relaxed mt-6">
            Access remains active for this browser tab session.
          </p>
        </div>
      </div>
    </div>
  )
}
