import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTshirt, faHeadphones, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Shop = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: t('shop.prod_1_title'),
      type: "Libro",
      price: 50000,
      icon: faBook,
      desc: t('shop.prod_1_desc')
    },
    {
      id: 2,
      title: t('shop.prod_2_title'),
      type: "PDF",
      price: 25000,
      icon: faBook,
      desc: t('shop.prod_2_desc')
    },
    {
      id: 3,
      title: t('shop.prod_3_title'),
      type: "Ropa",
      price: 45000,
      icon: faTshirt,
      desc: t('shop.prod_3_desc')
    },
    {
      id: 4,
      title: t('shop.prod_4_title'),
      type: "Audio",
      price: 30000,
      icon: faHeadphones,
      desc: t('shop.prod_4_desc')
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      <div className="bg-bio-verde text-white py-16 text-center">
         <h1 className="font-eras text-4xl font-bold">{t('navbar.shop')}</h1>
         <p className="font-cambria mt-2 opacity-90">{t('shop.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((prod) => (
             <div key={prod.id} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                <div className="h-64 bg-gray-100 flex items-center justify-center text-bio-verde/40">
                   <FontAwesomeIcon icon={prod.icon} className="text-6xl" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="font-eras text-xl font-bold text-bio-verde mb-2">{prod.title}</h3>
                   <p className="text-gray-600 text-sm mb-6 flex-1">{prod.desc}</p>
                   <div className="mt-auto">
                     <p className="font-eras text-2xl font-bold text-gray-800 mb-4">{formatPrice(prod.price)}</p>
                     <button className="w-full bg-[#009ee3] text-white font-bold py-3 rounded-sm hover:bg-[#007eb5] transition-colors flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {t('shop.buy_btn')}
                     </button>
                   </div>
                </div>
             </div>
           ))}
        </div>
        <div className="mt-16 text-center p-8 bg-white rounded-sm border-l-4 border-bio-verde shadow-sm max-w-2xl mx-auto">
           <p className="text-gray-600 font-cambria">{t('shop.payment_note')}</p>
        </div>
      </div>
    </div>
  );
};
