import type { Metadata } from "next";
import styles from "./about.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dr. Krishna Athal — The Story Behind the Coach",
  description:
    "Born in Mauritius, educated across three continents. Dr. Krishna Athal's story of founding YUVA, coaching global leaders, and building a philosophy grounded in truth.",
};

const timelineItems = [
  {
    year: "1990s",
    place: "Mauritius",
    text: "Growing up in Port Louis, Dr. Krishna developed an early fascination with human behaviour and why people make the choices they do.",
    side: "left",
  },
  {
    year: "Education",
    place: "UK & Australia",
    text: "He pursued education across three continents — earning degrees in Business, Psychology, Coaching, and Leadership from universities in the UK, Australia, and India.",
    side: "right",
  },
  {
    year: "2008",
    place: "YUVA Founded",
    text: "He founded YUVA — one of India's and Mauritius's largest NGOs — dedicated to empowering youth with education, opportunity, and self-belief.",
    side: "left",
  },
  {
    year: "2010s",
    place: "Coaching Career Begins",
    text: "Dr. Athal began coaching executives, entrepreneurs, and individuals — building a global reputation through results-first, psychology-grounded methods.",
    side: "right",
  },
  {
    year: "2016",
    place: "International Coaching Institute",
    text: "He established the International Coaching Institute — certifying the next generation of coaches in Singapore, India, and Mauritius.",
    side: "left",
  },
  {
    year: "2020s",
    place: "Three Continents",
    text: "Offices in Mumbai, Port Louis, and Singapore. Clients from Singapore Airlines to ICICI Bank. A TEDx stage. Three books. And still — one session at a time.",
    side: "right",
  },
];

import PhilosophySection from "@/components/PhilosophySection/PhilosophySection";
import CredentialsSection from "@/components/CredentialsSection/CredentialsSection";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/hero-portrait.jpg"
            alt="Dr. Krishna Athal"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%", filter: "grayscale(50%) contrast(1.1)" }}
            priority
          />
          {/* Gradients to blend into the dark theme */}
          <div className={styles.heroVignette} />
          <div className={styles.heroGradientBottom} />
        </div>
        
        <div className={styles.heroContentFull}>
          <span className="gold-rule visible centered" />
          <p className={styles.heroLabelCentered}>The Story Behind the Coach</p>
          <h1 className={styles.heroTitleMassive}>
            Born in <em>Mauritius.</em><br />
            Built for the <em>World.</em>
          </h1>
          <p className={styles.heroSubCentered}>
            Dr. Krishna Athal grew up discovering his fascination with human
            behaviour, psychology, and the invisible forces that shape how
            people think, decide, and lead.
          </p>
        </div>

        <div className={styles.heroScrollWrapper}>
          <span className={styles.heroScrollLine} />
          <p className={styles.heroScrollText}>Scroll to read</p>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className={styles.timelineInner}>
          <div className={styles.timelineHeader}>
            <span className="gold-rule centered visible" style={{ width: "60px" }} />
            <p className={styles.label}>The Journey</p>
            <h2 className={styles.sectionTitle}>Chapter by Chapter.</h2>
          </div>

          <div className={styles.timelineTrack}>
            <div className={styles.timelineLine} />
            {timelineItems.map((item, i) => (
              <div key={i} className={`${styles.timelineItem} ${item.side === "right" ? styles.right : styles.left} fade-up stagger-${Math.min(i + 1, 6)}`}>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3 className={styles.timelinePlace}>{item.place}</h3>
                  <p className={styles.timelineText}>{item.text}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <CredentialsSection />

      {/* Philosophy */}
      <PhilosophySection />

      {/* CTA */}
      <section className={styles.aboutCta}>
        <h2 className={styles.ctaTitle}>
          The best version of you<br />is waiting.
        </h2>
        <Link href="/contact#book" className="btn btn-primary">
          Start Your Journey →
        </Link>
      </section>
    </div>
  );
}
