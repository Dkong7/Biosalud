import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '../../data/blogData';

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div className="p-20 text-center font-eras text-xl">Artículo no encontrado</div>;
  }

  return (
    <div className="w-full bg-white min-h-screen pb-20 animate-fadeIn">
       
       {/* HERO ARTICLE */}
       <div className="h-[50vh] relative overflow-hidden bg-black">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
             <div className="mb-4">
                <span className="bg-bio-amarillo text-bio-verde text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                   {post.category}
                </span>
             </div>
             <h1 className="font-eras text-3xl md:text-5xl text-white font-bold mb-6 drop-shadow-lg max-w-4xl leading-tight">
                {post.title}
             </h1>
             <div className="flex gap-6 text-white/80 text-sm font-bold uppercase tracking-wide">
                <span><FontAwesomeIcon icon={faUser} className="mr-2" /> {post.author}</span>
                <span><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> {post.date}</span>
             </div>
          </div>
       </div>

       {/* CONTENT */}
       <div className="container mx-auto px-6 py-12">
          <button 
             onClick={() => navigate(-1)} 
             className="mb-8 text-gray-500 hover:text-bio-verde font-bold flex items-center gap-2 transition-colors"
          >
             <FontAwesomeIcon icon={faArrowLeft} /> Volver al Blog
          </button>

          <article className="max-w-3xl mx-auto bg-white">
             {/* Renderizamos HTML seguro ya que viene de nuestro propio archivo de datos confiable */}
             <div 
                className="font-cambria text-lg text-gray-800 leading-relaxed space-y-6 text-justify"
                dangerouslySetInnerHTML={{ __html: post.content }} 
             />
             
             <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-2 text-gray-500 text-sm">
                <FontAwesomeIcon icon={faTag} />
                <span>Etiquetado en: <strong>{post.category}</strong>, Biosalud, {post.author}</span>
             </div>
          </article>
       </div>

    </div>
  );
};
