'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const chapters = [
  {
    num: '01',
    title: 'The Young Manager',
    pullQuote: '"Is this normal?"',
    body: `I remember a moment during a corporate training session, early in my career. A mid-level manager lingered after the room had emptied. He stood by the door, fiddling with his ID lanyard, and asked in a low voice: "Is this normal?" I asked him to sit. What followed was a 45-minute conversation that had nothing to do with the training curriculum. He was not struggling with skill gaps. He was struggling to breathe. He was going home every night with a chest tight with anxiety. He was waking up at 3am rehearsing conversations he could never bring himself to have. He was managing 35 people while he could barely manage himself.\n\nThat conversation changed me.`,
  },
  {
    num: '02',
    title: 'What Corporate Training Taught Me',
    pullQuote: '"Most workplace issues are not skill issues. They are nervous-system issues wearing formal clothes."',
    body: `Over the next few years, I facilitated hundreds of training sessions. Leadership development. Communication skills. Conflict management. Performance coaching. The rooms were different. The industries were different. The challenges were strikingly similar. People who could not speak to their colleagues the way they needed to. Leaders who could not admit uncertainty without feeling like they were collapsing. High performers who had quietly stopped performing because no one had noticed the slow erosion of their will.\n\nI began to see the real gap — not between people and their skills, but between people and themselves.`,
  },
  {
    num: '03',
    title: 'The Day I Started Listening Differently',
    pullQuote: '"What just happened in your body?"',
    body: `There was a particular session with a senior executive — confident on the surface, sharp, articulate. Halfway through, I asked a question that should have been straightforward. His face went still. A long pause. I resisted the urge to fill the silence. Finally he said: "I don't know how to answer that." I said: "Take your time. What just happened in your body when I asked that?" He stared at me. And then he began to talk about his son's school play, the one he had missed three years in a row. About the look on his daughter's face when she stopped asking him to come.\n\nThat was not a leadership problem. That was a life problem wearing a leadership costume.`,
  },
  {
    num: '04',
    title: 'Why Coaching Works When Motivation Fails',
    pullQuote: '"Motivation is a spark. Coaching is a structure."',
    body: `I have been asked many times: why coaching? Why not therapy? Why not books? Why not a good mentor?\n\nAll of those have value. But coaching occupies a specific and unique space. It is not about your past, though your past will surface. It is not about advice, though clarity will emerge. It is about creating a structured relationship in which you are held accountable to your own stated values and goals — by someone who is neither your boss, your spouse, nor your friend, and who therefore has no agenda other than your growth.\n\nNeuroscience tells us that the prefrontal cortex — responsible for long-term planning, impulse control, and rational decision-making — operates better when we feel psychologically safe. Coaching creates that safety. Not comfort. Safety. There is a difference.`,
  },
  {
    num: '05',
    title: 'The Bigger Question',
    pullQuote: '"A culture is not shaped by vision statements. It is shaped by nervous systems."',
    body: `When I started working with organisations, I began to see something that troubled me: the culture of an organisation is rarely what is written on the wall. It is what happens in the 90-second conversation before the meeting begins. It is the email sent at 11pm. It is the manager who never says "I don't know" because somewhere along the line, vulnerability became synonymous with weakness.\n\nLeadership is personal. Culture is personal. The way a leader holds their stress — or doesn't — ripples through an entire team. I began to understand that if we want to change organisations, we must first change people. And to change people, we must first help them understand themselves.`,
  },
  {
    num: '06',
    title: 'What I Offer',
    pullQuote: null,
    body: `Today, I work with individuals — executives, entrepreneurs, professionals, couples, and people simply at a crossroads — and with organisations across India, Mauritius, and Singapore. I offer life coaching, executive coaching, career coaching, relationship coaching, and entrepreneur mentoring. For organisations, I deliver corporate training programmes, leadership workshops, and cultural transformation consultancy.\n\nI also run the International Coaching Institute (ICI), where I train and certify the next generation of coaches. I believe that coaching is one of the most important professions of our time — not a luxury, but a necessity for anyone who wants to lead with integrity.`,
  },
  {
    num: '07',
    title: 'Why This Is Personal',
    pullQuote: '"The bravest leaders are not the loudest in the room."',
    body: `I do this work because I have seen, again and again, what happens when people are finally given the space to be honest — about what they want, what they fear, what they have been pretending not to notice. Something unlocks. Not suddenly. Not magically. But steadily, with each session, something begins to shift.\n\nI have watched a mother of three find the clarity to finally launch the business she had been dreaming about for a decade. I have watched a CEO who was about to resign from his company — and his marriage — find a way forward. I have watched a young professional stop apologising for taking up space.\n\nThis is why I do it. Not because I have all the answers. But because I know how to ask the right questions.`,
  },
];

export default function StoryChapters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animated background glow that moves with scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-brand-black-deep py-32 relative overflow-hidden">
      
      {/* Dynamic tracking background glow */}
      <motion.div 
        style={{ top: bgY }}
        className="absolute left-0 w-full h-[600px] bg-brand-red/5 blur-[250px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Continuous left border line */}
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />
        
        {/* Animated progressive red line */}
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 lg:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-red to-brand-red-light hidden md:block origin-top shadow-[0_0_15px_rgba(234,67,53,0.8)] z-20"
        />

        <div className="flex flex-col gap-32">
          {chapters.map((chapter, i) => (
            <motion.div 
              key={chapter.num} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
            >
              
              {/* Desktop Node Indicator */}
              <div className="absolute -left-1.5 top-14 w-4 h-4 rounded-full border-2 border-brand-red bg-brand-black-deep z-30 hidden md:block" />

              {/* Left Column: Sticky Title & Quote (4 columns) */}
              <div className="lg:col-span-5 md:pl-12 lg:pl-16">
                <div className="sticky top-32">
                  <span className="font-playfair text-[100px] lg:text-[140px] font-bold text-white/5 leading-none block -mb-8 lg:-mb-12 select-none tracking-tighter">
                    {chapter.num}
                  </span>
                  
                  <div className="relative z-10">
                    <span className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-brand-red block mb-4">
                      Chapter {chapter.num}
                    </span>
                    <h2 className="font-playfair italic text-3xl lg:text-5xl text-white leading-[1.1] mb-8">
                      {chapter.title}
                    </h2>
                    
                    {chapter.pullQuote && (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-8 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-brand-red/30 transition-colors duration-500"
                      >
                        {/* Hover accent inside quote */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                        
                        <Quote className="text-white/20 mb-4" size={32} />
                        <p className="font-playfair italic text-xl lg:text-2xl text-white/90 leading-relaxed">
                          {chapter.pullQuote}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Flowing Body Text (7 columns) */}
              <div className="lg:col-span-7 pt-4 lg:pt-24 pb-8">
                <div className="space-y-8">
                  {chapter.body.split('\n\n').map((para, pi) => (
                    <motion.p 
                      key={pi} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: pi * 0.15 }}
                      className="font-inter text-lg lg:text-xl text-white/70 leading-relaxed font-light"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
