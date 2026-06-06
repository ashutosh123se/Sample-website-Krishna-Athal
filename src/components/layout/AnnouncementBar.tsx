'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true); // default to true to prevent hydration mismatch flash

  useEffect(() => {
    const stored = localStorage.getItem('announcement-dismissed');
    if (!stored) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0, transition: { duration: 0.3 } }}
          className="relative overflow-hidden flex items-center justify-center border-b border-white/[0.08]"
          style={{
            background: 'linear-gradient(90deg, #111 0%, #1a0505 50%, #111 100%)',
          }}
        >
          {/* Subtle animated light sweep */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(192,0,28,0.15), transparent)',
              width: '50%',
            }}
          />

          <div className="w-full py-3 px-12 relative z-10 flex items-center justify-center group">
            
            {/* Desktop View */}
            <p className="hidden md:block text-center font-inter text-[12.5px] font-medium tracking-wide text-white/80">
              <span className="text-[#FBBC04] mr-2 text-sm tracking-widest">★★★★★</span>
              <span className="text-white/60">"</span>
              <span className="font-playfair text-white text-[14px] italic font-semibold">Dr Krishna Athal</span>{' '}
              is esteemed as one of the finest Life &amp; Executive Coaches in India and Mauritius.
              <span className="text-white/60">"</span>
              <span className="mx-3 text-brand-red">—</span>
              <span className="text-white/50 uppercase tracking-[2px] text-[10px]">Global Index 2026</span>
            </p>

            {/* Mobile View */}
            <div className="md:hidden w-full overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
                className="flex w-max"
              >
                {[...Array(2)].map((_, i) => (
                  <p key={i} className="font-inter text-[11px] font-medium tracking-wide text-white/80 pr-8">
                    <span className="text-[#FBBC04] mr-1">★</span>
                    "
                    <span className="font-playfair text-white text-[13px] italic font-semibold mx-1">Dr Krishna Athal</span>
                    is esteemed as one of the finest Life &amp; Executive Coaches..."
                    <span className="mx-2 text-brand-red">—</span>
                    <span className="text-white/50 uppercase tracking-[1px] text-[9px]">Global Index 2026</span>
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-red/20 text-white/40 hover:text-brand-red transition-all duration-300"
              aria-label="Dismiss announcement"
            >
              <X size={12} strokeWidth={2.5} />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
