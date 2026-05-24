import Navbar from './components/Navbar'

export default function Evidence() {

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      <Navbar />
     

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#071124] to-[#111827] pt-40 pb-24 px-6 border-b border-slate-800/40">

        <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl leading-tight">
            Evidence & Research
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Exercise oncology is an evolving field supported by a growing body
            of research demonstrating the importance of appropriately prescribed
            physical activity and resistance training during and after cancer treatment.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="space-y-16">

          {/* STATS */}

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:-translate-y-1 transition duration-300">
              <div className="text-4xl font-bold text-[#d8a066] mb-3">
                30+
              </div>

              <p className="text-slate-300 leading-relaxed">
                Years of growing research supporting exercise oncology interventions.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:-translate-y-1 transition duration-300">
              <div className="text-4xl font-bold text-[#d8a066] mb-3">
                ACSM
              </div>

              <p className="text-slate-300 leading-relaxed">
                Published international exercise guidelines for individuals living with and beyond cancer.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 backdrop-blur hover:-translate-y-1 transition duration-300">
              <div className="text-4xl font-bold text-[#d8a066] mb-3">
                QoL
              </div>

              <p className="text-slate-300 leading-relaxed">
                Exercise has been associated with improved quality of life and functional outcomes.
              </p>
            </div>

          </div>

          {/* WHY EXERCISE MATTERS */}

          <section className="space-y-6">

            <h2 className="text-3xl font-semibold">
              Why Exercise Matters
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Research consistently demonstrates that appropriately prescribed
              exercise can help support physical function, strength, fatigue
              management, and quality of life during and after cancer treatment.
            </p>

          </section>

          {/* FEATURED QUOTE */}

          <div className="border border-[#d8a066]/30 bg-slate-900/40 rounded-3xl px-8 py-10 backdrop-blur">

            <p className="text-2xl leading-relaxed text-white italic font-light">
              “Exercise is now recognized as an important supportive component of cancer care.”
            </p>

            <p className="text-slate-400 mt-6">
              — American College of Sports Medicine
            </p>

          </div>

          {/* CENTER STATEMENT */}

          <section className="relative overflow-hidden py-20 border-y border-slate-800/40 bg-gradient-to-b from-[#161616] via-slate-900 to-[#111827] rounded-3xl">

            <div className="absolute inset-0 bg-[#d8a066]/5 blur-3xl"></div>

            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">

              <p className="text-4xl md:text-5xl leading-tight font-light text-white">
                The goal of exercise oncology is not simply performance.
              </p>

              <p className="text-xl text-slate-300 leading-relaxed mt-10">
                It is helping individuals move through treatment and recovery
                with greater resilience, function, and the ability to stay
                engaged in everyday life.
              </p>

            </div>

          </section>

          {/* EVIDENCE-INFORMED APPROACH */}

          <section className="space-y-6">

            <h2 className="text-3xl font-semibold">
              Evidence-Informed Approach
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              At Renewed Strength Project, our philosophy emphasizes
              individualized programming, structured progression, and safety-driven
              coaching grounded in current exercise oncology principles.
            </p>

          </section>

          {/* ORGANIZATIONS */}

          <section>

            <h2 className="text-3xl font-semibold mb-6">
              Key Organizations & Guidelines
            </h2>

            <div className="grid gap-6">

              <a
                href="https://www.acsm.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/40 border border-slate-700 rounded-2xl p-5 backdrop-blur hover:border-[#d8a066] hover:-translate-y-1 transition duration-300 block"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  American College of Sports Medicine
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  International exercise oncology guidelines and evidence-informed recommendations for individuals living with and beyond cancer.
                </p>

                <div className="text-[#d8a066]">
                  Visit Resource →
                </div>
              </a>

              <a
                href="https://www.cancer.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/40 border border-slate-700 rounded-2xl p-5 backdrop-blur hover:border-[#d8a066] hover:-translate-y-1 transition duration-300 block"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  American Cancer Society
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  Educational resources and guidance related to physical activity, survivorship, and supportive cancer care.
                </p>

                <div className="text-[#d8a066]">
                  Visit Resource →
                </div>
              </a>

              <a
                href="https://www.nccn.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/40 border border-slate-700 rounded-2xl p-5 backdrop-blur hover:border-[#d8a066] hover:-translate-y-1 transition duration-300 block"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  National Comprehensive Cancer Network
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  Evidence-based clinical practice guidelines and supportive care recommendations for oncology populations.
                </p>

                <div className="text-[#d8a066]">
                  Visit Resource →
                </div>
              </a>

            </div>

          </section>

          {/* FEATURED RESEARCH */}

          <section className="pt-10 border-t border-slate-800/40">

            <h2 className="text-4xl font-bold mb-8">
              Featured Research
            </h2>

            <div className="grid gap-6">

              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31626056/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-[#d8a066] rounded-2xl p-8 hover:border-[#e6b684] hover:-translate-y-1 transition duration-300 block mb-8"
              >
                <div className="text-[#d8a066] uppercase tracking-widest text-sm mb-4">
                  Featured Guideline
                </div>

                <h3 className="text-3xl font-semibold text-white mb-4 leading-tight">
                  ACSM Roundtable Report on Physical Activity, Sedentary Behavior, and Cancer Prevention & Control
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  Foundational exercise oncology guidance outlining evidence-based recommendations for physical activity during and after cancer treatment.
                </p>

                <div className="text-slate-400 mb-6 text-sm tracking-wide">
                  Patel AV, Friedenreich CM, Moore SC, et al.
                  <span className="mx-2">•</span>
                  Medicine & Science in Sports & Exercise
                  <span className="mx-2">•</span>
                  2019
                </div>

                <div className="text-[#d8a066] text-lg">
                  View Publication →
                </div>
              </a>
<a
  href="https://pubmed.ncbi.nlm.nih.gov/10499138/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 hover:border-[#d8a066] hover:-translate-y-1 transition duration-300 block backdrop-blur"
>
  <h3 className="text-2xl font-semibold text-white mb-2">
    Physical Exercise and Quality of Life Following Cancer Diagnosis
  </h3>

  <p className="text-slate-300 leading-relaxed mb-4">
    Courneya and Friedenreich review evidence supporting exercise interventions to improve physical, psychological, and functional quality-of-life outcomes following cancer diagnosis.
  </p>

  <div className="text-slate-400 mb-4 text-sm tracking-wide">
    Courneya KS, Friedenreich CM
    <span className="mx-2">•</span>
    Sports Medicine
    <span className="mx-2">•</span>
    1999
  </div>

  <div className="text-[#d8a066]">
    View Publication →
  </div>
</a>

<a
  href="https://acsjournals.onlinelibrary.wiley.com/doi/full/10.3322/caac.21579"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 hover:border-[#d8a066] hover:-translate-y-1 transition duration-300 block backdrop-blur"
>
  <h3 className="text-2xl font-semibold text-white mb-2">
    Exercise is Medicine in Oncology
  </h3>

  <p className="text-slate-300 leading-relaxed mb-4">
    Schmitz et al. discuss the integration of exercise into oncology care and the growing role of exercise professionals within supportive cancer treatment.
  </p>

  <div className="text-slate-400 mb-4 text-sm tracking-wide">
    Schmitz KH, Campbell AM, Stuiver MM, et al.
    <span className="mx-2">•</span>
    CA: A Cancer Journal for Clinicians
    <span className="mx-2">•</span>
    2019
  </div>

  <div className="text-[#d8a066]">
    View Publication →
  </div>
</a>

<a
  href="https://pubmed.ncbi.nlm.nih.gov/31626055/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6 hover:border-[#d8a066] hover:-translate-y-1 transition duration-300 block backdrop-blur"
>
  <h3 className="text-2xl font-semibold text-white mb-2">
    Exercise Guidelines for Cancer Survivors
  </h3>

  <p className="text-slate-300 leading-relaxed mb-4">
    Evidence supporting exercise interventions for fatigue reduction, improved physical function, strength preservation, and enhanced quality of life among cancer survivors.
  </p>

  <div className="text-slate-400 mb-4 text-sm tracking-wide">
    Campbell KL, Winters-Stone KM, Wiskemann J, et al.
    <span className="mx-2">•</span>
    Medicine & Science in Sports &Exercise
    <span className="mx-2">•</span>
    2019
  </div>

  <div className="text-[#d8a066]">
    View Publication →
  </div>
</a>
            </div>

          </section>

        </div>

      </div>

    </div>
  )
}