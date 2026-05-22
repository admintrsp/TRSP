import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <div className="bg-slate-950 text-white min-h-screen">
{/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">

  <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

    {/* LOGO */}
    <Link to="/" className="flex items-center gap-4">

      <img
        src="/rsp-logo.png"
        alt="Renewed Strength Project"
        className="w-14 h-14 object-contain"
      />

      <span className="text-2xl font-semibold text-white">
        Renewed Strength Project
      </span>

    </Link>

    {/* DESKTOP NAV */}
    <nav className="hidden md:flex items-center gap-4">

      <Link
        to="/about"
        className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
      >
        About
      </Link>

      <Link
        to="/evidence"
        className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
      >
        Evidence
      </Link>

      <Link
        to="/contact"
        className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
      >
        Contact
      </Link>

      <Link
        to="/apply"
        className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
      >
        Apply
      </Link>

      <a
        href="https://givebutter.com/general-fund-iz0pzq"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#d8a066] hover:bg-[#e5b278] text-slate-950 font-medium px-6 py-3 rounded-2xl transition"
      >
        Donate
      </a>

    </nav>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden text-white"
    >
      {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
    </button>

  </div>

  {/* MOBILE MENU */}
  {mobileMenuOpen && (
    <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">

      <div className="flex flex-col px-6 py-6 gap-4">

        <Link
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg"
        >
          About
        </Link>

        <Link
          to="/evidence"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg"
        >
          Evidence
        </Link>

        <Link
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg"
        >
          Contact
        </Link>

        <Link
          to="/apply"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg"
        >
          Apply
        </Link>

        <a
          href="https://givebutter.com/general-fund-iz0pzq"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d8a066] text-slate-950 text-center font-medium px-6 py-4 rounded-2xl mt-2"
        >
          Donate
        </a>

      </div>

    </div>
  )}

</header>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] pt-32 pb-20 px-6 border-b border-slate-800/40">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            About The Renewed Strength Project
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            The Renewed Strength Project is a Northern Colorado-based 501(c)(3)
            nonprofit organization focused on removing financial barriers to
            evidence-based strength training for individuals navigating cancer
            treatment and recovery.
          </p>

        </div>

      </section>

      {/* WHY IT EXISTS */}
      <section className="relative overflow-hidden py-24 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">

          <h2 className="text-4xl font-bold mb-10">
            Why Renewed Strength Exists
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">

            <p>
              The Renewed Strength Project was founded through both professional
              experience and deeply personal experiences witnessing the impact
              cancer treatment can have on physical function, confidence,
              independence, and everyday life.
            </p>

            <p>
              Founder Scott Anderson, M.S., CPT, has worked in strength and
              conditioning, personal training, and exercise oncology settings
              with individuals navigating and recovering from cancer treatment.
            </p>

            <p>
              Throughout that experience, one reality continued to repeat itself:
              many individuals wanted access to evidence-based training support,
              but simply could not afford it during treatment and recovery.
            </p>

            <div className="border border-[#d8a066]/30 rounded-3xl p-8 bg-white/[0.02] my-10">
              <p className="text-3xl italic text-white leading-relaxed">
                “I would love to do this, but I can’t afford it.”
              </p>
            </div>

            <p>
              The Renewed Strength Project was created to help remove that barrier
              and improve access to individualized, professionally guided,
              evidence-informed exercise support for individuals across the cancer continuum.
            </p>

            <p>
              Exercise oncology is not simply about performance or fitness.
              It is about helping individuals maintain function, rebuild confidence,
              and stay engaged in everyday life throughout treatment and recovery.
            </p>

          </div>

        </div>

      </section>

      {/* MISSION STATEMENT */}
      <section className="relative overflow-hidden pt-20 pb-20 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          <p className="text-4xl md:text-6xl leading-tight font-light text-white">
            The goal of exercise oncology is not simply performance.
          </p>

          <p className="text-xl text-slate-300 leading-relaxed mt-10 max-w-3xl mx-auto">
            It is helping individuals move through treatment and recovery
            with greater resilience, function, and the ability to stay engaged
            in everyday life.
          </p>

        </div>

      </section>

      {/* WHAT WE BELIEVE */}
      <section className="relative overflow-hidden py-20 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">

          <h2 className="text-4xl font-bold mb-8">
            What We Believe
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">

            <p>
              We believe exercise is not simply about fitness.
            </p>

            <p>
              When appropriately supervised and individualized,
              movement and strength training can help support:
            </p>

            <ul className="space-y-3 text-white list-disc pl-6">

              <li>strength and physical function</li>
              <li>mobility and independence</li>
              <li>confidence and resilience</li>
              <li>energy levels and quality of life</li>
              <li>reconnection with daily life and community</li>

            </ul>

            <p>
              Our philosophy is rooted in the idea that exercise
              should support people’s lives — not consume them.
            </p>

          </div>

        </div>

      </section>

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden py-20 px-6 border-b border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827]">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">

          <h2 className="text-4xl font-bold mb-8">
            Our Approach
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">

            <p>
              Every participant arrives with a unique medical history,
              treatment experience, and functional baseline.
            </p>

            <p>
              Our approach is individualized, progressive,
              safety-driven, and evidence-informed.
            </p>

            <p>
              Programming is tailored to the individual and adjusted
              based on treatment status, fatigue, mobility limitations,
              pain, surgical recovery, and overall tolerance and response.
            </p>

            <p>
              We emphasize structured progression, appropriate supervision,
              movement quality, and realistic long-term sustainability
              rather than aggressive performance goals.
            </p>

            <p>
              The Renewed Strength Project does not replace medical care.
              Instead, the organization aims to complement treatment
              and recovery through supportive, professionally guided
              strength and movement programming.
            </p>

          </div>

        </div>

      </section>

      {/* WHO WE SERVE */}
      <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-[#111827] via-slate-900 to-slate-950">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">

          <h2 className="text-4xl font-bold mb-8">
            Who We Serve
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-300">

            <p>
              The Renewed Strength Project supports individuals
              across the cancer continuum.
            </p>

            <p>
              This may include individuals:
            </p>

            <ul className="space-y-3 text-white list-disc pl-6">

              <li>currently undergoing treatment</li>
              <li>recovering from treatment</li>
              <li>living long-term beyond treatment</li>
              <li>experiencing treatment-related deconditioning</li>
              <li>working to rebuild strength, confidence, and physical function</li>

            </ul>

            <p>
              Every participant’s medical history, treatment experience,
              and functional baseline is different. Our goal is to meet
              individuals where they are and build forward safely
              and progressively from there.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}