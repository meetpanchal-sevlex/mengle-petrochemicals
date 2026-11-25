'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Flame, Clock, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  fadeUp: any;
}

const HERO_SLIDES = [
  {
    src: '/images/hero-refinery-1.jpg',
    alt: 'Petrochemical Refinery Distillation Towers at Twilight',
  },
  {
    src: '/images/hero-refinery-2.jpg',
    alt: 'Industrial Petroleum Storage Tanks and Pipeline Terminal',
  },
];

export default function HeroSection({ onOpenQuote, fadeUp }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-20 border-b border-slate-800 min-h-[540px] sm:min-h-[600px] lg:min-h-[650px] flex items-center">
      {/* Full-Bleed Animated 4K Refinery Background Carousel (Ken Burns Zoom) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <AnimatePresence mode="sync">
          <motion.img
            key={HERO_SLIDES[currentSlide].src}
            src={HERO_SLIDES[currentSlide].src}
            alt={HERO_SLIDES[currentSlide].alt}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.09 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: 7, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Directional Dark Petroleum Gradient Overlay (Keeps left copy crisp & right refinery vivid) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(95deg, rgba(2, 6, 23, 0.96) 0%, rgba(2, 6, 23, 0.85) 45%, rgba(2, 6, 23, 0.48) 78%, rgba(2, 6, 23, 0.25) 100%)',
          }}
        />
        {/* Subtle Vertical Vignette for Mobile & Bottom Edge */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50 pointer-events-none" />
      </div>

      {/* Subtle Outlined Watermark Typography Behind Copy (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10 select-none pointer-events-none font-extrabold tracking-tighter leading-none text-[160px] xl:text-[210px] text-transparent opacity-60"
        style={{
          fontFamily: 'var(--font-sora)',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',
        }}
      >
        M. ENGLE
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20 w-full">
        <motion.div
          className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {/* Top Authorization Badge linking to dedicated Compliance page */}
          <motion.div variants={fadeUp}>
            <a
              href="/compliance"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] sm:text-xs font-semibold text-amber-400 hover:text-amber-300 hover:border-amber-500/50 transition-all cursor-pointer group"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>PESO AUTHORIZED & UDYAM REGISTERED SUPPLIER</span>
              <span className="text-slate-400 text-[11px] hidden sm:inline group-hover:text-amber-400 transition-colors">
                • View Compliance →
              </span>
            </a>
          </motion.div>

          {/* Main Title & Subtitle */}
          <motion.div variants={fadeUp} className="space-y-2.5">
            <h1
              className="text-[2.15rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em] drop-shadow-sm"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Industrial Oil & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Chemical Solutions
              </span>
            </h1>
            <h2
              className="text-xs sm:text-sm text-amber-400/90 font-bold tracking-widest uppercase pt-1"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Powering Industry. Delivering Performance.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-200 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Delivering lab-tested industrial fuels, base oils, and specialty solvents with uncompromising consistency and pan-India logistics.
          </motion.p>

          {/* Categories Pill Strip */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
            {[
              'Industrial Fuels',
              'Base Oils',
              'White Oils',
              'Solvents',
              'Petrochemicals',
            ].map((cat, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-xs px-3 py-1 rounded-md bg-slate-900/70 backdrop-blur-sm border border-slate-700/70 text-slate-200 font-medium"
              >
                • {cat}
              </span>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            variants={fadeUp}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <button
              onClick={onOpenQuote}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-102 cursor-pointer"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#products"
              className="bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md text-white border border-slate-700 font-bold px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all hover:border-slate-500"
            >
              <span>Explore Products & Specs</span>
            </a>
          </motion.div>

          {/* Sleek Logistics & Trust Strip */}
          <motion.div
            variants={fadeUp}
            className="pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-300"
          >
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Bulk Tanker & Barrel Dispatch</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Pan-India Logistics</span>
            </span>
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Lab-Tested Specifications</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll-Down Indicator */}
      <a
        href="#products"
        aria-label="Scroll to Products"
        className="hidden sm:flex flex-col items-center absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center -space-y-2"
        >
          <ChevronDown className="w-5 h-5" />
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </a>

      {/* Slide Switcher Dots (Bottom Right on Desktop) */}
      <div className="hidden md:flex items-center gap-2 absolute bottom-6 right-8 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Hero slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? 'w-7 bg-amber-400'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
