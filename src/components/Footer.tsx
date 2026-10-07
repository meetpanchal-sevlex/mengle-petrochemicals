import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, FileDown, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top Credentials Banner */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {COMPANY_INFO.credentials.map((cred, i) => (
            <div key={i} className="flex items-start gap-3.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">{cred.title}</div>
                <div className="text-sm font-bold text-white tracking-wide">{cred.value}</div>
                <div className="text-[11px] text-slate-500">{cred.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Links & Depots */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
              M
            </div>
            <div>
              <div className="text-lg font-bold text-white tracking-tight">
                M. ENGLE PETROCHEMICALS
              </div>
              <div className="text-xs text-amber-500 font-medium">
                Industrial Oil & Chemical Solutions
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Distributor and supplier of high-grade petroleum products, industrial fuels, base oils, specialty solvents, and aromatic hydrocarbons across India.
          </p>
          <div className="pt-2 flex flex-col gap-2.5">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a 
              href="/brochure.pdf"
              download="M_Engle_Petrochemicals_Brochure.pdf"
              className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium pt-1"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Product PDF Brochure</span>
            </a>
          </div>
        </div>

        {/* Product Categories */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Product Portfolio
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#products-black-oils" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                <span>Black Oils (LDO, FO, LSHS)</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="#products-white-oils" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                <span>White Oils (LLP, Quenching)</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="#products-base-oils" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                <span>Virgin & Recycled Base Oils</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="#products-solvents" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                <span>Hydrocarbon Solvents (MTO, C9, C10)</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
            <li>
              <a href="#products-aromatics" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                <span>Aromatics (Benzene, Toluene)</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Depots & Offices */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Depots & Office Locations
          </div>

          <div className="space-y-4 text-xs">
            {/* Ahmedabad */}
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  Branch Office (Ahmedabad)
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300">
                  Gujarat
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                A622, Moneyplant Highstreet, Jagatpur Road, Sarkhej-Gandhinagar Highway, Nr. BSNL Office, Ahmedabad – 382470
              </p>
            </div>

            {/* Indore */}
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  Registered Office (Indore)
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-900/60 text-amber-300">
                  Headquarters
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                B-102 Samarth Park Behind Dmart Mhow, Indore – 453441 (Madhya Pradesh)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2026 {COMPANY_INFO.name} ({COMPANY_INFO.tradeName}). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>PESO: A/P/CB/MP/16/167</span>
            <span>GSTIN: 23AAPPE4185R1ZD</span>
            <span>Udyam: UDYAM-MP-23-0058639</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
