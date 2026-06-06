import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Dr Krishna Athal | Top-Ranked Life & Executive Coach',
  description:
    'Dr Krishna Athal — globally recognised Life & Executive Coach. PhD-qualified. 500+ clients. Coaching across India, Mauritius & Singapore.',
  openGraph: {
    title: 'Dr Krishna Athal | Top-Ranked Life & Executive Coach',
    description: 'Strategic coaching for visionaries, leaders & changemakers.',
    url: 'https://drkrishnaathal.com',
    siteName: 'Dr Krishna Athal',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-black text-white antialiased overflow-x-hidden">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
