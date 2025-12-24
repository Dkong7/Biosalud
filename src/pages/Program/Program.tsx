import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const Program = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('program.edu_title'),
      desc: t('program.edu_desc'),
      img: "bg-blue-100", // Placeholder color
      link: "/contact"
    },
    {
      title: t('program.eco_title'),
      desc: t('program.eco_desc'),
      img: "bg-green-100", // Placeholder color
      link: "/contact"
    },
    {
      title: t('program.home_title'),
      desc: t('program.home_desc'),
      img: "bg-yellow-100", // Placeholder color
      link: "/contact"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20">
      <div className="bg-bio-verde text-white py-16 text-center mb-16">
         <h1 className="font-eras text-4xl font-bold">{t('navbar.program')}</h1>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {programs.map((prog, idx) => (
          <div key={idx} className="bg-white rounded-sm shadow-lg overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
             {/* Foto Placeholder */}
             <div className={`h-48 w-full ${prog.img} flex items-center justify-center text-gray-400 font-eras`}>
                Foto {idx + 1}
             </div>
             
             <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-eras text-2xl font-bold text-bio-verde mb-4">{prog.title}</h3>
                <p className="font-cambria text-gray-600 mb-8 flex-1">{prog.desc}</p>
                <NavLink to={prog.link} className="block text-center bg-bio-verde text-white py-3 font-bold hover:bg-bio-amarillo transition-colors rounded-sm">
                   {t('program.cta_more')}
                </NavLink>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
