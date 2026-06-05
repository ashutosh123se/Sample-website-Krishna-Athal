"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./BooksSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const books = [
  {
    cover: "/book-cover-1.jpg",
    genre: "LEADERSHIP · NON-FICTION",
    title: "Power Without the Podium",
    subtitle: "Leading from the Front vs Leading from Behind",
    desc: "A guide for leaders who must inspire without a title. This book dismantles the myth that authority requires position — and shows exactly how to lead from wherever you stand.",
    href: "/books#book1",
  },
  {
    cover: "/book-cover-2.jpg",
    genre: "LEADERSHIP · PSYCHOLOGY",
    title: "The Tri-Intelligence Leadership",
    subtitle: "Mastering IQ, EQ, and SQ",
    desc: "The complete leadership intelligence system — for those who want to lead not just with a sharp mind, but with an open heart and a conscious soul.",
    href: "/books#book2",
  },
];

export default function BooksSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section className={styles.books}>
      {/* Decorative large background text */}
      <div className={styles.bgText}>AUTHOR</div>

      <div className={styles.inner}>
        {/* Header */}
        <div ref={headerRef} className={`${styles.header} fade-up`}>
          <span className="gold-rule visible" style={{ width: "80px", marginBottom: "24px" }} />
          <div className={styles.headerFlex}>
            <div>
              <p className={styles.label}>Publications</p>
              <h2 className={styles.title}>
                The Books That<br /><em>Built the Method.</em>
              </h2>
            </div>
            <Link href="/books" className="btn btn-outline">
              View All Publications →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className={styles.grid}>
          {books.map((book, i) => (
            <Link
              href={book.href}
              key={i}
              className={`${styles.card} wipe-left stagger-${i + 1}`}
            >
              <div className={styles.coverWrap}>
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.coverHighlight} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.genre}>{book.genre}</p>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookSubtitle}>{book.subtitle}</p>
                <p className={styles.bookDesc}>{book.desc}</p>
                <span className={`${styles.readLink} underline-grow`}>
                  Explore Book
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
