'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Flame, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
  fadeUp: any;
}

export default function HeroSection({ onOpenQuote, fadeUp }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-16 border-b border-slate-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          className="text-center flex flex-col items-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {/* Top Authorization Badge linking to dedicated Compliance page */}
          <motion.div variants={fadeUp}>
            <a
              href="/compliance"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:border-amber-500/40 transition-all cursor-pointer group"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>PESO AUTHORIZED & UDYAM REGISTERED SUPPLIER</span>
              <span className="text-slate-500 text-[11px] hidden sm:inline group-hover:text-amber-400 transition-colors">• View Compliance →</span>
            </a>
          </motion.div>

          {/* Main Title & Subtitle */}
          <motion.div variants={fadeUp} className="space-y-3 max-w-4xl">
            <h1
              className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Industrial Oil & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Chemical Solutions
              </span>
            </h1>
            <h2
              className="text-xs sm:text-sm text-slate-400 font-bold tracking-widest uppercase mt-3"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Powering Industry. Delivering Performance.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Delivering lab-tested industrial fuels, base oils, and specialty solvents with uncompromising consistency and pan-India logistics.
          </motion.p>

          {/* Categories Pill Strip */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 pt-1">
            {[
              "Industrial Fuels",
              "Base Oils",
              "White Oils",
              "Solvents",
              "Petrochemicals"
            ].map((cat, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300 font-medium">
                • {cat}
              </span>
            ))}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div variants={fadeUp} className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={onOpenQuote}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all hover:scale-102 cursor-pointer"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#products"
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all hover:border-slate-600"
            >
              <span>Explore Products & Specs</span>
            </a>
          </motion.div>

          {/* Sleek Logistics & Trust Strip */}
          <motion.div
            variants={fadeUp}
            className="pt-6 sm:pt-8 mt-2 border-t border-slate-800/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-slate-400"
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
    </section>
  );
}
