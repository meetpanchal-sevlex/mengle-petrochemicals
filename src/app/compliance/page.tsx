'use client';

import React, { useRef, useEffect } from 'react';
import { Award, CheckCircle2, ShieldCheck, Flame, FileCheck, Building2, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompliancePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only auto-scroll on mobile (where the container is scrollable)
    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 640) { // sm breakpoint
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we are near the end, reset to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll forward by one card width (~85vw or roughly 300px)
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 2500); // 2.5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pt-10 pb-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-8 mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">
            Licenses & Authorizations
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
            Statutory Compliance & Certifications
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
            Operating strictly within the regulatory frameworks established by the Government of India. Our rigorous adherence to safety protocols and statutory licensing ensures you have a secure, risk-free partner.
          </p>
        </div>

        {/* Primary Certifications Grid (Swipeable on Mobile) */}
        <div ref={scrollRef} className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide mb-6">
          
          {/* PESO Card */}
          <div className="snap-center shrink-0 w-full sm:w-auto bg-white rounded-2xl p-5 border text-center border-amber-500/30 shadow-sm shadow-amber-500/5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                PESO Authorized
              </h2>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Petroleum & Explosives Safety
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully authorized and licensed by the Government of India for the safe handling, transport, and distribution of hazardous petroleum products and solvents, complying with Petroleum Rules, 2002.
              </p>
            </div>
          </div>

          {/* MSME Card */}
          <div className="snap-center shrink-0 w-full sm:w-auto bg-white rounded-2xl p-5 border text-center border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                Udyam MSME Registered
              </h2>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Govt. of India Enterprise
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Officially registered under the MSME framework, validating our business identity and reinforcing our commitment to transparent, recognized B2B commerce and long-term partnerships.
              </p>
            </div>
          </div>

          {/* GST Card */}
          <div className="snap-center shrink-0 w-full sm:w-auto bg-white rounded-2xl p-5 border text-center border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <FileCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                GST Compliant
              </h2>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Goods and Services Tax
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully compliant with national taxation frameworks, ensuring seamless pan-India billing, transparent invoicing, and instant E-way bill generation for uninterrupted supply chain operations.
              </p>
            </div>
          </div>

          {/* Quality Card */}
          <div className="snap-center shrink-0 w-full sm:w-auto bg-white rounded-2xl p-5 border text-center border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Scale className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-1">
                Quality Assurance
              </h2>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Lab-Tested Specifications
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every batch of our petroleum and chemical products is strictly tested against industry-standard parameters to guarantee consistent calorific value and performance in your machinery.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* The Yellow Guarantees Strip */}
      <section className="bg-amber-500 text-slate-950 py-6 px-4 sm:px-8 mt-6 rounded-3xl mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-5 h-5 mb-1.5 text-slate-950" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">GOVT. AUTHORIZED</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Licensed Petroleum Supplier</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CheckCircle2 className="w-5 h-5 mb-1.5 text-slate-950" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">QUALITY ASSURED</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Lab Tested Specifications</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="w-5 h-5 mb-1.5 text-slate-950" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">INDUSTRY TRUSTED</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Complete Statutory Registrations</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Flame className="w-5 h-5 mb-1.5 text-slate-950" />
            <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">PERFORMANCE DRIVEN</div>
            <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Consistent Calorific Value</div>
          </div>
        </div>
      </section>
    </main>
  );
}
