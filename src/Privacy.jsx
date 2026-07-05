import Navbar from './components/Navbar'
import Footer from './components/Footer'

const sections = [
  {
    title: 'What We Collect',
    copy:
      'When someone applies for support or submits a partner inquiry, we collect the information they choose to provide, such as name, contact information, location, program interest, availability, and notes related to next steps.',
  },
  {
    title: 'Why We Collect It',
    copy:
      'We use this information to review program fit, communicate with applicants or partners, coordinate follow-up, understand local need, and responsibly manage nonprofit operations.',
  },
  {
    title: 'Where It Goes',
    copy:
      'Form submissions are sent to The Renewed Strength Project systems, including internal dashboard tools and Google Sheets used for program tracking and follow-up.',
  },
  {
    title: 'Who Can Access It',
    copy:
      'Access is limited to people helping operate The Renewed Strength Project and support its programs. As the organization grows, access should remain limited to people who need it for program, administrative, or follow-up purposes.',
  },
  {
    title: 'What Not To Submit',
    copy:
      'Please do not submit detailed medical records, diagnosis documents, insurance information, financial account details, or emergency medical information through website forms.',
  },
  {
    title: 'Updates Or Deletion',
    copy:
      'If you need to update information you submitted or would like to request deletion of information from our active tracking systems, contact us and we will review the request.',
  },
]

export default function Privacy() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden pt-40 pb-20 px-6 bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] border-b border-slate-800/40">
        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#d8a066] uppercase tracking-[0.25em] text-sm font-semibold mb-6">
            Privacy & Data Use
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            How we handle information submitted through this website.
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            The Renewed Strength Project collects information so we can review
            requests, communicate clearly, and operate the program responsibly.
            This page explains our current approach in plain language.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#111827] via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border border-slate-800 rounded-3xl p-8 bg-slate-950/70"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#d8a066]">
                {section.title}
              </h2>

              <p className="text-slate-300 leading-relaxed">
                {section.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-950 border-t border-slate-800/40">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#d8a066]/30 bg-[#d8a066]/5 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              A few important notes
            </h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                Submitting an application or inquiry does not guarantee program
                participation, funding, partnership, or services.
              </p>

              <p>
                Website forms are not intended for emergencies. If you are
                experiencing a medical emergency, call 911 or contact an
                appropriate medical professional immediately.
              </p>

              <p>
                Questions about information submitted through the website can
                be sent to info@therenewedstrengthproject.org.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
