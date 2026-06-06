'use client';
import { motion } from 'framer-motion';

const reviewChips = [
  { name: 'Rajesh K.', time: '2 weeks ago', snippet: '"Absolutely life-changing. My best investment."', color: '#EA4335' },
  { name: 'Sarah M.', time: '1 month ago', snippet: '"Dr Krishna sees what you cannot see in yourself. The clarity I gained in just a few sessions was unprecedented."', color: '#4285F4' },
  { name: 'Anita P.', time: '2 months ago', snippet: '"I went from surviving to thriving in 3 months. His frameworks are highly practical."', color: '#34A853' },
  { name: 'David L.', time: '3 months ago', snippet: '"The most impactful coaching I’ve ever experienced. Highly recommended for any executive looking to level up."', color: '#FBBC04' },
  { name: 'Meera S.', time: '4 months ago', snippet: '"He is direct, compassionate, and astonishingly perceptive. A true master of his craft."', color: '#8E24AA' },
  { name: 'Tom W.', time: '5 months ago', snippet: '"I finally broke the patterns that were holding me back. The ROI on this coaching is infinite."', color: '#EA4335' },
  { name: 'Fatima A.', time: '6 months ago', snippet: '"Dr Krishna helped me navigate a massive career transition with incredible grace and strategic insight."', color: '#4285F4' },
  { name: 'Vikram C.', time: '7 months ago', snippet: '"Exceptional. Simply exceptional. If you are serious about growth, this is the only coach you need."', color: '#34A853' },
  { name: 'Priya R.', time: '8 months ago', snippet: '"The deep psychological insights he brings to leadership coaching are completely unique. It’s not just business advice; it’s personal transformation."', color: '#E91E63' },
  { name: 'Jonathan D.', time: '9 months ago', snippet: '"I was skeptical at first, but Dr Krishna’s methodology is incredibly robust. He helped our entire executive team align."', color: '#00ACC1' },
  { name: 'Neha G.', time: '10 months ago', snippet: '"A safe, non-judgmental space where I could be radically honest. It changed how I lead my company."', color: '#F4511E' },
  { name: 'Omar F.', time: '11 months ago', snippet: '"Brilliant strategies for high-performance. He understands the unique pressures of scaling a business."', color: '#3949AB' },
];

// Split reviews into three rows for the marquee
const row1 = reviewChips.slice(0, 4);
const row2 = reviewChips.slice(4, 8);
const row3 = reviewChips.slice(8, 12);

const ReviewCard = ({ chip }: { chip: any }) => (
  <div className="w-[320px] md:w-[380px] bg-brand-black-deep rounded-2xl p-6 shadow-sm border border-white/10 shrink-0 mx-4 flex flex-col justify-between h-[180px]">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-full text-white flex items-center justify-center font-inter font-bold text-lg shrink-0 shadow-inner"
          style={{ backgroundColor: chip.color }}
        >
          {chip.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-inter font-bold text-white text-sm leading-tight">{chip.name}</h3>
          <p className="font-inter text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{chip.time}</p>
        </div>
        <div className="ml-auto opacity-70">
           <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
           </svg>
        </div>
      </div>
      
      <div className="font-inter text-white/80 text-sm leading-relaxed line-clamp-3">
        {chip.snippet}
      </div>
    </div>
    
    <div className="flex gap-1 mt-auto pt-2">
      {[...Array(5)].map((_, idx) => (
        <span key={idx} className="text-[#FBBC04] text-sm">★</span>
      ))}
    </div>
  </div>
);

export default function GoogleReviews() {
  return (
    <section className="bg-brand-black py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="font-playfair text-5xl font-bold text-white mb-6">
          Words from <span className="italic font-normal">Clients</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
           <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
           </svg>
          <div className="flex gap-1 text-[#FBBC04] text-2xl">
            ★★★★★
          </div>
        </div>
        <p className="font-inter text-white/60 font-medium">4.9 Average Rating across 241 Google Reviews</p>
      </div>

      {/* Infinite Scrolling Marquees */}
      <div className="relative flex flex-col gap-8 transform -rotate-2 scale-105 my-12">
        {/* Left and Right Gradient Fades to create a seamless infinite loop effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex w-max group-hover:[animation-play-state:paused]"
          >
            {[...row1, ...row1, ...row1, ...row1].map((chip, i) => (
              <ReviewCard key={i} chip={chip} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex w-max group-hover:[animation-play-state:paused]"
          >
            {[...row2, ...row2, ...row2, ...row2].map((chip, i) => (
              <ReviewCard key={i} chip={chip} />
            ))}
          </motion.div>
        </div>

        {/* Row 3 - Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex w-max group-hover:[animation-play-state:paused]"
          >
            {[...row3, ...row3, ...row3, ...row3].map((chip, i) => (
              <ReviewCard key={i} chip={chip} />
            ))}
          </motion.div>
        </div>

      </div>

      <div className="flex justify-center mt-16 relative z-20">
        <a
          href="https://g.page/r/review"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 font-inter font-bold text-[12.5px] uppercase tracking-[2px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(192,0,28,0.45)]"
          style={{
            background: 'linear-gradient(135deg, #C0001C, #E8001F)',
            clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
          }}
        >
          Review us on Google
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </section>
  );
}
