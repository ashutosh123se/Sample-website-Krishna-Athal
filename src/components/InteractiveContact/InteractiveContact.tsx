"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InteractiveContact.module.css";

export default function InteractiveContact() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    interest: "",
    email: "",
    message: "",
  });

  const handleNext = () => {
    if (step === 0 && !formData.name.trim()) return;
    if (step === 1 && !formData.interest) return;
    if (step === 2 && !formData.email.trim()) return;
    setStep((prev) => prev + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  const submitForm = () => {
    setStep(4); // Success step
  };

  const variants = {
    enter: { opacity: 0, y: 50, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 1.05 },
  };

  return (
    <div className={styles.container}>
      {/* Progress Bar */}
      {step < 4 && (
        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${(step / 3) * 100}%` }} 
          />
        </div>
      )}

      <div className={styles.formArea}>
        <AnimatePresence mode="wait">
          {/* STEP 0: NAME */}
          {step === 0 && (
            <motion.div
              key="step0"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.stepBlock}
            >
              <h2 className={styles.question}>1. Let's start with your name.</h2>
              <input
                type="text"
                autoFocus
                className={styles.massiveInput}
                placeholder="Type your full name..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onKeyDown={handleKeyDown}
              />
              <button 
                className={`${styles.nextBtn} ${formData.name.trim() ? styles.active : ""}`}
                onClick={handleNext}
              >
                Press Enter ↵
              </button>
            </motion.div>
          )}

          {/* STEP 1: INTEREST */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.stepBlock}
            >
              <h2 className={styles.question}>2. Nice to meet you, {formData.name.split(" ")[0]}. What brings you here?</h2>
              <div className={styles.gridOptions}>
                {["Executive Coaching", "Life Coaching", "Corporate Training", "Career Transition"].map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.optionBtn} ${formData.interest === opt ? styles.selected : ""}`}
                    onClick={() => {
                      setFormData({ ...formData, interest: opt });
                      setTimeout(() => setStep(2), 400);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: EMAIL */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.stepBlock}
            >
              <h2 className={styles.question}>3. How can we reach you?</h2>
              <input
                type="email"
                autoFocus
                className={styles.massiveInput}
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onKeyDown={handleKeyDown}
              />
              <button 
                className={`${styles.nextBtn} ${formData.email.trim() ? styles.active : ""}`}
                onClick={handleNext}
              >
                Press Enter ↵
              </button>
            </motion.div>
          )}

          {/* STEP 3: MESSAGE */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.stepBlock}
            >
              <h2 className={styles.question}>4. Anything else we should know? <span className={styles.optional}>(Optional)</span></h2>
              <textarea
                autoFocus
                className={styles.massiveTextarea}
                placeholder="Tell us briefly about your goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button 
                className={`${styles.submitBtn} ${styles.active}`}
                onClick={submitForm}
              >
                Send Request →
              </button>
            </motion.div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 4 && (
            <motion.div
              key="step4"
              variants={variants}
              initial="enter"
              animate="center"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.stepBlock}
            >
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>Request Sent.</h2>
              <p className={styles.successText}>
                Thank you, {formData.name.split(" ")[0]}. We have received your inquiry regarding {formData.interest} and will reach out to {formData.email} shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
