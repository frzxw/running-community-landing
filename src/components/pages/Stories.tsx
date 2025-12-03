import React from 'react';

const Stories = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
         <h1 className="text-9xl font-['Syne'] font-black uppercase tracking-tighter text-zinc-900 absolute top-20 left-0 -z-10 select-none">
           JOURNAL
         </h1>
         
         <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
           <article className="group cursor-pointer">
             <div className="aspect-[4/3] overflow-hidden mb-6">
               <img src="https://images.unsplash.com/photo-1748142583153-a59eca89315c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" alt="Article" />
             </div>
             <div className="flex gap-4 text-xs font-['Syne'] uppercase tracking-widest text-zinc-500 mb-3">
               <span>Editorials</span>
               <span>//</span>
               <span>Dec 02, 2025</span>
             </div>
             <h2 className="text-3xl font-['Pirata_One'] mb-4 group-hover:underline decoration-1 underline-offset-4">
               Why We Run: The Jakarta Chapter
             </h2>
             <p className="font-['Syne'] text-zinc-400 leading-relaxed line-clamp-3">
               In the heat of the city, between the traffic and the noise, a silence is found. We explore the psychological impact of urban running in one of the world's busiest metropolises.
             </p>
           </article>

           <article className="group cursor-pointer md:mt-32">
             <div className="aspect-[4/3] overflow-hidden mb-6">
               <img src="https://images.unsplash.com/photo-1646743933133-68d5fcbe73f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" alt="Article" />
             </div>
             <div className="flex gap-4 text-xs font-['Syne'] uppercase tracking-widest text-zinc-500 mb-3">
               <span>Race Recap</span>
               <span>//</span>
               <span>Nov 28, 2025</span>
             </div>
             <h2 className="text-3xl font-['Pirata_One'] mb-4 group-hover:underline decoration-1 underline-offset-4">
               Breaking The Wall: Borobudur Marathon
             </h2>
             <p className="font-['Syne'] text-zinc-400 leading-relaxed line-clamp-3">
               26.2 miles of pure agony and ecstasy. Our crew took on the challenge and brought home new PBs and broken toenails.
             </p>
           </article>
         </div>
      </div>
    </div>
  );
};

export default Stories;
