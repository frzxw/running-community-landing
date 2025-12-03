import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

const Collection = () => {
  const products = [
    { name: "Void Singlet", price: "IDR 450K", img: "https://images.unsplash.com/photo-1515483496561-fae43e6d49e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { name: "Pace Hat", price: "IDR 250K", img: "https://images.unsplash.com/photo-1698881000418-c492605f6818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { name: "Street Socks", price: "IDR 150K", img: "https://images.unsplash.com/photo-1543781485-3d319cf45cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <h1 className="text-6xl md:text-8xl font-['Syne'] font-black uppercase tracking-tighter italic">
            DROP 001
          </h1>
          <span className="font-['Pirata_One'] text-xl text-zinc-500">SOLD OUT SOON</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="bg-[#111] h-[500px] relative mb-6 overflow-hidden border border-white/10">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 translate-y-full group-hover:translate-y-0 transition-transform">
                  <Button className="w-full bg-white text-black hover:bg-zinc-200 font-['Syne'] uppercase">Add to Cart</Button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-['Syne'] font-bold uppercase">{product.name}</h3>
                <span className="text-lg font-['Syne'] text-zinc-400">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
