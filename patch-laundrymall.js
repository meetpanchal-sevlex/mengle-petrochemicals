const fs = require('fs');

const pageContent = `'use client';

import React, { useRef, useEffect } from 'react';
import { Award, CheckCircle2, ShieldCheck, Flame, FileCheck, Building2, Scale, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompliancePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 640) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pb-12 bg-slate-50 pt-[68px]">
      
      {/* Edge-to-Edge Auto-Scrolling Hero Banners (Like Laundry Mall) */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full"
      >
        
        {/* Banner 1: PESO */}
        <div className="snap-center shrink-0 w-screen h-[280px] sm:h-[400px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex items-center">
          {/* Decorative Icon Right */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-20 rotate-12">
            <ShieldCheck className="w-48 h-48 sm:w-80 sm:h-80 text-amber-500" />
          </div>
          
          <div className="w-full px-6 sm:px-12 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              AUTHORIZATION
            </div>
            <h1 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              PESO Certified
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-sm sm:max-w-xl leading-relaxed mb-6">
              Government licensed for safe handling and distribution of hazardous petroleum products and solvents.
            </p>
            <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-md cursor-default">
              View Certificate <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Banner 2: MSME */}
        <div className="snap-center shrink-0 w-screen h-[280px] sm:h-[400px] bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 relative overflow-hidden flex items-center">
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-20 -rotate-12">
            <Building2 className="w-48 h-48 sm:w-80 sm:h-80 text-sky-400" />
          </div>
          
          <div className="w-full px-6 sm:px-12 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              REGISTRATION
            </div>
            <h1 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              Udyam MSME
            </h1>
            <p className="text-sm sm:text-lg text-sky-100 max-w-sm sm:max-w-xl leading-relaxed mb-6">
              Officially recognized Govt. of India enterprise, ensuring transparent B2B trade and long-term industrial reliability.
            </p>
            <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-md cursor-default">
              Explore <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Banner 3: GST */}
        <div className="snap-center shrink-0 w-screen h-[280px] sm:h-[400px] bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 relative overflow-hidden flex items-center">
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-20 rotate-6">
            <FileCheck className="w-48 h-48 sm:w-80 sm:h-80 text-emerald-400" />
          </div>
          
          <div className="w-full px-6 sm:px-12 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              TAXATION
            </div>
            <h1 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              GST Compliant
            </h1>
            <p className="text-sm sm:text-lg text-emerald-100 max-w-sm sm:max-w-xl leading-relaxed mb-6">
              Seamless pan-India billing and instant E-way bill generation for uninterrupted supply chain logistics.
            </p>
            <div className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-md cursor-default">
              Explore <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

      </div>

      {/* Ticker Bar directly below banners (like Laundry Mall) */}
      <div className="bg-white border-b border-slate-200 py-3 flex items-center text-xs font-bold text-slate-600 px-4 gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap shadow-sm">
        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> PESO Licensed</span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-blue-500" /> MSME Registered</span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5"><FileCheck className="w-3.5 h-3.5 text-emerald-500" /> GST Input Tax Credit</span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-purple-500" /> Lab-Tested Quality</span>
      </div>

      {/* The Yellow Guarantees Strip */}
      <section className="bg-amber-500 text-slate-950 py-6 px-4 sm:px-8 mt-10 rounded-3xl mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">GOVT. AUTHORIZED</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Licensed Petroleum Supplier</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CheckCircle2 className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">QUALITY ASSURED</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Lab Tested Specifications</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">INDUSTRY TRUSTED</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Complete Statutory Registrations</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Flame className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">PERFORMANCE DRIVEN</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Consistent Calorific Value</div>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

fs.writeFileSync('src/app/compliance/page.tsx', pageContent);
console.log('Rebuilt compliance page into edge-to-edge Laundry Mall hero style');
