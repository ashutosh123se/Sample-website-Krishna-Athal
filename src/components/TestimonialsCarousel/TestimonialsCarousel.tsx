"use client";
import React from "react";
import AnimatedFeaturedQuote from "@/components/AnimatedFeaturedQuote/AnimatedFeaturedQuote";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  { name: "Arnaud Michel", role: "Managing Director", company: "Shine My Ride", location: "Mauritius", quote: "My personal coaching with Dr. Krishna Athal has been the most enriching learning I have ever experienced. He helped me reinvent myself as a strong leader.", stars: 5, initials: "AM" },
  { name: "Soveeta Chengappa Naidu", role: "Senior Executive", company: "The Ravenala Attitude", location: "Mauritius", quote: "He is a big mind. It is rare that you come across standout talent like him. Extraordinarily insightful and genuinely transformative.", stars: 5, initials: "SC" },
  { name: "Raghav Menon", role: "VP Strategy", company: "Reliance Industries", location: "Mumbai", quote: "Dr. Krishna's approach to executive coaching is unlike anything I have experienced. He creates profound clarity in a remarkably short time. My leadership has been fundamentally reshaped.", stars: 5, initials: "RM" },
  { name: "Priya Sharma", role: "Founder & CEO", company: "TechScale Ventures", location: "Singapore", quote: "The entrepreneurship mentoring sessions with Dr. Athal changed how I see myself as a founder. He helped me understand that leading myself comes before leading the business.", stars: 5, initials: "PS" },
  { name: "James Tan", role: "Director of Operations", company: "Singapore Airlines", location: "Singapore", quote: "Comprehensive, structured, and deeply human. Dr. Krishna's coaching is not about motivation — it is about genuine self-understanding. I came for career direction.", stars: 5, initials: "JT" },
  { name: "Kavita Reddy", role: "Partner", company: "ICICI Investment Banking", location: "Mumbai", quote: "I was sceptical of coaching. After my first session, I was a believer. After my third, I understood why some of the world's top leaders seek Dr. Krishna out. This is the real thing.", stars: 5, initials: "KR" },
  { name: "Michael D'Souza", role: "Programme Director", company: "IIT Delhi Executive", location: "Delhi", quote: "Dr. Athal facilitated a leadership workshop for our executive programme participants. The feedback was unanimously exceptional — depth of insight, warmth of delivery.", stars: 5, initials: "MD" },
  { name: "Nalini Persaud", role: "Chief Marketing Officer", company: "Mauritius Telecom", location: "Port Louis", quote: "I came to Dr. Krishna during one of the most uncertain periods of my career. Within weeks, not only did I have clarity — I had the courage to act on it.", stars: 5, initials: "NP" },
  { name: "Ananya Krishnamurthy", role: "Entrepreneur", company: "GreenLeaf India", location: "Bangalore", quote: "My sessions with Dr. Athal have been the single most valuable investment I have made in my professional life. Clear thinking, honest feedback, and practical strategies.", stars: 5, initials: "AK" },
];

export default function TestimonialsCarousel() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.ambientGlow} />

      {/* Header Section for Home Page */}
      <div className={styles.header}>
        <div className={styles.badgeWrapper}>
          <span className={styles.badgeLabel}>Global Impact</span>
        </div>
        <h2 className={styles.title}>
          The ROI of <span className={styles.titleHighlight}>Clarity.</span>
        </h2>
        <p className={styles.subtitle}>
          Hear from leaders who have transformed their mindset, strategy, and execution.
        </p>
      </div>

      <div className={styles.marqueeTrackWrapper}>
        {/* Row 1 - Moves Left */}
        <div className={styles.track}>
          <div className={`${styles.marquee} ${styles.moveLeft}`}>
            {[...testimonials.slice(0,4), ...testimonials.slice(0,4)].map((t, i) => (
              <div key={i} className={styles.testCard}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <p className={styles.cardName}>{t.name}</p>
                    <p className={styles.cardRole}>{t.role} · {t.company}</p>
                  </div>
                </div>
                <div className={styles.cardStars}>{"★".repeat(t.stars)}</div>
                <p className={styles.cardQuote}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className={styles.track}>
          <div className={`${styles.marquee} ${styles.moveRight}`}>
            {[...testimonials.slice(4,8), ...testimonials.slice(4,8)].map((t, i) => (
              <div key={i} className={styles.testCard}>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <p className={styles.cardName}>{t.name}</p>
                    <p className={styles.cardRole}>{t.role} · {t.company}</p>
                  </div>
                </div>
                <div className={styles.cardStars}>{"★".repeat(t.stars)}</div>
                <p className={styles.cardQuote}>"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Featured Quote Overlay */}
        <AnimatedFeaturedQuote />
      </div>
    </section>
  );
}
