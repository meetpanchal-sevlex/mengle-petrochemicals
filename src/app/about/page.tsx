'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/data/companyData';
import { ShieldCheck, Target, Lightbulb, Users, PackageCheck, Zap, Building2, Truck } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const icons = [PackageCheck, Zap, ShieldCheck, Users, Target];

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden pt-12">
      {/* 1. HERO SECTION (Dark Premium) */}
      <section className="relative bg-[#0B1120] text-white pt-16 pb-24 sm:pt-24 sm:pb-32 border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Building2 className="w-4 h-4" /> Company Profile
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Powering Industry With <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Uncompromising Quality
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[15px] sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Distributing premium petroleum and industrial chemicals across India with lab-tested specifications and uncompromising compliance.
          </motion.p>
        </div>
      </section>

      {/* 2. VISION & MISSION BENTO GRID */}
      <section className="relative z-20 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/80 group hover:border-amber-300 transition-all duration-300 flex flex-col"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-sora)' }}>Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Simplifying petroleum procurement with dependable supply, professional service, and certified quality.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-800 group hover:border-amber-500/50 transition-all duration-300 text-white flex flex-col"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-800 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-2xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-sora)' }}>Our Vision</h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To be India's most trusted petroleum distributor, recognized for regulatory responsibility and long-term partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE STRENGTHS GRID */}
      <section className="py-12 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Operational Strengths
            </h2>
            <p className="text-slate-500 text-lg">
              The foundational pillars that allow us to deliver uncompromising quality at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.coreStrengths.map((strength, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div 
                  key={i} 
                  className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-amber-600 group-hover:border-amber-200 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{strength.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{strength.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* 4. CTA */}
      <section className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            Ready to secure your supply chain?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Partner with M. Engle Petrochemicals today for lab-certified products, transparent pricing, and pan-India delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-5 py-3.5 sm:px-8 sm:py-4 bg-amber-500 text-sm sm:text-base hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Request a Quote
            </Link>
            <Link href="/price-list" className="w-full sm:w-auto px-5 py-3.5 sm:px-8 sm:py-4 bg-slate-800 text-sm sm:text-base hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700">
              View Price List
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
