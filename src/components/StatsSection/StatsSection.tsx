"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Clients\nCoached",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "+",
    label: "Years of\nExperience",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: 3,
    suffix: "",
    label: "Countries\nof Impact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
  },
  {
    value: 4.9,
    suffix: "★",
    label: "Google Rating\n(241 Reviews)",
    isDecimal: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

function Counter({ target, suffix, isDecimal }: { target: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const steps = 70;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const t = step / steps;
      const ease = 1 - Math.pow(1 - t, 4);
      const current = isDecimal
        ? parseFloat((ease * target).toFixed(1))
        : Math.round(ease * target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, isDecimal]);

  return (
    <span ref={ref} className={styles.number}>
      {isDecimal ? count.toFixed(1) : count}
      <span className={styles.suffix}>{suffix}</span>
    </span>
  );
}

const MARQUEE_ITEMS = [
  "Life Coaching", "Executive Coaching", "Corporate Training",
  "Leadership", "Entrepreneur Mentoring", "Relationship Coaching",
  "India", "Mauritius", "Singapore", "TEDx Speaker", "PhD",
  "YUVA NGO", "500+ Clients", "15+ Years",
];

export default function StatsSection() {
  return (
    <>
      {/* Marquee Band */}
      <div className={styles.marqueeBand}>
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              <span className={styles.marqueeDot} />
            </span>
          ))}
        </div>
      </div>

      {/* Stats Band */}
      <div className={styles.statsBand}>
        <div className={styles.statsInner}>
          {stats.map((stat, i) => (
            <div key={i} className={`${styles.statItem} bounce-in stagger-${i + 1}`}>
              <div className={styles.iconWrap}>{stat.icon}</div>
              <Counter target={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              <p className={styles.statLabel}>{stat.label}</p>
              {i < stats.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
