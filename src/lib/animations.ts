import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -8,
    scaleY: 0.97,
    transition: { duration: 0.18 },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(201,168,76,0)' },
  hover: {
    y: -4,
    boxShadow: '0 0 30px rgba(201,168,76,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Shared viewport options for whileInView
export const viewport = { once: true, margin: '-80px' };
