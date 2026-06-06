import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import BlogGrid from '@/components/sections/BlogGrid';

export const metadata: Metadata = { title: 'Blog | Dr Krishna Athal', description: 'Insights on leadership, coaching, and conscious growth from Dr Krishna Athal.' };

export default function BlogPage() {
  return (
    <div>
      <PageHero eyebrow="Insights & Articles" title="The Knowledge Vault" subtitle="Deep dives into leadership, psychology, conscious growth, and the science of lasting change." />
      <BlogGrid />
      <CTABanner />
    </div>
  );
}
