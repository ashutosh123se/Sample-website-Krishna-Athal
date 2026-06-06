import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = { title: 'International Coaching Institute | Dr Krishna Athal' };

export default function ICIPage() {
  return (
    <div>
      <PageHero eyebrow="ICI" title="International Coaching Institute" subtitle="Become a globally certified coach in as little as 7 days." primaryCta={{ label: 'Apply Now', href: '/contact' }} secondaryCta={{ label: 'One-Week Certification', href: '/international-coaching-institute/one-week-certification' }} />
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading eyebrow="One-Week Programme" title="7-Day Coach Certification" align="left" />
            <p className="font-inter text-base text-white/70 leading-relaxed mb-6">Immerse yourself in the fundamentals of coaching across 7 intensive days. By the end, you will have earned your ICI Foundation Certificate and coached real clients under Dr Krishna's supervision.</p>
            <a href="/international-coaching-institute/one-week-certification" className="inline-flex items-center gap-2 font-inter text-sm text-white font-semibold">Learn More →</a>
          </div>
          <div>
            <SectionHeading eyebrow="Full Pathway" title="Become a Certified Coach" align="left" />
            <p className="font-inter text-base text-white/70 leading-relaxed mb-6">The complete pathway from Foundation through Master Coach certification. Built for those who want to build a professional coaching practice or elevate their leadership with coaching skills.</p>
            <a href="/international-coaching-institute/become-a-coach" className="inline-flex items-center gap-2 font-inter text-sm text-white font-semibold">Explore the Path →</a>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
