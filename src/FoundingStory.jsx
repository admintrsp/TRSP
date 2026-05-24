import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function FoundingStory() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-4">

            <img
              src="/rsp-logo.png"
              alt="Renewed Strength Project"
              className="w-12 h-12 object-contain"
            />

            <span className="text-2xl font-semibold text-white">
              Renewed Strength Project
            </span>

          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-4">

            <Link
              to="/about"
              className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
            >
              About
            </Link>

            <Link
              to="/evidence"
              className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
            >
              Evidence
            </Link>

            <Link
              to="/founding-story"
              className="border border-[#d8a066] text-[#d8a066] px-6 py-3 rounded-2xl"
            >
              Founding Story
            </Link>

            <a
              href="mailto:info@therenewedstrengthproject.org"
              className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
            >
              Contact
            </a>

            <a
              href="https://forms.gle/XiRrN38kGjsYaFNb6"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-[#d8a066] px-6 py-3 rounded-2xl transition"
            >
              Apply
            </a>

            <a
              href="https://givebutter.com/general-fund-iz0pzq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 px-6 py-3 rounded-2xl font-semibold transition"
            >
              Donate
            </a>

          </nav>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">

            <div className="flex flex-col px-6 py-6 gap-4 text-lg">

              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link to="/evidence" onClick={() => setMenuOpen(false)}>
                Evidence
              </Link>

              <Link to="/founding-story" onClick={() => setMenuOpen(false)}>
                Founding Story
              </Link>

              <a
                href="mailto:info@therenewedstrengthproject.org"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>

              <a
                href="https://forms.gle/XiRrN38kGjsYaFNb6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Apply
              </a>

              <a
                href="https://givebutter.com/general-fund-iz0pzq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d8a066]"
              >
                Donate
              </a>

            </div>

          </div>
        )}

      </header>

{/* HERO */}

<section className="pt-52 pb-24 px-6 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

  <div className="max-w-5xl mx-auto">

    <p className="text-[#d8a066] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
      Our Founding Story
    </p>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mb-10">
      Built Through Experience.
      <span className="block text-[#d8a066]">
        Guided by Purpose.
      </span>
    </h1>

    <div className="space-y-5 max-w-3xl">

      <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
        Scott Anderson, M.S. Exercise Science,
        B.S. Kinesiology, CPT
      </p>

      <p className="text-slate-400 text-xl">
        Founder, Renewed Strength Project
      </p>

      <div className="w-24 h-[2px] bg-[#d8a066] rounded-full mt-8"></div>

      <p className="text-slate-300 text-xl leading-relaxed pt-4">
        A nonprofit organization focused on expanding access to
        individualized, evidence-informed exercise support for
        individuals impacted by cancer.
      </p>

    </div>

  </div>

</section>
      {/* CONTENT */}

      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto space-y-24">

          {/* STORY */}

          <div className="space-y-8 text-lg leading-relaxed text-slate-300">

            <p>
              The Renewed Strength Project was not created from theory alone.
            </p>

            <p>
              It was built through lived experience — walking alongside cancer treatment, witnessing the physical and emotional toll it can take, and seeing firsthand how movement, strength, and support can help people reclaim pieces of their lives during incredibly difficult seasons.
            </p>

            <p>
              Our family’s journey with cancer has shaped this mission in deeply personal ways.
            </p>

            <p>
              My mother underwent treatment for breast cancer in 2019. In 2022, my wife Kristin was diagnosed with cancer. Along the way, we also lost a close friend to non-Hodgkin lymphoma.
            </p>

            <p>
              Through each experience, we witnessed not only the medical side of cancer treatment, but also the physical, emotional, and functional challenges that continue long after appointments and procedures end.
            </p>

            <p>
              We saw how quickly strength, energy, confidence, independence, and normal daily life can be disrupted.
            </p>

            <p>
              As our family navigated diagnosis, treatment, and recovery, I began seeing cancer not only through a professional lens, but through the reality of everyday life.
            </p>

            <p>
              Kristin was young, active, and physically fit entering treatment, yet I still witnessed firsthand how significantly cancer and treatment could affect strength, energy, recovery, confidence, and day-to-day life.
            </p>

            <p>
              That experience deeply changed my perspective.
            </p>

            <p>
              It reinforced not only how beneficial exercise and strength training can be during and after treatment, but how fundamental movement, physical resilience, and overall health capacity truly are when navigating serious illness.
            </p>

            <p>
              I found myself thinking often about individuals entering treatment without a history of exercise or physical training — especially older adults already struggling with mobility, strength, fatigue, or other health limitations before treatment even begins.
            </p>

            <p>
              Through both personal experience and professional work, I have seen firsthand the physical, mental, emotional, and even spiritual impact that structured movement and supportive training can have before, during, and after cancer treatment.
            </p>

            <div className="border-l-4 border-[#d8a066] pl-6 py-2">

              <p className="text-2xl leading-relaxed text-white italic">
                “Many individuals navigating cancer treatment want help rebuilding strength and function, but access to qualified support is often financially out of reach.”
              </p>

            </div>

            <p>
              That gap is what led to the creation of The Renewed Strength Project.
            </p>

          </div>

          {/* BACKGROUND */}

          <div className="space-y-8">

            <h2 className="text-4xl font-bold">
              Background & Experience
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-300">

              <p>
                I hold a B.S. in Kinesiology and an M.S. in Exercise Science and have worked in personal training and strength coaching for more than a decade.
              </p>

              <p>
                For five years, I served as Lead Coach at the Family Y (CrossFit NAY), helping guide individuals with a wide range of backgrounds, abilities, and goals through safe and structured training.
              </p>

              <p>
                My professional interests increasingly focused on exercise oncology while studying under Dr. C. Fairman at the University of South Carolina.
              </p>

              <p>
                During that time, I worked as Program Director within an exercise oncology research setting, helping coordinate and supervise structured exercise interventions for individuals treated for cancer.
              </p>

              <p>
                Participants completed individualized training sessions twice weekly over eight-week intervention periods focused on improving strength, function, and quality of life.
              </p>

              <p>
                Today, I continue working with both general population clients and individuals navigating or recovering from cancer treatment.
              </p>

            </div>

          </div>

          {/* APPROACH */}

          <div className="space-y-8">

            <h2 className="text-4xl font-bold">
              Our Approach
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-300">

              <p>
                We understand that every individual’s experience with cancer is different.
              </p>

              <p>
                Our approach is rooted in compassion, professionalism, and individualized support — not one-size-fits-all programming or performance-driven fitness culture.
              </p>

              <p>
                While I have not personally undergone cancer treatment, I have walked closely alongside family members and loved ones through diagnosis, treatment, recovery, and loss.
              </p>

              <p>
                Those experiences profoundly shaped both my perspective and this organization.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">

              {[
                'Hopeful',
                'Capable',
                'Empowered',
                'Understood',
                'Supported',
              ].map((word) => (
                <div
                  key={word}
                  className="border border-slate-700 rounded-2xl px-6 py-5 text-center text-white font-medium"
                >
                  {word}
                </div>
              ))}

            </div>

          </div>

          {/* BELIEFS */}

          <div className="space-y-8">

            <h2 className="text-4xl font-bold">
              What We Believe
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-300">

              <p>
                We believe exercise is not simply about fitness or performance.
              </p>

              <p>
                When appropriately supervised and individualized, movement and strength training can help support physical function, confidence, resilience, independence, fatigue management, and quality of life during and after treatment.
              </p>

              <p>
                Our philosophy is rooted in the belief that exercise should support people’s lives — not consume them.
              </p>

              <p>
                The goal is not perfection.
              </p>

              <p>
                The goal is helping individuals maintain dignity, function, autonomy, and hope during some of the most difficult seasons of life.
              </p>

            </div>

          </div>

          {/* CTA */}

          <div className="border border-slate-800 rounded-3xl p-10 md:p-14 bg-gradient-to-b from-slate-900 to-slate-950">

            <h2 className="text-4xl font-bold mb-6">
              Join Us in Building Something Meaningful
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
              Whether through partnership, support, volunteering, or participation, we believe no one should have to navigate cancer treatment and recovery alone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="https://forms.gle/XiRrN38kGjsYaFNb6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
              >
                Apply for Support
              </a>

              <a
                href="https://givebutter.com/general-fund-iz0pzq"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-[#d8a066] text-white px-8 py-5 rounded-2xl transition duration-300 text-lg text-center"
              >
                Support the Mission
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}