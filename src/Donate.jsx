import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'

const givebutterUrl = 'https://givebutter.com/general-fund-iz0pzq'

const lifeExamples = [
  'Carry groceries',
  'Play with grandchildren',
  'Return to hiking',
  'Travel with more confidence',
  'Return to work',
  'Restore confidence',
]

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

export default function Donate() {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-trsp-givebutter-widget]')

    if (existingScript) return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=i6SHjXlB6pwm1Tpy&p=other'
    script.dataset.trspGivebutterWidget = 'true'

    document.body.appendChild(script)
  }, [])

  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <SEO
        title="Support Restoration"
        description="Support The Renewed Strength Project and help remove financial barriers to individualized, evidence-informed movement coaching for individuals affected by cancer in Northern Colorado."
        path="/donate"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Donate', path: '/donate' },
        ]}
      />
      <Navbar />

      <section id="main-content" tabIndex="-1" className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.96fr_1.04fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Donate</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Support Restoration.
            </h1>
            <GoldDivider />
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
              Every gift helps remove financial barriers so individuals
              affected by cancer can pursue restoration through individualized,
              evidence-informed movement.
            </p>
          </div>

          <figure className="relative">
            <div className="absolute -left-5 -top-5 w-24 h-24 border-l border-t border-[#c98b2c]"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 border-r border-b border-[#c98b2c]"></div>
            <img
              src="/trsp-donate-restoration-mountain.webp"
              alt="A person standing with arms open below a Colorado mountain wall"
              className="relative w-full aspect-[4/3] object-cover shadow-2xl"
            />
          </figure>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Why Give</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Cancer takes.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
            <p className="text-2xl md:text-3xl font-serif leading-snug text-[#071f3a] border-l border-[#c98b2c] pl-6">
              Your generosity helps people pursue restoration.
            </p>
            <p>
              A donation to The Renewed Strength Project helps create access
              to compassionate, individualized coaching for people affected by
              cancer in Northern Colorado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>What Your Gift Makes Possible</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Focus on life, not gym performance.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-12">
            {lifeExamples.map((example) => (
              <div key={example} className="bg-[#f8f5ef] p-7">
                <p className="text-lg text-[#334155] leading-relaxed">
                  {example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-20 md:py-28 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Community Restoration Partner</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            $1,500 sponsors one complete participant journey.
          </h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto mt-8">
            A complete journey can help cover individualized coaching and
            restoration-focused support for one participant when program fit,
            safety, and funding align.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <SectionLabel>Give Securely</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Make a gift.
            </h2>
            <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mt-6">
              Donations are processed securely by Givebutter while supporting
              the TRSP mission.
            </p>
          </div>

          <div className="mt-10 max-w-[640px] mx-auto">
            {/* TODO: In Givebutter campaign settings, set the post-payment redirect URL to /thank-you if supported. */}
            <div className="overflow-hidden rounded-[4px]">
              <givebutter-widget id="Lqb6R9"></givebutter-widget>
            </div>

            <div className="border border-[#e6dac8] bg-[#fbfaf7] mt-8 p-6 grid md:grid-cols-[1fr_auto] gap-5 items-center">
              <div className="max-w-md">
                <p className="text-sm text-[#4b5563] leading-relaxed max-w-2xl">
                  If the embedded form does not load, you can still give
                  securely through Givebutter.
                </p>
              </div>
              <a
                href={givebutterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-6 py-3 rounded-sm transition text-center"
              >
                Open Givebutter
              </a>
            </div>

            <noscript>
              <p className="text-[#4b5563] leading-relaxed mt-6">
                JavaScript is required to load the embedded donation form.
              </p>
            </noscript>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Stewardship</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Thoughtful support of the mission.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-[#4b5563] leading-relaxed">
            <p>
              Every gift entrusted to The Renewed Strength Project is used
              thoughtfully in support of our mission to remove financial
              barriers to individualized exercise support for people affected
              by cancer in Northern Colorado.
            </p>
            <p>
              We are committed to transparency, accountability, and careful
              stewardship of every donation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto border-y border-[#c98b2c] py-12">
          <SectionLabel>Trust</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8 text-lg text-[#4b5563] leading-relaxed">
            <div>
              <h2 className="font-serif text-4xl text-[#071f3a] mb-4">
                The Renewed Strength Project
              </h2>
              <p>501(c)(3)</p>
              <p>EIN: 41-4721850</p>
            </div>
            <div>
              <p>
                Donations are processed securely by Givebutter. The Renewed
                Strength Project is a Northern Colorado nonprofit serving
                individuals affected by cancer.
              </p>
              <Link
                to="/our-philosophy"
                className="inline-flex mt-6 font-semibold text-[#071f3a] hover:text-[#c98b2c] transition"
              >
                Learn about our philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
