'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello M. Engle Petrochemicals team, I would like to inquire about industrial oil & petroleum products.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Phone Call (Mobile quick action) */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 hover:text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 border border-slate-700 sm:hidden"
        aria-label="Call M Engle Petrochemicals"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white w-12 h-12 sm:w-auto sm:h-auto sm:pl-4 sm:pr-5 sm:py-3 justify-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden sm:flex relative h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-sm font-bold tracking-tight">Quick WhatsApp Quote</span>
      </a>
    </div>
  );
}
