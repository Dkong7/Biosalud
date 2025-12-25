import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    backend: {
      // Esta ruta busca los archivos que restauramos en public/locales
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });

export default i18n;
