"use client";
import Image from "next/image";
import styles from "./InstagramSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const posts = [
  {
    img: "/insta-1.jpg",
    likes: "2.4K",
    caption: "Every stage is a classroom. Every audience is a teacher.",
    type: "image",
  },
  {
    img: "/insta-2.jpg",
    likes: "1.8K",
    caption: "The real work happens on the blank page before the session begins.",
    type: "image",
  },
  {
    img: "/insta-3.jpg",
    likes: "3.1K",
    caption: "Authority is not given. It is built — choice by choice, response by response.",
    type: "quote",
  },
  {
    img: "/insta-4.jpg",
    likes: "2.7K",
    caption: "One conversation can rewrite an entire decade. That is why I show up fully — every time.",
    type: "image",
  },
  {
    img: "/insta-5.jpg",
    likes: "4.2K",
    caption: "Leadership is not a position. It is a decision you make before anyone gives you the title.",
    type: "quote",
  },
  {
    img: "/insta-6.jpg",
    likes: "1.9K",
    caption: "Three countries. One mission. Helping you become who you were meant to be.",
    type: "image",
  },
];

export default function InstagramSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(0.05);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div ref={headerRef} className={`${styles.header} fade-up`}>
          <div className={styles.headerLeft}>
            <span className="gold-rule visible" />
            <p className={styles.label}>@drkrishnaathal</p>
            <h2 className={styles.title}>
              Follow the<br /><em>Journey.</em>
            </h2>
            <p className={styles.sub}>
              Behind the sessions, across the stages, and between the chapters — follow Dr. Krishna's world on Instagram.
            </p>
            <a
              href="https://instagram.com/drkrishnaathal"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              <span className={styles.igIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </span>
              Follow on Instagram
              <span className="btn-arrow">→</span>
            </a>
          </div>
          <div className={styles.headerStats}>
            <div className={styles.igStat}>
              <span className={styles.igStatNum}>12.4K</span>
              <span className={styles.igStatLabel}>Followers</span>
            </div>
            <div className={styles.igDivider} />
            <div className={styles.igStat}>
              <span className={styles.igStatNum}>480+</span>
              <span className={styles.igStatLabel}>Posts</span>
            </div>
            <div className={styles.igDivider} />
            <div className={styles.igStat}>
              <span className={styles.igStatNum}>98%</span>
              <span className={styles.igStatLabel}>Engagement</span>
            </div>
          </div>
        </div>

        {/* Scattered Cards */}
        <div ref={gridRef} className={styles.scatterContainer}>
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/drkrishnaathal"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.postCard} ${styles[`card${i}`]} bounce-in stagger-${Math.min(i + 1, 6)}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>
                  <Image src="/coach-session.jpg" alt="Avatar" fill style={{ objectFit: "cover" }} />
                </div>
                <span className={styles.cardUsername}>drkrishnaathal</span>
              </div>
              <div className={styles.cardImageWrap}>
                <Image
                  src={post.img}
                  alt={post.caption}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardAction}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span>{post.likes}</span>
                </div>
                <p className={styles.cardCaption}>
                  <strong>drkrishnaathal</strong> {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
