'use client';

import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Flame,
  FileCheck,
  Building2,
  Scale,
  ArrowRight,
  ChevronRight,
  Copy,
  Check,
  FileDown,
  FlaskConical,
  Truck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/companyData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function CompliancePage() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (value: string, idx: number) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    }
  };

  const credentialStyles = [
    {
      icon: ShieldCheck,
      badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      topBorder: 'border-t-amber-500',
      tag: 'PESO Licensed',
    },
    {
      icon: Building2,
      badge: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
      topBorder: 'border-t-sky-500',
      tag: 'MSME Registered',
    },
    {
      icon: FileCheck,
      badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      topBorder: 'border-t-emerald-500',
      tag: 'GST Verified',
    },
    {
      icon: Award,
      badge: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
      topBorder: 'border-t-indigo-500',
      tag: 'Pan-India Supply',
    },
  ];

  const compliancePillars = [
    {
      title: 'PESO-Compliant Handling & Transit',
      desc: 'Licensed petroleum and solvent handling adhering to strict Petroleum & Explosives Safety Organisation storage and tanker safety norms.',
      icon: Truck,
      accent: 'bg-amber-100 text-amber-700',
    },
    {
      title: 'BIS & ASTM Lab Verification',
      desc: 'Every supply batch is tested against verifiable parameters including flash point, kinematic viscosity, density, and sulphur content.',
      icon: FlaskConical,
      accent: 'bg-sky-100 text-sky-700',
    },
    {
      title: 'GST & E-Way Bill Transparency',
      desc: '100% compliant tax invoicing, prompt E-Way bill generation, and seamless Input Tax Credit (ITC) for registered B2B buyers nationwide.',
      icon: Scale,
      accent: 'bg-emerald-100 text-emerald-700',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* 1. PHOTOGRAPHIC HERO BANNER */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 lg:py-24 border-b border-slate-800 overflow-hidden">
        <motion.img
          src="/images/about-depot.jpg"
          alt="Statutory Compliance and Petroleum Storage Infrastructure"
          initial={{ scale: 1.07, opacity: 0.65 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(2, 6, 23, 0.78) 0%, rgba(2, 6, 23, 0.68) 50%, rgba(2, 6, 23, 0.92) 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-300 mb-4 sm:mb-5"
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400">Compliance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-[1.1] drop-shadow"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Statutory Compliance &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Authorisations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-xs sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Full PESO licensing, Udyam MSME registration, and GST verification for risk-free industrial petroleum procurement across India.
          </motion.p>
        </div>
      </section>

      {/* 2. COMPACT TRUST TICKER */}
      <div className="bg-white border-b border-slate-200 py-2.5 sm:py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] sm:text-xs font-bold text-slate-600">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> PESO Licensed
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-sky-500" /> MSME Registered
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-emerald-500" /> GST Input Tax Credit
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-purple-500" /> Lab-Tested Quality
          </span>
        </div>
      </div>

      {/* 3. VERIFIED STATUTORY CREDENTIALS GRID (High-Contrast Dark Slate Cards) */}
      <section className="py-10 sm:py-16 bg-slate-200/60 relative border-b border-slate-300/70">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">
              Official Registrations
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Verified Vendor Credentials
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
              Tap any registration code to copy it directly for vendor onboarding or KYC verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {COMPANY_INFO.credentials.map((cred, idx) => {
              const style = credentialStyles[idx % credentialStyles.length];
              const Icon = style.icon;
              const isCopied = copiedIdx === idx;

              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`bg-[#0B1120] text-white rounded-2xl p-5 border border-slate-800 border-t-4 ${style.topBorder} shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between gap-4`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${style.badge}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> Active
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      {cred.title}
                    </div>
                    <div
                      className="text-sm sm:text-[15px] font-bold text-white mt-1.5 break-all bg-slate-900/90 border border-slate-800 rounded-lg px-2.5 py-2"
                      style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      {cred.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2 leading-snug">
                      {cred.subtitle}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(cred.value, idx)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 border border-slate-700/80 hover:border-amber-400 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SAFETY, QA & BILLING STANDARDS */}
      <section className="py-10 sm:py-14 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {compliancePillars.map((pillar, i) => {
              const PIcon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-300/80 shadow-md hover:shadow-lg transition-all flex flex-col gap-3"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.accent}`}
                  >
                    <PIcon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-extrabold text-slate-900"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GUARANTEES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="bg-amber-500 text-slate-950 py-5 px-4 sm:px-8 rounded-2xl shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
            <div className="flex flex-col items-center justify-center p-1.5">
              <Award className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
              <div className="text-[11px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">
                GOVT. AUTHORIZED
              </div>
              <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">
                Licensed Petroleum Supplier
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5">
              <CheckCircle2 className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
              <div className="text-[11px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">
                QUALITY ASSURED
              </div>
              <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">
                Lab Tested Specifications
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5">
              <ShieldCheck className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
              <div className="text-[11px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">
                INDUSTRY TRUSTED
              </div>
              <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">
                Complete Statutory Registrations
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-1.5">
              <Flame className="w-5 h-5 mb-1.5 text-slate-950 mx-auto" />
              <div className="text-[11px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight">
                PERFORMANCE DRIVEN
              </div>
              <div className="text-[10px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5">
                Consistent Calorific Value
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VENDOR ONBOARDING CTA */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto bg-[#0B1120] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1.5">
            <h3
              className="text-xl sm:text-2xl font-extrabold"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Need Vendor Onboarding Documents?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Request copies of our PESO license, GST certificate, MSME Udyam registration, or batch lab test reports for procurement approval.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Request Vendor Kit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/brochure.pdf"
              download="M_Engle_Petrochemicals_Brochure.pdf"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>Brochure PDF</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
