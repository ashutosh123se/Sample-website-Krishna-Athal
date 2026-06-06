'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Quote } from 'lucide-react';
import Button from '@/components/ui/Button';

const storyPoints = [
  'Rigorous academic foundation — PhD, Oxford, King\'s College London',
  'Deep human psychology & neuroscience of behaviour change',
  'Empathy-first, always results-focused methodology',
  'Safe, non-judgmental space for radical honesty',
  'Fully personalised programmes — no templates'
];

export default function HisStory() {
  return (
    <section className="bg-brand-black py-32 relative overflow-hidden">
      
      {/* Massive Abstract Background Watermark */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute -right-[20%] -top-[20%] text-[400px] font-playfair font-bold text-white/[0.02] leading-none pointer-events-none select-none"
      >
        KA
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Animated Dual-Image Editorial Collage */}
          <div className="relative h-[600px] w-full hidden md:block">
            
            {/* Back Image (Large) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 top-0 w-3/4 h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image 
                src="/images/lifestyle2.png" 
                alt="Dr Krishna Speaking"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-black/20 mix-blend-multiply" />
            </motion.div>

            {/* Front Image (Floating) */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              animate={{ y: [0, -20, 0] }} // Continuous floating animation
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute right-0 bottom-0 w-[60%] h-[400px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-brand-red/30 z-20"
            >
              <Image 
                src="/images/portrait.png" 
                alt="Dr Krishna Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </motion.div>

            {/* Floating Floating Quote Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-30 bg-brand-black/80 backdrop-blur-md border border-brand-red/50 p-6 rounded-2xl shadow-2xl max-w-[280px]"
            >
              <Quote className="text-brand-red mb-3" size={32} />
              <p className="font-playfair italic text-sm text-white/90 leading-relaxed">
                "Ranked among the top global voices in Life & Executive Coaching."
              </p>
            </motion.div>
          </div>

          {/* Mobile Single Image Fallback */}
          <div className="md:hidden relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
            <Image 
              src="/images/portrait.png" 
              alt="Dr Krishna Athal Portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Highly Animated Text Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-red" />
                <span className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
                  His Story
                </span>
              </div>

              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.2]">
                A Life Dedicated to <br/>
                <span className="italic font-normal text-white/60">Human Transformation.</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-base text-white/70 leading-relaxed mb-6"
            >
              Dr Krishna Athal is a globally recognised Life & Executive Coach with over 12 years of experience transforming individuals and organisations. Armed with a PhD in Leadership and advanced qualifications from Oxford and King's College London, he brings unparalleled academic rigour to every coaching engagement.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-base text-white/70 leading-relaxed mb-10"
            >
              His coaching philosophy is rooted in the belief that sustainable change begins with self-awareness, and that every person has the innate capacity for profound growth when given the right support, frameworks, and challenge.
            </motion.p>

            {/* Animated Glowing Feature List */}
            <ul className="space-y-4 mb-12 border-l border-white/10 pl-6 relative">
              {/* Subtle animated line on the border */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-brand-red to-transparent"
              />

              {storyPoints.map((p, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="mt-1 w-5 h-5 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                    <CheckCircle2 className="text-brand-red group-hover:text-white w-3 h-3 transition-colors duration-300" />
                  </div>
                  <span className="font-inter text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button href="/contact" variant="primary">
                Book a Session with Dr Krishna →
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
