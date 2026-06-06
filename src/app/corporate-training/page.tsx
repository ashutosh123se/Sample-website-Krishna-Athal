import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/sections/CTABanner';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = { title: 'Corporate Training | Dr Krishna Athal', description: 'Build real workplace skills that translate into behaviour change. Corporate training with Dr Krishna Athal.' };

const solutions = [
  { title: 'Leadership Presence & Executive Communication', desc: 'Calm authority, clarity under pressure, and influence that lands.', href: '/leadership-presence-and-executive-communication' },
  { title: 'AI-Era Leadership & Human Skills', desc: 'How leaders think, decide, and lead responsibly alongside AI tools.', href: '/ai-era-leadership-and-human-skills' },
  { title: 'Emotional Intelligence & Self-Regulation', desc: 'Trigger mastery, resilience, and better responses in demanding environments.', href: '/emotional-intelligence-and-self-regulation' },
  { title: 'Difficult Conversations, Conflict & Psychological Safety', desc: 'Say the hard things well, reduce politics, and build high-trust teams.', href: '/difficult-conversations-conflict' },
];

const formats = [
  { icon: '🏢', title: 'In-Person Workshops', desc: 'High-impact full-day and multi-day workshops at your premises or an offsite venue.' },
  { icon: '💻', title: 'Virtual Sessions', desc: 'Interactive online programmes designed for remote and hybrid teams.' },
  { icon: '🔀', title: 'Hybrid Programmes', desc: 'Blended learning combining live sessions with async resources and follow-up coaching.' },
];

const clientLogos = ['Microsoft', 'Singapore Airlines', 'Reliance', 'PepsiCo', 'ICICI Bank', 'American Express'];

export default function CorporateTrainingPage() {
  return (
    <div>
      <PageHero eyebrow="For Business" title="Corporate Training & Workshops" subtitle="Build real workplace skills that translate into behaviour change." primaryCta={{ label: 'Request a Proposal', href: '/contact' }} secondaryCta={{ label: 'Workshop Registration', href: '/workshop-registration-form' }} />

      {/* Client logos */}
      <section className="bg-brand-black-mid py-12 border-y border-white/10">
        <p className="text-center font-inter text-xs font-bold tracking-widest uppercase text-white mb-8">Trusted by</p>
        <div className="flex justify-center flex-wrap gap-8 px-6">
          {clientLogos.map((logo) => (
            <span key={logo} className="font-inter text-sm font-semibold text-white/40 uppercase tracking-wide">{logo}</span>
          ))}
        </div>
      </section>

      {/* Problem-Solution */}
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading eyebrow="The Challenge" title="Why Most Corporate Training Fails" align="left" />
            <p className="font-inter text-base text-white/70 leading-relaxed mb-6">Most training programmes focus on information transfer. They fill notebooks and tick compliance boxes. But behaviour does not change because someone attended a workshop.</p>
            <p className="font-inter text-base text-white/70 leading-relaxed">Real change happens when training creates psychological insight, emotional safety, and structured accountability — the three elements that are almost always missing.</p>
          </div>
          <div className="glass rounded-2xl p-10">
            <h3 className="font-playfair text-2xl text-white mb-6">What I Do Differently</h3>
            {['I work at the behavioural level, not just the knowledge level', 'Every programme is contextualised for your organisation', 'I use case studies, role-play, and live practice — not slides alone', 'Follow-up coaching sessions anchor the learning post-programme', 'I measure outcomes, not just satisfaction scores'].map((point, i) => (
              <div key={i} className="flex items-start gap-3 mb-4">
                <span className="text-white font-bold text-lg flex-shrink-0">→</span>
                <p className="font-inter text-sm text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-brand-black-deep py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="Training Solutions" title="4 Flagship Programmes" align="center" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <a key={i} href={sol.href} className="glass rounded-2xl p-10 group hover:border-brand-red transition-all hover:-translate-y-1 block">
                <span className="font-inter text-xs font-bold tracking-widest uppercase text-white mb-4 block">Programme {String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-playfair text-2xl text-white mb-4 group-hover:text-brand-red transition-colors">{sol.title}</h3>
                <p className="font-inter text-sm text-white/60 leading-relaxed mb-6">{sol.desc}</p>
                <span className="font-inter text-xs text-white font-semibold">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery formats */}
      <section className="bg-brand-white-DEFAULT py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center mb-12"><SectionHeading eyebrow="Flexible Delivery" title="Formats That Fit Your Team" align="center" dark={false} /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, i) => (
              <div key={i} className="bg-brand-black rounded-2xl p-8 text-center border border-white/10">
                <span className="text-4xl block mb-4">{format.icon}</span>
                <h3 className="font-playfair text-xl text-white mb-3">{format.title}</h3>
                <p className="font-inter text-sm text-white/60 leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube embed */}
      <section id="showreel" className="bg-brand-black py-16 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-playfair text-2xl text-white mb-8">Watch Dr Krishna in Action</h3>
          <div className="bg-brand-black-mid rounded-2xl border border-white/10 aspect-video flex items-center justify-center">
            <span className="font-inter text-sm text-white/30">YouTube Showreel Embed</span>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
