'use client';
import { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/sections/CTABanner';
import Button from '@/components/ui/Button';

const steps = [
  { num: 1, title: 'Name & Role', fields: [{ label: 'Full Name', type: 'text', placeholder: 'Your full name' }, { label: 'Job Title', type: 'text', placeholder: 'Your current role' }] },
  { num: 2, title: 'Your Situation', fields: [{ label: 'What brings you to coaching?', type: 'textarea', placeholder: 'Be as specific as possible…' }] },
  { num: 3, title: 'Your Challenges', fields: [{ label: 'What is currently holding you back?', type: 'textarea', placeholder: 'What are the main obstacles you are facing?' }] },
  { num: 4, title: 'What You Have Tried', fields: [{ label: 'What have you already tried?', type: 'textarea', placeholder: 'Past coaching, books, courses…' }] },
  { num: 5, title: 'Contact Details', fields: [{ label: 'Email Address', type: 'email', placeholder: 'your@email.com' }, { label: 'Phone (optional)', type: 'tel', placeholder: '+1 234 567 890' }] },
];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero eyebrow="Get in Touch" title="Start the Conversation" subtitle="Book a free 15-minute discovery call, or complete the pre-coaching questionnaire below." primaryCta={{ label: 'Book via Calendly', href: 'https://calendly.com/athalkrishna/free-appointment' }} />

      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Multi-step form */}
          <div>
            <h2 className="font-playfair text-3xl text-white mb-4">Pre-Coaching Questionnaire</h2>
            <p className="font-inter text-sm text-white/50 mb-8">5 short questions to help Dr Krishna understand your context before your first conversation.</p>

            {/* Progress bar */}
            <div className="w-full bg-brand-white/10 rounded-full h-1.5 mb-8">
              <div className="bg-brand-red h-1.5 rounded-full transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
            </div>
            <p className="font-inter text-xs text-white/40 mb-6">Step {step + 1} of {steps.length} — {steps[step].title}</p>

            {!submitted ? (
              <div>
                <div className="space-y-5 mb-8">
                  {steps[step].fields.map((field) => (
                    <div key={field.label}>
                      <label className="font-inter text-sm text-white/70 block mb-2">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <textarea className="w-full bg-brand-black-mid border border-brand-white/20 rounded-xl p-4 font-inter text-sm text-white focus:border-brand-red focus:outline-none resize-none h-32 transition-colors" placeholder={field.placeholder} />
                      ) : (
                        <input type={field.type} className="w-full bg-brand-black-mid border border-brand-white/20 rounded-xl p-4 font-inter text-sm text-white focus:border-brand-red focus:outline-none transition-colors" placeholder={field.placeholder} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  {step > 0 && (
                    <button onClick={() => setStep(s => s - 1)} className="font-inter text-sm text-white/50 hover:text-brand-red transition-colors">
                      ← Back
                    </button>
                  )}
                  <div className="ml-auto">
                    {step < steps.length - 1 ? (
                      <Button onClick={() => setStep(s => s + 1)} variant="primary">
                        Next →
                      </Button>
                    ) : (
                      <Button onClick={() => setSubmitted(true)} variant="primary">
                        Submit Request
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass rounded-2xl p-10 text-center">
                <span className="text-4xl block mb-4">✅</span>
                <h3 className="font-playfair text-2xl text-white mb-3">Thank You!</h3>
                <p className="font-inter text-sm text-white/60">Dr Krishna will review your questionnaire and reach out within 24 hours to schedule your call.</p>
              </div>
            )}
          </div>

          {/* Calendly embed */}
          <div>
            <h2 className="font-playfair text-3xl text-white mb-4">Or Book Directly</h2>
            <p className="font-inter text-sm text-white/50 mb-8">Choose a time that works for you using the Calendly scheduler below.</p>
            <div className="bg-brand-black-mid rounded-2xl border border-white/10 overflow-hidden" style={{ minHeight: 600 }}>
              <iframe
                src="https://calendly.com/athalkrishna/free-appointment?embed_type=Inline&hide_event_type_details=1"
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a session with Dr Krishna Athal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office addresses */}
      <section className="bg-brand-black-deep py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[{ flag: '🇮🇳', city: 'Mumbai, India', phone: '+91 98765 43210' }, { flag: '🇲🇺', city: 'Port Louis, Mauritius', phone: '+230 5700 0000' }, { flag: '🇸🇬', city: 'Singapore', phone: '+65 9000 0000' }].map((office) => (
            <div key={office.city}>
              <span className="text-3xl block mb-2">{office.flag}</span>
              <h3 className="font-inter text-sm font-semibold text-white mb-1">{office.city}</h3>
              <p className="font-inter text-xs text-white">{office.phone}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
