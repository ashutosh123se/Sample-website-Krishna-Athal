'use client';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { viewport } from '@/lib/animations';

const steps = [
  {
    num: '01',
    title: 'Get a Sense of My Work',
    short: 'Explore my story and philosophy.',
    detail: 'Explore my about page, client experiences, and coaching plans to understand my approach. Read the stories of people who have been exactly where you are now.',
    link: '/about',
    linkLabel: 'Explore About',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Share Your Context',
    short: 'Complete the questionnaire.',
    detail: 'Complete the Pre-Coaching Questionnaire so I can understand your situation, challenges, and goals. This helps make our first conversation as meaningful as possible.',
    link: '/pre-coaching-questionnaire',
    linkLabel: 'Start Questionnaire',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Let Us Speak',
    short: 'Book a free 15-minute call.',
    detail: 'Book a complimentary 15-minute conversation to explore your goals and the way forward. No pitch, no sales pressure — just an honest conversation.',
    link: '/contact',
    linkLabel: 'Book the Call',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Begin Your Journey',
    short: 'Step into the work.',
    detail: 'Once we are aligned, we onboard and formally begin your transformative coaching process. This is where real, lasting change begins.',
    link: '/coaching-plans-pricing',
    linkLabel: 'View Plans',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const isLast = index === steps.length - 1;

  return (
    <div ref={ref} className="relative flex flex-col items-center">

      {/* Connector line between cards (desktop horizontal) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-[52px] left-[calc(50%+52px)] right-[calc(-50%+52px)] h-[1px] z-0">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(192,0,28,0.7), rgba(192,0,28,0.1))',
            }}
          />
          {/* Arrow dot at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 1.1, duration: 0.3 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-red"
          />
        </div>
      )}

      {/* Step number badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.15, duration: 0.5, type: 'spring', stiffness: 200 }}
        className="relative z-10 mb-6"
      >
        {/* Pulsing glow ring */}
        <div
          className="absolute inset-0 rounded-full animate-pulse-red opacity-0 group-hover:opacity-100"
          style={{ animationDelay: `${index * 0.3}s` }}
        />
        <div
          className="w-[72px] h-[72px] rounded-full flex items-center justify-center relative"
          style={{
            background: index === 2
              ? 'linear-gradient(135deg, #C0001C, #E8001F)'
              : 'rgba(255,255,255,0.04)',
            border: index === 2
              ? 'none'
              : '1px solid rgba(255,255,255,0.08)',
            boxShadow: index === 2
              ? '0 0 40px rgba(192,0,28,0.5), 0 0 80px rgba(192,0,28,0.2)'
              : 'none',
          }}
        >
          <span
            className="font-inter font-bold text-[13px] tracking-[2px]"
            style={{ color: index === 2 ? '#fff' : 'rgba(255,255,255,0.4)' }}
          >
            {step.num}
          </span>
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group relative w-full rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2"
        style={{
          background: 'linear-gradient(160deg, #141414 0%, #0d0d0d 100%)',
          border: index === 2
            ? '1px solid rgba(192,0,28,0.35)'
            : '1px solid rgba(255,255,255,0.06)',
          boxShadow: index === 2
            ? '0 0 0 1px rgba(192,0,28,0.1), 0 24px 60px rgba(192,0,28,0.12)'
            : '0 4px 24px rgba(0,0,0,0.4)',
        }}
      >
        {/* Top gradient accent bar */}
        <div
          className="h-[2px] w-full transition-all duration-500"
          style={{
            background: index === 2
              ? 'linear-gradient(90deg, #C0001C, #E8001F, #C0001C)'
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
            opacity: index === 2 ? 1 : 0,
          }}
        />
        {/* Hover gradient accent bar */}
        <div
          className="h-[2px] w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(90deg, #C0001C, #E8001F, #C0001C)' }}
        />

        <div className="p-8 flex flex-col gap-5 flex-1">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: index === 2
                ? 'linear-gradient(135deg, rgba(192,0,28,0.25), rgba(232,0,31,0.15))'
                : 'rgba(255,255,255,0.04)',
              border: index === 2
                ? '1px solid rgba(192,0,28,0.3)'
                : '1px solid rgba(255,255,255,0.06)',
              color: index === 2 ? '#E8001F' : 'rgba(255,255,255,0.4)',
            }}
          >
            <div className="group-hover:text-brand-red transition-colors duration-300">
              {step.icon}
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="font-playfair text-[1.35rem] font-semibold text-white leading-tight mb-2 group-hover:text-white transition-colors">
              {step.title}
            </h3>
            <p
              className="font-inter text-[12.5px] font-semibold uppercase tracking-[1.5px]"
              style={{ color: index === 2 ? '#E8001F' : 'rgba(192,0,28,0.7)' }}
            >
              {step.short}
            </p>
          </div>

          {/* Detail */}
          <p className="font-inter text-[13.5px] text-white/45 leading-relaxed flex-1">
            {step.detail}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

          {/* CTA Link */}
          <Link
            href={step.link}
            className="inline-flex items-center gap-2 font-inter text-[13px] font-semibold text-white/60 group-hover:text-white transition-colors duration-300 w-fit"
          >
            {step.linkLabel}
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 inline-block">→</span>
          </Link>
        </div>

        {/* Large watermark number */}
        <div
          className="absolute -bottom-6 -right-3 font-playfair font-bold text-[130px] leading-none select-none pointer-events-none transition-all duration-500 group-hover:-translate-y-2"
          style={{ color: index === 2 ? 'rgba(192,0,28,0.06)' : 'rgba(255,255,255,0.025)' }}
        >
          {step.num}
        </div>
      </motion.div>
    </div>
  );
}

export default function CoachingProcess() {
  return (
    <section className="bg-brand-black-deep py-28 relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(192,0,28,0.04) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(192,0,28,0.03) 0%, transparent 50%)`,
        }}
      />

      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Centered red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(192,0,28,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[4px] text-brand-red mb-4">
            Your Journey
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
            The 4-Step Coaching Process
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-red/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-red/60" />
          </div>
          <p className="font-inter text-white/40 text-[15px] max-w-xl mx-auto mt-6 leading-relaxed">
            A clear, structured path from where you are now to where you are meant to be.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-inter text-[12.5px] font-bold uppercase tracking-[2px] text-white overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(192,0,28,0.35)]"
            style={{ background: 'linear-gradient(135deg, #C0001C, #E8001F)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
          >
            <span className="relative z-10">Start Your Journey Today</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)', transform: 'skewX(-20deg)' }}
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
