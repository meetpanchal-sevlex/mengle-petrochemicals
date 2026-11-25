'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { COMPANY_INFO } from '@/data/companyData';
import {
  ShieldCheck,
  Target,
  Lightbulb,
  Users,
  PackageCheck,
  Zap,
  Building2,
  Truck,
  CheckCircle2,
  Award,
  BadgeIndianRupee,
  Handshake,
  MapPin,
  ArrowRight,
  ChevronRight,
  FlaskConical,
} from 'lucide-react';
import Link from 'next/link';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function AboutPage() {
  const icons = [PackageCheck, Zap, ShieldCheck, Users, Target];

  const coreProductsChecklist = [
    'Light Diesel Oil (L.D.O.)',
    'Furnace Oil (F.O.) & Fuel Oil',
    'LSHS (Low Sulphur Heavy Stock)',
    'SN-150 / SN-500 Base Oils & LLP',
    'MTO, C9 / C10 Solvents & Aromatics',
  ];

  const partnershipPillars = [
    {
      title: 'Lab-Certified Products',
      desc: 'Consistent industrial fuels, base stocks, and solvents backed by verifiable BIS & ASTM specifications.',
      icon: Award,
      color: 'bg-amber-50 text-amber-600 border-amber-200/80',
    },
    {
      title: 'Competitive Pricing',
      desc: 'Direct wholesale sourcing from refineries enables transparent commercial rates for bulk buyers.',
      icon: BadgeIndianRupee,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    },
    {
      title: 'Dependable Delivery',
      desc: 'Structured logistics across India with responsive client coordination and compliant documentation.',
      icon: Handshake,
      color: 'bg-sky-50 text-sky-600 border-sky-200/80',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* 1. PHOTOGRAPHIC HERO BANNER */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-24 lg:py-28 border-b border-slate-800 overflow-hidden">
        <motion.img
          src="/images/hero-refinery-1.jpg"
          alt="M. Engle Petrochemicals Refinery Operations"
          initial={{ scale: 1.08, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(2, 6, 23, 0.72) 0%, rgba(2, 6, 23, 0.60) 50%, rgba(2, 6, 23, 0.90) 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-300 mb-5"
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Powering Industry With <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Uncompromising Quality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow"
          >
            Certified industrial fuels, base oils, white oils, and specialty solvents supplied across India with strict regulatory compliance.
          </motion.p>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION: LAYERED 3-IMAGE COLLAGE + COUNTER BADGE + COPY */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: 3-Image Layered Collage */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="lg:col-span-6 relative pb-10 sm:pb-12 pr-2 sm:pr-6"
            >
              {/* Decorative dot pattern behind collage */}
              <div
                aria-hidden="true"
                className="absolute bottom-2 right-0 w-28 h-28 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#64748b 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />

              <div className="relative flex items-start gap-3 sm:gap-5">
                {/* Main Tall Image */}
                <div className="w-[62%] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                  <img
                    src="/images/about-depot.jpg"
                    alt="Bulk Industrial Petroleum Storage Tanks"
                    className="w-full h-[270px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Stacked Secondary Overlapping Cards */}
                <div className="w-[38%] flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-8">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white shadow-xl group">
                    <img
                      src="/images/hero-refinery-2.jpg"
                      alt="Refinery Terminal Infrastructure"
                      className="w-full h-[115px] sm:h-[165px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white shadow-2xl -ml-6 sm:-ml-12 relative z-10 group">
                    <img
                      src="/images/about-tanker.jpg"
                      alt="Tanker Dispatch Loading Bay"
                      className="w-full h-[130px] sm:h-[190px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Animated Counter Badge (Teardrop/Corner Style) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute bottom-0 left-2 sm:left-4 z-20 bg-[#0B1120] text-white px-5 py-4 sm:px-7 sm:py-5 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-2xl border border-slate-700/80 min-w-[180px] sm:min-w-[220px]"
              >
                <div className="border-l-2 border-t-2 border-amber-400/70 pl-3 pt-1">
                  <div
                    className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight leading-none"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    <AnimatedCounter target={17} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                    Certified Industrial Grades
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Overview Narrative + Product Checklist */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
                <span className="w-6 h-0.5 bg-amber-500 rounded-full" />
                <span>Company Overview</span>
              </div>

              <h2
                className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Dependable Petroleum &amp; Industrial Supply
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.description}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Operating across strategic supply hubs in{' '}
                <strong className="text-slate-800 font-semibold">Ahmedabad</strong> and{' '}
                <strong className="text-slate-800 font-semibold">Indore</strong>, we eliminate procurement friction with verifiable lab testing, statutory compliance, and flexible bulk tanker or barrel dispatch.
              </p>

              {/* 2-Column Product Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreProductsChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
                >
                  <span>Explore Product Specs</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
                <Link
                  href="/compliance"
                  className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all"
                >
                  <span>View Licenses &amp; PESO</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICS BACKBONE & STRATEGIC INFRASTRUCTURE */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-14">
          {/* Row 1: Tanker Fleet & Bulk Logistics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
                <Truck className="w-4 h-4" />
                <span>Logistics &amp; Dispatch</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Bulk Tanker &amp; Drum Supply Network
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether your facility requires full tanker loads or sealed industrial barrels, our coordinated dispatch system ensures uninterrupted plant operations across India.
              </p>
              <div className="space-y-2.5 pt-1">
                {[
                  'Direct bulk tanker and packed drum fulfillment',
                  'PESO-compliant handling and hazardous material safety',
                  'Prompt E-Way billing and real-time dispatch tracking',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src="/images/about-tanker.jpg"
                  alt="Bulk Industrial Oil Tanker Fleet"
                  className="w-full h-[220px] sm:h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pan-India Tanker Dispatch</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Rounded Light-Gray Infrastructure Box (Inspired by Shaikh Petro #F2F2F2 Container) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="bg-slate-200/60 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white group">
                  <img
                    src="/images/hero-refinery-2.jpg"
                    alt="Storage Terminal and Dual Hub Network"
                    className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ahmedabad &amp; Indore Hubs</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
                  <FlaskConical className="w-4 h-4" />
                  <span>Quality &amp; Infrastructure</span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  Verified Specs &amp; Dual-City Reach
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Supported by registered operations in Indore (MP) and our branch office in Ahmedabad (Gujarat), every batch undergoes lab parameter checks for flash point, viscosity, density, and sulphur content.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    'BIS & ASTM Lab Parameter Verified',
                    'Strict Contamination Prevention',
                    'Ahmedabad Industrial Corridor Access',
                    'Dedicated Procurement Assistance',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. LONG-TERM PARTNERSHIP PILLARS & MISSION / VISION */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
          {/* Mission & Vision Bento */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">
                Purpose &amp; Direction
              </div>
              <h2
                className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Our Mission &amp; Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/90 group hover:border-amber-300 transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Simplifying petroleum procurement with dependable supply, professional service, and certified quality that keeps industrial plants running smoothly.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#0B1120] rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 group hover:border-amber-500/50 transition-all duration-300 text-white flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-extrabold mb-2.5"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  To be India&apos;s most trusted petroleum distributor, recognized for regulatory integrity, product consistency, and long-term industrial partnerships.
                </p>
              </motion.div>
            </div>
          </div>

          {/* 3 Partnership Pillars */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3
                className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Building Long-Term Partnerships
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {partnershipPillars.map((pillar, idx) => {
                const PIcon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)] transition-all text-center flex flex-col items-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${pillar.color}`}
                    >
                      <PIcon className="w-6 h-6" />
                    </div>
                    <h4
                      className="text-base sm:text-lg font-extrabold text-slate-900 mb-2"
                      style={{ fontFamily: 'var(--font-sora)' }}
                    >
                      {pillar.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE STRENGTHS GRID (3D Hover Tilt Physics) */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">
              Why M. Engle
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Operational Strengths
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Foundational pillars enabling reliable industrial fulfillment at scale.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            style={{ perspective: 1200 }}
          >
            {COMPANY_INFO.coreStrengths.map((strength, i) => {
              const Icon = icons[i % icons.length];
              const iconColors = [
                'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-200',
                'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200',
                'bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-100 group-hover:border-purple-200',
                'bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-100 group-hover:border-rose-200',
                'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100 group-hover:border-amber-200',
              ];
              const colorClass = iconColors[i % iconColors.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 4,
                    rotateY: -4,
                    z: 20,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-200/80 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-slate-300 group cursor-pointer relative z-10 hover:z-20 flex items-start gap-4 transition-colors"
                >
                  <div
                    style={{ transform: 'translateZ(40px)' }}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-colors ${colorClass}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div style={{ transform: 'translateZ(20px)' }} className="pt-0.5">
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 mb-1 leading-tight group-hover:text-slate-700 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="py-14 sm:py-20 bg-slate-950 relative overflow-hidden border-t border-slate-800">
        <img
          src="/images/hero-refinery-2.jpg"
          alt="Refinery Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Ready to secure your supply chain?
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg mb-7 max-w-2xl mx-auto">
            Partner with M. Engle Petrochemicals today for lab-certified products, transparent pricing, and pan-India delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-amber-500 text-sm sm:text-base hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Request a Quote
            </Link>
            <Link
              href="/price-list"
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-slate-900/90 text-sm sm:text-base hover:bg-slate-800 text-white font-bold rounded-xl transition-all border border-slate-700"
            >
              View Live Price List
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
