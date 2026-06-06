import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/sections/CTABanner';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Executive Coaching | Dr Krishna Athal',
  description: 'Calm authority, clear decisions, and high-trust leadership. Executive coaching with Dr Krishna Athal.',
};

const focusAreas = ['Leadership Presence', 'Decision-Making Under Pressure', 'Emotional Regulation', 'Strategic Thinking', 'Team Trust & Influence', 'Executive Communication'];
const timeline = [
  { session: 'Session 1', title: 'Discovery & Assessment', desc: 'Deep-dive into your leadership context, current challenges, and aspirations. We establish your coaching objectives.' },
  { session: 'Sessions 2–4', title: 'Deep Pattern Work', desc: 'Uncovering the beliefs, habits, and patterns that are either driving or limiting your leadership effectiveness.' },
  { session: 'Sessions 5–8', title: 'Strategy & Practice', desc: 'Building new frameworks, communication strategies, and decision-making tools tested in real situations.' },
  { session: 'Ongoing', title: 'Accountability & Refinement', desc: 'Consolidating gains, refining the approach, and sustaining the changes at the highest level.' },
];

export default function ExecutiveCoachingPage() {
  return (
    <div>
      <PageHero eyebrow="Individual Coaching" title="Executive Coaching" subtitle="Calm authority, clear decisions, and high-trust leadership." pills={['Oxford', "King's College", 'PhD in Leadership']} primaryCta={{ label: 'Book a Session', href: '/contact' }} secondaryCta={{ label: 'View Pricing', href: '/coaching-plans-pricing' }} />

      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="For Whom?" title="Executive Coaching is For You If…" align="center" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['C-Suite Executives', 'Mid-Senior Leaders', 'High-Potential Managers'].map((profile, i) => (
              <div key={i} className="glass rounded-2xl p-10 text-center border border-white/10 hover:border-brand-red transition-colors">
                <h3 className="font-playfair text-2xl text-white mb-4">{profile}</h3>
                <p className="font-inter text-sm text-white/60">You are excellent at what you do, but you know there is a next level of leadership waiting for you.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hexagonal core focus */}
      <section className="bg-brand-black-deep py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="Core Focus" title="6 Pillars of Executive Excellence" align="center" /></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <div key={i} className="glass rounded-2xl p-8 text-center group hover:border-brand-red hover:-translate-y-1 transition-all">
                <span className="font-playfair text-5xl text-white/20 group-hover:text-brand-red/40 transition-colors font-bold block mb-4">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-inter text-sm font-semibold text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-black py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="The Experience" title="The Executive Coaching Journey" align="center" /></div>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent" />
            <div className="space-y-10">
              {timeline.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-8 w-6 h-6 rounded-full border-2 border-brand-red bg-brand-black flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-brand-red" /></div>
                  <span className="font-inter text-xs text-white/60 uppercase tracking-widest">{step.session}</span>
                  <h3 className="font-playfair text-xl text-white mt-1 mb-2">{step.title}</h3>
                  <p className="font-inter text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stat pills */}
      <section className="bg-brand-black-mid py-16 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {['87% report measurable leadership improvement', 'Average 3-month engagement', 'Clients in 15+ countries'].map((stat, i) => (
            <div key={i} className="px-6 py-4 glass rounded-full"><p className="font-inter text-sm text-white font-medium">{stat}</p></div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
