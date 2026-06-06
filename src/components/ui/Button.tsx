'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ── Shared clip-path shape ───────────────────────────────────────────── */
const CLIP = {
  sm:  'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  md:  'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
  lg:  'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2.5 font-inter font-bold uppercase tracking-[2px] transition-all duration-300 overflow-hidden group';

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #C0001C, #E8001F)',
      clipPath: CLIP[size],
      color: '#fff',
      boxShadow: '0 4px 24px rgba(192,0,28,0.3)',
    },
    ghost: {
      background: 'transparent',
      clipPath: CLIP[size],
      color: '#fff',
      border: '1px solid rgba(192,0,28,0.5)',
    },
    outline: {
      background: 'rgba(255,255,255,0.03)',
      clipPath: CLIP[size],
      color: 'rgba(255,255,255,0.55)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
  };

  const sizeClass: Record<string, string> = {
    sm: 'px-5 py-2 text-[11px]',
    md: 'px-7 py-3 text-[11.5px]',
    lg: 'px-9 py-4 text-[12.5px]',
  };

  const hoverClass: Record<string, string> = {
    primary: 'hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(192,0,28,0.45)]',
    ghost:   'hover:bg-brand-red hover:border-brand-red hover:text-white hover:-translate-y-0.5',
    outline: 'hover:text-white hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-0.5',
  };

  const cls = `${base} ${sizeClass[size]} ${hoverClass[variant]} ${className}`;

  const shimmer = variant === 'primary' ? (
    <span
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)',
        transform: 'skewX(-15deg)',
      }}
    />
  ) : null;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          style={variantStyles[variant]}
        >
          {shimmer}
          <span className="relative z-10">{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={cls} style={variantStyles[variant]}>
        {shimmer}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cls}
      style={variantStyles[variant]}
      whileTap={{ scale: 0.97 }}
    >
      {shimmer}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
