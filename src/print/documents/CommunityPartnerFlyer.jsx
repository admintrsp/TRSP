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
  const journeySteps = [
    [MessageCircle, 'Conversation', 'We listen first.'],
    [ClipboardCheck, 'Assessment', 'Understand today.'],
    [Target, 'Personal Plan', 'Built around you.'],
    [Dumbbell, 'Coaching', 'One-on-one support.'],
    [TrendingUp, 'Progress', 'Measure what matters.'],
    [Flag, 'Living Again', 'Return to life.'],
  ]

  return (
    <PrintPage>
      <div className="relative h-full bg-[#fbfaf7] px-[0.45in] pt-[0.45in] pb-[1.25in]">
        <section>
          <SectionLabel className="mb-3 text-[12px]">Our Program</SectionLabel>

          <h1 className="font-serif text-[42px] leading-[0.95] text-[#071f3a]">
            Every Restoration Journey
            <br />
            Begins with a Conversation.
          </h1>

          <div className="mt-5 h-px w-[1.2in] bg-[#c98b2c]" />

          <p className="mt-5 max-w-[4.5in] text-[14px] leading-relaxed text-[#334155]">
            Every participant&apos;s experience with cancer is different. We begin
            by understanding the person, their goals, their treatment, and the
            life they&apos;re working to return to.
          </p>
        </section>

        <section className="mt-[0.42in]">
          <div className="relative">
            <div className="absolute left-[7%] right-[7%] top-[0.38in] h-px bg-[#d8a066]" />

            <div className="relative grid grid-cols-6 gap-4">
              {journeySteps.map(([Icon, title, copy], index) => (
                <div key={title} className="text-center">
                  <div className="relative mx-auto w-fit">
                    <div className="grid h-[0.72in] w-[0.72in] place-items-center rounded-full border border-[#d8a066] bg-[#fbfaf7]">
                      <Icon size={30} strokeWidth={1.6} className="text-[#071f3a]" />
                    </div>

                    <div className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[#c98b2c] text-[10px] font-bold text-white">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#071f3a]">
                    {title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-snug text-[#475569]">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="my-[0.34in] h-px bg-[#e4d8c7]" />

        <section>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#c98b2c]" />
            <SectionLabel className="text-[12px] tracking-[0.28em]">
              We Believe
            </SectionLabel>
            <div className="h-px flex-1 bg-[#c98b2c]" />
          </div>

          <div className="mt-[0.22in] grid grid-cols-3 gap-[0.34in]">
            <PrintIconCard icon={Users} title="We See the Person">
              Every participant&apos;s experience is unique. We begin by listening.
            </PrintIconCard>

            <PrintIconCard icon={Target} title="We Coach with Purpose">
              Every recommendation is individualized, safe, and evidence-informed.
            </PrintIconCard>

            <PrintIconCard icon={Heart} title="We Measure What Matters">
              Success is defined by participation in life, not simply numbers in the gym.
            </PrintIconCard>
          </div>
        </section>

        <div className="my-[0.32in] h-px bg-[#e4d8c7]" />

        <section className="grid grid-cols-[1.05fr_0.95fr] gap-[0.34in]">
          <div>
            <SectionLabel className="mb-3 text-[11px] tracking-[0.24em]">
              Why Exercise Matters
            </SectionLabel>

            <h2 className="font-serif text-[25px] leading-tight text-[#071f3a]">
              Appropriately prescribed exercise can help restore life beyond treatment.
            </h2>

            <CheckList
              items={[
                'Improve physical function',
                'Reduce cancer-related fatigue',
                'Restore strength',
                'Improve confidence',
                'Improve quality of life',
                'Increase participation in everyday life',
              ]}
            />
          </div>

          <div className="border-l border-[#e4d8c7] pl-[0.32in]">
            <SectionLabel className="mb-3 text-[11px] tracking-[0.24em]">
              Who We Serve
            </SectionLabel>

            <h2 className="font-serif text-[25px] leading-tight text-[#071f3a]">
              Individuals affected by cancer in Northern Colorado.
            </h2>

            <CheckList
              items={[
                'During treatment',
                'Recovering after treatment',
                'Living with metastatic disease',
                'Working to regain strength, confidence, and function',
              ]}
            />
          </div>
        </section>

        <div className="my-[0.25in] h-px bg-[#e4d8c7]" />

        <section className="text-center">
          <SectionLabel className="mb-3 text-[12px] tracking-[0.28em]">
            Our Belief
          </SectionLabel>

          <h2 className="font-serif text-[46px] leading-none tracking-tight text-[#071f3a]">
            Cancer Takes.
          </h2>

          <p className="mx-auto mt-5 max-w-[5.2in] font-serif text-[21px] leading-relaxed text-[#071f3a]">
            We believe every person deserves the opportunity to pursue strength,
            confidence, and participation in life.
          </p>
        </section>

<PrintFooter showQr />
      </div>
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
