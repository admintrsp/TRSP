import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const supportItems = [
  'Individuals treated for cancer in Loveland and Northern Colorado',
  'People working to rebuild strength, mobility, confidence, or daily capacity',
  'People who may benefit from structured, professionally guided movement',
  'People for whom cost is a barrier to appropriate training support',
]

const programIncludes = [
  {
    title: 'Individualized Training',
    description:
      'Support is built around current capacity, goals, treatment history, safety considerations, and what the person hopes to work toward.',
  },
  {
    title: 'Restoration-Focused Goals',
    description:
      'The work connects training to real life: daily routines, family activities, recreation, work demands, confidence, and independence.',
  },
  {
    title: 'Cost Barrier Removed',
    description:
      'When funding and program fit align, The Renewed Strength Project helps cover training support so cost is not the reason someone cannot begin.',
  },
]

const steps = [
  {
    title: 'Apply for Support',
    description:
      'The process begins with a short application so we can learn who you are, where you are located, and what you are hoping to work toward.',
  },
  {
    title: 'Review Fit and Safety',
    description:
      'We review each application personally and may follow up about goals, current capacity, medical clearance needs, and available funding.',
  },
  {
    title: 'Plan the Next Step',
    description:
      'If the program is a fit, we discuss timing, training structure, expectations, and the restoration goals that matter most.',
  },
]

const programDetails = [
  {
    label: 'Current Service',
    value: 'Restoration-focused personal training',
  },
  {
    label: 'Pilot Location',
    value: 'Loveland and Northern Colorado',
  },
  {
    label: 'Initial Pilot',
    value: 'Five funded participants as resources allow',
  },
  {
    label: 'Program Length',
    value: 'Currently planned around 16 training sessions',
  },
  {
    label: 'Estimated Support Cost',
    value: '$1,500 per participant',
  },
  {
    label: 'Availability',
    value: 'Dependent on funding, fit, and safe program capacity',
  },
]

export default function ParticipantProgram() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] pt-32 md:pt-40 pb-20 md:pb-24 px-5 sm:px-6 border-b border-slate-800/40">
        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              Participant Program
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
              Support for the strength, confidence, and life people are working to restore.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
              The Renewed Strength Project helps individuals treated for cancer
              access individualized, evidence-informed training support without
              cost becoming the barrier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
              >
                Apply for Support
              </Link>

              <Link
                to="/restoration-model"
                className="border border-slate-600 hover:border-[#d8a066] text-white px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
              >
                View Restoration Model
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#d8a066]/15 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 shadow-2xl shadow-black/40 bg-slate-900">
              <img
                src="/participant-program-support.png"
                alt="Trainer and participant discussing restoration-focused support"
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
              Who It Is For
            </p>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              A local pilot built around access, safety, and restoration.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The program is for people who are ready for a supported next step
              and want training to serve something bigger than exercise alone.
            </p>
          </div>

          <div className="grid gap-4">
            {supportItems.map((item) => (
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

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              What Support May Include
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Personal training used as a pathway toward restoration.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The goal is not to promise a specific outcome. The goal is to
              provide safe, structured support that helps each person work
              toward meaningful function, confidence, and participation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programIncludes.map((item) => (
              <div
                key={item.title}
                className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#d8a066]">
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

      <section className="py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div>
            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Pilot Details
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Built to start carefully and grow responsibly.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The first phase is intentionally focused. We are learning,
              documenting, and building systems while supporting a small number
              of local participants as funding allows.
            </p>
          </div>

          <div className="grid gap-4">
            {programDetails.map((detail) => (
              <div
                key={detail.label}
                className="border border-slate-800 rounded-2xl p-5 bg-slate-950/70"
              >
                <p className="text-slate-500 text-sm mb-2">
                  {detail.label}
                </p>

                <p className="text-white text-xl font-semibold">
                  {detail.value}
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
              How It Works
            </p>

            <h2 className="text-4xl font-bold mb-6">
              A simple pathway from application to supported training.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The program is intentionally personal. We do not promise a
              specific outcome. We work to support appropriate, meaningful
              next steps based on each person's capacity, goals, and fit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
              >
                <div className="text-[#d8a066] text-4xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-medium mb-5">
            Start Here
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Ready to take the next supported step?
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            If you or someone you care about has been treated for cancer and
            is seeking support in Northern Colorado, the application is the
            best place to begin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-8 py-5 rounded-2xl transition duration-300 text-lg"
            >
              Apply for Support
            </Link>

            <a
              href="https://givebutter.com/general-fund-iz0pzq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-slate-600 hover:border-[#d8a066] text-white px-8 py-5 rounded-2xl transition duration-300 text-lg"
            >
              Help Fund Access
            </a>
          </div>

          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto mt-8">
            Program participation depends on current capacity, funding,
            application review, and whether support is a safe and appropriate
            fit.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
