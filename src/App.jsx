import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhyItMatters from './components/WhyItMatters'
import HowItWorks from './components/HowItWorks'
import FoundingStory from './components/FoundingStory'
import DonationSection from './components/DonationSection'
import TrustSection from './components/TrustSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyItMatters />
      <HowItWorks />
      <FoundingStory />
      <DonationSection />
      <TrustSection />
      <Footer />
    </div>
  )
}