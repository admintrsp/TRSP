import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const donateUrl = 'https://givebutter.com/general-fund-iz0pzq'

const navGroups = [
  {
    label: 'Our Story',
    items: [
      { label: 'Mission / About', to: '/about' },
      { label: 'Our Story', to: '/founding-story' },
      { label: 'Evidence', to: '/evidence' },
    ],
  },
  {
    label: 'Our Impact',
    items: [
      { label: 'Participant Program', to: '/apply' },
      { label: 'Restoration Model', to: '/evidence' },
      { label: 'Apply', to: '/apply' },
    ],
  },
  {
    label: 'Get Involved',
    items: [
      { label: 'Donate', href: donateUrl },
      { label: 'Community Partners', to: '/community-partners' },
      { label: 'Volunteer / Future', to: '/partner-inquiry' },
    ],
  },
]

function NavItem({ item, className = '', onClick }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.label}
      </a>
    )
  }

  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={className}
    >
      {item.label}
    </Link>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function closeMenus() {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMenus}
        >
          <img
            src="/rsp-logo.png"
            alt="RSP Logo"
            className="w-10 h-10 flex-shrink-0 object-contain"
          />

          <span className="text-white font-semibold text-xl tracking-tight">
            Renewed Strength
            <br />
            Project
          </span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-[#d8a066] transition"
        >
          {isMenuOpen ? (
            <X size={38} strokeWidth={2.25} />
          ) : (
            <Menu size={38} strokeWidth={2.25} />
          )}
        </button>

        <div
          ref={navRef}
          className="hidden md:flex items-center gap-3"
        >
          {navGroups.map((group) => {
            const isOpen = activeDropdown === group.label

            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActiveDropdown(isOpen ? null : group.label)
                  }
                  onFocus={() => setActiveDropdown(group.label)}
                  className="inline-flex items-center gap-2 border border-slate-700 hover:border-[#d8a066] focus:border-[#d8a066] focus:outline-none text-white px-5 py-3 min-w-[135px] justify-center rounded-2xl transition duration-300"
                >
                  {group.label}
                  <ChevronDown
                    size={17}
                    strokeWidth={2.2}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full pt-3 w-64"
                  >
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/98 shadow-2xl shadow-black/40 p-2">
                      {group.items.map((item) => (
                        <NavItem
                          key={`${group.label}-${item.label}`}
                          item={item}
                          onClick={closeMenus}
                          className="block rounded-xl px-4 py-3 text-sm text-slate-200 hover:bg-slate-900 hover:text-[#d8a066] focus:bg-slate-900 focus:text-[#d8a066] focus:outline-none transition"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          <a
            href="mailto:info@therenewedstrengthproject.org"
            className="border border-slate-700 hover:border-[#d8a066] focus:border-[#d8a066] focus:outline-none text-white px-5 py-3 min-w-[110px] text-center rounded-2xl transition duration-300"
          >
            Contact
          </a>

          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d8a066] hover:bg-[#e6b684] focus:bg-[#e6b684] focus:outline-none text-slate-950 font-semibold px-5 py-3 min-w-[110px] text-center rounded-2xl transition duration-300"
          >
            Donate
          </a>
        </div>

        {isMenuOpen && (
          <div
            ref={navRef}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6"
          >
            <div className="space-y-5">
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="border border-slate-800 rounded-2xl p-4 bg-slate-950"
                >
                  <p className="text-[#d8a066] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                    {group.label}
                  </p>

                  <div className="grid gap-2">
                    {group.items.map((item) => (
                      <NavItem
                        key={`${group.label}-${item.label}`}
                        item={item}
                        onClick={closeMenus}
                        className="block text-white hover:text-[#d8a066] rounded-xl px-2 py-2 transition"
                      />
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="mailto:info@therenewedstrengthproject.org"
                onClick={closeMenus}
                className="block border border-slate-700 text-white px-4 py-4 rounded-2xl text-center"
              >
                Contact
              </a>

              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="block bg-[#d8a066] hover:bg-[#e6b684] text-slate-950 font-semibold px-5 py-4 rounded-2xl transition duration-300 text-center"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
