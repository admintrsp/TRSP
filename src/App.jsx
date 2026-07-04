import Navbar from './components/Navbar'
import Footer from './components/Footer'
     
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-black text-white">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.png')"
        }}
      />

      <div className="absolute inset-0 bg-slate-950/70"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 pt-32">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-8">
          Helping restore what cancer treatment can take.
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mb-10">
          Cancer and its treatment can affect strength, energy, confidence,
          and the ability to do the things people love. The Renewed Strength
          Project helps individuals treated for cancer in Northern Colorado
          access individualized, evidence-informed training support focused on
          restoring function, confidence, and participation in everyday life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <a
            href="/apply"
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
          Restoration Is The Goal
        </h2>

        <p className="text-lg leading-relaxed text-slate-300">
          The Renewed Strength Project provides financial support so
          individuals treated for cancer can access professional,
          restoration-focused personal training without cost becoming the
          barrier.
        </p>

        <p className="text-lg leading-relaxed text-slate-300 mt-6">
          Personal training is the current tool. Restoration is the purpose:
          helping each person work toward meaningful activities, roles, and
          routines that cancer has disrupted.
        </p>

      </div>
    </section>
  )
}

function WhoWeHelp() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#111827] via-slate-900 to-[#161616] border-t border-slate-800/40 text-white">

      <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <h2 className="text-4xl font-bold mb-8">
          Who We Help
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">

          <p>
            We support individuals treated for cancer who are working to
            rebuild strength, function, confidence, and participation in daily
            life.
          </p>

          <p>
            Support is individualized and based on each person’s current
            capacity, goals, program fit, and available funding.
          </p>

          <p className="text-slate-400">
            For the first pilot, The Renewed Strength Project is focused on
            Loveland and Northern Colorado.
          </p>

        </div>

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
            Cancer can change strength, energy, confidence, and daily life.
          </p>

          <p>
            Guided exercise can support strength, function, fatigue, and
            quality of life, but access to qualified support is often limited
            by cost.
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
            The Renewed Strength Project exists to help individuals treated
            for cancer take the next supported step toward strength, function,
            confidence, and the parts of life they want to participate in
            again.
          </p>

        </div>

        <div className="space-y-20">

          <div className="relative pl-10 border-l border-slate-700">

            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d8a066]"></div>

            <h3 className="text-3xl font-semibold mb-6">
              Apply for Support
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              Participation begins when an individual chooses to take the first step.
              Whether someone is actively navigating treatment or years into survivorship,
              the process starts with an application, connection, and understanding.
            </p>

          </div>

          <div className="relative pl-10 border-l border-slate-700">

            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d8a066]"></div>

            <h3 className="text-3xl font-semibold mb-6">
              Connect and Review Fit
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              We take time to learn each person’s story, current challenges,
              goals, treatment history, and physical capacity. Together, we
              determine whether the program is a safe and appropriate fit based
              on current capacity and available funding.
            </p>

          </div>

          <div className="relative pl-10 border-l border-slate-700">

            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#d8a066]"></div>

            <h3 className="text-3xl font-semibold mb-6">
              Begin Restoration-Focused Training
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              As resources and program capacity allow, individuals may receive
              support to engage in evidence-informed exercise and personal
              training designed to help rebuild strength, function, confidence,
              and participation in everyday life during and after treatment.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mt-6">
              Because the program is intentionally individualized and relationship-driven,
              availability may vary based on current capacity and funding.
            </p>

            <p className="text-slate-500 text-base leading-relaxed mt-4">
              When appropriate, participation may include medical clearance or
              additional screening to support safe programming.
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
            many individuals wanted support to rebuild strength and return to
            meaningful parts of life, but simply could not afford qualified
            training during treatment and recovery.
          </p>

          <div className="border border-[#d8a066]/30 bg-[#d8a066]/5 rounded-2xl p-8 my-12 backdrop-blur">

            <p className="text-2xl leading-relaxed text-white italic font-light">
              “I would love to do this, but I can’t afford it.”
            </p>

          </div>

          <p>
            The Renewed Strength Project was created to help remove that barrier
            and improve access to individualized, professionally guided,
            evidence-informed training support focused on restoration, not
            performance alone.
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
          Personal training is the tool. Restoration is the goal.
        </p>

        <p className="text-xl text-slate-300 leading-relaxed mt-10">
          We use individualized, evidence-informed movement to help people
          work toward the strength, confidence, and participation that cancer
          and treatment can disrupt.
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
          Evidence-Informed. Individualized. Restoration-Focused.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">

          <p>
            Cancer treatment changes the body, but it does not eliminate the
            body’s ability to adapt, regain strength, and rebuild confidence.
          </p>

          <p>
            Our training approach is individualized, progressive, and rooted
            in safety. Every participant receives programming tailored to their
            current capacity, treatment history, functional baseline, and
            restoration goals.
          </p>

          <p>
            We emphasize structured progression, clinical awareness, and
            appropriate supervision to support meaningful progress in strength,
            mobility, confidence, and participation in daily life.
          </p>

          <p className="text-white pt-6 text-xl leading-relaxed">
            Safe, structured, evidence-informed movement can help people work
            toward what cancer treatment has disrupted.
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
          Help Launch Restoration Support This Fall
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300 mb-12">

          <p className="text-2xl text-white font-semibold">
            Help fund 5 local participants this fall.
          </p>

          <p>
            We are preparing to launch our first local group of participants
            in Loveland and Northern Colorado.
          </p>

          <p>
            Your support funds access to professional, evidence-informed
            personal training used as a pathway toward restoration.
          </p>

          <p>
            Each gift helps remove cost as a barrier for individuals treated
            for cancer who are working to rebuild strength, function, and
            participation in the things that matter to them.
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
export default function App() {
  return (
    <div className="font-sans bg-slate-950">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhoWeHelp />
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
