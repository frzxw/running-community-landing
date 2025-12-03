import React from 'react';
import { motion } from 'motion/react';

const Coach = () => {
  const coaches = [
    { 
        name: "Alex", 
        role: "Head Coach", 
        specialty: "Marathon & Triathlon",
        experience: "10+ Years",
        img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
    },
    { 
        name: "Sarah", 
        role: "Strength Coach", 
        specialty: "CrossFit & Conditioning", 
        experience: "8 Years",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
    },
    { 
        name: "Marcus", 
        role: "Performance Coach", 
        specialty: "Swimming & Recovery", 
        experience: "6 Years",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
    },
    { 
        name: "Jessica", 
        role: "Yoga Instructor", 
        specialty: "Flexibility & Mindfulness", 
        experience: "12 Years",
        img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-16 text-center leading-none">
          THE COACHES
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4 border border-white/10 relative">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-10" />
                <img src={coach.img} alt={coach.name} className="w-full h-[400px] object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
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
            </motion.div>
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

