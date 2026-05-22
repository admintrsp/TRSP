import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/rsp-logo.png"
            alt="RSP Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />

          <span className="text-white font-semibold text-base sm:text-lg leading-tight">
            Renewed Strength Project
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl"
          >
            ☰
          </button>
        </div>

        <div className="hidden md:flex items-center justify-end gap-3">

          <Link
            to="/about"
            className="border border-slate-600 hover:border-slate-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition"
          >
            About
          </Link>

          <Link
            to="/evidence"
            className="border border-slate-600 hover:border-slate-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition"
          >
            Evidence
          </Link>

          <a
            href="mailto:info@therenewedstrengthproject.org"
            className="border border-slate-600 hover:border-slate-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition inline-flex items-center justify-center"
          >
            Contact
          </a>

          <a
            href="https://forms.gle/XiRrN38kGjsYaFNb6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-600 hover:border-slate-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition inline-flex items-center justify-center"
          >
            Apply
          </a>

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-5 py-3 rounded-xl transition duration-300"
          >
            Donate
          </a>

        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-4 flex flex-col gap-4">

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="border border-slate-600 text-white px-4 py-3 rounded-xl text-center"
            >
              About
            </Link>

            <Link
              to="/evidence"
              onClick={() => setIsMenuOpen(false)}
              className="border border-slate-600 text-white px-4 py-3 rounded-xl text-center"
            >
              Evidence
            </Link>

            <a
              href="mailto:info@therenewedstrengthproject.org"
              onClick={() => setIsMenuOpen(false)}
              className="border border-slate-600 text-white px-4 py-3 rounded-xl text-center"
            >
              Contact
            </a>

            <a
              href="https://forms.gle/XiRrN38kGjsYaFNb6"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 text-white px-4 py-3 rounded-xl text-center"
            >
              Apply
            </a>

            <a
              href="https://givebutter.com/general-fund-iz0pzq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-5 py-3 rounded-xl transition duration-300 text-center"
            >
              Donate
            </a>

          </div>
        )}

      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      className="min-h-screen text-white flex items-center pt-32 bg-cover bg-center relative bg-slate-950"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/55"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering renewed strength.
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            We remove financial barriers to evidence-based personal training for
            individuals across the cancer continuum in Northern Colorado.
          </p>

        </div>
      </div>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section className="pt-32 pb-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          What We Do
        </h2>

        <p className="text-lg leading-relaxed text-slate-300">
          The Renewed Strength Project provides financial support for
          individuals impacted by cancer to access professional,
          evidence-based personal training.
        </p>

        <p className="text-lg leading-relaxed text-slate-300 mt-6">
          Our goal is simple: help people maintain strength, function, and
          quality of life during and after cancer treatment.
        </p>

      </div>
    </section>
  )
}

function WhyItMatters() {
  return (
    <section className="pt-32 pb-24 bg-slate-900/30 border-t border-slate-800 text-white">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Why It Matters
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">

          <p>
            Cancer impacts strength, energy, confidence, and daily life.
          </p>

          <p>
            Research shows that guided exercise can significantly improve
            outcomes, but access is often limited by cost.
          </p>

          <p>
            We exist to remove that barrier.
          </p>

        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      title: 'Apply or Refer',
      text: 'Individuals apply or are referred to the program.',
    },
    {
      title: 'We Fund Training',
      text: 'Approved participants receive financial support.',
    },
    {
      title: 'Train & Rebuild',
      text: 'Participants work with qualified coaches to regain strength and function.',
    },
  ]

  return (
    <section className="py-24 bg-slate-900/30 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {step.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

function WhyRenewedStrengthExists() {
  return (
    <section className="py-32 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6">

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

          <div className="border-l-4 border-[#d8a066] pl-6 py-2 my-10">
            <p className="text-xl leading-relaxed text-white italic">
              “I would love to do this, but I can’t afford it.”
            </p>
          </div>

          <p>
            The Renewed Strength Project was created to help remove that barrier
            and improve access to individualized, professionally guided,
            evidence-informed exercise support for individuals across the cancer continuum.
          </p>

        </div>
      </div>
    </section>
  )
}

function MissionStatement() {
  return (
    <section className="py-32 border-t border-slate-800 bg-slate-900/30 backdrop-blur">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <p className="text-4xl md:text-5xl leading-tight font-light text-white">
          The goal of exercise oncology is not simply performance.
        </p>

        <p className="text-xl text-slate-300 leading-relaxed mt-10">
          It is helping individuals move through treatment and recovery
          with greater resilience, function, and the ability to stay engaged
          in everyday life.
        </p>

      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Evidence-Informed. Individualized. Safety-Driven.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">

          <p>
            Cancer treatment changes the body, but it does not eliminate the
            body’s ability to adapt, regain strength, and rebuild confidence.
          </p>

          <p>
            Our training approach is individualized, progressive, and rooted
            in safety. Every participant receives programming tailored to their
            current capacity, treatment history, and functional baseline.
          </p>

          <p>
            We emphasize structured progression, clinical awareness, and
            appropriate supervision to support meaningful improvements in
            strength, mobility, confidence, and quality of life.
          </p>

          <p className="text-white font-medium italic pt-4">
            “Safe, structured, evidence-informed movement is not optional in
            recovery — it is foundational.”
          </p>

        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-8">
          Help Someone Rebuild Their Strength
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300 mb-10">

          <p>
            We are currently launching our first group of participants.
          </p>

          <p>
            Your support directly funds access to professional,
            evidence-based personal training for individuals navigating cancer.
          </p>

          <p>
            Your donation directly supports programs that help individuals
            navigating cancer treatment regain strength, improve function,
            and rebuild confidence.
          </p>

        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-[#d8a066] hover:-translate-y-1 hover:bg-slate-800/90 transition duration-300 block"
          >
            <div className="text-3xl font-bold mb-2 text-white">
              $100
            </div>

            <div className="text-slate-300">
              Supports a session
            </div>
          </a>

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-[#d8a066] hover:-translate-y-1 hover:bg-slate-800/90 transition duration-300 block"
          >
            <div className="text-3xl font-bold mb-2 text-white">
              $500
            </div>

            <div className="text-slate-300">
              Supports a month of training
            </div>
          </a>

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-[#d8a066] hover:-translate-y-1 hover:bg-slate-800/90 transition duration-300 block"
          >
            <div className="text-3xl font-bold mb-2 text-white">
              $1,500+
            </div>

            <div className="text-slate-300">
              Supports a full participant experience
            </div>
          </a>

        </div>

        <a
          href="https://givebutter.com/general-fund-iz0pzq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-[#d8a066] hover:bg-[#d8a066] hover:text-slate-950 text-white px-8 py-4 rounded-2xl transition duration-300 text-lg"
        >
          Donate to Renewed Strength Project
        </a>

      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          A Registered 501(c)(3) Nonprofit
        </h2>

        <p className="text-lg text-slate-300 leading-relaxed">
          The Renewed Strength Project Nonprofit Corporation is a registered
          501(c)(3) organization.
        </p>

        <p className="text-lg text-slate-300 leading-relaxed mt-4">
          All donations are tax-deductible.
        </p>

      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">

        <div>
          <div className="text-white font-semibold mb-2">
            Renewed Strength Project Nonprofit Corporation
          </div>

          <div>Northern Colorado</div>
        </div>

        <div>
          <a
            href="mailto:info@therenewedstrengthproject.org"
            className="hover:text-white transition"
          >
            info@therenewedstrengthproject.org
          </a>
        </div>

      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans bg-slate-950">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyItMatters />
      <HowItWorks />
      <WhyRenewedStrengthExists />
      <MissionStatement />
      <PhilosophySection />
      <ImpactSection />
      <TrustSection />
      <Footer />
    </div>
  )
}