import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { getPosts } from '../../utils/posts';
import { useTranslation } from 'react-i18next';

export const Blog = () => {
  const { t, i18n } = useTranslation();
  const posts = getPosts(); // ¡Aquí cargamos los posts reales del CMS!
  const lang = i18n.language.split('-')[0];

  // Helper para obtener texto traducido o fallback a español
  const getLoc = (post: any, field: string) => {
    return post[`${field}_${lang}`] || post[`${field}`] || post[`${field}_es`] || "";
  };

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      
      {/* HEADER */}
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden mb-12">
         <div className="absolute inset-0 opacity-10"></div>
         <h1 className="font-eras text-4xl md:text-5xl font-bold relative z-10">{t('navbar.blog')}</h1>
         <p className="font-cambria mt-4 text-xl opacity-90 relative z-10">Conocimiento Vivo</p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
         
         {posts.length === 0 && (
            <div className="text-center text-gray-500 py-20">
               <p className="text-xl">No hay artículos publicados aún.</p>
               <p className="text-sm mt-2">Ve al panel de administración para crear el primero.</p>
            </div>
         )}

         <div className="flex flex-col gap-8">
            {posts.map((post: any) => (
               <div key={post.id} className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row group">
                  
                  {/* IMAGEN */}
                  <NavLink to={`/blog/${post.id}`} className="md:w-5/12 h-64 md:h-auto overflow-hidden relative cursor-pointer shrink-0">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                     <img src={post.image || "/conferencias.jpg"} alt={getLoc(post, 'title')} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     
                     {/* TAGS (Si existen) */}
                     {post.tags && post.tags.length > 0 && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                           <span className="bg-bio-amarillo text-bio-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                              {post.tags[0]}
                           </span>
                        </div>
                     )}
                  </NavLink>

                  {/* CONTENIDO */}
                  <div className="p-8 flex flex-col justify-center flex-1">
                     <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-bold uppercase tracking-wide">
                        <span><FontAwesomeIcon icon={faUser} className="mr-1" /> {post.author}</span>
                        <span><FontAwesomeIcon icon={faClock} className="mr-1" /> {new Date(post.date).toLocaleDateString()}</span>
                     </div>

                     <NavLink to={`/blog/${post.id}`} className="block">
                        <h3 className="font-eras text-2xl font-bold text-gray-800 mb-3 group-hover:text-bio-verde transition-colors leading-tight">
                           {getLoc(post, 'title')}
                        </h3>
                     </NavLink>

                     <p className="font-cambria text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {getLoc(post, 'excerpt')}
                     </p>

                     <NavLink 
                        to={`/blog/${post.id}`}
                        className="text-bio-verde font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:text-bio-amarillo transition-colors self-start"
                     >
                        Leer Artículo <FontAwesomeIcon icon={faArrowRight} />
                     </NavLink>
                  </div>
               </div>
            ))}
         </div>

      </div>
    </div>
  );
};
