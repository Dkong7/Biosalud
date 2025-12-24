import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full animate-fadeIn bg-[#f8f9f3]">
      <div className="bg-bio-verde text-white py-16 text-center">
        <h1 className="font-eras text-4xl font-bold mb-2">{t('contact.title')}</h1>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        
        {/* FORMULARIO */}
        <div className="lg:w-1/2 bg-white p-8 rounded-sm shadow-md">
           <h3 className="font-eras text-2xl font-bold text-bio-verde mb-6">Envíanos un mensaje</h3>
           
           {/* NETLIFY FORM CONFIG: name="contact" data-netlify="true" */}
           <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                 <label className="block text-gray-700 font-bold mb-2">{t('contact.form_name')}</label>
                 <input type="text" name="name" required className="w-full border p-3 rounded-sm focus:ring-2 focus:ring-bio-verde outline-none" />
              </div>
              
              <div>
                 <label className="block text-gray-700 font-bold mb-2">{t('contact.form_email')}</label>
                 <input type="email" name="email" required className="w-full border p-3 rounded-sm focus:ring-2 focus:ring-bio-verde outline-none" />
              </div>
              
              <div>
                 <label className="block text-gray-700 font-bold mb-2">{t('contact.form_msg')}</label>
                 <textarea name="message" rows={4} required className="w-full border p-3 rounded-sm focus:ring-2 focus:ring-bio-verde outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-bio-verde text-white font-bold py-4 hover:bg-bio-amarillo transition-colors flex items-center justify-center gap-2">
                 <FontAwesomeIcon icon={faPaperPlane} />
                 {t('contact.form_btn')}
              </button>
           </form>
           <p className="text-xs text-gray-400 mt-4 text-center">
             * Este mensaje será enviado a la administración.
           </p>
        </div>

        {/* INFO Y MAPA */}
        <div className="lg:w-1/2 space-y-10">
           <div className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-bio-amarillo">
              <p className="font-cambria text-gray-700 text-lg mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2"/> +57 311 2024768</p>
              <p className="font-cambria text-gray-700 text-lg"><FontAwesomeIcon icon={faEnvelope} className="mr-2"/> bioatom11@hotmail.com</p>
           </div>
           
           {/* Mapa */}
           <div className="bg-white p-2 shadow-lg rounded-sm h-64">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!4v1766617747828!6m8!1m7!1s-Iap29IVtIoMn_7IWOCLEA!2m2!1d4.760173786223954!2d-74.46669011275698!3f288.9297482186736!4f-9.025058599056294!5f0.7820865974627469" 
                 width="100%" height="100%" style={{ border: 0 }} 
                 allowFullScreen loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>

      </div>
    </div>
  );
};
