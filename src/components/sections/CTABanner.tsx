'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { viewport } from '@/lib/animations';

export default function CTABanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.2 + 0.1,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.o})`; ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative bg-brand-black-deep py-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />
      
      {/* Pulsing gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-brand-red/15 rounded-full blur-[100px] animate-pulse-red pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        className="max-w-3xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Leadership?
        </h2>
        <p className="font-inter text-lg text-white/60 mb-10">
          Work directly with Dr Krishna — globally recognised, PhD-qualified, 500+ clients transformed.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Button href="/contact" variant="primary" size="lg">
            Book Free 15-Min Consultation
          </Button>
          <Button href="/coaching-plans-pricing" variant="ghost" size="lg">
            View Coaching Plans
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
