"use client";
import Link from "next/link";

import styles from "./PricingSection.module.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Foundation",
    tagline: "Begin the conversation.",
    price: "160",
    period: "per session",
    sessions: "1 Session",
    color: "default",
    features: [
      "60-min coaching session",
      "Pre-session questionnaire",
      "Post-session resources",
      "WhatsApp follow-up",
      "Session recording",
    ],
  },
  {
    name: "Growth",
    tagline: "Consistent direction and momentum.",
    price: "560",
    period: "per month",
    sessions: "4 Sessions / Month",
    color: "popular",
    badge: "Most Popular",
    features: [
      "4 × 60-min sessions",
      "Pre-coaching assessment",
      "Weekly check-in messages",
      "Personalised development plan",
      "Resource library access",
      "Priority booking",
      "Session recordings",
      "30-day email support",
    ],
  },
  {
    name: "Action",
    tagline: "Clarity turning into daily movement.",
    price: "720",
    period: "per month",
    sessions: "4 × 90-Min Sessions",
    color: "default",
    features: [
      "4 × 90-min deep sessions",
      "Full life audit",
      "Monthly progress reviews",
      "Goal tracking system",
      "Unlimited WhatsApp support",
      "Emergency call access",
      "90-day transformation plan",
      "Session recordings",
      "Priority booking",
      "Resource library",
    ],
  },
  {
    name: "Mastery",
    tagline: "For high performers leading major change.",
    price: "1,120",
    period: "per month",
    sessions: "4 × 90-Min + Strategy",
    color: "premium",
    badge: "Premium",
    features: [
      "4 × 90-min intensive sessions",
      "Comprehensive life & leadership audit",
      "Bi-monthly progress reviews",
      "Custom accountability system",
      "24/7 WhatsApp access",
      "All session recordings",
      "Monthly strategy call",
      "Network introductions",
      "Leadership assessment tools",
      "Annual retrospective",
      "Full resource library",
      "Guaranteed priority booking",
    ],
  },
];

export default function PricingSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>(0.05);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div ref={headerRef} className={`${styles.header} fade-up`}>
          <span className="gold-rule centered visible" style={{ width: "60px" }} />
          <p className={styles.label}>Investment Plans</p>
          <h2 className={styles.title}>
            Your Investment in the<br /><em>Best Version of You.</em>
          </h2>
          <p className={styles.subtitle}>
            Every plan includes a complimentary 15-minute pre-session call.
            <br />No pressure. Just clarity.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className={styles.grid}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`${styles.card} ${styles[`card_${plan.color}`]} fade-up stagger-${i + 1}`}
            >
              {plan.badge && (
                <div className={`${styles.badge} ${plan.color === "premium" ? styles.badgePremium : ""}`}>
                  {plan.badge}
                </div>
              )}

              {/* Top accent line */}
              <div className={styles.topLine} />

              <div className={styles.cardHead}>
                <p className={styles.planName}>{plan.name}</p>
                <p className={styles.planTagline}>{plan.tagline}</p>
              </div>

              <div className={styles.priceBlock}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              <p className={styles.sessions}>{plan.sessions}</p>

              <div className={styles.divider} />

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact#book"
                className={`${styles.cta} ${plan.color === "popular" ? styles.ctaFilled : styles.ctaOutline}`}
              >
                Get Started
                <span className={styles.ctaArrow}>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Free call CTA */}
        <div className={styles.freeCall}>
          <span className={styles.freeCallIcon}>📞</span>
          <div>
            <p className={styles.freeCallTitle}>Not sure which plan is right for you?</p>
            <p className={styles.freeCallSub}>Book a free 15-minute call — no commitment, just clarity.</p>
          </div>
          <Link href="/contact#book" className="btn btn-outline">
            Book Free Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
