import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ParallaxImage } from '../ui/Animations';
import { useIsMobile } from '../ui/use-mobile';

// SEO: les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik
interface Service {
  title: string;
  description: string;
  img: string;
  altText: string;
  titleAttr: string;
}

const SERVICES: Service[] = [
  {
    title: "Swimming",
    description: "Private coaching for open water & competitive swimming. Master buoyancy, stroke efficiency, and speed.",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    altText: "Les privat renang Bandung - private swimming coaching Indonesia",
    titleAttr: "Les privat renang Bandung Indonesia"
  },
  {
    title: "Padel & Tennis",
    description: "1-on-1 court sessions focusing on explosive agility, match tactics, and stroke mechanics.",
    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    altText: "Les privat padel dan les privat tenis Bandung Indonesia",
    titleAttr: "Les privat padel, les privat tenis Bandung"
  },
  {
    title: "Football & Futsal",
    description: "Private training for technique, tactical awareness, and match fitness. From fundamentals to advanced play.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    altText: "Les privat bola dan les privat futsal Bandung Indonesia",
    titleAttr: "Les privat bola, les privat futsal Bandung"
  },
  {
    title: "Athletic",
    description: "Custom training for running, sprinting & track events. Gait analysis, speed work, and endurance building.",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    altText: "Les privat lari dan les privat atletik Bandung Indonesia",
    titleAttr: "Les privat lari, les privat atletik Bandung"
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-20%" });
  const isMobile = useIsMobile();
  
  const imageClassName = isMobile 
    ? `w-full h-full ${isInView ? 'grayscale-0' : 'grayscale'} transition-all duration-700 object-cover`
    : 'w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover';
  
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative h-[60vh] overflow-hidden border border-white/10 bg-zinc-900"
      role="listitem"
    >
      <ParallaxImage 
        src={service.img} 
        alt={service.altText} 
        className={imageClassName} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" aria-hidden="true" />
      
      <div className="absolute bottom-0 left-0 p-8 z-20">
        <div className="overflow-hidden">
          <h3 
            className="text-3xl md:text-5xl font-['Syne'] font-bold uppercase mb-4 italic text-white drop-shadow-lg transform translate-y-0 transition-transform duration-500"
            title={service.titleAttr}
          >
            {service.title}
          </h3>
        </div>
        <p className="text-sm md:text-base font-['Syne'] text-zinc-300 max-w-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {service.description}
        </p>
      </div>
      
      <div className="absolute top-8 right-8 z-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
        <span className="text-4xl font-['Pirata_One'] text-white">0{index + 1}</span>
      </div>
    </motion.article>
  );
};

const Services = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white" aria-label="Les privat olahraga Bandung Indonesia">
      {/* SEO: les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik */}
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
           <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none">
             OUR CRAFT
           </h1>
           <p className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm">
             PRIVATE SPORTS COACHING FOR EVERYONE. ANY SPORT. ANY LEVEL.
           </p>
           {/* Hidden SEO content */}
           <p className="sr-only">
             Les privat olahraga di Bandung Indonesia. Tersedia les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, dan les privat atletik. Pelatih profesional untuk semua level.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32" role="list" aria-label="Daftar layanan private sports training">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        <div className="mt-32 max-w-4xl mx-auto p-12 bg-[#111] border border-white/10 text-center">
          <h3 className="text-4xl md:text-6xl font-['Pirata_One'] text-white mb-6 uppercase">READY TO EVOLVE?</h3>
          <p className="font-['Syne'] text-zinc-400 mb-8 text-lg">Expert coaching tailored to your physiology and goals. No templates. Only results.</p>
          <button 
            className="bg-white text-black px-12 py-4 font-['Syne'] font-bold uppercase tracking-widest hover:bg-zinc-200 text-xl"
            aria-label="Booking les privat olahraga Bandung"
            title="Daftar les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik Bandung"
          >
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
