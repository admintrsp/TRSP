import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const principles = [
  'No financial barriers',
  'Evidence-informed coaching',
  'Individualized support',
  'Purpose-driven restoration',
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

export default function About() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Our Mission</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              A pathway back to life.
            </h1>
          </div>

          <div className="text-lg md:text-xl text-[#4b5563] leading-relaxed">
            <p>
              The Renewed Strength Project is a Northern Colorado 501(c)(3)
              nonprofit helping individuals affected by cancer access
              restoration-focused training without cost becoming the barrier.
            </p>

            <p className="font-serif text-3xl md:text-4xl leading-snug text-[#071f3a] mt-8">
              We do not train people to exercise. We help people return to the
              lives they have been fighting for.
            </p>

            <div className="relative mt-10">
              <div className="absolute -left-4 -top-4 w-20 h-20 border-l border-t border-[#c98b2c]"></div>
              <img
                src="/trsp-lake-restoration.jpeg"
                alt="A person resting beside a clear alpine lake"
                className="relative w-full aspect-[16/9] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              A local nonprofit built around access, dignity, and restoration.
            </h2>
            <GoldDivider />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
            <p>
              Cancer and treatment can change strength, confidence,
              independence, and the ability to participate in daily life.
            </p>

            <p>
              We exist to help remove one barrier to restoration: cost. Through
              donor support, The Renewed Strength Project helps fund access to
              individualized, professionally guided training for individuals
              affected by cancer.
            </p>

            <p>
              Personal training is the current tool. Restoration is the goal:
              helping people work toward meaningful activities, roles, and
              routines that cancer has disrupted.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>What Guides Us</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Evidence-informed. Individualized. Purpose-driven.
          </h2>

          <div className="grid md:grid-cols-4 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-12">
            {principles.map((principle) => (
              <div key={principle} className="bg-[#f8f5ef] p-7">
                <p className="font-serif text-2xl leading-snug">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] py-24 md:py-32 px-5 sm:px-6 text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              The gap is not only physical. It is also access.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-200">
            <p>
              Many individuals want qualified support after cancer has changed
              their body, confidence, and daily life, but the cost of that
              support can put it out of reach.
            </p>

            <p className="font-serif text-3xl md:text-4xl leading-snug text-white border-l border-[#d8a066] pl-6">
              "I would love to do this, but I can't afford it."
            </p>

            <p>
              That repeated reality helped shape the mission: create a pathway
              for people affected by cancer to access appropriate support
              without financial strain being the deciding factor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>The Next Step</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Restoration starts with access.
          </h2>

          <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mx-auto mt-8">
            Whether you are seeking support, referring someone, donating, or
            exploring partnership, the goal is the same: helping individuals
            affected by cancer work toward strength, confidence, independence,
            and participation in life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/apply"
              className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition"
            >
              Apply for Support
            </Link>

            <Link
              to="/community-partners"
              className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
