import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-bio-verde text-white py-12 border-t-4 border-bio-amarillo">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo y Slogan */}
        <div>
          <img src="/BIOHEALTH-LOGO-DARK.svg" alt="Biosalud" className="h-12 mb-4 brightness-0 invert mx-auto md:mx-0" />
          <p className="font-cambria text-sm opacity-80 max-w-xs mx-auto md:mx-0">
            {t('home.hero_subtitle')}. 
            {t('home.floating_title')}.
          </p>
        </div>
        
        {/* Contacto */}
        <div>
          <h4 className="font-eras font-bold text-bio-amarillo mb-4">{t('contact.title')}</h4>
          <p className="text-sm mb-2">{t('contact.address')}</p>
          <p className="text-sm mb-2">+57 311 2024768</p>
          <p className="text-sm">{t('contact.email_addr')}</p>
        </div>

        {/* Redes */}
        <div>
          <h4 className="font-eras font-bold text-bio-amarillo mb-4">{t('contact.social')}</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-bio-amarillo hover:text-bio-verde transition-all">
               <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-bio-amarillo hover:text-bio-verde transition-all">
               <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@Biosalud" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-bio-amarillo hover:text-bio-verde transition-all">
               <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 text-xs opacity-50 border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} Biosalud. All rights reserved.
      </div>
    </footer>
  );
};
