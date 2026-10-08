'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, FileDown, ShieldCheck, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onOpenQuote?: () => void;
}

const categories = [
  { name: "Black Oils", href: "#products-black-oils", desc: "LDO, Furnace Oil, Fuel Oil, LSHS, Pyrolysis" },
  { name: "White Oils", href: "#products-white-oils", desc: "Light Liquid Paraffin (LLP), Quenching Oil" },
  { name: "Base Oils", href: "#products-base-oils", desc: "SN-150, SN-500, N-150, LUB-32, LUB-100" },
  { name: "Petroleum Solvents", href: "#products-solvents", desc: "MTO, Naphtha, C9, C9 Plus, C10" },
  { name: "Aromatic Petrochemicals", href: "#products-aromatics", desc: "Benzene C6H6, Toluene, Crude Benzol" },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'w-full relative z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.08)] border-b border-neutral-200/70'
          : 'bg-white border-b border-neutral-200/50'
      )}
    >
      {/* ── Top Utility Bar ── */}
      <div className={cn("bg-[#0B1120] text-slate-400 text-[11px] px-4 sm:px-8 overflow-hidden transition-all duration-300", scrolled ? "h-0 py-0 opacity-0 border-transparent" : "h-auto py-2 border-b border-slate-800/60 opacity-100")}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-5">
            
            <span className="hidden md:flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3 h-3 text-amber-500/70" />
              Ahmedabad & Indore Depots
            </span>
          </div>
          <div className="flex items-center gap-5 ml-auto">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white flex items-center gap-1.5 transition-colors font-medium">
              <Phone className="w-3 h-3 text-amber-500" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden sm:flex hover:text-white items-center gap-1.5 transition-colors">
              <Mail className="w-3 h-3 text-amber-500" />
              {COMPANY_INFO.email}
            </a>
            <a
              href="/brochure.pdf"
              download="M_Engle_Petrochemicals_Brochure.pdf"
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-md text-[10px] tracking-wider uppercase transition-all"
            >
              <FileDown className="w-3 h-3" />
              Brochure
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav className={cn("max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-300", scrolled ? "min-h-[60px] py-2" : "min-h-[80px] md:min-h-[96px] py-4")}>

        {/* Brand */}
        <Link href="/" className="flex items-center group shrink-0">
            <img src="/images/logo.png" alt="M Engle Logo" className={cn("w-auto object-contain group-hover:opacity-90 transition-all duration-300 mix-blend-multiply", scrolled ? "h-10 md:h-12 max-w-[160px]" : "h-14 md:h-16 max-w-[200px] md:max-w-[250px]")} />
          </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-600"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <a href="/about" className="hover:text-slate-900 transition-colors">About</a>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-slate-900 transition-colors py-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Products & Specs
              <ChevronDown className={cn(
                "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                dropdownOpen && "rotate-180"
              )} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 w-[300px] bg-white rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_32px_-4px_rgba(0,0,0,0.12)] p-2 z-50 border border-neutral-100 mt-1"
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 py-2 border-b border-slate-100 mb-1">
                    5 Product Categories
                  </div>
                  {categories.map((cat) => (
                    <a
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-amber-600 text-sm transition-colors">
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">{cat.desc}</span>
                    </a>
                  ))}
                  <div className="mt-1 pt-2 border-t border-slate-100 px-3">
                    <a href="#products" className="text-[11px] font-bold text-amber-600 hover:text-amber-700 flex items-center justify-between">
                      View All 17 Products with Lab Specs →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/compliance" className="hover:text-slate-900 transition-colors">Compliance</a>
          <Link href="/price-list" className="hover:text-slate-900 transition-colors font-semibold text-amber-600">Price List</Link>
          
          <a href="/contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
              href="/contact"
              className="bg-[#0B1120] hover:bg-slate-800 text-white text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer tracking-tight"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Request Quote
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            <div className="px-5 py-6 space-y-4">
              {['/', '/about', '/compliance', '/price-list', '/contact'].map((href, i) => {
                const labels = ['Home', 'About Us', 'Compliance & Licenses', 'Live Price List', 'Contact'];
                return (
                  <Link
                    key={i}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[15px] font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {labels[i]}
                  </Link>
                );
              })}

              <div className="pt-1 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Product Categories</div>
                {categories.map((cat) => (
                  <a
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-slate-600 hover:text-amber-600 py-1.5 font-medium"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full bg-[#0B1120] text-white font-bold py-3 rounded-xl text-center text-sm cursor-pointer block"
                  >
                    Request Quote
                  </Link>
                <a
                  href="/brochure.pdf"
                  download="M_Engle_Petrochemicals_Brochure.pdf"
                  className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download Brochure PDF
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
