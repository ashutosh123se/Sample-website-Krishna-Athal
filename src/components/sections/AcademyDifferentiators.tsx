'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe2, Users, InfinityIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';

const differentiators = [
  {
    num: '01',
    title: 'World-Class Faculty',
    desc: 'Dr Krishna teaches personally, bringing unparalleled executive expertise and real-world leadership experience to every session.',
    icon: GraduationCap,
    image: '/images/lifestyle1.png'
  },
  {
    num: '02',
    title: 'Global Recognition',
    desc: 'Fully accredited and globally recognised ICI certifications that hold significant weight across all continents and industries.',
    icon: Globe2,
    image: '/images/lifestyle2.png'
  },
  {
    num: '03',
    title: 'Intimate Cohorts',
    desc: 'Strictly limited to a maximum of 12 peers per cohort to guarantee deep, personalised, and transformative learning.',
    icon: Users,
    image: '/images/portrait.png'
  },
  {
    num: '04',
    title: 'Life-Long Community',
    desc: 'Gain exclusive access to a prestigious, life-long network of certified global coaches and continuous mentorship.',
    icon: InfinityIcon,
    image: '/images/lifestyle1.png'
  }
];

export default function AcademyDifferentiators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first one open

  return (
    <section className="bg-brand-black-deep py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="flex justify-center mb-16">
          <SectionHeading eyebrow="Why Learn with Dr Krishna" title="What Makes This Academy Different" align="center" />
        </div>

        {/* Desktop: The "Piano Keys" Expanding Accordion */}
        <div className="hidden lg:flex h-[600px] w-full gap-4 rounded-3xl overflow-hidden p-4 bg-brand-black border border-white/10 shadow-2xl">
          {differentiators.map((diff, i) => {
            const isActive = hoveredIndex === i;
            const Icon = diff.icon;
            
            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                initial={false}
                animate={{ 
                  flex: isActive ? "0 0 55%" : "0 0 calc(15% - 12px)", // 55% for active, the rest split the remaining 45%
                }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="relative h-full rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={diff.image} 
                    alt={diff.title}
                    fill
                    className={`object-cover transition-transform duration-[2s] ${isActive ? 'scale-105' : 'scale-100 grayscale opacity-40'}`}
                  />
                  {/* Heavy dark overlay for readability */}
                  <div className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-gradient-to-t from-brand-black-deep via-brand-black-deep/80 to-transparent' : 'bg-brand-black/80'}`} />
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-brand-red/20 mix-blend-multiply opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Vertical Shrunk State (Icon + Number) */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <Icon className="text-white/40 mb-8" size={32} />
                    <span className="font-playfair text-4xl text-white/20 tracking-tighter" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      {diff.num} — {diff.title}
                    </span>
                  </motion.div>

                  {/* Expanded Active State */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: isActive ? 0.2 : 0 }}
                    className={`relative z-10 w-[400px] ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <span className="font-playfair text-5xl font-bold text-brand-red/40 tracking-tighter">
                        {diff.num}
                      </span>
                      <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                    
                    <h3 className="font-playfair text-4xl font-bold text-white mb-4 leading-tight">
                      {diff.title}
                    </h3>
                    
                    <p className="font-inter text-lg text-white/80 leading-relaxed drop-shadow-lg">
                      {diff.desc}
                    </p>
                  </motion.div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Stacked Vertical Cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          {differentiators.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div key={i} className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-xl">
                <Image 
                  src={diff.image} 
                  alt={diff.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black-deep via-brand-black-deep/80 to-transparent" />
                <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-playfair text-4xl font-bold text-brand-red/50 tracking-tighter">{diff.num}</span>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">{diff.title}</h3>
                  <p className="font-inter text-base text-white/80 leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
