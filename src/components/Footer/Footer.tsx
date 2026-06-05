import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.topRow}>
          <Link href="/" className={styles.logo}>Dr. Krishna Athal</Link>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="var(--obsidian)"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className={styles.socialIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Link grid */}
        <div className={styles.linkGrid}>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>About</h4>
            <Link href="/about" className={styles.footerLink}>Story</Link>
            <Link href="/about#philosophy" className={styles.footerLink}>Philosophy</Link>
            <Link href="/about#credentials" className={styles.footerLink}>Credentials</Link>
            <Link href="/about#yuva" className={styles.footerLink}>YUVA Foundation</Link>
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Coaching</h4>
            <Link href="/coaching#life" className={styles.footerLink}>Life Coaching</Link>
            <Link href="/coaching#executive" className={styles.footerLink}>Executive Coaching</Link>
            <Link href="/coaching#career" className={styles.footerLink}>Career Coaching</Link>
            <Link href="/coaching#relationship" className={styles.footerLink}>Relationship Coaching</Link>
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Corporate</h4>
            <Link href="/corporate" className={styles.footerLink}>Training Overview</Link>
            <Link href="/corporate#leadership" className={styles.footerLink}>Leadership Presence</Link>
            <Link href="/corporate#ei" className={styles.footerLink}>Emotional Intelligence</Link>
            <Link href="/corporate#communication" className={styles.footerLink}>Difficult Conversations</Link>
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <Link href="/books" className={styles.footerLink}>Books</Link>
            <Link href="/testimonials" className={styles.footerLink}>Testimonials</Link>
            <Link href="/contact" className={styles.footerLink}>Contact</Link>
            <Link href="/contact#book" className={styles.footerLink}>Book a Session</Link>
          </div>
        </div>

        {/* Offices */}
        <div className={styles.offices}>
          Mumbai, India &nbsp;·&nbsp; Port Louis, Mauritius &nbsp;·&nbsp; Singapore
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>© 2026 Dr. Krishna Athal. All Rights Reserved.</p>
          <p className={styles.copy}>Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}
