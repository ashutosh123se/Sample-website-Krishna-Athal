"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./TransformationSection.module.css";

const transformations = [
  {
    area: "Life Clarity",
    tagline: "From fog to focus.",
    before: "Feeling stuck despite surface-level success",
    after: "Crystal clear direction and a life that feels intentionally designed",
    icon: "◯",
    num: "01",
    accent: "#C8860A",
  },
  {
    area: "Executive Leadership",
    tagline: "From reactive to iconic.",
    before: "Leading through fear, reactivity, and anxiety",
    after: "Calm authority, decisive presence, and a team that trusts you",
    icon: "△",
    num: "02",
    accent: "#E8A020",
  },
  {
    area: "Entrepreneur Growth",
    tagline: "From burnout to breakthrough.",
    before: "Burning out while building the business",
    after: "Scaling with strategy, clarity, and sustainable momentum",
    icon: "◆",
    num: "03",
    accent: "#C8860A",
  },
  {
    area: "Personal Transformation",
    tagline: "From patterns to power.",
    before: "Repeating the same cycles and wondering why",
    after: "Breaking patterns, designing new ones, becoming who you were meant to be",
    icon: "★",
    num: "04",
    accent: "#B85C38",
  },
];

function Panel({ t, index, isActive }: { t: typeof transformations[0]; index: number; isActive: boolean }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add(styles.panelVisible);
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={panelRef}
      className={`${styles.panel} ${isEven ? styles.panelLeft : styles.panelRight}`}
    >
      {/* Giant background number */}
      <div className={styles.panelBgNum} style={{ color: t.accent }}>{t.num}</div>

      {/* Content grid */}
      <div className={styles.panelGrid}>
        {/* Label side */}
        <div className={`${styles.panelLabel} ${isEven ? styles.orderA : styles.orderB}`}>
          <div className={styles.iconBadge} style={{ borderColor: `${t.accent}40`, color: t.accent }}>
            <span className={styles.iconGlyph}>{t.icon}</span>
          </div>
          <span className={styles.areaTag} style={{ color: t.accent }}>{t.area}</span>
          <h3 className={styles.areaTagline}>{t.tagline}</h3>

          {/* Journey arrow */}
          <div className={styles.journeyArrow}>
            <div className={styles.journeyLine} style={{ background: `linear-gradient(to right, ${t.accent}, transparent)` }} />
            <span className={styles.journeyTip} style={{ color: t.accent }}>→</span>
          </div>
        </div>

        {/* Cards side */}
        <div className={`${styles.panelCards} ${isEven ? styles.orderB : styles.orderA}`}>
          {/* Before card */}
          <div className={styles.beforeCard}>
            <div className={styles.cardTag}>BEFORE COACHING</div>
            <p className={styles.cardText}>{t.before}</p>
            <div className={styles.cardGlow} />
          </div>

          {/* Connector */}
          <div className={styles.connector}>
            <div className={styles.connectorLine} style={{ background: t.accent }} />
            <div className={styles.connectorDot} style={{ background: t.accent, boxShadow: `0 0 20px ${t.accent}` }}>
              <span className={styles.connectorArrow} style={{ color: t.accent === "#B85C38" ? "#fff" : "#000" }}>↓</span>
            </div>
            <div className={styles.connectorLine} style={{ background: t.accent }} />
          </div>

          {/* After card */}
          <div className={styles.afterCard} style={{ borderLeftColor: t.accent }}>
            <div className={styles.cardTag} style={{ color: t.accent }}>AFTER COACHING</div>
            <p className={styles.cardText}>{t.after}</p>
            <div className={styles.afterGlow} style={{ background: `${t.accent}10` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TransformationSection() {
  const [, setVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {/* Top accent line */}
      <div className={styles.topLine} />

      {/* Section header — pinned left */}
      <div ref={headerRef} className={styles.sectionHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.headerTag}>The Results</span>
          <h2 className={styles.headerTitle}>
            What Changes<br />
            <em className={styles.headerEM}>When You Do.</em>
          </h2>
          <p className={styles.headerSub}>
            Coaching is not about inspiration.<br />
            It is about measurable, real-world change.
          </p>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.statsRow}>
            {[["500+","Clients"],["15+","Years"],["3","Countries"],["241+","Reviews"]].map(([n,l]) => (
              <div key={l} className={styles.statChip}>
                <span className={styles.statN}>{n}</span>
                <span className={styles.statL}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-bleed panels */}
      <div className={styles.panels}>
        {transformations.map((t, i) => (
          <Panel key={t.num} t={t} index={i} isActive={false} />
        ))}
      </div>
    </section>
  );
}
