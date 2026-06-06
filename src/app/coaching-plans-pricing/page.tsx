import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import PricingSection from '@/components/sections/PricingSection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coaching Plans & Pricing | Dr Krishna Athal',
  description: 'Choose the coaching plan that fits your pace — Foundation $160, Growth $560, Action $720, Mastery $1,120.',
};

const faqs = [
  { q: 'How many sessions per month?', a: 'Foundation includes 1 session. All other plans (Growth, Action, Mastery) include 4 sessions per month, each 60 minutes in duration.' },
  { q: 'Can I upgrade my plan?', a: 'Yes, you can upgrade your plan at any time. The difference in price will be prorated for your current billing cycle.' },
  { q: 'Are sessions online or in-person?', a: 'Sessions are available both online (Zoom) and in-person in Mumbai, Port Louis, or Singapore, depending on availability.' },
  { q: 'What happens in a first session?', a: 'The first session is a discovery session. We explore your context, your goals, your patterns, and align on the coaching objectives and approach.' },
  { q: 'Is there a refund policy?', a: 'We offer a full refund if you cancel within 24 hours of your first session. After that, please refer to our refund policy page for details.' },
  { q: 'Can I try before committing?', a: 'Absolutely. We offer a free 15-minute discovery call to ensure we are the right fit before you invest in any plan.' },
];

const planFeatureTable = [
  { feature: 'Coaching Sessions/Month', foundation: '1', growth: '4', action: '4', mastery: '4' },
  { feature: 'Personality Assessment', foundation: '✓', growth: '✓', action: '✓', mastery: '✓' },
  { feature: 'Coaching Resources', foundation: '✓', growth: '✓', action: '✓', mastery: '✓' },
  { feature: 'Goal & Vision Setting', foundation: '✗', growth: '✓', action: '✓', mastery: '✓' },
  { feature: 'Progress Tracking', foundation: '✗', growth: '✓', action: '✓', mastery: '✓' },
  { feature: 'Time & Energy Management', foundation: '✗', growth: '✗', action: '✓', mastery: '✓' },
  { feature: 'Accountability Check-ins', foundation: '✗', growth: '✗', action: '✓', mastery: '✓' },
  { feature: 'Leadership Development', foundation: '✗', growth: '✗', action: '✗', mastery: '✓' },
  { feature: 'High-Performance Strategies', foundation: '✗', growth: '✗', action: '✗', mastery: '✓' },
];

export default function CoachingPlansPage() {
  return (
    <div>
      <PageHero
        eyebrow="Investment in Yourself"
        title="Coaching Plans & Pricing"
        subtitle="Choose a plan that fits your pace, goals, and season of life. All plans include access to Dr Krishna directly — no intermediaries."
        primaryCta={{ label: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Pre-Coaching Questionnaire', href: '/pre-coaching-questionnaire' }}
      />

      {/* Comparison table */}
      <section className="bg-brand-black py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12">
            <SectionHeading eyebrow="Compare" title="Plan Comparison" align="center" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 font-inter text-sm text-white/50">Feature</th>
                  {['Foundation', 'Growth', 'Action', 'Mastery'].map((plan) => (
                    <th key={plan} className={`text-center py-4 px-4 font-playfair text-lg ${plan === 'Action' ? 'text-white' : 'text-white'}`}>
                      {plan}
                      {plan === 'Action' && <div className="text-xs font-inter text-white/60 font-normal">★ Popular</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planFeatureTable.map((row, i) => (
                  <tr key={i} className="border-b border-brand-white/5">
                    <td className="py-3 pr-8 font-inter text-sm text-white/70">{row.feature}</td>
                    {[row.foundation, row.growth, row.action, row.mastery].map((val, j) => (
                      <td key={j} className="text-center py-3 px-4">
                        <span className={`font-inter text-sm font-semibold ${val === '✓' ? 'text-white' : val === '✗' ? 'text-white/20' : 'text-white'}`}>
                          {val}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="pt-6 pr-8 font-playfair text-xl font-bold text-white">Price (USD)</td>
                  {['$160', '$560', '$720', '$1,120'].map((price, j) => (
                    <td key={j} className={`text-center pt-6 px-4 font-playfair text-2xl font-bold ${j === 2 ? 'text-white' : 'text-white'}`}>
                      {price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <PricingSection />

      {/* Individual plan links */}
      <section className="bg-brand-black-deep py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Foundation', href: '/coaching-plans-pricing/foundation-coaching', price: '$160' },
            { name: 'Growth', href: '/coaching-plans-pricing/growth-coaching', price: '$560' },
            { name: 'Action', href: '/coaching-plans-pricing/action-coaching', price: '$720' },
            { name: 'Mastery', href: '/coaching-plans-pricing/mastery-coaching', price: '$1,120' },
          ].map((plan) => (
            <Link key={plan.name} href={plan.href}
              className="glass rounded-xl p-6 text-center hover:border-brand-red transition-colors group">
              <h3 className="font-playfair text-lg text-white mb-1 group-hover:text-brand-red transition-colors">{plan.name}</h3>
              <p className="font-inter text-2xl font-bold text-white">{plan.price}</p>
              <p className="font-inter text-xs text-white/40 mt-2">View full details →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-black py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <SectionHeading eyebrow="FAQ" title="Common Questions" align="center" />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
