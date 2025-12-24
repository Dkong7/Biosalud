import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n/config';
import netlifyIdentity from 'netlify-identity-widget';

// ESTA ES LA CLAVE: Iniciar Identity antes de montar la App
// Así captura el token antes de que el HashRouter lo borre
netlifyIdentity.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
