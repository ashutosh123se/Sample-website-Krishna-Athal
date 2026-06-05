import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection/HeroSection";
import StatsSection from "@/components/StatsSection/StatsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TransformationSection from "@/components/TransformationSection/TransformationSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel/TestimonialsCarousel";
import PricingSection from "@/components/PricingSection/PricingSection";
import LogosSection from "@/components/LogosSection/LogosSection";
import InstagramSection from "@/components/InstagramSection/InstagramSection";
import BooksSection from "@/components/BooksSection/BooksSection";
import CtaSection from "@/components/CtaSection/CtaSection";

export const metadata: Metadata = {
  title: "Dr. Krishna Athal — Life & Executive Coach | India · Mauritius · Singapore",
  description:
    "Globally recognised Life & Executive Coach and Leadership Consultant. Transformative coaching for visionaries, leaders, and changemakers across India, Mauritius, and Singapore.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TransformationSection />
      <ProcessSection />
      <TestimonialsCarousel />
      <PricingSection />
      <LogosSection />
      <InstagramSection />
      <BooksSection />
      <CtaSection />
    </>
  );
}
