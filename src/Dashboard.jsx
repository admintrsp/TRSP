import ParticipantFlow from './ParticipantFlow.jsx'
import SystemDomains from './SystemDomains'
import TRSPRestorationFramework from './TRSPRestorationFramework'

const pilotStats = [
  {
    label: 'Fall Pilot Capacity',
    value: '5',
    detail: 'Loveland participants',
  },
  {
    label: 'Program Model',
    value: '16',
    detail: 'training sessions per participant',
  },
  {
    label: 'Sessions To Fund',
    value: '80',
    detail: 'total pilot sessions',
  },
  {
    label: 'Primary Service',
    value: 'PT',
    detail: 'personal training only for now',
  },
]

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

const pipelineStages = [
  { label: 'Inquiry', count: '0', description: 'Initial interest or referral' },
  { label: 'Applied', count: '0', description: 'Google Form submitted' },
  { label: 'Review', count: '0', description: 'Eligibility and fit check' },
  { label: 'Approved', count: '0', description: 'Ready for onboarding' },
  { label: 'Active', count: '0', description: 'Training has started' },
  { label: 'Complete', count: '0', description: 'Pilot block finished' },
]

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

const impactMeasures = [
  'People served',
  'Sessions funded',
  'Sessions completed',
  'Dollars raised',
  'Dollars deployed',
  'Participant-defined restoration goals',
]

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
            survivorship restoration work.
          </p>
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
                    {stage.count}
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
                  key={measure}
                  className="border border-slate-800 rounded-2xl p-4 bg-slate-950 text-slate-300"
                >
                  {measure}
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
              Cancer treatment saves lives. Survivorship restoration helps
              people live again.
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
