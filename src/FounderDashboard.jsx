export default function FounderDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
          The Renewed Strength Project
        </p>

        <h1 className="text-6xl font-bold mb-6">
          Founder Dashboard
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
          Building survivorship restoration infrastructure intentionally,
          patiently, and systemically.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Current Phase
            </h2>

            <p className="text-slate-400">
              Foundation Era (Years 0–2)
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Current Priorities
            </h2>

            <ul className="space-y-2 text-slate-400">
              <li>• Participant onboarding</li>
              <li>• Assessments</li>
              <li>• SOP development</li>
              <li>• Pilot participants</li>
            </ul>
          </div>

        </div>

      </section>

    </div>
  )
}