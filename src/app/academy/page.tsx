import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import LearningPaths from '@/components/sections/LearningPaths';
import AcademyDifferentiators from '@/components/sections/AcademyDifferentiators';

export const metadata: Metadata = { title: 'Academy | Dr Krishna Athal', description: 'Dr Krishna Athal Academy — where conscious leaders are shaped, certified, and launched.' };

export default function AcademyPage() {
  return (
    <div>
      <PageHero eyebrow="Dr Krishna Athal Academy" title="Where Conscious Leaders Are Shaped" subtitle="Online learning, certification, and masterclasses for those who want to lead at the highest level." primaryCta={{ label: 'Enrol or Get Notified', href: '/contact' }} />

      <LearningPaths />

      <AcademyDifferentiators />

      <CTABanner />
    </div>
  );
}
