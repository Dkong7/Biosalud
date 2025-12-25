// --- PARCHE DE COMPATIBILIDAD (Debe ir primero) ---
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;
// --------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // Importar configuración de idiomas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
