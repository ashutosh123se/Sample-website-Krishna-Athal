import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./books.module.css";

export const metadata: Metadata = {
  title: "Books by Dr. Krishna Athal — Leadership & Transformation",
  description: "Three books on leadership, power, and living with intention. Power Without the Podium, The Tri-Intelligence Leadership, and Ramrajya.",
};

const books = [
  {
    id: "book1",
    cover: "/book-cover-1.jpg",
    genre: "LEADERSHIP · MANAGEMENT · NON-FICTION",
    title: "Power Without the Podium",
    subtitle: "Leading from the Front vs Leading from Behind",
    desc: [
      "This book answers the question every non-titled leader asks quietly: how do I lead when no one has officially asked me to?",
      "Dr. Krishna Athal draws on decades of executive coaching and organisational behaviour research to show that the most powerful leaders in any room are not always the ones behind the podium. This is the leadership manual for every person who leads sideways, upward, and from behind — and wants to do it with grace, strategy, and sustainable impact.",
    ],
    chapters: [
      "Chapter 1: The Myth of the Title",
      "Chapter 2: The Two Kinds of Leadership",
      "Chapter 3: When to Lead from the Front",
      "Chapter 4: The Art of Leading from Behind",
      "Chapter 5: Building Authority Without Power",
    ],
    orientation: "left",
  },
  {
    id: "book2",
    cover: "/book-cover-2.jpg",
    genre: "LEADERSHIP · PSYCHOLOGY · PHILOSOPHY",
    title: "The Tri-Intelligence Leadership",
    subtitle: "Mastering IQ, EQ, and SQ",
    desc: [
      "IQ alone gets you the job. EQ keeps you in it. SQ makes you unforgettable.",
      "The complete leadership intelligence system — for those who want to lead not just with a sharp mind, but with an open heart and a conscious soul. Dr. Athal presents a unified framework for developing all three intelligences in service of whole-life leadership.",
    ],
    chapters: [
      "Chapter 1: The Intelligence Myth",
      "Chapter 2: Sharpening Your IQ — Without Losing Your Humanity",
      "Chapter 3: EQ as Leadership Currency",
      "Chapter 4: SQ — The Intelligence That Changes Everything",
      "Chapter 5: Integrating the Three for a Whole Leader",
    ],
    orientation: "right",
  },
  {
    id: "book3",
    cover: "/book-cover-3.png",
    genre: "POLITICAL LEADERSHIP · BIOGRAPHY · ANALYSIS",
    title: "Ramrajya",
    subtitle: "An Enigmatic Leader's Rise to Power",
    desc: [
      "An analytical deep-dive into the leadership of Mauritian Prime Minister Navin Ramgoolam — and what it reveals about power, perception, and political intelligence.",
      "Through rigorous analysis and rich narrative, Dr. Athal examines what it means to build and sustain political power across decades — and the leadership lessons that transcend the political realm entirely.",
    ],
    chapters: [
      "Chapter 1: Power and the Perception of Power",
      "Chapter 2: The Architecture of Political Authority",
      "Chapter 3: Resilience in Crisis",
      "Chapter 4: Legacy and Leadership Beyond Office",
      "Chapter 5: What Politics Teaches Every Leader",
    ],
    orientation: "left",
  },
];

export default function BooksPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="gold-rule centered visible" style={{ width: "60px" }} />
          <h1 className={styles.heroTitle}>
            Words That Lead.<br />
            <em>Pages That Transform.</em>
          </h1>
          <p className={styles.heroSub}>
            Three books. Three lenses on leadership, power, and the art of living with intention.
          </p>
        </div>
      </section>

      {/* Books */}
      {books.map((book, i) => (
        <section key={book.id} id={book.id} className={`${styles.bookSection} ${book.orientation === "right" ? styles.reversed : ""}`}>
          {/* Image */}
          <div className={styles.bookImageCol}>
            <div className={styles.bookCoverWrap}>
              <Image
                src={book.cover}
                alt={book.title}
                fill
                style={{ objectFit: "cover" }}
                className={styles.bookCoverImg}
              />
            </div>
            <div className={styles.bookCoverShadow} />
          </div>

          {/* Content */}
          <div className={styles.bookContentCol}>
            <span className="gold-rule visible" />
            <p className={styles.bookGenre}>{book.genre}</p>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookSubtitle}>{book.subtitle}</p>
            {book.desc.map((d, di) => (
              <p key={di} className={styles.bookDesc}>{d}</p>
            ))}

            {/* Chapter accordion */}
            <div className={styles.chaptersSection}>
              <p className={styles.chaptersLabel}>Chapter Preview</p>
              <div className={styles.chaptersList}>
                {book.chapters.map((ch) => (
                  <div key={ch} className={styles.chapterItem}>
                    <span className={styles.chapterDot}>◆</span>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary" style={{ alignSelf: "flex-start", textDecoration: "none" }}>
              Get This Book →
            </Link>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={styles.ctaBand}>
        <h2 className={styles.ctaTitle}>
          Ready to go deeper<br />than a book?
        </h2>
        <p className={styles.ctaSub}>Book a session with Dr. Krishna Athal.</p>
        <Link href="/contact#book" className="btn btn-dark" style={{ textDecoration: "none" }}>
          Start Your Journey →
        </Link>
      </section>
    </div>
  );
}
