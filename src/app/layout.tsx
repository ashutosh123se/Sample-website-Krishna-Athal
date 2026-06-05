import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import PageLoader from "@/components/PageLoader/PageLoader";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import ScrollAnimations from "@/components/ScrollAnimations/ScrollAnimations";
import FloatingParticles from "@/components/FloatingParticles/FloatingParticles";

export const metadata: Metadata = {
  title: "Dr. Krishna Athal — Life & Executive Coach",
  description:
    "Globally recognised Life & Executive Coach, Corporate Trainer, and Leadership Consultant operating across India, Mauritius, and Singapore. Strategic coaching for visionaries, leaders, and changemakers.",
  keywords:
    "life coach, executive coach, leadership consultant, corporate trainer, India, Mauritius, Singapore, Dr Krishna Athal",
  openGraph: {
    title: "Dr. Krishna Athal — Life & Executive Coach",
    description:
      "Strategic coaching for visionaries, leaders & changemakers across India, Mauritius & Singapore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FloatingParticles />
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <ScrollAnimations />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
