import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 z-50">

      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
<img
  src="/rsp-logo.png"
  alt="RSP Logo"
  className="w-10 h-10 flex-shrink-0 object-contain"
/>

          <span className="text-white font-semibold text-xl md:text-xl tracking-tight">
            Renewed Strength 
             <br />
            Project
          </span>
        </Link>

        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-[#d8a066] transition"
        >
          {isMenuOpen ? (
            <X size={38} strokeWidth={2.25} />
          ) : (
            <Menu size={38} strokeWidth={2.25} />
          )}
        </button>

        <div className="hidden md:flex items-center gap-2">

          <Link
            to="/about"
className="border border-slate-700 hover:border-[#d8a066] text-white
px-5 py-3
min-w-[110px]
text-center
rounded-2xl
transition duration-300"          >
            About
          </Link>

          <Link
            to="/evidence"
className="border border-slate-700 hover:border-[#d8a066] text-white
px-5 py-3
min-w-[110px]
text-center
rounded-2xl
transition duration-300"          >
            Evidence
          </Link>

<Link
  to="/founding-story"
  className="border border-slate-700 hover:border-[#d8a066] text-white
px-5 py-3
min-w-[145px]
text-center
rounded-2xl
transition duration-300"
>
  Founding Story
</Link>

<Link
  to="/community-partners"
  className="border border-slate-700 hover:border-[#d8a066] text-white
px-5 py-3
min-w-[170px]
text-center
rounded-2xl
transition duration-300"
>
  Community Partners
</Link>

          <a
            href="mailto:info@therenewedstrengthproject.org"
className="border border-slate-700 hover:border-[#d8a066] text-white
px-5 py-3
min-w-[110px]
text-center
rounded-2xl
transition duration-300"          >
            Contact
          </a>

          <a
            href="https://forms.gle/XiRrN38kGjsYaFNb6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 hover:border-[#d8a066] text-white
px-5 py-3
min-w-[110px]
text-center
rounded-2xl
transition duration-300"          >
            Apply
          </a>

          <a
            href="https://givebutter.com/general-fund-iz0pzq"
            target="_blank"
            rel="noopener noreferrer"
className="bg-[#d8a066]
hover:bg-[#e6b684]
text-slate-950
font-semibold
px-5 py-3
min-w-[110px]
text-center
rounded-2xl
transition duration-300"          >
            Donate
          </a>

        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 flex flex-col gap-4"
          >

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
            >
              About
            </Link>

            <Link
              to="/evidence"
              onClick={() => setIsMenuOpen(false)}
              className="border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
            >
              Evidence
            </Link>

<Link
  to="/Our-Story"
  onClick={() => setIsMenuOpen(false)}
  className="border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
>
  Our Story
</Link>

<Link
  to="/Partners"
  onClick={() => setIsMenuOpen(false)}
  className="border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
>
  Partners
</Link>

            <a
              href="mailto:info@therenewedstrengthproject.org"
              onClick={() => setIsMenuOpen(false)}
              className="border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
            >
              Contact
            </a>

            <a
              href="https://forms.gle/XiRrN38kGjsYaFNb6"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
            >
              Apply
            </a>

            <a
              href="https://givebutter.com/general-fund-iz0pzq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-5 py-4 rounded-2xl transition duration-300 text-center"
            >
              Donate
            </a>

          </div>
        )}

      </div>

    </nav>
  )
}