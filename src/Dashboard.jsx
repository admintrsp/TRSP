import { Fragment, useEffect, useMemo, useState } from 'react'
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
  partnerNewRequests: 0,
  partnerActiveConversations: 0,
  partnerFollowUpsDue: 0,
  partnerTotalInquiries: 0,
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

const nextMoveStorageKey = 'trsp_next_moves_v1'
const legacyNextMoveStorageKey = 'trsp_stewardship_items_v1'
const projectStorageKey = 'trsp_next_move_projects_v1'

const nextMoveSeedItems = [
  {
    id: 'next-move-participant-partner-review',
    title: 'Review new participant and partner activity',
    description: 'Make sure no person or local partner is waiting without a next step.',
    whyItMatters: 'Every delayed follow-up can become a missed opportunity for restoration or local support.',
    nextAction: 'Open the participant sheet and partner requests, then identify the one person who needs follow-up first.',
    project: 'Participant Experience',
    category: 'Operate',
    lane: 'Today',
    missionImpact: 5,
    foundationValue: 5,
    urgency: 4,
    effort: 2,
    workflowStatus: 'Active',
    pinned: false,
    createdDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    completedDate: '',
    archivedDate: '',
  },
  {
    id: 'next-move-confirm-pilot-funding',
    title: 'Confirm the pilot funding number',
    description: 'Keep the fall pilot goal clear so donor language and board updates stay honest.',
    whyItMatters: 'A clear funding target protects donor trust and makes the first five participant journeys easier to explain.',
    nextAction: 'Compare the Google Sheet funding raised value with Givebutter and update the dashboard if needed.',
    project: 'Fundraising',
    category: 'Grow',
    lane: 'On Deck',
    missionImpact: 4,
    foundationValue: 5,
    urgency: 4,
    effort: 2,
    workflowStatus: 'Active',
    pinned: false,
    createdDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    completedDate: '',
    archivedDate: '',
  },
  {
    id: 'next-move-gym-billing-workflow',
    title: 'Finalize gym billing workflow',
    description: 'Protect the promise that participants do not pay for restorative support.',
    whyItMatters: 'The nonprofit promise depends on clean handoffs between the participant, gym, and TRSP funding.',
    nextAction: 'Confirm who invoices whom, when invoices are sent, and where payments are recorded.',
    project: 'Operational Architecture',
    category: 'Operate',
    lane: 'Waiting On',
    missionImpact: 5,
    foundationValue: 4,
    urgency: 3,
    effort: 3,
    workflowStatus: 'Active',
    pinned: false,
    createdDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    completedDate: '',
    archivedDate: '',
  },
  {
    id: 'next-move-first-outcome-measures',
    title: 'Choose first outcome measures',
    description: 'Define what TRSP will learn from the pilot without overcomplicating the work.',
    whyItMatters: 'Simple outcome tracking helps TRSP learn responsibly and communicate impact without overpromising.',
    nextAction: 'Choose the first two measures to collect at baseline and completion.',
    project: 'Operational Architecture',
    category: 'Improve',
    lane: 'This Week',
    missionImpact: 4,
    foundationValue: 5,
    urgency: 3,
    effort: 3,
    workflowStatus: 'Active',
    pinned: false,
    createdDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    completedDate: '',
    archivedDate: '',
  },
  {
    id: 'next-move-donor-impact-note',
    title: 'Write one donor impact note',
    description: 'Capture one clear sentence about what restoration makes possible.',
    whyItMatters: 'Language shapes the work; clear words help people understand the life behind the gift.',
    nextAction: 'Write one sentence that connects a donation to participation in meaningful life.',
    project: 'Founder Narrative',
    category: 'Build',
    lane: 'Quick Win',
    missionImpact: 3,
    foundationValue: 3,
    urgency: 2,
    effort: 1,
    workflowStatus: 'Active',
    pinned: false,
    createdDate: '2026-07-06',
    modifiedDate: '2026-07-06',
    completedDate: '',
    archivedDate: '',
  },
]

const projectSeedItems = [
  {
    id: 'project-website',
    title: 'Website',
    purpose: 'Keep the public story clear, credible, warm, and aligned with the Partner Guide.',
    status: 'Active',
    priority: 4,
    notes: '',
  },
  {
    id: 'project-founder-narrative',
    title: 'Founder Narrative',
    purpose: 'Protect the why behind TRSP and make the origin story easier to share.',
    status: 'Active',
    priority: 4,
    notes: '',
  },
  {
    id: 'project-trsp-philosophy',
    title: 'TRSP Philosophy',
    purpose: 'Clarify the beliefs that guide programming, partnerships, and growth.',
    status: 'Active',
    priority: 5,
    notes: '',
  },
  {
    id: 'project-participant-experience',
    title: 'Participant Experience',
    purpose: 'Make applying, onboarding, training, and transition feel safe and human.',
    status: 'Active',
    priority: 5,
    notes: '',
  },
  {
    id: 'project-community-partners',
    title: 'Community Partners',
    purpose: 'Build local relationships that remove financial barriers for participants.',
    status: 'Active',
    priority: 4,
    notes: '',
  },
  {
    id: 'project-fundraising',
    title: 'Fundraising',
    purpose: 'Translate generosity into complete participant journeys.',
    status: 'Active',
    priority: 5,
    notes: '',
  },
  {
    id: 'project-operational-architecture',
    title: 'Operational Architecture',
    purpose: 'Keep the systems behind referrals, funding, coaching, and outcomes clear.',
    status: 'Active',
    priority: 5,
    notes: '',
  },
  {
    id: 'project-movement-library',
    title: 'Movement Library',
    purpose: 'Future home for exercise options, coaching standards, and programming notes.',
    status: 'Future',
    priority: 2,
    notes: '',
  },
  {
    id: 'project-grant-library',
    title: 'Grant Library',
    purpose: 'Prepare reusable language and evidence for future funding opportunities.',
    status: 'Future',
    priority: 3,
    notes: '',
  },
  {
    id: 'project-board-development',
    title: 'Board Development',
    purpose: 'Build healthy governance, accountability, and future leadership.',
    status: 'Active',
    priority: 3,
    notes: '',
  },
  {
    id: 'project-provider-outreach',
    title: 'Provider Outreach',
    purpose: 'Create a trusted pathway for provider awareness and future referral relationships.',
    status: 'Future',
    priority: 3,
    notes: '',
  },
]

const reflectionPrinciples = [
  'Cancer is a diagnosis, not who someone is.',
  'Exercise is the vehicle. Restoration is the destination.',
  'You can only grow as much as you recover.',
  'Everyone deserves to be met where they are.',
  'People are often capable of more than they believe.',
  'The goal is not gym performance. The goal is participation in life.',
]

const recentWins = [
  'Donation experience now stays inside the TRSP website.',
  'Participant application can write into the dashboard system.',
  'Community partner requests can be surfaced and handled.',
  'The Organizational Blueprint is preserved as a living document tracker.',
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
    url: '/apply',
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
    name: 'Donation Page',
    purpose: 'TRSP donation experience and Givebutter processing',
    url: '/donate',
  },
  {
    name: 'Squarespace',
    purpose: 'Public website',
    url: 'https://www.therenewedstrengthproject.org/',
  },
]

const blueprintStorageKey = 'trsp_organizational_blueprint_v1'

const blueprintStatuses = ['Not Started', 'Draft', 'Revision', 'Complete']

const blueprintPhases = [
  {
    title: 'Foundation',
    items: [
      ['Founder’s Narrative', 'Why TRSP exists and the story behind the organization.'],
      ['TRSP Philosophy', 'The beliefs that guide every decision.'],
      ['Core Beliefs', 'The fundamental principles that define TRSP.'],
      ['Organizational Values', 'The values that shape culture, decisions, and partnerships.'],
    ],
  },
  {
    title: 'Framework',
    items: [
      ['Restoration Model', 'Explains how restoration happens.'],
      ['Participant Journey', 'Explains what participants experience.'],
      ['Coaching Philosophy', 'Defines how TRSP coaches and meets people where they are.'],
      ['Training Standards Manual', 'Future trainer onboarding and quality control.'],
    ],
  },
  {
    title: 'Website',
    items: [
      ['Homepage Messaging', 'Clarifies why TRSP exists.'],
      ['Our Philosophy Page', 'Public explanation of TRSP’s beliefs.'],
      ['Restoration Model Page', 'Public explanation of the restoration framework.'],
      ['Participant Program Page', 'Explains the participant experience.'],
      ['Donate Experience', 'Keeps the donation journey aligned with TRSP’s brand.'],
      ['Community Partner Page', 'Explains business/community sponsorship.'],
      ['Provider Information', 'Explains referral pathway and provider trust.'],
    ],
  },
  {
    title: 'Operations',
    items: [
      ['Board Handbook', 'Board expectations, governance, and orientation.'],
      ['Volunteer Handbook', 'Future volunteer onboarding.'],
      ['Participant Handbook', 'Program expectations and participant guidance.'],
      ['Annual Impact Report', 'Public accountability and donor communication.'],
      ['Grant Narrative Library', 'Reusable grant language and supporting narratives.'],
      ['Partnership Packet', 'Materials for local businesses and community partners.'],
      ['Media Kit', 'Logos, photos, boilerplate, and press information.'],
    ],
  },
  {
    title: 'Growth',
    items: [
      ['3-Year Strategic Plan', 'Near-term growth priorities.'],
      ['10-Year Strategic Plan', 'Long-term organizational direction.'],
      ['Facility Vision', 'Future home for TRSP.'],
      ['Expansion Roadmap', 'Scaling trainers, participants, partnerships, and services.'],
    ],
  },
]

const livingIdeas = [
  'Cancer takes.',
  'Now what?',
  'Meet people where they are.',
  'Movement is the vehicle. Restoration is the destination.',
  'Recovery is individualized.',
  'Everyone deserves the opportunity to pursue restoration.',
  'You can only grow as much as you recover.',
  'Cancer is a diagnosis, not who someone is.',
  'People are often capable of more than they believe.',
  'Help people return to the life they love.',
]

const notebookStorageKey = 'trsp_founder_notebook_v1'

const notebookSections = [
  'Thoughts',
  'Language',
  'Research',
  'Quotes',
  'Ideas',
  'Future Ideas',
  'Future Concepts',
  'Questions',
  'Observations',
  'Lessons',
]

const legacySections = [
  {
    title: 'Founder Narrative',
    description: 'The story future leaders should understand before they change anything.',
  },
  {
    title: 'TRSP Philosophy',
    description: 'The beliefs that protect the soul of the organization.',
  },
  {
    title: 'Core Beliefs',
    description: 'The principles that should outlive any single season of growth.',
  },
  {
    title: 'Values',
    description: 'The cultural standards that shape decisions, partnerships, and care.',
  },
  {
    title: 'Letters to Future Staff',
    description: 'Notes for the people who may one day carry this work forward.',
  },
  {
    title: 'Lessons Learned',
    description: 'What the pilot, participants, donors, and partners are teaching TRSP.',
  },
  {
    title: 'Major Decisions',
    description: 'The why behind important organizational choices.',
  },
  {
    title: 'Milestones',
    description: 'Moments worth remembering as TRSP grows.',
  },
  {
    title: 'History',
    description: 'How the organization began and how it changed over time.',
  },
  {
    title: 'Impact Reports',
    description: 'Public accountability and the evidence of faithful care.',
  },
  {
    title: 'Photos & Videos',
    description: 'Visual memory from the people, places, and moments that shaped TRSP.',
  },
  {
    title: 'Future Vision',
    description: 'The dream beyond the pilot: facility, expansion, and long-term restoration work.',
  },
]

const legacyEntries = [
  {
    decision: 'Why Restoration?',
    why: 'TRSP is not simply about exercise access. Restoration names the deeper purpose: helping people pursue meaningful life after cancer disruption.',
    alternatives: 'Fitness, recovery, rehab, survivorship support.',
    date: '2026-07-06',
    status: 'Guiding Principle',
  },
  {
    decision: 'Why 16 Sessions?',
    why: 'A defined pilot block creates enough time for relationship, assessment, coaching, and progression while keeping the first funding target understandable.',
    alternatives: 'Open-ended support, 8 sessions, 12 sessions, subscription model.',
    date: '2026-07-06',
    status: 'Pilot Decision',
  },
  {
    decision: 'Why Northern Colorado?',
    why: 'The first version of TRSP should stay local enough to be relational, accountable, and operationally learnable.',
    alternatives: 'Statewide launch, virtual-first model, broader cancer support network.',
    date: '2026-07-06',
    status: 'Foundation Era',
  },
  {
    decision: 'Why Community Funding?',
    why: 'Community funding allows participants to access individualized movement support without personal cost deciding whether restoration is possible.',
    alternatives: 'Insurance, direct-pay, membership, partial scholarship model.',
    date: '2026-07-06',
    status: 'Operating Model',
  },
]

function makeBlueprintId(phaseTitle, documentTitle) {
  return `${phaseTitle}-${documentTitle}`
    .toLowerCase()
    .replace(/—/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const blueprintDocuments = blueprintPhases.flatMap((phase) =>
  phase.items.map(([title, purpose]) => ({
    id: makeBlueprintId(phase.title, title),
    phaseTitle: phase.title,
    title,
    purpose,
  })),
)

function createInitialBlueprintState() {
  return blueprintDocuments.reduce((accumulator, document) => {
    accumulator[document.id] = {
      status: 'Not Started',
      notes: '',
    }

    return accumulator
  }, {})
}

function readBlueprintState() {
  if (typeof window === 'undefined') return createInitialBlueprintState()

  try {
    const stored = window.localStorage.getItem(blueprintStorageKey)

    if (!stored) return createInitialBlueprintState()

    return {
      ...createInitialBlueprintState(),
      ...JSON.parse(stored),
    }
  } catch (error) {
    console.error(error)

    return createInitialBlueprintState()
  }
}

function getBlueprintWeight(status) {
  if (status === 'Complete') return 1
  if (status === 'Revision') return 0.7
  if (status === 'Draft') return 0.4

  return 0
}

function calculateBlueprintProgress(items) {
  if (!items.length) return 0

  const total = items.reduce(
    (sum, item) => sum + getBlueprintWeight(item.status),
    0,
  )

  return Math.round((total / items.length) * 100)
}

function getBlueprintStatusClass(status) {
  if (status === 'Complete') {
    return 'border-[#d8a066] bg-[#d8a066] text-[#071f3a]'
  }

  if (status === 'Revision') {
    return 'border-[#d8a066] bg-[#d8a066]/15 text-[#d8a066]'
  }

  if (status === 'Draft') {
    return 'border-[#d6c7b4] bg-[#f8f5ef] text-[#071f3a]'
  }

  return 'border-[#e4d8c7] bg-[#f8f5ef] text-[#6b7280]'
}

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

function getNextMoveScore(priority) {
  return (
    Number(priority.missionImpact) +
    Number(priority.foundationValue) +
    Number(priority.urgency) -
    Number(priority.effort)
  )
}

function getTopPriority(items) {
  const activeItems = items.filter((item) => item.workflowStatus === 'Active')
  const pinnedItem = activeItems.find((item) => item.pinned)

  if (pinnedItem) return pinnedItem

  return [...activeItems].sort(
    (first, second) => getNextMoveScore(second) - getNextMoveScore(first),
  )[0]
}

function getNextMovesByLane(items, lane) {
  return items.filter(
    (priority) =>
      priority.workflowStatus === 'Active' && priority.lane === lane,
  )
}

function getPrioritiesByWorkflow(items, workflowStatus) {
  return items.filter((priority) => priority.workflowStatus === workflowStatus)
}

function normalizeNextMove(move) {
  const oldLaneValues = ['Today', 'On Deck', 'Waiting On', 'This Week', 'Quick Win']
  const lane = move.lane || (oldLaneValues.includes(move.category) ? move.category : 'On Deck')
  const category = oldLaneValues.includes(move.category)
    ? 'Operate'
    : move.category || 'Build'

  return {
    ...createNextMove(),
    ...move,
    category,
    lane,
  }
}

function readNextMoves() {
  if (typeof window === 'undefined') return nextMoveSeedItems

  try {
    const stored = window.localStorage.getItem(nextMoveStorageKey)
    const legacyStored = window.localStorage.getItem(legacyNextMoveStorageKey)

    if (!stored && !legacyStored) return nextMoveSeedItems

    return JSON.parse(stored || legacyStored).map(normalizeNextMove)
  } catch (error) {
    console.error(error)

    return nextMoveSeedItems
  }
}

function readProjects() {
  if (typeof window === 'undefined') return projectSeedItems

  try {
    const stored = window.localStorage.getItem(projectStorageKey)

    if (!stored) return projectSeedItems

    return projectSeedItems.map((project) => ({
      ...project,
      ...JSON.parse(stored).find((storedProject) => storedProject.id === project.id),
    }))
  } catch (error) {
    console.error(error)

    return projectSeedItems
  }
}

function getProjectProgress(projectTitle, nextMoves) {
  const projectMoves = nextMoves.filter((move) => move.project === projectTitle)

  if (!projectMoves.length) return 0

  const completeMoves = projectMoves.filter(
    (move) => move.workflowStatus === 'Complete',
  )

  return Math.round((completeMoves.length / projectMoves.length) * 100)
}

function getTodayDate() {
  return new Date().toISOString().slice(0, 10)
}

function createNextMove(overrides = {}) {
  const timestamp = Date.now()

  return {
    id: `next-move-${timestamp}`,
    title: '',
    description: '',
    whyItMatters: '',
    nextAction: '',
    project: 'Website',
    category: 'Build',
    lane: 'On Deck',
    missionImpact: 3,
    foundationValue: 3,
    urgency: 3,
    effort: 2,
    workflowStatus: 'Active',
    pinned: false,
    createdDate: getTodayDate(),
    modifiedDate: getTodayDate(),
    completedDate: '',
    archivedDate: '',
    ...overrides,
  }
}

function updateNextMove(items, itemId, updates) {
  return items.map((item) =>
    item.id === itemId
      ? {
          ...item,
          ...updates,
          modifiedDate: getTodayDate(),
        }
      : item,
  )
}

function createInitialNotebook() {
  return notebookSections.reduce((notebook, section) => {
    notebook[section] = ''

    return notebook
  }, {})
}

function readNotebook() {
  if (typeof window === 'undefined') return createInitialNotebook()

  try {
    const stored = window.localStorage.getItem(notebookStorageKey)

    if (!stored) return createInitialNotebook()

    return {
      ...createInitialNotebook(),
      ...JSON.parse(stored),
    }
  } catch (error) {
    console.error(error)

    return createInitialNotebook()
  }
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="uppercase tracking-[0.24em] text-[#c98b2c] text-sm mb-3">
        {eyebrow}
      </p>

      <h2 className="font-serif text-3xl md:text-4xl font-normal leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-[#4b5563] mt-3 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

function Panel({ children, className = '' }) {
  return (
    <div className={`bg-white border border-[#e4d8c7] rounded-2xl p-6 md:p-8 shadow-[0_18px_50px_rgba(7,31,58,0.07)] ${className}`}>
      {children}
    </div>
  )
}

const dashboardViews = [
  {
    id: 'headquarters',
    label: 'Headquarters',
    description: 'What deserves my attention today?',
  },
  {
    id: 'operations',
    label: 'Operations',
    description: 'What needs to happen this week?',
  },
  {
    id: 'architecture',
    label: 'Operational Architecture',
    description: 'How does TRSP work?',
  },
  {
    id: 'blueprint',
    label: 'Blueprint Library',
    description: 'What are we building?',
  },
  {
    id: 'notebook',
    label: 'Founder Notebook',
    description: 'What am I thinking?',
  },
  {
    id: 'legacy',
    label: 'Legacy',
    description: 'What should future leaders know?',
  },
  {
    id: 'resources',
    label: 'Resources',
    description: 'Where does the work live?',
  },
]

function getDashboardViewFromHash() {
  if (typeof window === 'undefined') return 'headquarters'

  const hashView = window.location.hash.replace('#dashboard-', '')
  const viewExists = dashboardViews.some((view) => view.id === hashView)

  return viewExists ? hashView : 'headquarters'
}

function DashboardTabs({ activeView, onChange }) {
  return (
    <nav
      aria-label="Founder dashboard sections"
      className="rounded-2xl border border-[#e4d8c7] bg-white p-3 shadow-[0_18px_50px_rgba(7,31,58,0.06)]"
    >
      <p className="px-2 pb-3 text-xs uppercase tracking-[0.24em] text-[#c98b2c]">
        Headquarters Chapters
      </p>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
        {dashboardViews.map((view) => {
          const isActive = activeView === view.id

          return (
            <button
              key={view.id}
              type="button"
              onClick={() => onChange(view.id)}
              aria-pressed={isActive}
              className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8a066] ${
                isActive
                  ? 'border-[#071f3a] bg-[#071f3a] text-white'
                  : 'border-[#e4d8c7] bg-[#f8f5ef] text-[#334155] hover:border-[#c98b2c] hover:text-[#071f3a]'
              }`}
            >
              <span className="block text-sm font-semibold">
                {view.label}
              </span>
              <span
                className={`mt-2 block text-xs leading-relaxed ${
                  isActive ? 'text-white/75' : 'text-[#6b7280]'
                }`}
              >
                {view.description}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

function NextMoveCard({
  priority,
  label,
  isEditing = false,
  onEdit,
  onCancelEdit,
  onSave,
  onPin,
  onComplete,
  onArchive,
}) {
  const [draft, setDraft] = useState(priority)

  return (
    <article className="border border-[#e4d8c7] rounded-2xl bg-[#f8f5ef] p-5 text-[#071f3a]">
      {label && (
        <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c] mb-3">
          {label}
        </p>
      )}
      {isEditing ? (
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c98b2c]">Title</span>
            <input
              value={draft.title}
              onChange={(event) => setDraft({ ...draft, title: event.target.value })}
              className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c98b2c]">Description</span>
            <textarea
              value={draft.description}
              onChange={(event) => setDraft({ ...draft, description: event.target.value })}
              rows="3"
              className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c98b2c]">Next Action</span>
            <textarea
              value={draft.nextAction}
              onChange={(event) => setDraft({ ...draft, nextAction: event.target.value })}
              rows="2"
              className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3"
            />
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c98b2c]">Project</span>
              <input
                value={draft.project}
                onChange={(event) => setDraft({ ...draft, project: event.target.value })}
                className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c98b2c]">Category</span>
              <select
                value={draft.category}
                onChange={(event) => setDraft({ ...draft, category: event.target.value })}
                className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3"
              >
                <option>Build</option>
                <option>Improve</option>
                <option>Operate</option>
                <option>Grow</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c98b2c]">Lane</span>
              <select
                value={draft.lane}
                onChange={(event) => setDraft({ ...draft, lane: event.target.value })}
                className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3"
              >
                <option>Today</option>
                <option>On Deck</option>
                <option>Waiting On</option>
                <option>This Week</option>
                <option>Quick Win</option>
              </select>
            </label>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              ['missionImpact', 'Mission'],
              ['foundationValue', 'Foundation'],
              ['urgency', 'Urgency'],
              ['effort', 'Effort'],
            ].map(([key, name]) => (
              <label key={key} className="block">
                <span className="text-xs text-[#6b7280]">{name}</span>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={draft[key]}
                  onChange={(event) =>
                    setDraft({ ...draft, [key]: Number(event.target.value) })
                  }
                  className="mt-1 w-full rounded-xl border border-[#e4d8c7] bg-white px-3 py-2"
                />
              </label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onSave(priority.id, draft)}
              className="rounded-full bg-[#071f3a] px-4 py-2 text-sm font-semibold text-white"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancelEdit}
              className="rounded-full border border-[#d6c7b4] px-4 py-2 text-sm font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c] mb-2">
                {priority.project}
              </p>
              <h3 className="font-serif text-2xl leading-tight">
                {priority.title}
              </h3>
              <p className="text-[#4b5563] mt-3 leading-relaxed">
                {priority.description}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-[#c98b2c]/40 px-3 py-1 text-xs font-semibold text-[#c98b2c]">
              {getNextMoveScore(priority)}
            </span>
          </div>
          <div className="mt-5 border-l-2 border-[#c98b2c] pl-4">
            <p className="text-sm font-semibold text-[#071f3a]">
              Why this matters
            </p>
            <p className="text-[#4b5563] mt-1 leading-relaxed">
              {priority.whyItMatters}
            </p>
            <p className="text-sm font-semibold text-[#071f3a] mt-4">
              Next action
            </p>
            <p className="text-[#4b5563] mt-1 leading-relaxed">
              {priority.nextAction}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs text-[#4b5563]">
            <div className="rounded-xl bg-white border border-[#e4d8c7] p-2">
              <span className="block text-[#071f3a] font-semibold">{priority.missionImpact}</span>
              Mission
            </div>
            <div className="rounded-xl bg-white border border-[#e4d8c7] p-2">
              <span className="block text-[#071f3a] font-semibold">{priority.foundationValue}</span>
              Foundation
            </div>
            <div className="rounded-xl bg-white border border-[#e4d8c7] p-2">
              <span className="block text-[#071f3a] font-semibold">{priority.urgency}</span>
              Urgency
            </div>
            <div className="rounded-xl bg-white border border-[#e4d8c7] p-2">
              <span className="block text-[#071f3a] font-semibold">{priority.effort}</span>
              Effort
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <button type="button" onClick={() => onPin?.(priority.id)} className="rounded-full border border-[#d6c7b4] px-3 py-2 text-xs font-semibold">
              {priority.pinned ? 'Unpin' : 'Pin'}
            </button>
            <button type="button" onClick={() => onEdit?.(priority.id)} className="rounded-full border border-[#d6c7b4] px-3 py-2 text-xs font-semibold">
              Edit
            </button>
            <button type="button" onClick={() => onComplete?.(priority.id)} className="rounded-full border border-[#d6c7b4] px-3 py-2 text-xs font-semibold">
              Complete
            </button>
            <button type="button" onClick={() => onArchive?.(priority.id)} className="rounded-full border border-[#d6c7b4] px-3 py-2 text-xs font-semibold">
              Archive / No Longer Needed
            </button>
          </div>
        </>
      )}
    </article>
  )
}

function ProjectCard({ project, nextMoves, onProjectNotesChange }) {
  const projectMoves = nextMoves.filter((move) => move.project === project.title)
  const activeMoves = projectMoves.filter((move) => move.workflowStatus === 'Active')
  const progress = getProjectProgress(project.title, nextMoves)

  return (
    <article className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c] mb-2">
            {project.status}
          </p>
          <h3 className="font-serif text-3xl leading-tight">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-[#c98b2c]/40 px-3 py-1 text-xs font-semibold text-[#c98b2c]">
          Priority {project.priority}
        </span>
      </div>

      <p className="mt-4 text-[#4b5563] leading-relaxed">
        {project.purpose}
      </p>

      <div className="mt-5">
        <div className="flex items-center justify-between text-sm text-[#4b5563]">
          <span>Project progress</span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full border border-[#e4d8c7] bg-white">
          <div
            className="h-full bg-[#c98b2c]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c]">
          Next Moves
        </p>
        {activeMoves.length > 0 ? (
          activeMoves.map((move) => (
            <div key={move.id} className="rounded-xl bg-white border border-[#e4d8c7] p-3">
              <p className="font-semibold">{move.title}</p>
              <p className="text-sm text-[#4b5563] mt-1">{move.category} · {move.lane}</p>
            </div>
          ))
        ) : (
          <p className="rounded-xl bg-white border border-[#e4d8c7] p-3 text-sm text-[#4b5563]">
            No active Next Moves yet.
          </p>
        )}
      </div>

      <label className="mt-5 block">
        <span className="text-xs uppercase tracking-[0.22em] text-[#c98b2c]">
          Project Notes
        </span>
        <textarea
          value={project.notes || ''}
          onChange={(event) => onProjectNotesChange(project.id, event.target.value)}
          rows="3"
          placeholder="Add the next thought, link, or reminder for this project..."
          className="mt-2 w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3 text-[#071f3a] placeholder:text-[#6b7280] focus:border-[#c98b2c] focus:outline-none"
        />
      </label>
    </article>
  )
}

function QuickCapture({ onCapture }) {
  const [isOpen, setIsOpen] = useState(false)
  const [idea, setIdea] = useState('')

  function handleCapture() {
    if (!idea.trim()) return

    onCapture(idea.trim())
    setIdea('')
    setIsOpen(false)
  }

  return (
    <div className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c]">
            Founder Notebook
          </p>
          <h3 className="font-serif text-2xl">Capture without leaving focus.</h3>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-full bg-[#071f3a] px-4 py-2 text-sm font-semibold text-white"
        >
          Capture Idea
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          <textarea
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            rows="3"
            placeholder="Catch the idea, then return to the Next Move..."
            className="w-full rounded-xl border border-[#e4d8c7] bg-white px-4 py-3 text-[#071f3a] placeholder:text-[#6b7280] focus:border-[#c98b2c] focus:outline-none"
          />
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={handleCapture}
              className="rounded-full bg-[#071f3a] px-4 py-2 text-sm font-semibold text-white"
            >
              Save Idea
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-[#d6c7b4] px-4 py-2 text-sm font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function NotebookPage({ notebook, onNotebookChange }) {
  return (
    <section>
      <Panel>
        <SectionHeader
          eyebrow="Founder Notebook"
          title="A place for language, questions, and unfinished thoughts."
          description="This is not task management. It is a quiet place to hold ideas while the organization is still becoming."
        />

        <div className="grid lg:grid-cols-3 gap-5">
          {notebookSections.map((section) => (
            <label
              key={section}
              className="block rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-5"
            >
              <span className="block font-serif text-2xl leading-tight">
                {section}
              </span>
              <textarea
                value={notebook[section] || ''}
                onChange={(event) => onNotebookChange(section, event.target.value)}
                rows="7"
                placeholder="Write what should not be lost..."
                className="mt-4 w-full rounded-2xl border border-[#e4d8c7] bg-white px-4 py-3 text-[#071f3a] placeholder:text-[#6b7280] focus:border-[#c98b2c] focus:outline-none"
              />
            </label>
          ))}
        </div>
      </Panel>
    </section>
  )
}

function LegacyPage() {
  return (
    <section>
      <Panel className="overflow-hidden">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="uppercase tracking-[0.24em] text-[#c98b2c] text-sm mb-4">
              Legacy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Institutional memory for the people who may carry TRSP forward.
            </h2>
            <div className="mt-8 h-px w-24 bg-[#c98b2c]" />
            <p className="mt-8 text-[#4b5563] leading-relaxed text-lg">
              This chapter protects the why, the lessons, the decisions, and
              the story behind the work. It should feel archival, not
              administrative.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {legacySections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-5"
              >
                <h3 className="font-serif text-2xl leading-tight">
                  {section.title}
                </h3>
                <p className="mt-3 text-[#4b5563] leading-relaxed">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[#e4d8c7] pt-8">
          <p className="uppercase tracking-[0.24em] text-[#c98b2c] text-sm mb-5">
            Major Decisions
          </p>
          <div className="grid lg:grid-cols-2 gap-5">
            {legacyEntries.map((entry) => (
              <article
                key={entry.decision}
                className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-serif text-3xl leading-tight">
                    {entry.decision}
                  </h3>
                  <span className="rounded-full border border-[#c98b2c]/40 px-3 py-1 text-xs font-semibold text-[#c98b2c]">
                    {entry.status}
                  </span>
                </div>
                <p className="mt-5 text-sm font-semibold text-[#071f3a]">
                  Why it was made
                </p>
                <p className="mt-1 text-[#4b5563] leading-relaxed">
                  {entry.why}
                </p>
                <p className="mt-5 text-sm font-semibold text-[#071f3a]">
                  Alternatives considered
                </p>
                <p className="mt-1 text-[#4b5563] leading-relaxed">
                  {entry.alternatives}
                </p>
                <p className="mt-5 text-sm text-[#6b7280]">
                  Recorded {entry.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Panel>
    </section>
  )
}

function NextMoveArchive({ title, items, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  if (!items.length) return null

  return (
    <div className="rounded-2xl border border-[#e4d8c7] bg-white p-5">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-serif text-2xl">{title}</span>
        <span className="text-[#c98b2c]">{isOpen ? 'Close' : 'Open'}</span>
      </button>

      {isOpen && (
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-4"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-[#4b5563]">
                {item.project} · {item.completedDate || item.archivedDate || 'Stored'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function BlueprintProgress({ value, label }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-sm text-[#4b5563] mb-3">
        <span>{label}</span>
        <span className="text-[#d8a066]">{value}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
        className="h-3 rounded-full bg-[#f8f5ef] border border-[#e4d8c7] overflow-hidden"
      >
        <div
          className="h-full bg-[#d8a066] transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function BlueprintDocumentCard({
  document,
  value,
  onStatusChange,
  onNotesChange,
}) {
  return (
    <article className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-xl">
            {document.title}
          </h4>
          <p className="text-[#6b7280] mt-2 leading-relaxed">
            {document.purpose}
          </p>
        </div>

        <span
          className={`shrink-0 text-[0.65rem] uppercase tracking-widest font-semibold border rounded-full px-3 py-1 ${getBlueprintStatusClass(value.status)}`}
        >
          {value.status}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[#6b7280] uppercase tracking-widest text-xs mb-3">
          Status
        </p>
        <div className="grid grid-cols-2 gap-2">
          {blueprintStatuses.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => onStatusChange(document.id, status)}
              className={`border rounded-full px-3 py-2 text-xs font-semibold transition ${
                value.status === status
                  ? getBlueprintStatusClass(status)
                  : 'border-[#e4d8c7] bg-[#f8f5ef] text-[#6b7280] hover:border-[#d8a066] hover:text-[#d8a066]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <label className="block mt-5">
        <span className="text-[#6b7280] uppercase tracking-widest text-xs mb-3 block">
          Notes
        </span>
        <textarea
          value={value.notes}
          onChange={(event) => onNotesChange(document.id, event.target.value)}
          rows="3"
          placeholder="Add a draft link, next step, reminder, or thought..."
          className="w-full rounded-2xl border border-[#e4d8c7] bg-white px-4 py-3 text-[#071f3a] placeholder:text-[#4b5563] focus:border-[#d8a066] focus:outline-none"
        />
      </label>
    </article>
  )
}

function OrganizationalBlueprint({
  blueprint,
  onStatusChange,
  onNotesChange,
  onReset,
}) {
  const documentsWithState = blueprintDocuments.map((document) => ({
    ...document,
    status: blueprint[document.id]?.status || 'Not Started',
    notes: blueprint[document.id]?.notes || '',
  }))
  const overallProgress = calculateBlueprintProgress(documentsWithState)

  return (
    <section>
      <Panel className="border-[#d8a066]/35 bg-gradient-to-br from-white to-[#f8f5ef]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-10">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#d8a066] text-sm mb-4">
              TRSP Organizational Blueprint
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A living roadmap for building, documenting, and protecting the
              heart of The Renewed Strength Project.
            </h2>
          </div>

          <div className="border border-[#e4d8c7] rounded-2xl p-6 bg-[#f8f5ef]">
            <p className="text-[#6b7280] uppercase tracking-widest text-sm mb-3">
              Overall Blueprint
            </p>
            <p className="font-serif text-6xl text-[#d8a066]">
              {overallProgress}%
            </p>
            <p className="text-[#4b5563] mt-3 leading-relaxed">
              Saved locally in this browser for now.
            </p>
            <div className="mt-6">
              <BlueprintProgress value={overallProgress} label="Overall blueprint progress" />
            </div>
            <button
              type="button"
              onClick={onReset}
              className="mt-6 border border-[#d6c7b4] hover:border-[#d8a066] text-[#4b5563] hover:text-[#d8a066] rounded-full px-4 py-2 text-sm transition"
            >
              Reset Blueprint Notes
            </button>
          </div>
        </div>

        <div className="border border-[#d8a066]/30 rounded-2xl bg-[#f8f5ef] p-6 md:p-8 mb-10">
          <p className="text-[#6b7280] uppercase tracking-widest text-sm mb-4">
            Founder Note
          </p>
          <div className="space-y-4 text-[#334155] leading-relaxed text-lg">
            <p className="font-serif text-3xl text-[#071f3a] leading-snug">
              Cancer treatment saves lives. But many people are left wondering:
              Now what?
            </p>
            <p>
              Cancer takes strength, confidence, independence, participation,
              and identity.
            </p>
            <p>
              The Renewed Strength Project exists to help people pursue the
              restoration of what cancer has taken through individualized,
              evidence-informed movement and compassionate coaching.
            </p>
            <p className="border-l border-[#d8a066] pl-5 font-serif text-2xl text-[#071f3a] leading-snug">
              Everyone deserves the opportunity to pursue restoration.
              Everyone deserves to be met where they are.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {blueprintPhases.map((phase) => {
            const phaseDocuments = phase.items.map(([title, purpose]) => {
              const id = makeBlueprintId(phase.title, title)

              return {
                id,
                title,
                purpose,
                status: blueprint[id]?.status || 'Not Started',
                notes: blueprint[id]?.notes || '',
              }
            })
            const phaseProgress = calculateBlueprintProgress(phaseDocuments)

            return (
              <div key={phase.title}>
                <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-6 mb-5">
                  <div>
                    <p className="text-[#d8a066] uppercase tracking-widest text-sm mb-3">
                      {phase.title}
                    </p>
                    <h3 className="font-serif text-3xl">
                      Document foundation
                    </h3>
                  </div>
                  <div className="self-end">
                    <BlueprintProgress value={phaseProgress} label={`${phase.title} progress`} />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  {phaseDocuments.map((document) => (
                    <BlueprintDocumentCard
                      key={document.id}
                      document={document}
                      value={{
                        status: document.status,
                        notes: document.notes,
                      }}
                      onStatusChange={onStatusChange}
                      onNotesChange={onNotesChange}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 border-y border-[#d8a066]/40 py-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8">
            <div>
              <p className="text-[#d8a066] uppercase tracking-widest text-sm mb-4">
                Living Ideas
              </p>
              <h3 className="font-serif text-4xl leading-tight">
                Founder’s notebook.
              </h3>
              <p className="text-[#4b5563] mt-4 leading-relaxed">
                Not tasks. Just language and instincts worth keeping close.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {livingIdeas.map((idea) => (
                <div
                  key={idea}
                  className="border border-[#e4d8c7] rounded-2xl bg-[#f8f5ef] p-4"
                >
                  <p className="font-serif text-xl text-[#071f3a] leading-snug">
                    {idea}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </section>
  )
}

export default function Dashboard({ onSignOut }) {
  const [dashboard, setDashboard] = useState(fallbackDashboard)
  const [dataStatus, setDataStatus] = useState('Loading live data...')
  const [lastUpdated, setLastUpdated] = useState('')
  const [blueprint, setBlueprint] = useState(readBlueprintState)
  const [notebook, setNotebook] = useState(readNotebook)
  const [nextMoves, setNextMoves] = useState(readNextMoves)
  const [projects, setProjects] = useState(readProjects)
  const [editingNextMoveId, setEditingNextMoveId] = useState('')
  const [isAddingNextMove, setIsAddingNextMove] = useState(false)
  const [newNextMove, setNewNextMove] = useState(null)
  const [activeView, setActiveView] = useState(getDashboardViewFromHash)
  const [todaysReflection] = useState(
    () => reflectionPrinciples[Math.floor(Math.random() * reflectionPrinciples.length)],
  )

  useEffect(() => {
    let isMounted = true

    async function loadDashboardData() {
      try {
        const dashboardToken = window.sessionStorage.getItem('trsp_dashboard_token')
        const response = await fetch('/api/dashboard', {
          headers: {
            Authorization: `Bearer ${dashboardToken || ''}`,
          },
        })
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
  const todaysFocus = useMemo(
    () => getTopPriority(nextMoves),
    [nextMoves],
  )
  const activeNextMoves = useMemo(
    () => getPrioritiesByWorkflow(nextMoves, 'Active'),
    [nextMoves],
  )
  const completedNextMoves = useMemo(
    () => getPrioritiesByWorkflow(nextMoves, 'Complete'),
    [nextMoves],
  )
  const archivedNextMoves = useMemo(
    () => getPrioritiesByWorkflow(nextMoves, 'Archived'),
    [nextMoves],
  )
  const partnerNewRequests = Number(dashboard.partnerNewRequests) || 0
  const partnerActiveConversations = Number(dashboard.partnerActiveConversations) || 0
  const partnerFollowUpsDue = Number(dashboard.partnerFollowUpsDue) || 0

  useEffect(() => {
    window.localStorage.setItem(blueprintStorageKey, JSON.stringify(blueprint))
  }, [blueprint])

  useEffect(() => {
    window.localStorage.setItem(notebookStorageKey, JSON.stringify(notebook))
  }, [notebook])

  useEffect(() => {
    window.localStorage.setItem(
      nextMoveStorageKey,
      JSON.stringify(nextMoves),
    )
  }, [nextMoves])

  useEffect(() => {
    window.localStorage.setItem(projectStorageKey, JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    function handleHashChange() {
      setActiveView(getDashboardViewFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  function changeDashboardView(viewId) {
    setActiveView(viewId)
    window.history.replaceState(null, '', `#dashboard-${viewId}`)
  }

  function updateBlueprintStatus(documentId, status) {
    setBlueprint((current) => ({
      ...current,
      [documentId]: {
        ...current[documentId],
        status,
      },
    }))
  }

  function updateBlueprintNotes(documentId, notes) {
    setBlueprint((current) => ({
      ...current,
      [documentId]: {
        ...current[documentId],
        notes,
      },
    }))
  }

  function resetBlueprint() {
    const shouldReset = window.confirm(
      'Reset all Organizational Blueprint statuses and notes in this browser?',
    )

    if (shouldReset) {
      setBlueprint(createInitialBlueprintState())
    }
  }

  function updateNotebook(section, value) {
    setNotebook((current) => ({
      ...current,
      [section]: value,
    }))
  }

  function captureIdea(idea) {
    const entry = `${getTodayDate()} - ${idea}`

    setNotebook((current) => ({
      ...current,
      'Future Ideas': current['Future Ideas']
        ? `${entry}\n${current['Future Ideas']}`
        : entry,
    }))
  }

  function updateProjectNotes(projectId, notes) {
    setProjects((current) =>
      current.map((project) =>
        project.id === projectId
          ? {
              ...project,
              notes,
            }
          : project,
      ),
    )
  }

  function startAddingNextMove() {
    setNewNextMove(createNextMove())
    setIsAddingNextMove(true)
  }

  function cancelAddingNextMove() {
    setNewNextMove(null)
    setIsAddingNextMove(false)
  }

  function addNextMove(nextMove) {
    setNextMoves((current) => [nextMove, ...current])
    setNewNextMove(null)
    setIsAddingNextMove(false)
  }

  function saveNextMove(itemId, updates) {
    setNextMoves((current) =>
      updateNextMove(current, itemId, updates),
    )
    setEditingNextMoveId('')
  }

  function toggleNextMovePin(itemId) {
    setNextMoves((current) =>
      current.map((item) => ({
        ...item,
        pinned:
          item.id === itemId
            ? !item.pinned
            : item.pinned && item.id !== itemId
              ? false
              : item.pinned,
        modifiedDate: item.id === itemId ? getTodayDate() : item.modifiedDate,
      })),
    )
  }

  function completeNextMove(itemId) {
    setNextMoves((current) =>
      updateNextMove(current, itemId, {
        workflowStatus: 'Complete',
        pinned: false,
        completedDate: getTodayDate(),
      }),
    )
  }

  function archiveNextMove(itemId) {
    setNextMoves((current) =>
      updateNextMove(current, itemId, {
        workflowStatus: 'Archived',
        pinned: false,
        archivedDate: getTodayDate(),
      }),
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#071f3a]">

      <section className="border-b border-[#e4d8c7]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="bg-[#071f3a] text-white rounded-2xl p-8 md:p-12 shadow-[0_24px_70px_rgba(7,31,58,0.2)]">
            <p className="uppercase tracking-[0.3em] text-[#d8a066] text-sm mb-4">
              The Renewed Strength Project
            </p>

            <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight max-w-4xl text-white">
              TRSP Headquarters
            </h1>

            <p className="text-white/80 text-2xl mt-8 max-w-3xl leading-relaxed font-serif">
              Good morning, Scott.
            </p>

            <p className="text-white/75 text-xl mt-5 max-w-3xl leading-relaxed">
              Cancer takes. Today we continue building a place where
              restoration is possible.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="border border-[#d8a066]/60 text-[#d8a066] rounded-full px-4 py-2">
                {dataStatus}
              </span>

              {lastUpdated && (
                <span>
                  Last updated {new Date(lastUpdated).toLocaleString()}
                </span>
              )}

              {onSignOut && (
                <button
                  type="button"
                  onClick={onSignOut}
                  className="border border-white/25 hover:border-[#d8a066] text-white/80 hover:text-[#d8a066] rounded-full px-4 py-2 transition"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-8 py-10 space-y-8">
        <DashboardTabs activeView={activeView} onChange={changeDashboardView} />

        {activeView === 'headquarters' && (
          <>
        <section>
          <div className="rounded-2xl border border-[#071f3a] bg-[#071f3a] p-6 md:p-8 shadow-[0_24px_70px_rgba(7,31,58,0.18)] text-white">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-start">
              <div className="space-y-7">
                <div>
                  <p className="uppercase tracking-[0.24em] text-[#d8a066] text-sm mb-4">
                    Headquarters
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl leading-tight text-white">
                    What is the next right move for TRSP?
                  </h2>
                  <p className="mt-6 text-white/75 leading-relaxed text-lg max-w-xl">
                    The goal is not to do everything. The goal is to take the
                    next right move with clarity, care, and purpose.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="uppercase tracking-[0.22em] text-[#d8a066] text-xs mb-4">
                    Mission Operating Flow
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-white/85">
                    {['Mission', 'Projects', 'Next Moves', "Today's Focus"].map((step, index) => (
                      <Fragment key={step}>
                        <span className="rounded-full border border-white/20 px-4 py-2">
                          {step}
                        </span>
                        {index < 3 && (
                          <span className="text-[#d8a066]" aria-hidden="true">
                            /
                          </span>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#f8f5ef] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                {todaysFocus ? (
                  <NextMoveCard
                    priority={todaysFocus}
                    label="Today's Focus"
                    isEditing={editingNextMoveId === todaysFocus.id}
                    onEdit={setEditingNextMoveId}
                    onCancelEdit={() => setEditingNextMoveId('')}
                    onSave={saveNextMove}
                    onPin={toggleNextMovePin}
                    onComplete={completeNextMove}
                    onArchive={archiveNextMove}
                  />
                ) : (
                  <div className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-6 text-[#071f3a]">
                    <p className="uppercase tracking-[0.22em] text-[#c98b2c] text-xs mb-3">
                      Today's Focus
                    </p>
                    <p className="font-serif text-3xl leading-tight">
                      No active Next Moves yet.
                    </p>
                    <p className="mt-4 text-[#4b5563] leading-relaxed">
                      Add a Next Move below to give Headquarters a clear first
                      priority.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <Panel>
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
              <div>
                <p className="uppercase tracking-[0.24em] text-[#c98b2c] text-sm mb-4">
                  Our Mission
                </p>
                <h2 className="font-serif text-4xl leading-tight">
                  Cancer takes.
                </h2>
                <p className="mt-6 text-[#4b5563] leading-relaxed text-lg">
                  We help people pursue the restoration of what cancer has
                  taken through individualized, evidence-informed movement and
                  compassionate coaching.
                </p>
                <p className="mt-6 font-serif text-2xl text-[#071f3a]">
                  Who needs us today?
                </p>
              </div>
              <div className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-6">
                <p className="uppercase tracking-[0.24em] text-[#c98b2c] text-sm mb-4">
                  Today's Reflection
                </p>
                <p className="font-serif text-3xl leading-tight">
                  {todaysReflection}
                </p>
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <QuickCapture onCapture={captureIdea} />
        </section>

        <section>
          <Panel>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <SectionHeader
                eyebrow="Projects"
                title="Projects generate the Next Moves."
                description="TRSP Headquarters starts with mission, organizes the work by project, then surfaces the next right move."
              />
              <button
                type="button"
                onClick={startAddingNextMove}
                className="rounded-full bg-[#071f3a] px-5 py-3 text-sm font-semibold text-white"
              >
                Add Next Move
              </button>
            </div>

            {isAddingNextMove && newNextMove && (
              <div className="mb-6">
                <NextMoveCard
                  priority={newNextMove}
                  label="New Next Move"
                  isEditing
                  onCancelEdit={cancelAddingNextMove}
                  onSave={(_, draft) => addNextMove(draft)}
                />
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-5">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  nextMoves={nextMoves}
                  onProjectNotesChange={updateProjectNotes}
                />
              ))}
            </div>
          </Panel>
        </section>

        <section className="grid lg:grid-cols-3 gap-8">
          <Panel>
            <SectionHeader eyebrow="On Deck" title="Next in Line" />
            <div className="space-y-4">
              {getNextMovesByLane(nextMoves, 'On Deck').map((priority) => (
                <NextMoveCard
                  key={priority.id}
                  priority={priority}
                  isEditing={editingNextMoveId === priority.id}
                  onEdit={setEditingNextMoveId}
                  onCancelEdit={() => setEditingNextMoveId('')}
                  onSave={saveNextMove}
                  onPin={toggleNextMovePin}
                  onComplete={completeNextMove}
                  onArchive={archiveNextMove}
                />
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader eyebrow="Waiting On" title="Blocked or Pending" />
            <div className="space-y-4">
              {getNextMovesByLane(nextMoves, 'Waiting On').map((priority) => (
                <NextMoveCard
                  key={priority.id}
                  priority={priority}
                  isEditing={editingNextMoveId === priority.id}
                  onEdit={setEditingNextMoveId}
                  onCancelEdit={() => setEditingNextMoveId('')}
                  onSave={saveNextMove}
                  onPin={toggleNextMovePin}
                  onComplete={completeNextMove}
                  onArchive={archiveNextMove}
                />
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader eyebrow="Quick Wins" title="Small Faithful Moves" />
            <div className="space-y-4">
              {getNextMovesByLane(nextMoves, 'Quick Win').map((priority) => (
                <NextMoveCard
                  key={priority.id}
                  priority={priority}
                  isEditing={editingNextMoveId === priority.id}
                  onEdit={setEditingNextMoveId}
                  onCancelEdit={() => setEditingNextMoveId('')}
                  onSave={saveNextMove}
                  onPin={toggleNextMovePin}
                  onComplete={completeNextMove}
                  onArchive={archiveNextMove}
                />
              ))}
            </div>
          </Panel>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <Panel>
            <SectionHeader eyebrow="This Week" title="Operational Priorities" />
            <div className="space-y-3">
              {getNextMovesByLane(nextMoves, 'This Week').map((priority) => (
                <NextMoveCard
                  key={priority.id}
                  priority={priority}
                  isEditing={editingNextMoveId === priority.id}
                  onEdit={setEditingNextMoveId}
                  onCancelEdit={() => setEditingNextMoveId('')}
                  onSave={saveNextMove}
                  onPin={toggleNextMovePin}
                  onComplete={completeNextMove}
                  onArchive={archiveNextMove}
                />
              ))}
              {priorities.map((priority) => (
                <div
                  key={priority}
                  className="border border-[#e4d8c7] rounded-2xl p-4 bg-[#f8f5ef] text-[#334155]"
                >
                  {priority}
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader eyebrow="Recent Wins" title="Evidence of Movement" />
            <div className="space-y-3">
              {recentWins.map((win) => (
                <div
                  key={win}
                  className="border-l-2 border-[#c98b2c] bg-[#f8f5ef] px-5 py-4 text-[#334155]"
                >
                  {win}
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section>
          <Panel>
            <SectionHeader
              eyebrow="Next Moves"
              title="Active work, completed work, and archived work."
              description="Active items inform Today's Focus, On Deck, Waiting On, and Quick Wins. Completed and archived items stay preserved without taking over the morning."
            />

            <div className="grid lg:grid-cols-2 gap-5">
              {activeNextMoves.map((priority) => (
                <NextMoveCard
                  key={priority.id}
                  priority={priority}
                  isEditing={editingNextMoveId === priority.id}
                  onEdit={setEditingNextMoveId}
                  onCancelEdit={() => setEditingNextMoveId('')}
                  onSave={saveNextMove}
                  onPin={toggleNextMovePin}
                  onComplete={completeNextMove}
                  onArchive={archiveNextMove}
                />
              ))}
            </div>

            <div className="mt-6 grid lg:grid-cols-2 gap-5">
              <NextMoveArchive
                title="Completed"
                items={completedNextMoves}
              />
              <NextMoveArchive
                title="Archived"
                items={archivedNextMoves}
              />
            </div>
          </Panel>
        </section>

        <section>
          <SectionHeader
            eyebrow="Fall Pilot"
            title="Pilot Readiness Snapshot"
            description="The current build is intentionally simple: five local participants, personal training as the first funded service, and existing tools doing the jobs they already do well."
          />

          <div className="grid md:grid-cols-4 gap-4">
            {pilotStats.map((stat) => (
              <Panel key={stat.label} className="rounded-2xl">
                <p className="text-[#6b7280] text-sm">
                  {stat.label}
                </p>
                <p className="text-5xl font-bold mt-3">
                  {stat.value}
                </p>
                <p className="text-[#4b5563] mt-3">
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
                <p className="uppercase tracking-widest text-[#6b7280] text-sm mb-3">
                  Funding Progress
                </p>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Fall Pilot Funding
                </h2>

                <p className="text-[#4b5563] mt-3 max-w-2xl leading-relaxed">
                  This shows how much has been raised toward the current pilot
                  goal and how much is still needed to fully fund the first
                  five local participants.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
                  <p className="text-[#6b7280] text-sm">
                    Goal
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {formatCurrency(fundingProgress.goal)}
                  </p>
                </div>

                <div className="border border-[#d8a066]/50 rounded-2xl p-5 bg-[#f8f5ef]">
                  <p className="text-[#6b7280] text-sm">
                    Raised
                  </p>
                  <p className="text-3xl font-bold mt-2 text-[#d8a066]">
                    {formatCurrency(fundingProgress.raised)}
                  </p>
                </div>

                <div className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
                  <p className="text-[#6b7280] text-sm">
                    Left To Raise
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {formatCurrency(fundingProgress.remaining)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-4 text-sm text-[#4b5563] mb-3">
                <span>
                  {Math.round(fundingProgress.fundedPercent)}% funded
                </span>
                <span>
                  {formatCurrency(fundingProgress.remaining)} remaining
                </span>
              </div>

              <div className="h-4 rounded-full bg-[#f8f5ef] border border-[#e4d8c7] overflow-hidden">
                <div
                  className="h-full bg-[#d8a066] transition-all"
                  style={{ width: `${fundingProgress.fundedPercent}%` }}
                />
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <Panel>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <p className="uppercase tracking-widest text-[#6b7280] text-sm mb-3">
                  Partnership Requests
                </p>

                <h2 className="text-3xl md:text-4xl font-bold">
                  New Community Partner Interest
                </h2>

                <p className="text-[#4b5563] mt-3 max-w-2xl leading-relaxed">
                  Partner inquiries submitted through the website will appear
                  in the Google Sheet and surface here so follow-up does not
                  get missed.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="border border-[#d8a066]/50 rounded-2xl p-5 bg-[#f8f5ef]">
                  <p className="text-[#6b7280] text-sm">
                    New Requests
                  </p>
                  <p className="text-4xl font-bold mt-2 text-[#d8a066]">
                    {formatNumber(partnerNewRequests)}
                  </p>
                </div>

                <div className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
                  <p className="text-[#6b7280] text-sm">
                    Conversations
                  </p>
                  <p className="text-4xl font-bold mt-2">
                    {formatNumber(partnerActiveConversations)}
                  </p>
                </div>

                <div className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
                  <p className="text-[#6b7280] text-sm">
                    Follow Ups Due
                  </p>
                  <p className="text-4xl font-bold mt-2">
                    {formatNumber(partnerFollowUpsDue)}
                  </p>
                </div>
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <Panel>
            <p className="text-[#6b7280] uppercase tracking-widest text-sm mb-4">
              North Star
            </p>

            <h2 className="text-3xl font-semibold mb-6">
              Why This Exists
            </h2>

            <p className="text-[#334155] leading-relaxed text-lg">
              Cancer treatment saves lives. Restoration helps people work
              toward the life and activities they value.
            </p>

            <p className="text-[#6b7280] mt-6 leading-relaxed">
              The pilot exists to remove cost as a barrier to safe,
              individualized personal training for people treated for cancer
              in Northern Colorado.
            </p>
          </Panel>
        </section>
          </>
        )}

        {activeView === 'operations' && (
          <>
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
                  className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-[#d8a066] border border-[#d8a066]/40 rounded-full px-3 py-1">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-[#4b5563] mt-3 leading-relaxed">
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
                  className="border border-[#e4d8c7] rounded-2xl p-4 bg-[#f8f5ef] text-[#334155]"
                >
                  {priority}
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section>
          <Panel>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
              <div>
                <SectionHeader
                  eyebrow="Funding"
                  title="Weekly Funding Position"
                  description="The current funding picture stays close to operations because every participant slot depends on clear care for the pilot budget."
                />
              </div>

              <div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
                    <p className="text-[#6b7280] text-sm">Goal</p>
                    <p className="text-3xl font-bold mt-2">
                      {formatCurrency(fundingProgress.goal)}
                    </p>
                  </div>
                  <div className="border border-[#d8a066]/50 rounded-2xl p-5 bg-[#f8f5ef]">
                    <p className="text-[#6b7280] text-sm">Raised</p>
                    <p className="text-3xl font-bold mt-2 text-[#d8a066]">
                      {formatCurrency(fundingProgress.raised)}
                    </p>
                  </div>
                  <div className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]">
                    <p className="text-[#6b7280] text-sm">Remaining</p>
                    <p className="text-3xl font-bold mt-2">
                      {formatCurrency(fundingProgress.remaining)}
                    </p>
                  </div>
                </div>
                <div className="mt-6 h-4 rounded-full bg-[#f8f5ef] border border-[#e4d8c7] overflow-hidden">
                  <div
                    className="h-full bg-[#d8a066] transition-all"
                    style={{ width: `${fundingProgress.fundedPercent}%` }}
                  />
                </div>
              </div>
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
                  className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]"
                >
                  <p className="text-4xl font-bold">
                    {formatNumber(stage.count)}
                  </p>
                  <h3 className="text-lg font-semibold mt-4">
                    {stage.label}
                  </h3>
                  <p className="text-[#6b7280] text-sm mt-2 leading-relaxed">
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
                  className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]"
                >
                  <h3 className="text-xl font-semibold text-[#d8a066]">
                    {item.title}
                  </h3>
                  <p className="text-[#4b5563] mt-2">
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
                  className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef] hover:border-[#d8a066] transition"
                >
                  <h3 className="text-xl font-semibold">
                    {tool.name}
                  </h3>
                  <p className="text-[#6b7280] mt-2">
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
                  className="border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef]"
                >
                  <p className="text-[#6b7280] text-sm">
                    {measure.label}
                  </p>
                  <p className="text-3xl font-bold mt-2">
                    {measure.value}
                  </p>
                  <p className="text-[#6b7280] mt-2">
                    {measure.detail}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <p className="text-[#6b7280] uppercase tracking-widest text-sm mb-4">
              North Star
            </p>

            <h2 className="text-3xl font-semibold mb-6">
              Why This Exists
            </h2>

            <p className="text-[#334155] leading-relaxed text-lg">
              Cancer treatment saves lives. Restoration helps people work
              toward the life and activities they value.
            </p>

            <p className="text-[#6b7280] mt-6 leading-relaxed">
              The pilot exists to remove cost as a barrier to safe,
              individualized personal training for people treated for cancer
              in Northern Colorado.
            </p>
          </Panel>
        </section>

          </>
        )}

        {activeView === 'blueprint' && (
          <OrganizationalBlueprint
            blueprint={blueprint}
            onStatusChange={updateBlueprintStatus}
            onNotesChange={updateBlueprintNotes}
            onReset={resetBlueprint}
          />
        )}

        {activeView === 'architecture' && (
          <>
        <section>
          <Panel>
            <SectionHeader
              eyebrow="Operational Architecture"
              title="How TRSP functions as a system."
              description="This chapter is not a task list. It is the working map of how people, funding, referral pathways, coaching, documentation, and restoration connect."
            />

            <div className="mb-8 rounded-2xl bg-[#071f3a] p-6 text-white">
              <p className="uppercase tracking-[0.24em] text-[#d8a066] text-sm mb-5">
                Living Systems Map
              </p>
              <div className="flex flex-wrap items-center gap-3 text-center">
                {[
                  'Mission',
                  'Funding',
                  'Participants',
                  'Assessments',
                  'Training',
                  'Outcomes',
                  'Board',
                  'Community',
                  'Annual Report',
                  'Legacy',
                ].map((step, index, steps) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-white/20 px-4 py-2 text-sm">
                      {step}
                    </span>
                    {index < steps.length - 1 && (
                      <span className="text-[#d8a066]">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['Referral Pathway', 'How someone moves from awareness or referral into a supportive conversation.'],
                ['Participant Lifecycle', 'How a participant moves from inquiry to assessment, coaching, progress tracking, and transition.'],
                ['Funding Flow', 'How generosity becomes paid training access without cost falling on the participant.'],
                ['Restoration Process', 'How individualized movement supports meaningful return to life.'],
                ['Documentation System', 'How forms, notes, outcomes, and operational records stay organized.'],
                ['Future Architecture', 'Where trainer onboarding, portals, calendars, and reporting can grow later.'],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#e4d8c7] bg-[#f8f5ef] p-5"
                >
                  <h3 className="font-serif text-2xl leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-[#4b5563] leading-relaxed">
                    {description}
                  </p>
                </article>
              ))}
            </div>
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
            <p className="text-[#6b7280] uppercase tracking-widest text-sm mb-4">
              Current Phase
            </p>

            <h2 className="text-3xl font-semibold mb-4">
              Foundation Era
            </h2>

            <p className="text-[#4b5563] text-lg">
              Years 0-2
            </p>

            <div className="mt-8 space-y-4">
              <div className="border border-[#e4d8c7] rounded-2xl p-4 bg-[#f8f5ef]">
                <h3 className="font-semibold mb-2">
                  Primary Objective
                </h3>

                <p className="text-[#4b5563]">
                  Build systems, learn operationally, and prove the model
                  carefully with a local pilot.
                </p>
              </div>

              <div className="border border-[#e4d8c7] rounded-2xl p-4 bg-[#f8f5ef]">
                <h3 className="font-semibold mb-2">
                  Current Focus
                </h3>

                <ul className="space-y-2 text-[#4b5563]">
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
            <p className="text-[#6b7280] uppercase tracking-widest text-sm mb-4">
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
                  className="border border-[#e4d8c7] rounded-2xl p-4 text-center text-[#334155] bg-[#f8f5ef]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </section>
          </>
        )}

        {activeView === 'notebook' && (
          <NotebookPage
            notebook={notebook}
            onNotebookChange={updateNotebook}
          />
        )}

        {activeView === 'legacy' && (
          <LegacyPage />
        )}

        {activeView === 'resources' && (
          <section>
            <Panel>
              <SectionHeader
                eyebrow="Resources"
                title="Where The Work Lives"
                description="A quieter home for the existing dashboard links and tools. Nothing is removed from the operating view; this chapter simply gathers them in one place."
              />

              <div className="grid md:grid-cols-2 gap-4">
                {externalTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-[#e4d8c7] rounded-2xl p-5 bg-[#f8f5ef] hover:border-[#c98b2c] transition"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c] mb-3">
                      Tool Link
                    </p>
                    <h3 className="font-serif text-2xl leading-tight group-hover:text-[#c98b2c] transition">
                      {tool.name}
                    </h3>
                    <p className="text-[#4b5563] mt-3 leading-relaxed">
                      {tool.purpose}
                    </p>
                  </a>
                ))}
              </div>
            </Panel>
          </section>
        )}

      </main>

    </div>
  )
}
