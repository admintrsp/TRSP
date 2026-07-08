import { Link } from 'react-router-dom'
import {
  Briefcase,
  CheckCircle,
  ClipboardCheck,
  Dumbbell,
  ExternalLink,
  Flag,
  Heart,
  MapPin,
  MessageCircle,
  Mountain,
  Printer,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SEO from './components/SEO'

const websiteUrl = 'therenewedstrengthproject.org'

const printCards = [
  {
    title: 'Community Partner Flyer — Front',
    description: 'A public-facing first impression for sponsors and local partners.',
    path: '/print/community-partner-front',
    status: 'Ready',
  },
  {
    title: 'Community Partner Flyer — Back',
    description: 'A clear explanation of the participant journey and TRSP promise.',
    path: '/print/community-partner-back',
    status: 'Ready',
  },
  {
    title: 'Future Participant Flyer',
    description: 'A simple handout for individuals affected by cancer and caregivers.',
    status: 'Future',
  },
  {
    title: 'Future Provider One-Pager',
    description: 'A referral-oriented overview for clinicians and care teams.',
    status: 'Future',
  },
  {
    title: 'Future Board Packet',
    description: 'Founder narrative, governance context, and operating priorities.',
    status: 'Future',
  },
  {
    title: 'Future Grant Summary',
    description: 'Concise case statement, impact model, and funding language.',
    status: 'Future',
  },
  {
    title: 'Future Annual Impact Report',
    description: 'A polished public accountability and donor communication piece.',
    status: 'Future',
  },
]

function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-[#c98b2c] uppercase tracking-[0.22em] text-[10px] font-bold ${className}`}>
      {children}
    </p>
  )
}

function PrintToolbar({ title }) {
  return (
    <div className="no-print sticky top-0 z-40 bg-[#f8f5ef]/95 backdrop-blur border-b border-[#e6dac8]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#c98b2c]">
            TRSP Print Center
          </p>
          <h1 className="font-serif text-2xl text-[#071f3a]">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/print"
            className="border border-[#e4d8c7] bg-white px-4 py-2 text-sm font-semibold text-[#071f3a] hover:border-[#c98b2c] transition"
          >
            Back to Print Center
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-[#071f3a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d2f57] transition"
          >
            <Printer size={16} />
            Print / Save PDF
          </button>
        </div>
      </div>
    </div>
  )
}

function PrintPage({ children, className = '' }) {
  return (
    <main className="trsp-print-stage bg-[#f8f5ef] py-8">
      <article className={`trsp-print-page bg-[#fbfaf7] text-[#071f3a] shadow-2xl shadow-[#071f3a]/10 ${className}`}>
        {children}
      </article>
    </main>
  )
}

function PrintHeader() {
  return (
    <header className="flex items-start gap-4">
      <img
        src="/rsp-logo.png"
        alt="The Renewed Strength Project logo"
        className="h-[0.55in] w-[0.55in] object-contain"
      />

      <div>
        <p className="font-serif text-[18px] uppercase leading-[0.94] tracking-[0.05em] text-[#071f3a]">
          The Renewed
          <br />
          Strength Project
        </p>
        <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[#c98b2c]">
          Empowering Renewed Strength
        </p>
      </div>
    </header>
  )
}

function PrintFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-[#071f3a] text-white px-[0.38in] py-[0.12in]">
      <div className="grid grid-cols-[0.9fr_1.1fr_0.85fr] items-center gap-5 text-[10.5px]">
        <div className="flex items-center gap-3">
          <img src="/rsp-logo.png" alt="" className="h-[0.38in] w-[0.38in] object-contain" />
          <div>
            <p className="font-serif text-[13px] uppercase tracking-[0.08em]">
              The Renewed Strength Project
            </p>
            <p className="text-[#d8a066] uppercase tracking-[0.15em]">
              Empowering Renewed Strength
            </p>
          </div>
        </div>

        <div className="border-l border-[#d8a066]/70 pl-5">
          <p className="font-serif text-[17px] leading-tight">
            Ready to help someone find their way back?
          </p>
          <p className="mt-1 text-white/80 leading-snug">
            Your partnership restores more than strength — it helps restore life.
          </p>
        </div>

        <div className="border-l border-[#d8a066]/70 pl-5">
          <p className="text-[#d8a066] uppercase tracking-[0.18em] font-bold">
            Learn More
          </p>
          <p className="mt-1 font-semibold">{websiteUrl}</p>
        </div>
      </div>
    </footer>
  )
}

function PrintDivider({ className = '' }) {
  return <div className={`h-px bg-[#c98b2c] ${className}`} />
}

function PrintSection({ title, children, className = '' }) {
  return (
    <section className={className}>
      <div className="flex items-center gap-3">
        <PrintDivider className="flex-1" />
        <SectionLabel className="shrink-0 text-[12px]">{title}</SectionLabel>
        <PrintDivider className="flex-1" />
      </div>
      {children}
    </section>
  )
}

function PrintIconCard({ icon: Icon, title, children, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <div className="mx-auto mb-2 grid h-[0.55in] w-[0.55in] place-items-center rounded-full border border-[#c98b2c] text-[#071f3a]">
        <Icon size={26} strokeWidth={1.7} />
      </div>
      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.08em] leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-[10.5px] leading-snug text-[#334155]">
        {children}
      </p>
    </div>
  )
}

function CheckList({ items }) {
  return (
    <ul className="space-y-1.5 text-[11px] leading-tight text-[#071f3a]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle size={13} className="mt-0.5 shrink-0 text-[#c98b2c]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function WebsiteCTA() {
  return (
    <div className="flex items-end gap-4">
      <div className="flex-1">
        <SectionLabel className="mb-2">Learn More</SectionLabel>
        <p className="text-[11px] leading-snug text-[#334155]">
          Become a Community Partner.
        </p>
        <p className="mt-1 text-[12px] font-bold text-[#071f3a]">
          {websiteUrl}
        </p>
      </div>

      <div className="grid h-[0.9in] w-[0.9in] shrink-0 place-items-center border border-[#c98b2c] bg-white p-2 text-center text-[9px] font-bold leading-tight text-[#071f3a]">
        <span>
          QR
          <br />
          CODE
          <br />
          HERE
        </span>
      </div>
    </div>
  )
}

function PrintTimeline({ steps }) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {steps.map((step, index) => (
        <div key={step.title} className="relative text-center">
          {index < steps.length - 1 && (
            <div className="absolute left-1/2 top-[0.36in] h-px w-full bg-[#c98b2c]/70" />
          )}
          <div className="relative mx-auto grid h-[0.72in] w-[0.72in] place-items-center rounded-full border border-[#c98b2c] bg-[#fbfaf7] text-[#071f3a]">
            <step.icon size={30} strokeWidth={1.55} />
            <span className="absolute -top-3 -right-1 grid h-6 w-6 place-items-center rounded-full bg-[#c98b2c] text-[10px] font-bold text-white">
              {index + 1}
            </span>
          </div>
          <h3 className="mt-4 text-[10.5px] font-extrabold uppercase tracking-[0.05em] leading-tight">
            {step.title}
          </h3>
          <p className="mt-2 text-[10px] leading-snug text-[#334155]">
            {step.copy}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function PrintCenter() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#071f3a]">
      <SEO
        title="TRSP Print Center"
        description="Internal print center for editable Renewed Strength Project materials."
        path="/print"
        noindex
      />

      <main id="main-content" className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <SectionLabel className="mb-5">Internal Print Center</SectionLabel>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            TRSP Print Center
          </h1>
          <div className="my-8 h-px w-20 bg-[#c98b2c]" />
          <p className="text-xl leading-relaxed text-[#4b5563]">
            Editable, coded print materials for partnership conversations,
            participant outreach, provider trust, and future organizational
            communication.
          </p>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {printCards.map((card) => {
            const isReady = Boolean(card.path)

            const content = (
              <article className="h-full border border-[#e4d8c7] bg-white p-7 shadow-[0_18px_50px_rgba(7,31,58,0.06)] transition hover:border-[#c98b2c]">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <FileBadge status={card.status} />
                  {isReady && <ExternalLink size={18} className="text-[#c98b2c]" />}
                </div>
                <h2 className="font-serif text-3xl leading-tight">
                  {card.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[#4b5563]">
                  {card.description}
                </p>
              </article>
            )

            return isReady ? (
              <Link key={card.title} to={card.path} className="block">
                {content}
              </Link>
            ) : (
              <div key={card.title}>
                {content}
              </div>
            )
          })}
        </section>

        <section className="mt-14 border border-[#e4d8c7] bg-white p-8 md:p-10">
          <div className="flex items-start gap-4">
            <Printer className="mt-1 shrink-0 text-[#c98b2c]" size={26} />
            <div>
              <SectionLabel className="mb-3">Export Instructions</SectionLabel>
              <h2 className="font-serif text-3xl leading-tight">
                Save a print page as a professional PDF.
              </h2>
              <p className="mt-5 leading-relaxed text-[#4b5563]">
                Open the print page, use browser Print, choose Save as PDF,
                paper size Letter, scale 100%, and turn backgrounds on. If your
                browser adds headers or footers, turn those off before saving.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FileBadge({ status }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
      status === 'Ready'
        ? 'bg-[#071f3a] text-white'
        : 'bg-[#f8f5ef] text-[#6b7280] border border-[#e4d8c7]'
    }`}>
      {status}
    </span>
  )
}

export function CommunityPartnerFlyerFront() {
  return (
    <div className="bg-[#f8f5ef]">
      <SEO
        title="Community Partner Flyer Front"
        description="Internal print flyer front for TRSP community partners."
        path="/print/community-partner-front"
        noindex
      />

      <PrintToolbar title="Community Partner Flyer — Front" />

      <PrintPage>
        <div className="relative h-full overflow-hidden bg-[#fbfaf7] pb-[0.82in]">
          <section className="relative h-[5.55in] overflow-hidden">
            <img
              src="/trsp-flyer-hero.jpeg"
              alt=""
              className="absolute right-0 top-0 h-full w-[52%] object-cover object-[45%_50%] brightness-[0.88] contrast-[1.08] saturate-[0.92]"
            />

            <div
              className="absolute top-0 left-[3.65in] h-full w-[2.5in]"
              style={{
                background:
                  'linear-gradient(to right,#fbfaf7 0%,rgba(251,250,247,.98) 24%,rgba(251,250,247,.82) 50%,rgba(251,250,247,.32) 76%,transparent 100%)',
              }}
            />

            <div className="relative z-10 w-[54%] px-[0.42in] pt-[0.34in]">
              <PrintHeader />

              <SectionLabel className="mt-[0.34in] mb-3 text-[12px] tracking-[0.26em]">
                For Our Community
              </SectionLabel>

              <h1 className="font-serif text-[52px] leading-[0.9] tracking-tight text-[#071f3a]">
                Help Someone
                <br />
                <span className="text-[#c98b2c]">
                  Return to the
                  <br />
                  Life They Love.
                </span>
              </h1>

              <div className="my-[0.14in] h-px w-[0.68in] bg-[#c98b2c]" />

              <p className="max-w-[3.55in] text-[12.5px] leading-snug text-[#071f3a]">
                Cancer treatment saves lives. Recovery often leaves people
                without affordable access to individualized exercise support.
              </p>

              <p className="mt-3 max-w-[3.55in] text-[12.5px] leading-snug text-[#071f3a]">
                <strong>The Renewed Strength Project</strong> removes financial
                barriers to evidence-informed one-on-one coaching for individuals
                affected by cancer.
              </p>

              <div className="mt-[0.2in] grid max-w-[3.6in] grid-cols-3 text-center">
                {[
                  [Dumbbell, 'Restore Strength'],
                  [Heart, 'Regain Confidence'],
                  [Users, 'Participation in Life'],
                ].map(([Icon, label]) => (
                  <div key={label} className="border-r border-[#e4d8c7] px-3 last:border-r-0">
                    <Icon className="mx-auto text-[#c98b2c]" size={34} strokeWidth={1.7} />
                    <p className="mt-2 text-[8.6px] font-extrabold uppercase leading-tight tracking-[0.06em] text-[#071f3a]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-[0.42in] pt-[0.18in]">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#c98b2c]" />
              <SectionLabel className="text-[12px] tracking-[0.28em]">
                Why We Exist
              </SectionLabel>
              <div className="h-px flex-1 bg-[#c98b2c]" />
            </div>

            <div className="mt-[0.16in] grid grid-cols-3 gap-[0.28in]">
              <PrintIconCard icon={Mountain} title="The Gap">
                Recovery often leaves people without affordable access to
                individualized exercise support.
              </PrintIconCard>
              <PrintIconCard icon={Users} title="Our Response">
                We remove financial barriers by funding one-on-one coaching
                built around each participant.
              </PrintIconCard>
              <PrintIconCard icon={MapPin} title="Why Local Matters">
                Every donation stays in Northern Colorado helping local
                individuals pursue restoration.
              </PrintIconCard>
            </div>
          </section>

          <section className="px-[0.42in] pt-[0.14in]">
            <div className="grid grid-cols-[0.95fr_1.05fr] gap-[0.32in] border-t border-[#e4d8c7] pt-[0.18in]">
              <div>
                <SectionLabel className="mb-2 text-[11px] leading-tight tracking-[0.22em]">
                  Sponsor One Person&apos;s Restoration Journey
                </SectionLabel>
                <p className="font-serif text-[50px] leading-none text-[#071f3a]">$1,500</p>
                <p className="mt-1 text-[11px] font-semibold text-[#071f3a]">Your gift provides:</p>
                <CheckList
                  items={[
                    'Initial assessment',
                    'Individualized exercise plan',
                    'Sixteen one-on-one coaching sessions',
                    'Progress tracking',
                    'Final reassessment',
                  ]}
                />
              </div>

              <div className="border-l border-[#d8a066]/70 pl-[0.32in]">
                <SectionLabel className="mb-[0.14in] text-[11px] leading-tight tracking-[0.22em]">
                  What Restoration Can Make Possible
                </SectionLabel>
                <div className="grid grid-cols-3 gap-x-3 gap-y-4 text-center">
                  {[
                    [Mountain, 'Return to Hiking'],
                    [Briefcase, 'Return to Work'],
                    [Heart, 'Regain Confidence'],
                    [Dumbbell, 'Restore Strength'],
                    [Users, 'Be Present with Family'],
                    [TrendingUp, 'Improve Quality of Life'],
                  ].map(([Icon, label]) => (
                    <div key={label}>
                      <Icon className="mx-auto text-[#071f3a]" size={27} strokeWidth={1.6} />
                      <p className="mt-1 text-[8.8px] font-bold leading-tight text-[#071f3a]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <PrintFooter />
        </div>
      </PrintPage>
    </div>
  )
}
export function CommunityPartnerFlyerBack() {
  const timelineSteps = [
    {
      title: 'Conversation',
      copy: 'We listen first.',
      icon: MessageCircle,
    },
    {
      title: 'Assessment',
      copy: 'We understand where you are today.',
      icon: ClipboardCheck,
    },
    {
      title: 'Personalized Plan',
      copy: 'Built around your goals.',
      icon: Target,
    },
    {
      title: 'One-on-One Coaching',
      copy: 'Evidence-informed exercise.',
      icon: Users,
    },
    {
      title: 'Measure Progress',
      copy: 'We measure what matters.',
      icon: TrendingUp,
    },
    {
      title: 'Living Again',
      copy: 'Return to the life they love.',
      icon: Flag,
    },
  ]

  return (
    <div className="bg-[#f8f5ef]">
      <SEO
        title="Community Partner Flyer Back"
        description="Internal print flyer back for TRSP community partners."
        path="/print/community-partner-back"
        noindex
      />
      <PrintToolbar title="Community Partner Flyer — Back" />
      <PrintPage>
        <div className="relative h-full px-[0.38in] pt-[0.35in] pb-[0.82in]">
          <div className="flex items-center gap-4">
            <Mountain className="text-[#c98b2c]" size={34} strokeWidth={1.4} />
            <SectionLabel className="text-[13px]">Our Program</SectionLabel>
            <PrintDivider className="flex-1" />
          </div>

          <section className="mt-[0.3in] grid grid-cols-[1.14fr_0.86fr] gap-[0.42in] items-start">
            <div>
              <h1 className="font-serif text-[42px] leading-[0.95]">
                What Happens
                <br />
                When Someone Applies<span className="text-[#c98b2c]">.</span>
              </h1>
              <div className="my-[0.16in] h-px w-[1.1in] bg-[#c98b2c]" />
              <p className="text-[14px] leading-snug text-[#071f3a]">
                Every journey begins by understanding the person — not just
                the diagnosis.
              </p>
            </div>

            <blockquote className="border-l border-[#c98b2c] pl-[0.28in]">
              <p className="font-serif text-[19px] italic leading-snug">
                Our goal is simple:
                <br />
                help every participant pursue strength, confidence, and the
                ability to live the life they love.
              </p>
              <div className="mt-[0.22in] h-px w-[1.35in] bg-[#c98b2c]" />
            </blockquote>
          </section>

          <section className="mt-[0.44in]">
            <PrintTimeline steps={timelineSteps} />
          </section>

          <section className="mt-[0.42in] rounded-xl bg-[#f3eee6] p-[0.22in]">
            <div className="grid grid-cols-3 gap-[0.22in]">
              <PrintIconCard icon={Users} title="Who We See">
                We see the person. Not just the diagnosis. We listen, so we
                can truly understand.
              </PrintIconCard>
              <PrintIconCard icon={Target} title="How We Coach">
                Every program is individualized — your body, your treatment,
                your goals, your life.
              </PrintIconCard>
              <PrintIconCard icon={Heart} title="How We Define Success">
                Success is participation in life — measured by improvements
                that matter most to each participant.
              </PrintIconCard>
            </div>
          </section>

          <section className="mt-[0.2in] grid grid-cols-[0.95fr_1.05fr] gap-[0.18in]">
            <div className="rounded-xl border border-[#c98b2c] bg-white p-[0.22in]">
              <div className="flex items-center gap-3">
                <Users className="text-[#c98b2c]" size={34} strokeWidth={1.65} />
                <h2 className="text-[16px] font-extrabold uppercase tracking-[0.07em]">
                  Who We Serve
                </h2>
              </div>
              <div className="mt-[0.14in] grid grid-cols-[1fr_1.05fr] gap-4">
                <p className="text-[12px] leading-snug text-[#071f3a]">
                  Individuals affected by cancer in Northern Colorado.
                  <br />
                  <br />
                  <strong>Participants may be:</strong>
                </p>
                <CheckList
                  items={[
                    'During treatment',
                    'Recovering after treatment',
                    'Living with metastatic disease',
                    'Working to regain function and confidence',
                  ]}
                />
              </div>
            </div>

            <div className="rounded-xl bg-[#071f3a] p-[0.22in] text-white">
              <div className="flex items-center gap-4">
                <img
                  src="/rsp-logo.png"
                  alt=""
                  className="h-[0.62in] w-[0.62in] object-contain"
                />
                <div>
                  <SectionLabel className="mb-2 text-[13px]">Our Promise</SectionLabel>
                  <div className="h-px w-[0.65in] bg-[#d8a066]" />
                </div>
              </div>
              <ul className="mt-[0.14in] space-y-2 text-[11px] leading-snug text-white/90">
                {[
                  "We don't promise miracles.",
                  "We don't promise perfect health.",
                  'We promise to meet every participant where they are.',
                  'We promise compassionate coaching.',
                  'We promise evidence-informed programming.',
                  'We promise to walk beside people as they pursue the life cancer interrupted.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={13} className="mt-0.5 shrink-0 text-[#d8a066]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <PrintFooter />
      </PrintPage>
    </div>
  )
}
