import React from 'react';
import Link from 'next/link';
import { Phone, Mail, FileDown } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Brand Column */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-base shadow-md shrink-0">
              M
            </div>
            <div>
              <div className="text-[15px] font-bold text-white tracking-tight">
                M. ENGLE PETROCHEMICALS
              </div>
              <div className="text-[10px] text-amber-500 font-medium">
                Industrial Oil & Chemical Solutions
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-2 text-[12px] text-slate-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-[12px] text-slate-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a href="/brochure.pdf" download="M_Engle_Petrochemicals_Brochure.pdf" className="inline-flex items-center gap-2 text-[12px] text-amber-400 hover:text-amber-300 font-medium mt-0">
              <FileDown className="w-4 h-4 shrink-0" />
              <span>Download Official Product PDF Brochure</span>
            </a>
          </div>
        </div>

        {/* Depots & Offices */}
        <div className="space-y-2.5">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Office Locations
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <div className="text-xs font-bold text-slate-200">Ahmedabad (Branch)</div>
              <div className="text-[11px] text-slate-400 leading-snug max-w-sm">
                A622, Moneyplant Highstreet, Jagatpur Rd, Ahmedabad - 382470
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-200">Indore (HQ)</div>
              <div className="text-[11px] text-slate-400 leading-snug max-w-sm">
                B-102 Samarth Park, Behind Dmart Mhow, Indore - 453441
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-3 px-4 sm:px-8 text-[10px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            &copy; 2026 {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>PESO: A/P/CB/MP/16/167</span>
            <span>GSTIN: 23AAPPE4185R1ZD</span>
            <span>Udyam: UDYAM-MP-23-0058639</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
