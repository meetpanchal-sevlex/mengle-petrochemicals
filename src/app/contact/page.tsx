
import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { ArrowRight, FileDown, Award, CheckCircle2, ShieldCheck, Flame, Truck, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section id="contact" className="py-10 lg:py-20 bg-slate-900 text-white relative">
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
                    <p className="text-[11px] lg:text-xs text-slate-500 mt-1 leading-relaxed">
                      Fill out your requirements for an immediate response on WhatsApp or email.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a href="/contact"
                      
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <span>Open Quote Generator</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

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
  );
}
