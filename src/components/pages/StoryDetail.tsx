import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ARTICLES } from './Stories';
import { useIsMobile } from '../ui/use-mobile';
import { OptimizedImage } from '../ui/OptimizedImage';

interface StoryDetailProps {
  slug: string;
  setPage: (page: string) => void;
}

const StoryDetail = ({ slug, setPage }: StoryDetailProps) => {
  const article = ARTICLES.find(a => a.slug === slug);
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: false, margin: "-20%" });
  const isMobile = useIsMobile();

  if (!article) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-9xl font-['Pirata_One'] text-white mb-8 leading-none">
            404
          </h1>
          <p className="font-['Syne'] text-zinc-500 uppercase tracking-widest text-sm mb-8">
            Story not found
          </p>
          <button
            onClick={() => setPage('stories')}
            className="font-['Syne'] uppercase text-sm tracking-widest text-white hover:text-zinc-300 transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setPage('stories')}
          className="mb-12 font-['Syne'] uppercase text-sm tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
          aria-label="Back to stories"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Stories
        </motion.button>

        <div className="max-w-5xl mx-auto">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex gap-4 text-xs font-['Syne'] uppercase tracking-widest text-zinc-500 mb-4">
              <span>{article.category}</span>
              <span>//</span>
              <span>{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Pirata_One'] text-white mb-6 leading-tight">
              {article.title}
            </h1>
          </motion.div>

          {/* Hero Image - Smaller and better proportioned */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-12 group"
          >
            <OptimizedImage
              src={article.img}
              alt={article.title}
              preset="full"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isMobile 
                  ? `${isInView ? 'grayscale-0 scale-105' : 'grayscale'}`
                  : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
              }`}
            />
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert max-w-none"
          >
            <div className="font-['Syne'] text-zinc-300 leading-relaxed text-lg" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p className="text-xl text-white font-medium mb-6">
                {article.description}
              </p>
              
              <div className="space-y-5">
              {article.slug === 'why-we-run-jakarta-chapter' ? (
                <>
                  <p>
                    The streets of Jakarta pulse with life—a rhythm that only runners understand.<br/>
                    Every morning, before the city awakens, before the horns start blaring and the 
                    motorcycles weave through traffic, there's a moment of clarity.<br/>
                    A moment where the pavement becomes a meditation, and every step is a breath.
                  </p>
                  
                  <p>
                    Our crew has been running these streets for years.<br/>
                    We've seen the sun rise over skyscrapers, felt the rain on our faces during monsoon season, and pushed through 
                    the humidity that makes every kilometer feel like ten.<br/>
                    But we keep coming back. Because in this chaos, we find our peace.
                  </p>
                  
                  <p>
                    Running in Jakarta isn't just about fitness—it's about survival.<br/>
                    It's about finding your pace in a city that never stops.<br/>
                    It's about community, about the nods of recognition from other runners at 5 AM, about the shared understanding 
                    that we're all chasing something greater than ourselves.
                  </p>
                  
                  <p>
                    The psychological impact is profound.<br/>
                    Studies show that urban running can reduce stress, improve mental clarity, and create a sense of belonging.<br/>
                    In Jakarta, where the pace of life is relentless, running becomes a form of therapy.<br/>
                    A way to process the day before it even begins.
                  </p>
                  
                  <p>
                    So we run. Through the noise, through the heat, through the chaos.<br/>
                    We run because it's the only way we know how to find silence in a city that never sleeps.<br/>
                    We run because in those early morning hours, Jakarta belongs to us.
                  </p>
                </>
              ) : article.slug === 'breaking-the-wall-borobudur-marathon' ? (
                <>
                  <p>
                    The alarm went off at 3 AM. Not that anyone was sleeping.<br/>
                    The nerves, the anticipation, the weight of 26.2 miles ahead—it all kept us awake.<br/>
                    We gathered at the start line as the sun began to paint the sky behind Borobudur Temple, one of the world's most 
                    sacred monuments.<br/>
                    This wasn't just a race. This was a pilgrimage.
                  </p>
                  
                  <p>
                    The first 10 kilometers felt like a dream.<br/>
                    The cool morning air, the ancient temple silhouettes, the camaraderie of thousands of runners moving as one.<br/>
                    We were flying. But marathons don't care about your good vibes.<br/>
                    By kilometer 20, reality hit.
                  </p>
                  
                  <p>
                    The wall. That's what they call it.<br/>
                    The point where your body says "no more" and your mind has to take over.<br/>
                    For some of us, it came at kilometer 30. For others, earlier.<br/>
                    But we all hit it. The difference? We hit it together.
                  </p>
                  
                  <p>
                    Sarah pushed through with a personal best of 3:42.<br/>
                    Marcus, despite a cramp at kilometer 35, finished in 4:18.<br/>
                    And then there was Alex—who crossed the finish line with two broken toenails and a smile that could light up the temple.<br/>
                    Because that's what we do. We break walls. We break records. Sometimes we break toenails.<br/>
                    But we never break our spirit.
                  </p>
                  
                  <p>
                    The finish line wasn't just a line. It was a testament.<br/>
                    To months of training. To early mornings.<br/>
                    To the crew that showed up, not just on race day, but every single day.<br/>
                    Because running a marathon isn't about the 26.2 miles on race day.<br/>
                    It's about every single mile that came before it.
                  </p>
                  
                  <p>
                    As we stood there, medals around our necks, sweat still dripping, we knew.<br/>
                    This wasn't the end. This was just another wall.<br/>
                    And we're already planning how to break the next one.
                  </p>
                </>
              ) : (
                <p>
                  Content coming soon...
                </p>
              )}
              </div>
            </div>
          </motion.article>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="my-12 border-t border-white/10"
          />

          {/* Related Articles or Back to Stories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-between items-center"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setPage('stories')}
              className="font-['Syne'] uppercase text-sm tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
              aria-label="Back to stories"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Stories
            </motion.button>
            
            <div className="text-xs font-['Syne'] uppercase tracking-widest text-zinc-500">
              {article.category} // {article.date}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;

