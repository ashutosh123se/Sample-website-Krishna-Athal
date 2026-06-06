'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const books = [
  {
    title: 'Mastering Leadership',
    subtitle: 'The Executive Guide to Peak Performance',
    image: '/images/book1.png',
  },
  {
    title: 'The Executive Mind',
    subtitle: 'Psychology of Strategic Decision Making',
    image: '/images/book2.png',
  },
];

export default function BookStrip() {
  return (
    <section className="bg-brand-black-deep py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-inter text-xs text-brand-red tracking-[0.2em] uppercase font-bold block mb-4">
              Authorship
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-white font-semibold mb-6">
              Insights That Transform
            </h2>
            <p className="font-inter text-base text-white/60 leading-relaxed mb-8 max-w-lg">
              Explore best-selling publications by Dr Krishna Athal. Distilling decades of executive coaching and human psychology into actionable frameworks for leaders and visionaries.
            </p>
            <Button href="/books" variant="outline">
              View All Publications
            </Button>
          </motion.div>

          {/* Right: Book Images */}
          <div className="relative h-[400px] flex items-center justify-center">
            {books.map((book, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: i === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -5 : 5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, type: 'spring' }}
                className={`absolute w-48 md:w-64 aspect-[2/3] rounded-sm overflow-hidden shadow-2xl border border-white/10 ${i === 0 ? '-translate-x-12 z-10' : 'translate-x-12 z-0'}`}
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
