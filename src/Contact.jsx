import { Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const emailAddress = "info@therenewedstrengthproject.org"

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

export default function Contact() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-32 md:pt-36 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Start the right conversation.
            </h1>
            <GoldDivider />

            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed">
              Rooted in Loveland and serving individuals affected by cancer
              across Northern Colorado, The Renewed Strength Project is here
              to help you take the next appropriate step.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <Link
                to="/apply"
                className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-7 py-4 rounded-sm transition text-center"
              >
                Apply for Support
              </Link>

              <Link
                to="/partner-inquiry"
                className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-7 py-4 rounded-sm transition text-center"
              >
                Partner With Us
              </Link>
            </div>

            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex mt-5 text-[#071f3a] hover:text-[#c98b2c] font-semibold transition"
            >
              {emailAddress}
            </a>
          </div>

          <figure className="relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 border-l border-t border-[#c98b2c]"></div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 border-r border-b border-[#c98b2c]"></div>
            <img
              src="/loveland-heart.png"
              alt="The red Loveland heart sculpture with the lake and mountains behind it"
              className="relative w-full aspect-[4/3] object-cover object-center shadow-xl"
            />
            <figcaption className="mt-5 text-sm md:text-base text-[#6b7280] leading-relaxed">
              Loveland, Colorado is home base for this work and the first TRSP
              pilot.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Where To Begin</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Choose the path that fits your question.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
              <h3 className="font-serif text-3xl mb-4">Participant Support</h3>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                For individuals affected by cancer who are interested in
                restoration-focused training support.
              </p>
              <Link to="/apply" className="font-semibold text-[#071f3a] hover:text-[#c98b2c]">
                Apply for support
              </Link>
            </div>

            <div className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
              <h3 className="font-serif text-3xl mb-4">Community Partners</h3>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                For businesses, organizations, donors, and referral partners
                who want to help remove financial barriers.
              </p>
              <Link to="/partner-inquiry" className="font-semibold text-[#071f3a] hover:text-[#c98b2c]">
                Start a partner inquiry
              </Link>
            </div>

            <div className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
              <h3 className="font-serif text-3xl mb-4">General Questions</h3>
              <p className="text-[#4b5563] leading-relaxed mb-6">
                For media, volunteering, local outreach, or general questions
                about The Renewed Strength Project.
              </p>
              <a href={`mailto:${emailAddress}`} className="font-semibold text-[#071f3a] hover:text-[#c98b2c]">
                Email us
              </a>
            </div>

            <div className="border border-[#e6dac8] bg-[#fbfaf7] p-8">
              <h3 className="font-serif text-3xl mb-4">Medical Boundaries</h3>
              <p className="text-[#4b5563] leading-relaxed">
                TRSP does not provide emergency care or medical advice. For
                urgent medical needs, contact your medical team or call 911.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
