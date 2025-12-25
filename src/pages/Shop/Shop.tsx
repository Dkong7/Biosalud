import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTshirt, faHeadphones, faShoppingCart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const Shop = () => {
  const { t } = useTranslation();

  // --- CONFIGURACIÓN DE PRODUCTOS ---
  // IMPORTANTE: Reemplaza las URL de 'paymentLink' con los links reales que generes en tu cuenta de Mercado Pago.
  const products = [
    {
      id: 1,
      title: t('shop.prod_1_title'), // Manual de Biosalud
      type: "Libro Físico",
      price: 50000,
      icon: faBook,
      desc: t('shop.prod_1_desc'),
      paymentLink: "https://link.mercadopago.com.co/PON_AQUI_TU_LINK_1" 
    },
    {
      id: 2,
      title: t('shop.prod_2_title'), // El Agua de la Vida
      type: "Libro Digital (PDF)",
      price: 25000,
      icon: faBook,
      desc: t('shop.prod_2_desc'),
      paymentLink: "https://link.mercadopago.com.co/PON_AQUI_TU_LINK_2"
    },
    {
      id: 3,
      title: t('shop.prod_3_title'), // Camiseta Oficial
      type: "Ropa / Merch",
      price: 45000,
      icon: faTshirt,
      desc: t('shop.prod_3_desc'),
      paymentLink: "https://link.mercadopago.com.co/PON_AQUI_TU_LINK_3"
    },
    {
      id: 4,
      title: t('shop.prod_4_title'), // Conferencias Maestras
      type: "Audio Libro",
      price: 30000,
      icon: faHeadphones,
      desc: t('shop.prod_4_desc'),
      paymentLink: "https://link.mercadopago.com.co/PON_AQUI_TU_LINK_4"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
  };

  const handleBuy = (link: string) => {
    // Abrir pasarela en nueva pestaña
    window.open(link, '_blank');
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      {/* HEADER */}
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <h1 className="font-eras text-4xl font-bold relative z-10">{t('navbar.shop')}</h1>
         <p className="font-cambria mt-2 opacity-90 relative z-10">{t('shop.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 mt-12">
        
        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((prod) => (
             <div key={prod.id} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
                
                {/* Imagen Placeholder (Icono) */}
                <div className="h-64 bg-gray-100 flex items-center justify-center text-bio-verde/40 group-hover:bg-bio-verde/5 transition-colors relative">
                   <FontAwesomeIcon icon={prod.icon} className="text-6xl transform group-hover:scale-110 transition-transform duration-500" />
                   
                   {/* Badge Tipo */}
                   <span className="absolute top-4 right-4 bg-bio-amarillo text-bio-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {prod.type}
                   </span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="font-eras text-xl font-bold text-bio-verde mb-2">{prod.title}</h3>
                   <p className="text-gray-600 text-sm mb-6 flex-1 font-cambria">{prod.desc}</p>
                   
                   <div className="mt-auto pt-4 border-t border-gray-100">
                     <p className="font-eras text-2xl font-bold text-gray-800 mb-4">{formatPrice(prod.price)}</p>
                     
                     {/* Botón MercadoPago */}
                     <button 
                        onClick={() => handleBuy(prod.paymentLink)}
                        className="w-full bg-[#009ee3] text-white font-bold py-3 rounded-sm hover:bg-[#007eb5] transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                        title="Pagar de forma segura con Mercado Pago"
                     >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {t('shop.buy_btn')}
                     </button>
                     <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Procesado por Mercado Pago</span>
                     </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Nota de Seguridad */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
           <div className="bg-white p-8 rounded-sm border-l-4 border-[#009ee3] shadow-sm">
              <h4 className="font-eras font-bold text-lg mb-2 text-gray-800">Compra 100% Segura</h4>
              <p className="text-gray-600 font-cambria text-sm">
                {t('shop.payment_note')}
                <br/>
                Aceptamos todas las tarjetas de crédito, débito (PSE) y pagos en efectivo vía Efecty.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};
