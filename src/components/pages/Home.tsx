import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Reveal, TextReveal, ParallaxImage } from '../ui/Animations';

// Updated Images to include day/mixed scenes
const IMAGES = {
  hero_bg: "https://images.unsplash.com/photo-1758506971661-33fe941ca1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Day sprint
  community_1: "https://images.unsplash.com/photo-1760706112663-1b3932597980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Asian Crew
  community_2: "https://images.unsplash.com/photo-1697116365744-84cf1363e71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Group Runners
  sweat_detail: "https://images.unsplash.com/photo-1646743933133-68d5fcbe73f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Sweat face
  shoes_urban: "https://images.unsplash.com/photo-1543781485-3d319cf45cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Worn shoes
  neon_reflect: "https://images.unsplash.com/photo-1700180228023-d766fdfd040c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Puddle
  stretch_crew: "https://images.unsplash.com/photo-1748142583153-a59eca89315c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" // Crew stretching
};

function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
}

const Hero = () => {
  const { scrollY } = useScroll();
  const { x, y } = useMousePosition();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  // Smoother mouse interaction
  const moveX = useSpring(useTransform(new MotionValue(x), [0, window.innerWidth], [-30, 30]), { stiffness: 30, damping: 30 });
  const moveY = useSpring(useTransform(new MotionValue(y), [0, window.innerHeight], [-30, 30]), { stiffness: 30, damping: 30 });
  const moveXInverse = useSpring(useTransform(new MotionValue(x), [0, window.innerWidth], [30, -30]), { stiffness: 30, damping: 30 });
  const moveYInverse = useSpring(useTransform(new MotionValue(y), [0, window.innerHeight], [30, -30]), { stiffness: 30, damping: 30 });

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center perspective-1000">
      {/* Background Textures - Now using a Day/Mixed shot for broader appeal */}
      <motion.div 
        style={{ x: moveXInverse, y: moveYInverse, scale: 1.15 }}
        className="absolute inset-0 opacity-50"
      >
         <img src={IMAGES.hero_bg} className="w-full h-full object-cover grayscale contrast-125" alt="texture" />
         <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </motion.div>
      
      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-left relative mix-blend-difference w-full"
        >
          <motion.h1 
            style={{ x: moveX, y: moveY }}
            className="text-3xl md:text-7xl lg:text-9xl leading-[0.8] font-['Syne'] font-black text-white tracking-tighter select-none uppercase italic drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            RUN TOGETHER.<br/>SWEAT TOGETHER.
          </motion.h1>
        </motion.div>
      </div>


      <div className="absolute bottom-10 left-10 flex items-center gap-4">
        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        <span className="font-['Syne'] text-xs uppercase tracking-widest text-white/60">Scroll to join the crew</span>
      </div>
    </section>
  );
};

const Marquee = ({ text, direction = 1 }: { text: string, direction?: number }) => {
  return (
    <div className="relative flex overflow-hidden py-12 bg-white text-black border-y border-black transform -skew-y-2 my-12 z-20">
      <motion.div 
        className="whitespace-nowrap flex gap-12 items-center"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-4xl md:text-8xl font-['Syne'] font-black uppercase tracking-tighter italic opacity-90">
            {text} <span className="inline-block w-12 h-1 bg-black align-middle mx-4" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Manifesto = () => {
  return (
    <section className="min-h-screen bg-black py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="col-span-1 md:col-span-4 md:sticky md:top-32">
             <Reveal delay={0.2}>
               <h3 className="text-white/40 font-['Syne'] uppercase tracking-widest text-sm mb-4">The Creed</h3>
               <div className="w-full h-[1px] bg-white/20 mb-8" />
               <p className="font-['Syne'] text-xl text-white leading-relaxed">
                 Sun up or sun down. Rain or shine. Concrete is our sanctuary.
               </p>
             </Reveal>
          </div>
          
          <div className="col-span-1 md:col-span-8">
            <div className="mb-8">
              <TextReveal 
                text="WE ARE THE KEEPERS OF THE PACE." 
                className="text-5xl md:text-7xl font-['Pirata_One'] text-white leading-[1]"
              />
            </div>
            
            <Reveal delay={0.4}>
              <p className="text-2xl md:text-4xl font-['Syne'] font-bold uppercase text-zinc-500 leading-[1.1] mb-12 ml-0 md:ml-12">
                NOT JUST A NIGHT CREW. <br/> WE OWN EVERY HOUR.
              </p>
            </Reveal>

            <div className="mb-12">
               <TextReveal 
                  text="PAIN IS TEMPORARY. GLORY IS FOREVER."
                  className="text-5xl md:text-7xl font-['Pirata_One'] text-white leading-[1]"
               />
            </div>

            <Reveal delay={0.6}>
              <div className="flex gap-8 mt-24 items-center group cursor-pointer hover:translate-x-4 transition-transform duration-300">
                <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <span className="text-2xl font-['Syne'] uppercase text-white">Join the movement</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gradient-to-b from-zinc-800 to-transparent rounded-full blur-3xl opacity-10 animate-pulse" />
    </section>
  );
};

const FeatureCard = ({ title, img, index }: { title: string, img: string, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative h-[60vh] w-full overflow-hidden border border-white/10 bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-20 pointer-events-none" />
      
      <ParallaxImage src={img} alt={title} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-30">
        <div className="flex justify-between items-end border-t border-white/20 pt-6 overflow-hidden">
          <motion.h3 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-['Syne'] font-bold uppercase text-white tracking-tighter"
          >
            {title}
          </motion.h3>
          <span className="font-['Syne'] text-xs text-white/60 uppercase tracking-widest">0{index + 1} // Explore</span>
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-16 flex justify-between items-end">
          <div className="overflow-hidden">
            <TextReveal text="VISUALS" className="text-5xl md:text-9xl font-['Syne'] font-black uppercase text-white leading-none tracking-tighter" />
          </div>
          <div className="hidden md:block font-['Syne'] text-white/50 text-right max-w-xs text-sm">
             <Reveal delay={0.3}>
              <p>RAW ENERGY. <br/> CAPTURED ON THE STREETS.</p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard title="Night Crawlers" img={IMAGES.community_1} index={0} />
          <div className="md:col-span-2">
            <FeatureCard title="Day Breakers" img={IMAGES.stretch_crew} index={1} />
          </div>
          <div className="md:col-span-2">
             <FeatureCard title="Crew Love" img={IMAGES.community_2} index={2} />
          </div>
          <FeatureCard title="Impact" img={IMAGES.shoes_urban} index={3} />
        </div>
      </div>
    </section>
  );
};

const LiquidMetalSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden flex items-center justify-center perspective-1000">
      <div className="absolute inset-0">
        <ParallaxImage src={IMAGES.neon_reflect} alt="background" className="w-full h-full opacity-30 mix-blend-difference grayscale" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <h2 className="text-black text-4xl md:text-8xl font-['Syne'] font-black uppercase tracking-tighter mb-8">
            Forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-500 to-black">Iron</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="max-w-2xl mx-auto text-black/70 font-['Syne'] text-lg md:text-xl leading-relaxed mb-12 text-left">
            Join the movement. Exclusive drops, coordinates, and a community that thrives in the streets.
          </p>
        </Reveal>
        
        <Reveal delay={0.4}>
          <Button className="bg-black text-white hover:bg-zinc-800 text-base px-8 py-6 md:text-xl md:px-12 md:py-8 rounded-none font-['Syne'] uppercase tracking-widest hover:scale-105 transition-transform duration-300">
            Join The Movement
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee text="#DONOTFINISH // #DONOTFINISH // #DONOTFINISH // #DONOTFINISH // #DONOTFINISH // #DONOTFINISH // " direction={1} />
      <Manifesto />
      <Gallery />
      <Marquee text="ONE CREW // ONE PACE // ONE MOVEMENT // ONE CREW // ONE PACE // ONE MOVEMENT // " direction={-1} />
      <LiquidMetalSection />
    </>
  );
};

export default Home;
