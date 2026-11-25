'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, FlaskConical } from 'lucide-react';
import Link from 'next/link';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 40;
    const inc = target / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(current));
      }
    }, 22);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const highlights = [
  'Light Diesel Oil (LDO) & Furnace Oil',
  'SN-150 / SN-500 & Virgin Base Oils',
  'White Oils & Light Liquid Paraffin',
  'MTO, Naphtha, C9 & C10 Solvents',
  'PESO, Udyam & GST Authorized',
];

export default function AboutPreview() {
  return (
    <section className="py-10 sm:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Compact Mobile-Friendly Bento Photo Collage + Floating Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative pb-5 sm:pb-6"
          >
            <div className="grid grid-cols-12 gap-2.5 sm:gap-4 items-stretch">
              {/* Main Left Photo */}
              <div className="col-span-7 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                <img
                  src="/images/about-depot.jpg"
                  alt="M. Engle Industrial Bulk Storage Facility"
                  className="w-full h-[220px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Stacked Pair */}
              <div className="col-span-5 flex flex-col gap-2.5 sm:gap-4">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-slate-200 group flex-1">
                  <img
                    src="/images/hero-refinery-2.jpg"
                    alt="Refinery Supply Terminal"
                    className="w-full h-[104px] sm:h-[172px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-slate-200 group flex-1">
                  <img
                    src="/images/about-tanker.jpg"
                    alt="Bulk Tanker Loading Bay"
                    className="w-full h-[104px] sm:h-[172px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stat Card (Compact on Mobile, Bold on Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-3 sm:left-5 z-10 bg-[#0B1120]/95 backdrop-blur-md text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-3.5 sm:gap-5"
            >
              <div className="border-l-2 border-amber-400 pl-3">
                <div
                  className="text-xl sm:text-3xl font-extrabold text-amber-400 leading-none"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  <CountUp target={17} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-200 mt-0.5">
                  Certified Grades
                </div>
              </div>
              <div className="h-8 w-px bg-slate-700/80" />
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    100% Lab Tested
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">
                    Ahmedabad &amp; Indore Hubs
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Concise Narrative + Product Checklist + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-600">
              <span className="w-5 h-0.5 bg-amber-500 rounded-full" />
              <span>About Us</span>
            </div>

            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Trusted Industrial Oil &amp; Chemical Partner
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              M. Engle Petrochemicals delivers dependable wholesale sourcing of industrial fuels, base stocks, and specialty solvents across India—combining verifiable lab specifications with seamless tanker and barrel logistics.
            </p>

            {/* Compact 2-Col Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#0B1120] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
              <Link
                href="/compliance"
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold px-4 py-3 rounded-xl transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Compliance</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
