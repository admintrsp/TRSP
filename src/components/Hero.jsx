export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Renewing strength through cancer.
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            We remove financial barriers to evidence-based personal training for
            individuals across the cancer continuum in Northern Colorado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#donate"
              className="bg-blue-700 hover:bg-blue-600 px-8 py-4 rounded-xl font-medium text-center transition"
            >
              Donate Now
            </a>

            <a
              href="#contact"
              className="border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-xl font-medium text-center transition"
            >
              Apply / Refer a Participant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}