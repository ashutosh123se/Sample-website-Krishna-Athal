'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const TITLES = ['Visionaries.', 'Leaders.', 'Executives.', 'Founders.', 'Changemakers.'];

const stats = [
  { num: '5,000+', label: 'Sessions' },
  { num: '4.9★', label: '200+ Reviews' },
  { num: 'PhD', label: "Oxford & King's" },
  { num: '3', label: 'Countries' },
  { num: '#1', label: 'Global Coach' },
];

const floatingCards = [
  {
    id: 'award',
    x: '62%', y: '18%',
    delay: 1.2,
    floatY: [-6, 0, -6],
    content: (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#C0001C,#E8001F)', boxShadow: '0 0 20px rgba(192,0,28,0.5)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div>
          <p className="font-inter font-bold text-white text-[13px] leading-tight">Top-Ranked Coach</p>
          <p className="font-inter text-white/40 text-[10px] tracking-wide uppercase">Global 2026</p>
        </div>
      </div>
    ),
  },
  {
    id: 'rating',
    x: '58%', y: '55%',
    delay: 1.5,
    floatY: [0, -8, 0],
    content: (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#E8001F">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="font-inter font-bold text-white text-[20px] leading-none">4.9 / 5</p>
        <p className="font-inter text-white/35 text-[10px] uppercase tracking-[1.5px]">200+ Verified Reviews</p>
      </div>
    ),
  },
  {
    id: 'sessions',
    x: '75%', y: '72%',
    delay: 1.8,
    floatY: [-4, 4, -4],
    content: (
      <div className="flex items-center gap-3">
        <div>
          <p className="font-playfair font-bold text-white text-[22px] leading-none">5,000+</p>
          <p className="font-inter text-white/35 text-[10px] uppercase tracking-[1.5px] mt-0.5">Sessions Delivered</p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="flex flex-col gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <p className="font-inter text-[9px] text-white/30 uppercase tracking-wider">Live</p>
        </div>
      </div>
    ),
  },
];

export default function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => { setMounted(true); }, []);

  // Rotating title
  useEffect(() => {
    const t = setInterval(() => {
      setTitleIdx(i => (i + 1) % TITLES.length);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  // Mouse tracking for spotlight
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  // Grain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const render = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v; data[i + 1] = v; data[i + 2] = v;
        data[i + 3] = Math.random() * 18;
      }
      ctx.putImageData(imageData, 0, 0);
      animId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col cursor-none"
      onMouseMove={handleMouseMove}
    >

      {/* ── FULL BLEED PORTRAIT ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-portrait.jpg"
          alt="Dr. Krishna Athal"
          fill priority
          className="object-cover object-center"
          style={{ filter: 'grayscale(20%) contrast(1.08) brightness(0.85)' }}
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(108deg, rgba(3,3,3,0.97) 0%, rgba(3,3,3,0.88) 35%, rgba(3,3,3,0.45) 58%, rgba(3,3,3,0.08) 72%, transparent 85%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(3,3,3,1) 0%, rgba(3,3,3,0.7) 18%, transparent 45%)' }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(3,3,3,0.85) 0%, transparent 18%)' }} />
        {/* Red duotone tint on portrait area */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 70% at 70% 45%, rgba(192,0,28,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* ── ANIMATED GRAIN CANVAS ── */}
      <canvas ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] mix-blend-overlay opacity-30"
        aria-hidden />

      {/* ── MOUSE SPOTLIGHT ── */}
      <motion.div
        className="absolute pointer-events-none z-[2]"
        style={{
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,0,28,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── CUSTOM CURSOR ── */}
      <motion.div
        className="absolute pointer-events-none z-[50] mix-blend-difference"
        style={{ left: springX, top: springY, x: '-50%', y: '-50%' }}
      >
        <div className="w-5 h-5 rounded-full border border-white/80" />
      </motion.div>

      {/* ── DECORATIVE LINES ── */}
      {/* Horizontal scan line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: mounted ? 1 : 0, opacity: mounted ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute z-[3] origin-left pointer-events-none"
        style={{ top: '50%', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, rgba(192,0,28,0.5) 0%, rgba(192,0,28,0.15) 40%, transparent 60%)' }}
      />
      {/* Vertical left column line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: mounted ? 1 : 0, opacity: mounted ? 0.4 : 0 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[72px] top-0 bottom-0 w-px z-[3] origin-top pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent 5%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent 95%)' }}
      />

      {/* ── CORNER BRACKETS ── */}
      {[
        { pos: 'top-[88px] left-6', borders: 'border-l-2 border-t-2' },
        { pos: 'top-[88px] right-6', borders: 'border-r-2 border-t-2' },
        { pos: 'bottom-[88px] left-6', borders: 'border-l-2 border-b-2' },
        { pos: 'bottom-[88px] right-6', borders: 'border-r-2 border-b-2' },
      ].map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.7 }}
          transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
          className={`absolute ${b.pos} w-6 h-6 ${b.borders} border-white/15 z-[3] hidden lg:block`}
        />
      ))}

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-8 lg:px-20 pt-28 pb-0">

        {/* Eyebrow + availability */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -16 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="font-inter text-[10.5px] font-bold uppercase tracking-[4px] text-white/35">
              Global Leadership Authority
            </span>
          </div>
          {/* Availability pill */}
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-inter text-[10px] font-bold uppercase tracking-[2px] text-emerald-400">
              Accepting New Clients
            </span>
          </motion.div>
        </motion.div>

        {/* Hero text block */}
        <div className="flex flex-col gap-5 max-w-[700px] mt-auto mb-auto py-12">

          {/* Name badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -24 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2.5 font-inter text-[10.5px] font-bold uppercase tracking-[4px] px-4 py-1.5"
              style={{
                background: 'rgba(192,0,28,0.1)',
                border: '1px solid rgba(192,0,28,0.3)',
                color: '#E8001F',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              Dr. Krishna Athal · PhD
            </span>
          </motion.div>

          {/* Headline stack */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair font-bold text-white leading-[0.93]"
              style={{ fontSize: 'clamp(50px, 7.2vw, 104px)' }}
            >
              Strategic
              <br />
              <span style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.2)',
                WebkitTextFillColor: 'transparent',
              }}>
                Coaching
              </span>
              <br />
              <span className="text-white/20 font-light italic" style={{ fontSize: '65%' }}>for the</span>
            </motion.h1>

            {/* Cycling word */}
            <div className="overflow-hidden relative" style={{ height: 'clamp(54px, 7.5vw, 108px)', maxWidth: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIdx}
                  initial={{ y: 80, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -80, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="font-playfair font-bold block leading-[0.93]"
                    style={{
                      fontSize: 'clamp(50px, 7.2vw, 104px)',
                      background: 'linear-gradient(135deg, #C0001C 0%, #ff2244 40%, #C0001C 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {TITLES[titleIdx]}
                  </span>
                </motion.div>
              </AnimatePresence>
              {/* Red glow behind cycling word */}
              <div className="absolute inset-0 pointer-events-none -z-10"
                style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(192,0,28,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
            </div>
          </div>

          {/* Divider with tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -20 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-brand-red/50 flex-shrink-0" />
            <p className="font-inter text-[14px] lg:text-[15px] text-white/40 leading-relaxed max-w-md">
              Achieve meaningful breakthroughs across India, Mauritius &amp; Singapore — with globally recognised, PhD-backed coaching.
            </p>
          </motion.div>

          {/* Featured in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <span className="font-inter text-[9.5px] uppercase tracking-[3px] text-white/20">Featured in</span>
            {['Forbes', 'TEDx', 'BBC', 'Oxford'].map((b, i) => (
              <span key={i} className="font-inter text-[11px] font-bold text-white/20 hover:text-white/40 transition-colors">{b}</span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 font-inter text-[12.5px] font-bold uppercase tracking-[2.5px] text-white overflow-hidden transition-all duration-400 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #C0001C, #E8001F)',
                clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                boxShadow: '0 8px 40px rgba(192,0,28,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              <span className="relative z-10">Book a Consultation</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >→</motion.span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)' }} />
            </Link>

            <Link
              href="/coaching-plans-pricing"
              className="group inline-flex items-center gap-3 px-8 py-4 font-inter text-[12.5px] font-bold uppercase tracking-[2.5px] text-white/50 hover:text-white transition-all duration-400 hover:-translate-y-1"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              Explore Services
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>

        {/* ── STATS TICKER BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
          <div className="flex items-stretch divide-x divide-white/[0.06] ml-1">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                className="flex flex-col gap-0.5 px-6 py-5 first:pl-7 hover:bg-white/[0.02] transition-colors cursor-default"
              >
                <span className="font-playfair font-bold text-white text-[1.25rem] leading-none">{s.num}</span>
                <span className="font-inter text-[9.5px] uppercase tracking-[1.5px] text-white/25">{s.label}</span>
              </motion.div>
            ))}
            {/* Availability right */}
            <div className="ml-auto flex items-center pr-6 pl-6 gap-3">
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-2 lg:hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-inter text-[10px] font-bold uppercase tracking-[1.5px] text-emerald-400">Open</span>
              </div>
              <div className="hidden lg:block">
                <p className="font-inter text-[9.5px] uppercase tracking-[2px] text-white/20">India · Mauritius · Singapore</p>
                <p className="font-inter text-[11px] font-semibold text-white/35 mt-0.5">Oxford &amp; King's College — PhD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── FLOATING CARDS over portrait ── */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.id}
          className="absolute z-20 pointer-events-none hidden lg:block"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.85, y: mounted ? 0 : 20 }}
          transition={{ delay: card.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: card.floatY }}
            transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
            className="px-4 py-3 rounded-xl backdrop-blur-xl"
            style={{
              background: 'rgba(8,8,8,0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
            }}
          >
            {card.content}
          </motion.div>
        </motion.div>
      ))}

      {/* ── VERTICAL ELEMENTS ── */}
      {/* Right: site URL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="font-inter text-[8.5px] uppercase tracking-[4px] text-white/15">drkrishnaathal.com</span>
        <div className="w-px h-14"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)' }} />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-[88px] right-6 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 origin-top"
          style={{ background: 'linear-gradient(to bottom, rgba(192,0,28,0.9), transparent)' }}
        />
        <span className="font-inter text-[8px] uppercase tracking-[3px] text-white/20"
          style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>

    </section>
  );
}
