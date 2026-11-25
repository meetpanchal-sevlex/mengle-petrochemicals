'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Flame,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  fadeUp?: any;
}

const HERO_SLIDES = [
  {
    src: '/images/hero-refinery-1.jpg',
    alt: 'Petrochemical Refinery Distillation Towers at Twilight',
    titleTop: 'Industrial Oil &',
    titleAccent: 'Chemical Solutions',
    subtitle: 'Powering Industry. Delivering Performance.',
    description:
      'Delivering lab-tested industrial fuels, base oils, and specialty solvents with uncompromising consistency and pan-India logistics.',
  },
  {
    src: '/images/hero-refinery-2.jpg',
    alt: 'Industrial Petroleum Storage Tanks and Pipeline Terminal',
    titleTop: 'Bulk Petroleum &',
    titleAccent: 'Base Oil Logistics',
    subtitle: 'Reliable Sourcing. Nationwide Dispatch.',
    description:
      'Direct wholesale supply of LDO, Furnace Oil, SN-150/500 Base Oils, White Oils, and Aromatics from our Ahmedabad & Indore depots.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.3, ease: 'easeIn' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const CATEGORIES = [
  'Industrial Fuels',
  'Base Oils',
  'White Oils',
  'Solvents',
  'Petrochemicals',
];

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-20 border-b border-slate-800 min-h-[540px] sm:min-h-[600px] lg:min-h-[650px] flex items-center group/hero">
      {/* Full-Bleed Animated 4K Refinery Background Carousel (Ken Burns Zoom) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.09 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: 7, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-105"
          />
        </AnimatePresence>

        {/* Balanced Directional Gradient Scrim (Leaves 4K Refinery Vivid & Prominent) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(95deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.08) 78%, rgba(0, 0, 0, 0) 100%)',
          }}
        />
        {/* Gentle Bottom Edge Blend */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Subtle Outlined Watermark Typography Behind Copy (Desktop) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10 select-none pointer-events-none font-extrabold tracking-tighter leading-none text-[160px] xl:text-[210px] text-transparent"
        style={{
          fontFamily: 'var(--font-sora)',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',
        }}
      >
        M. ENGLE
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6">
          {/* Top Authorization Badge linking to dedicated Compliance page */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
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

          {/* Animated Slide-Synced Headline, Subtitle & Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4 sm:space-y-5"
            >
              <div className="space-y-2.5 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                <h1
                  className="text-[2.15rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em]"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  <span className="block overflow-hidden">
                    <motion.span variants={itemVariants} className="block">
                      {slide.titleTop}
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden">
                    <motion.span
                      variants={itemVariants}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        backgroundPosition: {
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-[length:200%_auto]"
                    >
                      {slide.titleAccent}
                    </motion.span>
                  </span>
                </h1>
                <motion.h2
                  variants={itemVariants}
                  className="text-xs sm:text-sm text-amber-400/95 font-bold tracking-widest uppercase pt-1"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {slide.subtitle}
                </motion.h2>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-slate-100 text-sm sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
                style={{ fontFamily: 'var(--font-plus-jakarta)' }}
              >
                {slide.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Staggered Categories Pill Strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.4 },
              },
            }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {CATEGORIES.map((cat, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                whileHover={{ y: -2, borderColor: 'rgba(245, 158, 11, 0.5)' }}
                className="text-[11px] sm:text-xs px-3 py-1 rounded-md bg-slate-900/75 backdrop-blur-sm border border-slate-700/70 text-slate-200 font-medium transition-colors"
              >
                • {cat}
              </motion.span>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        </div>
      </div>

      {/* Subtle Left / Right Slide Arrows (Desktop Hover) */}
      <button
        onClick={handlePrev}
        aria-label="Previous Hero Slide"
        className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white/80 border border-white/15 backdrop-blur-md absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/hero:opacity-100 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Hero Slide"
        className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 text-white/80 border border-white/15 backdrop-blur-md absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/hero:opacity-100 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

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
