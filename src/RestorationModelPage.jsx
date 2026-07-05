import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const modelPillars = [
  {
    title: 'Safety',
    description:
      'Training is guided by current capacity, treatment history, fatigue, pain, mobility, and appropriate progression.',
  },
  {
    title: 'Individualization',
    description:
      'Each person begins from a different baseline. Programming should reflect their body, goals, history, and current needs.',
  },
  {
    title: 'Restoration',
    description:
      'The work is aimed at helping people move toward the activities, roles, routines, and confidence that matter in daily life.',
  },
]

const restorationExamples = [
  'Walking farther with more confidence',
  'Carrying groceries or household items',
  'Returning to work or daily routines',
  'Playing with children or grandchildren',
  'Hiking, recreation, or time outdoors',
  'Feeling more capable in the gym and in life',
]

const modelFlow = [
  {
    title: 'Start With Life',
    description:
      'We ask what the person is hoping to get back to, not just what exercise they want to perform.',
  },
  {
    title: 'Build The Training Plan',
    description:
      'Training decisions are shaped by goals, capacity, safety, fatigue, strength, mobility, and confidence.',
  },
  {
    title: 'Track Meaningful Progress',
    description:
      'Progress is viewed through training measures and daily-life indicators, not one narrow performance number.',
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

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] pt-32 md:pt-40 pb-20 md:pb-24 px-5 sm:px-6 border-b border-slate-800/40">
        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              Restoration Model
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
              Personal training is the tool. Restoration is the goal.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
              The TRSP restoration model connects safe, individualized movement
              with the bigger reason people seek support: returning to meaningful
              parts of life that cancer and treatment can disrupt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/participant-program"
                className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
              >
                View Participant Program
              </Link>

              <Link
                to="/apply"
                className="border border-slate-600 hover:border-[#d8a066] text-white px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
              >
                Apply for Support
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#d8a066]/15 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 shadow-2xl shadow-black/40 bg-slate-900">
              <img
                src="/restoration-model-movement.png"
                alt="Participant practicing a functional movement with trainer support"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              What Restoration Means
            </p>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Restoration is about meaningful capacity, not unrealistic promises.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Restoration does not mean promising that everything returns to
              exactly what it was. It means supporting what can be rebuilt:
              strength, confidence, function, autonomy, and participation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {restorationExamples.map((example) => (
              <div
                key={example}
                className="border border-slate-800 rounded-2xl p-5 bg-slate-950/70 text-slate-300"
              >
                {example}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Model Pillars
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Structured support with the person at the center.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The model gives structure to the work while keeping the human
              goal in view. Training should serve life, not replace it.
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

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              How The Model Works
            </p>

            <h2 className="text-4xl font-bold mb-6">
              The question comes before the exercise.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              "What are you hoping to get back to?" keeps the work grounded.
              Training choices should connect to the life goals that matter
              most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modelFlow.map((item, index) => (
              <div
                key={item.title}
                className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
              >
                <div className="text-[#d8a066] text-4xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              What We Track
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Outcomes should reflect both training progress and life progress.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Tracking helps guide support and tell a more complete story:
              not only what changed in the gym, but what became more possible
              outside of it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {outcomeGroups.map((group) => (
              <div
                key={group.title}
                className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
              >
                <h3 className="text-2xl font-bold mb-5 text-[#d8a066]">
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
          <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-medium mb-5">
            Access Makes The Model Possible
          </p>

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
