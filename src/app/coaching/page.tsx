import type { Metadata } from "next";
import styles from "./coaching.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching & Mentoring — Dr. Krishna Athal",
  description: "Life, Executive, Career, Relationship, and Entrepreneur coaching. Pricing plans from Foundation to Mastery.",
};

const services = [
  {
    id: "life",
    num: "01",
    category: "Life Coaching",
    headline: "Clarity is Not Found.\nIt is Built — Session\nby Session.",
    body: [
      "Life coaching with Dr. Krishna is not about mantras or vision boards. It is about identifying the exact patterns, fears, and beliefs that are keeping you smaller than you are — and systematically dismantling them.",
      "Whether you are navigating a major life decision, feeling stuck despite surface-level success, or simply knowing that something needs to change — this is where the real work begins.",
    ],
    outcomes: ["Clarity on what you actually want", "Tools to break self-limiting beliefs", "A life that feels intentionally designed"],
    cta: "Start Life Coaching",
  },
  {
    id: "executive",
    num: "02",
    category: "Executive Coaching",
    headline: "Lead With Calm.\nDecide With Clarity.\nLead With Impact.",
    body: [
      "Executive coaching with Dr. Krishna is for senior leaders who must perform under pressure without losing themselves in the process.",
      "This is about building calm authority, making high-stakes decisions with confidence, and cultivating a presence that inspires trust at every level of the organisation.",
    ],
    outcomes: ["High-pressure decision-making clarity", "Executive presence and gravitas", "Team trust and communication mastery"],
    cta: "Start Executive Coaching",
  },
  {
    id: "career",
    num: "03",
    category: "Career & Growth Coaching",
    headline: "Direction, Confidence,\nand Unstoppable\nMomentum.",
    body: [
      "Whether you are pivoting industries, climbing towards a leadership role, or rebuilding after a major setback — this is where the real strategy begins.",
      "Dr. Krishna works with professionals to cut through the noise, define what they actually want, and build the skills and confidence to pursue it without apology.",
    ],
    outcomes: ["Clear career direction and vision", "Confidence in transition and change", "Strategic action plan with accountability"],
    cta: "Start Career Coaching",
  },
  {
    id: "relationship",
    num: "04",
    category: "Relationship Coaching",
    headline: "Repair Patterns.\nRebuild Trust.\nCommunicate Deeply.",
    body: [
      "Relationship and couple coaching with Dr. Krishna goes beneath the surface — into the communication patterns, attachment styles, and unspoken expectations that either build or erode a partnership.",
      "This is not about fixing blame. It is about understanding how two people can share a life with more honesty, care, and intentionality than they thought possible.",
    ],
    outcomes: ["Healthier communication patterns", "Renewed trust and intimacy", "Shared vision and life direction as a couple"],
    cta: "Start Relationship Coaching",
  },
  {
    id: "entrepreneur",
    num: "05",
    category: "Entrepreneur Mentoring",
    headline: "Build With Purpose.\nLead Yourself First.\nScale Without Burnout.",
    body: [
      "For founders and entrepreneurs who are building something meaningful but struggling to balance the external demands of business with the internal demands of leadership.",
      "Dr. Krishna's entrepreneur mentoring is part strategy, part psychology — helping you build with intention, make decisions from a place of clarity, and lead a business without sacrificing yourself to it.",
    ],
    outcomes: ["Purpose-aligned business strategy", "Self-leadership and burnout prevention", "Confident founder identity and decision-making"],
    cta: "Start Entrepreneur Mentoring",
  },
];

const plans = [
  {
    name: "Foundation",
    price: "$160",
    desc: "A starting point to pause, explore, and clarify.",
    sessions: "1 Session",
    features: ["60-min coaching session", "Pre-session questionnaire", "Post-session resources", "WhatsApp follow-up", "Session recording"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$560",
    desc: "For those ready to set clear direction and work toward it.",
    sessions: "4 Sessions / Month",
    features: ["4 × 60-min sessions", "Pre-coaching assessment", "Weekly check-in messages", "Personalised development plan", "Resource library access", "Priority booking", "Session recordings", "30-day email support"],
    popular: true,
  },
  {
    name: "Action",
    price: "$720",
    desc: "Designed to turn clarity into consistent movement.",
    sessions: "4 Sessions / Month",
    features: ["4 × 90-min deep sessions", "Full life audit", "Monthly progress reviews", "Goal tracking system", "Unlimited WhatsApp support", "Resource library", "Priority booking", "Session recordings", "Emergency call access", "90-day transformation plan"],
    popular: false,
  },
  {
    name: "Mastery",
    price: "$1,120",
    desc: "For high performers and those leading major change.",
    sessions: "4 Sessions / Month",
    features: ["4 × 90-min intensive sessions", "Comprehensive life & leadership audit", "Bi-monthly progress reviews", "Custom accountability system", "24/7 WhatsApp access", "Full resource library", "Guaranteed priority booking", "All session recordings", "Monthly strategy call", "Network introductions", "Leadership assessment tools", "Annual retrospective"],
    popular: false,
    premium: true,
  },
];

export default function CoachingPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="gold-rule centered visible" style={{ width: "60px" }} />
          <p className={styles.heroLabel}>Coaching & Mentoring Solutions</p>
          <h1 className={styles.heroTitle}>
            Every Kind of Growth.<br />
            <em>One Right Coach.</em>
          </h1>
          <p className={styles.heroSub}>
            Whether you are navigating a career crossroads, leading a team through uncertainty,
            or rebuilding what matters most — there is a coaching path designed exactly for you.
          </p>
        </div>
        <div className={styles.heroDiagonal} />
      </section>

      {/* Services deep-dives */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`${styles.serviceSection} ${i % 2 === 1 ? styles.reversed : ""}`}
        >
          <div className={styles.serviceImageCol}>
            <div className={styles.serviceImageBg} />
            <span className={styles.serviceGhostNum}>{svc.num}</span>
            <div className={styles.serviceIconWrap}>
              <div className={styles.serviceIconLine} />
              <span className={styles.serviceIconTag}>{svc.category}</span>
              <div className={styles.serviceIconLine} />
            </div>
          </div>
          <div className={styles.serviceContentCol}>
            <span className="gold-rule visible" />
            <p className={styles.serviceLabel}>{svc.category}</p>
            <h2 className={styles.serviceTitle}>
              {svc.headline.split("\n").map((line, li) => (
                <span key={li} style={{ display: "block" }}>{line}</span>
              ))}
            </h2>
            {svc.body.map((b, bi) => (
              <p key={bi} className={styles.serviceBody}>{b}</p>
            ))}
            <div className={styles.outcomes}>
              {svc.outcomes.map((o) => (
                <span key={o} className={styles.outcome}>
                  <span className={styles.outcomeCheck}>✓</span> {o}
                </span>
              ))}
            </div>
            <Link href="/contact#book" className="btn btn-primary" style={{ alignSelf: "flex-start", textDecoration: "none" }}>
              {svc.cta} →
            </Link>
          </div>
        </section>
      ))}

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.pricingInner}>
          <div className={styles.pricingHeader}>
            <span className="gold-rule centered visible" />
            <p className={styles.pricingLabel}>Investment Plans</p>
            <h2 className={styles.pricingTitle}>
              Your Investment in the<br /><em>Best Version of You.</em>
            </h2>
          </div>
          <div className={styles.plansGrid}>
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`${styles.planCard} ${plan.popular ? styles.planPopular : ""} ${plan.premium ? styles.planPremium : ""} fade-up stagger-${i + 1}`}
              >
                {plan.popular && <span className={styles.planBadge}>Most Popular</span>}
                {plan.premium && <span className={`${styles.planBadge} ${styles.planBadgePremium}`}>Premium</span>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>{plan.price}</div>
                <p className={styles.planSessions}>{plan.sessions}</p>
                <p className={styles.planDesc}>{plan.desc}</p>
                <ul className={styles.planFeatures}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.planFeature}>
                      <span className={styles.featureCheck}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact#book" className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`} style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
