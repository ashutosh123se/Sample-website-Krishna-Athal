// ── NAVIGATION DATA ──
export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  href: string;
  sections: {
    title: string;
    links: NavLink[];
  }[];
}

export const navItems: (NavLink | NavDropdown)[] = [
  {
    label: 'About',
    href: '/about',
    sections: [
      {
        title: 'DR KRISHNA ATHAL',
        links: [
          { label: 'About Him', href: '/about' },
          { label: 'His Story', href: '/story' },
        ],
      },
      {
        title: 'GLOBAL OFFICES',
        links: [
          { label: '🇮🇳 India (Mumbai)', href: '/life-coaching-in-india' },
          { label: '🇲🇺 Mauritius (Port Louis)', href: '/life-coaching-in-mauritius' },
          { label: '🇸🇬 Singapore (Paya Lebar)', href: '/life-coaching-in-singapore' },
        ],
      },
      {
        title: 'ESG IMPACT',
        links: [
          { label: 'YUVA NGO', href: '/about#yuva' },
          { label: 'Press Releases', href: '/about#press' },
        ],
      },
    ],
  },
  {
    label: 'For Individuals',
    href: '/coaching-plans-pricing',
    sections: [
      {
        title: 'HOW IT WORKS',
        links: [
          { label: 'What is Coaching?', href: '/what-is-coaching' },
          { label: 'Coaching Plans & Pricing', href: '/coaching-plans-pricing' },
          { label: "Pre-Coaching Questionnaire", href: '/pre-coaching-questionnaire' },
          { label: 'Testimonials', href: '/testimonials' },
        ],
      },
      {
        title: 'COACHING SOLUTIONS',
        links: [
          { label: 'Life Coaching', href: '/life-coaching' },
          { label: 'Executive Coaching', href: '/executive-coaching' },
          { label: 'Career & Growth Coaching', href: '/career-growth-coaching' },
          { label: 'Relationship & Couple', href: '/relationship-couple-coaching' },
          { label: 'Entrepreneur Mentoring', href: '/entrepreneur-mentoring' },
        ],
      },
      {
        title: 'AVAILABLE PLANS',
        links: [
          { label: 'Foundation ($160)', href: '/coaching-plans-pricing/foundation-coaching' },
          { label: 'Growth ($560)', href: '/coaching-plans-pricing/growth-coaching' },
          { label: 'Action ($720)', href: '/coaching-plans-pricing/action-coaching' },
          { label: 'Mastery ($1120)', href: '/coaching-plans-pricing/mastery-coaching' },
        ],
      },
    ],
  },
  {
    label: 'For Business',
    href: '/corporate-training',
    sections: [
      {
        title: 'HOW IT WORKS',
        links: [
          { label: 'What is Corporate Training?', href: '/what-is-corporate-training' },
          { label: 'Corporate Training Plans', href: '/corporate-training-plans-pricing' },
          { label: 'Pre-Training Questionnaire', href: '/pre-corporate-training-questionnaire' },
          { label: 'Testimonials', href: '/testimonials' },
        ],
      },
      {
        title: 'TRAINING SOLUTIONS',
        links: [
          { label: 'Leadership Presence & Communication', href: '/leadership-presence-and-executive-communication' },
          { label: 'AI-Era Leadership', href: '/ai-era-leadership-and-human-skills' },
          { label: 'Emotional Intelligence', href: '/emotional-intelligence-and-self-regulation' },
          { label: 'Difficult Conversations & Conflict', href: '/difficult-conversations-conflict' },
        ],
      },
      {
        title: 'PORTFOLIO',
        links: [
          { label: 'YouTube Showreel', href: '/corporate-training#showreel' },
          { label: 'Workshop Photo Gallery', href: '/corporate-training#gallery' },
          { label: 'Workshop Registration', href: '/workshop-registration-form' },
        ],
      },
    ],
  },
  { label: 'Academy', href: '/academy' },
  {
    label: 'Resources',
    href: '/international-coaching-institute',
    sections: [
      {
        title: 'INTERNATIONAL COACHING INSTITUTE',
        links: [
          { label: 'ICI Overview', href: '/international-coaching-institute' },
          { label: 'One-Week Certification', href: '/international-coaching-institute/one-week-certification' },
          { label: 'Become a Coach', href: '/international-coaching-institute/become-a-coach' },
        ],
      },
      {
        title: 'PUBLICATIONS',
        links: [
          { label: 'Power Without The Podium', href: '/book-power-without-the-podium' },
          { label: 'Tri-Intelligence Leadership', href: '/book-tri-intelligence-leadership' },
          { label: 'Ramrajya', href: '/book-ramrajya' },
        ],
      },
      {
        title: 'LOCATION PAGES',
        links: [
          { label: 'Life Coaching — India', href: '/life-coaching-in-india' },
          { label: 'Life Coaching — Mauritius', href: '/life-coaching-in-mauritius' },
          { label: 'Life Coaching — Singapore', href: '/life-coaching-in-singapore' },
          { label: 'Executive Coaching — India', href: '/executive-coaching-in-india' },
          { label: 'Corporate Training — India', href: '/corporate-training-in-india' },
        ],
      },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
