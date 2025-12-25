import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Calendar = () => {
  const { t, i18n } = useTranslation();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Eventos Ejemplo
  const events = [
    { day: 15, title: t('calendar.event_1'), type: "taller" },
    { day: 22, title: t('calendar.event_2'), type: "retiro" },
    { day: 28, title: t('calendar.event_3'), type: "charla" }
  ];

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  // Obtener nombres de mes desde i18n (devuelve objeto/array, hay que castear)
  const monthNames = t('calendar.month_names', { returnObjects: true }) as string[];

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">{t('calendar.title')}</h1>
         <p className="font-cambria mt-2 opacity-90">{t('calendar.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 mt-12 max-w-5xl">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-sm shadow-sm">
           <button onClick={() => changeMonth(-1)} className="text-bio-verde hover:text-bio-amarillo text-2xl px-4"><FontAwesomeIcon icon={faChevronLeft} /></button>
           <h2 className="font-eras text-2xl font-bold text-gray-800">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
           </h2>
           <button onClick={() => changeMonth(1)} className="text-bio-verde hover:text-bio-amarillo text-2xl px-4"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>

        <div className="bg-white rounded-sm shadow-lg overflow-hidden">
           <div className="grid grid-cols-7 bg-bio-verde text-white text-center py-3 font-bold uppercase text-sm">
              <div>Dom</div><div>Lun</div><div>Mar</div><div>Mié</div><div>Jue</div><div>Vie</div><div>Sáb</div>
           </div>
           <div className="grid grid-cols-7 border-l border-t border-gray-200">
              {Array.from({ length: firstDay }).map((_, i) => (
                 <div key={`empty-${i}`} className="h-32 border-r border-b border-gray-200 bg-gray-50"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                 const day = i + 1;
                 const evt = events.find(e => e.day === day);
                 return (
                    <div key={day} className="h-32 border-r border-b border-gray-200 p-2 relative group hover:bg-yellow-50 transition-colors">
                       <span className="font-eras font-bold text-gray-400">{day}</span>
                       {evt && (
                          <div className={`mt-2 p-2 rounded-sm text-xs font-bold text-white cursor-pointer shadow-sm ${evt.type === 'retiro' ? 'bg-bio-verde' : evt.type === 'taller' ? 'bg-bio-amarillo text-bio-verde' : 'bg-blue-400'}`}>
                             {evt.title}
                          </div>
                       )}
                    </div>
                 );
              })}
           </div>
        </div>
        <div className="mt-8 flex gap-6 justify-center text-sm font-cambria">
           <div className="flex items-center gap-2"><span className="w-3 h-3 bg-bio-verde rounded-full"></span> {t('calendar.legend_retreat')}</div>
           <div className="flex items-center gap-2"><span className="w-3 h-3 bg-bio-amarillo rounded-full"></span> {t('calendar.legend_workshop')}</div>
           <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-400 rounded-full"></span> {t('calendar.legend_virtual')}</div>
        </div>
      </div>
    </div>
  );
};
