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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/evidence" element={<Evidence />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)