'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

/* ── Data ────────────────────────────────────────────────────────────── */
const posts = [
  {
    id: 1,
    img: '/insta-1.jpg',
    likes: '14,821',
    comments: 384,
    caption: 'Every stage is a classroom. Every audience is a teacher. Show up. Serve fully.',
    tags: ['#leadership', '#mindset'],
    time: '2d',
  },
  {
    id: 2,
    img: '/insta-2.jpg',
    likes: '11,472',
    comments: 262,
    caption: 'The real work happens on the blank page — before the session begins.',
    tags: ['#coaching', '#growth'],
    time: '5d',
  },
  {
    id: 3,
    img: '/insta-3.jpg',
    likes: '21,309',
    comments: 507,
    caption: 'Authority is not given. It is built — choice by choice, response by response.',
    tags: ['#authority', '#transformation'],
    time: '1w',
  },
  {
    id: 4,
    img: '/insta-4.jpg',
    likes: '17,654',
    comments: 441,
    caption: 'One conversation can rewrite an entire decade. That is why I show up fully.',
    tags: ['#presence', '#impact'],
    time: '2w',
  },
  {
    id: 5,
    img: '/insta-5.jpg',
    likes: '34,203',
    comments: 838,
    caption: 'Leadership is not a position. It is a decision you make before you are given the title.',
    tags: ['#leadership', '#vision'],
    time: '3w',
  },
  {
    id: 6,
    img: '/insta-6.jpg',
    likes: '9,762',
    comments: 273,
    caption: 'Three countries. One mission. Helping you become who you were meant to be.',
    tags: ['#global', '#mission'],
    time: '1mo',
  },
];

// Duplicate for seamless infinite loop
const scrollPosts = [...posts, ...posts, ...posts];

/* ── Icons ───────────────────────────────────────────────────────────── */
const HeartIcon = ({ filled = false }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? '#ed4956' : 'none'} stroke={filled ? '#ed4956' : 'currentColor'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const CommentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const BookmarkIcon = ({ filled = false }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? 'white' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);
const DotsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
  </svg>
);

/* ── Post Card ───────────────────────────────────────────────────────── */
function PostCard({ post, uid }: { post: typeof posts[0]; uid: string }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [burst, setBurst] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(p => !p);
  };

  const handleDoubleTap = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!liked) setLiked(true);
    setBurst(true);
    setTimeout(() => setBurst(false), 700);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setSaved(p => !p);
  };

  return (
    <div
      className="flex-shrink-0 w-[310px] bg-[#161616] rounded-2xl border border-white/[0.07] overflow-hidden flex flex-col transition-all duration-500 hover:border-white/[0.18] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:-translate-y-3"
      style={{ willChange: 'transform' }}
    >
      {/* Top bar */}
      <div className="flex items-center gap-3 px-3.5 py-3">
        <div className="p-[2px] rounded-full flex-shrink-0"
          style={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
          <div className="w-8 h-8 rounded-full overflow-hidden border-[2px] border-[#161616] relative">
            <Image src="/coach-session.jpg" alt="Avatar" fill className="object-cover" sizes="32px" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-[13px] leading-tight">drkrishnaathal</p>
          <p className="text-white/35 text-[10.5px]">Dubai · London · Singapore</p>
        </div>
        <button className="text-white/30 hover:text-white/70 transition-colors">
          <DotsIcon />
        </button>
      </div>

      {/* Image */}
      <div
        className="relative w-full aspect-square overflow-hidden bg-[#0d0d0d] cursor-pointer select-none"
        onDoubleClick={handleDoubleTap}
      >
        <Image
          src={post.img}
          alt={post.caption}
          fill
          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
          sizes="310px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Double-tap burst */}
        {burst && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <svg width="70" height="70" viewBox="0 0 24 24" fill="white" filter="drop-shadow(0 0 12px rgba(255,255,255,0.8))">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </motion.div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-3 pt-2.5 pb-1">
        <div className="flex items-center gap-3.5">
          <button onClick={handleLike}
            className={`transition-all duration-200 hover:scale-125 active:scale-90 ${liked ? 'text-[#ed4956]' : 'text-white/75 hover:text-white'}`}>
            <HeartIcon filled={liked} />
          </button>
          <button className="text-white/75 hover:text-white hover:scale-110 transition-all">
            <CommentIcon />
          </button>
          <button className="text-white/75 hover:text-white hover:scale-110 transition-all">
            <ShareIcon />
          </button>
        </div>
        <button onClick={handleSave}
          className={`transition-all duration-200 hover:scale-110 ${saved ? 'text-white' : 'text-white/75 hover:text-white'}`}>
          <BookmarkIcon filled={saved} />
        </button>
      </div>

      {/* Likes */}
      <div className="px-3.5 pt-0.5">
        <span className="text-white font-bold text-[13px]">
          {liked
            ? (parseInt(post.likes.replace(',', '')) + 1).toLocaleString()
            : post.likes} likes
        </span>
      </div>

      {/* Caption */}
      <div className="px-3.5 pt-1 pb-1 flex-1">
        <p className="text-[13px] leading-[1.45] text-white/80 line-clamp-2">
          <span className="font-bold text-white mr-1">drkrishnaathal</span>
          {post.caption}
        </p>
        <div className="flex flex-wrap gap-1 mt-1.5">
          {post.tags.map((tag, j) => (
            <span key={j} className="text-[12px] text-[#5b9bd5]">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-3.5 pb-3 pt-1.5 border-t border-white/[0.05] mt-1 flex items-center justify-between">
        <span className="text-[11.5px] text-white/30">View all {post.comments} comments</span>
        <span className="text-[10px] text-white/20 uppercase tracking-widest">{post.time}</span>
      </div>
    </div>
  );
}

/* ── Main Section ────────────────────────────────────────────────────── */
export default function InstagramFeed() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-[#080808] py-24 overflow-hidden border-t border-white/[0.04]">

      {/* Ambient blobs */}
      <div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(188,24,136,0.12) 0%, transparent 65%)', filter: 'blur(90px)' }} />
      <div className="absolute -bottom-60 -right-60 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,148,51,0.09) 0%, transparent 65%)', filter: 'blur(90px)' }} />

      <div className="relative z-10">

        {/* ── Profile Header ── */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            {/* Left: avatar + identity */}
            <div className="flex items-center gap-5">
              {/* Instagram-style animated story ring */}
              <div className="relative flex-shrink-0 w-[80px] h-[80px] rounded-full"
                style={{
                  background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
                  padding: '3px',
                  animation: 'hueRotate 5s linear infinite',
                }}>
                <div className="w-full h-full rounded-full border-[3px] border-[#080808] overflow-hidden relative">
                  <Image src="/coach-session.jpg" alt="Dr. Krishna Athal" fill className="object-cover" sizes="80px" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* IG gradient icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                    <defs>
                      <linearGradient id="igH" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#f09433" /><stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#igH)" />
                    <circle cx="12" cy="12" r="5" stroke="url(#igH)" />
                    <circle cx="17.5" cy="6.5" r="1" fill="url(#igH)" />
                  </svg>
                  <span className="text-white/45 text-[12.5px] font-medium tracking-wide">drkrishnaathal</span>
                </div>

                <h2 className="font-playfair text-[2.6rem] lg:text-5xl font-bold text-white leading-none">
                  Editorial{' '}
                  <em className="not-italic"
                    style={{ background: 'linear-gradient(90deg,#f09433,#dc2743,#bc1888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Moments
                  </em>
                </h2>
                <p className="text-white/35 text-[13.5px] mt-1">A curated glimpse into the journey.</p>
              </div>
            </div>

            {/* Right: stats + follow */}
            <div className="flex items-stretch rounded-xl overflow-hidden border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm flex-shrink-0">
              {[['1.2L+', 'Followers'], ['850+', 'Posts'], ['98%', 'Engagement']].map(([num, label], i, arr) => (
                <div key={i} className={`flex flex-col items-center px-5 py-3.5 gap-0.5 ${i < arr.length - 1 ? 'border-r border-white/[0.07]' : ''}`}>
                  <span className="text-white font-bold text-[18px] leading-none">{num}</span>
                  <span className="text-white/30 text-[9.5px] uppercase tracking-[1.5px]">{label}</span>
                </div>
              ))}
              <a
                href="https://instagram.com/drkrishnaathal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 text-[12.5px] font-bold text-white tracking-wider hover:opacity-85 transition-opacity"
                style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}
              >
                Follow
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Infinite Scroll Strip ── */}
        <div className="relative">
          {/* Left fade edge */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #080808 0%, transparent 100%)' }} />
          {/* Right fade edge */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #080808 0%, transparent 100%)' }} />

          {/* Scrolling track — pause on hover */}
          <div
            className="overflow-hidden"
            style={{ maskImage: 'none' }}
          >
            <div
              ref={trackRef}
              className="flex gap-5 py-4 px-4"
              style={{
                animation: 'marqueeScroll 45s linear infinite',
                width: 'max-content',
              }}
              onMouseEnter={() => {
                if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
              }}
              onMouseLeave={() => {
                if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
              }}
            >
              {scrollPosts.map((post, i) => (
                <PostCard key={`${post.id}-${i}`} post={post} uid={`${post.id}-${i}`} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="https://instagram.com/drkrishnaathal"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/[0.1] bg-white/[0.03] text-white/60 hover:text-white text-[11.5px] uppercase tracking-[2.5px] font-semibold backdrop-blur-sm transition-all duration-400 hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-1"
            style={{ transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            View All Posts on Instagram
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </motion.a>
        </div>

      </div>

      {/* Keyframe injection */}
      <style jsx global>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-310px * 6 - 20px * 6)); }
        }
        @keyframes hueRotate {
          from { filter: hue-rotate(0deg); }
          to   { filter: hue-rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
