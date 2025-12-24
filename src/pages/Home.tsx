import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChevronRight, faClock, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const { t } = useTranslation();

  // Fechas de ejemplo para el widget de calendario
  const upcomingDates = [
    { day: "Lun", date: "26 Ago", time: "10:00 AM" },
    { day: "Mié", date: "28 Ago", time: "3:00 PM" },
    { day: "Jue", date: "29 Ago", time: "11:30 AM" },
  ];

  return (
    <div>
      {/* HERO SECTION REIMAGINADA */}
      {/* Aumentamos la altura a min-h-[85vh] para mayor impacto */}
      {/* Asegúrate de que la clase 'bg-hero-image' esté definida en tu tailwind.config.js o index.css con la foto de la Dra. */}
      <section className="relative min-h-[85vh] flex items-center bg-hero-image bg-cover bg-center bg-no-repeat attachment-fixed">
        
        {/* Overlay General más suave para no oscurecer tanto a la Dra. */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Degradado lateral para mejorar legibilidad del texto izquierdo sin tapar la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:via-transparent"></div>

        {/* Contenido Principal en Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* COLUMNA IZQUIERDA: Texto Principal y LLamados a la acción */}
            <div className="lg:col-span-7 text-white space-y-8 animate-fade-in-up">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-4 uppercase tracking-wider backdrop-blur-sm border border-secondary/30">
                  Medicina Integrativa y Funcional
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                  Dra. Alicia <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                    Córdoba
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed border-l-4 border-secondary pl-6">
                "Tu salud en armonía: Un enfoque integral que une ciencia y bienestar para recuperar tu vitalidad."
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link to="/contacto" className="group bg-secondary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-secondary/50">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                  Agendar Consulta
                  <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer" className="group bg-white/10 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-3 text-xl" />
                  Chat Rápido
                </a>
              </div>
            </div>

            {/* COLUMNA DERECHA: Widget de Agenda/Calendario */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in-up delay-200">
              {/* Tarjeta con efecto cristal */}
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/40">
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                    <FontAwesomeIcon icon={faClock} className="text-secondary" />
                    Próxima Disponibilidad
                  </h3>
                  <span className="text-xs font-bold text-primary bg-secondary/20 px-3 py-1 rounded-full uppercase">Online & Presencial</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reserva tu espacio para esta semana. Cupos limitados para garantizar una atención personalizada.
                </p>

                {/* Lista de fechas simuladas */}
                <div className="space-y-4 mb-8">
                  {upcomingDates.map((slot, index) => (
                    <div key={index} className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-secondary hover:bg-white hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/5 text-primary font-bold text-center rounded-xl p-3 w-16 group-hover:bg-secondary group-hover:text-primary transition-colors">
                          <div className="text-xs uppercase opacity-70">{slot.day}</div>
                          <div className="text-lg">{slot.date}</div>
                        </div>
                        <div>
                          <div className="font-bold text-text-dark">{slot.time}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-2">
                             <FontAwesomeIcon icon={faVideo} className="text-xs text-secondary" /> Consulta Virtual
                          </div>
                        </div>
                      </div>
                      <FontAwesomeIcon icon={faChevronRight} className="text-gray-300 group-hover:text-secondary transition-colors" />
                    </div>
                  ))}
                </div>
                
                <Link to="/contacto" className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-md">
                  Ver Agenda Completa
                </Link>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Reserva segura y confidencial.
                </p>
              </div>
            </div>

          </div>
        </div>
        
        {/* Elemento decorativo inferior para suavizar la transición */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>
      </section>

      {/* SECCIÓN: Introducción / Filosofía (Contenido que sigue debajo) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
         {/* Patrones de fondo sutiles */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">
              Más que medicina, un camino hacia tu <span className="relative inline-block px-2 z-10 after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-full after:h-3 after:bg-secondary/30 after:-z-10">bienestar integral</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              En un mundo enfocado en tratar síntomas, nosotros buscamos las causas. 
              La Dra. Alicia Córdoba combina lo mejor de la medicina convencional con 
              terapias complementarias basadas en evidencia para restaurar el equilibrio natural de tu cuerpo.
            </p>
            <button className="text-primary font-bold text-lg hover:text-secondary transition-colors inline-flex items-center gap-2 group border-b-2 border-transparent hover:border-secondary pb-1">
              Conoce nuestra filosofía
              <FontAwesomeIcon icon={faChevronRight} className="text-sm group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      {/* AQUI IRÍAN LAS OTRAS SECCIONES: SERVICIOS, TESTIMONIOS, BLOG, ETC. */}
    </div>
  );
};

export default Home;
