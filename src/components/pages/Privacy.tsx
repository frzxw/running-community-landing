import React from 'react';
import { motion } from 'motion/react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none"
          >
            PRIVACY POLICY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm"
          >
            Your data. Your privacy. Protected.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12 font-['Syne'] text-zinc-400 leading-relaxed"
        >
          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">1. Data Collection</h2>
            <p>
              We collect minimal data. Only what's needed to keep the pace. When you sign up for drops or join the crew, we store your contact info. We don't track your runs—that's your business. We just track the movement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">2. Usage</h2>
            <p>
              Your data is used solely for Runtastic operational purposes: event coordination, gear drops, and community updates. We do not sell your data to third parties. The streets are free, and so is your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">3. Cookies</h2>
            <p>
              We use essential cookies to ensure the site runs as smooth as a tempo run. No tracking pixels that follow you around the web. We leave the following to the pacers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-bold uppercase mb-4">4. Contact</h2>
            <p>
              Questions? DM us on social or email privacy@runtastic.void.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
