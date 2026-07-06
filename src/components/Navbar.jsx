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
      { label: 'Participant Program', to: '/participant-program' },
      { label: 'Restoration Model', to: '/restoration-model' },
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
    <Link to={item.to} onClick={onClick} className={className}>
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
    <nav className="fixed top-0 left-0 w-full bg-[#f8f5ef]/95 backdrop-blur-xl border-b border-[#e6dac8] z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img
            src="/rsp-logo.png"
            alt="Renewed Strength Project logo"
            className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 object-contain"
          />

          <span className="text-[#071f3a] font-semibold text-lg md:text-xl tracking-tight leading-tight">
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
          className="md:hidden text-[#071f3a] hover:text-[#c98b2c] transition"
        >
          {isMenuOpen ? (
            <X size={34} strokeWidth={2.25} />
          ) : (
            <Menu size={34} strokeWidth={2.25} />
          )}
        </button>

        <div ref={navRef} className="hidden md:flex items-center gap-2">
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
                  onClick={() => setActiveDropdown(isOpen ? null : group.label)}
                  onFocus={() => setActiveDropdown(group.label)}
                  className="inline-flex items-center gap-2 text-[#071f3a] hover:text-[#c98b2c] focus:text-[#c98b2c] focus:outline-none px-4 py-3 transition"
                >
                  {group.label}
                  <ChevronDown
                    size={16}
                    strokeWidth={2.2}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div role="menu" className="absolute left-0 top-full pt-3 w-64">
                    <div className="border border-[#e6dac8] bg-[#f8f5ef] shadow-2xl shadow-[#071f3a]/10 p-2">
                      {group.items.map((item) => (
                        <NavItem
                          key={`${group.label}-${item.label}`}
                          item={item}
                          onClick={closeMenus}
                          className="block px-4 py-3 text-sm text-[#071f3a] hover:bg-white hover:text-[#c98b2c] focus:bg-white focus:text-[#c98b2c] focus:outline-none transition"
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
            className="text-[#071f3a] hover:text-[#c98b2c] focus:text-[#c98b2c] focus:outline-none px-4 py-3 transition"
          >
            Contact
          </a>

          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d8a066] hover:bg-[#c98b2c] focus:bg-[#c98b2c] focus:outline-none text-[#071f3a] font-semibold px-5 py-3 rounded-sm transition"
          >
            Donate
          </a>
        </div>

        {isMenuOpen && (
          <div
            ref={navRef}
            className="md:hidden absolute top-full left-0 w-full max-h-[calc(100vh-5rem)] overflow-y-auto bg-[#f8f5ef] border-b border-[#e6dac8] px-5 py-5"
          >
            <div className="space-y-4">
              {navGroups.map((group) => (
                <div key={group.label} className="border border-[#e6dac8] bg-white p-4">
                  <p className="text-[#c98b2c] uppercase tracking-[0.2em] text-xs font-bold mb-3">
                    {group.label}
                  </p>

                  <div className="grid gap-2">
                    {group.items.map((item) => (
                      <NavItem
                        key={`${group.label}-${item.label}`}
                        item={item}
                        onClick={closeMenus}
                        className="block text-[#071f3a] hover:text-[#c98b2c] px-2 py-2 transition"
                      />
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="mailto:info@therenewedstrengthproject.org"
                onClick={closeMenus}
                className="block border border-[#e6dac8] bg-white text-[#071f3a] px-4 py-3 text-center"
              >
                Contact
              </a>

              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="block bg-[#d8a066] hover:bg-[#c98b2c] text-[#071f3a] font-semibold px-5 py-3 transition text-center"
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
