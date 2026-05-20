function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
       <div className="flex items-center gap-3">
  <img
    src="/rsp-logo.png"
    alt="RSP Logo"
    className="w-12 h-12 object-contain -mt-1"
  />

  <span className="text-white font-semibold text-lg">
    Renewed Strength Project
  </span>
</div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:info@therenewedstrengthproject.org"
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-lg transition inline-flex items-center justify-center min-w-[110px]"
          >
            Contact
          </a>

<a
  href="https://forms.gle/XiRrN38kGjsYaFNb6"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl font-medium transition"
>
  Apply
</a>

          <givebutter-widget id="p5MWwO"></givebutter-widget>

        
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
<section
className="min-h-screen text-white flex items-center pt-24 bg-cover bg-center relative bg-slate-950"
style={{
  backgroundImage: "url('/hero-bg.png')",
}}  
>   
 <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering renewed strength.
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            We remove financial barriers to evidence-based personal training for
            individuals across the cancer continuum in Northern Colorado.
          </p>

<div className="flex flex-col sm:flex-row gap-4">
 


</div>
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
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Help Someone Rebuild Their Strength
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-blue-100 mb-10">
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
          <div className="bg-blue-800 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-2">$100</div>
            <div>Supports a session</div>
          </div>

          <div className="bg-blue-800 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-2">$500</div>
            <div>Supports a month of training</div>
          </div>

          <div className="bg-blue-800 rounded-2xl p-6">
            <div className="text-3xl font-bold mb-2">$1,500+</div>
            <div>Supports a full participant experience</div>
          </div>
        </div>

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

<section id="support" className="bg-white py-20 px-6">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-slate-900 mb-4">
      Support Renewed Strength
    </h2>


    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
      Your donation helps remove financial barriers to evidence-based
      cancer recovery and strength training services.
    </p>
  </div>

  <div className="flex justify-center">
    <givebutter-widget id="p5MWwO"></givebutter-widget>
  </div>
</section>

      <WhatWeDo />
      <WhyItMatters />
      <HowItWorks />
      <FoundingStory />
      <ImpactSection />
      <TrustSection />
      <Footer />
    </div>
  )
}

