import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Homepage from './pages/Homepage.jsx';
import Footer from './components/Footer.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <Homepage />
    </main>
    <Footer />
  </StrictMode>,
)
