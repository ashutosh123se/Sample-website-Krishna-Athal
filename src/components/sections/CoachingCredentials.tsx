'use client';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const coachingCreds = [
  { title: 'Master Coach Certification', institution: 'ICI Singapore' },
  { title: 'Advanced Coaching Practice', institution: 'ICI Singapore' },
  { title: 'Core Coaching Competencies', institution: 'ICI Singapore' },
  { title: 'Foundations of Life Coaching', institution: 'ICI Singapore' },
  { title: 'Certified Yoga & Meditation Teacher', institution: 'Rishikesh Yog Nirvana, India' },
];

export default function CoachingCredentials() {
  return (
    <section className="bg-brand-black py-32 relative overflow-hidden">
      
      {/* Immersive background texture */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-center mb-20">
          <SectionHeading eyebrow="Coaching Credentials" title="Professional Certifications" align="center" />
        </div>

        {/* 
          Using flex wrap with center justification to elegantly handle 5 items. 
          First row will have 3, second row will have 2 beautifully centered.
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {coachingCreds.map((cred, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-brand-black-deep rounded-2xl p-8 border border-white/5 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,67,53,0.15)] overflow-hidden"
            >
              {/* Premium Watermark in the background */}
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <ShieldCheck size={180} />
              </div>

              {/* Glowing hover sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500 shadow-lg">
                  <Award className="text-white group-hover:scale-110 transition-transform duration-500" size={24} />
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold text-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {cred.title}
                </h3>
                
                <div className="inline-flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red/50 group-hover:bg-brand-red transition-colors duration-300" />
                  <p className="font-inter text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300 tracking-wide">
                    {cred.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
