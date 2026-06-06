'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { viewport } from '@/lib/animations';
import { services } from '@/data/pricing';

const serviceConfig: Record<string, {
  num: string;
  tagline: string;
  description: string;
  outcome: string;
  keywords: string[];
  icon: React.ReactNode;
  for: string;
}> = {
  life: {
    num: '01',
    tagline: 'Clarity, courage & conscious growth.',
    description: 'Move from confusion to clarity. Whether you are navigating a life transition, rebuilding confidence, or seeking deeper purpose — this coaching is for you.',
    outcome: 'A clear direction, renewed confidence, and a life you are proud to live.',
    keywords: ['Clarity', 'Purpose', 'Courage'],
    for: 'Individuals seeking personal direction',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      </svg>
    ),
  },
  executive: {
    num: '02',
    tagline: 'Calm authority & high-trust leadership.',
    description: 'For senior professionals who want to lead with greater clarity, make better decisions under pressure, and earn the trust of those they lead.',
    outcome: 'A leadership identity that commands respect and drives results.',
    keywords: ['Authority', 'Leadership', 'Decisions'],
    for: 'Senior leaders & C-suite executives',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  career: {
    num: '03',
    tagline: 'Direction, confidence & real momentum.',
    description: 'Whether you are starting fresh, pivoting careers, or stuck at a plateau — this programme builds the clarity and strategy to move forward with confidence.',
    outcome: 'A concrete career strategy and the confidence to execute it.',
    keywords: ['Direction', 'Confidence', 'Momentum'],
    for: 'Professionals seeking career growth',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  relationship: {
    num: '04',
    tagline: 'Deeper trust & better communication.',
    description: 'Repair broken patterns, rebuild trust, and develop the communication skills that keep relationships strong — whether as partners or co-founders.',
    outcome: 'A relationship built on trust, empathy, and honest communication.',
    keywords: ['Trust', 'Connection', 'Communication'],
    for: 'Couples & partners at a crossroads',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  entrepreneur: {
    num: '05',
    tagline: 'Build with purpose. Scale without burnout.',
    description: 'For founders and entrepreneurs who need to lead themselves before they can lead their business. Strategy, mindset, and resilience in one programme.',
    outcome: 'A business built on solid foundations with a leader at the helm.',
    keywords: ['Vision', 'Scale', 'Resilience'],
    for: 'Founders & early-stage entrepreneurs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      </svg>
    ),
  },
  corporate: {
    num: '06',
    tagline: 'Real skills that drive behaviour change.',
    description: 'Tailored corporate training programmes that go beyond the workshop — embedding practical leadership and communication skills into your organisation\'s culture.',
    outcome: 'A measurable shift in team performance and workplace culture.',
    keywords: ['Performance', 'Culture', 'Teamwork'],
    for: 'HR leaders & corporate teams',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
};

export default function ServicesGrid() {
  const [activeId, setActiveId] = useState('executive');
  const active = serviceConfig[activeId];
  const activeService = services.find(s => s.id === activeId)!;

  return (
    <section className="bg-brand-black-deep relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,0,28,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="py-20 border-b border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-brand-red" />
                <p className="font-inter text-[10.5px] font-bold uppercase tracking-[4px] text-brand-red">
                  What I Offer
                </p>
              </div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight">
                Coaching &amp; Training<br />Solutions
              </h2>
            </div>
            <p className="font-inter text-[14px] text-white/35 max-w-xs leading-relaxed lg:text-right lg:mb-1">
              Six disciplines. One purpose — to help you lead, grow, and live with intention.
            </p>
          </div>
        </motion.div>

        {/* ── Two-panel layout ── */}
        <div className="grid lg:grid-cols-[1fr_420px] min-h-[560px]">

          {/* LEFT: service list */}
          <div className="border-r border-white/[0.06]">
            {services.map((service, i) => {
              const cfg = serviceConfig[service.id];
              const isActive = activeId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  onMouseEnter={() => setActiveId(service.id)}
                  className="group relative flex items-center gap-6 px-0 pr-8 py-6 cursor-pointer transition-all duration-300 border-b border-white/[0.05]"
                >
                  {/* Active left bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300"
                    style={{ background: isActive ? '#C0001C' : 'transparent' }}
                  />

                  {/* Row bg on hover/active */}
                  <div
                    className="absolute inset-0 transition-all duration-300 pointer-events-none"
                    style={{ background: isActive ? 'rgba(192,0,28,0.04)' : 'transparent' }}
                  />

                  {/* Number */}
                  <span
                    className="relative flex-shrink-0 font-inter text-[11px] font-bold tracking-[2px] w-8 text-right transition-colors duration-300 pl-5"
                    style={{ color: isActive ? '#C0001C' : 'rgba(255,255,255,0.18)' }}
                  >
                    {cfg.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive ? 'rgba(192,0,28,0.1)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isActive ? 'rgba(192,0,28,0.25)' : 'rgba(255,255,255,0.06)'}`,
                      color: isActive ? '#C0001C' : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    {cfg.icon}
                  </div>

                  {/* Title + For whom */}
                  <div className="relative flex-1 min-w-0">
                    <h3
                      className="font-playfair font-bold text-[1.2rem] leading-tight transition-colors duration-300"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.65)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="font-inter text-[11.5px] mt-0.5 transition-colors duration-300"
                      style={{ color: isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)' }}
                    >
                      {cfg.for}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="relative flex-shrink-0 transition-all duration-300"
                    style={{
                      color: isActive ? '#C0001C' : 'rgba(255,255,255,0.15)',
                      transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Detail panel */}
          <div className="relative hidden lg:block">
            <div className="sticky top-24 p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  {/* Number + tagline */}
                  <div>
                    <span className="font-inter text-[10px] font-bold uppercase tracking-[4px] text-brand-red">
                      {active.num} / 06
                    </span>
                    <h3 className="font-playfair font-bold text-white text-[1.65rem] leading-tight mt-2">
                      {activeService.title}
                    </h3>
                    <p className="font-inter text-[13px] font-semibold text-brand-red mt-1.5 italic">
                      {active.tagline}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-brand-red/30 via-white/[0.06] to-transparent" />

                  {/* Description */}
                  <p className="font-inter text-[14px] text-white/50 leading-relaxed">
                    {active.description}
                  </p>

                  {/* Outcome box */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(192,0,28,0.06)', border: '1px solid rgba(192,0,28,0.15)' }}
                  >
                    <p className="font-inter text-[10px] uppercase tracking-[2px] text-brand-red mb-1.5 font-bold">
                      Your Outcome
                    </p>
                    <p className="font-inter text-[13.5px] text-white/70 leading-relaxed italic">
                      "{active.outcome}"
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    {active.keywords.map(kw => (
                      <span
                        key={kw}
                        className="font-inter text-[10.5px] font-semibold uppercase tracking-[1.5px] px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={activeService.href}
                    className="group inline-flex items-center gap-3 font-inter text-[12px] font-bold uppercase tracking-[2px] text-white/60 hover:text-white transition-colors duration-300 pt-2 w-fit"
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red"
                      style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                    Explore {activeService.title}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.06] py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-inter text-[13px] text-white/25 text-center sm:text-left">
            Not sure which service fits? Let's have a conversation first — no pitch, no pressure.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/coaching-plans-pricing"
              className="group inline-flex items-center gap-2.5 px-7 py-3 font-inter text-[11.5px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(192,0,28,0.35)]"
              style={{
                background: 'linear-gradient(135deg, #C0001C, #E8001F)',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 font-inter text-[11.5px] font-bold uppercase tracking-[2px] text-white/45 hover:text-white border border-white/[0.09] hover:border-white/20 transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              Free Call
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
