'use client';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = true,
}: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`flex flex-col gap-4 mb-16 ${textAlign}`}
    >
      {eyebrow && (
        <span className="font-inter text-xs font-semibold tracking-[0.25em] uppercase text-white">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-playfair text-4xl lg:text-5xl font-semibold leading-tight ${
          dark ? 'text-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-inter text-base lg:text-lg max-w-2xl ${dark ? 'text-white/70' : 'text-brand-black/70'}`}>
          {subtitle}
        </p>
      )}
      {/* Gold animated divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={viewport}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[1px] bg-gradient-to-r from-brand-red to-brand-red-light"
      />
    </motion.div>
  );
}
