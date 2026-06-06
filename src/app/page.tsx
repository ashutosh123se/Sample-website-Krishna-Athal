import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import AboutStrip from '@/components/sections/AboutStrip';
import CoachingProcess from '@/components/sections/CoachingProcess';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import LogoOrbit from '@/components/sections/LogoOrbit';
import GoogleReviews from '@/components/sections/GoogleReviews';
import InstagramFeed from '@/components/sections/InstagramFeed';
import BookStrip from '@/components/sections/BookStrip';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Dr Krishna Athal | Top-Ranked Life & Executive Coach — India, Mauritius, Singapore',
  description:
    'Dr Krishna Athal is a globally recognised Life & Executive Coach with a PhD. 500+ clients. Coaching across India, Mauritius & Singapore. Book a free 15-min consultation.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AboutStrip />
      <CoachingProcess />
      <TestimonialsSection />
      <PricingSection />
      <LogoOrbit />
      <GoogleReviews />
      <InstagramFeed />
      <BookStrip />
      <CTABanner />
    </>
  );
}
