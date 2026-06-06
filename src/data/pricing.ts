// ── PRICING DATA ──
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  priceINR?: number;
  period: string;
  tagline: string;
  featured: boolean;
  sessions: string;
  features: string[];
  href: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'foundation',
    name: 'FOUNDATION',
    price: 160,
    priceINR: 13300,
    period: '1 Session',
    tagline: 'Start with clarity',
    featured: false,
    sessions: '1 Session',
    features: [
      'Personality & Strengths Assessment',
      'Guided Self-Reflection Journaling',
      'Defining What Success Looks Like',
      'Access to Coaching Resources',
    ],
    href: '/coaching-plans-pricing/foundation-coaching',
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: 560,
    priceINR: 46600,
    period: 'per month',
    tagline: 'Build real momentum',
    featured: false,
    sessions: '4 Sessions/Month',
    features: [
      'Goal and Vision Setting',
      'Structured Planning Tools',
      'Situational Judgement Test',
      'Goal Refinement Analysis',
      'Progress Tracking Tools',
    ],
    href: '/coaching-plans-pricing/growth-coaching',
  },
  {
    id: 'action',
    name: 'ACTION',
    price: 720,
    priceINR: 59900,
    period: 'per month',
    tagline: 'Execute at your peak',
    featured: true,
    sessions: '4 Sessions/Month',
    features: [
      'Time & Energy Management',
      'Action & Implementation Tools',
      'Task/Priority Alignment',
      'Career Aptitude Test',
      'Accountability Check-ins',
      'Reflection Practices',
    ],
    href: '/coaching-plans-pricing/action-coaching',
  },
  {
    id: 'mastery',
    name: 'MASTERY',
    price: 1120,
    priceINR: 93200,
    period: 'per month',
    tagline: 'Lead at the highest level',
    featured: false,
    sessions: '4 Sessions/Month',
    features: [
      'Performance & Progress Assessment',
      'High-Performance & Resilience Strategies',
      'Critical Thinking Tools',
      'Leadership & Influence Development',
      'Advanced Networking Opportunities',
    ],
    href: '/coaching-plans-pricing/mastery-coaching',
  },
];

// ── SERVICES DATA ──
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  { id: 'life', icon: 'Sun', title: 'Life Coaching', description: 'Clarity, courage, and conscious growth for your next chapter', href: '/life-coaching' },
  { id: 'executive', icon: 'Crown', title: 'Executive Coaching', description: 'Calm authority, clear decisions, and high-trust leadership', href: '/executive-coaching' },
  { id: 'career', icon: 'TrendingUp', title: 'Career & Growth', description: 'Direction, confidence, and momentum in work and life', href: '/career-growth-coaching' },
  { id: 'relationship', icon: 'Heart', title: 'Relationship & Couple', description: 'Repair patterns, deepen trust, and communicate with care', href: '/relationship-couple-coaching' },
  { id: 'entrepreneur', icon: 'Rocket', title: 'Entrepreneur Mentoring', description: 'Build with purpose, lead self first, scale without burnout', href: '/entrepreneur-mentoring' },
  { id: 'corporate', icon: 'Users', title: 'Corporate Training', description: 'Real workplace skills that translate into behaviour change', href: '/corporate-training' },
];
