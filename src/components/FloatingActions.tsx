'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello M. Engle Petrochemicals team, I would like to inquire about industrial oil & petroleum products.'
  )}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-3 items-end">
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
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white w-12 h-12 sm:w-auto sm:h-auto sm:pl-3.5 sm:pr-5 sm:py-3 justify-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden sm:flex relative h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <WhatsAppIcon className="w-6 h-6 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline text-sm font-bold tracking-tight">Quick WhatsApp Quote</span>
      </a>
    </div>
  );
}
