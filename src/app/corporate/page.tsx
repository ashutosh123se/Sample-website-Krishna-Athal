import type { Metadata } from "next";
import styles from "./corporate.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Training — Dr. Krishna Athal",
  description: "Leadership presence, emotional intelligence, and communication workshops for organisations and executive teams across India, Mauritius, and Singapore.",
};

const modules = [
  {
    num: "01",
    title: "Leadership Presence & Executive Communication",
    body: "Calm authority, clarity under pressure, influence that lands — this programme transforms how leaders show up in every room. Your presence is your most powerful leadership tool. This workshop sharpens it.",
    outcomes: ["Executive presence and gravitas", "Influence without authority", "High-stakes communication mastery"],
  },
  {
    num: "02",
    title: "AI-Era Leadership & Human Skills",
    body: "As AI reshapes the workplace, the most irreplaceable leaders will be those who master what machines cannot: empathy, ethical judgement, and high-stakes human connection. Prepare your leaders for what comes next.",
    outcomes: ["Human-centred leadership in the AI era", "Ethical decision-making frameworks", "Empathy as a strategic leadership tool"],
  },
  {
    num: "03",
    title: "Emotional Intelligence & Self-Regulation",
    body: "Trigger mastery. Resilience under fire. Responses that build trust instead of burning it. This programme is for leaders in demanding environments who need to lead with composure and authenticity under any pressure.",
    outcomes: ["Emotional self-awareness and regulation", "Stress resilience and composure under pressure", "Trust-building through authentic responses"],
  },
  {
    num: "04",
    title: "Difficult Conversations & Psychological Safety",
    body: "Say the hard things well. Navigate conflict without casualties. Build teams where honesty is the norm, not the exception. This programme creates the conversational courage and psychological safety your organisation needs to grow.",
    outcomes: ["Conflict navigation without casualties", "Psychological safety as team culture", "Courageous, constructive feedback frameworks"],
  },
];

import TrainingModules from "@/components/TrainingModules/TrainingModules";

import LogosSection from "@/components/LogosSection/LogosSection";

export default function CorporatePage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className="gold-rule centered visible" style={{ width: "60px" }} />
          <p className={styles.heroLabel}>For Organisations & Teams</p>
          <h1 className={styles.heroTitle}>
            When Your People Grow —<br />
            <em>Your Business Moves.</em>
          </h1>
          <p className={styles.heroSub}>
            Corporate training programmes designed to shift behaviour,
            build culture, and create leaders at every level of your organisation.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-primary" style={{ textDecoration: "none" }}>
              Request a Proposal →
            </Link>
            <Link href="#modules" className="btn btn-outline-light" style={{ textDecoration: "none" }}>
              View Training Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Corporate */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <span className="gold-rule visible" />
            <p className={styles.label}>The Corporate Difference</p>
            <h2 className={styles.whyTitle}>
              Not a Workshop.<br />
              <em>A Shift in How</em><br />
              Your People Lead.
            </h2>
          </div>
          <div className={styles.whyRight}>
            <p className={styles.whyBody}>
              Dr. Krishna Athal has delivered transformational programmes for some of the world's
              leading organisations — from Singapore Airlines to IIT Delhi — with a consistent
              result: measurable, lasting change in leadership behaviour, team culture, and
              organisational performance.
            </p>
            <p className={styles.whyBody}>
              Every corporate programme is custom-designed. There are no off-the-shelf slides.
              Your organisation's specific challenges, culture, and goals shape every session.
            </p>
            <div className={styles.whyStats}>
              <div className={styles.whyStat}>
                <span className={styles.whyStatNum}>15+</span>
                <span className={styles.whyStatLabel}>Years of Corporate Delivery</span>
              </div>
              <div className={styles.whyStat}>
                <span className={styles.whyStatNum}>3</span>
                <span className={styles.whyStatLabel}>Continents</span>
              </div>
              <div className={styles.whyStat}>
                <span className={styles.whyStatNum}>50+</span>
                <span className={styles.whyStatLabel}>Organisations Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <TrainingModules />

      {/* Logos */}
      <LogosSection />

      {/* CTA */}
      <section className={styles.ctaBand}>
        <h2 className={styles.ctaTitle}>
          Ready to Invest in<br />Your People?
        </h2>
        <p className={styles.ctaSub}>Let's design a programme together.</p>
        <Link href="/contact" className="btn btn-dark" style={{ textDecoration: "none" }}>
          Request a Training Proposal →
        </Link>
      </section>
    </div>
  );
}
