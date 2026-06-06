"use client";
import Image from "next/image";
import styles from "./InstagramSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const posts = [
  {
    img: "/insta-1.jpg",
    likes: "2,481",
    comments: 84,
    caption: "Every stage is a classroom. Every audience is a teacher.",
    timeAgo: "2 DAYS AGO",
    tags: ["#leadership", "#mindset"],
  },
  {
    img: "/insta-2.jpg",
    likes: "1,847",
    comments: 62,
    caption: "The real work happens on the blank page before the session begins.",
    timeAgo: "5 DAYS AGO",
    tags: ["#coaching", "#growth"],
  },
  {
    img: "/insta-3.jpg",
    likes: "3,129",
    comments: 107,
    caption: "Authority is not given. It is built — choice by choice, response by response.",
    timeAgo: "1 WEEK AGO",
    tags: ["#authority", "#transformation"],
  },
  {
    img: "/insta-4.jpg",
    likes: "2,754",
    comments: 91,
    caption: "One conversation can rewrite an entire decade. That is why I show up fully.",
    timeAgo: "2 WEEKS AGO",
    tags: ["#presence", "#impact"],
  },
  {
    img: "/insta-5.jpg",
    likes: "4,203",
    comments: 138,
    caption: "Leadership is not a position. It is a decision you make before anyone gives you the title.",
    timeAgo: "3 WEEKS AGO",
    tags: ["#leadership", "#vision"],
  },
  {
    img: "/insta-6.jpg",
    likes: "1,962",
    comments: 73,
    caption: "Three countries. One mission. Helping you become who you were meant to be.",
    timeAgo: "1 MONTH AGO",
    tags: ["#global", "#mission"],
  },
];

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
    </svg>
  );
}

export default function InstagramSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(0.05);

  return (
    <section className={styles.section}>
      {/* Ambient background blobs */}
      <div className={styles.blobLeft} />
      <div className={styles.blobRight} />

      <div className={styles.inner}>
        {/* Header */}
        <div ref={headerRef} className={`${styles.header} fade-up`}>
          <div className={styles.profileBlock}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner}>
                <Image src="/coach-session.jpg" alt="Dr. Krishna Athal" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.profileHandle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#igGrad)" strokeWidth="1.8">
                  <defs>
                    <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="url(#igGrad)" stroke="none" />
                </svg>
                <span>drkrishnaathal</span>
              </div>
              <h2 className={styles.title}>
                Editorial <em>Moments</em>
              </h2>
              <p className={styles.sub}>
                A curated glimpse into the journey.
              </p>
            </div>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>12.4K</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>480+</span>
              <span className={styles.statLabel}>Posts</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Engagement</span>
            </div>
            <a
              href="https://instagram.com/drkrishnaathal"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.followBtn}
            >
              <span className={styles.followBtnGradient} />
              Follow
            </a>
          </div>
        </div>

        {/* Instagram Post Grid */}
        <div ref={gridRef} className={styles.grid}>
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://instagram.com/drkrishnaathal"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.postCard} bounce-in stagger-${Math.min(i + 1, 6)}`}
            >
              {/* Card Top Bar */}
              <div className={styles.cardTop}>
                <div className={styles.cardAvatarWrap}>
                  <div className={styles.cardAvatarRing}>
                    <div className={styles.cardAvatar}>
                      <Image src="/coach-session.jpg" alt="Avatar" fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardUsername}>drkrishnaathal</span>
                  <span className={styles.cardLocation}>Dubai · London · Singapore</span>
                </div>
                <button className={styles.moreBtn} aria-label="More options">
                  <MoreIcon />
                </button>
              </div>

              {/* Image */}
              <div className={styles.cardImage}>
                <Image
                  src={post.img}
                  alt={post.caption}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.imageOverlay} />
                {/* Verified badge overlay */}
                <div className={styles.verifiedBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>

              {/* Actions */}
              <div className={styles.cardActions}>
                <div className={styles.leftActions}>
                  <button className={styles.actionBtn} aria-label="Like">
                    <HeartIcon />
                  </button>
                  <button className={styles.actionBtn} aria-label="Comment">
                    <CommentIcon />
                  </button>
                  <button className={styles.actionBtn} aria-label="Share">
                    <SendIcon />
                  </button>
                </div>
                <button className={`${styles.actionBtn} ${styles.bookmarkBtn}`} aria-label="Save">
                  <BookmarkIcon />
                </button>
              </div>

              {/* Likes */}
              <div className={styles.cardLikes}>
                <span className={styles.likesCount}>{post.likes} likes</span>
              </div>

              {/* Caption */}
              <div className={styles.cardCaption}>
                <span className={styles.captionUsername}>drkrishnaathal</span>
                <span className={styles.captionText}> {post.caption}</span>
                <div className={styles.tags}>
                  {post.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Comments count */}
              <div className={styles.cardComments}>
                View all {post.comments} comments
              </div>

              {/* Time */}
              <div className={styles.cardTime}>{post.timeAgo}</div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} fade-up`}>
          <a
            href="https://instagram.com/drkrishnaathal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            View All Posts on Instagram
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
