import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Importa Tailwind y tus variables
import App from './App.tsx'
import './i18n/config'; // <--- IMPORTANTE: Inicializa el sistema de idiomas

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)