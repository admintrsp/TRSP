import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

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

<div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 flex-wrap">          


<Link
  to="/about"
  className="border border-slate-600 hover:border-slate-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition"
>
  About
</Link>
<a
  href="mailto:info@therenewedstrengthproject.org"
className="border border-slate-600 hover:border-slate-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition inline-flex items-center justify-center">
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
  href="#donate"
  className="bg-[#d8a066] hover:bg-[#c99050] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition shadow-lg"
>
  Donate Now
</a>
  

        
        </div>
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
>      <div className="absolute inset-0 bg-slate-950/55"></div>

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
    <section className="pt-32 pb-24 bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">What We Do</h2>

        <p className="text-lg leading-relaxed text-slate-700">
          The Renewed Strength Project provides financial support for
          individuals impacted by cancer to access professional,
          evidence-based personal training.
        </p>

        <p className="text-lg leading-relaxed text-slate-700 mt-6">
          Our goal is simple: help people maintain strength, function, and
          quality of life during and after cancer treatment.
        </p>
      </div>
    </section>
  )
}

function WhyItMatters() {
  return (
    <section className="pt-32 pb-24 bg-slate-100 text-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">
          Why It Matters
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-700">
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

function AboutFounder() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Founded Through Experience
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-700">

          <p>
            The Renewed Strength Project was founded by Scott Anderson, M.S., CPT,
            whose background is in exercise science, strength training, and
            exercise oncology.
          </p>

          <p>
            Through both professional experience and personal life experiences,
            Scott saw firsthand how profoundly movement, strength, and supportive
            coaching can impact quality of life during and after cancer treatment.
          </p>

          <p>
            While working with individuals recovering from cancer treatment,
            he repeatedly encountered the same heartbreaking reality:
            many people wanted access to evidence-based training support,
            but simply could not afford it.
          </p>

          <p>
            The Renewed Strength Project was created to help remove that barrier
            and provide safe, individualized, evidence-informed strength training
            support grounded in both science and compassion.
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14 text-slate-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-slate-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                {step.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="py-24 bg-slate-100 text-slate-900">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          Evidence-Informed. Individualized. Safety-Driven.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-700">

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

          <p className="text-slate-900 font-medium italic pt-4">
            “Safe, structured, evidence-informed movement is not optional in
            recovery — it is foundational.”
          </p>

        </div>
      </div>
    </section>
  )
}

function FoundingStory() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Why This Exists
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-slate-300">
          <p>
            The Renewed Strength Project was created out of a simple but
            consistent reality: people navigating cancer often lose access to
            the very things that help them feel strong, capable, and in control
            of their bodies.
          </p>

          <p>
            Exercise is one of the most powerful tools available to support
            individuals through treatment and recovery—but for many, personal
            training is simply not financially accessible during that time.
          </p>

          <p>
            This organization exists to remove that barrier.
          </p>

          <p>
            Our goal is to make evidence-based personal training available to
            those who need it most, helping individuals maintain strength,
            improve quality of life, and regain a sense of control during and
            after cancer.
          </p>

          <p>
            We’re starting locally in Northern Colorado, with a focus on doing
            this well for a small number of individuals—and growing from there.
          </p>
        </div>
      </div>
    </section>
  )
}

function ImpactSection() {
  return (
    <section className="py-24 bg-slate-900 text-white">
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
            navigating cancer treatment regain strength, improve function, and rebuild confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
          <div className="bg-slate-800 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-2">$100</div>
            <div>Supports a session</div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-2">$500</div>
            <div>Supports a month of training</div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-2">$1,500+</div>
            <div>Supports a full participant experience</div>
          </div>
        </div>

<section id="donate" className="mt-12">
  <givebutter-widget id="p5MWwO"></givebutter-widget>
</section>


      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          A Registered 501(c)(3) Nonprofit
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed">
          The Renewed Strength Project Nonprofit Corporation is a registered
          501(c)(3) organization.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed mt-4">
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
    <div className="font-sans">
      <Navbar />
      <Hero />

  

      <WhatWeDo />
      <WhyItMatters />
      <AboutFounder />
      <HowItWorks />
      <PhilosophySection />
      <FoundingStory />
      <ImpactSection />
      <TrustSection />
      <Footer />
    </div>
  )
}

