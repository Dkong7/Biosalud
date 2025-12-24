import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faTint, 
  faHeartbeat, 
  faSun, 
  faHandsHelping 
} from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const { t, i18n } = useTranslation();

  // Función para obtener el ID del video según el idioma actual
  const getVideoId = () => {
    switch (i18n.language) {
      case 'ja': return 'u7_JbP_9N_M'; // Japonés
      case 'en': return 'mF2FaHVMa0I'; // Inglés
      default: return 'QrfLHBgB5Is';   // Español (Default)
    }
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* --- 1. HERO SECTION (YOUTUBE BACKGROUND) --- */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-black">
        {/* Contenedor del Iframe para simular background video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none scale-125">
           <iframe 
             className="w-full h-full object-cover"
             src={`https://www.youtube.com/embed/${getVideoId()}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getVideoId()}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
             title="Hero Video"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             style={{ border: 'none' }}
           ></iframe>
        </div>
        
        {/* Overlay Oscuro */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Texto Central */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20 animate-fadeIn">
          <span className="font-eras text-bio-amarillo tracking-[0.2em] uppercase text-sm md:text-base mb-4 drop-shadow-md">
            {t('home.hero_subtitle')}
          </span>
          <h1 className="font-eras text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 drop-shadow-lg max-w-5xl leading-tight">
            {t('home.hero_title')} <br />
            <span className="italic font-cambria font-normal">{t('home.hero_highlight')}</span>
          </h1>
        </div>
      </section>

      {/* --- 2. MÓDULO FLOTANTE (ATOM & ALICIA) --- */}
      <div className="container mx-auto px-4 relative z-30 -mt-24 mb-20">
        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-10 max-w-6xl mx-auto border-t-4 border-bio-amarillo">
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            
            {/* Lado Izquierdo: Texto */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 className="font-eras text-3xl text-bio-verde font-bold mb-4">
                {t('home.floating_title')}
              </h2>
              <p className="font-cambria text-gray-600 leading-relaxed mb-8 text-lg">
                "{t('home.floating_desc')}"
              </p>
              <NavLink 
                to="/program" 
                className="inline-block bg-bio-verde text-white font-eras font-bold py-3 px-8 hover:bg-bio-amarillo hover:text-bio-verde transition-all duration-300 rounded-sm uppercase tracking-wide text-sm"
              >
                {t('home.btn_program')}
              </NavLink>
            </div>

            {/* Lado Derecho: Fotos (Atom y Alicia) */}
            <div className="w-full lg:w-5/12 order-1 lg:order-2 flex gap-4">
               {/* Dr. Atom */}
               <div className="flex-1 relative group">
                  <div className="w-full h-64 bg-gray-200 overflow-hidden rounded-sm shadow-md">
                    <img src="/atom1.png" alt="Dr. Atom Inoe" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="font-eras font-bold text-bio-verde">Dr. Atom Inoe</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t('home.atom_role')}</p>
                  </div>
               </div>

               {/* Dra. Alicia */}
               <div className="flex-1 relative group">
                  <div className="w-full h-64 bg-gray-200 overflow-hidden rounded-sm shadow-md">
                    <img src="/alicia1.png" alt="Dra. Alicia Cabrera" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="mt-2 text-center">
                    <h4 className="font-eras font-bold text-bio-verde">Dra. Alicia Cabrera</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t('home.alicia_role')}</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- 3. PILARES --- */}
      <section className="py-16 bg-[#f8f9f3]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-eras text-2xl text-bio-verde font-bold mb-3 uppercase tracking-widest">{t('home.pillars_title')}</h3>
            <div className="w-16 h-1 bg-bio-amarillo mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Pilar 1 */}
            <div className="group p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faTint} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_1_title')}</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_1_desc')}</p>
            </div>
            {/* Pilar 2 */}
            <div className="group p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faSun} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_2_title')}</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_2_desc')}</p>
            </div>
            {/* Pilar 3 */}
            <div className="group p-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faHandsHelping} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_3_title')}</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FRASE DESTACADA --- */}
      <section className="relative py-28 bg-bio-verde text-center text-white px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-between items-center">
           <FontAwesomeIcon icon={faLeaf} className="text-[25rem] -ml-20" />
           <FontAwesomeIcon icon={faHeartbeat} className="text-[25rem] -mr-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FontAwesomeIcon icon={faLeaf} className="text-4xl text-bio-amarillo mb-8" />
          <blockquote className="font-cambria text-2xl md:text-4xl italic leading-relaxed mb-8 font-light">
            "{t('home.quote')}"
          </blockquote>
          <cite className="font-eras font-bold text-bio-amarillo not-italic text-lg tracking-wider">
            — {t('home.quote_author')}
          </cite>
        </div>
      </section>

      {/* --- 5. PARTICIPA (Foto Grupo) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 text-left">
            <span className="text-bio-amarillo font-bold tracking-[0.2em] text-xs font-eras uppercase mb-4 block">
              {t('home.cta_tag')}
            </span>
            <h2 className="text-4xl md:text-5xl font-eras font-bold text-bio-verde mb-6 leading-tight">
              {t('home.cta_title')}
            </h2>
            <p className="font-cambria text-gray-600 mb-8 text-lg">
              {t('home.cta_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to="/contact" className="bg-bio-verde text-white px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-amarillo hover:text-bio-verde transition-all duration-300 shadow-lg">
                {t('home.btn_contact')}
              </NavLink>
              <NavLink to="/shop" className="border-2 border-bio-verde text-bio-verde px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-verde hover:text-white transition-all duration-300">
                {t('home.btn_shop')}
              </NavLink>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-bio-amarillo/20 rounded-full blur-3xl"></div>
             <div className="w-full aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-2xl relative z-10">
                <img src="/fotogrupo.jpg" alt="Familia Biosalud" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
