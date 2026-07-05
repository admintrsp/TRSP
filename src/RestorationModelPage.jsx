import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const modelPillars = [
  {
    title: 'Safety',
    description:
      'Training is guided by current capacity, medical context, fatigue, pain, mobility, and appropriate progression.',
  },
  {
    title: 'Individualization',
    description:
      'Each person begins from a different baseline. Programming should reflect their body, goals, history, and current needs.',
  },
  {
    title: 'Restoration',
    description:
      'The work is aimed at helping people move toward the activities, roles, and routines that matter in daily life.',
  },
]

const outcomeGroups = [
  {
    title: 'Physical Function',
    items: ['Strength', 'Mobility', 'Balance', 'Daily capacity'],
  },
  {
    title: 'Confidence',
    items: ['Movement confidence', 'Gym confidence', 'Self-efficacy', 'Readiness for next steps'],
  },
  {
    title: 'Participation',
    items: ['Family activities', 'Work and routines', 'Recreation', 'Community life'],
  },
]

export default function RestorationModelPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] pt-40 pb-24 px-6 border-b border-slate-800/40">
        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-[#d8a066] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
            Restoration Model
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
            Personal training is the tool. Restoration is the goal.
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            The TRSP restoration model connects safe, individualized movement
            with the bigger reason people seek support: returning to meaningful
            parts of life that cancer and treatment can disrupt.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Model Pillars
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Structured support without unrealistic promises.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Restoration does not mean promising that everything returns to
              exactly what it was. It means supporting what can be rebuilt:
              strength, confidence, function, autonomy, and participation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modelPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#d8a066]">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Core Question
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              "What are you hoping to get back to?"
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              This question keeps the work human. For one person, restoration
              may mean hiking again. For another, it may mean carrying
              groceries, returning to work, playing with grandchildren, or
              feeling confident moving through the day.
            </p>

            <p>
              Training choices should serve those life goals. That is why TRSP
              frames personal training as a pathway toward restoration rather
              than an end in itself.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              What We Track
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Outcomes should reflect both training progress and life progress.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {outcomeGroups.map((group) => (
              <div
                key={group.title}
                className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
              >
                <h3 className="text-2xl font-bold mb-5">
                  {group.title}
                </h3>

                <ul className="space-y-3 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Restoration starts with access.
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Your support helps remove cost as a barrier for individuals treated
            for cancer who are working toward strength, confidence, and the
            parts of life they value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
            >
              Apply for Support
            </Link>

            <a
              href="https://givebutter.com/general-fund-iz0pzq"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-[#d8a066] text-white px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
