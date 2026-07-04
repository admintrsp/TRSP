import { useEffect, useMemo, useState } from 'react'
import ParticipantFlow from './ParticipantFlow.jsx'
import SystemDomains from './SystemDomains'
import TRSPRestorationFramework from './TRSPRestorationFramework'

const fallbackDashboard = {
  pilotCapacity: 5,
  sessionsPerParticipant: 16,
  costPerParticipant: 1500,
  estimatedFundingGoal: 7500,
  totalSessionsNeeded: 80,
  applications: 0,
  approved: 0,
  sessionsCompleted: 0,
  dollarsDeployed: 0,
  followUpsDue: 0,
  highPriority: 0,
  active: 0,
  waitlisted: 0,
  fundingRaised: 0,
  remainingGoal: 7500,
  intakeComplete: 0,
  outcomeComplete: 0,
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0)
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(Number(value) || 0)
}

function buildPilotStats(dashboard) {
  const capacity = dashboard.pilotCapacity || fallbackDashboard.pilotCapacity
  const sessionsPerParticipant =
    dashboard.sessionsPerParticipant || fallbackDashboard.sessionsPerParticipant
  const totalSessions =
    dashboard.totalSessionsNeeded || capacity * sessionsPerParticipant
  const fundingGoal =
    dashboard.estimatedFundingGoal ||
    dashboard.remainingGoal ||
    fallbackDashboard.estimatedFundingGoal

  return [
    {
      label: 'Fall Pilot Capacity',
      value: formatNumber(capacity),
      detail: 'Loveland participants',
    },
    {
      label: 'Program Model',
      value: formatNumber(sessionsPerParticipant),
      detail: 'training sessions per participant',
    },
    {
      label: 'Sessions To Fund',
      value: formatNumber(totalSessions),
      detail: 'total pilot sessions',
    },
    {
      label: 'Funding Goal',
      value: formatCurrency(fundingGoal),
      detail: `${formatCurrency(dashboard.costPerParticipant || fallbackDashboard.costPerParticipant)} per participant`,
    },
  ]
}

const readinessItems = [
  {
    title: 'Participant Application',
    status: 'Live',
    note: 'Google Form is the intake front door.',
  },
  {
    title: 'Participant Documents',
    status: 'Built',
    note: 'Waiver, clearance, readiness, and welcome materials are organized.',
  },
  {
    title: 'Training Delivery',
    status: 'Active',
    note: 'Sessions are delivered through the gym and tracked in CoachRX.',
  },
  {
    title: 'Funding Pathway',
    status: 'Active',
    note: 'Givebutter remains the donation and campaign system.',
  },
  {
    title: 'Payment Workflow',
    status: 'Define',
    note: 'Confirm invoice timing, cost per session, and payment recordkeeping.',
  },
  {
    title: 'Outcome Snapshot',
    status: 'Define',
    note: 'Pick the baseline and completion measures for the pilot.',
  },
]

function buildPipelineStages(dashboard) {
  return [
    { label: 'Applied', count: dashboard.applications, description: 'Google Form submitted' },
    { label: 'Approved', count: dashboard.approved, description: 'Ready for onboarding' },
    { label: 'Active', count: dashboard.active, description: 'Training has started' },
    { label: 'Waitlisted', count: dashboard.waitlisted, description: 'Holding for funding or timing' },
    { label: 'Intake Complete', count: dashboard.intakeComplete, description: 'Core start documents complete' },
    { label: 'Outcome Complete', count: dashboard.outcomeComplete, description: 'Pilot block finished' },
  ]
}

const priorities = [
  'Confirm pilot cost per participant',
  'Set the fall funding target',
  'Finalize gym billing process',
  'Choose outcome measures for baseline and completion',
  'Review participant application responses weekly',
]

const weeklyRhythm = [
  {
    title: 'Monday',
    detail: 'Review applications, funding status, and follow-ups.',
  },
  {
    title: 'Midweek',
    detail: 'Check CoachRX notes, session completion, and participant needs.',
  },
  {
    title: 'Friday',
    detail: 'Update board notes, donor impact language, and next actions.',
  },
]

const externalTools = [
  {
    name: 'Participant Application',
    purpose: 'Google Form intake',
    url: 'https://forms.gle/XiRrN38kGjsYaFNb6',
  },
  {
    name: 'Participant Info',
    purpose: 'Secure Google Sheet for pilot status and operations',
    url: 'https://docs.google.com/spreadsheets/d/1Hp3tjcPxWeE81ZWiAHah9HgqDcvZGu49/edit',
  },
  {
    name: 'CoachRX',
    purpose: 'Training delivery and session notes',
    url: 'https://www.coachrx.app/',
  },
  {
    name: 'Givebutter',
    purpose: 'Donations and campaigns',
    url: 'https://givebutter.com/general-fund-iz0pzq',
  },
  {
    name: 'Squarespace',
    purpose: 'Public website',
    url: 'https://www.therenewedstrengthproject.org/',
  },
]

function buildImpactMeasures(dashboard) {
  const totalSessions =
    dashboard.totalSessionsNeeded ||
    (dashboard.pilotCapacity || fallbackDashboard.pilotCapacity) *
      (dashboard.sessionsPerParticipant || fallbackDashboard.sessionsPerParticipant)

  return [
    {
      label: 'People Planned',
      value: formatNumber(dashboard.pilotCapacity),
      detail: 'Fall pilot capacity',
    },
    {
      label: 'Sessions Funded',
      value: formatNumber(totalSessions),
      detail: 'Target sessions for the pilot',
    },
    {
      label: 'Sessions Completed',
      value: formatNumber(dashboard.sessionsCompleted),
      detail: 'Recorded training sessions',
    },
    {
      label: 'Funding Raised',
      value: formatCurrency(dashboard.fundingRaised),
      detail: 'Entered in the Google Sheet',
    },
    {
      label: 'Remaining Goal',
      value: formatCurrency(dashboard.remainingGoal),
      detail: 'Still needed for the pilot',
    },
    {
      label: 'Dollars Deployed',
      value: formatCurrency(dashboard.dollarsDeployed),
      detail: 'Paid or payable training cost',
    },
  ]
}

function buildFundingProgress(dashboard) {
  const goal =
    Number(dashboard.estimatedFundingGoal) ||
    Number(dashboard.fundingRaised) + Number(dashboard.remainingGoal) ||
    fallbackDashboard.estimatedFundingGoal
  const raised = Math.max(Number(dashboard.fundingRaised) || 0, 0)
  const remaining = Math.max(
    Number(dashboard.remainingGoal) || goal - raised,
    0,
  )
  const fundedPercent = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0

  return {
    goal,
    raised,
    remaining,
    fundedPercent,
  }
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="uppercase tracking-widest text-slate-500 text-sm mb-2">
        {eyebrow}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="text-slate-400 mt-3 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

function Panel({ children, className = '' }) {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(fallbackDashboard)
  const [dataStatus, setDataStatus] = useState('Loading live data...')
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadDashboardData() {
      try {
        const response = await fetch('/api/dashboard')
        if (!response.ok) {
          throw new Error('Live dashboard data is unavailable.')
        }

        const data = await response.json()
        if (!isMounted) return

        setDashboard({ ...fallbackDashboard, ...(data.dashboard || {}) })
        setLastUpdated(data.updatedAt || '')
        setDataStatus('Live Google Sheet data')
      } catch (error) {
        console.error(error)
        if (!isMounted) return
        setDashboard(fallbackDashboard)
        setDataStatus('Showing fallback values')
      }
    }

    loadDashboardData()

    return () => {
      isMounted = false
    }
  }, [])

  const pilotStats = useMemo(() => buildPilotStats(dashboard), [dashboard])
  const pipelineStages = useMemo(() => buildPipelineStages(dashboard), [dashboard])
  const impactMeasures = useMemo(() => buildImpactMeasures(dashboard), [dashboard])
  const fundingProgress = useMemo(() => buildFundingProgress(dashboard), [dashboard])

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm mb-4">
            The Renewed Strength Project
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Founder Command Center
          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-3xl leading-relaxed">
            A private operating hub for the fall pilot, core documents,
            weekly priorities, and the systems that support local cancer
            treatment restoration work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="border border-[#d8a066]/40 text-[#d8a066] rounded-full px-4 py-2">
              {dataStatus}
            </span>

            {lastUpdated && (
              <span>
                Last updated {new Date(lastUpdated).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-8">

        <section>
          <SectionHeader
            eyebrow="Fall Pilot"
            title="Pilot Readiness Snapshot"
            description="The current build is intentionally simple: five local participants, personal training as the first funded service, and existing tools doing the jobs they already do well."
          />

          <div className="grid md:grid-cols-4 gap-4">
            {pilotStats.map((stat) => (
              <Panel key={stat.label} className="rounded-2xl">
                <p className="text-slate-500 text-sm">
                  {stat.label}
                </p>
                <p className="text-5xl font-bold mt-3">
                  {stat.value}
                </p>
                <p className="text-slate-400 mt-3">
                  {stat.detail}
                </p>
              </Panel>
            ))}
          </div>
        </section>

        <section>
          <Panel>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
              <div>
                <p className="uppercase tracking-widest text-slate-500 text-sm mb-3">
                  Funding Progress
                </p>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Fall Pilot Funding
                </h2>

                <p className="text-slate-400 mt-3 max-w-2xl leading-relaxed">
                  This shows how much has been raised toward the current pilot
                  goal and how much is still needed to fully fund the first
                  five local participants.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950">
                  <p className="text-slate-500 text-sm">
                    Goal
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {formatCurrency(fundingProgress.goal)}
                  </p>
                </div>

                <div className="border border-[#d8a066]/50 rounded-2xl p-5 bg-slate-950">
                  <p className="text-slate-500 text-sm">
                    Raised
                  </p>
                  <p className="text-3xl font-bold mt-2 text-[#d8a066]">
                    {formatCurrency(fundingProgress.raised)}
                  </p>
                </div>

                <div className="border border-slate-800 rounded-2xl p-5 bg-slate-950">
                  <p className="text-slate-500 text-sm">
                    Left To Raise
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {formatCurrency(fundingProgress.remaining)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-4 text-sm text-slate-400 mb-3">
                <span>
                  {Math.round(fundingProgress.fundedPercent)}% funded
                </span>
                <span>
                  {formatCurrency(fundingProgress.remaining)} remaining
                </span>
              </div>

              <div className="h-4 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                <div
                  className="h-full bg-[#d8a066] transition-all"
                  style={{ width: `${fundingProgress.fundedPercent}%` }}
                />
              </div>
            </div>
          </Panel>
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <Panel className="lg:col-span-2">
            <SectionHeader
              eyebrow="Launch Checklist"
              title="What Must Be Ready"
              description="A working view of the pieces that make the pilot real without adding participant accounts or a complex database too early."
            />

            <div className="grid md:grid-cols-2 gap-4">
              {readinessItems.map((item) => (
                <div
                  key={item.title}
                  className="border border-slate-800 rounded-2xl p-5 bg-slate-950"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-[#d8a066] border border-[#d8a066]/40 rounded-full px-3 py-1">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-slate-400 mt-3 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader
              eyebrow="This Week"
              title="Priorities"
            />

            <div className="space-y-3">
              {priorities.map((priority) => (
                <div
                  key={priority}
                  className="border border-slate-800 rounded-2xl p-4 bg-slate-950 text-slate-300"
                >
                  {priority}
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section>
          <Panel>
            <SectionHeader
              eyebrow="Participant Pipeline"
              title="Fall Pilot Flow"
              description="Keep this section at summary level until the dashboard has login protection and a real private data source. No names, diagnoses, or treatment details need to live here right now."
            />

            <div className="grid md:grid-cols-6 gap-4">
              {pipelineStages.map((stage) => (
                <div
                  key={stage.label}
                  className="border border-slate-800 rounded-2xl p-5 bg-slate-950"
                >
                  <p className="text-4xl font-bold">
                    {formatNumber(stage.count)}
                  </p>
                  <h3 className="text-lg font-semibold mt-4">
                    {stage.label}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <Panel>
            <SectionHeader
              eyebrow="Weekly Rhythm"
              title="Operating Cadence"
              description="A simple rhythm keeps the nonprofit moving without turning every task into a new system."
            />

            <div className="space-y-4">
              {weeklyRhythm.map((item) => (
                <div
                  key={item.title}
                  className="border border-slate-800 rounded-2xl p-5 bg-slate-950"
                >
                  <h3 className="text-xl font-semibold text-[#d8a066]">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mt-2">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader
              eyebrow="External Tools"
              title="Where The Work Lives"
              description="These tools stay in place. The dashboard gives you one quiet place to reach them."
            />

            <div className="grid md:grid-cols-2 gap-4">
              {externalTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-800 rounded-2xl p-5 bg-slate-950 hover:border-[#d8a066] transition"
                >
                  <h3 className="text-xl font-semibold">
                    {tool.name}
                  </h3>
                  <p className="text-slate-500 mt-2">
                    {tool.purpose}
                  </p>
                </a>
              ))}
            </div>
          </Panel>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <Panel>
            <SectionHeader
              eyebrow="Impact Snapshot"
              title="What To Track First"
              description="For the pilot, track a few clear signals that help donors, board members, and future partners understand what their support made possible."
            />

            <div className="grid md:grid-cols-2 gap-4">
              {impactMeasures.map((measure) => (
                <div
                  key={measure.label}
                  className="border border-slate-800 rounded-2xl p-5 bg-slate-950"
                >
                  <p className="text-slate-500 text-sm">
                    {measure.label}
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {measure.value}
                  </p>
                  <p className="text-slate-500 mt-2">
                    {measure.detail}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              North Star
            </p>

            <h2 className="text-3xl font-semibold mb-6">
              Why This Exists
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Cancer treatment saves lives. Restoration helps people work
              toward the life and activities they value.
            </p>

            <p className="text-slate-500 mt-6 leading-relaxed">
              The pilot exists to remove cost as a barrier to safe,
              individualized personal training for people treated for cancer
              in Northern Colorado.
            </p>
          </Panel>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <ParticipantFlow />
          <div>
            <TRSPRestorationFramework />
            <SystemDomains />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <Panel>
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-4">
              Current Phase
            </p>

            <h2 className="text-3xl font-semibold mb-4">
              Foundation Era
            </h2>

            <p className="text-slate-400 text-lg">
              Years 0-2
            </p>

            <div className="mt-8 space-y-4">
              <div className="border border-slate-800 rounded-2xl p-4 bg-slate-950">
                <h3 className="font-semibold mb-2">
                  Primary Objective
                </h3>

                <p className="text-slate-400">
                  Build systems, learn operationally, and prove the model
                  carefully with a local pilot.
                </p>
              </div>

              <div className="border border-slate-800 rounded-2xl p-4 bg-slate-950">
                <h3 className="font-semibold mb-2">
                  Current Focus
                </h3>

                <ul className="space-y-2 text-slate-400">
                  <li>Participant onboarding</li>
                  <li>Funding the first five participants</li>
                  <li>Gym payment workflow</li>
                  <li>Assessment and outcome rhythm</li>
                  <li>Partnership building</li>
                </ul>
              </div>
            </div>
          </Panel>

          <Panel>
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
                  className="border border-slate-800 rounded-2xl p-4 text-center text-slate-300 bg-slate-950"
                >
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </section>

      </main>

    </div>
  )
}
