import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTshirt, faHeadphones, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Shop = () => {
  const { t } = useTranslation();

  // Productos Placeholder (Simulando lo que se cargará del CMS)
  const products = [
    {
      id: 1,
      title: "Manual de Biosalud",
      type: "Libro Físico",
      price: 50000,
      icon: faBook,
      desc: "La guía fundamental del Dr. Atom Inoe para la autogestión de la salud."
    },
    {
      id: 2,
      title: "El Agua de la Vida",
      type: "Libro Digital (PDF)",
      price: 25000,
      icon: faBook,
      desc: "Tratado completo sobre la Urosalud y sus beneficios inmunológicos."
    },
    {
      id: 3,
      title: "Camiseta Oficial",
      type: "Ropa",
      price: 45000,
      icon: faTshirt,
      desc: "Algodón orgánico. Diseño: 'Recupera tu Vitalidad Naturalmente'."
    },
    {
      id: 4,
      title: "Conferencias Maestras",
      type: "Audio Libro",
      price: 30000,
      icon: faHeadphones,
      desc: "Recopilación de charlas sobre el desapego y la muerte natural."
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      {/* Header */}
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">{t('navbar.shop')}</h1>
         <p className="font-cambria mt-2 opacity-90">Libros, Audiolibros y Productos Oficiales</p>
      </div>

      <div className="container mx-auto px-6 mt-12">
        
        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((prod) => (
             <div key={prod.id} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                {/* Imagen Placeholder */}
                <div className="h-64 bg-gray-100 flex items-center justify-center text-bio-verde/40">
                   <FontAwesomeIcon icon={prod.icon} className="text-6xl" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                   <span className="text-xs font-bold text-bio-amarillo uppercase tracking-wider mb-2">{prod.type}</span>
                   <h3 className="font-eras text-xl font-bold text-bio-verde mb-2">{prod.title}</h3>
                   <p className="text-gray-600 text-sm mb-6 flex-1">{prod.desc}</p>
                   
                   <div className="mt-auto">
                     <p className="font-eras text-2xl font-bold text-gray-800 mb-4">{formatPrice(prod.price)}</p>
                     
                     {/* Botón MercadoPago Simulado */}
                     <button className="w-full bg-[#009ee3] text-white font-bold py-3 rounded-sm hover:bg-[#007eb5] transition-colors flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Pagar con MercadoPago
                     </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center p-8 bg-white rounded-sm border-l-4 border-bio-verde shadow-sm max-w-2xl mx-auto">
           <h4 className="font-eras font-bold text-lg mb-2">Nota sobre los Pagos</h4>
           <p className="text-gray-600 font-cambria">
             Utilizamos <strong>MercadoPago</strong> para garantizar la seguridad de tu transacción en Colombia. 
             Aceptamos PSE, Tarjetas de Crédito y Efecty.
           </p>
        </div>

      </div>
    </div>
  );
};
