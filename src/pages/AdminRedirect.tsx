import { useEffect } from 'react';

export const AdminRedirect = () => {
  useEffect(() => {
    // Esta línea es la clave: Fuerza a salir de React y cargar el archivo estático
    window.location.href = "/admin/index.html";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-eras mb-4">Accediendo al Panel...</h2>
        <div className="w-8 h-8 border-4 border-bio-verde border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};
