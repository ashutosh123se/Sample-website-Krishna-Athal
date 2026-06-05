"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PhilosophySection.module.css";

const principles = [
  { num: "01", title: "Honest Before Comfortable", body: "A good coach tells you what you need to hear, not what you want to. Transformation begins with truth." },
  { num: "02", title: "The Coachee Does the Work", body: "Insight without action is entertainment. Every session is designed to end with a next step — yours." },
  { num: "03", title: "No Judgement. Ever.", body: "Whatever you bring — your failures, your fears, your contradictions — this is a space of absolute safety." },
  { num: "04", title: "Psychology Over Motivation", body: "Motivation fades. Understanding your own patterns is what creates lasting change." },
  { num: "05", title: "Whole Life Perspective", body: "Career, relationships, health, identity — they are not separate. Neither is the coaching." },
  { num: "06", title: "Structured Depth", body: "Every session has direction. Every direction has a destination. Nothing is wasted." },
  { num: "07", title: "Results Are Non-Negotiable", body: "The measure of great coaching is not the quality of the conversation — it is the quality of your life after it." },
  { num: "08", title: "The Coach Must Also Be Coached", body: "Dr. Athal continues to invest in his own development. You deserve a coach who is still growing." },
  { num: "09", title: "You Are Capable of More", body: "Every person who walks in carries unrealised capacity. Finding it together is the whole point." },
];

export default function PhilosophySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile for layout switching
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="philosophy" className={styles.philosophy}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.header}>
        <span className={styles.label}>The Coaching Philosophy</span>
        <h2 className={styles.sectionTitle}>9 Principles That Drive Every Session.</h2>
      </div>

      <div className={styles.layout}>
        
        {/* Left Side: Interactive Number Index */}
        <div className={styles.indexColumn}>
          {principles.map((p, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={p.num}
                className={styles.indexItem}
                onMouseEnter={() => !isMobile && setActiveIndex(i)}
                onClick={() => isMobile && setActiveIndex(i)}
              >
                <motion.div 
                  className={styles.numberWrap}
                  animate={{ 
                    opacity: isActive ? 1 : 0.2,
                    scale: isActive ? 1 : 0.8,
                    x: isActive ? 20 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <span className={isActive ? styles.numActive : styles.numInactive}>
                    {p.num}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeLine" 
                      className={styles.activeLine}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
                
                {/* Mobile Content Accordion */}
                {isMobile && (
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.mobileContent}
                      >
                        <h3 className={styles.contentTitle}>{p.title}</h3>
                        <p className={styles.contentBody}>{p.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Content Display (Desktop Only) */}
        {!isMobile && (
          <div className={styles.contentColumn}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className={styles.contentWrap}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span 
                  className={styles.contentNum}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {principles[activeIndex].num}
                </motion.span>
                <h3 className={styles.contentTitle}>{principles[activeIndex].title}</h3>
                <div className={styles.divider} />
                <p className={styles.contentBody}>{principles[activeIndex].body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
