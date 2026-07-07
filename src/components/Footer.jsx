import { Link } from 'react-router-dom'

const donateUrl = 'https://givebutter.com/general-fund-iz0pzq'

export default function Footer() {
  return (
    <footer className="bg-[#071f3a] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr_0.85fr] gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/rsp-logo.png"
                alt="Renewed Strength Project"
                className="w-14 aspect-square object-contain flex-shrink-0"
              />

              <div>
                <h3 className="font-serif text-3xl leading-none">
                  Renewed Strength
                </h3>
                <p className="text-slate-300">
                  Project
                </p>
              </div>
            </div>

            <p className="text-slate-200 leading-relaxed max-w-md">
              Removing financial barriers to evidence-informed exercise
              support for individuals affected by cancer throughout Northern
              Colorado.
            </p>

            <p className="text-[#d8a066] uppercase tracking-[0.25em] text-xs font-bold mt-8">
              A Colorado 501(c)(3) nonprofit organization
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md mt-4">
              Donations support charitable program access and may be
              tax-deductible as allowed by law. Please consult your tax advisor
              for individual guidance.
            </p>
          </div>

          <div>
            <h3 className="text-[#d8a066] uppercase tracking-[0.22em] text-xs font-bold mb-5">
              Explore
            </h3>

            <div className="space-y-3">
              <Link to="/" className="block text-slate-200 hover:text-[#d8a066] transition">
                Home
              </Link>
              <Link to="/about" className="block text-slate-200 hover:text-[#d8a066] transition">
                Our Mission
              </Link>
              <Link to="/our-philosophy" className="block text-slate-200 hover:text-[#d8a066] transition">
                Our Philosophy
              </Link>
              <Link to="/founding-story" className="block text-slate-200 hover:text-[#d8a066] transition">
                Our Story
              </Link>
              <Link to="/participant-program" className="block text-slate-200 hover:text-[#d8a066] transition">
                Participant Program
              </Link>
              <Link to="/restoration-model" className="block text-slate-200 hover:text-[#d8a066] transition">
                Restoration Model
              </Link>
              <Link to="/evidence" className="block text-slate-200 hover:text-[#d8a066] transition">
                Evidence
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#d8a066] uppercase tracking-[0.22em] text-xs font-bold mb-5">
              Act
            </h3>

            <div className="space-y-3">
              <Link to="/apply" className="block text-slate-200 hover:text-[#d8a066] transition">
                Apply
              </Link>
              <Link to="/community-partners" className="block text-slate-200 hover:text-[#d8a066] transition">
                Community Partners
              </Link>
              <Link to="/privacy" className="block text-slate-200 hover:text-[#d8a066] transition">
                Privacy
              </Link>
              <a
                href="mailto:info@therenewedstrengthproject.org"
                className="block text-slate-200 hover:text-[#d8a066] transition"
              >
                info@therenewedstrengthproject.org
              </a>
            </div>

            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 bg-[#d8a066] hover:bg-[#e4b77d] transition px-6 py-3 rounded-sm text-[#071f3a] font-semibold"
            >
              Donate
            </a>
          </div>
        </div>

        <div className="border-t border-white/15 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-300">
          <p>
            © {new Date().getFullYear()} Renewed Strength Project. All rights reserved.
          </p>

          <p>
            Serving Loveland and Northern Colorado.
          </p>
        </div>
      </div>
    </footer>
  )
}
