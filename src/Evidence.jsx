import Navbar from './components/Navbar'
import Footer from './components/Footer'

const resources = [
  {
    name: 'American College of Sports Medicine',
    description:
      'International exercise oncology guidelines and evidence-informed recommendations for individuals living with and beyond cancer.',
    url: 'https://acsm.org/physical-activity-guidelines-cancer-infographic/',
  },
  {
    name: 'American Cancer Society',
    description:
      'Educational resources related to physical activity, survivorship, and supportive cancer care.',
    url: 'https://www.cancer.org',
  },
  {
    name: 'National Comprehensive Cancer Network',
    description:
      'Clinical practice guidelines and supportive care recommendations for oncology populations.',
    url: 'https://www.nccn.org',
  },
]

function SectionLabel({ children }) {
  return (
    <p className="text-[#c98b2c] uppercase tracking-[0.28em] text-xs font-bold mb-5">
      {children}
    </p>
  )
}

function GoldDivider() {
  return <div className="w-16 h-px bg-[#c98b2c] my-8"></div>
}

export default function Evidence() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Evidence & Research</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight max-w-5xl">
            Evidence-informed support for life after cancer disruption.
          </h1>
          <GoldDivider />
          <p className="text-xl md:text-2xl text-[#4b5563] leading-relaxed max-w-4xl">
            Exercise oncology is an evolving field supported by research on
            appropriately prescribed physical activity, resistance training,
            function, fatigue, quality of life, and supportive cancer care.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-px bg-[#d8a066]/50 border border-[#d8a066]/50">
          <div className="bg-white p-8">
            <p className="font-serif text-5xl text-[#071f3a] mb-4">
              30+
            </p>
            <p className="text-[#4b5563] leading-relaxed">
              Years of growing research supporting exercise oncology
              interventions.
            </p>
          </div>

          <div className="bg-white p-8">
            <p className="font-serif text-5xl text-[#071f3a] mb-4">
              ACSM
            </p>
            <p className="text-[#4b5563] leading-relaxed">
              Published international exercise guidelines for individuals
              living with and beyond cancer.
            </p>
          </div>

          <div className="bg-white p-8">
            <p className="font-serif text-5xl text-[#071f3a] mb-4">
              QoL
            </p>
            <p className="text-[#4b5563] leading-relaxed">
              Exercise has been associated with improved quality of life and
              functional outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Why Exercise Matters</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              The goal is not performance alone.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
            <p>
              Research consistently demonstrates that appropriately prescribed
              exercise can help support physical function, strength, fatigue
              management, and quality of life during and after cancer
              treatment.
            </p>

            <p className="font-serif text-3xl md:text-4xl leading-snug text-[#071f3a] border-l border-[#c98b2c] pl-6">
              Exercise is a supportive pathway toward function, confidence, and
              participation in everyday life.
            </p>

            <p>
              At Renewed Strength Project, the approach is evidence-informed,
              individualized, and safety-aware. The work is shaped around the
              person, not a generic exercise template.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] py-24 md:py-32 px-5 sm:px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Evidence. Purpose. Possibility.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              'Guided by exercise oncology principles',
              'Progressed around current capacity and tolerance',
              'Connected to meaningful daily-life goals',
            ].map((item) => (
              <div key={item} className="border border-[#d8a066]/40 p-7">
                <p className="text-lg text-slate-100 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Resources</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">
            Key organizations and guidelines.
          </h2>

          <div className="grid gap-5 mt-12">
            {resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#e6dac8] bg-[#fbfaf7] p-7 transition hover:border-[#c98b2c]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl text-[#071f3a]">
                      {resource.name}
                    </h3>
                    <p className="text-[#4b5563] leading-relaxed mt-3 max-w-3xl">
                      {resource.description}
                    </p>
                  </div>

                  <span className="text-[#c98b2c] font-semibold">
                    Visit Resource
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center border-y border-[#c98b2c] py-14">
          <SectionLabel>Important Note</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Evidence-informed does not mean one-size-fits-all.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mx-auto mt-8">
            Support should be individualized and appropriate to the person’s
            current capacity, goals, treatment context, and safety needs.
            The Renewed Strength Project does not promise medical outcomes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
