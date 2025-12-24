import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full animate-fadeIn bg-[#f8f9f3]">
      
      {/* HEADER */}
      <div className="bg-bio-verde text-white py-16 text-center">
        <h1 className="font-eras text-4xl font-bold mb-2">{t('contact.title')}</h1>
        <p className="font-cambria text-xl italic opacity-90">{t('contact.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        
        {/* INFO CONTACTO */}
        <div className="lg:w-1/3 space-y-10">
           {/* Telefono */}
           <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-bio-amarillo">
              <div className="flex items-center gap-4 mb-2">
                 <FontAwesomeIcon icon={faPhone} className="text-bio-verde text-xl" />
                 <h3 className="font-eras font-bold text-bio-verde">{t('contact.phone')}</h3>
              </div>
              <p className="font-cambria text-gray-700 text-lg">+57 311 2024768</p>
           </div>

           {/* Correo */}
           <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-bio-amarillo">
              <div className="flex items-center gap-4 mb-2">
                 <FontAwesomeIcon icon={faEnvelope} className="text-bio-verde text-xl" />
                 <h3 className="font-eras font-bold text-bio-verde">{t('contact.email')}</h3>
              </div>
              <p className="font-cambria text-gray-700 text-lg">bioatom11@hotmail.com</p>
           </div>

           {/* Redes */}
           <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-bio-amarillo">
              <h3 className="font-eras font-bold text-bio-verde mb-4">{t('contact.social')}</h3>
              <div className="flex gap-6">
                 <a href="https://www.facebook.com/" target="_blank" className="w-10 h-10 bg-bio-verde text-white flex items-center justify-center rounded-full hover:bg-bio-amarillo transition-colors">
                    <FontAwesomeIcon icon={faFacebookF} />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank" className="w-10 h-10 bg-bio-verde text-white flex items-center justify-center rounded-full hover:bg-bio-amarillo transition-colors">
                    <FontAwesomeIcon icon={faInstagram} />
                 </a>
                 <a href="https://www.youtube.com/@Biosalud" target="_blank" className="w-10 h-10 bg-bio-verde text-white flex items-center justify-center rounded-full hover:bg-bio-amarillo transition-colors">
                    <FontAwesomeIcon icon={faYoutube} />
                 </a>
              </div>
           </div>
        </div>

        {/* MAPA */}
        <div className="lg:w-2/3 bg-white p-2 shadow-lg rounded-sm">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1766617747828!6m8!1m7!1s-Iap29IVtIoMn_7IWOCLEA!2m2!1d4.760173786223954!2d-74.46669011275698!3f288.9297482186736!4f-9.025058599056294!5f0.7820865974627469" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Finca Biosalud"
           ></iframe>
           <div className="p-4 flex items-center gap-2 text-gray-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-bio-amarillo" />
              <span>{t('contact.location_desc')}</span>
           </div>
        </div>

      </div>
    </div>
  );
};
