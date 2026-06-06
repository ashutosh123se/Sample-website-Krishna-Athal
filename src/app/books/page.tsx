import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/sections/CTABanner';
import BookStrip from '@/components/sections/BookStrip';

const books = [
  { slug: 'book-power-without-the-podium', title: 'Power Without The Podium', subtitle: 'Leading from the Front vs Leading from Behind', desc: 'A practical and philosophical guide to leading with quiet authority — whether or not you hold a formal title.', tag: 'Leadership' },
  { slug: 'book-tri-intelligence-leadership', title: 'The Tri-Intelligence Leadership', subtitle: 'Mastering IQ, EQ, and SQ', desc: 'The book that introduces the Tri-Intelligence Model — integrating intellectual, emotional, and spiritual intelligence into a unified leadership framework.', tag: 'Philosophy' },
  { slug: 'book-ramrajya', title: 'Ramrajya', subtitle: "An Enigmatic Leader's Rise to Power", desc: 'An analytical deep-dive into the political psychology and leadership legacy of Mauritian PM Navin Ramgoolam.', tag: 'Political Psychology' },
];

export async function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug.replace('book-', '') }));
}

// Individual book pages
export default function BooksPage() {
  return (
    <div>
      <PageHero eyebrow="Published Works" title="Books by Dr Krishna Athal" subtitle="Three landmark publications spanning leadership, intelligence, and political psychology." />
      <BookStrip />
      <CTABanner />
    </div>
  );
}
