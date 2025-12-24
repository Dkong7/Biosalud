import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JP' },
];

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language || 'es');

  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setActiveLang(code);
  };

  return (
    // CAMBIO: Fondo y borde oscurecidos (verde/10) para contraste sobre fondo blanco
    <div className="relative flex items-center bg-bio-verde/10 rounded-full p-1 w-32 h-10 border border-bio-verde/20">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`relative z-10 w-1/3 text-sm font-bold transition-colors duration-300 ${
            activeLang === lang.code ? 'text-bio-fondo' : 'text-bio-verde hover:text-bio-amarillo'
          }`}
        >
          {lang.label}
          {activeLang === lang.code && (
            <motion.div
              layoutId="highlight"
              // El indicador activo sigue siendo verde sólido o amarillo según prefieras. 
              // Usaremos verde sólido para que el texto blanco se lea bien.
              className="absolute inset-0 bg-bio-verde rounded-full -z-10 shadow-sm"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ top: '-2px', bottom: '-2px', left: '-2px', right: '-2px' }} 
            />
          )}
        </button>
      ))}
    </div>
  );
};