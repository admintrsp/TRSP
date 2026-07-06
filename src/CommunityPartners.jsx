import { Link } from "react-router-dom"
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

const reasons = [
  {
    title: "Community Impact",
    copy:
      "Invest directly in individuals and families in Northern Colorado as they work to restore strength, confidence, and participation in life.",
  },
  {
    title: "Evidence-Informed Support",
    copy:
      "Help expand access to individualized training shaped by exercise oncology principles, appropriate progression, and practical restoration goals.",
  },
  {
    title: "Local Investment",
    copy:
      "Your support stays close to home, helping local individuals access professional support when cost would otherwise stand in the way.",
  },
  {
    title: "Long-Term Partnership",
    copy:
      "Join a growing network of businesses, organizations, and community leaders helping build a sustainable pathway for care beyond treatment.",
  },
]

const opportunities = [
  {
    title: "Financial Support",
    items: [
      "Sponsor participant scholarships",
      "Support annual fundraising campaigns",
      "Become a recurring community partner",
      "Sponsor education or outreach events",
    ],
  },
  {
    title: "In-Kind Giving",
    items: [
      "Printing and marketing support",
      "Photography or media services",
      "Professional services",
      "Equipment or facility support",
    ],
  },
  {
    title: "Employee Engagement",
    items: [
      "Volunteer opportunities",
      "Community service days",
      "Matching gift programs",
      "Fundraising events",
    ],
  },
  {
    title: "Referral & Community Collaboration",
    items: [
      "Awareness and referral pathways",
      "Community wellness initiatives",
      "Educational collaboration",
      "Shared outreach opportunities",
    ],
  },
]

const partnerSlots = [
  "Founding Partner I",
  "Founding Partner II",
  "Founding Partner III",
  "Founding Partner IV",
]

export default function CommunityPartners() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-32 md:pt-36 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl">
            <SectionLabel>Community Partnerships</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Help build the pathway back to life.
            </h1>
            <GoldDivider />

            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed">
              Community partners make it possible for individuals affected by
              cancer to access restoration-focused training without financial
              barriers deciding whether support is possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/partner-inquiry"
                className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                Become a Partner
              </Link>

              <Link
                to="/partner-inquiry"
                className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
              >
                Schedule a Conversation
              </Link>
            </div>
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
              Rooted in Loveland and serving individuals affected by cancer
              across Northern Colorado.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <SectionLabel>Why Partner With Us</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Together, we can make restoration support more accessible.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50 mt-14">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-white p-8">
                <h3 className="font-serif text-3xl mb-4">{reason.title}</h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {reason.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Partnership Opportunities</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              There are many ways to support the mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="bg-white border border-[#e6dac8] p-8"
              >
                <h3 className="font-serif text-3xl mb-5">
                  {opportunity.title}
                </h3>
                <ul className="space-y-3 text-[#4b5563] leading-relaxed">
                  {opportunity.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#c98b2c]">|</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Your Partnership Creates Impact</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Every $1,500 can help support one individual.
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed mt-8">
              A funded participant may receive individualized sessions,
              evidence-informed programming, one-on-one coaching, and support
              aimed at confidence, capability, and participation in daily life.
            </p>
          </div>

          <div className="border border-[#d8a066]/50 p-8 md:p-10">
            <h3 className="font-serif text-3xl mb-6">
              One participant may receive:
            </h3>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>16 individualized personal training sessions</p>
              <p>Restoration-focused exercise programming</p>
              <p>One-on-one coaching and accountability</p>
              <p>Support rebuilding strength, function, and confidence</p>
              <p>Encouragement during a meaningful return to daily life</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl text-center mx-auto">
            <SectionLabel>Founding Community Partners</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Help build something that will last.
            </h2>
            <p className="text-lg text-[#4b5563] leading-relaxed mt-8">
              The first organizations who partner with The Renewed Strength
              Project will be recognized as founding community partners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {partnerSlots.map((slot) => (
              <div
                key={slot}
                className="border border-dashed border-[#c98b2c]/60 bg-[#fbfaf7] min-h-48 p-6 flex items-center justify-center text-center"
              >
                <div>
                  <h3 className="font-serif text-2xl mb-3">{slot}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    Reserved for one of the first organizations helping launch
                    this work.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center border-y border-[#c98b2c] py-14">
          <SectionLabel>Start The Conversation</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Partnership begins with a conversation, not a commitment.
          </h2>
          <Link
            to="/partner-inquiry"
            className="inline-flex mt-10 bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition"
          >
            Start a Partnership Inquiry
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
