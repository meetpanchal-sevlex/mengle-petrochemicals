'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import QuoteModal from '@/components/QuoteModal';
import FloatingActions from '@/components/FloatingActions';
import { COMPANY_INFO, PRODUCTS } from '@/data/companyData';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  FileDown, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Truck, 
  Flame, 
  Clock,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const categories = ['All', 'Black Oils', 'White Oils', 'Base Oils', 'Solvents', 'Aromatic Petrochemicals'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName || PRODUCTS[0].name);
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800">
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
                    POWERING INDUSTRY. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                      DELIVERING PERFORMANCE.
                    </span>
                  </h1>
                  <p
                    className="text-lg sm:text-xl text-slate-300 font-semibold tracking-tight"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Industrial Oil & Chemical Solutions
                  </p>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  {COMPANY_INFO.description} Trusted partner for high-grade industrial fuels, base oils, specialty solvents, and aromatic hydrocarbons with consistent specs and prompt logistics.
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
                    onClick={() => handleOpenQuote()}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-lg hover:shadow-amber-500/20 transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="/brochure.pdf"
                    download="M_Engle_Petrochemicals_Brochure.pdf"
                    className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 border border-slate-700 transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-amber-400" />
                    <span>Download Brochure PDF</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white font-medium px-2 py-3.5"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
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

        {/* CREDENTIALS & PILLARS STRIP */}
        <section id="credentials" className="bg-amber-500 text-slate-950 py-6 px-4 sm:px-8 shadow-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <Award className="w-6 h-6 mb-1 text-slate-950" />
              <div className="text-sm font-extrabold tracking-tight uppercase">GOVT. AUTHORIZED</div>
              <div className="text-xs font-semibold text-slate-900">Licensed Petroleum Supplier</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <CheckCircle2 className="w-6 h-6 mb-1 text-slate-950" />
              <div className="text-sm font-extrabold tracking-tight uppercase">QUALITY ASSURED</div>
              <div className="text-xs font-semibold text-slate-900">Lab Tested Specifications</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <ShieldCheck className="w-6 h-6 mb-1 text-slate-950" />
              <div className="text-sm font-extrabold tracking-tight uppercase">INDUSTRY TRUSTED</div>
              <div className="text-xs font-semibold text-slate-900">Complete Statutory Registrations</div>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <Flame className="w-6 h-6 mb-1 text-slate-950" />
              <div className="text-sm font-extrabold tracking-tight uppercase">PERFORMANCE DRIVEN</div>
              <div className="text-xs font-semibold text-slate-900">Consistent Calorific Value</div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section id="about" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                    Introduction
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
                    style={{ fontFamily: 'var(--font-sora)' }}>
                    Driving Business Through Reliable Petroleum Solutions
                  </h2>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  M Engle Petroleum is a professionally managed petroleum company focused on the distribution and supply of petroleum products and allied industrial solutions. We are committed to serving businesses with dependable products, consistent supply, and professional service, while maintaining a strong emphasis on statutory compliance and responsible operations.
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
        <section id="products" className="py-20 bg-slate-100/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                  Comprehensive Portfolio
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
                  style={{ fontFamily: 'var(--font-sora)' }}>
                  Industrial Products & Lab Specifications
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                  Explore our complete range of certified industrial fuels, white oils, base stocks, solvents, and aromatics with verifiable lab test parameters.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-72 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Search products or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? PRODUCTS.length 
                  : PRODUCTS.filter(p => p.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onOpenQuote={(name) => handleOpenQuote(name)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  No products found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-3 text-xs font-bold text-amber-600 hover:underline"
                >
                  Clear filters & view all products
                </button>
              </div>
            )}
          </div>
        </section>

        {/* DUAL DEPOTS & STRATEGIC LOCATIONS */}
        <section id="offices" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Strategic Presence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dual-Hub Network in Gujarat & Madhya Pradesh
              </h2>
              <p className="text-slate-600 text-sm">
                Positioned close to key industrial corridors for rapid fuel and solvent logistics across western and central India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ahmedabad Branch */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                      Branch Office • Gujarat
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Ahmedabad Hub</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Ahmedabad Office
                  </h3>

                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      A622, Moneyplant Highstreet, Jagatpur Road, Sarkhej-Gandhinagar Highway, Nr. BSNL Office, Ahmedabad – 382470 (GUJARAT - INDIA)
                    </p>
                  </div>

                  <div className="pt-2 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>Dispatch Operations: Mon - Sat (9:00 AM - 7:00 PM)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs text-center transition-colors"
                  >
                    Call Ahmedabad Office
                  </a>
                  <a
                    href="https://maps.google.com/?q=Moneyplant+Highstreet+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Indore Registered Office */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                      Registered Office • Headquarters
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Madhya Pradesh Hub</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Indore Registered Office
                  </h3>

                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      B-102 Samarth Park Behind Dmart Mhow, Indore – 453441 (MADHYA PRADESH - INDIA)
                    </p>
                  </div>

                  <div className="pt-2 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>Administration & Commercial: Mon - Sat</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-6 flex items-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs text-center transition-colors"
                  >
                    Call Indore Office
                  </a>
                  <a
                    href="https://maps.google.com/?q=Samarth+Park+Mhow+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & RFQ SECTION */}
        <section id="contact" className="py-20 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Direct Inquiries & Pricing
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to Source Industrial Fuel & Chemicals?
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Connect with our commercial sales desk for instant pricing, test certificates, bulk tanker availability, and supply agreements.
                </p>

                <div className="space-y-4 pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Helpline & WhatsApp</div>
                      <div className="text-base font-bold text-white">{COMPANY_INFO.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Sales & Inquiries</div>
                      <div className="text-base font-bold text-white">{COMPANY_INFO.email}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick RFQ Box */}
              <div className="lg:col-span-6">
                <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl space-y-5">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      Instant Quote Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your requirements for an immediate response on WhatsApp or email.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => handleOpenQuote()}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>Open Quote Generator</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="/brochure.pdf"
                      download="M_Engle_Petrochemicals_Brochure.pdf"
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <FileDown className="w-4 h-4 text-slate-600" />
                      <span>Download Full Specifications PDF</span>
                    </a>
                  </div>

                  <div className="pt-2 text-[11px] text-center text-slate-400 border-t border-slate-100">
                    PESO Authorization: A/P/CB/MP/16/167 (P550509) • Udyam: UDYAM-MP-23-0058639
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA buttons */}
      <FloatingActions />

      {/* Quote RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}
