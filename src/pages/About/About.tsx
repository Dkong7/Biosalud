import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHistory, 
  faUserMd, 
  faMountain, 
  faQuoteRight, 
  faSeedling 
} from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center bg-bio-verde overflow-hidden">
        {/* Fondo decorativo abstracto */}
        <div className="absolute inset-0 opacity-10">
           <FontAwesomeIcon icon={faMountain} className="absolute bottom-0 left-0 text-[20rem] text-white transform -translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-bio-amarillo font-bold tracking-[0.3em] uppercase text-sm font-eras mb-4 block">
            Nuestra Historia
          </span>
          <h1 className="font-eras text-4xl md:text-6xl text-white font-bold leading-tight">
            Del Hospital Natural a la <br/>
            <span className="italic font-cambria font-normal text-bio-amarillo">Vida Plena</span>
          </h1>
        </div>
      </section>

      {/* --- BIOGRAFÍA DR. ATOM (Datos Reales) --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Columna Imagen */}
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-[3/4] bg-gray-200 rounded-sm overflow-hidden shadow-xl relative z-10">
               {/* Placeholder para foto histórica */}
               <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                  <span className="font-eras text-center px-4">Foto Dr. Atom<br/>(Manchuria / Nicaragua)</span>
               </div>
               {/* <img src="/assets/images/atom-young.jpg" alt="Historia Atom" className="object-cover w-full h-full" /> */}
            </div>
            {/* Cuadro decorativo detrás */}
            <div className="absolute top-10 -right-6 w-full h-full border-2 border-bio-verde/20 -z-0 rounded-sm"></div>
          </div>

          {/* Columna Texto */}
          <div className="w-full md:w-2/3">
            <h2 className="font-eras text-3xl text-bio-verde font-bold mb-6">
              Dr. Atom Inoe
            </h2>
            <h3 className="font-cambria text-xl text-bio-verde/80 italic mb-6">
              Fundador del Movimiento Latinoamericano de Biosalud
            </h3>
            
            <div className="font-cambria text-gray-700 space-y-4 text-lg leading-relaxed text-justify">
              <p>
                Nacido en <strong>Manchuria en 1944</strong>, el Maestro Oriental Atom Inoe ha dedicado su vida a la búsqueda de la salud integral. 
                Graduado en la Escuela de Medicina Oriental de Tokio y Medicina Tradicional China, complementó su formación académica 
                como profesor de Judo y Educación Física en la Universidad Central de Las Villas (Cuba) y la Universidad Libre de Berlín.
              </p>
              <p>
                Su camino en Latinoamérica marcó un hito en <strong>Nicaragua</strong>, donde sirvió como médico acupunturista y fundó la 
                <em>"Comunidad del Hospital Natural de Nicaragua"</em>. Fue allí, en 1990, donde junto al Dr. Uriu nació el concepto de <strong>Biosalud</strong>.
              </p>
              <p>
                Actualmente reside en una finca en <strong>Anolaima, Colombia</strong>, practicando la agricultura orgánica y dirigiendo talleres 
                para personas que buscan aprender una vida sana, natural y agradable.
              </p>
            </div>

            {/* Iconos de trayectoria */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
               <div className="text-center">
                  <FontAwesomeIcon icon={faUserMd} className="text-2xl text-bio-amarillo mb-2" />
                  <p className="text-xs font-bold text-bio-verde uppercase">Medicina Oriental<br/>Tokio</p>
               </div>
               <div className="text-center">
                  <FontAwesomeIcon icon={faSeedling} className="text-2xl text-bio-amarillo mb-2" />
                  <p className="text-xs font-bold text-bio-verde uppercase">Agricultura<br/>Orgánica</p>
               </div>
               <div className="text-center">
                  <FontAwesomeIcon icon={faHistory} className="text-2xl text-bio-amarillo mb-2" />
                  <p className="text-xs font-bold text-bio-verde uppercase">Hospital Natural<br/>Nicaragua</p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FILOSOFÍA (Minimalista) --- */}
      <section className="bg-[#f8f9f3] py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-bio-amarillo mb-8 opacity-50" />
          
          <h2 className="font-eras text-3xl text-bio-verde font-bold mb-10">
            Más allá de la Medicina
          </h2>
          
          <p className="font-cambria text-xl md:text-2xl text-gray-600 leading-relaxed italic mb-12">
            "La medicina y la terapia tocan el CUERPO, nosotros tocamos la VIDA. 
            El cuerpo se cura solito, pero la vida requiere conciencia, valor y esfuerzo."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
             <div className="bg-white p-8 shadow-sm border-t-4 border-bio-verde">
                <h4 className="font-eras font-bold text-lg mb-3">Autogestión</h4>
                <p className="text-sm text-gray-600">Recuperar el poder sobre tu propia salud sin depender de fármacos ni sistemas comerciales.</p>
             </div>
             <div className="bg-white p-8 shadow-sm border-t-4 border-bio-amarillo">
                <h4 className="font-eras font-bold text-lg mb-3">Naturaleza</h4>
                <p className="text-sm text-gray-600">Volver a los ciclos naturales. El agua de páramo, el sol y la tierra son nuestra medicina primaria.</p>
             </div>
             <div className="bg-white p-8 shadow-sm border-t-4 border-bio-rojo">
                <h4 className="font-eras font-bold text-lg mb-3">Alegría</h4>
                <p className="text-sm text-gray-600">Desarrollar la fuerza y la alegría de vivir. Sin ánimo, no hay sistema inmunológico fuerte.</p>
             </div>
          </div>

        </div>
      </section>

      {/* --- VIDEO HISTÓRICO / CHARLA --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
              <span className="text-bio-amarillo font-bold tracking-widest text-xs font-eras uppercase mb-2 block">
                Archivo Audiovisual
              </span>
              <h2 className="font-eras text-3xl text-bio-verde font-bold mb-6">
                Conferencias y Enseñanzas
              </h2>
              <p className="font-cambria text-gray-600 mb-6">
                A través de los años, desde los congresos mundiales hasta los talleres en la finca, 
                el mensaje de Biosalud ha transformado miles de vidas.
              </p>
              <a href="https://www.youtube.com/@Biosalud" target="_blank" className="text-bio-verde font-bold border-b-2 border-bio-amarillo hover:text-bio-amarillo transition-colors">
                 Ver canal de YouTube
              </a>
           </div>
           
           <div className="w-full md:w-1/2">
              <div className="aspect-video bg-black rounded-sm shadow-2xl overflow-hidden relative group cursor-pointer">
                 {/* Placeholder de Video (Reemplazar src con uno real de YouTube embebido o local) */}
                 <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Placeholder" // LINK TEMPORAL
                    title="YouTube video player" 
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
