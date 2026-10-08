'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { Award, CheckCircle2, ShieldCheck, Flame, Truck, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function CompliancePage() {
  return (
    <main className="min-h-screen pt-20 bg-slate-50">
      <section id="credentials" className="bg-amber-500 text-slate-950 py-6 px-4 sm:px-8 shadow-md">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <Award className="w-5 h-5 lg:w-6 lg:h-6 mb-1 text-slate-950" />
              <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">GOVT. AUTHORIZED</div>
              <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Licensed Petroleum Supplier</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 mb-1 text-slate-950" />
              <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">QUALITY ASSURED</div>
              <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Lab Tested Specifications</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 mb-1 text-slate-950" />
              <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">INDUSTRY TRUSTED</div>
              <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Complete Statutory Registrations</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Flame className="w-5 h-5 lg:w-6 lg:h-6 mb-1 text-slate-950" />
              <div className="text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">PERFORMANCE DRIVEN</div>
              <div className="text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">Consistent Calorific Value</div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        
    </main>
  );
}
