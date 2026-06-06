'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, Gem, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

const programmes = [
  { 
    id: '01',
    title: 'Master Coach Certification', 
    duration: '1 Year', 
    level: 'Advanced', 
    desc: 'The complete, rigorous coaching certification pathway leading to Master Coach status with the International Coaching Institute.',
    icon: Gem,
    image: '/images/lifestyle1.png',
  },
  { 
    id: '02',
    title: 'One-Week Coach Intensive', 
    duration: '7 Days', 
    level: 'Foundation', 
    desc: 'An intensive, high-impact immersion designed for individuals who want to experience the power of coaching and test their aptitude.',
    icon: Compass,
    image: '/images/lifestyle2.png',
  },
  { 
    id: '03',
    title: 'Leadership Masterclass Series', 
    duration: '6 Weeks', 
    level: 'Professional', 
    desc: 'A powerful series of 6 live, interactive masterclasses focusing entirely on conscious leadership, emotional intelligence, and executive presence.',
    icon: Sparkles,
    image: '/images/portrait.png',
  },
  { 
    id: '04',
    title: 'Entrepreneur Breakthrough', 
    duration: '12 Weeks', 
    level: 'Business', 
    desc: 'A highly structured 12-week group mentorship and coaching programme exclusively for founders who are ready to scale their business and themselves.',
    icon: Rocket,
    image: '/images/lifestyle1.png', // Fallback, using existing images
  },
];

export default function LearningPaths() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to first item active on desktop

  return (
    <section className="bg-brand-black py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20">
          <SectionHeading eyebrow="Programmes" title="Featured Learning Paths" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Dynamic Image Reveal (Sticky) */}
          <div className="lg:col-span-5 relative hidden lg:block sticky top-32">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex ?? 0}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={programmes[hoveredIndex ?? 0].image} 
                    alt={programmes[hoveredIndex ?? 0].title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle dark overlay for mood */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black-deep via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
                </motion.div>
              </AnimatePresence>
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-brand-black/40 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-inter text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
                    Programme {programmes[hoveredIndex ?? 0].id}
                  </span>
                  <div className="px-3 py-1 bg-white/10 rounded-full border border-white/20">
                    <span className="font-inter text-[10px] font-bold text-white uppercase tracking-wider">
                      {programmes[hoveredIndex ?? 0].level}
                    </span>
                  </div>
                </div>
                <h4 className="font-playfair text-xl font-semibold text-white leading-tight">
                  {programmes[hoveredIndex ?? 0].title}
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7 flex flex-col">
            {programmes.map((prog, i) => {
              const isActive = hoveredIndex === i;
              const Icon = prog.icon;
              
              return (
                <div 
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className="group border-b border-white/10 last:border-b-0 py-8 cursor-pointer relative"
                >
                  {/* Hover background line sweep */}
                  <motion.div 
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-[-1px] left-0 h-[1px] bg-brand-red z-10"
                  />

                  {/* Header Row (Always visible) */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-baseline gap-6">
                      <span className={`font-inter text-sm md:text-base font-bold transition-colors duration-300 ${isActive ? 'text-brand-red' : 'text-white/20'}`}>
                        {prog.id}
                      </span>
                      <h3 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                        {prog.title}
                      </h3>
                    </div>
                    
                    {/* The plus/minus icon for accordion */}
                    <div className={`hidden md:flex w-10 h-10 rounded-full border items-center justify-center transition-all duration-500 ${isActive ? 'border-brand-red bg-brand-red/10 rotate-90' : 'border-white/10 bg-transparent group-hover:border-white/30'}`}>
                      <ArrowRight size={18} className={isActive ? 'text-brand-red' : 'text-white/40'} />
                    </div>
                  </div>

                  {/* Expandable Content Area */}
                  <motion.div 
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pb-4 pl-0 md:pl-12">
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                          <Icon size={14} className="text-brand-red" />
                          <span className="font-inter text-xs text-white uppercase tracking-widest">{prog.level}</span>
                        </div>
                        <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
                          <span className="font-inter text-xs text-white/70 uppercase tracking-widest">Duration: {prog.duration}</span>
                        </div>
                      </div>
                      
                      <p className="font-inter text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-2xl font-light">
                        {prog.desc}
                      </p>

                      <Link href="/contact" className="inline-flex items-center gap-3 group/btn">
                        <span className="font-inter text-sm font-semibold tracking-widest uppercase text-white group-hover/btn:text-brand-red transition-colors">
                          Enquire Now
                        </span>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-brand-red group-hover/btn:border-brand-red transition-all">
                          <ArrowRight size={14} className="text-white group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
