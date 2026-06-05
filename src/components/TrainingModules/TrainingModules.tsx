"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TrainingModules.module.css";

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

export default function TrainingModules() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="modules" className={styles.modulesSection}>
      <div className={styles.ambientGlow} />

      <div className={styles.header}>
        <span className={styles.label}>Training Programmes</span>
        <h2 className={styles.title}>
          Programmes Built for<br />
          <em>Real Organisational Change.</em>
        </h2>
        <p className={styles.sub}>
          Explore the bespoke workshops designed to shift behaviour and elevate leadership at every level.
        </p>
      </div>

      <div className={styles.tabContainer}>
        {/* Left Side: Interactive Tabs */}
        <div className={styles.tabList}>
          {modules.map((mod, i) => {
            const isActive = activeIndex === i;
            return (
              <button 
                key={mod.num}
                className={isActive ? styles.tabBtnActive : styles.tabBtnInactive}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <span className={styles.tabNum}>{mod.num}</span>
                <span className={styles.tabTitle}>{mod.title}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Animated Content */}
        <div className={styles.contentArea}>
          <div className={styles.glassPanel}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={styles.contentInner}
              >
                <div className={styles.contentHeader}>
                  <span className={styles.contentNum}>{modules[activeIndex].num}</span>
                  <div className={styles.contentLine} />
                </div>
                <h3 className={styles.contentTitle}>{modules[activeIndex].title}</h3>
                <p className={styles.contentBody}>{modules[activeIndex].body}</p>
                
                <div className={styles.outcomesList}>
                  {modules[activeIndex].outcomes.map((outcome, idx) => (
                    <div key={idx} className={styles.outcomeItem}>
                      <span className={styles.outcomeDot} />
                      {outcome}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
