import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LexiAssistant from './LexiAssistant.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LexiAssistant />
  </StrictMode>,
)
