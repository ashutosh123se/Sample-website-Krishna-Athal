import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import StoryChapters from '@/components/sections/StoryChapters';

export const metadata: Metadata = {
  title: "His Story | Dr Krishna Athal",
  description: "Read the origin story behind Dr Krishna Athal's coaching and leadership work.",
};

export default function StoryPage() {
  return (
    <div>
      {/* Full-screen hero */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-brand-black-deep pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black-deep via-brand-black to-brand-black-mid" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="font-inter text-xs font-bold tracking-[0.25em] uppercase text-white block mb-8">7 min read</span>
          <h1 className="font-playfair italic text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            "The Moment I Knew 'Achievement' Was Not the Same as 'Fulfilment'"
          </h1>
          <p className="font-inter text-lg text-white/60 mb-12">
            I Chose the Inner Work: The Origin Story Behind My Coaching and Leadership Work
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <div className="w-px h-12 bg-gradient-to-b from-brand-red/60 to-transparent" />
              <span className="font-inter text-xs text-white/60 tracking-widest uppercase">Read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reading progress indicator */}
      <div id="scroll-progress" />

      <StoryChapters />

      <CTABanner />
    </div>
  );
}
