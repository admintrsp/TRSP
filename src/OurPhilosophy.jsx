import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'

const principles = [
  {
    title: 'Restoration Over Performance',
    copy:
      'The goal is not to turn people into athletes or measure success by a single number. The goal is to support the strength, confidence, capacity, and participation that make life feel more like life.',
  },
  {
    title: 'Individualized Care',
    copy:
      'Cancer does not affect every person the same way. Movement support should reflect the person, their diagnosis and treatment context, symptoms, goals, current capacity, and provider guidance when appropriate.',
  },
  {
    title: 'Evidence-Informed Coaching',
    copy:
      'We value research, clinical awareness, and practical coaching judgment. Evidence helps guide the work, but the plan still has to fit the human being in front of us.',
  },
  {
    title: 'Meaningful Life As The Aim',
    copy:
      'Movement matters because life matters. The work points beyond the gym toward family, work, recreation, independence, daily routines, and the activities each person hopes to participate in again.',
  },
]

const notItems = [
  'TRSP is not medical care and does not replace the guidance of an oncology, rehabilitation, or healthcare team.',
  'TRSP does not promise a cure, a specific recovery timeline, or a guaranteed outcome.',
  'TRSP does not use a one-size-fits-all exercise plan for every person affected by cancer.',
  'TRSP does not ask people to prove they are already fit enough to receive support.',
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

export default function OurPhilosophy() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <SEO
        title="Our Philosophy"
        description="The Renewed Strength Project believes restoration after cancer disruption should be individualized, evidence-informed, compassionate, and connected to meaningful life."
        path="/our-philosophy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Philosophy', path: '/our-philosophy' },
        ]}
      />
      <Navbar />

      <section id="main-content" tabIndex="-1" className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.96fr_1.04fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Restoration is about returning to life.
            </h1>
            <GoldDivider />
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
              We believe movement can be a pathway back toward strength,
              confidence, independence, and meaningful participation after
              cancer disruption.
            </p>
            <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mt-6">
              That pathway should be careful, individualized, evidence-informed,
              and honest about what coaching can and cannot promise.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 w-24 h-24 border-l border-t border-[#c98b2c]"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 border-r border-b border-[#c98b2c]"></div>
            <img
              src="/trsp-forest-path-original.jpeg"
              alt="A quiet forest path representing a thoughtful pathway forward"
              className="relative w-full aspect-[4/3] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.86fr_1.14fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Cancer can interrupt the ordinary things that make life whole.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-[#4b5563] leading-relaxed">
            <p>
              Strength is not only about lifting more weight. It can mean
              walking into a room with confidence, carrying groceries, getting
              through a workday, playing with family, returning to a trail, or
              trusting the body again.
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-snug text-[#071f3a] border-l border-[#c98b2c] pl-6">
              We do not train people to exercise. We help people pursue the
              lives they have been fighting for.
            </p>
            <p>
              TRSP exists because access matters. When cost prevents someone
              from receiving appropriate, compassionate support, restoration
              can feel farther away than it needs to be.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>What We Believe</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            A philosophy shaped by humility, purpose, and the person in front of us.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {principles.map((principle) => (
              <div key={principle.title} className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
                <h3 className="font-serif text-3xl mb-4">
                  {principle.title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {principle.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Boundaries</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              What TRSP is not.
            </h2>
          </div>

          <div className="grid gap-px bg-[#d8a066]/40 border border-[#d8a066]/40">
            {notItems.map((item) => (
              <div key={item} className="bg-[#071f3a] p-6">
                <p className="text-slate-100 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center border-y border-[#c98b2c] py-14">
          <SectionLabel>The Pathway</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Philosophy becomes practice through the restoration model.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto mt-8">
            The philosophy explains why TRSP exists. The restoration model
            explains how that belief becomes structured, individualized support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/restoration-model"
              className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              Explore the Restoration Model
            </Link>

            <Link
              to="/participant-program"
              className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              See the Participant Program
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
