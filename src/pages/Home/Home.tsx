import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTint, faSun, faHandsHelping, faLeaf, faHeartbeat,
  faArrowRight, faTimes
} from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [showHeroBox, setShowHeroBox] = useState(true);

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
      <section className="relative h-[90vh] w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none scale-125">
           <iframe className="w-full h-full object-cover opacity-60" src={`https://www.youtube.com/embed/${getVideoId()}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getVideoId()}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`} title="Hero" style={{ border: 'none' }}></iframe>
        </div>
        {showHeroBox && (
          <div className="relative bg-black/80 border border-white/10 p-10 md:p-14 rounded-sm max-w-3xl text-center shadow-2xl mx-4 z-20 animate-fadeIn">
              <button onClick={() => setShowHeroBox(false)} className="absolute top-4 right-4 text-white/50 hover:text-bio-amarillo text-xl transition-colors"><FontAwesomeIcon icon={faTimes} /></button>
              <span className="font-eras text-bio-amarillo tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">{t('home.hero_subtitle')}</span>
              <h1 className="font-eras text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">{t('home.hero_title')} <br /><span className="italic font-cambria font-normal text-bio-amarillo">{t('home.hero_highlight')}</span></h1>
              <p className="text-gray-300 font-cambria italic text-lg border-t border-white/10 pt-6 mt-6">"{t('home.quote')}"</p>
          </div>
        )}
        {!showHeroBox && <button onClick={() => setShowHeroBox(true)} className="absolute bottom-32 z-20 bg-bio-verde/80 text-white px-6 py-2 rounded-full font-bold font-eras hover:bg-bio-amarillo transition backdrop-blur-md border border-white/20">{t('home.open_box')}</button>}
      </section>

      {/* --- MÓDULO FLOTANTE --- */}
      <div className="container mx-auto px-4 relative z-30 -mt-24 mb-16">
        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-10 max-w-6xl mx-auto border-t-4 border-bio-amarillo flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h2 className="font-eras text-3xl text-bio-verde font-bold mb-4">{t('home.floating_title')}</h2>
            <p className="font-cambria text-gray-600 leading-relaxed mb-8 text-lg">"{t('home.floating_desc')}"</p>
            <NavLink to="/program" className="inline-block bg-bio-verde text-white font-eras font-bold py-3 px-8 hover:bg-bio-amarillo hover:text-bio-verde transition-all duration-300 rounded-sm uppercase tracking-wide text-sm">{t('home.btn_program')}</NavLink>
          </div>
          <div className="w-full lg:w-5/12 order-1 lg:order-2 flex gap-4">
             <NavLink to="/about" className="flex-1 text-center group cursor-pointer">
                <div className="w-full h-56 bg-gray-200 overflow-hidden rounded-sm shadow-md mb-2 relative">
                  <img src="/atom1.png" alt="Atom" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                </div>
                <h4 className="font-eras font-bold text-bio-verde text-sm group-hover:text-bio-amarillo">Dr. Atom Inoe</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t('home.atom_role')}</p>
             </NavLink>
             <NavLink to="/about" className="flex-1 text-center group cursor-pointer">
                <div className="w-full h-56 bg-gray-200 overflow-hidden rounded-sm shadow-md mb-2 relative">
                  <img src="/alicia1.png" alt="Alicia" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                </div>
                <h4 className="font-eras font-bold text-bio-verde text-sm group-hover:text-bio-amarillo">Dra. Alicia Cabrera</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t('home.alicia_role')}</p>
             </NavLink>
          </div>
        </div>
      </div>

      {/* --- PROGRAMAS SNEAK PEEK (IMÁGENES CORREGIDAS) --- */}
      <section className="py-16 bg-white mb-10 border-b border-gray-100">
         <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <h3 className="font-eras text-3xl text-bio-verde font-bold">{t('home.prog_title')}</h3>
               <div className="w-12 h-1 bg-bio-amarillo mx-auto mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               
               {/* CARD 1: Educación = conferencias.png */}
               <NavLink to="/program/education" className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                  <div className="h-56 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-bio-verde/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src="/conferencias.png" alt="Educación" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-eras font-bold text-bio-verde text-xl mb-3">{t('home.prog_edu')}</h4>
                      <p className="text-sm text-gray-600 mb-6 flex-1">{t('home.prog_edu_desc')}</p>
                      <span className="text-bio-verde font-bold text-sm uppercase tracking-wide border-t border-gray-100 pt-4 flex justify-between items-center group-hover:text-bio-amarillo">
                         {t('home.cta_more')} <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                  </div>
               </NavLink>

               {/* CARD 2: Ecoturismo = ecoturismo.png */}
               <NavLink to="/program/ecotourism" className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                  <div className="h-56 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-bio-amarillo/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src="/ecoturismo.png" alt="Ecoturismo" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-eras font-bold text-bio-verde text-xl mb-3">{t('home.prog_eco')}</h4>
                      <p className="text-sm text-gray-600 mb-6 flex-1">{t('home.prog_eco_desc')}</p>
                      <span className="text-bio-verde font-bold text-sm uppercase tracking-wide border-t border-gray-100 pt-4 flex justify-between items-center group-hover:text-bio-amarillo">
                         {t('home.cta_more')} <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                  </div>
               </NavLink>

               {/* CARD 3: Domiciliarios = terapias.png */}
               <NavLink to="/program/therapy" className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                  <div className="h-56 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-bio-rojo/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src="/terapias.png" alt="Terapias" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-eras font-bold text-bio-verde text-xl mb-3">{t('home.prog_home')}</h4>
                      <p className="text-sm text-gray-600 mb-6 flex-1">{t('home.prog_home_desc')}</p>
                      <span className="text-bio-verde font-bold text-sm uppercase tracking-wide border-t border-gray-100 pt-4 flex justify-between items-center group-hover:text-bio-amarillo">
                         {t('home.cta_more')} <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                  </div>
               </NavLink>

            </div>
         </div>
      </section>

      {/* --- PILARES, FRASE, CTA --- */}
      <section className="py-16 bg-[#f8f9f3]">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16"><h3 className="font-eras text-2xl text-bio-verde font-bold mb-3 uppercase tracking-widest">{t('home.pillars_title')}</h3><div className="w-16 h-1 bg-bio-amarillo mx-auto"></div></div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="group p-8 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"><div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-bio-verde/10 group-hover:bg-bio-verde transition-colors"><FontAwesomeIcon icon={faTint} className="text-3xl text-bio-verde group-hover:text-white transition-colors" /></div><h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_1_title')}</h4><p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_1_desc')}</p></div>
              <div className="group p-8 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"><div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-bio-verde/10 group-hover:bg-bio-verde transition-colors"><FontAwesomeIcon icon={faSun} className="text-3xl text-bio-verde group-hover:text-white transition-colors" /></div><h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_2_title')}</h4><p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_2_desc')}</p></div>
              <div className="group p-8 bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"><div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-bio-verde/10 group-hover:bg-bio-verde transition-colors"><FontAwesomeIcon icon={faHandsHelping} className="text-3xl text-bio-verde group-hover:text-white transition-colors" /></div><h4 className="font-eras text-xl font-bold text-bio-verde mb-3">{t('home.pillar_3_title')}</h4><p className="font-cambria text-gray-600 text-sm leading-relaxed">{t('home.pillar_3_desc')}</p></div>
           </div>
        </div>
      </section>
      <section className="relative py-28 bg-bio-verde text-center text-white px-4 overflow-hidden"><div className="absolute inset-0 opacity-5 pointer-events-none flex justify-between items-center"><FontAwesomeIcon icon={faLeaf} className="text-[25rem] -ml-20" /><FontAwesomeIcon icon={faHeartbeat} className="text-[25rem] -mr-20" /></div><div className="relative z-10 max-w-4xl mx-auto"><FontAwesomeIcon icon={faLeaf} className="text-4xl text-bio-amarillo mb-8" /><blockquote className="font-cambria text-2xl md:text-4xl italic leading-relaxed mb-8 font-light">"{t('home.quote')}"</blockquote><cite className="font-eras font-bold text-bio-amarillo not-italic text-lg tracking-wider">— {t('home.quote_author')}</cite></div></section>
      <section className="py-24 bg-white"><div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16"><div className="md:w-1/2 text-left"><span className="text-bio-amarillo font-bold tracking-[0.2em] text-xs font-eras uppercase mb-4 block">{t('home.cta_tag')}</span><h2 className="text-4xl md:text-5xl font-eras font-bold text-bio-verde mb-6 leading-tight">{t('home.cta_title')}</h2><p className="font-cambria text-gray-600 mb-8 text-lg">{t('home.cta_desc')}</p><div className="flex flex-wrap gap-4"><NavLink to="/contact" className="bg-bio-verde text-white px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-amarillo hover:text-bio-verde transition-all duration-300 shadow-lg">{t('home.btn_contact')}</NavLink><NavLink to="/shop" className="border-2 border-bio-verde text-bio-verde px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-verde hover:text-white transition-all duration-300">{t('home.btn_shop')}</NavLink></div></div><div className="md:w-1/2 w-full relative"><div className="absolute top-0 right-0 w-32 h-32 bg-bio-amarillo/20 rounded-full blur-3xl"></div><div className="w-full aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-2xl relative z-10"><img src="/fotogrupo.jpg" alt="Familia Biosalud" className="w-full h-full object-cover" /></div></div></div></section>

    </div>
  );
};
