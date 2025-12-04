import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useIsMobile } from '../ui/use-mobile';

interface CrewMember {
  name: string;
  role: string;
  img: string;
}

const CrewCard = ({ member, index }: { member: CrewMember; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-20%" });
  const isMobile = useIsMobile();
  
  const imageClassName = isMobile 
    ? `w-full h-[400px] object-cover ${isInView ? 'grayscale-0 scale-105' : 'grayscale'} transition-all duration-500`
    : 'w-full h-[400px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500';
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden mb-4 border border-white/10 relative">
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-10" />
        <img src={member.img} alt={member.name} className={imageClassName} />
      </div>
      <h3 className="text-2xl font-['Syne'] font-bold uppercase">{member.name}</h3>
      <p className="text-sm font-['Syne'] text-zinc-500 uppercase tracking-widest">{member.role}</p>
    </motion.div>
  );
};

const Crew = () => {
  const crewMembers = [
    { name: "Kai", role: "Pace Captain", img: "https://images.unsplash.com/photo-1624914990379-f2082e413b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { name: "Rina", role: "Community Lead", img: "https://images.unsplash.com/photo-1760706112663-1b3932597980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { name: "Dato", role: "Creative Dir.", img: "https://images.unsplash.com/photo-1591673415604-cd713be8ce57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { name: "Elena", role: "Logistics", img: "https://images.unsplash.com/photo-1762108670042-73e4d40e2eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none">
            THE CREW
          </h1>
          <p className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm">
            We are not coaches. We are pacers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {crewMembers.map((member, i) => (
            <CrewCard key={i} member={member} index={i} />
          ))}
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center">
          <p className="text-2xl font-['Pirata_One'] text-white/80 leading-relaxed">
            "WE ARE NOT COACHES. WE ARE PACERS. WE LEAD FROM THE FRONT AND PUSH FROM THE BACK."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
