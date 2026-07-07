import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'

const donateUrl = '/donate'
const partnerGuideUrl = '/TRSP_Partner_Guide_Website_Edition_v1_2_ConsistentMargins.pdf'

const fallbackImpact = {
  participantsPlanned: 5,
  fundingRaised: 2132,
  fundingGoal: 7500,
  remainingGoal: 5368,
  sessionsNeeded: 80,
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

function SectionLabel({ children }) {
  return (
    <p className="text-[#c98b2c] uppercase tracking-[0.28em] text-xs font-bold mb-5">
      {children}
    </p>
  )
}

function GoldDivider() {
  return <div className="w-16 h-px bg-[#c98b2c] my-8"></div>
}

function Hero() {
  return (
    <section
      id="main-content"
      tabIndex="-1"
      className="bg-[#f8f5ef] text-[#071f3a] pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>A Pathway Back To Life</SectionLabel>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-5xl">
            Recovery is measured by the return of life.
          </h1>

          <GoldDivider />

          <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
            The Renewed Strength Project removes financial barriers to
            evidence-informed, individualized, purpose-driven training for
            individuals affected by cancer in Northern Colorado.
          </p>

          <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mt-6">
            We do not train people simply to exercise. We help people work
            toward the strength, confidence, independence, and participation
            they have been fighting to return to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="/apply"
              className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              Apply for Support
            </a>

            <a
              href={donateUrl}
              className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              Support the Mission
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 w-28 h-28 border-l border-t border-[#c98b2c]"></div>
          <div className="absolute -right-5 -bottom-5 w-28 h-28 border-r border-b border-[#c98b2c]"></div>

          <img
            src="/trsp-hero-alpine-lake-original.jpeg"
            alt="A quiet alpine lake beneath Colorado mountain walls"
            className="relative w-full aspect-[4/3] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

function WhyWeExist() {
  return (
    <section className="bg-white py-20 md:py-28 px-5 sm:px-6 text-[#071f3a]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16">
        <div>
          <SectionLabel>Why We Exist</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Cancer takes.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
          <p>
            It can take strength, confidence, independence, routines, and the
            activities that make life feel like life.
          </p>

          <p className="text-2xl md:text-3xl font-serif leading-snug text-[#071f3a] border-l border-[#c98b2c] pl-6">
            We cannot restore everything cancer takes. But we believe every
            person deserves the opportunity to pursue the restoration of what
            they can.
          </p>

          <p>
            The Renewed Strength Project exists to help individuals affected by
            cancer pursue restoration through individualized,
            evidence-informed movement and compassionate coaching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/our-philosophy"
              className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-7 py-4 rounded-sm transition text-center"
            >
              Learn About Our Philosophy
            </a>

            <a
              href="/participant-program"
              className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-7 py-4 rounded-sm transition text-center"
            >
              Explore the Participant Program
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StrengthMoreThanMuscle() {
  const items = [
    'Walking farther with confidence',
    'Carrying groceries or household items',
    'Returning to work or daily routines',
    'Playing with children or grandchildren',
    'Rejoining recreation, hiking, and community life',
    'Feeling capable in the body again',
  ]

  return (
    <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6 text-[#071f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <SectionLabel>Strength Is More Than Muscle</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            We help people work toward what cancer has interrupted.
          </h2>
          <GoldDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-12">
          {items.map((item) => (
            <div key={item} className="bg-[#f8f5ef] p-7">
              <p className="text-lg text-[#334155] leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PathForward() {
  const steps = [
    {
      label: '01',
      title: 'Apply',
      copy:
        'Individuals begin by sharing where they are, what they are hoping to restore, and what support they may need.',
    },
    {
      label: '02',
      title: 'Review Fit',
      copy:
        'We review goals, current capacity, safety considerations, funding availability, and whether the program is an appropriate next step.',
    },
    {
      label: '03',
      title: 'Begin Support',
      copy:
        'When fit and funding align, training is structured around safety, confidence, and participation in life outside the gym.',
    },
  ]

  return (
    <section className="bg-white py-24 md:py-32 px-5 sm:px-6 text-[#071f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-end">
          <div>
            <SectionLabel>The Path Forward</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              A simple pathway from need to supported restoration.
            </h2>
          </div>

          <p className="text-lg text-[#4b5563] leading-relaxed">
            The program is intentionally personal. We avoid promising a
            specific medical outcome. We focus on safe, appropriate support
            that helps each person work toward meaningful next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {steps.map((step) => (
            <div key={step.title} className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
              <p className="text-[#c98b2c] font-serif text-5xl mb-8">
                {step.label}
              </p>
              <h3 className="font-serif text-3xl mb-4">
                {step.title}
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EvidencePurposePossibility() {
  return (
    <section className="bg-[#071f3a] py-24 md:py-32 px-5 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.92fr] gap-12 lg:gap-16 items-center">
        <div>
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Evidence-informed. Individualized. Purpose-driven.
          </h2>

          <div className="w-16 h-px bg-[#d8a066] my-8"></div>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
            Movement is not the finish line. It is a pathway. Training choices
            are shaped by the person, their capacity, their goals, and the life
            they are working to participate in again.
          </p>
        </div>

        <img
          src="/trsp-strength-lift-original.jpeg"
          alt="A person completing a strong deadlift in a training facility"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover border border-[#d8a066]/40"
        />
      </div>
    </section>
  )
}

function ExperiencePurpose() {
  return (
    <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6 text-[#071f3a]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
        <div>
          <SectionLabel>Built On Experience</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Driven by purpose.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
          <p>
            Founder Scott Anderson, M.S., CPT, has worked across strength and
            conditioning, personal training, and exercise oncology settings
            with individuals navigating and recovering from cancer treatment.
          </p>

          <p>
            Again and again, the same barrier appeared: people wanted qualified
            support to rebuild strength and return to meaningful parts of life,
            but the cost of that support put it out of reach.
          </p>

          <p className="text-2xl md:text-3xl font-serif leading-snug text-[#071f3a]">
            No financial barriers. No generic pathway. Just appropriate,
            individualized support for the life each person is working toward.
          </p>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const [impact, setImpact] = useState(fallbackImpact)
  const [dataStatus, setDataStatus] = useState('Pilot funding snapshot')

  useEffect(() => {
    let isMounted = true

    async function loadImpact() {
      try {
        const response = await fetch('/api/impact')

        if (!response.ok) {
          throw new Error('Impact data unavailable')
        }

        const data = await response.json()

        if (!isMounted) return

        setImpact({ ...fallbackImpact, ...(data.impact || {}) })
        setDataStatus(data.source === 'live' ? 'Live funding snapshot' : 'Pilot funding snapshot')
      } catch (error) {
        console.error(error)

        if (!isMounted) return

        setImpact(fallbackImpact)
        setDataStatus('Pilot funding snapshot')
      }
    }

    loadImpact()

    return () => {
      isMounted = false
    }
  }, [])

  const percentFunded = useMemo(() => {
    if (!impact.fundingGoal) return 0

    return Math.min((impact.fundingRaised / impact.fundingGoal) * 100, 100)
  }, [impact.fundingGoal, impact.fundingRaised])

  return (
    <section className="bg-white py-24 md:py-32 px-5 sm:px-6 text-[#071f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-end">
          <div>
            <SectionLabel>Current Pilot</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Help launch restoration support this fall.
            </h2>
          </div>

          <p className="text-lg text-[#4b5563] leading-relaxed">
            Each gift helps remove cost as a barrier for individuals affected
            by cancer who are working to rebuild strength, confidence, and
            participation in the parts of life that matter.
          </p>
        </div>

        <div className="border border-[#e6dac8] bg-[#fbfaf7] p-7 md:p-10 mt-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-[#c98b2c] uppercase tracking-[0.25em] text-xs font-bold mb-3">
                {dataStatus}
              </p>
              <h3 className="font-serif text-3xl md:text-5xl">
                {formatCurrency(impact.fundingRaised)} raised toward {formatCurrency(impact.fundingGoal)}
              </h3>
            </div>

            <div className="text-left md:text-right">
              <p className="font-serif text-5xl text-[#071f3a]">
                {Math.round(percentFunded)}%
              </p>
              <p className="text-[#4b5563]">
                funded
              </p>
            </div>
          </div>

          <div
            role="progressbar"
            aria-label="Pilot funding progress"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={Math.round(percentFunded)}
            className="h-3 bg-[#e9dfd2] overflow-hidden mb-8"
          >
            <div
              className="h-full bg-[#c98b2c] transition-all duration-700"
              style={{ width: `${percentFunded}%` }}
            ></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border-l border-[#c98b2c] pl-5">
              <p className="font-serif text-4xl">
                {formatCurrency(impact.remainingGoal)}
              </p>
              <p className="text-[#4b5563] mt-1">
                left to raise
              </p>
            </div>

            <div className="border-l border-[#c98b2c] pl-5">
              <p className="font-serif text-4xl">
                {formatNumber(impact.participantsPlanned)}
              </p>
              <p className="text-[#4b5563] mt-1">
                participants planned
              </p>
            </div>

            <div className="border-l border-[#c98b2c] pl-5">
              <p className="font-serif text-4xl">
                {formatNumber(impact.sessionsNeeded)}
              </p>
              <p className="text-[#4b5563] mt-1">
                sessions to fund
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PartnerGuideCta() {
  return (
    <section className="bg-[#f8f5ef] py-24 px-5 sm:px-6 text-[#071f3a]">
      <div className="max-w-6xl mx-auto border-y border-[#c98b2c] py-14 md:py-16 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <SectionLabel>Partner Resource</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Download the Partner Guide.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mt-6">
            A concise overview of the mission, model, pilot, and partnership
            opportunities behind The Renewed Strength Project.
          </p>
        </div>

        <a
          href={partnerGuideUrl}
          className="inline-flex justify-center bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition"
        >
          Download the Partner Guide
        </a>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-[#071f3a] py-24 px-5 sm:px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <SectionLabel>Join The Work</SectionLabel>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight">
          Help remove financial barriers to restoration.
        </h2>

        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mt-8">
          The Renewed Strength Project is a Colorado 501(c)(3) nonprofit.
          Donations help fund access to restoration-focused training for
          individuals affected by cancer in Northern Colorado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href={donateUrl}
            className="bg-[#d8a066] hover:bg-[#e4b77d] text-[#071f3a] font-semibold px-8 py-4 rounded-sm transition"
          >
            Donate
          </a>

          <a
            href="/community-partners"
            className="border border-[#d8a066] text-white hover:bg-[#d8a066] hover:text-[#071f3a] font-semibold px-8 py-4 rounded-sm transition"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="font-sans bg-[#f8f5ef]">
      <SEO
        title="Cancer Exercise Support in Northern Colorado"
        description="The Renewed Strength Project removes financial barriers to individualized, evidence-informed strength and movement coaching for individuals affected by cancer in Loveland, Fort Collins, Windsor, Greeley, and Northern Colorado."
        path="/"
      />
      <Navbar />
      <Hero />
      <WhyWeExist />
      <StrengthMoreThanMuscle />
      <PathForward />
      <EvidencePurposePossibility />
      <ExperiencePurpose />
      <ImpactSection />
      <PartnerGuideCta />
      <FinalCta />
      <Footer />
    </div>
  )
}
