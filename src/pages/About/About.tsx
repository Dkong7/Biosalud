import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center bg-bio-verde overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <FontAwesomeIcon icon={faMountain} className="absolute bottom-0 left-0 text-[20rem] text-white transform -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-bio-amarillo font-bold tracking-[0.3em] uppercase text-sm font-eras mb-4 block">
            {t('about.hero_tag')}
          </span>
          <h1 className="font-eras text-4xl md:text-6xl text-white font-bold leading-tight">
            {t('about.hero_title')} <br/>
            <span className="italic font-cambria font-normal text-bio-amarillo">{t('about.hero_highlight')}</span>
          </h1>
        </div>
      </section>

      {/* --- BIOGRAFÍA --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden shadow-xl relative z-10">
               <img src="/atom1.png" alt="Dr. Atom Inoe" className="object-cover w-full h-full" />
            </div>
            <div className="absolute top-10 -right-6 w-full h-full border-2 border-bio-verde/20 -z-0 rounded-sm"></div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="font-eras text-3xl text-bio-verde font-bold mb-6">
              {t('about.bio_title')}
            </h2>
            <h3 className="font-cambria text-xl text-bio-verde/80 italic mb-6">
              {t('about.bio_subtitle')}
            </h3>
            <div className="font-cambria text-gray-700 space-y-4 text-lg leading-relaxed text-justify">
              <p>{t('about.bio_p1')}</p>
              <p>{t('about.bio_p2')}</p>
              <p>{t('about.bio_p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIDEO ENTREVISTA --- */}
      <section className="py-20 bg-[#f8f9f3]">
         <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <span className="text-bio-amarillo font-bold tracking-widest text-xs font-eras uppercase mb-2 block">
                 {t('about.interview_tag')}
               </span>
               <h2 className="font-eras text-3xl text-bio-verde font-bold">
                 {t('about.interview_title')}
               </h2>
               <p className="font-cambria text-gray-600 mt-4 max-w-2xl mx-auto">
                 {t('about.interview_desc')}
               </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded-sm shadow-2xl overflow-hidden relative">
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
      </section>

    </div>
  );
};
