"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Brain, BookOpen, ScrollText, Award, Globe, Mic, Heart } from "lucide-react";
import styles from "./CredentialsSection.module.css";

const credentials = [
  { title: "PhD", category: "Doctorate Level", desc: "The highest level of academic rigour applied to human behaviour and leadership.", icon: GraduationCap },
  { title: "MBA", category: "United Kingdom", desc: "Master of Business Administration, bridging the gap between psychology and corporate strategy.", icon: Briefcase },
  { title: "MSc Psychology", category: "United Kingdom", desc: "Advanced understanding of cognitive patterns and behavioural science.", icon: Brain },
  { title: "BA", category: "United Kingdom", desc: "Bachelor of Arts, building the foundation of theoretical knowledge.", icon: BookOpen },
  { title: "PG Diploma", category: "India", desc: "Specialised postgraduate training focused on practical applications.", icon: ScrollText },
  { title: "DIP", category: "Australia", desc: "Diploma certifying international standards in professional development.", icon: Award },
  { title: "Founder", category: "International Coaching Institute", desc: "Establishing a global standard for certifying the next generation of coaches.", icon: Globe },
  { title: "Speaker", category: "TEDx", desc: "Sharing philosophies on leadership and transformation on the global stage.", icon: Mic },
  { title: "Founder", category: "YUVA NGO", desc: "Building one of the largest youth empowerment movements in the region.", icon: Heart },
];

export default function CredentialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section id="credentials" className={styles.section}>
      {/* Background Ambience */}
      <div className={styles.vignette} />
      <div className={styles.ambientLight} />

      {/* Fixed Intro Block on the Left */}
      <div className={styles.fixedIntro}>
        <span className={styles.introTag}>The Foundation</span>
        <h2 className={styles.introTitle}>Academic<br />& Professional<br />Arsenal.</h2>
        <p className={styles.introBody}>
          Swipe left and right to explore the decades of rigorous training across three continents that power the method.
        </p>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span>Scroll Horizontally</span>
        </div>
      </div>

      {/* Native Horizontal Scroll Container */}
      <div ref={scrollRef} className={styles.horizontalScroll}>
        
        {/* Spacer to push first card to the right half */}
        <div className={styles.startSpacer} />

        {/* The Cards */}
        {credentials.map((cred, i) => {
          const Icon = cred.icon;
          return (
            <motion.div 
              key={i} 
              className={styles.cardWrapper}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={styles.glassCard}>
                <div className={styles.iconBox}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{cred.category}</span>
                  <h3 className={styles.cardTitle}>{cred.title}</h3>
                  <div className={styles.cardDivider} />
                  <p className={styles.cardDesc}>{cred.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
        
        {/* End Spacer */}
        <div className={styles.endSpacer} />
      </div>
    </section>
  );
}
