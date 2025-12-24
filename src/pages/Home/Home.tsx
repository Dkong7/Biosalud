import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(true); // El modal inicia ABIERTO

  const getVideoId = () => {
    switch (i18n.language) {
      case 'ja': return 'u7_JbP_9N_M';
      case 'en': return 'mF2FaHVMa0I';
      default: return 'QrfLHBgB5Is';
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none scale-125">
           <iframe 
             className="w-full h-full object-cover"
             src={`https://www.youtube.com/embed/${getVideoId()}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getVideoId()}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
             title="Hero Video"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             style={{ border: 'none' }}
           ></iframe>
        </div>
        
        {/* Botón para reabrir modal si se cerró */}
        {!showModal && (
          <button 
            onClick={() => setShowModal(true)}
            className="absolute bottom-10 left-10 z-20 text-white bg-bio-verde/80 px-4 py-2 rounded-full hover:bg-bio-amarillo transition"
          >
            Ver Mensaje
          </button>
        )}

        {/* --- MODAL OVERLAY (La parte que pediste) --- */}
        {showModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-transparent text-center max-w-4xl px-4 relative">
              
              {/* Botón Cerrar (X) */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute -top-16 right-0 md:-right-10 text-white hover:text-bio-amarillo text-4xl transition-colors"
                title={t('home.close_modal')}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* Contenido del Modal */}
              <span className="font-eras text-bio-amarillo tracking-[0.3em] uppercase text-sm md:text-xl mb-6 block drop-shadow-lg">
                {t('home.hero_subtitle')}
              </span>
              <h1 className="font-eras text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 drop-shadow-xl leading-tight">
                {t('home.hero_title')} <br />
                <span className="italic font-cambria font-normal text-bio-amarillo">{t('home.hero_highlight')}</span>
              </h1>
              
              {/* Foto Clickeable */}
              <div className="flex flex-col items-center mt-10 group cursor-pointer">
                 <NavLink to="/about" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-bio-amarillo overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300">
                    <img src="/atom1.png" alt="Dr Atom" className="w-full h-full object-cover" />
                 </NavLink>
                 <span className="text-white/80 text-sm mt-3 font-cambria animate-pulse">
                    {t('home.modal_hint')}
                 </span>
              </div>
            </div>
          </div>
        )}
      </section>
      
      {/* (Resto de la Home: Pilares, etc... se mantienen limpios para no sobrecargar este script, 
          ya que el foco era el Modal del Hero) */}

    </div>
  );
};
