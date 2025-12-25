import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import blogData from '../../data/blog_db.json'; // IMPORTAMOS EL JSON EDITABLE

export const Blog = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0]; // 'es', 'en', 'ja'

  // Función auxiliar para obtener el texto en el idioma correcto
  const getLoc = (item: any, field: string) => {
    // Intenta obtener field_es, field_en, etc. Si no existe, usa español por defecto.
    return item[`${field}_${lang}`] || item[`${field}_es`] || "";
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden mb-12">
         <div className="absolute inset-0 opacity-10"></div>
         <h1 className="font-eras text-4xl md:text-5xl font-bold relative z-10">{t('navbar.blog')}</h1>
         <p className="font-cambria mt-4 text-xl opacity-90 relative z-10">{t('blog.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
         
         <div className="flex flex-col gap-8">
            {blogData.posts.map((post: any) => (
               <div key={post.id} className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row group">
                  
                  {/* IMAGEN */}
                  <NavLink to={`/blog/${post.id}`} className="md:w-5/12 h-64 md:h-auto overflow-hidden relative cursor-pointer shrink-0">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                     <img src={post.image} alt={getLoc(post, 'title')} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4 bg-bio-amarillo text-bio-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                        {post.category}
                     </div>
                  </NavLink>

                  {/* CONTENIDO */}
                  <div className="p-8 flex flex-col justify-center flex-1">
                     <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-bold uppercase tracking-wide">
                        <span><FontAwesomeIcon icon={faUser} className="mr-1" /> {post.author}</span>
                        <span><FontAwesomeIcon icon={faClock} className="mr-1" /> {post.date}</span>
                     </div>

                     <NavLink to={`/blog/${post.id}`} className="block">
                        <h3 className="font-eras text-2xl font-bold text-gray-800 mb-3 group-hover:text-bio-verde transition-colors leading-tight">
                           {getLoc(post, 'title')}
                        </h3>
                     </NavLink>

                     <div className="font-cambria text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed" dangerouslySetInnerHTML={{__html: getLoc(post, 'excerpt')}}></div>

                     <NavLink 
                        to={`/blog/${post.id}`}
                        className="text-bio-verde font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:text-bio-amarillo transition-colors self-start"
                     >
                        {t('blog.read_more')} <FontAwesomeIcon icon={faArrowRight} />
                     </NavLink>
                  </div>
               </div>
            ))}
         </div>

      </div>
    </div>
  );
};
