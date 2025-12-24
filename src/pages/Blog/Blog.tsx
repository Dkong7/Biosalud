import { useTranslation } from 'react-i18next';

export const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">{t('blog.title')}</h1>
      </div>
      
      <div className="container mx-auto px-6 py-16 text-center text-gray-500">
         <h2 className="text-2xl font-eras mb-4">Próximamente</h2>
         <p>Aquí encontrarás artículos sobre salud, nutrición y filosofía Biosalud.</p>
         {/* Aquí se implementará la lectura de archivos .md más adelante */}
      </div>
    </div>
  );
};
