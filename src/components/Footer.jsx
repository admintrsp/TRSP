import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3 mb-5">

        <img
        src="/rsp-logo.png"
         alt="Renewed Strength Project"
         className="w-16 aspect-square object-contain flex-shrink-0"
/>
              <div>

                <h3 className="font-bold text-xl text-white">
                  Renewed Strength
                </h3>

                <p className="text-slate-400 text-sm">
                  Project
                </p>

              </div>

            </div>

            <p className="text-slate-400 leading-relaxed">
              Removing financial barriers to evidence-informed exercise
              support for individuals impacted by cancer throughout
              Northern Colorado.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link to="/" className="block text-slate-400 hover:text-[#d8a066] transition">
                Home
              </Link>

              <Link to="/about" className="block text-slate-400 hover:text-[#d8a066] transition">
                About
              </Link>

              <Link to="/evidence" className="block text-slate-400 hover:text-[#d8a066] transition">
                Evidence
              </Link>

              <Link to="/community-partners" className="block text-slate-400 hover:text-[#d8a066] transition">
                Community Partners
              </Link>

              <Link to="/apply" className="block text-slate-400 hover:text-[#d8a066] transition">
                Apply
              </Link>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">

              <p>
                info@therenewedstrengthproject.org
              </p>

              <p>
                Loveland, Colorado
              </p>

              <p>
                Serving Northern Colorado
              </p>

            </div>

            <button className="mt-8 bg-[#d8a066] hover:bg-[#c89453] transition px-6 py-3 rounded-xl text-slate-950 font-semibold">
              Donate
            </button>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} Renewed Strength Project.
            All rights reserved.
          </p>

          <p>
            © 2026 Renewed Strength Project

    A Colorado 501(c)(3) nonprofit organization.
          </p>

        </div>

      </div>

    </footer>
  );
}