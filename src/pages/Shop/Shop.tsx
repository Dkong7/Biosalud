import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import shopData from '../../data/shop_db.json';

export const Shop = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const getLoc = (item: any, field: string) => {
    return item[`${field}_${lang}`] || item[`${field}_es`] || "";
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
  };

  const handleBuy = (link: string) => {
    if(link) window.open(link, '_blank');
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <h1 className="font-eras text-4xl font-bold relative z-10">{t('navbar.shop')}</h1>
         <p className="font-cambria mt-2 opacity-90 relative z-10">{t('shop.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 mt-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {shopData.products.map((prod: any) => (
             <div key={prod.id} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
                
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                   {/* Si hay imagen real, úsala. Si no, placeholder */}
                   {prod.image ? (
                      <img src={prod.image} alt={getLoc(prod, 'title')} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                   ) : (
                      <div className="text-gray-300 font-bold">Sin Imagen</div>
                   )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="font-eras text-xl font-bold text-bio-verde mb-2">{getLoc(prod, 'title')}</h3>
                   <p className="text-gray-600 text-sm mb-6 flex-1 font-cambria">{getLoc(prod, 'desc')}</p>
                   
                   <div className="mt-auto pt-4 border-t border-gray-100">
                     <p className="font-eras text-2xl font-bold text-gray-800 mb-4">{formatPrice(prod.price)}</p>
                     
                     <button 
                        onClick={() => handleBuy(prod.link)}
                        className="w-full bg-[#009ee3] text-white font-bold py-3 rounded-sm hover:bg-[#007eb5] transition-colors flex items-center justify-center gap-2 shadow-sm"
                     >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {t('shop.buy_btn')}
                     </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
           <div className="bg-white p-8 rounded-sm border-l-4 border-[#009ee3] shadow-sm">
              <p className="text-gray-600 font-cambria text-sm">
                {t('shop.payment_note')}
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};
