import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">

      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

<Link
  to="/"
  className="inline-flex items-center border border-slate-600 hover:border-slate-400 text-white px-4 py-2 rounded-xl transition mb-8"
>
  ← Back to Home
</Link>

          <h1 className="text-5xl font-bold mb-6">
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

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-8">
            Why This Exists
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-slate-700">

            <p>
              The Renewed Strength Project was founded through both professional
              experience and deeply personal experiences witnessing the impact
              cancer treatment can have on strength, physical function,
              confidence, and quality of life.
            </p>

            <p>
              Founder Scott Anderson, M.S., CPT, has worked in strength and
              conditioning, personal training, and exercise oncology settings
              with individuals navigating and recovering from cancer treatment.
            </p>

            <p className="text-slate-900 font-medium italic">
              “I would love to do this, but I can’t afford it.”
            </p>

            <p>
              That repeated reality ultimately became part of the motivation
              behind creating The Renewed Strength Project.
            </p>

          </div>

        </div>
      </section>

<section className="py-24 bg-slate-100 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      What We Believe
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-slate-700">

      <p>
        We believe exercise is not simply about fitness.
      </p>

      <p>
        When appropriately supervised and individualized,
        movement and strength training can help support:
      </p>

      <ul className="space-y-3 text-slate-800 list-disc pl-6">

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

<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      Our Approach
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-slate-700">

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

<section className="py-24 bg-slate-100 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      Who We Serve
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-slate-700">

      <p>
        The Renewed Strength Project supports individuals
        across the cancer continuum.
      </p>

      <p>
        This may include individuals:
      </p>

      <ul className="space-y-3 text-slate-800 list-disc pl-6">

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