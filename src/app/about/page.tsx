
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/data/companyData';
import { Award, CheckCircle2, ShieldCheck, Flame, Truck, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-slate-50">
      <section id="about" className="py-10 lg:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                    Introduction
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
                    style={{ fontFamily: 'var(--font-sora)' }}>
                    Driving Business Through Reliable Petroleum Solutions
                  </h2>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg sm:text-xl font-medium">
                  We distribute premium petroleum products and industrial chemicals to businesses across India. Partner with us for dependable supply chains, lab-tested specifications, and uncompromising regulatory compliance.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1">
                    MORE THAN PETROLEUM. A PARTNER YOU CAN RELY ON.
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    M Engle Petroleum brings together product availability, reliable supply, professional service, and compliance to create a dependable petroleum sourcing partner for businesses.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border-l-2 border-amber-500 pl-3">
                    <div className="text-xs font-bold text-slate-900 uppercase">Our Vision</div>
                    <p className="text-xs text-slate-600 mt-1">
                      To develop M Engle Petroleum into a trusted and recognized petroleum distribution company, known for reliable products, professional service, regulatory responsibility, and long-term customer relationships.
                    </p>
                  </div>
                  <div className="border-l-2 border-slate-900 pl-3">
                    <div className="text-xs font-bold text-slate-900 uppercase">Our Mission</div>
                    <p className="text-xs text-slate-600 mt-1">
                      To simplify petroleum procurement for businesses by providing dependable products, reliable supply, and professional service — every time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Core Strengths */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Our Core Operational Strengths
                </div>

                {COMPANY_INFO.coreStrengths.map((strength, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-colors flex items-start gap-4">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{strength.title}</div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{strength.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CATALOG & SPECIFICATIONS SECTION */}
        
    </main>
  );
}
