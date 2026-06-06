import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = { title: 'Relationship & Couple Coaching | Dr Krishna Athal' };

const topics = ['Communication Patterns', 'Trust & Vulnerability', 'Conflict Resolution', 'Emotional Intimacy', 'Shared Values & Goals', 'Boundaries & Expectations'];

export default function RelationshipPage() {
  return (
    <div>
      <PageHero eyebrow="Individual Coaching" title="Relationship & Couple Coaching" subtitle="Repair patterns, deepen trust, and communicate with care." primaryCta={{ label: 'Book a Session', href: '/contact' }} />
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="What We Explore" title="6 Core Areas of Relationship Work" align="center" /></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <div key={i} className="glass rounded-2xl p-8 text-center hover:border-brand-red transition-colors hover:-translate-y-1 transform">
                <span className="font-playfair text-3xl text-white/30 font-bold block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-inter text-sm font-semibold text-white">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-black-deep py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass rounded-2xl p-12 text-center border border-white/10">
            <span className="text-4xl block mb-4">🕊️</span>
            <h2 className="font-playfair text-3xl text-white mb-4">A Safe Space Commitment</h2>
            <p className="font-inter text-base text-white/60 leading-relaxed">Every session is a confidential, non-judgmental space. You will never be told what to feel. You will be gently challenged to understand what you actually feel — and why. This is where real intimacy is rebuilt.</p>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
