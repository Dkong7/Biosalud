import matter from 'gray-matter';

export const getPosts = () => {
  // CORRECCIÓN: Usamos la nueva sintaxis 'query' en lugar de 'as'
  const modules = import.meta.glob('../data/posts/*.md', { 
    eager: true, 
    query: '?raw', 
    import: 'default' 
  });
  
  const posts = Object.keys(modules).map((fileName) => {
    // Forzamos el tipo a string porque sabemos que es texto crudo
    const fileContent = modules[fileName] as unknown as string;
    const { data, content } = matter(fileContent);
    
    const slug = fileName.split('/').pop()?.replace('.md', '') || '';

    return {
      id: slug,
      ...data, 
      content, 
    };
  });

  return posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostById = (id: string) => {
  const posts = getPosts();
  return posts.find(post => post.id === id);
};
