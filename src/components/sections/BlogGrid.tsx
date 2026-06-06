'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const posts = [
  { 
    title: 'The Myth of the Balanced Leader', 
    date: 'Jun 1, 2026', 
    category: 'Leadership', 
    excerpt: 'Balance is not about equal time. It is about conscious choice. Here is what that actually means for busy executives who want to win without burning out.',
    image: '/images/lifestyle1.png'
  },
  { 
    title: 'Why Imposter Syndrome Is a Signal, Not a Problem', 
    date: 'May 18, 2026', 
    category: 'Mindset', 
    excerpt: 'That nagging doubt you carry is not a sign something is wrong with you. It is a sign something important is about to grow.',
    image: '/images/portrait.png'
  },
  { 
    title: 'Designing Your Organisation for Extreme Resilience', 
    date: 'May 5, 2026', 
    category: 'Corporate', 
    excerpt: 'Resilience is not built in a crisis. It is built in the months and years before the crisis arrives.',
    image: '/images/lifestyle2.png'
  },
  { 
    title: 'The Tri-Intelligence Approach to Conflict', 
    date: 'Apr 22, 2026', 
    category: 'Methodology', 
    excerpt: 'Most conflict is not about the thing on the table. Here is how to address what is really happening beneath the surface.',
    image: '/images/lifestyle1.png'
  },
  { 
    title: 'Stop Managing Time. Start Managing Energy.', 
    date: 'Apr 8, 2026', 
    category: 'Performance', 
    excerpt: 'Time is fixed. Energy is renewable. The highest performers know the difference and schedule their days accordingly.',
    image: '/images/lifestyle2.png'
  },
  { 
    title: 'How to Build Deep Trust with a Remote Workforce', 
    date: 'Mar 25, 2026', 
    category: 'Leadership', 
    excerpt: 'Trust cannot be manufactured in a Slack message. Here are the frameworks that actually work for modern distributed teams.',
    image: '/images/portrait.png'
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-brand-black-deep py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => {
            const isFeatured = i === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-brand-black shadow-2xl cursor-pointer ${
                  isFeatured ? 'lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto' : 'aspect-[4/5]'
                }`}
              >
                {/* Background Image with Parallax & Hover Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  {/* Gradients for text readability */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${
                    isFeatured 
                      ? 'bg-gradient-to-t from-brand-black-deep via-brand-black-deep/60 to-transparent opacity-90 group-hover:opacity-100' 
                      : 'bg-gradient-to-t from-brand-black-deep via-brand-black-deep/80 to-transparent opacity-95 group-hover:opacity-100'
                  }`} />
                  <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
                  
                  {/* Top Badges (Only visible on featured or moved to bottom on regular) */}
                  <div className="absolute top-6 lg:top-10 left-6 lg:left-10 flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md font-inter text-xs font-bold tracking-widest text-white uppercase shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Text Reveal Animation Wrapper */}
                  <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    
                    <span className="font-inter text-xs font-medium text-white/60 mb-3 block">
                      Published on {post.date}
                    </span>
                    
                    <h2 className={`font-playfair font-bold text-white mb-4 leading-tight group-hover:text-brand-red transition-colors duration-300 ${
                      isFeatured ? 'text-3xl md:text-5xl lg:text-6xl max-w-3xl' : 'text-2xl md:text-3xl'
                    }`}>
                      {post.title}
                    </h2>
                    
                    <p className={`font-inter text-white/70 leading-relaxed mb-8 transition-opacity duration-500 max-w-2xl ${
                      isFeatured ? 'text-lg md:text-xl opacity-80 group-hover:opacity-100' : 'text-sm md:text-base opacity-0 group-hover:opacity-100 hidden md:block'
                    }`}>
                      {post.excerpt}
                    </p>

                    {/* Animated Read Button */}
                    <Link href="#" className="inline-flex items-center gap-3 group/btn">
                      <span className="font-inter text-sm font-bold tracking-widest uppercase text-white group-hover/btn:text-brand-red transition-colors">
                        Read Article
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover/btn:bg-brand-red group-hover/btn:border-brand-red transition-all duration-300">
                        <ArrowRight size={16} className="text-white group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
