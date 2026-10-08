'use client';

import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Flame, FileCheck, Building2, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompliancePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Licenses & Authorizations
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Statutory Compliance & Certifications
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At M. Engle Petroleum, we operate strictly within the regulatory frameworks established by the Government of India. Our rigorous adherence to safety protocols and statutory licensing ensures that you have a secure, risk-free, and dependable partner for your industrial chemical and petroleum requirements.
          </p>
        </div>

        {/* Primary Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* PESO Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-500/20 shadow-lg shadow-amber-500/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <ShieldCheck className="w-32 h-32 text-amber-600" />
            </div>
            
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <ShieldCheck className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2 relative z-10">
              PESO Authorized
            </h2>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 relative z-10">
              Petroleum & Explosives Safety Organisation
            </div>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              Fully authorized and licensed by the Government of India for the safe handling, transport, and distribution of hazardous petroleum products, solvents, and chemicals. Our operations strictly comply with the Petroleum Rules, 2002, ensuring maximum industrial safety.
            </p>
          </motion.div>

          {/* MSME Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2 relative z-10">
              Udyam MSME Registered
            </h2>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 relative z-10">
              Ministry of Micro, Small & Medium Enterprises
            </div>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              Officially registered under the Government of India's MSME framework. This validates our business identity and reinforces our commitment to transparent, recognized B2B commerce and long-term industrial partnerships.
            </p>
          </motion.div>

          {/* GST Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <FileCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2 relative z-10">
              GST Compliant
            </h2>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 relative z-10">
              Goods and Services Tax
            </div>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              Fully compliant with national taxation frameworks, ensuring seamless pan-India billing, transparent invoicing, and instant E-way bill generation for uninterrupted logistics and supply chain operations.
            </p>
          </motion.div>

          {/* Quality Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Scale className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2 relative z-10">
              Quality Assurance
            </h2>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 relative z-10">
              Lab-Tested Specifications
            </div>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              Every batch of our petroleum and chemical products is strictly tested against industry-standard parameters (like flash point, density, and calorific value) to guarantee consistent performance in your operational machinery.
            </p>
          </motion.div>

        </div>
      </div>

      {/* The Yellow Guarantees Strip */}
      <section className="bg-amber-500 text-slate-950 py-8 px-4 sm:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-6 h-6 mb-2 text-slate-950" />
            <div className="text-xs lg:text-sm font-extrabold tracking-tight uppercase leading-tight">GOVT. AUTHORIZED</div>
            <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-1">Licensed Petroleum Supplier</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <CheckCircle2 className="w-6 h-6 mb-2 text-slate-950" />
            <div className="text-xs lg:text-sm font-extrabold tracking-tight uppercase leading-tight">QUALITY ASSURED</div>
            <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-1">Lab Tested Specifications</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="w-6 h-6 mb-2 text-slate-950" />
            <div className="text-xs lg:text-sm font-extrabold tracking-tight uppercase leading-tight">INDUSTRY TRUSTED</div>
            <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-1">Complete Statutory Registrations</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Flame className="w-6 h-6 mb-2 text-slate-950" />
            <div className="text-xs lg:text-sm font-extrabold tracking-tight uppercase leading-tight">PERFORMANCE DRIVEN</div>
            <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-1">Consistent Calorific Value</div>
          </div>
        </div>
      </section>
    </main>
  );
}
