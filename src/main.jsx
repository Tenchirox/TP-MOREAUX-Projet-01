import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// L'import du thème est maintenant géré dynamiquement par ThemeSwitcher
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
