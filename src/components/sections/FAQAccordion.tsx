'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIdx === i;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-300 bg-brand-black"
            style={{
              background: isOpen ? 'rgba(192,0,28,0.03)' : 'rgba(255,255,255,0.02)',
              borderColor: isOpen ? 'rgba(192,0,28,0.3)' : 'rgba(255,255,255,0.06)',
              boxShadow: isOpen ? '0 12px 32px rgba(0,0,0,0.5)' : 'none',
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 outline-none"
            >
              <span
                className="font-playfair text-[1.2rem] md:text-[1.3rem] font-semibold transition-colors duration-300 pr-8"
                style={{ color: isOpen ? '#fff' : 'rgba(255,255,255,0.85)' }}
              >
                {faq.q}
              </span>
              
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: isOpen ? 'rgba(192,0,28,0.5)' : 'rgba(255,255,255,0.1)',
                  background: isOpen ? 'rgba(192,0,28,0.15)' : 'transparent',
                  color: isOpen ? '#C0001C' : 'rgba(255,255,255,0.4)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="h-px w-12 bg-brand-red mb-4" />
                    <p className="font-inter text-[14.5px] text-white/50 leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
