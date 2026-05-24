import Navbar from './components/Navbar'
     
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-black text-white">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/mountains.jpg')"
        }}
      />

      <div className="absolute inset-0 bg-slate-950/70"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-32">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-8">
          Reclaiming strength, function, and everyday life.
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-10">
          Through individualized exercise support and meaningful human connection,
          we help individuals rebuild confidence, resilience, and hope during
          and after treatment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <a
            href="https://forms.gle/XiRrN38kGjsYaFNb6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
          >
            Apply for Support
          </a>

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-500 hover:border-[#d8a066] hover:bg-white/5 text-white px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
          >
            Support the Mission
          </a>

        </div>

      </div>

    </section>
  )
}

function WhatWeDo() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] text-white border-t border-slate-800/40">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

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
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616] border-t border-slate-800/40 text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

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
  return (
<section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827] border-t border-slate-800/40 text-white">

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-8">
            You Are Not Alone
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            The Renewed Strength Project exists to help individuals navigating
            and recovering from cancer reconnect with strength, function,
            confidence, and hope through individualized exercise support.
          </p>

        </div>

        <div className="space-y-20">

          <div className="relative pl-10 border-l border-slate-700">

            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d8a066]"></div>

            <h3 className="text-3xl font-semibold mb-6">
              Reach Out
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              Participation begins when an individual chooses to take the first step.
              Whether someone is actively navigating treatment or years into survivorship,
              the process starts with connection, conversation, and understanding.
            </p>

          </div>

          <div className="relative pl-10 border-l border-slate-700">

            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d8a066]"></div>

            <h3 className="text-3xl font-semibold mb-6">
              Build a Plan Together
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              We take time to learn each person’s story, current challenges,
              goals, treatment history, and physical capacity in order to
              create an individualized path forward grounded in safety,
              professionalism, and support.
            </p>

          </div>

          <div className="relative pl-10 border-l border-slate-700">

            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d8a066]"></div>

            <h3 className="text-3xl font-semibold mb-6">
              Rebuild Strength, Function, and Hope
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              As resources and program capacity allow, individuals may receive
              support to engage in evidence-informed exercise and personal
              training designed to help restore autonomy, resilience,
              confidence, and participation in everyday life during and after treatment.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mt-6">
              Because the program is intentionally individualized and relationship-driven,
              availability may vary based on current capacity and funding.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}function WhyRenewedStrengthExists() {
  return (
    <section className="relative overflow-hidden py-36 bg-gradient-to-b from-[#111827] via-slate-950 to-[#161616] border-t border-slate-800/40 text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

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

          <div className="border border-[#d8a066]/30 bg-[#d8a066]/5 rounded-2xl p-8 my-12 backdrop-blur">

            <p className="text-2xl leading-relaxed text-white italic font-light">
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
    <section className="relative overflow-hidden pt-20 pb-24
     border-t border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-slate-950 backdrop-blur text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">

        <p className="text-4xl md:text-6xl leading-[1.2] font-light text-white">
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
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-slate-950 via-[#111827] to-[#161616] border-t border-slate-800/40 text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <h2 className="text-4xl font-bold mb-10">
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

          <p className="text-white italic pt-6 text-xl leading-relaxed">
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
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#161616] via-slate-900 to-slate-950 border-t border-slate-800/40 text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-4xl font-bold mb-8">
          Help Someone Rebuild Their Strength
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300 mb-12">

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

        <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/70 backdrop-blur rounded-2xl p-6 border border-slate-700/60 hover:border-[#d8a066]/60 hover:-translate-y-1 hover:bg-slate-800/90 transition duration-300 block shadow-xl"
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
            className="bg-slate-800/70 backdrop-blur rounded-2xl p-6 border border-slate-700/60 hover:border-[#d8a066]/60 hover:-translate-y-1 hover:bg-slate-800/90 transition duration-300 block shadow-xl"
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
            className="bg-slate-800/70 backdrop-blur rounded-2xl p-6 border border-slate-700/60 hover:border-[#d8a066]/60 hover:-translate-y-1 hover:bg-slate-800/90 transition duration-300 block shadow-xl"
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
          className="inline-flex items-center justify-center border border-[#d8a066] hover:bg-[#d8a066] hover:text-slate-950 text-white px-10 py-5 rounded-2xl transition duration-300 text-lg shadow-lg"
        >
          Donate to Renewed Strength Project
        </a>

      </div>
    </section>
  )
}
function TrustSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-950 via-[#111827] to-black border-t border-slate-800/40 text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

        <h2 className="text-4xl font-bold mb-6">
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
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black border-t border-slate-800/40 text-slate-400 py-14">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10 relative z-10">

        <div>

          <div className="text-white font-semibold mb-3 text-lg">
            Renewed Strength Project Nonprofit Corporation
          </div>

          <div className="text-slate-400 leading-relaxed">
            Northern Colorado
          </div>

        </div>

        <div>

          <a
            href="mailto:info@therenewedstrengthproject.org"
            className="hover:text-white transition duration-300"
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