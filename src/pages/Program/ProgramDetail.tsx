import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const ProgramDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const getProgramData = () => {
    switch (id) {
      case 'education':
        return {
          title: t('program.edu_title'),
          desc: t('program.edu_full_desc'),
          img: "/conferencias.png", // IMAGEN CORRECTA
          features: ["Charlas Magistrales", "Nutrición Consciente", "Filosofía Biosalud"]
        };
      case 'ecotourism':
        return {
          title: t('program.eco_title'),
          desc: t('program.eco_full_desc'),
          img: "/ecoturismo.png", // IMAGEN CORRECTA
          features: ["Hospedaje Familiar", "Caminatas Ecológicas", "Huerta Orgánica"]
        };
      case 'therapy':
        return {
          title: t('program.home_title'),
          desc: t('program.home_full_desc'),
          img: "/terapias.png", // IMAGEN CORRECTA
          features: ["Diagnóstico Integral", "Biomagnetismo", "Acupuntura"]
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
       <div className="h-[50vh] relative overflow-hidden bg-black">
          <img src={data.img} alt={data.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
             <h1 className="font-eras text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-lg">{data.title}</h1>
             <button onClick={() => navigate(-1)} className="text-bio-amarillo hover:text-white transition gap-2 flex items-center font-bold text-lg bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <FontAwesomeIcon icon={faArrowLeft} /> {t('program.back_btn')}
             </button>
          </div>
       </div>

       <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
             <p className="font-cambria text-xl text-gray-700 leading-relaxed mb-10 first-letter:text-5xl first-letter:font-bold first-letter:text-bio-verde first-letter:mr-2 float-left">
                {data.desc}
             </p>
             <div className="clear-both"></div>
             
             <h3 className="font-eras text-2xl text-bio-verde font-bold mb-6 mt-8">Características</h3>
             <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {data.features.map((feat, idx) => (
                   <li key={idx} className="bg-gray-50 p-4 rounded-sm border-l-4 border-bio-amarillo flex items-center gap-3 shadow-sm">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-bio-verde" />
                      <span className="font-bold text-gray-700">{feat}</span>
                   </li>
                ))}
             </ul>

             <div className="bg-[#f8f9f3] p-8 rounded-sm text-center border border-gray-100">
                <h3 className="font-eras text-2xl font-bold text-bio-verde mb-4">{t('home.cta_tag')}</h3>
                <NavLink to="/contact" className="inline-block bg-bio-verde text-white px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-amarillo hover:text-bio-verde transition-all shadow-lg">
                   {t('home.btn_contact')}
                </NavLink>
             </div>
          </div>
       </div>
    </div>
  );
};
