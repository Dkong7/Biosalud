import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export const ProgramDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const getProgramData = () => {
    switch (id) {
      case 'education':
        return {
          title: t('program.edu_title'),
          intro: t('program.edu_intro'),
          desc: t('program.edu_content'),
          img: "/conferencias.png",
          features: [
            t('program.edu_feat_1'),
            t('program.edu_feat_2'),
            t('program.edu_feat_3'),
            t('program.edu_feat_4')
          ]
        };
      case 'ecotourism':
        return {
          title: t('program.eco_title'),
          intro: t('program.eco_intro'),
          desc: t('program.eco_content'),
          img: "/ecoturismo.png",
          features: [
            t('program.eco_feat_1'),
            t('program.eco_feat_2'),
            t('program.eco_feat_3'),
            t('program.eco_feat_4')
          ]
        };
      case 'therapy':
        return {
          title: t('program.home_title'),
          intro: t('program.home_intro'),
          desc: t('program.home_content'),
          img: "/terapias.png",
          features: [
            t('program.home_feat_1'),
            t('program.home_feat_2'),
            t('program.home_feat_3'),
            t('program.home_feat_4')
          ]
        };
      default:
        return null;
    }
  };

  const data = getProgramData();

  if (!data) {
    return <div className="p-20 text-center">Programa no encontrado</div>;
  }

  return (
    <div className="w-full bg-white animate-fadeIn min-h-screen">
       
       {/* HERO DEL DETALLE */}
       <div className="h-[60vh] relative overflow-hidden bg-black">
          <img src={data.img} alt={data.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
             <span className="text-bio-amarillo font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('program.details_title')}</span>
             <h1 className="font-eras text-4xl md:text-6xl text-white font-bold mb-8 drop-shadow-xl max-w-4xl">{data.title}</h1>
             
             <button onClick={() => navigate(-1)} className="text-white hover:text-bio-amarillo transition gap-2 flex items-center font-bold text-sm bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/20">
                <FontAwesomeIcon icon={faArrowLeft} /> {t('program.back_btn')}
             </button>
          </div>
       </div>

       {/* CONTENIDO PRINCIPAL */}
       <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
             
             {/* Columna Izquierda: Texto Principal */}
             <div className="lg:col-span-2">
                
                {/* Intro Destacada */}
                <div className="mb-10 relative">
                   <FontAwesomeIcon icon={faQuoteLeft} className="text-6xl text-gray-100 absolute -top-4 -left-6 -z-10" />
                   <p className="font-cambria text-2xl text-bio-verde font-bold italic leading-relaxed">
                      "{data.intro}"
                   </p>
                </div>

                {/* Descripción Detallada */}
                <div className="prose prose-lg text-gray-700 font-cambria text-lg leading-relaxed text-justify">
                   <p>{data.desc}</p>
                </div>

                <div className="mt-12 p-8 bg-[#f8f9f3] rounded-sm border-l-4 border-bio-verde">
                   <h3 className="font-eras text-xl font-bold text-bio-verde mb-4">{t('program.target_title')}</h3>
                   <p className="text-gray-600 italic">
                      Este programa está diseñado para personas que buscan retomar el control de su salud, desconectarse del estrés urbano o requieren asistencia especializada para el dolor.
                   </p>
                </div>
             </div>

             {/* Columna Derecha: Características y CTA */}
             <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100 sticky top-24">
                   <h3 className="font-eras text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
                      {t('program.methodology_title')}
                   </h3>
                   
                   <ul className="space-y-4 mb-10">
                      {data.features.map((feat, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-bio-amarillo mt-1" />
                            <span className="text-gray-600 text-sm font-bold">{feat}</span>
                         </li>
                      ))}
                   </ul>

                   <div className="text-center">
                      <NavLink to="/contact" className="block w-full bg-bio-verde text-white py-4 rounded-sm font-bold font-eras hover:bg-bio-amarillo hover:text-bio-verde transition-all shadow-lg uppercase tracking-wider text-sm">
                         {t('home.btn_contact')}
                      </NavLink>
                      <p className="text-xs text-gray-400 mt-4">Cupos limitados / Agenda previa</p>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};
