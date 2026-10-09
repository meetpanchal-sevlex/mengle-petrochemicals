'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Flame, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  fadeUp: any;
}

export default function HeroSection({ onOpenQuote, fadeUp }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-16 border-b border-slate-800">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline & Action */}
              <motion.div
                className="lg:col-span-7 space-y-6"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-amber-400"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>PESO AUTHORIZED & UDYAM REGISTERED SUPPLIER</span>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-3">
                  <h1
                    className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-0.03em]"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    Industrial Oil & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      Chemical Solutions
                    </span>
                  </h1>
                  <h2
                    className="text-sm sm:text-base text-slate-300 font-bold tracking-widest uppercase mt-3"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Powering Industry. Delivering Performance.
                  </h2>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  Delivering lab-tested industrial fuels, base oils, and specialty solvents with uncompromising consistency and pan-India logistics.
                </motion.p>

                {/* Categories Pill Strip */}
                <div className="flex flex-wrap gap-2 pt-2">
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
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  

                  
                </div>
              </motion.div>

              {/* Right Column: Key Trust Badges & Quick Glance Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Compliance & Statutory Authorisation
                    </div>
                    <div className="text-lg font-bold text-white mt-1">
                      Direct Wholesale Industrial Sourcing
                    </div>
                  </div>

                  <div className="space-y-4">
                    {COMPANY_INFO.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-medium">{cred.title}</div>
                          <div className="text-sm font-bold text-white font-mono tracking-tight">{cred.value}</div>
                          <div className="text-[11px] text-slate-500">{cred.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-amber-400" />
                      Bulk Tanker & Barrel Dispatch
                    </span>
                    <span className="text-amber-400 font-medium">Pan-India Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
