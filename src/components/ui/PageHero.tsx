'use client';
import { motion } from 'framer-motion';
import Button from './Button';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  pills?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  gradientFrom?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  pills = [],
  primaryCta,
  secondaryCta,
  gradientFrom = '#050505',
}: PageHeroProps) {
  return (
    <section
      className="relative min-h-[65vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${gradientFrom} 0%, #1A1A1A 100%)`,
      }}
    >
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-inter text-xs font-semibold tracking-[0.25em] uppercase text-white mb-6"
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {pills.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {pills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full border border-white/10 text-white font-inter text-sm"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        )}

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-inter text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
    </section>
  );
}
