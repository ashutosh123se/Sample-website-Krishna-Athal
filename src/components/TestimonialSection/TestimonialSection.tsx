"use client";
import { useEffect, useRef } from "react";
import styles from "./TestimonialSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const QUOTE = "My personal coaching with Dr. Krishna Athal has been the most enriching learning I have ever experienced. He helped me reinvent myself as a strong leader, set my vision, and get to work on it every single day.";

export default function TestimonialSection() {
  const sectionRef = useScrollReveal<HTMLElement>(0.2);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const quoteEl = quoteRef.current;
    if (!quoteEl) return;

    // Split into words
    const words = QUOTE.split(" ");
    quoteEl.innerHTML = words
      .map((w, i) => `<span class="${styles.word}" style="transition-delay:${i * 35}ms">${w}</span>`)
      .join(" ");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          quoteEl.querySelectorAll(`.${styles.word}`).forEach((w) =>
            w.classList.add(styles.wordVisible)
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(quoteEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.testimonial}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.quoteGhost}>"</span>
        <p ref={quoteRef} className={styles.quote} />
        <div className={styles.attribution}>
          <div className={styles.avatar}>AM</div>
          <div>
            <p className={styles.name}>Arnaud Michel</p>
            <p className={styles.role}>Managing Director · Shine My Ride · Mauritius</p>
          </div>
        </div>
        <div className={styles.stars}>★★★★★</div>
        <a href="/testimonials" className="text-link" style={{ color: "var(--amber-glow)", marginTop: "8px" }}>
          Read 241+ Verified Reviews →
        </a>
      </div>
    </section>
  );
}
