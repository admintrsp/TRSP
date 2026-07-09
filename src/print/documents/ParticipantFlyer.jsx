import {
  CheckCircle,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import SEO from '../../components/SEO'
import CheckList from '../components/CheckList'
import PrintFooter from '../components/PrintFooter'
import PrintHeader from '../components/PrintHeader'
import PrintIconCard from '../components/PrintIconCard'
import PrintPage from '../components/PrintPage'
import PrintToolbar from '../components/PrintToolbar'
import SectionLabel from '../components/SectionLabel'

export default function ParticipantFlyer() {
  return (
    <div className="bg-[#f8f5ef]">
      <SEO
        title="Participant Flyer"
        description="Participant-facing flyer for The Renewed Strength Project."
        path="/print/participant-flyer"
        noindex
      />

      <PrintToolbar title="Participant Flyer" />

      <PrintPage>
        <div className="relative h-full overflow-hidden bg-[#fbfaf7] pb-[0.82in]">
          <section className="px-[0.42in] pt-[0.34in]">
            <PrintHeader />

            <SectionLabel className="mt-[0.42in] mb-3 text-[12px] tracking-[0.26em]">
              For People Affected by Cancer
            </SectionLabel>

            <h1 className="font-serif text-[50px] leading-[0.92] tracking-tight text-[#071f3a]">
              There Is Still
              <br />
              a Path
              <br />
              <span className="text-[#c98b2c]">
                Forward.
              </span>
            </h1>

            <div className="my-[0.18in] h-px w-[0.82in] bg-[#c98b2c]" />

            <p className="max-w-[5.8in] text-[15px] leading-relaxed text-[#071f3a]">
              Cancer takes. Not just health. It can take strength, confidence,
              independence, and the ability to fully participate in the moments
              that make life meaningful.
            </p>

            <p className="mt-4 max-w-[5.8in] text-[15px] leading-relaxed text-[#071f3a]">
              <strong>The Renewed Strength Project</strong> exists to help
              people affected by cancer pursue what cancer has taken away
              through individualized, evidence-informed training.
            </p>
          </section>

          <section className="mt-[0.35in] px-[0.42in]">
            <div className="grid grid-cols-3 gap-[0.28in]">
              <PrintIconCard icon={Heart} title="You Are Seen">
                Your experience is personal. We begin by listening.
              </PrintIconCard>

              <PrintIconCard icon={ShieldCheck} title="You Are Safe">
                Training is individualized around your body, treatment, and goals.
              </PrintIconCard>

              <PrintIconCard icon={Sparkles} title="There Is Hope">
                Progress begins with one safe step forward.
              </PrintIconCard>
            </div>
          </section>

          <section className="mt-[0.34in] px-[0.42in]">
            <div className="grid grid-cols-[1fr_1fr] gap-[0.32in] border-t border-[#e4d8c7] pt-[0.24in]">
              <div>
                <SectionLabel className="mb-3 text-[11px] tracking-[0.22em]">
                  Who This Is For
                </SectionLabel>

                <CheckList
                  items={[
                    'People currently in treatment',
                    'People recovering after treatment',
                    'People living with metastatic disease',
                    'People working to regain strength, confidence, and function',
                  ]}
                />
              </div>

              <div className="border-l border-[#d8a066]/70 pl-[0.32in]">
                <SectionLabel className="mb-3 text-[11px] tracking-[0.22em]">
                  What We Help You Pursue
                </SectionLabel>

                <CheckList
                  items={[
                    'Strength',
                    'Confidence',
                    'Independence',
                    'Participation in everyday life',
                    'A return to the life you love',
                  ]}
                />
              </div>
            </div>
          </section>

          <section className="mt-[0.3in] mx-[0.42in] rounded-xl bg-[#f3eee6] p-[0.24in]">
            <div className="flex items-start gap-4">
              <MessageCircle className="mt-1 shrink-0 text-[#c98b2c]" size={32} strokeWidth={1.6} />
              <div>
                <SectionLabel className="mb-2 text-[11px] tracking-[0.22em]">
                  Taking the First Step
                </SectionLabel>
                <p className="font-serif text-[25px] leading-tight text-[#071f3a]">
                  You do not have to know exactly where to begin.
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[#334155]">
                  The first step is simply a conversation. We listen, understand
                  where you are today, and help determine whether The Renewed
                  Strength Project may be a good fit for your restoration journey.
                </p>
              </div>
            </div>
          </section>

          <PrintFooter showQr />
        </div>
      </PrintPage>
    </div>
  )
}