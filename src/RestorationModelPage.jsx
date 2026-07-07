import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'

const modelPillars = [
  ['Context', 'The work begins with the person: goals, treatment history, current capacity, symptoms, fatigue, confidence, and provider guidance when appropriate.'],
  ['Calibration', 'Training is adjusted to match the day, the season of recovery, and the person’s response rather than forcing a generic plan.'],
  ['Progression', 'Progress is built thoughtfully through strength, mobility, conditioning, confidence, and functional capacity.'],
  ['Transfer', 'The goal is for work in training to support life outside of training: routines, roles, recreation, and independence.'],
]

const modelFlow = [
  ['01', 'Understand The Starting Point', 'We clarify goals, current capacity, symptoms, limitations, confidence, and relevant medical context.'],
  ['02', 'Set Restoration Priorities', 'The work is organized around what the person is trying to regain, maintain, or participate in again.'],
  ['03', 'Coach The Plan', 'Sessions use appropriate strength, mobility, balance, conditioning, and recovery work based on the individual.'],
  ['04', 'Adjust And Track', 'Progress is monitored and the plan changes as the person’s capacity, symptoms, goals, and life demands change.'],
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
      <SEO
        title="Restoration Model"
        description="TRSP's restoration model connects individualized strength and movement coaching with goals shaped by a person's capacity, medical context, symptoms, and life after cancer disruption."
        path="/restoration-model"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Restoration Model', path: '/restoration-model' },
        ]}
      />
      <Navbar />

      <section id="main-content" tabIndex="-1" className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Restoration Model</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              How restoration becomes a plan.
            </h1>
            <GoldDivider />
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
              The restoration model turns TRSP's philosophy into a structured,
              individualized coaching framework for strength, movement,
              confidence, and meaningful participation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/our-philosophy"
                className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                Read Our Philosophy
              </Link>
              <Link
                to="/participant-program"
                className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                View Participant Program
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 w-24 h-24 border-l border-t border-[#c98b2c]"></div>
            <div className="absolute -right-5 -bottom-5 w-24 h-24 border-r border-b border-[#c98b2c]"></div>
            <img
              src="/trsp-strength-lift-original.jpeg"
              alt="A focused strength training moment in a gym"
              className="relative w-full aspect-[4/3] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Framework</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              A model for making movement personal, careful, and useful.
            </h2>
          </div>
          <div>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              The model is not a fixed exercise template. It is a decision-making
              framework that helps coaching stay connected to the person’s
              goals, current capacity, safety considerations, and daily life.
            </p>
            <div className="mt-10 border-l border-[#c98b2c] pl-6">
              <p className="font-serif text-2xl md:text-3xl leading-snug text-[#071f3a]">
                Philosophy asks why restoration matters. The model explains how
                support is organized. The participant program explains what the
                experience looks like.
              </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
            A simple framework for thoughtful progression.
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mt-8">
            The model helps coaching stay responsive. It gives the work a
            clear structure while leaving room for the reality of cancer
            treatment, fatigue, symptoms, confidence, and changing life demands.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
            See how the model becomes the participant experience.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-2xl mx-auto mt-8">
            The participant program explains what happens after someone applies:
            the conversation, assessment, goals, coaching, progress tracking,
            and transition.
          </p>
          <Link
            to="/participant-program"
            className="inline-flex mt-10 bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition"
          >
            View Participant Program
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
