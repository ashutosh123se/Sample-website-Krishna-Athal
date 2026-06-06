'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const credentials = [
  { label: 'Academic Rigor', value: 'PhD, Oxford, King’s College' },
  { label: 'Experience', value: '12+ Years Coaching' },
  { label: 'Global Reach', value: '3 Continents' },
  { label: 'Impact', value: '500+ Leaders Transformed' },
];

export default function AboutStrip() {
  return (
    <section className="bg-brand-black-deep py-32 relative overflow-hidden border-t border-white/5">
      
      {/* Immersive ambient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left: Dynamic Overlapping Image Parallax */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Main large portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 top-0 w-3/4 h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image 
                src="/images/lifestyle1.png" 
                alt="Dr Krishna Speaking"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black-deep/80 via-transparent to-transparent" />
            </motion.div>

            {/* Smaller overlapping portrait floating animatedly */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 1, delay: 0.3, ease: "easeOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              animate={{ y: [0, -15, 0] }} // Continuous floating animation
              className="absolute right-0 bottom-0 w-[55%] h-[380px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-brand-red/30 z-20"
            >
              <Image 
                src="/images/portrait.png" 
                alt="Dr Krishna Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              {/* Subtle glass effect over the floating image */}
              <div className="absolute inset-0 bg-brand-black/10 backdrop-blur-[1px]" />
            </motion.div>

            {/* Floating Signature Element */}
            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -left-10 bottom-24 z-30 pointer-events-none opacity-80"
            >
              <h3 className="font-playfair italic text-6xl text-brand-red/50 tracking-wider drop-shadow-xl">
                Dr. Krishna Athal
              </h3>
            </motion.div>
          </div>

          {/* Mobile Single Image Fallback */}
          <div className="md:hidden relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="/images/portrait.png" 
              alt="Dr Krishna Athal Portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Highly Animated Editorial Typography & Credentials */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-brand-red block mb-6">
                The Coach Behind The Leaders
              </span>

              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Mastery Without <br/>
                <span className="italic font-normal text-white/50">Compromise.</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-lg text-white/70 leading-relaxed mb-10"
            >
              Ranked among the top global voices in Life & Executive Coaching, Dr Krishna Athal brings rigorous academic foundations from Oxford and King’s College London directly into the coaching room. It’s an empathy-first, fiercely results-driven methodology designed to unlock peak performance.
            </motion.p>

            {/* Animated Bento Box Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-brand-red/50 transition-all duration-300"
                >
                  <span className="block font-inter text-[10px] uppercase tracking-wider text-brand-red mb-1">
                    {cred.label}
                  </span>
                  <span className="block font-playfair font-semibold text-lg text-white leading-tight">
                    {cred.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 font-inter font-bold text-[12.5px] uppercase tracking-[2px] text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(192,0,28,0.45)]"
                style={{
                  background: 'linear-gradient(135deg, #C0001C, #E8001F)',
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                }}
              >
                Read The Full Story
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
