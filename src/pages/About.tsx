import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-20 font-sans text-[#2D2D2D]">
      <div className="container mx-auto px-4">
        
        <h1 className="text-4xl md:text-5xl font-serif text-center text-[#E2B007] mb-16">
          {t("about.title")}
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-200 min-h-[300px] relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
              Foto Dr. Atom
            </div>
          </div>

          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-[#2D2D2D] mb-2">Dr. Atom Inoe</h2>
            <h3 className="text-[#4F7942] font-bold uppercase tracking-wide text-sm mb-6">
              {t("about.bio_subtitle")}
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{t("about.bio_p1")}</p>
              <p>{t("about.bio_p2")}</p>
              <p>{t("about.bio_p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
