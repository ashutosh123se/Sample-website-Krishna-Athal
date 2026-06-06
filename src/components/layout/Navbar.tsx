'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { dropdownVariants } from '@/lib/animations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-brand-red to-brand-red-light z-[9999] transition-all duration-100 pointer-events-none"
      />

      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'bg-transparent'
        }`}
        style={{ top: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-playfair text-2xl font-bold text-white tracking-wide">
              Dr Krishna Athal
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => {
              const hasDropdown = 'sections' in item;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && openDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && closeDropdown()}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-inter text-sm font-medium transition-colors duration-200 ${
                      activeDropdown === item.label ? 'text-white' : 'text-white/90 hover:text-brand-red'
                    }`}
                  >
                    {item.label}
                    {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Mega-dropdown */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <>
                          <div className="mega-backdrop" onClick={() => setActiveDropdown(null)} />
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`absolute top-full mt-4 w-max max-w-[90vw] lg:max-w-3xl bg-brand-black-mid border border-brand-red/15 shadow-2xl rounded-lg overflow-hidden z-50 ${idx >= 3 ? 'right-0' : 'left-0'}`}
                            onMouseEnter={() => openDropdown(item.label)}
                            onMouseLeave={() => closeDropdown()}
                          >
                            <div className="grid grid-cols-3 gap-0 p-6">
                              {(item as any).sections.map((section: any) => (
                                <div key={section.title} className="pr-6">
                                  <h4 className="font-inter text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-4">
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-2">
                                    {section.links.map((link: any) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          onClick={() => setActiveDropdown(null)}
                                          className="group flex items-center gap-2 font-inter text-sm text-white/70 hover:text-brand-red transition-colors duration-150 py-1"
                                        >
                                          <span className="w-0 h-[1px] bg-brand-red group-hover:w-3 transition-all duration-200" />
                                          {link.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 font-inter font-bold text-[11px] uppercase tracking-[2px] text-white px-6 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(192,0,28,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #C0001C, #E8001F)',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
              }}
            >
              Book a Session
            </Link>

            <button
              className="lg:hidden text-white/90 hover:text-brand-red transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-brand-black-mid z-[70] overflow-y-auto flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-brand-red/15">
                <span className="font-playfair text-xl text-white font-bold">Dr Krishna Athal</span>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-brand-red">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 p-5 space-y-1">
                {navItems.map((item, i) => {
                  const hasDropdown = 'sections' in item;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      {hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                            className="w-full flex items-center justify-between text-left py-3 px-3 font-inter text-white/90 hover:text-brand-red transition-colors rounded-lg hover:bg-white/5"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180 text-white' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileExpanded === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                {(item as any).sections.map((section: any) => (
                                  <div key={section.title} className="pl-4 pb-2">
                                    <h5 className="font-inter text-[10px] font-bold tracking-widest uppercase text-white/60 px-3 py-2">
                                      {section.title}
                                    </h5>
                                    {section.links.map((link: any) => (
                                      <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-2 px-3 font-inter text-sm text-white/70 hover:text-brand-red transition-colors rounded"
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-3 px-3 font-inter text-white/90 hover:text-brand-red transition-colors rounded-lg hover:bg-white/5"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-5 border-t border-brand-red/15">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full font-inter font-bold text-[12px] uppercase tracking-[2px] text-white py-3.5 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #C0001C, #E8001F)',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                >
                  Book a Session
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
