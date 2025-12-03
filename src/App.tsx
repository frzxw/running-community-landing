import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

// Critical page - loaded immediately
import Home from './components/pages/Home';

// Lazy-loaded pages for better initial load performance
const Crew = lazy(() => import('./components/pages/Crew'));
const Coach = lazy(() => import('./components/pages/Coach'));
const Collection = lazy(() => import('./components/pages/Collection'));
const Events = lazy(() => import('./components/pages/Events'));
const Services = lazy(() => import('./components/pages/Services'));
const Stories = lazy(() => import('./components/pages/Stories'));
const Privacy = lazy(() => import('./components/pages/Privacy'));
const Terms = lazy(() => import('./components/pages/Terms'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-gradient-to-b from-black/60 to-transparent">
      {/* SEO: komunitas lari bandung, komunitas lari indonesia navigation */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto" aria-label="Navigasi utama komunitas lari Bandung - Main navigation">
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); setPage('home'); }}
          className="text-2xl font-bold tracking-tighter font-['Syne'] text-white uppercase cursor-pointer hover:scale-105 transition-transform"
          aria-label="Runtastic - Komunitas Lari Bandung Indonesia - Go to homepage"
          title="Runtastic komunitas lari terdekat Bandung"
        >
          Runtastic <span className="text-xs align-top opacity-50" aria-hidden="true">®</span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-['Syne'] uppercase tracking-widest text-white" role="menubar">
          {['Crew', 'Coach', 'Collection', 'Events', 'Services', 'Stories'].map((item) => (
            <button 
              key={item} 
              onClick={() => setPage(item.toLowerCase())}
              className={`hover:line-through decoration-1 underline-offset-4 transition-all uppercase ${page === item.toLowerCase() ? 'line-through decoration-white' : ''}`}
              role="menuitem"
              aria-current={page === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 right-0 bg-black z-40 flex flex-col justify-center items-center gap-8 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
            >
              <X size={32} aria-hidden="true" />
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
    </header>
  );
};

const Footer = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <footer className="bg-black text-white py-24 px-4 border-t border-white/10" aria-label="Footer komunitas lari Bandung Indonesia">
      {/* SEO: komunitas lari, komunitas lari terdekat, komunitas lari bandung, les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex flex-col gap-8">
          <h2 
            className="text-[12vw] md:text-8xl font-['Syne'] font-black tracking-tighter leading-none italic cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => setPage('home')}
            title="Runtastic - Komunitas lari terdekat Bandung Indonesia"
          >
            RUNTASTIC
          </h2>
          <div className="flex gap-6">
             <a 
               href="#" 
               className="font-['Syne'] uppercase text-sm tracking-widest hover:text-zinc-400 transition-colors flex items-center gap-2 group"
               aria-label="Instagram komunitas lari Bandung"
               title="Follow komunitas lari Bandung di Instagram"
             >
               Instagram <span className="text-[10px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">↗</span>
             </a>
             <a 
               href="#" 
               className="font-['Syne'] uppercase text-sm tracking-widest hover:text-zinc-400 transition-colors flex items-center gap-2 group"
               aria-label="TikTok komunitas lari Indonesia"
               title="Follow komunitas lari Indonesia di TikTok"
             >
               TikTok <span className="text-[10px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">↗</span>
             </a>
          </div>
        </div>
        
        <nav className="grid grid-cols-2 gap-16 font-['Syne'] uppercase text-sm tracking-widest" aria-label="Footer navigation">
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400 mb-2">Explore</span>
            <button onClick={() => setPage('crew')} className="text-left hover:underline hover:text-zinc-300 transition-colors" title="Anggota komunitas lari Bandung">Crew</button>
            <button onClick={() => setPage('coach')} className="text-left hover:underline hover:text-zinc-300 transition-colors" title="Pelatih les privat olahraga Bandung">Coach</button>
            <button onClick={() => setPage('collection')} className="text-left hover:underline hover:text-zinc-300 transition-colors" title="Koleksi merchandise komunitas lari">Shop</button>
            <button onClick={() => setPage('events')} className="text-left hover:underline hover:text-zinc-300 transition-colors" title="Event lari fun run night run easy run Bandung">Events</button>
            <button onClick={() => setPage('services')} className="text-left hover:underline hover:text-zinc-300 transition-colors" title="Les privat renang, padel, tenis, bola, futsal, lari, atletik">Services</button>
            <button onClick={() => setPage('stories')} className="text-left hover:underline hover:text-zinc-300 transition-colors" title="Cerita komunitas lari Indonesia">Stories</button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400 mb-2">Legal</span>
            <button onClick={() => setPage('privacy')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Privacy</button>
            <button onClick={() => setPage('terms')} className="text-left hover:underline hover:text-zinc-300 transition-colors">Terms</button>
          </div>
        </nav>
      </div>
      <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8">
        <div className="font-['Syne'] text-xs text-zinc-500 uppercase tracking-[0.2em]">
          © 2025 Runtastic Community. Komunitas Lari Bandung Indonesia.
        </div>
        <div className="text-xl md:text-2xl font-['Pirata_One'] text-white uppercase">
          RUN TOGETHER. SWEAT TOGETHER.
        </div>
      </div>
      
      {/* Hidden SEO content for search engines */}
      <div className="sr-only" aria-hidden="false">
        <p>Runtastic adalah komunitas lari terbaik di Bandung, Indonesia. Komunitas lari terdekat dengan event lari rutin: fun run, night run, easy run.</p>
        <p>Layanan les privat olahraga: les privat renang, les privat padel, les privat tenis, les privat bola, les privat futsal, les privat lari, les privat atletik.</p>
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
    <SmoothScroll>
      <style>
        {`
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
          
          /* Skip link styles */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }
          .sr-only.focus\\:not-sr-only:focus {
            position: absolute;
            width: auto;
            height: auto;
            padding: 0;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
          }
        `}
      </style>
      
      <Navigation page={page} setPage={setPage} />
      
      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {page === 'home' && <Home />}
            <Suspense fallback={<PageLoader />}>
              {page === 'crew' && <Crew />}
              {page === 'coach' && <Coach />}
              {page === 'collection' && <Collection />}
              {page === 'events' && <Events />}
              {page === 'services' && <Services />}
              {page === 'stories' && <Stories />}
              {page === 'privacy' && <Privacy />}
              {page === 'terms' && <Terms />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </SmoothScroll>
  );
}
