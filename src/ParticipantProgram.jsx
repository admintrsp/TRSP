import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const supportItems = [
  'Individuals affected by cancer in Loveland and Northern Colorado',
  'People working to rebuild strength, mobility, confidence, or daily capacity',
  'People who may benefit from structured, professionally guided movement',
  'People for whom cost is a barrier to appropriate training support',
]

const programIncludes = [
  {
    title: 'Individualized Training',
    description:
      'Support is shaped around current capacity, goals, treatment history, safety considerations, and what the person hopes to work toward.',
  },
  {
    title: 'Purpose-Driven Goals',
    description:
      'The work connects training to real life: daily routines, family activities, recreation, work demands, confidence, and independence.',
  },
  {
    title: 'No Financial Barriers',
    description:
      'When funding and program fit align, The Renewed Strength Project helps cover training support so cost is not the reason someone cannot begin.',
  },
]

const steps = [
  {
    label: '01',
    title: 'Apply for Support',
    description:
      'The process begins with a short application so we can learn where you are, what you are hoping to restore, and what support may be appropriate.',
  },
  {
    label: '02',
    title: 'Review Fit and Safety',
    description:
      'We review each application personally and may follow up about goals, current capacity, medical clearance needs, and available funding.',
  },
  {
    label: '03',
    title: 'Plan the Next Step',
    description:
      'If the program is a fit, we discuss timing, training structure, expectations, and the restoration goals that matter most.',
  },
]

const programDetails = [
  ['Current Service', 'Restoration-focused personal training'],
  ['Pilot Location', 'Loveland and Northern Colorado'],
  ['Initial Pilot', 'Five funded participants as resources allow'],
  ['Program Length', 'Currently planned around 16 training sessions'],
  ['Estimated Support Cost', '$1,500 per participant'],
  ['Availability', 'Dependent on funding, fit, and safe program capacity'],
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

export default function ParticipantProgram() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Participant Program</SectionLabel>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Support for the life people are working to restore.
            </h1>

            <GoldDivider />

            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
              The Renewed Strength Project helps individuals affected by cancer
              access individualized, evidence-informed training support without
              cost becoming the barrier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/apply"
                className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                Apply for Support
              </Link>

              <Link
                to="/restoration-model"
                className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                View Restoration Model
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 w-24 h-24 border-l border-t border-[#c98b2c]"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 border-r border-b border-[#c98b2c]"></div>

            <img
              src="/trsp-forest-path-original.jpeg"
              alt="A quiet forest trail representing the path forward"
              className="relative w-full aspect-[4/3] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-16 items-start">
          <div>
            <SectionLabel>Who It Is For</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              A local pilot built around access, safety, and restoration.
            </h2>
          </div>

          <div className="grid gap-px bg-[#d8a066]/50 border border-[#d8a066]/50">
            {supportItems.map((item) => (
              <div key={item} className="bg-white p-6">
                <p className="text-lg text-[#4b5563] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>What Support May Include</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Personal training used as a pathway toward restoration.
          </h2>
          <GoldDivider />

          <p className="text-lg text-[#4b5563] leading-relaxed max-w-4xl">
            The goal is not to promise a specific outcome. The goal is to
            provide safe, structured support that helps each person work toward
            meaningful function, confidence, and participation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {programIncludes.map((item) => (
              <div key={item.title} className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
                <h3 className="font-serif text-3xl mb-4">
                  {item.title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Pilot Details</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Built to start carefully and grow responsibly.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-[#d8a066]/40 border border-[#d8a066]/40">
            {programDetails.map(([label, value]) => (
              <div key={label} className="bg-[#071f3a] p-6">
                <p className="text-[#d8a066] uppercase tracking-[0.18em] text-xs font-bold mb-3">
                  {label}
                </p>
                <p className="text-slate-100 text-lg leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>The Path Forward</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            A simple pathway from application to supported training.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {steps.map((step) => (
              <div key={step.title} className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
                <p className="font-serif text-5xl text-[#c98b2c] mb-8">
                  {step.label}
                </p>
                <h3 className="font-serif text-3xl mb-4">
                  {step.title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center border-y border-[#c98b2c] py-14">
          <SectionLabel>Start Here</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Ready to take the next supported step?
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto mt-8">
            If you or someone you care about has been affected by cancer and is
            seeking support in Northern Colorado, the application is the best
            place to begin.
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
