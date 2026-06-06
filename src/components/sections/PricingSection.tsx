'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { pricingPlans } from '@/data/pricing';
import { staggerContainer, scaleIn, viewport } from '@/lib/animations';

export default function PricingSection() {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <section className="bg-brand-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow="Investment in Yourself"
            title="Coaching Plans & Pricing"
            subtitle="Choose a plan that fits your pace, goals, and season of life."
            align="center"
            dark={false}
          />
        </div>

        {/* Currency toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-white/10 rounded-full p-1">
            {(['USD', 'INR'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 rounded-full font-inter text-sm font-semibold transition-all ${
                  currency === c ? 'bg-brand-red text-white shadow-md' : 'text-white/60 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={scaleIn}
              className="perspective-1000 h-[520px] cursor-pointer group"
              onMouseEnter={() => setFlipped(plan.id)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div
                className="relative w-full h-full transform-style-3d transition-transform duration-700"
                style={{ transform: flipped === plan.id ? 'rotateY(180deg)' : 'rotateY(0)' }}
              >
                {/* FRONT */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden flex flex-col p-8 border ${
                    plan.featured ? 'border-brand-red red-glow' : 'border-white/10'
                  } bg-brand-black`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-red to-brand-red-light rounded-t-2xl" />
                  )}
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-brand-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6 mt-2">
                    <h3 className="font-inter text-xs font-bold tracking-[0.2em] uppercase text-white mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-end gap-1">
                      <span className="font-playfair text-5xl font-bold text-white">
                        {currency === 'USD' ? `$${plan.price.toLocaleString()}` : `₹${(plan.priceINR || 0).toLocaleString()}`}
                      </span>
                    </div>
                    <p className="font-inter text-xs text-white/40 mt-1">{plan.period}</p>
                  </div>
                  <p className="font-inter text-sm text-white/60 mb-6">{plan.tagline}</p>
                  <ul className="space-y-2 flex-1">
                    {plan.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 font-inter text-sm text-white/70">
                        <Check className="text-white flex-shrink-0 mt-0.5" size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="font-inter text-xs text-white/60 mt-6 text-center">
                    Hover to see full details →
                  </p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-brand-black-deep border border-white/10 flex flex-col p-8">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-6">{plan.name} — Full Details</h3>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 font-inter text-sm text-white/80">
                        <Check className="text-white flex-shrink-0 mt-0.5" size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center justify-center gap-3 w-full font-inter font-bold text-[12px] uppercase tracking-[2px] text-white py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(192,0,28,0.4)]"
                    style={{
                      background: 'linear-gradient(135deg, #C0001C, #E8001F)',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                    }}
                  >
                    Buy This Plan
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-10 font-inter text-sm text-white/50">
          Not sure which plan?{' '}
          <Link href="/contact" className="text-white font-semibold hover:underline">
            Book a free 15-min consultation →
          </Link>
        </p>
      </div>
    </section>
  );
}
