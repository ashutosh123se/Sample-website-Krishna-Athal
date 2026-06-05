"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";

const ROTATING_WORDS = ["Executives", "Founders", "Visionaries", "Leaders", "Changemakers"];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIdx, setWordIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const headlineLines = [
    { text: "The Mind", italic: true },
    { text: "You Lead", gold: true },
    { text: "Is Your", italic: true },
    { text: "First Edge.", bold: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 400, damping: 30 },
    },
  };

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Background with Parallax */}
      <motion.div style={{ y: yBackground }} className={styles.backgroundWrapper}>
        <div className={styles.imageOverlay} />
        <Image 
          src="/hero-portrait.jpg" 
          alt="Dr. Krishna Athal" 
          fill 
          priority 
          className={styles.bgImage}
        />
        {/* Cinematic noise and gradient overlays */}
        <div className={styles.vignette} />
        <div className={styles.ambientGlow} />
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          style={{ opacity: opacityText, y: yText }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className={styles.badgeWrap}>
            <div className={styles.badge}>
              <span className={styles.badgePulse} />
              <span className={styles.badgeText}>★ Ranked Top Coach · Global Index 2026</span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.p variants={itemVariants} className={styles.label}>
            Life & Executive Coach <span className={styles.labelDot}>·</span> India <span className={styles.labelDot}>·</span> Mauritius <span className={styles.labelDot}>·</span> Singapore
          </motion.p>

          {/* Headline */}
          <div className={styles.headlineWrapper}>
            {headlineLines.map((line, i) => (
              <div key={i} className={styles.headlineLine}>
                <motion.span
                  className={`
                    ${styles.headlineText}
                    ${line.italic ? styles.textItalic : ""}
                    ${line.gold ? styles.textGold : ""}
                    ${line.bold ? styles.textBold : ""}
                  `}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 + (i * 0.2) } },
                  }}
                >
                  {line.text.split("").map((char, charIdx) => (
                    <motion.span key={charIdx} variants={letterVariants} style={{ display: "inline-block" }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Rotating Audience */}
          <motion.div variants={itemVariants} className={styles.rotatingContainer}>
            <span className={styles.rotatingPrefix}>Coaching for </span>
            <div className={styles.rotatingWordWrap}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={styles.rotatingWord}
                >
                  {ROTATING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.subheadline}>
            Globally recognised coaching for those ready to transform how they think, lead, and live.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className={styles.ctaGroup}>
            <Link href="/contact#book" className={`${styles.btnPrimary} magnetic`}>
              <span className={styles.btnText}>Begin Your Journey</span>
              <ArrowRight size={18} className={styles.btnIcon} />
              <div className={styles.btnGlow} />
            </Link>
            
            <button className={`${styles.btnGhost} image-hover`}>
              <div className={styles.playIconWrap}>
                <Play size={16} fill="currentColor" />
              </div>
              <span>Watch My Story</span>
            </button>
          </motion.div>

        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          className={styles.statsContainer}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        >
          <div className={styles.glassStatCard}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>Lives Transformed</span>
          </div>
          <div className={styles.glassStatCard}>
            <span className={styles.statValue}>★ 4.9</span>
            <span className={styles.statLabel}>Google Verified</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className={styles.scrollText}>SCROLL</span>
          <div className={styles.scrollLineWrap}>
            <motion.div 
              className={styles.scrollLine}
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
