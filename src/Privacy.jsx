import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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

const sections = [
  {
    title: "What We Collect",
    copy:
      "When someone applies for support or submits a partner inquiry, we collect the information they choose to provide, such as name, contact information, location, program interest, availability, and notes related to next steps.",
  },
  {
    title: "Why We Collect It",
    copy:
      "We use this information to review program fit, communicate with applicants or partners, coordinate follow-up, understand local need, and responsibly manage nonprofit operations.",
  },
  {
    title: "Where It Goes",
    copy:
      "Form submissions are sent to The Renewed Strength Project systems, including internal dashboard tools and Google Sheets used for program tracking and follow-up.",
  },
  {
    title: "Who Can Access It",
    copy:
      "Access is limited to people helping operate The Renewed Strength Project and support its programs. As the organization grows, access should remain limited to people who need it for program, administrative, or follow-up purposes.",
  },
  {
    title: "What Not To Submit",
    copy:
      "Please do not submit detailed medical records, diagnosis documents, insurance information, financial account details, or emergency medical information through website forms.",
  },
  {
    title: "Updates Or Deletion",
    copy:
      "If you need to update information you submitted or would like to request deletion of information from our active tracking systems, contact us and we will review the request.",
  },
]

export default function Privacy() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Privacy & Data Use</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-4xl">
            How we handle information submitted through this website.
          </h1>
          <GoldDivider />
          <p className="text-xl md:text-2xl text-[#334155] leading-relaxed max-w-3xl">
            The Renewed Strength Project collects information so we can review
            requests, communicate clearly, and operate the program responsibly.
            This page explains our current approach in plain language.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50">
          {sections.map((section) => (
            <div key={section.title} className="bg-white p-8">
              <h2 className="font-serif text-3xl mb-4">{section.title}</h2>
              <p className="text-[#4b5563] leading-relaxed">{section.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-20 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Important Notes</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Website forms are for communication and program review.
          </h2>

          <div className="space-y-5 text-slate-200 leading-relaxed mt-10">
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
              Questions about information submitted through the website can be
              sent to info@therenewedstrengthproject.org.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
