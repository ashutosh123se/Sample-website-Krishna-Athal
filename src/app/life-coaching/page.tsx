import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Life Coaching | Dr Krishna Athal',
  description: 'Clarity, courage, and conscious growth for your next chapter. Life coaching with Dr Krishna Athal.',
};
const focusAreas = ['Personal clarity and direction', 'Self-limiting beliefs and patterns', 'Emotional intelligence', 'Relationships and communication', 'Purpose, meaning, and values'];
const challenges = [
  { pain: 'Feeling stuck with no direction', outcome: 'Gaining crystal clarity and decisive momentum' },
  { pain: 'Chronic lack of confidence', outcome: 'Building deep, unshakeable self-trust' },
  { pain: 'Overwhelming stress and burnout', outcome: 'Mastering emotional regulation and balance' },
  { pain: 'Unclear life purpose', outcome: 'Discovering authentic meaning and direction' },
  { pain: 'Self-sabotage and procrastination', outcome: 'Breaking patterns and executing consistently' },
  { pain: 'Work-life imbalance', outcome: 'Creating sustainable alignment that fits your life' },
];

export default function LifeCoachingPage() {
  return (
    <div>
      <PageHero eyebrow="Individual Coaching" title="Life Coaching" subtitle="Clarity, courage, and conscious growth for your next chapter." primaryCta={{ label: 'Book a Session', href: '/contact' }} secondaryCta={{ label: 'View Pricing', href: '/coaching-plans-pricing' }} />
      
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading eyebrow="What is Life Coaching?" title="Your Life, Redesigned" align="left" />
            <p className="font-inter text-base text-white/70 leading-relaxed mb-6">Life coaching is a structured partnership designed to help you create real, lasting change in the areas of your life that matter most. Unlike therapy, coaching is future-focused — we work on where you are going, not just where you have been.</p>
            <p className="font-inter text-base text-white/70 leading-relaxed">Through a combination of powerful questioning, neuroscience-backed frameworks, and genuine accountability, I help you move from confusion to clarity, from stagnation to momentum.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-white mb-6">5 Core Focus Areas</h3>
            {focusAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-4 glass rounded-xl p-4">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white font-bold font-inter text-sm flex-shrink-0">{i + 1}</span>
                <span className="font-inter text-sm text-white/80">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black-deep py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-16"><SectionHeading eyebrow="Transformation" title="Common Challenges I Help With" align="center" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="p-6 border-b border-white/10">
                  <p className="font-inter text-sm text-white/50">{c.pain}</p>
                </div>
                <div className="p-6 bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-white flex-shrink-0 mt-0.5" size={16} />
                    <p className="font-inter text-sm text-white font-medium">{c.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white-DEFAULT py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="My Approach" title="3 Pillars of My Coaching" align="center" dark={false} /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: '🧠', title: 'Psychology & Neuroscience', desc: 'Every technique is grounded in how the brain actually works, not motivational platitudes.' }, { icon: '📋', title: 'Personalised Action Plans', desc: 'No two clients are the same. Your plan is built from scratch, for your specific goals and context.' }, { icon: '✓', title: 'Accountability & Support', desc: 'Between sessions, you receive support and check-ins to keep momentum high.' }].map((p, i) => (
              <div key={i} className="bg-brand-black rounded-2xl p-8 text-center border border-white/10">
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className="font-playfair text-xl text-white mb-3">{p.title}</h3>
                <p className="font-inter text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
