import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = { title: 'Entrepreneur Mentoring | Dr Krishna Athal' };

const tabs = ['Mindset & Identity', 'Business Strategy', 'Leadership & Team', 'Scale & Sustainability'];
const patterns = ['Imposter Syndrome', 'Burnout', 'Isolation', 'Decision Paralysis', 'People-Pleasing', 'Perfectionism', 'Fear of Failure', 'Comparison Trap'];

export default function EntrepreneurPage() {
  return (
    <div>
      <PageHero eyebrow="Individual Coaching" title="Entrepreneur Mentoring" subtitle="Build with purpose, lead self first, scale without burnout." primaryCta={{ label: 'Book a Session', href: '/contact' }} />
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading eyebrow="Who It's For" title="Built for Founders" align="left" />
            {['Startup founders (0→1 stage)', 'Growth-stage entrepreneurs', 'Solo founders and solopreneurs', 'Business owners ready to scale'].map((p, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-white/5 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">→</span>
                <span className="font-inter text-sm text-white/80">{p}</span>
              </div>
            ))}
          </div>
          <div>
            <SectionHeading eyebrow="Programme Areas" title="4-Track Mentoring" align="left" />
            <div className="grid grid-cols-2 gap-4">
              {tabs.map((tab, i) => (
                <div key={i} className="glass rounded-xl p-6 hover:border-brand-red transition-colors">
                  <span className="font-inter text-xs text-white/60 tracking-widest uppercase block mb-2">Track {i + 1}</span>
                  <h3 className="font-inter text-sm font-semibold text-white">{tab}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-black-deep py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading eyebrow="Pattern Work" title="Common Blocks I Help Unblock" align="center" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {patterns.map((p, i) => (
              <span key={i} className="px-5 py-2 rounded-full border border-white/10 font-inter text-sm text-white/80 hover:bg-white/5 transition-colors cursor-default">{p}</span>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
