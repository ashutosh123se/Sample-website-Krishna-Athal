import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

// ── Career & Growth Coaching ──
export const metadata: Metadata = { title: 'Career & Growth Coaching | Dr Krishna Athal' };

const accordionItems = ['Career Clarity & Direction', 'Personal Branding & Positioning', 'Salary Negotiation & Advancement', 'Work-Life Integration', 'Confidence & Imposter Syndrome', 'Job Search & Interview Strategy'];

export default function CareerGrowthPage() {
  return (
    <div>
      <PageHero eyebrow="Individual Coaching" title="Career & Growth Coaching" subtitle="Direction, confidence, and momentum in work and life." primaryCta={{ label: 'Book a Session', href: '/contact' }} />
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="Who This Is For" title="Are You At A Crossroads?" align="left" />
            {['Professionals at a career crossroads', 'Those seeking promotion or transition', 'High-achievers feeling unfulfilled', 'People rebuilding confidence after setback'].map((p, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                <span className="font-inter text-sm text-white/80">{p}</span>
              </div>
            ))}
          </div>
          <div>
            <SectionHeading eyebrow="What We Work On" title="Programme Focus Areas" align="left" />
            <div className="space-y-2">
              {accordionItems.map((item, i) => (
                <details key={i} className="glass rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-inter text-sm font-medium text-white list-none">{item}<span className="text-white group-open:rotate-45 transition-transform">+</span></summary>
                  <div className="px-4 pb-4 font-inter text-xs text-white/60">Deep work on this area through structured sessions, tools, and between-session assignments.</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Transformation map */}
      <section className="bg-brand-black-deep py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="The Shift" title="Where You Are vs Where You Will Be" align="center" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
            <div className="bg-brand-black-mid p-10">
              <h3 className="font-inter text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Where You Are</h3>
              {['Unclear about next steps', 'Feeling stuck or overlooked', 'Underconfident in interviews', 'Burning out without direction'].map((p, i) => <p key={i} className="font-inter text-sm text-white/60 mb-3">— {p}</p>)}
            </div>
            <div className="bg-white/[0.02] border-l border-white/10 p-10">
              <h3 className="font-inter text-sm font-bold uppercase tracking-widest text-white mb-6">Where You Will Be</h3>
              {['Clear, confident, and decisive', 'On a trajectory you designed', 'Interview-ready and compelling', 'Energised by meaningful work'].map((p, i) => <p key={i} className="font-inter text-sm text-white mb-3">✓ {p}</p>)}
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
