import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useIsMobile } from '../ui/use-mobile';

interface Coach {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  img: string;
  altText: string;
}

const CoachCard = ({ coach, index }: { coach: Coach; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-20%" });
  const isMobile = useIsMobile();
  
  const imageClassName = isMobile 
    ? `w-full h-[400px] object-cover ${isInView ? 'grayscale-0 scale-105' : 'grayscale'} transition-all duration-500`
    : 'w-full h-[400px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500';
  
  return (
    <motion.article 
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      role="listitem"
    >
      <div className="overflow-hidden mb-4 border border-white/10 relative">
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-10" aria-hidden="true" />
        <img 
          src={coach.img} 
          alt={coach.altText} 
          title={`${coach.name} - ${coach.specialty} Bandung`}
          className={imageClassName}
          loading="lazy"
          decoding="async"
          width={1080}
          height={720}
        />
      </div>
      <h3 className="text-2xl font-['Syne'] font-bold uppercase">{coach.name}</h3>
      <p className="text-sm font-['Syne'] text-white/80 uppercase tracking-widest mb-1">{coach.role}</p>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-xs font-['Syne'] text-zinc-500 uppercase tracking-widest">
          {coach.specialty}
        </p>
        <p className="text-xs font-['Syne'] text-zinc-500 uppercase tracking-widest">
          {coach.experience}
        </p>
      </div>
    </motion.article>
  );
};

const Coach = () => {
  // SEO: les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik
  const coaches = [
    { 
        name: "Rina", 
        role: "Swimming Coach", 
        specialty: "Les Privat Renang",
        experience: "8+ Years",
        img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        altText: "Pelatih les privat renang Bandung Indonesia"
    },
    { 
        name: "Dimas", 
        role: "Racket Sports Coach", 
        specialty: "Les Privat Padel & Tenis", 
        experience: "10 Years",
        img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        altText: "Pelatih les privat padel dan les privat tenis Bandung Indonesia"
    },
    { 
        name: "Arif", 
        role: "Football Coach", 
        specialty: "Les Privat Bola & Futsal", 
        experience: "12 Years",
        img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        altText: "Pelatih les privat bola dan les privat futsal Bandung Indonesia"
    },
    { 
        name: "Santi", 
        role: "Athletic Coach", 
        specialty: "Les Privat Lari & Atletik", 
        experience: "7 Years",
        img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        altText: "Pelatih les privat lari dan les privat atletik Bandung Indonesia"
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white" aria-label="Pelatih les privat olahraga Bandung Indonesia">
      {/* SEO: les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik */}
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none">
            THE COACHES
          </h1>
          <p className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm">
            Elevate your game. Any sport. Any level.
          </p>
          {/* Hidden SEO content */}
          <p className="sr-only">
            Tim pelatih profesional Runtastic Bandung untuk les privat olahraga. Tersedia pelatih les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, dan les privat atletik. Pelatih berpengalaman di Bandung Indonesia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Daftar pelatih les privat olahraga Bandung">
          {coaches.map((coach, i) => (
            <CoachCard key={i} coach={coach} index={i} />
          ))}
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-2xl font-['Pirata_One'] text-white/80 leading-relaxed">
            "ELEVATE YOUR GAME. ANY SPORT. ANY LEVEL. WE BUILD CHAMPIONS."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coach;

