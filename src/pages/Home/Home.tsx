import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faLeaf, 
  faTint, 
  faSun, 
  faHandsHelping, 
  faHeartbeat 
} from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(true);

  // ID de videos según idioma
  const getVideoId = () => {
    switch (i18n.language) {
      case 'ja': return 'u7_JbP_9N_M';
      case 'en': return 'mF2FaHVMa0I';
      default: return 'QrfLHBgB5Is';
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      
      {/* --- 1. HERO SECTION CON VIDEO Y MODAL --- */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black">
        
        {/* VIDEO BACKGROUND (Loop, Muted, Autoplay) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none scale-125">
           <iframe 
             className="w-full h-full object-cover opacity-80"
             src={`https://www.youtube.com/embed/${getVideoId()}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getVideoId()}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
             title="Hero Video"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             style={{ border: 'none' }}
           ></iframe>
        </div>

        {/* SI EL MODAL ESTÁ CERRADO: Botón discreto para volver a abrirlo */}
        {!showModal && (
          <button 
            onClick={() => setShowModal(true)}
            className="absolute bottom-10 left-10 z-20 text-white bg-bio-verde/80 px-6 py-2 rounded-full hover:bg-bio-amarillo hover:text-bio-verde transition font-bold font-eras"
          >
            Ver Mensaje
          </button>
        )}

        {/* --- EL MODAL (Overlay Completo) --- */}
        {showModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative text-center max-w-5xl px-4">
              
              {/* Botón X para cerrar */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute -top-20 right-0 md:-right-10 text-white/50 hover:text-bio-amarillo text-5xl transition-colors"
                title={t('home.close_modal')}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* Texto Principal */}
              <span className="font-eras text-bio-amarillo tracking-[0.3em] uppercase text-sm md:text-xl mb-6 block drop-shadow-lg">
                {t('home.hero_subtitle')}
              </span>
              <h1 className="font-eras text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-10 drop-shadow-xl leading-tight">
                {t('home.hero_title')} <br />
                <span className="italic font-cambria font-normal text-bio-amarillo">{t('home.hero_highlight')}</span>
              </h1>
              
              {/* FOTO CLICKEABLE (Lleva a Quiénes Somos) */}
              <div className="flex flex-col items-center mt-8 group">
                 <NavLink to="/about" className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-bio-amarillo overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <img src="/atom1.png" alt="Dr Atom" className="w-full h-full object-cover" />
                 </NavLink>
                 <span className="text-white/80 text-sm mt-4 font-cambria animate-pulse">
                    {t('home.modal_hint')}
                 </span>
              </div>

            </div>
          </div>
        )}
      </section>

      {/* --- 2. PILARES (LO QUE FALTABA) --- */}
      <section className="py-20 bg-[#f8f9f3]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-eras text-2xl text-bio-verde font-bold mb-3 uppercase tracking-widest">{t('home.pillars_title')}</h3>
            <div className="w-16 h-1 bg-bio-amarillo mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Pilar 1 */}
            <div className="group p-8 hover:-translate-y-2 transition-transform duration-300 bg-white rounded-sm shadow-sm hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faTint} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_1_title')}</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_1_desc')}</p>
            </div>
            {/* Pilar 2 */}
            <div className="group p-8 hover:-translate-y-2 transition-transform duration-300 bg-white rounded-sm shadow-sm hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faSun} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_2_title')}</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_2_desc')}</p>
            </div>
            {/* Pilar 3 */}
            <div className="group p-8 hover:-translate-y-2 transition-transform duration-300 bg-white rounded-sm shadow-sm hover:shadow-lg">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faHandsHelping} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_3_title')}</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FRASE PARALLAX (LO QUE FALTABA) --- */}
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

      {/* --- 4. CTA PARTICIPA (LO QUE FALTABA) --- */}
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
