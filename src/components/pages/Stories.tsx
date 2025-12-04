import { useRef } from 'react';
import { useInView } from 'motion/react';
import { useIsMobile } from '../ui/use-mobile';

// Export ARTICLES and Article interface for use in StoryDetail
export interface Article {
  category: string;
  date: string;
  title: string;
  description: string;
  img: string;
  offset: boolean;
  slug: string;
}

export const ARTICLES: Article[] = [
  {
    category: "Editorials",
    date: "Dec 02, 2025",
    title: "Why We Run: The Jakarta Chapter",
    description: "In the heat of the city, between the traffic and the noise, a silence is found. We explore the psychological impact of urban running in one of the world's busiest metropolises.",
    img: "https://images.unsplash.com/photo-1748142583153-a59eca89315c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    offset: false,
    slug: "why-we-run-jakarta-chapter"
  },
  {
    category: "Race Recap",
    date: "Nov 28, 2025",
    title: "Breaking The Wall: Borobudur Marathon",
    description: "26.2 miles of pure agony and ecstasy. Our crew took on the challenge and brought home new PBs and broken toenails.",
    img: "https://images.unsplash.com/photo-1646743933133-68d5fcbe73f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    offset: true,
    slug: "breaking-the-wall-borobudur-marathon"
  }
];

const ArticleCard = ({ article, onNavigate }: { article: Article; onNavigate: (slug: string) => void }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-20%" });
  const isMobile = useIsMobile();
  
  const imageClassName = isMobile 
    ? `w-full h-full object-cover ${isInView ? 'grayscale-0 scale-105' : 'grayscale'} transition-all duration-700`
    : 'w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700';
  
  return (
    <article 
      ref={cardRef} 
      className={`group cursor-pointer ${article.offset ? 'md:mt-32' : ''}`}
      onClick={() => onNavigate(article.slug)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNavigate(article.slug);
        }
      }}
      aria-label={`Read article: ${article.title}`}
    >
      <div className="aspect-[4/3] overflow-hidden mb-6">
        <img src={article.img} className={imageClassName} alt={article.title} />
      </div>
      <div className="flex gap-4 text-xs font-['Syne'] uppercase tracking-widest text-zinc-500 mb-3">
        <span>{article.category}</span>
        <span>//</span>
        <span>{article.date}</span>
      </div>
      <h2 className="text-3xl font-['Pirata_One'] mb-4 group-hover:underline decoration-1 underline-offset-4">
        {article.title}
      </h2>
      <p className="font-['Syne'] text-zinc-400 leading-relaxed line-clamp-3">
        {article.description}
      </p>
    </article>
  );
};

const Stories = ({ setPage }: { setPage: (page: string) => void }) => {
  const handleNavigate = (slug: string) => {
    setPage(`stories/${slug}`);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
         <div className="mb-16 text-center">
           <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none">
             STORIES
           </h1>
           <p className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm">
             Tales from the streets. Voices from the crew.
           </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {ARTICLES.map((article, i) => (
             <ArticleCard key={i} article={article} onNavigate={handleNavigate} />
           ))}
         </div>
      </div>
    </div>
  );
};

export default Stories;
