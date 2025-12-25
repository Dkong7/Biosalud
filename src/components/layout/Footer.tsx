import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-bio-verde/30">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
           <img src="/BIOHEALTH-LOGO-DARK.svg" alt="Biosalud" className="h-16 mb-4 filter brightness-0 invert" />
           <p className="text-gray-400 text-sm max-w-xs">{t('home.hero_subtitle')}</p>
        </div>
        <div>
           <h3 className="font-eras text-xl text-bio-verde mb-4">{t('contact.title')}</h3>
           <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-bio-amarillo" />
                 {t('contact.location_desc')} 
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                 <FontAwesomeIcon icon={faPhone} className="text-bio-amarillo" />
                 +57 311 202 4768
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                 <FontAwesomeIcon icon={faEnvelope} className="text-bio-amarillo" />
                 {t('contact.email')}
              </li>
           </ul>
        </div>
        <div>
           <h3 className="font-eras text-xl text-bio-verde mb-4">{t('contact.social')}</h3>
           <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a href="#" className="hover:text-bio-amarillo transition-colors"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="hover:text-bio-amarillo transition-colors"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://wa.me/573112024768" target="_blank" rel="noreferrer" className="hover:text-bio-amarillo transition-colors"><FontAwesomeIcon icon={faWhatsapp} /></a>
           </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500">
         © {new Date().getFullYear()} Biosalud. Todos los derechos reservados.
      </div>
    </footer>
  );
};
