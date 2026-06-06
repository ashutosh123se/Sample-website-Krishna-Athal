import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'One-Week Certification | ICI | Dr Krishna Athal' };

export default function OneWeekCertPage() {
  const modules = ['Day 1: The Coaching Mindset & ICF Core Competencies', 'Day 2: Active Listening & Powerful Questions', 'Day 3: Goal Setting & Creating Awareness', 'Day 4: Designing Actions & Managing Progress', 'Day 5: Coaching Practice — Supervised Real Sessions', 'Day 6: Building Your Coaching Identity & Ethics', 'Day 7: Final Assessment & ICI Certification Ceremony'];
  return (
    <div>
      <PageHero eyebrow="ICI Programme" title="One-Week Coach Certification" subtitle="7 days of intensive, hands-on coach training. Walk away certified and ready to practise." primaryCta={{ label: 'Register Now', href: '/contact' }} />
      <section className="bg-brand-black py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-playfair text-3xl text-white mb-8">7-Day Schedule</h2>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent" />
            <div className="space-y-8">
              {modules.map((mod, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-8 w-6 h-6 rounded-full border-2 border-brand-red bg-brand-black flex items-center justify-center text-white text-xs font-bold">{i + 1}</div>
                  <p className="font-inter text-base text-white/80">{mod}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
