'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, started]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <span className="font-playfair text-5xl lg:text-6xl font-bold text-white">
        {prefix}{count}{suffix}
      </span>
      <span className="font-inter text-sm text-white/60 mt-2 uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}
