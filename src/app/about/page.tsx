import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import StatCounter from '@/components/ui/StatCounter';
import { CheckCircle2 } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';
import EducationTimeline from '@/components/sections/EducationTimeline';
import CoachingCredentials from '@/components/sections/CoachingCredentials';
import Differentiators from '@/components/sections/Differentiators';
import HisStory from '@/components/sections/HisStory';

export const metadata: Metadata = {
  title: 'About Dr Krishna Athal | Top-Ranked Life & Executive Coach',
  description: 'Discover the story, credentials, and coaching philosophy of Dr Krishna Athal — PhD, Oxford, King\'s College London. Coaching India, Mauritius & Singapore.',
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Dr Krishna Athal"
        title="Top-Ranked Life & Executive Coach"
        pills={['PhD', 'Oxford', "King's College London", 'ICI Singapore']}
        subtitle='"Clarity. Conscious Leadership. Sustainable Human Growth."'
        primaryCta={{ label: 'Book a Session', href: '/contact' }}
        secondaryCta={{ label: 'View Coaching Plans', href: '/coaching-plans-pricing' }}
      />

      <HisStory />

      {/* Stats strip */}
      <section className="bg-brand-black-deep py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCounter value={500} suffix="+" label="Clients Coached" />
          <StatCounter value={12} suffix="+" label="Years of Practice" />
          <StatCounter value={3} label="Continents" />
          <StatCounter value={241} label="★ Google Reviews" />
        </div>
      </section>

      <EducationTimeline />

      <CoachingCredentials />

      <Differentiators />

      <CTABanner />
    </div>
  );
}
