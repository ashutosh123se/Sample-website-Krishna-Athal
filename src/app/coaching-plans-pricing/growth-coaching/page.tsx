import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'Growth Coaching Plan | Dr Krishna Athal' };

export default function Page() {
  return (
    <div>
      <PageHero
        title="Growth Coaching Plan"
        subtitle="Accelerate your progress with bi-weekly focused sessions."
        primaryCta={{ label: 'Book a Session', href: '/contact' }}
        secondaryCta={{ label: 'View Pricing', href: '/coaching-plans-pricing' }}
      />
      <section className="bg-brand-black py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-inter text-lg text-white/60 leading-relaxed">
            Full page content for the Growth Coaching Plan coming soon. In the meantime, book a free 15-minute consultation to learn more.
          </p>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}