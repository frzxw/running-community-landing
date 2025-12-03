import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

// Page Components
import Home from './components/pages/Home';
import Crew from './components/pages/Crew';
import Coach from './components/pages/Coach';
import Collection from './components/pages/Collection';
import Events from './components/pages/Events';
import Services from './components/pages/Services';
import Stories from './components/pages/Stories';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="scroll-smooth antialiased text-slate-200 bg-black selection:bg-white selection:text-black min-h-screen">
      {children}
    </div>
  );
};

const Navigation = ({ page, setPage }: { page: string, setPage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div 
          onClick={() => setPage('home')}
          className="text-2xl font-bold tracking-tighter font-['Syne'] text-white uppercase cursor-pointer hover:scale-105 transition-transform"
        >
          Runtastic <span className="text-xs align-top opacity-50">®</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-['Syne'] uppercase tracking-widest text-white">
          {['Crew', 'Coach', 'Collection', 'Events', 'Services', 'Stories'].map((item) => (
            <button 
              key={item} 
              onClick={() => setPage(item.toLowerCase())}
              className={`hover:line-through decoration-1 underline-offset-4 transition-all uppercase ${page === item.toLowerCase() ? 'line-through decoration-white' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 right-0 bg-black z-40 flex flex-col justify-center items-center gap-8 overflow-hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>
            {['Crew', 'Coach', 'Collection', 'Events', 'Services', 'Stories'].map((item, i) => (
              <motion.button 
                key={item} 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                onClick={() => { setPage(item.toLowerCase()); setIsOpen(false); }}
                className="text-3xl font-['Syne'] font-bold text-white uppercase tracking-widest"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <footer className="bg-black text-white py-24 px-4 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-[12vw] md:text-8xl font-['Syne'] font-black tracking-tighter leading-none italic cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setPage('home')}>
            RUNTASTIC
          </h2>
          <div className="flex gap-6">
             <a href="#" className="font-['Syne'] uppercase text-sm tracking-widest hover:text-zinc-400 transition-colors flex items-center gap-2 group">
               Instagram <span className="text-[10px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
             </a>
             <a href="#" className="font-['Syne'] uppercase text-sm tracking-widest hover:text-zinc-400 transition-colors flex items-center gap-2 group">
               TikTok <span className="text-[10px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
             </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-16 font-['Syne'] uppercase text-sm tracking-widest">
          <div className="flex flex-col gap-4">
            <span className="text-white/40 mb-2">Explore</span>
            <button onClick={() => setPage('crew')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Crew</button>
            <button onClick={() => setPage('coach')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Coach</button>
            <button onClick={() => setPage('collection')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Shop</button>
            <button onClick={() => setPage('events')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Events</button>
            <button onClick={() => setPage('services')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Services</button>
            <button onClick={() => setPage('stories')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Stories</button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white/40 mb-2">Legal</span>
            <button onClick={() => setPage('privacy')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Privacy</button>
            <button onClick={() => setPage('terms')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Terms</button>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8">
        <div className="font-['Syne'] text-xs text-white/20 uppercase tracking-[0.2em]">
          © 2025 Runtastic Underground.
        </div>
        <div className="text-xl md:text-2xl font-['Pirata_One'] text-white uppercase">
          RUN TOGETHER. SWEAT TOGETHER.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [page, setPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <SmoothScroll children={undefined}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pirata+One&family=Syne:wght@400;500;700;800&display=swap');
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #000; 
          }
          ::-webkit-scrollbar-thumb {
            background: #333; 
            border-radius: 0px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555; 
          }
          
          /* Selection color update */
          ::selection {
            background-color: #fff;
            color: #000;
          }
        `}
      </style>
      
      <Navigation page={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {page === 'home' && <Home />}
            {page === 'crew' && <Crew />}
            {page === 'coach' && <Coach />}
            {page === 'collection' && <Collection />}
            {page === 'events' && <Events />}
            {page === 'services' && <Services />}
            {page === 'stories' && <Stories />}
            {page === 'privacy' && <Privacy />}
            {page === 'terms' && <Terms />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </SmoothScroll>
  );
}
