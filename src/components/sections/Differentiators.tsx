'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewport } from '@/lib/animations';

const differentiators = [
  {
    num: '01',
    title: 'Bespoke Experiences',
    tagline: 'Tailored to you. Always.',
    desc: 'Designs experiences aligned with each client\'s unique aspirations and context — never a templated, one-size-fits-all approach. Every engagement begins with deep listening.',
    stat: { val: '100%', label: 'Custom-built sessions' },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7" strokeDasharray="2 2"/>
        <circle cx="12" cy="12" r="10.5"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Deep Psychology',
    tagline: 'Science-backed. Deeply human.',
    desc: 'Combines rigorous academic research — MSc in Psychology & Neuroscience from King\'s College London — with real-world coaching practice to create lasting behaviour change at the root level.',
    stat: { val: 'MSc', label: "King's College London" },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Exceptional Communication',
    tagline: 'Heard. Understood. Challenged.',
    desc: 'Listens deeply, asks thought-provoking questions, and uncovers hidden patterns that clients cannot see themselves. Creates a rare space for honest, courageous dialogue.',
    stat: { val: '5,000+', label: 'Sessions delivered' },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Life-Changing Impact',
    tagline: 'Results that speak for themselves.',
    desc: 'Countless testimonials and success stories from individuals and organisations across 3 continents. A 4.9-star average across 200+ verified Google reviews — because transformation is measurable.',
    stat: { val: '4.9★', label: '200+ Verified reviews' },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
];

export default function Differentiators() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="bg-brand-black-deep py-28 relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brand-red" />
              <p className="font-inter text-[10.5px] font-bold uppercase tracking-[4px] text-brand-red">Differentiators</p>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight">
              What Sets Him Apart
            </h2>
          </div>
          <p className="font-inter text-[14px] text-white/30 max-w-sm leading-relaxed lg:text-right lg:mb-1">
            Four principles that define a coaching experience unlike any other.
          </p>
        </motion.div>

        {/* ── Feature rows ── */}
        <div className="flex flex-col">
          <div className="h-px bg-white/[0.06]" />

          {differentiators.map((d, i) => {
            const isActive = activeIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                className="relative border-b border-white/[0.06] group cursor-default"
              >
                {/* Hover background */}
                <div
                  className="absolute inset-0 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(192,0,28,0.04) 0%, transparent 60%)',
                    opacity: isActive ? 1 : 0,
                  }}
                />
                {/* Left red accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-400"
                  style={{ background: isActive ? '#C0001C' : 'transparent' }}
                />

                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 py-8 pl-6 pr-0">

                  {/* Number */}
                  <div className="flex-shrink-0 lg:w-24">
                    <span
                      className="font-inter font-bold text-[12px] tracking-[2px] transition-colors duration-300"
                      style={{ color: isActive ? '#C0001C' : 'rgba(255,255,255,0.15)' }}
                    >
                      {d.num}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 lg:w-20">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-400"
                      style={{
                        background: isActive ? 'rgba(192,0,28,0.1)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${isActive ? 'rgba(192,0,28,0.3)' : 'rgba(255,255,255,0.07)'}`,
                        color: isActive ? '#C0001C' : 'rgba(255,255,255,0.3)',
                        transform: isActive ? 'scale(1.08)' : 'scale(1)',
                      }}
                    >
                      {d.icon}
                    </div>
                  </div>

                  {/* Title + tagline */}
                  <div className="flex-shrink-0 lg:w-72">
                    <h3
                      className="font-playfair font-bold text-[1.35rem] leading-tight transition-colors duration-300"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.75)' }}
                    >
                      {d.title}
                    </h3>
                    <p
                      className="font-inter text-[12px] italic mt-0.5 transition-colors duration-300"
                      style={{ color: isActive ? 'rgba(192,0,28,0.8)' : 'rgba(255,255,255,0.2)' }}
                    >
                      {d.tagline}
                    </p>
                  </div>

                  {/* Description — expands */}
                  <div className="flex-1 lg:px-8">
                    <AnimatePresence>
                      {isActive ? (
                        <motion.p
                          key="open"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.3 }}
                          className="font-inter text-[14px] text-white/50 leading-relaxed"
                        >
                          {d.desc}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="closed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="font-inter text-[14px] text-white/20 leading-relaxed line-clamp-1"
                        >
                          {d.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Stat */}
                  <div className="flex-shrink-0 lg:w-44 flex flex-col items-start lg:items-end gap-0.5 pr-8">
                    <span
                      className="font-playfair font-bold text-[1.4rem] leading-none transition-colors duration-300"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.15)' }}
                    >
                      {d.stat.val}
                    </span>
                    <span
                      className="font-inter text-[10px] uppercase tracking-[1.5px] transition-colors duration-300"
                      style={{ color: isActive ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)' }}
                    >
                      {d.stat.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 w-12 hidden lg:flex items-center justify-center transition-all duration-300"
                    style={{
                      color: isActive ? 'rgba(192,0,28,0.7)' : 'rgba(255,255,255,0.08)',
                      transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
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
