import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  // Obtenemos el logo (Versiones LIGHT porque el fondo ahora es CLARO)
  const getLogo = () => {
    switch (i18n.language) {
      case 'en': return '/BIOHEALTH-LOGO-LIGHT.svg';
      case 'ja': return '/BIOSALUD-JP-LIGHT.svg';
      default: return '/BIOSALUD-LOGO-LIGHT.svg';
    }
  };

  const services = t('footer.services_list', { returnObjects: true }) as string[];

  // ESTILOS AJUSTADOS PARA FONDO CLARO:
  // - Texto título: text-bio-verde (antes era amarillo, pero amarillo sobre blanco no se ve)
  // - Borde: border-bio-amarillo (se mantiene para el acento)
  const sectionTitleClass = "font-eras text-lg font-bold mb-6 border-b-2 border-bio-amarillo pb-2 inline-block text-bio-verde";

  return (
    // CAMBIO: Fondo #f8f9f3 (igual al navbar), Texto bio-verde, Borde superior sutil
    <footer className="bg-[#f8f9f3] text-bio-verde pt-16 pb-8 mt-auto border-t border-bio-verde/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMNA 1: LOGO E INFO */}
          <div>
            <div className="mb-6">
              <img 
                src={getLogo()} 
                alt="Biosalud Logo" 
                className="h-14 w-auto object-contain" 
              />
            </div>

            <p className="font-cambria text-sm leading-relaxed opacity-80 mb-6 font-medium">
              {t('footer.description')}
            </p>
            
            <div className="flex gap-4">
              {/* CAMBIO: Fondo de iconos oscurecido (bg-bio-verde/10) para verse en fondo claro */}
              <a href="#" className="w-10 h-10 rounded-full bg-bio-verde/10 flex items-center justify-center text-bio-verde hover:bg-bio-amarillo hover:text-bio-verde transition-all">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bio-verde/10 flex items-center justify-center text-bio-verde hover:bg-bio-amarillo hover:text-bio-verde transition-all">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bio-verde/10 flex items-center justify-center text-bio-verde hover:bg-bio-amarillo hover:text-bio-verde transition-all">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div>
            <h4 className={sectionTitleClass}>
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3 font-cambria font-medium">
              <li><NavLink to="/" className="hover:text-bio-amarillo transition-colors">{t('navbar.home')}</NavLink></li>
              <li><NavLink to="/about" className="hover:text-bio-amarillo transition-colors">{t('navbar.about')}</NavLink></li>
              <li><NavLink to="/program" className="hover:text-bio-amarillo transition-colors">{t('navbar.program')}</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-bio-amarillo transition-colors">{t('navbar.blog')}</NavLink></li>
            </ul>
          </div>

          {/* COLUMNA 3: SERVICIOS */}
          <div>
            <h4 className={sectionTitleClass}>
              {t('footer.services_title')}
            </h4>
            <ul className="space-y-3 font-cambria text-sm opacity-80 font-medium">
              {Array.isArray(services) && services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h4 className={sectionTitleClass}>
              {t('footer.contact_title')}
            </h4>
            <ul className="space-y-4 font-cambria text-sm font-medium">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-bio-rojo" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-bio-rojo" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-bio-rojo" />
                <span>contacto@biosalud.com</span>
              </li>
              <li className="mt-4">
                <a 
                  href="https://wa.me/573001234567" 
                  target="_blank" 
                  className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 w-fit transition-colors font-bold shadow-md hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  {t('footer.whatsapp_btn')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-bio-verde/10 pt-8 text-center text-xs opacity-60 font-cambria">
          <p>&copy; {new Date().getFullYear()} Biosalud. {t('footer.rights')} Desarrollado con 🍃</p>
        </div>
      </div>
    </footer>
  );
};