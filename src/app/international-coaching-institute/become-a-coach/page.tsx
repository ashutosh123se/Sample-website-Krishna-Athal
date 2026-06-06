import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'Become a Coach | ICI | Dr Krishna Athal' };

const levels = [
  { level: 'Level 1', title: 'Foundation Certificate', duration: '7 Days' },
  { level: 'Level 2', title: 'Practitioner Certificate', duration: '3 Months' },
  { level: 'Level 3', title: 'Advanced Practitioner', duration: '6 Months' },
  { level: 'Level 4', title: 'Master Coach', duration: '12 Months' },
];

export default function BecomeACoachPage() {
  return (
    <div>
      <PageHero eyebrow="ICI Certification Path" title="Become a Certified Coach" subtitle="Four progressive levels from Foundation to Master Coach. All led personally by Dr Krishna Athal." primaryCta={{ label: 'Apply Now', href: '/contact' }} />
      <section className="bg-brand-black py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levels.map((l, i) => (
              <div key={i} className="glass rounded-2xl p-8 border-l-4 border-brand-red">
                <span className="font-inter text-xs text-white/60 uppercase tracking-widest">{l.level} · {l.duration}</span>
                <h3 className="font-playfair text-2xl text-white mt-2">{l.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
