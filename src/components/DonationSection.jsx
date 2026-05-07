export default function DonationSection() {
  return (
    <section id="donate" className="py-24 bg-blue-900 text-white">
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
            Every dollar goes toward helping someone maintain strength,
            improve function, and regain confidence during one of the most
            challenging seasons of life.
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

        <a
          href="https://YOUR-DONATION-LINK.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-slate-200 transition"
        >
          Donate Now
        </a>
      </div>
    </section>
  )
}