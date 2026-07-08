import {
  Briefcase,
  CheckCircle,
  ClipboardCheck,
  Dumbbell,
  Flag,
  Heart,
  MapPin,
  MessageCircle,
  Mountain,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import SEO from '../../components/SEO'
import CheckList from '../components/CheckList'
import PrintDivider from '../components/PrintDivider'
import PrintFooter from '../components/PrintFooter'
import PrintHeader from '../components/PrintHeader'
import PrintIconCard from '../components/PrintIconCard'
import PrintPage from '../components/PrintPage'
import PrintTimeline from '../components/PrintTimeline'
import PrintToolbar from '../components/PrintToolbar'
import SectionLabel from '../components/SectionLabel'

function CommunityPartnerFlyerFrontPage() {
  return (
      <PrintPage>
        <div className="relative h-full overflow-hidden bg-[#fbfaf7] pb-[0.82in]">
          <section className="relative h-[5.05in] overflow-hidden">          
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
  )
}

function CommunityPartnerFlyerBackPage() {
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

      <CommunityPartnerFlyerFrontPage />
    </div>
  )
}

export function CommunityPartnerFlyerBack() {
  return (
    <div className="bg-[#f8f5ef]">
      <SEO
        title="Community Partner Flyer Back"
        description="Internal print flyer back for TRSP community partners."
        path="/print/community-partner-back"
        noindex
      />
      <PrintToolbar title="Community Partner Flyer — Back" />
      <CommunityPartnerFlyerBackPage />
    </div>
  )
}

export function CommunityPartnerLeaveBehind() {
  return (
    <div className="bg-[#f8f5ef]">
      <SEO
        title="Community Partner Leave-Behind"
        description="Internal two-page print leave-behind for TRSP community partners."
        path="/print/community-partner"
        noindex
      />
      <PrintToolbar title="Community Partner Leave-Behind" />
      <CommunityPartnerFlyerFrontPage />
      <CommunityPartnerFlyerBackPage />
    </div>
  )
}
