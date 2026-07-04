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
import Dashboard from './Dashboard.jsx'
import CommunityPartners from './CommunityPartners.jsx'
import PartnerInquiry from "./PartnerInquiry";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

<ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/founding-story" element={<FoundingStory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community-partners" element={<CommunityPartners />} />
        <Route path="/partner-inquiry" element={<PartnerInquiry />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)