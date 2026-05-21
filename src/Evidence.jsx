import { Link } from 'react-router-dom'

export default function Evidence() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
<Link
  to="/"
  className="inline-block mb-10 border border-slate-600 hover:border-slate-400 text-white px-5 py-3 rounded-xl transition"
>
  ← Return Home
</Link>
        <h1 className="text-5xl font-bold mb-8">
          Evidence & Research
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed mb-12">
          Exercise oncology is an evolving field supported by a growing body
          of research demonstrating the importance of appropriately prescribed
          physical activity and resistance training during and after cancer treatment.
        </p>

        <div className="space-y-10">
<div className="grid md:grid-cols-3 gap-6 mb-16">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div className="text-4xl font-bold text-[#d8a066] mb-3">
      30+
    </div>

    <p className="text-slate-300 leading-relaxed">
      Years of growing research supporting exercise oncology interventions.
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div className="text-4xl font-bold text-[#d8a066] mb-3">
      ACSM
    </div>

    <p className="text-slate-300 leading-relaxed">
      Published international exercise guidelines for individuals living with and beyond cancer.
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
    <div className="text-4xl font-bold text-[#d8a066] mb-3">
      QoL
    </div>

    <p className="text-slate-300 leading-relaxed">
      Exercise has been associated with improved quality of life and functional outcomes.
    </p>
  </div>

</div>
          <section>
            <h2 className="text-3xl font-semibold mb-4">
              Why Exercise Matters
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Research consistently demonstrates that appropriately prescribed
              exercise can help support physical function, strength, fatigue
              management, and quality of life during and after cancer treatment.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">
              Evidence-Informed Approach
            </h2>

            <p className="text-slate-300 leading-relaxed">
              At Renewed Strength Project, our philosophy emphasizes
              individualized programming, structured progression, and safety-driven
              coaching grounded in current exercise oncology principles.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">
              Key Organizations & Guidelines
            </h2>

<ul className="space-y-4 text-slate-300">

  <li>
    <a
      href="https://www.acsm.org"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#d8a066] hover:text-[#c99050] transition"
    >
      American College of Sports Medicine (ACSM)
    </a>
  </li>

  <li>
    <a
      href="https://www.cancer.org"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#d8a066] hover:text-[#c99050] transition"
    >
      American Cancer Society (ACS)
    </a>
  </li>

  <li>
    <a
      href="https://www.nccn.org"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#d8a066] hover:text-[#c99050] transition"
    >
      National Comprehensive Cancer Network (NCCN)
    </a>
  </li>

</ul>          </section>

        </div>
      </div>
    </div>
  )
}