import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf, 
  faTint, 
  faHeartbeat, 
  faSun, 
  faHandsHelping 
} from '@fortawesome/free-solid-svg-icons';

// Configuración del Slider (Hero)
const slides = [
  {
    type: 'video',
    // Video de stock temporal de naturaleza (luz solar en bosque)
    src: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    alt: 'Naturaleza Viva Biosalud'
  },
  {
    type: 'image',
    // Imagen de respaldo (debes poner una real en esta ruta)
    src: '/assets/images/atom-hero.jpg', 
    alt: 'Dr. Atom Inoe'
  }
];

export const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica del Slider Automático (Cambia cada 6 seg)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      
      {/* --- 1. HERO SECTION (SLIDER 16:9) --- */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-bio-verde">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'video' ? (
              <video 
                src={slide.src} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-70" 
              />
            ) : (
              <img 
                src={slide.src} 
                alt={slide.alt} 
                className="w-full h-full object-cover opacity-70" 
              />
            )}
            {/* Capa oscura para que el texto blanco resalte */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

        {/* Texto Central del Hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 animate-fadeIn">
          <span className="font-eras text-bio-amarillo tracking-[0.2em] uppercase text-sm md:text-base mb-4 drop-shadow-md">
            Movimiento Latinoamericano de Biosalud
          </span>
          <h1 className="font-eras text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 drop-shadow-lg max-w-5xl leading-tight">
            Recupera tu Vitalidad <br />
            <span className="italic font-cambria font-normal">Naturalmente</span>
          </h1>
        </div>
      </section>

      {/* --- 2. MÓDULO FLOTANTE (Estilo GUIA) --- */}
      <div className="container mx-auto px-4 relative z-20 -mt-24 mb-20">
        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 border-t-4 border-bio-amarillo">
          
          {/* Lado Izquierdo: Texto */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-eras text-3xl text-bio-verde font-bold mb-4">
              Salud Autogestionada
            </h2>
            <p className="font-cambria text-gray-600 leading-relaxed mb-8 text-lg">
              "Tu cuerpo es sabio y te dice lo que necesitas." <br/>
              Promovemos la vitalidad a través de la medicina natural, la orinoterapia y el movimiento bioenergético. Sin dependencias, despertando tu propio sanador interno.
            </p>
            <NavLink 
              to="/program" 
              className="inline-block bg-bio-verde text-white font-eras font-bold py-3 px-8 hover:bg-bio-amarillo hover:text-bio-verde transition-all duration-300 rounded-sm uppercase tracking-wide text-sm"
            >
              Conocer el Programa
            </NavLink>
          </div>

          {/* Lado Derecho: Imagen Destacada (Retrato Atom) */}
          <div className="w-full md:w-1/3 h-72 relative group">
             {/* Marco decorativo desplazado */}
             <div className="absolute inset-0 bg-bio-amarillo translate-x-3 translate-y-3 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
             {/* Imagen principal */}
             <div className="relative w-full h-full bg-gray-200 overflow-hidden rounded-sm shadow-lg">
                <img 
                  src="/assets/images/atom-portrait.jpg" 
                  alt="Dr. Atom Inoe" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>
        </div>
      </div>

      {/* --- 3. PILARES DE BIOSALUD --- */}
      <section className="py-16 bg-[#f8f9f3]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-eras text-2xl text-bio-verde font-bold mb-3 uppercase tracking-widest">Nuestros Pilares</h3>
            <div className="w-16 h-1 bg-bio-amarillo mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Pilar 1 */}
            <div className="group p-6 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faTint} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">Urosalud</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">
                La orinoterapia mueve, sacude y fortalece el sistema inmunológico. Un tesoro de anticuerpos propio para tu sanación.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="group p-6 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faSun} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">Energía Vital</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">
                Ejercicios bioenergéticos y caminatas para reactivar tus mitocondrias y elevar tu temperatura corporal y ánimo de vivir.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="group p-6 hover:-translate-y-2 transition-transform duration-300 cursor-default">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-bio-verde/10 group-hover:bg-bio-verde transition-colors duration-300">
                <FontAwesomeIcon icon={faHandsHelping} className="text-3xl text-bio-verde group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-eras text-xl font-bold text-bio-verde mb-3">Autogestión</h4>
              <p className="font-cambria text-gray-600 text-sm leading-relaxed">
                Rompe la dependencia. Aprende a gestionar tu propia salud lejos de la medicina comercial que solo trata síntomas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. FRASE DESTACADA PARALLAX --- */}
      <section className="relative py-28 bg-bio-verde text-center text-white px-4 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-between items-center">
           <FontAwesomeIcon icon={faLeaf} className="text-[25rem] -ml-20" />
           <FontAwesomeIcon icon={faHeartbeat} className="text-[25rem] -mr-20" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <FontAwesomeIcon icon={faLeaf} className="text-4xl text-bio-amarillo mb-8" />
          <blockquote className="font-cambria text-2xl md:text-4xl italic leading-relaxed mb-8 font-light">
            "No existe enfermedad en cuerpo sano. Tu cuerpo es sabio y te dice lo que necesitas."
          </blockquote>
          <cite className="font-eras font-bold text-bio-amarillo not-italic text-lg tracking-wider">
            — Dr. Atom Inoe
          </cite>
        </div>
      </section>

      {/* --- 5. CALL TO ACTION (CTA) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="md:w-1/2 text-left">
            <span className="text-bio-amarillo font-bold tracking-[0.2em] text-xs font-eras uppercase mb-4 block">
              Participa
            </span>
            <h2 className="text-4xl md:text-5xl font-eras font-bold text-bio-verde mb-6 leading-tight">
              Comienza tu camino hacia una vida plena
            </h2>
            <p className="font-cambria text-gray-600 mb-8 text-lg">
              Talleres presenciales, hospedaje familiar en Anolaima y terapias de autogestión. 
              Únete a nuestra comunidad y recupera tu poder.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to="/contact" className="bg-bio-verde text-white px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-amarillo hover:text-bio-verde transition-all duration-300 shadow-lg">
                Contáctanos
              </NavLink>
              <NavLink to="/shop" className="border-2 border-bio-verde text-bio-verde px-8 py-4 rounded-sm font-bold font-eras hover:bg-bio-verde hover:text-white transition-all duration-300">
                Ver Tienda
              </NavLink>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full flex justify-center relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-bio-amarillo/20 rounded-full blur-3xl"></div>
             <div className="w-full max-w-lg aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-2xl relative z-10">
                {/* Imagen Placeholder Taller */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                   <span className="font-eras">Foto Taller / Grupo</span>
                </div>
                {/* <img src="/assets/images/taller-group.jpg" alt="Taller Biosalud" className="w-full h-full object-cover" /> */}
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};
