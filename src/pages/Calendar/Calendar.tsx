import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
// IMPORTANTE: Esta es la línea que arregla la pantalla roja
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Calendar = () => {
  const { t, i18n } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Datos simulados
  const events = [
    { day: 15, title: t('calendar.event_1'), type: "taller" },
    { day: 22, title: t('calendar.event_2'), type: "retiro" },
    { day: 28, title: t('calendar.event_3'), type: "charla" }
  ];

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay(); 
  
  const monthNamesList = t('calendar.month_names', { returnObjects: true });
  const monthNames = Array.isArray(monthNamesList) ? monthNamesList : ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  const handleDateClick = (day: number, evt: any) => {
    const dateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(dateObj);
    setSelectedEvent(evt);
  };

  const closeModal = () => {
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const handleReserve = () => {
    if (!selectedDate) return;
    const dateStr = selectedDate.toLocaleDateString(i18n.language);
    let msg = selectedEvent 
      ? `Hola Biosalud, me interesa reservar cupo para el evento "${selectedEvent.title}" el día ${dateStr}.`
      : `Hola Biosalud, quisiera consultar disponibilidad para visitar la finca el día ${dateStr}.`;
    
    window.open(`https://wa.me/573112024768?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn relative">
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">{t('calendar.title')}</h1>
         <p className="font-cambria mt-2 opacity-90">{t('calendar.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 mt-12 max-w-5xl">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-sm shadow-sm">
           <button onClick={() => changeMonth(-1)} className="text-bio-verde hover:text-bio-amarillo text-2xl px-4"><FontAwesomeIcon icon={faChevronLeft} /></button>
           <h2 className="font-eras text-2xl font-bold text-gray-800 capitalize">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
           <button onClick={() => changeMonth(1)} className="text-bio-verde hover:text-bio-amarillo text-2xl px-4"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>

        <div className="bg-white rounded-sm shadow-lg overflow-hidden">
           <div className="grid grid-cols-7 bg-bio-verde text-white text-center py-3 font-bold uppercase text-xs md:text-sm">
              <div>Dom</div><div>Lun</div><div>Mar</div><div>Mié</div><div>Jue</div><div>Vie</div><div>Sáb</div>
           </div>
           <div className="grid grid-cols-7 border-l border-t border-gray-200">
              {Array.from({ length: firstDay }).map((_, i) => (<div key={`empty-${i}`} className="h-24 md:h-32 border-r border-b border-gray-200 bg-gray-50"></div>))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                 const day = i + 1;
                 const evt = events.find(e => e.day === day);
                 return (
                    <div key={day} onClick={() => handleDateClick(day, evt)} className="h-24 md:h-32 border-r border-b border-gray-200 p-2 relative group hover:bg-bio-verde/5 transition-colors cursor-pointer">
                       <span className="font-eras font-bold text-gray-400 group-hover:text-bio-verde">{day}</span>
                       {evt && (<div className={`mt-2 p-1 md:p-2 rounded-sm text-[10px] md:text-xs font-bold text-white shadow-sm ${evt.type === 'retiro' ? 'bg-bio-verde' : evt.type === 'taller' ? 'bg-bio-amarillo text-bio-verde' : 'bg-blue-400'}`}>{evt.title}</div>)}
                    </div>
                 );
              })}
           </div>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-4 md:gap-6 justify-center text-sm font-cambria">
           <div className="flex items-center gap-2"><span className="w-3 h-3 bg-bio-verde rounded-full"></span> {t('calendar.legend_retreat')}</div>
           <div className="flex items-center gap-2"><span className="w-3 h-3 bg-bio-amarillo rounded-full"></span> {t('calendar.legend_workshop')}</div>
           <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full"></span> {t('calendar.legend_virtual')}</div>
        </div>
      </div>

      {selectedDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
           <div className="bg-white rounded-sm shadow-2xl p-8 max-w-md w-full relative">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-bio-rojo text-xl"><FontAwesomeIcon icon={faTimes} /></button>
              <div className="text-center mb-6">
                 <FontAwesomeIcon icon={faCalendarCheck} className="text-4xl text-bio-verde mb-3" />
                 <h3 className="font-eras text-2xl font-bold text-gray-800">{selectedDate.toLocaleDateString(i18n.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
              </div>
              {selectedEvent ? (
                 <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-bio-verde mb-6"><h4 className="font-bold text-bio-verde text-lg">{selectedEvent.title}</h4><p className="text-sm text-gray-600 capitalize">{selectedEvent.type}</p></div>
              ) : (<p className="text-gray-600 text-center mb-6 italic">{t('calendar.no_event')}</p>)}
              <button onClick={handleReserve} className="w-full bg-[#25D366] text-white font-bold py-3 rounded-sm hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2">
                 <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                 {selectedEvent ? t('calendar.btn_reserve') : t('calendar.inquire_date')}
              </button>
           </div>
        </div>
      )}
    </div>
  );
};
