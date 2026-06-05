import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Dr. Krishna Athal — Book a Coaching Session",
  description: "Get in touch to book a free 15-minute consultation or send a message. Offices in Mumbai, Port Louis, and Singapore.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          
          {/* Left Side: Information */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Let's Talk.</h1>
            <p className={styles.subtitle}>
              Whether you are an individual ready to begin, a corporate team looking for transformation, or simply curious — reach out. Every great journey begins with one honest conversation.
            </p>
            
            <div className={styles.drPhoto}>
              <img
                src="/dr-contact-portrait.png"
                alt="Dr. Krishna Athal"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div className={styles.offices}>
              <div className={styles.officeBlock}>
                <p className={styles.officeCountry}>India</p>
                <p className={styles.officeCity}>Juhu, Mumbai — 400049</p>
              </div>
              <div className={styles.officeBlock}>
                <p className={styles.officeCountry}>Mauritius</p>
                <p className={styles.officeCity}>Royal Street, Port Louis — 11602</p>
              </div>
              <div className={styles.officeBlock}>
                <p className={styles.officeCountry}>Singapore</p>
                <p className={styles.officeCity}>Paya Lebar Square — 409051</p>
              </div>
            </div>
          </div>

          {/* Right Side: Simple Standard Form */}
          <div className={styles.formCol}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <form className={styles.form}>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <input type="text" id="name" placeholder=" " className={styles.input} required />
                  <label htmlFor="name" className={styles.floatLabel}>Full Name</label>
                  <span className={styles.fieldLine} />
                </div>
                <div className={styles.field}>
                  <input type="email" id="email" placeholder=" " className={styles.input} required />
                  <label htmlFor="email" className={styles.floatLabel}>Email Address</label>
                  <span className={styles.fieldLine} />
                </div>
              </div>
              
              <div className={styles.field}>
                <select id="interest" className={`${styles.input} ${styles.select}`} defaultValue="">
                  <option value="" disabled>What are you looking for?</option>
                  <option value="executive">Executive Coaching</option>
                  <option value="life">Life Coaching</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="career">Career Transition</option>
                  <option value="other">Other</option>
                </select>
                <span className={styles.fieldLine} />
              </div>

              <div className={styles.field}>
                <textarea id="message" placeholder=" " className={`${styles.input} ${styles.textarea}`} rows={5} required />
                <label htmlFor="message" className={styles.floatLabel}>Your Message</label>
                <span className={styles.fieldLine} />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
