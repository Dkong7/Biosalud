import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full animate-fadeIn pb-20">
      
      {/* Header */}
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <FontAwesomeIcon icon={faMountain} className="absolute -bottom-10 -left-10 text-[20rem] text-white" />
         </div>
         <h1 className="font-eras text-4xl md:text-5xl font-bold relative z-10">{t('about.hero_tag')}</h1>
         <p className="font-cambria text-xl italic opacity-90 mt-2 relative z-10">{t('about.hero_highlight')}</p>
      </div>

      <div className="container mx-auto px-6 mt-16 space-y-24">
        
        {/* DR ATOM */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
           <div className="w-full md:w-1/3 relative group">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-bio-verde/20 rounded-sm"></div>
              <img src="/atom1.png" className="rounded-sm shadow-xl w-full relative z-10 grayscale group-hover:grayscale-0 transition duration-500" alt="Dr Atom" />
           </div>
           <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-eras font-bold text-bio-verde mb-2">{t('about.bio_title')}</h2>
              <p className="text-sm font-bold text-bio-amarillo uppercase tracking-widest mb-6">{t('about.bio_subtitle')}</p>
              
              <div className="font-cambria text-gray-700 text-lg leading-relaxed space-y-4 text-justify">
                <p>{t('about.bio_p1')}</p>
                <p>{t('about.bio_p2')}</p>
                <p>{t('about.bio_p3')}</p>
              </div>
           </div>
        </div>

        {/* DRA ALICIA */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start border-t pt-16 border-gray-200">
           <div className="w-full md:w-1/3 relative group">
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-bio-amarillo/20 rounded-sm"></div>
              <img src="/alicia1.png" className="rounded-sm shadow-xl w-full relative z-10 grayscale group-hover:grayscale-0 transition duration-500" alt="Dra Alicia" />
           </div>
           <div className="w-full md:w-2/3 text-left md:text-right">
              <h2 className="text-3xl font-eras font-bold text-bio-verde mb-2">{t('about.alicia_title')}</h2>
              <p className="text-sm font-bold text-bio-amarillo uppercase tracking-widest mb-6">{t('home.alicia_role')}</p>
              
              <p className="font-cambria text-gray-700 text-lg leading-relaxed text-justify md:text-right">
                 {t('about.alicia_desc')}
              </p>
           </div>
        </div>

        {/* VIDEO ENTREVISTA */}
        <div className="bg-[#f8f9f3] p-8 md:p-16 rounded-sm shadow-inner text-center">
            <h3 className="font-eras text-2xl font-bold text-bio-verde mb-2">{t('about.interview_title')}</h3>
            <p className="font-cambria text-gray-600 mb-8 max-w-2xl mx-auto">{t('about.interview_desc')}</p>
            
            <div className="max-w-4xl mx-auto aspect-video bg-black rounded-sm shadow-2xl overflow-hidden">
               <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Pa8ODJ0Knuk" 
                  title="Entrevista Dr Atom" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
               ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
};
