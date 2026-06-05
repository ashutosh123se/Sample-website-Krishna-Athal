"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    num: "01",
    category: "LIFE",
    title: "Life Coaching",
    body: "Clarity, courage, and conscious growth for your next chapter.",
    detail: "Understand your patterns, redefine your purpose, and build the life you keep postponing.",
    href: "/coaching#life",
    color: "#C8860A",
    keyword: "CLARITY",
  },
  {
    num: "02",
    category: "EXECUTIVE",
    title: "Executive Coaching",
    body: "Calm authority, clear decisions, and high-trust leadership.",
    detail: "For senior leaders who must perform under pressure without losing themselves.",
    href: "/coaching#executive",
    color: "#E8A020",
    keyword: "AUTHORITY",
  },
  {
    num: "03",
    category: "CAREER",
    title: "Career & Growth Coaching",
    body: "Direction, confidence, and unstoppable momentum.",
    detail: "Whether pivoting, climbing, or rebuilding — this is where strategy begins.",
    href: "/coaching#career",
    color: "#C8860A",
    keyword: "MOMENTUM",
  },
  {
    num: "04",
    category: "RELATIONSHIP",
    title: "Relationship & Couple Coaching",
    body: "Repair patterns, rebuild trust, communicate with care.",
    detail: "Transform how two people share a life through radical honesty and deep listening.",
    href: "/coaching#relationship",
    color: "#B85C38",
    keyword: "CONNECTION",
  },
  {
    num: "05",
    category: "ENTREPRENEUR",
    title: "Entrepreneur Mentoring",
    body: "Build with purpose, lead yourself first, scale without burnout.",
    detail: "For founders who refuse to sacrifice everything to build something meaningful.",
    href: "/coaching#entrepreneur",
    color: "#E8A020",
    keyword: "GROWTH",
  },
  {
    num: "06",
    category: "CORPORATE",
    title: "Corporate Training",
    body: "Whole organisations shift when their people do.",
    detail: "Leadership presence, emotional intelligence, high-stakes communication — live.",
    href: "/corporate",
    color: "#C8860A",
    keyword: "IMPACT",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useTransform(x, [-0.5, 0.5], [10, -10]);
  const mouseYSpring = useTransform(y, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const active = services[activeIndex];

  return (
    <section className={styles.services}>
      {/* Ambient glow that follows the active service color */}
      <motion.div
        className={styles.ambientGlow}
        animate={{ 
          background: `radial-gradient(800px 800px at 70% 50%, ${active.color}15 0%, transparent 60%)` 
        }}
        transition={{ duration: 1 }}
      />

      <div className={styles.inner}>
        {/* Left: Interactive List */}
        <div className={styles.listCol}>
          <div className={styles.listHeader}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionTag}
            >
              What I Offer
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.listTitle}
            >
              Every Client.<br />
              <em className={styles.titleItalic}>One Direction.</em>
            </motion.h2>
          </div>

          <ul className={styles.list}>
            {services.map((svc, i) => {
              const isActive = activeIndex === i;
              return (
                <li
                  key={svc.num}
                  className={`${styles.listItem} ${isActive ? styles.listItemActive : ""} clickable`}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <span className={styles.itemNum}>{svc.num}</span>
                  <div className={styles.itemBody}>
                    <span className={styles.itemCategory}>{svc.category}</span>
                    <Link href={svc.href} className={styles.itemTitle}>{svc.title}</Link>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.itemDetail}
                        >
                          {svc.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className={styles.itemBar} 
                      style={{ background: svc.color }} 
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Visual Panel with 3D Tilt */}
        <div className={styles.visualCol}>
          <div className={styles.keywordWrap}>
            <AnimatePresence mode="wait">
              <motion.span 
                key={active.keyword}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 0.05, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className={styles.keyword} 
                style={{ color: active.color }}
              >
                {active.keyword}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* 3D Info Card */}
          <motion.div 
            ref={cardRef}
            className={styles.infoCardWrapper}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: mouseYSpring,
              rotateY: mouseXSpring,
              transformStyle: "preserve-3d",
            }}
          >
            <div className={styles.infoCard}>
              {/* Dynamic glowing border */}
              <motion.div 
                className={styles.cardGlow}
                animate={{ 
                  boxShadow: `0 0 40px ${active.color}20, inset 0 0 20px ${active.color}10`,
                  borderColor: `${active.color}40`
                }}
                transition={{ duration: 0.5 }}
              />

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{ transform: "translateZ(30px)" }} /* Pops out */
                >
                  <p className={styles.infoNum}>{active.num} / 06</p>
                  <p className={styles.infoCategory} style={{ color: active.color }}>{active.category}</p>
                  <h3 className={styles.infoTitle}>{active.title}</h3>
                  <p className={styles.infoBody}>{active.body}</p>
                  
                  <Link href={active.href} className={styles.infoLink}>
                    <span className={styles.linkText}>Explore this service</span>
                    <ArrowRight size={16} className={styles.infoArrow} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Decorative rings */}
          <div className={styles.rings}>
            <motion.div animate={{ borderColor: `${active.color}20` }} className={styles.ring1} />
            <motion.div animate={{ borderColor: `${active.color}12` }} className={styles.ring2} />
            <motion.div animate={{ borderColor: `${active.color}06` }} className={styles.ring3} />
          </div>
        </div>
      </div>
    </section>
  );
}
