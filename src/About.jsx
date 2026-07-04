import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const approachPrinciples = [
  {
    title: 'Individualized',
    description:
      'Support is shaped around each person’s current capacity, treatment history, goals, and functional baseline.',
  },
  {
    title: 'Evidence-Informed',
    description:
      'Programming is guided by exercise oncology principles, current research, and practical coaching experience.',
  },
  {
    title: 'Safety-Driven',
    description:
      'Training is progressed thoughtfully, with attention to fatigue, mobility, surgical history, pain, and tolerance.',
  },
  {
    title: 'Restoration-Focused',
    description:
      'The purpose is not performance alone. The work supports strength, confidence, and participation in daily life.',
  },
]

const serveItems = [
  'Individuals currently in treatment',
  'Individuals recovering after treatment',
  'Individuals living beyond treatment',
  'Individuals rebuilding strength, function, confidence, or daily capacity',
]

export default function About() {

  return (

    <div className="bg-slate-950 text-white min-h-screen">

      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] pt-40 pb-24 px-6 border-b border-slate-800/40">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <p className="text-[#d8a066] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
            About The Renewed Strength Project
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
            Helping people work toward what cancer treatment can disrupt.
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            The Renewed Strength Project is a Northern Colorado 501(c)(3)
            nonprofit helping individuals treated for cancer access
            restoration-focused training support without cost becoming the
            barrier.
          </p>

        </div>

      </section>

      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">

          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              A local nonprofit built around access, restoration, and dignity.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">

            <p>
              Cancer and treatment can change strength, energy, confidence,
              independence, and the ability to participate in the things people
              love.
            </p>

            <p>
              We exist to help remove one barrier to restoration: cost. Through
              donor support, The Renewed Strength Project helps fund access to
              individualized, professionally guided training for individuals
              treated for cancer.
            </p>

            <p>
              Personal training is the current tool. Restoration is the goal:
              helping people work toward meaningful activities, roles, and
              routines that cancer has disrupted.
            </p>

          </div>

        </div>

      </section>

      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Why We Do This
            </p>

            <h2 className="text-4xl font-bold mb-6">
              The gap is not only physical. It is also access.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Many individuals want qualified support after cancer has changed
              their body, confidence, and daily life, but the cost of that
              support can put it out of reach.
            </p>
          </div>

          <div className="border border-[#d8a066]/30 rounded-3xl p-8 md:p-10 bg-white/[0.02]">
            <p className="text-3xl md:text-4xl font-light leading-tight text-white">
              "I would love to do this, but I can't afford it."
            </p>

            <p className="text-slate-400 leading-relaxed mt-6 max-w-3xl">
              That repeated reality helped shape the mission: create a pathway
              for people treated for cancer to access appropriate support
              without financial strain being the deciding factor.
            </p>
          </div>

        </div>

      </section>

      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              What Restoration Means
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Restoration is about participation in life.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The goal is not to promise that everything returns exactly as it
              was. The goal is to support what can be rebuilt: strength,
              function, confidence, independence, and the ability to engage in
              meaningful parts of everyday life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Returning to valued routines',
              'Rebuilding confidence with movement',
              'Improving strength and physical function',
              'Supporting independence and daily participation',
            ].map((item) => (
              <div
                key={item}
                className="border border-slate-800 rounded-2xl p-6 bg-slate-950/70"
              >
                <p className="text-white text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

      </section>

      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Who We Serve
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Individuals treated for cancer in Northern Colorado.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              For the first pilot, our work is focused locally in Loveland and
              Northern Colorado. Support is based on program fit, current
              capacity, safety considerations, and available funding.
            </p>
          </div>

          <div className="space-y-4">
            {serveItems.map((item) => (
              <div
                key={item}
                className="border border-slate-800 rounded-2xl p-5 bg-slate-950/70 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>

        </div>

      </section>

      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Our Approach
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Individualized support, grounded in safety and care.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The Renewed Strength Project does not replace medical care.
              Instead, the organization aims to complement treatment and
              recovery through supportive, professionally guided strength and
              movement programming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {approachPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="border border-slate-800 rounded-2xl p-6 bg-slate-950/70"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {principle.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 leading-relaxed mt-8 max-w-4xl">
            When appropriate, participation may include medical clearance or
            additional screening to support safe programming.
          </p>

        </div>

      </section>

      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#161616] via-slate-950 to-slate-950">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Founder Background
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Built from professional experience and personal purpose.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                Founder Scott Anderson, M.S., CPT, has worked in strength and
                conditioning, personal training, and exercise oncology settings
                with individuals navigating and recovering from cancer
                treatment.
              </p>

              <p>
                The organization was shaped by professional experience,
                family experience, and the repeated realization that many
                people wanted support but could not afford access to qualified
                training.
              </p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-3xl p-8 bg-slate-900">
            <h3 className="text-3xl font-semibold mb-4">
              Learn the full story
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8">
              The founding story shares more about the experiences,
              relationships, and professional path that shaped this work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/founding-story"
                className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-6 py-4 rounded-2xl transition duration-300 text-center"
              >
                Read Our Story
              </Link>

              <a
                href="https://givebutter.com/general-fund-iz0pzq"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-[#d8a066] text-white px-6 py-4 rounded-2xl transition duration-300 text-center"
              >
                Support the Mission
              </a>
            </div>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
