'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import QuoteModal from '@/components/QuoteModal';
import ProductModal from '@/components/ProductModal';
import FloatingActions from '@/components/FloatingActions';
import { COMPANY_INFO, PRODUCTS, Product } from '@/data/companyData';
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

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

  const handleOpenProduct = (prod: typeof PRODUCTS[0]) => {
    setSelectedProduct(prod);
    setIsProductModalOpen(true);
  };

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
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-12 lg:py-28 border-b border-slate-800">
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
                  className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl"
                  style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                >
                  Delivering lab-tested industrial fuels, base oils, and specialty solvents with uncompromising consistency and pan-India logistics.
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
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                {filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onClick={() => handleOpenProduct(prod)}
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
                </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA buttons */}
      <FloatingActions />

      {/* Product Detail Modal */}
        <ProductModal 
          isOpen={isProductModalOpen}
          onClose={() => setIsProductModalOpen(false)}
          product={selectedProduct}
          onOpenQuote={handleOpenQuote}
        />

        {/* Quote RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}
