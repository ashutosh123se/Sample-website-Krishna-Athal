'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { viewport } from '@/lib/animations';

const education = [
  {
    year: '2022',
    credential: 'PhD in Leadership',
    field: 'Doctoral Research',
    institution: 'Global Certification Body',
    country: 'United Kingdom',
    flag: 'GB',
    type: 'Doctorate',
    highlight: true,
  },
  {
    year: '2020',
    credential: 'Executive Leadership Programme',
    field: 'Executive Education',
    institution: 'Saïd Business School, University of Oxford',
    country: 'United Kingdom',
    flag: 'GB',
    type: 'Certification',
    highlight: false,
  },
  {
    year: '2018',
    credential: 'MSc Psychology & Neuroscience of Mental Health',
    field: 'Master of Science',
    institution: "Institute of Psychiatry, King's College London",
    country: 'United Kingdom',
    flag: 'GB',
    type: 'Masters',
    highlight: false,
  },
  {
    year: '2016',
    credential: 'MBA in Leadership & Management',
    field: 'Master of Business Administration',
    institution: 'York Business School',
    country: 'United Kingdom',
    flag: 'GB',
    type: 'Masters',
    highlight: false,
  },
  {
    year: '2014',
    credential: 'BA in Business & Enterprise',
    field: 'Bachelor of Arts',
    institution: 'The Business School, Edinburgh',
    country: 'United Kingdom',
    flag: 'GB',
    type: 'Bachelor',
    highlight: false,
  },
  {
    year: '2012',
    credential: 'Diploma in Community Services',
    field: 'Professional Diploma',
    institution: 'South TAFE',
    country: 'Australia',
    flag: 'AU',
    type: 'Diploma',
    highlight: false,
  },
];

const typeBadgeStyle: Record<string, React.CSSProperties> = {
  Doctorate:    { background: 'rgba(192,0,28,0.12)', border: '1px solid rgba(192,0,28,0.3)', color: '#E8001F' },
  Masters:      { background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', color: '#a78bfa' },
  Bachelor:     { background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399' },
  Certification:{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24' },
  Diploma:      { background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa' },
};

const flagEmoji: Record<string, string> = {
  GB: '🇬🇧',
  AU: '🇦🇺',
};

export default function EducationTimeline() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-brand-black-deep py-28 relative overflow-hidden border-t border-white/[0.04]">

      {/* Ambient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(192,0,28,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-brand-red" />
            <p className="font-inter text-[10.5px] font-bold uppercase tracking-[4px] text-brand-red">Academic Credentials</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight">
              Education &amp; Qualifications
            </h2>
            <p className="font-inter text-[13.5px] text-white/30 max-w-xs leading-relaxed lg:text-right">
              Academic foundations from Oxford, King's College, and leading institutions worldwide.
            </p>
          </div>
        </motion.div>

        {/* ── Timeline rows ── */}
        <div className="relative">
          {/* Left vertical line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.06) 10%, rgba(255,255,255,0.06) 90%, transparent 100%)' }} />

          <div className="flex flex-col divide-y divide-white/[0.05]">
            {education.map((item, i) => {
              const isHovered = hoveredIdx === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative flex gap-0 lg:gap-8 items-start py-7 group transition-all duration-300"
                  style={{
                    background: isHovered ? 'rgba(255,255,255,0.015)' : 'transparent',
                    paddingLeft: isHovered ? '8px' : '0',
                    marginLeft: isHovered ? '-8px' : '0',
                    borderLeft: item.highlight
                      ? '2px solid #C0001C'
                      : isHovered ? '2px solid rgba(255,255,255,0.1)' : '2px solid transparent',
                  }}
                >
                  {/* Year column */}
                  <div className="flex-shrink-0 w-[88px] hidden lg:flex flex-col items-end pr-6 pt-1 gap-1">
                    <span
                      className="font-inter font-bold text-[15px] leading-none transition-colors duration-300"
                      style={{ color: item.highlight ? '#C0001C' : isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)' }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 hidden lg:flex items-start pt-[6px]">
                    <div
                      className="w-3 h-3 rounded-full transition-all duration-300"
                      style={{
                        background: item.highlight ? '#C0001C' : isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
                        boxShadow: item.highlight ? '0 0 12px rgba(192,0,28,0.6)' : 'none',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col lg:flex-row lg:items-start justify-between gap-4">

                    {/* Left: Credential info */}
                    <div className="flex flex-col gap-2">
                      {/* Mobile year */}
                      <span className="font-inter text-[11px] font-bold text-brand-red uppercase tracking-[2px] lg:hidden">
                        {item.year}
                      </span>

                      {/* Degree type badge */}
                      <div className="flex items-center gap-2">
                        <span
                          className="font-inter text-[9.5px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded"
                          style={typeBadgeStyle[item.type]}
                        >
                          {item.type}
                        </span>
                        <span className="font-inter text-[11px] text-white/25 uppercase tracking-[1px]">
                          {item.field}
                        </span>
                      </div>

                      {/* Credential name */}
                      <h3
                        className="font-playfair font-bold leading-tight transition-colors duration-300"
                        style={{
                          fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
                          color: isHovered ? '#fff' : 'rgba(255,255,255,0.85)',
                        }}
                      >
                        {item.credential}
                      </h3>

                      {/* Institution */}
                      <p
                        className="font-inter text-[13px] transition-colors duration-300"
                        style={{ color: isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)' }}
                      >
                        {flagEmoji[item.flag]} {item.institution}
                      </p>
                    </div>

                    {/* Right: Country + arrow */}
                    <div className="flex-shrink-0 flex items-center gap-3 lg:flex-col lg:items-end lg:gap-2 pt-1">
                      <span
                        className="font-inter text-[10.5px] uppercase tracking-[1.5px] transition-colors duration-300"
                        style={{ color: isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.12)' }}
                      >
                        {item.country}
                      </span>
                      <div
                        className="transition-all duration-300"
                        style={{
                          color: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
                          transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Degrees & Diplomas', val: '6' },
              { label: 'UK Institutions', val: '5' },
              { label: 'Years of Study', val: '10+' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-playfair font-bold text-white text-xl leading-none">{s.val}</span>
                <span className="font-inter text-[10px] text-white/25 uppercase tracking-[1.5px]">{s.label}</span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-3 px-5 py-3 rounded"
            style={{ background: 'rgba(192,0,28,0.06)', border: '1px solid rgba(192,0,28,0.15)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <p className="font-inter text-[12px] text-white/50">
              PhD-qualified · Oxford · King's College London
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
