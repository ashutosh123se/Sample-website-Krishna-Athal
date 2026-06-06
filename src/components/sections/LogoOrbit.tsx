'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const innerOrbit = ['Microsoft', 'SIA', 'Reliance', 'PepsiCo', 'ICICI', 'AmEx', 'HP', 'Indian Oil', 'OYO', 'OLA'];
const outerOrbit = ['IIT Delhi', 'TISS', 'TEDx', 'Univ. Mumbai', 'Olympic Cmtte', 'YUVA', 'ICI', 'Absa Group', 'CMA CGM', 'FIRST Global', 'LeadershipX', 'Sportfala', 'Insight', 'ArcaLearn', 'MCB Group'];

const allLogos = [...innerOrbit, ...outerOrbit];

export default function LogoOrbit() {
  return (
    <section className="bg-brand-black-deep py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-center mb-16">
          <SectionHeading
            eyebrow="Global Reach"
            title="Trusted by World-Class Organizations"
            align="center"
          />
        </div>

        {/* Sophisticated Marquee */}
        <div className="relative overflow-hidden flex flex-col gap-8">
          {/* Gradient masks for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black-deep to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black-deep to-transparent z-10 pointer-events-none" />

          {/* Marquee Row 1 */}
          <div className="flex w-max animate-marquee">
            {[...allLogos.slice(0, 12), ...allLogos.slice(0, 12)].map((name, i) => (
              <div key={`r1-${i}`} className="mx-8 flex items-center justify-center">
                <span className="font-playfair text-xl md:text-2xl text-white/30 hover:text-white transition-colors duration-500 cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Marquee Row 2 (Reverse) */}
          <div className="flex w-max animate-marquee-reverse">
            {[...allLogos.slice(12), ...allLogos.slice(12)].map((name, i) => (
              <div key={`r2-${i}`} className="mx-8 flex items-center justify-center">
                <span className="font-playfair text-xl md:text-2xl text-white/30 hover:text-white transition-colors duration-500 cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
