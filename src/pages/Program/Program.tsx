import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChalkboardTeacher, faTree, faUserMd } from '@fortawesome/free-solid-svg-icons';

export const Program = () => {
  const { t } = useTranslation();

  const programs = [
    {
      id: "education",
      title: t('program.edu_title'),
      desc: t('program.edu_content'), // Usamos el intro largo pero lo cortaremos con CSS
      img: "/conferencias.jpg", // IMAGEN CORRECTA
      icon: faChalkboardTeacher,
      color: "border-bio-verde",
      btnColor: "bg-bio-verde",
      link: "/program/education"
    },
    {
      id: "ecotourism",
      title: t('program.eco_title'),
      desc: t('program.eco_content'),
      img: "/ecoturismo.png", // IMAGEN CORRECTA
      icon: faTree,
      color: "border-bio-amarillo",
      btnColor: "bg-bio-amarillo",
      link: "/program/ecotourism"
    },
    {
      id: "therapy",
      title: t('program.home_title'),
      desc: t('program.home_content'),
      img: "/terapias.png", // IMAGEN CORRECTA
      icon: faUserMd,
      color: "border-bio-rojo",
      btnColor: "bg-bio-rojo",
      link: "/program/therapy"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      
      {/* HEADER */}
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden">
         {/* Fondo decorativo sutil */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         
         <h1 className="font-eras text-4xl md:text-5xl font-bold relative z-10">{t('navbar.program')}</h1>
         <p className="font-cambria mt-4 text-xl opacity-90 max-w-2xl mx-auto relative z-10 px-4">
            {t('home.hero_subtitle')}
         </p>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {programs.map((prog) => (
            <NavLink 
              key={prog.id} 
              to={prog.link}
              className={`group bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border-t-4 ${prog.color}`}
            >
               {/* Imagen con Overlay al Hover */}
               <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={prog.img} 
                    alt={prog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Icono Flotante */}
                  <div className="absolute bottom-4 right-4 bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-md z-20">
                     <FontAwesomeIcon icon={prog.icon} className="text-lg" />
                  </div>
               </div>
               
               <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-eras text-2xl font-bold text-gray-800 mb-4 group-hover:text-bio-verde transition-colors">
                    {prog.title}
                  </h3>
                  
                  {/* Descripción cortada a 4 líneas */}
                  <p className="font-cambria text-gray-600 mb-8 flex-1 line-clamp-4 leading-relaxed">
                    {prog.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-bio-verde transition-colors">
                     <span>{t('home.cta_more')}</span>
                     <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-2 transition-transform" />
                  </div>
               </div>
            </NavLink>
          ))}

        </div>
      </div>
      
      {/* Sección Extra de Contacto Rápido */}
      <div className="container mx-auto px-6 mt-20 text-center">
         <p className="font-cambria text-gray-600 mb-6 text-lg">¿Tienes dudas sobre cuál programa es para ti?</p>
         <NavLink to="/contact" className="inline-block border-2 border-bio-verde text-bio-verde px-8 py-3 rounded-sm font-bold hover:bg-bio-verde hover:text-white transition-all">
            Hablar con un Asesor
         </NavLink>
      </div>

    </div>
  );
};
