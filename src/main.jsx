import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import App from './App.jsx'
import About from './About.jsx'
import Evidence from './Evidence.jsx'
import FoundingStory from './FoundingStory.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import DashboardGate from './DashboardGate.jsx'
import CommunityPartners from './CommunityPartners.jsx'
import PartnerInquiry from "./PartnerInquiry";
import Apply from "./Apply.jsx";
import ParticipantProgram from "./ParticipantProgram.jsx";
import RestorationModelPage from "./RestorationModelPage.jsx";
import Privacy from "./Privacy.jsx";
import Contact from "./Contact.jsx";
import OurPhilosophy from "./OurPhilosophy.jsx";
import Donate from "./Donate.jsx";
import ThankYou from "./ThankYou.jsx";
import PrintCenter, {
  CommunityPartnerFlyerBack,
  CommunityPartnerFlyerFront,
} from "./PrintCenter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

<ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/founding-story" element={<FoundingStory />} />
        <Route path="/our-philosophy" element={<OurPhilosophy />} />
        <Route path="/dashboard" element={<DashboardGate />} />
        <Route path="/community-partners" element={<CommunityPartners />} />
        <Route path="/partner-inquiry" element={<PartnerInquiry />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/participant-program" element={<ParticipantProgram />} />
        <Route path="/restoration-model" element={<RestorationModelPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/print" element={<PrintCenter />} />
        <Route path="/print/community-partner-front" element={<CommunityPartnerFlyerFront />} />
        <Route path="/print/community-partner-back" element={<CommunityPartnerFlyerBack />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)
