"use client";
import styles from "./ProcessSection.module.css";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discover\nthe Work",
    body: "Explore Dr. Krishna's philosophy, client stories, and coaching plans. Understand the method before you commit to the movement.",
    action: "Read About Him →",
    href: "/about",
  },
  {
    num: "02",
    title: "Share\nYour World",
    body: "Complete a short Pre-Coaching Questionnaire so that your first session begins with depth, not small talk.",
    action: "Fill Questionnaire →",
    href: "/contact#questionnaire",
  },
  {
    num: "03",
    title: "Have the\nConversation",
    body: "Book a complimentary 15-minute call. No commitment. Just clarity on whether this is the right fit — for both of us.",
    action: "Book Free Call →",
    href: "/contact#book",
  },
  {
    num: "04",
    title: "Begin the\nJourney",
    body: "Once aligned, onboard formally and step into the most intentional chapter of your life.",
    action: "Start Now →",
    href: "/contact",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.stepVisible);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.process}>
      {/* Huge decorative word */}
      <div className={styles.bgWord}>JOURNEY</div>

      <div className={styles.inner}>
        {/* Horizontal top label */}
        <div className={styles.topBar}>
          <span className={styles.topTag}>The Process</span>
        <div className={styles.topLine} />
        <span className={styles.topNote}>Four intentional steps. One transformative outcome.</span>
      </div>

      {/* Steps — full width each */}
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            ref={(el) => { stepRefs.current[i] = el; }}
            className={`${styles.step} ${i % 2 === 0 ? styles.stepDark : styles.stepLight}`}
          >
            {/* Giant number — the hero visual */}
            <div className={styles.stepNumWrap}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepNumGlow} />
            </div>

            {/* Content */}
            <div className={styles.stepContent}>
              <div className={styles.stepIndex}>Step {step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
              <a href={step.href} className={styles.stepLink}>{step.action}</a>
            </div>

            {/* Vertical connector (not on last) */}
            {i < steps.length - 1 && (
              <div className={styles.connector}>
                <div className={styles.connectorLine} />
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
