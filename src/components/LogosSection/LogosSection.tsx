"use client";
import { motion, TargetAndTransition } from "framer-motion";
import styles from "./LogosSection.module.css";

const logos = [
  "Microsoft", "Singapore Airlines", "ICICI Bank", "Reliance Industries",
  "PepsiCo", "IIT Delhi", "TISS", "International Olympic Committee",
  "American Express", "HP", "Times of India", "TEDx", "OYO", "OLA", "Indian Oil", "Accenture"
];

// Generate a random floating animation for each logo so they move independently
const floatAnimation = (index: number): TargetAndTransition => ({
  y: [0, -10, 0, 10, 0],
  transition: {
    duration: 4 + (index % 3), // Randomized speed
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.2, // Staggered start
  }
});

export default function LogosSection() {
  return (
    <section className={styles.logosSection}>
      <div className={styles.ambientGlow} />

      <div className={styles.header}>
        <p className={styles.title}>They Brought Dr. Krishna Into Their Boardrooms.</p>
        <div className={styles.titleLine} />
      </div>

      <div className={styles.logosGrid}>
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            className={styles.logoItem}
            animate={floatAnimation(i)}
            whileHover={{ scale: 1.1, color: "var(--amber-gold)", textShadow: "0 0 20px rgba(200,134,10,0.6)" }}
          >
            {logo}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
