import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full animate-fadeIn pb-20">
      
      {/* Header Simple */}
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">Quiénes Somos</h1>
      </div>

      <div className="container mx-auto px-6 mt-16 space-y-24">
        
        {/* DR ATOM */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
           <div className="w-full md:w-1/3">
              <img src="/atom1.png" className="rounded-sm shadow-xl w-full" alt="Dr Atom" />
           </div>
           <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-eras font-bold text-bio-verde mb-2">Dr. Atom Inoe</h2>
              <p className="font-cambria text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {t('about.bio_p1')}
                {'\n\n'}
                {t('about.bio_p2')}
              </p>
           </div>
        </div>

        {/* DRA ALICIA (NUEVO) */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center border-t pt-16 border-gray-200">
           <div className="w-full md:w-1/3">
              <img src="/alicia1.png" className="rounded-sm shadow-xl w-full" alt="Dra Alicia" />
           </div>
           <div className="w-full md:w-2/3 text-left md:text-right">
              <h2 className="text-3xl font-eras font-bold text-bio-verde mb-2">{t('about.alicia_title')}</h2>
              <h3 className="text-xl text-bio-amarillo italic mb-6">{t('about.alicia_subtitle')}</h3>
              <p className="font-cambria text-gray-700 text-lg leading-relaxed">
                {t('about.alicia_desc')}
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};
