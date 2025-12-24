import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-bio-verde text-white py-12 border-t-4 border-bio-amarillo">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <img src="/BIOHEALTH-LOGO-DARK.svg" alt="Biosalud" className="h-12 mb-4 brightness-0 invert mx-auto md:mx-0" />
          <p className="font-cambria text-sm opacity-80">
            Movimiento Latinoamericano de Biosalud.
            Recuperando la vitalidad y la autogestión.
          </p>
        </div>
        
        <div>
          <h4 className="font-eras font-bold text-bio-amarillo mb-4">Contacto</h4>
          <p className="text-sm mb-2">Finca Biosalud, Anolaima, Cundinamarca</p>
          <p className="text-sm mb-2">+57 311 2024768</p>
          <p className="text-sm">bioatom11@hotmail.com</p>
        </div>

        <div>
          <h4 className="font-eras font-bold text-bio-amarillo mb-4">Síguenos</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-bio-amarillo text-xl"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="hover:text-bio-amarillo text-xl"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/@Biosalud" target="_blank" className="hover:text-bio-amarillo text-xl"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-xs opacity-50 border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} Biosalud. Todos los derechos reservados.
      </div>
    </footer>
  );
};
