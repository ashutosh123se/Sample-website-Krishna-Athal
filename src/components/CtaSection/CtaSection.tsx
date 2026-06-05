"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./CtaSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CtaSection() {
  const sectionRef = useScrollReveal<HTMLElement>(0.2);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        btn.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
      } else {
        btn.style.transform = "";
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.cta} fade-up`}>
      <div className={styles.shimmer} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Your next chapter<br />
          begins with one<br />
          <em>conversation.</em>
        </h2>
        <p className={styles.sub}>
          Book a complimentary 15-minute consultation — no pressure, no pitch.
          <br />Just clarity.
        </p>
        <Link ref={btnRef} href="/contact#book" className={`${styles.ctaBtn} btn btn-dark`}>
          Book Free 15-Min Call <span className="btn-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
