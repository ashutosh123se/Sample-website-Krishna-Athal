'use client';
import { motion } from 'framer-motion';

const row1 = ['Microsoft', 'Singapore Airlines', 'Reliance', 'PepsiCo', 'ICICI Bank', 'American Express', 'HP', 'Indian Oil', 'OYO', 'OLA'];
const row2 = ['IIT Delhi', 'TISS', 'TEDx', 'Univ. of Mumbai', 'Olympic Committee', 'YUVA', 'ICI', 'Absa Group', 'CMA CGM', 'FIRST Global'];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 mx-8 flex items-center justify-center h-12 group cursor-default">
      <span className="font-inter text-sm font-semibold text-white/40 group-hover:text-brand-red transition-colors duration-300 whitespace-nowrap tracking-wide uppercase">
        {name}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-brand-black-mid border-y border-brand-red/15 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="font-inter text-[10px] font-bold tracking-[0.3em] uppercase text-white text-center">
          Trusted by Leaders From
        </p>
      </div>

      {/* Row 1 — scrolling right */}
      <div className="relative mb-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((name, i) => (
            <LogoItem key={i} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolling left */}
      <div className="relative">
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((name, i) => (
            <LogoItem key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
