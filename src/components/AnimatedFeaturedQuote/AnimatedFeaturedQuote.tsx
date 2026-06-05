"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AnimatedFeaturedQuote.module.css";

const featuredQuotes = [
  {
    text: "He is a big mind. It is rare that you come across standout talent like him.",
    name: "Soveeta Chengappa Naidu",
    role: "The Ravenala Attitude · Mauritius",
  },
  {
    text: "My leadership has been fundamentally reshaped. He creates profound clarity.",
    name: "Raghav Menon",
    role: "Reliance Industries · Mumbai",
  },
  {
    text: "I came for career direction. I left with a new relationship with myself.",
    name: "James Tan",
    role: "Singapore Airlines · Singapore",
  },
  {
    text: "Within weeks, not only did I have clarity — I had the courage to act on it.",
    name: "Nalini Persaud",
    role: "Mauritius Telecom · Port Louis",
  }
];

export default function AnimatedFeaturedQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredQuotes.length);
    }, 4000); // 4 seconds gives time to read

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.featuredQuoteOverlay}>
      <div className={styles.featuredQuoteInner}>
        <span className={styles.featuredMark}>"</span>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.quoteWrapper}
          >
            <p className={styles.featuredText}>{featuredQuotes[index].text}</p>
            <p className={styles.featuredAttrib}>— {featuredQuotes[index].name}, {featuredQuotes[index].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
