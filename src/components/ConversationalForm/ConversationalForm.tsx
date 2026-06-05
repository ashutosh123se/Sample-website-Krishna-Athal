"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ConversationalForm.module.css";

export default function ConversationalForm() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("Executive Coaching");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.successMessage}
      >
        <h3 className={styles.successTitle}>Message Sent.</h3>
        <p className={styles.successText}>
          Thank you, {name || "there"}. The first step has been taken. We will be in touch with you shortly at {email} to begin the conversation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.madlibsForm}>
      <div className={styles.sentence}>
        Hello Dr. Krishna. My name is{" "}
        <span className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inlineInput}
            placeholder="[ Your Name ]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: Math.max(220, name.length * 22 + 40) + "px" }}
          />
          <span className={styles.inputLine} />
        </span>
        . I am looking for deeply transformative guidance in{" "}
        <span className={styles.inputWrapper}>
          <select 
            className={styles.inlineSelect}
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="Executive Coaching">Executive Coaching</option>
            <option value="Life Coaching">Life Coaching</option>
            <option value="Career Transitions">Career Transitions</option>
            <option value="Corporate Training">Corporate Training</option>
            <option value="Entrepreneur Mentoring">Entrepreneur Mentoring</option>
          </select>
          <span className={styles.inputLine} />
        </span>
        . I believe that with the right clarity, I can completely{" "}
        <span className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inlineInput}
            placeholder="[ Describe Your Goal ]"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            style={{ width: Math.max(380, goal.length * 22 + 40) + "px" }}
          />
          <span className={styles.inputLine} />
        </span>
        . Please reach out to me at{" "}
        <span className={styles.inputWrapper}>
          <input
            type="email"
            className={styles.inlineInput}
            placeholder="[ Email Address ]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: Math.max(280, email.length * 22 + 40) + "px" }}
          />
          <span className={styles.inputLine} />
        </span>
        {" "}to discuss next steps.
      </div>

      <div className={styles.actionRow}>
        <button type="submit" className={styles.submitBtn}>
          Send Message <span className={styles.arrow}>→</span>
        </button>
      </div>
    </form>
  );
}
