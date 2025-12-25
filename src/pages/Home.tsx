import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLeaf, faSpa, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-[#F5F5DC] text-[#2D2D2D] font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Fondo oscuro simple por ahora (o imagen de fondo si tienes) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10"></div>
        
        {/* MODAL HERO */}
        {showModal && (
          <div className="relative z-20 bg-black/80 border border-[#E2B007]/30 p-10 md:p-14 rounded-sm max-w-3xl text-center shadow-2xl animate-fadeIn mx-4 backdrop-blur-sm">
            
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#E2B007] transition-colors"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            <h1 className="text-4xl md:text-6xl font-light text-[#E2B007] mb-6 tracking-wide" style={{ fontFamily: "serif" }}>
              BIOSALUD
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light tracking-wider">
              SALUD PERFECTA CON AUTOGESTIÓN
            </p>
            <button className="bg-[#BC002D] text-white px-8 py-3 rounded-full hover:bg-red-800 transition-all duration-300 uppercase text-sm tracking-widest">
              {t("hero.cta")}
            </button>
          </div>
        )}
      </section>

      {/* SECCIÓN DRA. ALICIA */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif text-[#4F7942] mb-6">Dra. Alicia Córdoba</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Pionera en la integración de la medicina funcional con prácticas de autogestión. 
              Su misión es empoderar a cada paciente para que se convierta en el protagonista de su propia curación.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-80 h-96 bg-gray-300 rounded-lg relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">Foto Dra. Alicia</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROGRAMAS */}
      <section className="py-24 bg-[#EBEBE0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-4 relative inline-block">
              {t("programs.section_title")}
              <span className="block h-1 w-20 bg-[#E2B007] mx-auto mt-4 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 font-light">
              {t("programs.section_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programa 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#4F7942] group">
              <div className="w-14 h-14 bg-[#4F7942]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4F7942] transition-colors">
                <FontAwesomeIcon icon={faLeaf} className="text-[#4F7942] text-2xl group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{t("programs.prog1")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Limpia tu organismo de toxinas acumuladas y recupera tu energía vital con nuestro método natural.
              </p>
              <a href="#" className="text-[#E2B007] font-bold text-sm uppercase tracking-wider hover:underline">Ver detalle →</a>
            </div>

            {/* Programa 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#E2B007] group">
              <div className="w-14 h-14 bg-[#E2B007]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E2B007] transition-colors">
                <FontAwesomeIcon icon={faHeart} className="text-[#E2B007] text-2xl group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{t("programs.prog2")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Aprende a nutrir tus células con alimentos vivos y conscientes para una regeneración total.
              </p>
              <a href="#" className="text-[#E2B007] font-bold text-sm uppercase tracking-wider hover:underline">Ver detalle →</a>
            </div>

            {/* Programa 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#BC002D] group">
              <div className="w-14 h-14 bg-[#BC002D]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#BC002D] transition-colors">
                <FontAwesomeIcon icon={faSpa} className="text-[#BC002D] text-2xl group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{t("programs.prog3")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Técnicas de meditación y equilibrio bioenergético para calmar la mente y sanar el espíritu.
              </p>
              <a href="#" className="text-[#E2B007] font-bold text-sm uppercase tracking-wider hover:underline">Ver detalle →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
