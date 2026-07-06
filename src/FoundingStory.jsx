import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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

export default function FoundingStory() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <Navbar />

      <section className="pt-36 md:pt-40 pb-20 md:pb-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>Our Founding Story</SectionLabel>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
              Built through experience. Guided by purpose.
            </h1>
            <GoldDivider />
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed">
              The Renewed Strength Project was shaped by professional
              experience, family experience, and the belief that people affected
              by cancer should not lose access to qualified restoration support
              because of cost.
            </p>
          </div>

          <figure>
            <div className="relative">
              <div className="absolute -left-5 -top-5 w-24 h-24 border-l border-t border-[#c98b2c]"></div>
              <div className="absolute -right-5 -bottom-5 w-24 h-24 border-r border-b border-[#c98b2c]"></div>
              <img
                src="/trsp-founder-mountain.jpeg"
                alt="Scott and Kristin standing beside a mountain lake"
                className="relative w-full aspect-[4/3] object-cover shadow-2xl"
              />
            </div>
            <figcaption className="mt-5 text-sm text-[#6b7280] leading-relaxed">
              The Renewed Strength Project grew from personal experience,
              professional purpose, and a love for life in Northern Colorado.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Why This Exists</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              This work was not created from theory alone.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
            <p>
              The Renewed Strength Project grew out of lived experience:
              walking alongside cancer treatment, witnessing the physical and
              emotional toll it can take, and seeing how movement, strength,
              and support can help people work toward pieces of life that
              cancer has disrupted.
            </p>

            <p>
              Our family’s experience with cancer has shaped this mission in
              deeply personal ways. My mother underwent treatment for breast
              cancer in 2019. In 2022, my wife Kristin was diagnosed with
              cancer. Along the way, we also lost a close friend to
              non-Hodgkin lymphoma.
            </p>

            <p>
              Through each experience, we witnessed not only the medical side
              of cancer treatment, but also the physical, emotional, and
              functional challenges that can continue long after appointments
              and procedures end.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071f3a] text-white py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The Question That Stayed</SectionLabel>
          <p className="font-serif text-4xl md:text-6xl leading-tight border-l border-[#d8a066] pl-6">
            What happens after treatment ends?
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-slate-200 mt-12 max-w-3xl">
            <p>
              While treatment may have ended, many individuals were still
              working to rebuild strength, restore confidence, reconnect with
              community, and return to activities and experiences that gave
              their lives meaning.
            </p>

            <p>
              The need was clear. Access to qualified support was often limited
              by cost, availability, or awareness.
            </p>

            <p>
              That gap is what led to the creation of The Renewed Strength
              Project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 md:py-32 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <SectionLabel>Background & Experience</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Professional experience shaped the model.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[#4b5563]">
            <p>
              I hold a B.S. in Kinesiology and an M.S. in Exercise Science and
              have worked in personal training and strength coaching for more
              than a decade.
            </p>

            <p>
              My professional interests increasingly focused on exercise
              oncology while studying at the University of South Carolina under
              Dr. C. Fairman, whose work helped shape the way I think about
              structured exercise, cancer treatment, and restoration.
            </p>

            <p>
              During that time, I worked as Program Director within an exercise
              oncology research setting, helping coordinate and supervise
              structured exercise interventions for individuals treated for
              cancer.
            </p>

            <p>
              Today, I continue working with both general population clients
              and individuals navigating or recovering from cancer treatment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center border-y border-[#c98b2c] py-14">
          <SectionLabel>Why It Became TRSP</SectionLabel>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            The barrier kept repeating: people wanted support, but could not
            afford it.
          </h2>
          <p className="text-lg text-[#4b5563] leading-relaxed max-w-3xl mx-auto mt-8">
            The Renewed Strength Project was created to help remove that
            barrier and create a pathway toward strength, confidence,
            independence, and participation in life.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
