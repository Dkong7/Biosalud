import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n/config'; // IMPORTANTE: Carga las traducciones
import netlifyIdentity from 'netlify-identity-widget';

// Inicializar Identity para el CMS
netlifyIdentity.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
