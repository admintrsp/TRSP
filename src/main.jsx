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
import ScrollToTop from './components/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/founding-story" element={<FoundingStory />} />
      </Routes>

    </BrowserRouter>

  </StrictMode>,
)