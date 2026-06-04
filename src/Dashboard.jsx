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

{/* FOUNDER COMMAND CENTER */}

<section className="max-w-7xl mx-auto px-8 py-10">

  <div className="mb-8">
    <p className="uppercase tracking-widest text-slate-500 text-sm mb-2">
      Live Operations
    </p>

    <h2 className="text-4xl font-bold">
      Founder Command Center
    </h2>

    <p className="text-slate-400 mt-2">
      Daily operational pulse of The Renewed Strength Project.
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-4">

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-500 text-sm">
        Active Participants
      </p>
      <p className="text-5xl font-bold mt-3">
        12
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-500 text-sm">
        Applications
      </p>
      <p className="text-5xl font-bold mt-3">
        8
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-500 text-sm">
        Waitlist
      </p>
      <p className="text-5xl font-bold mt-3">
        3
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <p className="text-slate-500 text-sm">
        Sessions This Month
      </p>
      <p className="text-5xl font-bold mt-3">
        41
      </p>
    </div>

  </div>

</section>





{/* PARTICIPANT JOURNEY */}

<section className="max-w-7xl mx-auto px-8 pb-8">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

    <p className="uppercase tracking-widest text-slate-500 text-sm mb-4">
      Participant Journey
    </p>

    <div className="grid md:grid-cols-5 gap-8 text-center">

      <div>
        <p className="text-4xl font-bold">20</p>
        <p className="text-slate-500 mt-2">Referrals</p>
      </div>

      <div>
        <p className="text-4xl font-bold">14</p>
        <p className="text-slate-500 mt-2">Applications</p>
      </div>

      <div>
        <p className="text-4xl font-bold">8</p>
        <p className="text-slate-500 mt-2">Onboarding</p>
      </div>

      <div>
        <p className="text-4xl font-bold">5</p>
        <p className="text-slate-500 mt-2">Ready To Start</p>
      </div>

      <div>
        <p className="text-4xl font-bold">12</p>
        <p className="text-slate-500 mt-2">Active</p>
      </div>

    </div>

  </div>

</section>

{/* Todays Priorities */}

<section className="max-w-7xl mx-auto px-8 pb-8">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

    <p className="uppercase tracking-widest text-slate-500 text-sm mb-4">
      Immediate Attention
    </p>

    <h2 className="text-3xl font-semibold mb-8">
      Today's Priorities
    </h2>

    <div className="space-y-4">

      <div className="border border-slate-800 rounded-2xl p-4">
        Review New Applications
      </div>

      <div className="border border-slate-800 rounded-2xl p-4">
        Schedule Assessments
      </div>

      <div className="border border-slate-800 rounded-2xl p-4">
        Follow Up Participants
      </div>

      <div className="border border-slate-800 rounded-2xl p-4">
        Board & Partnership Tasks
      </div>

    </div>

  </div>

</section>

{/* ACTIVE PARTICIPANTS */}

<section className="max-w-7xl mx-auto px-8 pb-8">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

    <div className="flex items-center justify-between mb-8">

      <div>
        <p className="uppercase tracking-widest text-slate-500 text-sm mb-2">
          Active Participants
        </p>

        <h2 className="text-3xl font-semibold">
          Current Caseload
        </h2>
      </div>

      <div className="text-slate-400">
        1 Active Participant
      </div>

    </div>

    <div className="grid gap-4">

      <div className="border border-slate-800 rounded-2xl p-6">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-xl font-semibold">
              Kent Becker
            </h3>

            <p className="text-slate-400 mt-1">
              TRSP001
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              Coach
            </p>

            <p>
              Scott
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-6">

          <div>
            <p className="text-slate-500 text-sm">
              Cancer Type
            </p>

            <p>
              Non-Hodgkins Lymphoma
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Stage
            </p>

            <p>
              Stage 1
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Sessions
            </p>

            <p>
              2
            </p>
          </div>

          <div>
            <p className="text-slate-500 text-sm">
              Status
            </p>

            <p>
              Active Participant
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="max-w-7xl mx-auto px-8 pb-8">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

    <p className="uppercase tracking-widest text-slate-500 text-sm mb-4">
      Program Health
    </p>

    <div className="grid md:grid-cols-4 gap-4">

      <div className="border border-slate-800 rounded-2xl p-4">
        <p className="text-slate-500 text-sm">Assessments Due</p>
        <p className="text-3xl font-bold">0</p>
      </div>

      <div className="border border-slate-800 rounded-2xl p-4">
        <p className="text-slate-500 text-sm">Pending Applications</p>
        <p className="text-3xl font-bold">0</p>
      </div>

      <div className="border border-slate-800 rounded-2xl p-4">
        <p className="text-slate-500 text-sm">Follow Ups Needed</p>
        <p className="text-3xl font-bold">0</p>
      </div>

      <div className="border border-slate-800 rounded-2xl p-4">
        <p className="text-slate-500 text-sm">Participants At Risk</p>
        <p className="text-3xl font-bold">0</p>
      </div>

    </div>

  </div>

</section>

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


{/* RESTORATION IN PROGRESS */}

<section className="max-w-7xl mx-auto px-8 pb-12">

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

    <p className="uppercase tracking-widest text-slate-500 text-sm mb-4">
      Restoration In Progress
    </p>

    <h2 className="text-3xl font-semibold mb-8">
      Most Common Restoration Goals
    </h2>

    <div className="grid md:grid-cols-2 gap-4">

      <div className="border border-slate-800 rounded-2xl p-5">
        <p className="text-2xl mb-2">🥾</p>
        <h3 className="font-semibold">
          Return To Hiking
        </h3>
        <p className="text-slate-500 mt-2">
          4 Participants
        </p>
      </div>

      <div className="border border-slate-800 rounded-2xl p-5">
        <p className="text-2xl mb-2">💼</p>
        <h3 className="font-semibold">
          Return To Work
        </h3>
        <p className="text-slate-500 mt-2">
          3 Participants
        </p>
      </div>

      <div className="border border-slate-800 rounded-2xl p-5">
        <p className="text-2xl mb-2">👨‍👩‍👧</p>
        <h3 className="font-semibold">
          Play With Grandchildren
        </h3>
        <p className="text-slate-500 mt-2">
          2 Participants
        </p>
      </div>

      <div className="border border-slate-800 rounded-2xl p-5">
        <p className="text-2xl mb-2">✈️</p>
        <h3 className="font-semibold">
          Travel Again
        </h3>
        <p className="text-slate-500 mt-2">
          1 Participant
        </p>
      </div>

    </div>

  </div>

</section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-8">

            <ParticipantFlow />
<TRSPRestorationFramework />       
     <SystemDomains />
        

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