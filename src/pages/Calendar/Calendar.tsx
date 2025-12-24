import { useTranslation } from 'react-i18next';

// Placeholder de eventos (En el futuro esto leerá los .json de /src/content/events)
const events = [
  { date: "2025-10-15", title: "Taller de Orinoterapia", location: "Finca Anolaima", status: "Disponible" },
  { date: "2025-10-20", title: "Charla Virtual: Nutrición", location: "Virtual", status: "Pocos Cupos" },
  { date: "2025-11-05", title: "Retiro de Fin de Año", location: "Finca Anolaima", status: "Disponible" },
];

export const Calendar = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20">
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">{t('calendar.title')}</h1>
      </div>

      <div className="container mx-auto px-6 mt-12">
        {/* Grid de Eventos */}
        <div className="grid gap-6">
          {events.map((evt, idx) => (
             <div key={idx} className="bg-white p-6 rounded-sm shadow-md flex flex-col md:flex-row items-center justify-between border-l-8 border-bio-amarillo hover:bg-gray-50 transition">
                <div className="text-center md:text-left mb-4 md:mb-0">
                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">
                      {evt.date}
                   </span>
                   <h3 className="font-eras text-xl font-bold text-bio-verde">{evt.title}</h3>
                   <p className="text-gray-500 text-sm">{evt.location}</p>
                </div>
                
                <div className="flex items-center gap-4">
                   <span className={`text-sm font-bold ${evt.status === "Disponible" ? "text-green-600" : "text-orange-500"}`}>
                      {evt.status}
                   </span>
                   <button className="bg-bio-verde text-white px-6 py-2 rounded-sm font-bold hover:bg-bio-amarillo transition-colors">
                      {t('calendar.book_btn')}
                   </button>
                </div>
             </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 mt-12 italic">
           * Gestionado por la administración. Para reservar, contacta vía WhatsApp o Formulario.
        </p>
      </div>
    </div>
  );
};
