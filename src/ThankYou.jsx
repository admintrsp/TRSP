import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'

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

export default function ThankYou() {
  return (
    <div className="bg-[#f8f5ef] text-[#071f3a] min-h-screen">
      <SEO
        title="Thank You"
        description="Thank you for supporting The Renewed Strength Project and helping create opportunities for individuals affected by cancer to pursue restoration."
        path="/thank-you"
        noindex
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Thank You', path: '/thank-you' },
        ]}
      />
      <Navbar />

      <section id="main-content" tabIndex="-1" className="pt-36 md:pt-40 pb-24 md:pb-32 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Thank You</SectionLabel>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
            Thank You.
          </h1>
          <div className="flex justify-center">
            <GoldDivider />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-[#4b5563] leading-relaxed max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif text-[#071f3a] leading-snug">
              Because of your generosity, someone is one step closer to
              pursuing restoration.
            </p>
            <p>
              Cancer takes many things.
            </p>
            <p>
              Your gift helps create opportunities for people affected by
              cancer to rebuild confidence, function, and participation in
              meaningful life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              to="/"
              className="bg-[#071f3a] hover:bg-[#0d2f57] text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              Return Home
            </Link>
            <Link
              to="/our-philosophy"
              className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              Learn About Our Philosophy
            </Link>
            <Link
              to="/participant-program"
              className="border border-[#c98b2c] text-[#071f3a] hover:bg-[#c98b2c] hover:text-white font-semibold px-8 py-4 rounded-sm transition text-center"
            >
              Explore Our Program
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
