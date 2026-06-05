"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const credentials = ["PhD", "MBA · UK", "MSc · UK", "ICI · Singapore", "TEDx Speaker", "YUVA Founder"];

export default function AboutSection() {
  const ruleRef = useScrollReveal<HTMLSpanElement>();
  const imgRef = useScrollReveal<HTMLDivElement>(0.1);
  const contentRef = useScrollReveal<HTMLDivElement>(0.1);
  const sectionRef = useRef<HTMLElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const ghost = ghostRef.current;
      if (!section || !ghost) return;
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / rect.height;
      ghost.style.transform = `translateY(${progress * 60}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      {/* Background decorations */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      <div className={styles.inner}>
        {/* Left: Image */}
        <div ref={imgRef} className={`${styles.imageCol} blur-in`}>
          <div className={styles.imageWrap}>
            <Image
              src="/coach-session.jpg"
              alt="Dr. Krishna Athal in a coaching session"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.imageOverlay} />
          </div>
          
          {/* Floating element */}
          <div className={`${styles.floatingBox} floating`}>
            <p className={styles.floatingNum}>15+</p>
            <p className={styles.floatingText}>Years of Global<br/>Experience</p>
          </div>
        </div>

        {/* Right: Content */}
        <div ref={contentRef} className={`${styles.contentCol} wipe-right`}>
          <span ref={ghostRef} className={styles.ghostText}>COACH</span>
          <span className={styles.ghostNumber}>01</span>
          
          <div className={styles.contentHeader}>
            <span ref={ruleRef} className={`gold-rule visible`} />
            <p className={styles.label}>About Dr. Krishna Athal</p>
          </div>
          
          <h2 className={styles.title}>
            Not Just a Coach.<br />
            A Mirror to Your<br />
            <em className="text-gradient">Greatest Self.</em>
          </h2>
          
          <p className={styles.body}>
            Dr. Krishna Athal holds a PhD and degrees from institutions across
            Australia, the United Kingdom, and India. He is the founder of YUVA
            — one of India's and Mauritius's largest NGOs — and has coached
            senior leaders at Singapore Airlines, Microsoft, Reliance, ICICI Bank,
            and the International Olympic Committee.
          </p>
          
          <p className={styles.body}>
            With over 15 years of experience across three continents, Dr. Athal
            blends neuroscience, psychology, and transformational philosophy
            into a coaching method that is honest, structured, and life-altering.
          </p>

          <div className={styles.pills}>
            {credentials.map((c, i) => (
              <span key={c} className={`${styles.pill} slide-up stagger-${i+1}`}>{c}</span>
            ))}
          </div>

          <Link href="/about" className={styles.ctaBtn}>
            Read the full story <span className={styles.ctaArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
