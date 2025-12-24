import { useTranslation } from 'react-i18next';

export const Calendar = () => {
  const { t } = useTranslation();
  return (
    <div className='container mx-auto px-4 py-20'>
      <h1 className='text-4xl font-eras text-bio-verde mb-4'>Calendar</h1>
      <p className='text-xl font-cambria'>Contenido de la página Calendar</p>
    </div>
  );
};
