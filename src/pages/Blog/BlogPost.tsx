import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { getPostById } from '../../utils/posts';
import Markdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  
  const post: any = getPostById(id || "");

  const getLoc = (field: string) => {
    if(!post) return "";
    // Prioridad: Idioma actual -> Español -> Campo base
    return post[`${field}_${lang}`] || post[`${field}`] || post[`${field}_es`] || "";
  };

  if (!post) {
    return <div className="p-20 text-center font-eras text-xl">Artículo no encontrado. Vuelve al blog.</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen pb-20 animate-fadeIn">
       
       <div className="h-[50vh] relative overflow-hidden bg-black">
          <img src={post.image} alt={getLoc('title')} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
             
             {post.tags && (
                <div className="flex gap-2 mb-4">
                   {post.tags.map((tag: string) => (
                      <span key={tag} className="bg-bio-amarillo text-bio-verde text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                         {tag}
                      </span>
                   ))}
                </div>
             )}

             <h1 className="font-eras text-3xl md:text-5xl text-white font-bold mb-6 drop-shadow-lg max-w-4xl leading-tight">
                {getLoc('title')}
             </h1>
             <div className="flex gap-6 text-white/80 text-sm font-bold uppercase tracking-wide">
                <span><FontAwesomeIcon icon={faUser} className="mr-2" /> {post.author}</span>
                <span><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> {new Date(post.date).toLocaleDateString()}</span>
             </div>
          </div>
       </div>

       <div className="container mx-auto px-6 py-12">
          <button 
             onClick={() => navigate(-1)} 
             className="mb-8 text-gray-500 hover:text-bio-verde font-bold flex items-center gap-2 transition-colors"
          >
             <FontAwesomeIcon icon={faArrowLeft} /> Volver
          </button>

          <article className="max-w-3xl mx-auto bg-white prose prose-lg prose-green">
             {/* RENDERIZADOR DE MARKDOWN (ESTO HACE LA MAGIA DE WORDPRESS) */}
             <Markdown>
               {getLoc('body') || getLoc('content')}
             </Markdown>
             
             <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-2 text-gray-500 text-sm">
                <FontAwesomeIcon icon={faTag} />
                <span>Autor: <strong>{post.author}</strong></span>
             </div>
          </article>
       </div>

    </div>
  );
};
