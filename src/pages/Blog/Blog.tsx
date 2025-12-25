import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '../../data/blogData';

export const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f8f9f3] min-h-screen pb-20 animate-fadeIn">
      
      {/* HEADER */}
      <div className="bg-bio-verde text-white py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <h1 className="font-eras text-4xl md:text-5xl font-bold relative z-10">{t('navbar.blog')}</h1>
         <p className="font-cambria mt-4 text-xl opacity-90 relative z-10">Conocimiento para la Vida Plena</p>
      </div>

      <div className="container mx-auto px-6 mt-12">
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
               <div key={post.id} className="bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
                  
                  {/* Imagen */}
                  <NavLink to={`/blog/${post.id}`} className="h-56 overflow-hidden relative cursor-pointer">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute top-4 left-4 bg-bio-amarillo text-bio-verde text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                        {post.category}
                     </div>
                  </NavLink>

                  <div className="p-6 flex-1 flex flex-col">
                     <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-bold uppercase tracking-wide">
                        <span><FontAwesomeIcon icon={faUser} className="mr-1" /> {post.author}</span>
                        <span><FontAwesomeIcon icon={faClock} className="mr-1" /> {post.readTime}</span>
                     </div>

                     <NavLink to={`/blog/${post.id}`} className="block">
                        <h3 className="font-eras text-xl font-bold text-gray-800 mb-3 group-hover:text-bio-verde transition-colors line-clamp-2">
                           {post.title}
                        </h3>
                     </NavLink>

                     <p className="font-cambria text-gray-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                     </p>

                     <NavLink 
                        to={`/blog/${post.id}`}
                        className="text-bio-verde font-bold text-sm uppercase tracking-wide border-t border-gray-100 pt-4 flex justify-between items-center hover:text-bio-amarillo transition-colors"
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
