import React from 'react';
import { motion } from 'motion/react';

const Terms = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none"
          >
            TERMS OF SERVICE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm"
          >
            The code. The rules. The respect.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 font-['Syne'] text-zinc-400 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">1. The Code</h2>
            <p>
              By accessing Runtastic, you agree to respect the crew and the culture. Hate speech, harassment, or bad vibes will get you banned from the digital and physical space immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">2. Liability</h2>
            <p>
              Running involves risk. Urban running involves more risk. By joining our events or using our guides, you accept full responsibility for your own safety. Watch the traffic, not just your watch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">3. Gear</h2>
            <p>
              All sales on limited drops are final unless the product is defective. We produce in small batches to maintain quality and exclusivity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">4. Intellectual Property</h2>
            <p>
              The Runtastic name, logo, and aesthetic are protected. You can share the movement, but don't steal the brand.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
