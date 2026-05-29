import TRSPRestorationFramework from './TRSPRestorationFramework'
import ParticipantFlow from './ParticipantFlow.jsx'
import SystemDomains from './SystemDomains'
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-16">

          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            The Renewed Strength Project
          </p>

          <h1 className="text-6xl font-bold leading-tight max-w-4xl">
            Founder Operating System
          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-3xl leading-relaxed">
            Building survivorship restoration infrastructure intentionally,
            patiently, and systemically.
          </p>

        </div>
      </section>


      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-8">

            <ParticipantFlow />
<TRSPRestorationFramework />       
     <SystemDomains />
        

          {/* NORTH STAR */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              North Star
            </p>

            <h2 className="text-3xl font-semibold mb-6">
              Why This Exists
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Cancer treatment saves lives.
              Survivorship restoration helps people live again.
            </p>

            <p className="text-slate-500 mt-6 leading-relaxed">
              They survived treatment.
              Now help them reclaim strength, confidence, function,
              and participation in life.
            </p>
          </div>


          {/* CURRENT PHASE */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              Current Phase
            </p>

            <h2 className="text-3xl font-semibold mb-4">
              Foundation Era
            </h2>

            <p className="text-slate-400 text-lg">
              Years 0–2
            </p>

            <div className="mt-8 space-y-4">

              <div className="border border-slate-800 rounded-2xl p-4">
                <h3 className="font-semibold mb-2">
                  Primary Objective
                </h3>

                <p className="text-slate-400">
                  Build systems. Learn operationally.
                  Prove the model carefully.
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-4">
                <h3 className="font-semibold mb-2">
                  Current Focus
                </h3>

                <ul className="space-y-2 text-slate-400">
                  <li>• Participant onboarding</li>
                  <li>• Assessments + outcomes</li>
                  <li>• SOP development</li>
                  <li>• Pilot participants</li>
                  <li>• Partnership building</li>
                </ul>
              </div>

            </div>
          </div>


          {/* EVOLUTION MAP */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:col-span-2">
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              Organizational Evolution
            </p>

            <h2 className="text-3xl font-semibold mb-10">
              Long-Term Development Path
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-500 text-sm mb-2">
                  YEARS 0–2
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Foundation
                </h3>

                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Build systems</li>
                  <li>• Pilot participants</li>
                  <li>• Assessments</li>
                  <li>• Partnerships</li>
                </ul>
              </div>

              <div className="border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-500 text-sm mb-2">
                  YEARS 2–5
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Refinement
                </h3>

                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Coaching standards</li>
                  <li>• Apprentice trainers</li>
                  <li>• Outcomes reporting</li>
                  <li>• Operational maturity</li>
                </ul>
              </div>

              <div className="border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-500 text-sm mb-2">
                  YEARS 5–8
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Expansion
                </h3>

                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Full-time leadership</li>
                  <li>• Staff development</li>
                  <li>• Community systems</li>
                  <li>• Regional credibility</li>
                </ul>
              </div>

              <div className="border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-500 text-sm mb-2">
                  YEARS 8–12
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Restoration Space
                </h3>

                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• Dedicated facility</li>
                  <li>• Coaching culture</li>
                  <li>• Survivorship ecosystem</li>
                  <li>• Long-term sustainability</li>
                </ul>
              </div>

            </div>
          </div>


          {/* REVENUE THRESHOLDS */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              Revenue Thresholds
            </p>

            <h2 className="text-3xl font-semibold mb-8">
              Organizational Unlocks
            </h2>

            <div className="space-y-4">

              <div className="border border-slate-800 rounded-2xl p-4">
                <p className="text-xl font-semibold">
                  $25K
                </p>

                <p className="text-slate-400 mt-2">
                  Stable pilot operations
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-4">
                <p className="text-xl font-semibold">
                  $100K
                </p>

                <p className="text-slate-400 mt-2">
                  Part-time founder compensation
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-4">
                <p className="text-xl font-semibold">
                  $250K
                </p>

                <p className="text-slate-400 mt-2">
                  Apprenticeship + staff development
                </p>
              </div>

            </div>
          </div>


          {/* CULTURE */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              Cultural Direction
            </p>

            <h2 className="text-3xl font-semibold mb-8">
              Environment Principles
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {[
                'Calm',
                'Capable',
                'Grounded',
                'Professional',
                'Human',
                'Resilient',
                'Non-Intimidating',
                'Restorative',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-slate-800 rounded-2xl p-4 text-center text-slate-300"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

        </div>

      </section>

    </div>
  )
}