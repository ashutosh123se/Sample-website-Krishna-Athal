import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          DEFAULT: '#C0001C',
          light: '#E8001F',
          dark: '#8B0013',
        },
        'brand-black': {
          DEFAULT: '#0D0D0D',
          mid: '#1A1A1A',
          deep: '#050505',
        },
        'brand-white': {
          DEFAULT: '#FFFFFF',
          warm: '#F5F5F5',
        },
        text: {
          'brand-red': '#C0001C',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1s infinite',
        'float-delay2': 'float 4s ease-in-out 2s infinite',
        'float-delay3': 'float 4s ease-in-out 3s infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin 65s linear infinite reverse',
        'pulse-red': 'pulseRed 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(192,0,28,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(192,0,28,0.6)' },
        },
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #C0001C, #E8001F, #C0001C)',
        'black-gradient': 'linear-gradient(180deg, #050505 0%, #0D0D0D 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
