import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'Testimonials | Dr Krishna Athal', description: 'Real stories of transformation from 500+ satisfied clients of Dr Krishna Athal.' };

export default function TestimonialsPage() {
  return (
    <div>
      <PageHero eyebrow="Client Experiences" title="Real Stories of Transformation" subtitle="Over 500 satisfied clients. These are just a few of their stories." />

      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="glass rounded-2xl p-8 flex flex-col hover:border-brand-red transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">{Array.from({ length: t.rating }).map((_, i) => <span key={i} className="text-white">★</span>)}</div>
                  <span className="font-inter text-xs text-white/30 uppercase tracking-wide">{t.company}</span>
                </div>
                <p className="font-playfair italic text-white/80 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white font-bold font-playfair">{t.name.charAt(0)}</div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-white">{t.name}</p>
                    <p className="font-inter text-xs text-white/40">{t.role} — {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
