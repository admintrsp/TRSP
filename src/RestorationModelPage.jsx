import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const restorationExamples = [
  'Walking farther with more confidence',
  'Carrying groceries or household items',
  'Returning to work or daily routines',
  'Playing with children or grandchildren',
  'Hiking, recreation, or time outdoors',
  'Feeling capable in the gym and in life',
]

const modelPillars = [
  ['Safety', 'Training is guided by current capacity, treatment history, fatigue, pain, mobility, and appropriate progression.'],
  ['Individualization', 'Each person begins from a different baseline. Programming reflects their body, goals, history, and current needs.'],
  ['Restoration', 'The work helps people move toward the activities, roles, routines, and confidence that matter in daily life.'],
]

const modelFlow = [
  ['01', 'Start With Life', 'We ask what the person is hoping to get back to, not just what exercise they want to perform.'],
  ['02', 'Build The Training Plan', 'Training decisions are shaped by goals, capacity, safety, fatigue, strength, mobility, and confidence.'],
  ['03', 'Track Meaningful Progress', 'Progress is viewed through training measures and daily-life indicators, not one narrow performance number.'],
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

export default function RestorationModelPage() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Restoration Model</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Personal training is the tool. Restoration is the goal.
            </h1>
            <GoldDivider />
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
              The model connects safe, individualized movement with the bigger
              reason people seek support: returning to meaningful parts of life
              that cancer and treatment can disrupt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/participant-program"
                className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                View Participant Program
              </Link>
              <Link
                to="/apply"
                className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                Apply for Support
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 w-24 h-24 border-l border-t border-[#c98b2c]"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 border-r border-b border-[#c98b2c]"></div>
            <img
              src="/trsp-training-focus.jpeg"
              alt="A focused strength training moment in a gym"
              className="relative w-full aspect-[4/3] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>What Restoration Means</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Meaningful capacity, not unrealistic promises.
            </h2>
          </div>
          <div>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              Restoration does not mean promising that everything returns to
              exactly what it was. It means supporting what can be rebuilt:
              strength, confidence, function, autonomy, and participation.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-10">
              {restorationExamples.map((example) => (
                <div key={example} className="bg-white p-5">
                  <p className="text-[#4b5563] leading-relaxed">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Model Pillars</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Structured support with the person at the center.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {modelPillars.map(([title, description]) => (
              <div key={title} className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
                <h3 className="font-serif text-3xl mb-4">
                  {title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>How The Model Works</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            The question comes before the exercise.
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mt-8">
            "What are you hoping to get back to?" keeps the work grounded.
            Training choices should connect to the life goals that matter most.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {modelFlow.map(([label, title, description]) => (
              <div key={title} className="border border-[#d8a066]/40 p-8">
                <p className="font-serif text-5xl text-[#d8a066] mb-8">
                  {label}
                </p>
                <h3 className="font-serif text-3xl mb-4">
                  {title}
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Access Makes The Model Possible</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Restoration starts with access.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto mt-8">
            Your support helps remove cost as a barrier for individuals
            affected by cancer who are working toward strength, confidence,
            and the parts of life they value.
          </p>
          <Link
            to="/apply"
            className="inline-flex mt-10 bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition"
          >
            Apply for Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
