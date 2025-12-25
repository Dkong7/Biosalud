import matter from 'gray-matter';

// Esta función mágica busca todos los archivos .md en la carpeta de posts
export const getPosts = () => {
  const modules = import.meta.glob('../data/posts/*.md', { eager: true, as: 'raw' });
  
  const posts = Object.keys(modules).map((fileName) => {
    const fileContent = modules[fileName];
    const { data, content } = matter(fileContent);
    
    // Limpiamos el nombre del archivo para usarlo como ID (slug)
    const slug = fileName.split('/').pop()?.replace('.md', '') || '';

    return {
      id: slug,
      ...data, // Aquí vienen título, fecha, autor, imagen, tags
      content, // El cuerpo del texto
    };
  });

  // Ordenar por fecha (el más nuevo primero)
  return posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostById = (id: string) => {
  const posts = getPosts();
  return posts.find(post => post.id === id);
};
