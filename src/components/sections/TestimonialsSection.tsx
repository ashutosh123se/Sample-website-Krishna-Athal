'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const autoTimer = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (autoTimer.current) clearTimeout(autoTimer.current);
    autoTimer.current = setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
  };

  useEffect(() => { 
    resetTimer(); 
    return () => { if (autoTimer.current) clearTimeout(autoTimer.current); }; 
  }, [index]);

  const current = testimonials[index];

  return (
    <section className="bg-brand-black-deep py-32 relative overflow-hidden flex items-center min-h-[80vh]">
      
      {/* Giant watermark quotation mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[400px] text-white/[0.02] pointer-events-none select-none leading-none">
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="text-center mb-16">
          <span className="font-inter text-xs text-brand-red tracking-[0.2em] uppercase font-bold">
            Executive Transformations
          </span>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="text-center flex flex-col items-center"
            >
              <p className="font-playfair italic text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed md:leading-normal mb-12 max-w-4xl">
                "{current.quote}"
              </p>
              
              <div className="flex flex-col items-center gap-2">
                <span className="font-inter text-base text-white tracking-widest uppercase font-semibold">
                  {current.name}
                </span>
                <span className="font-inter text-sm text-white/50">
                  {current.role} at <span className="text-white/80">{current.company}</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Line Navigation */}
        <div className="flex justify-center gap-4 mt-20">
          {testimonials.slice(0, 5).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="py-4 px-1 focus:outline-none group"
            >
              <div 
                className={`h-px transition-all duration-500 ease-out ${
                  i === index % 5 
                    ? 'w-16 bg-brand-red' 
                    : 'w-8 bg-white/20 group-hover:bg-white/50 group-hover:w-12'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
