'use client';

import React, { useEffect } from 'react';
import { ArrowDownToLine, TrendingUp, Info } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

// Simulated pricing data (Structured exactly like competitor but with premium UI)
const BLACK_OILS = [
  { name: 'Furnace Oil (FO)', basic: 83.00, gst: 18, unit: 'KGS' },
  { name: 'Light Diesel Oil (LDO)', basic: 97.00, gst: 18, unit: 'LTR' },
  { name: 'Fuel Oil', basic: 62.00, gst: 18, unit: 'LTR' },
  { name: 'LSHS', basic: 83.00, gst: 18, unit: 'KGS' },
  { name: 'Pyrolysis Oil', basic: 75.00, gst: 18, unit: 'KGS' },
];

const WHITE_OILS = [
  { name: 'MTO / White Spirit', basic: 118.00, gst: 18, unit: 'LTR' },
  { name: 'C9 Solvent', basic: 95.00, gst: 18, unit: 'KGS' },
  { name: 'C9 White', basic: 128.00, gst: 18, unit: 'KGS' },
  { name: 'C10 Solvent', basic: 128.00, gst: 18, unit: 'KGS' },
  { name: 'LLP Oil', basic: 97.00, gst: 18, unit: 'KGS' },
];

function calculateTotal(basic: number, gstRate: number) {
  const cgst = Number((basic * (gstRate / 2) / 100).toFixed(2));
  const sgst = Number((basic * (gstRate / 2) / 100).toFixed(2));
  const total = Number((basic + cgst + sgst).toFixed(2));
  return { basic, cgst, sgst, total };
}

export default function PriceListPage() {
  // Inject TradingView Widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).TradingView) {
        // WTI Crude Oil
        new (window as any).TradingView.widget({
          "autosize": true,
          "symbol": "TVC:USOIL",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(240, 243, 250, 0)",
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": false,
          "container_id": "tradingview_wti"
        });

        // Brent Crude Oil
        new (window as any).TradingView.widget({
          "autosize": true,
          "symbol": "TVC:UKOIL",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(240, 243, 250, 0)",
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": false,
          "container_id": "tradingview_brent"
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pt-[104px] pb-20">
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Live Markets & Price List
          </h1>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Stay updated with global crude fluctuations and our current wholesale petroleum prices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 space-y-16">
        
        {/* Live Stock Widget Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Live Crude Oil Markets</h2>
              <p className="text-xs text-slate-500">WTI & Brent Crude (USD/BBL) - Real-time Data</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-[450px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-2">
              <div id="tradingview_wti" className="w-full h-full"></div>
            </div>
            <div className="w-full h-[450px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-2">
              <div id="tradingview_brent" className="w-full h-full"></div>
            </div>
          </div>
        </section>

        {/* Pricing Tables Section */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Info className="w-3.5 h-3.5" /> Effective: Oct 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Current Wholesale Pricing</h2>
            <p className="text-slate-500 mt-2 text-sm">Prices are subject to change without prior notice based on global crude market variations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Black Oils Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-slate-900 p-5 text-white">
                <h3 className="text-lg font-bold">Black Oils & Heavy Fuels</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="text-xs uppercase bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4">Product</th>
                      <th className="px-4 py-4 text-right">Basic (₹)</th>
                      <th className="px-4 py-4 text-right">CGST (9%)</th>
                      <th className="px-4 py-4 text-right">SGST (9%)</th>
                      <th className="px-6 py-4 text-right bg-slate-100 text-slate-900">Total (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {BLACK_OILS.map((item, idx) => {
                      const calc = calculateTotal(item.basic, item.gst);
                      return (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">
                            {item.name} <span className="text-[10px] text-slate-400 font-normal ml-1">/ {item.unit}</span>
                          </td>
                          <td className="px-4 py-4 text-right">{calc.basic.toFixed(2)}</td>
                          <td className="px-4 py-4 text-right">{calc.cgst.toFixed(2)}</td>
                          <td className="px-4 py-4 text-right">{calc.sgst.toFixed(2)}</td>
                          <td className="px-6 py-4 text-right font-bold text-slate-900 bg-slate-50">
                            {calc.total.toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* White Oils Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-amber-500 p-5 text-slate-900">
                <h3 className="text-lg font-bold">White Oils & Solvents</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="text-xs uppercase bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4">Product</th>
                      <th className="px-4 py-4 text-right">Basic (₹)</th>
                      <th className="px-4 py-4 text-right">CGST (9%)</th>
                      <th className="px-4 py-4 text-right">SGST (9%)</th>
                      <th className="px-6 py-4 text-right bg-slate-100 text-slate-900">Total (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {WHITE_OILS.map((item, idx) => {
                      const calc = calculateTotal(item.basic, item.gst);
                      return (
                        <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">
                            {item.name} <span className="text-[10px] text-slate-400 font-normal ml-1">/ {item.unit}</span>
                          </td>
                          <td className="px-4 py-4 text-right">{calc.basic.toFixed(2)}</td>
                          <td className="px-4 py-4 text-right">{calc.cgst.toFixed(2)}</td>
                          <td className="px-4 py-4 text-right">{calc.sgst.toFixed(2)}</td>
                          <td className="px-6 py-4 text-right font-bold text-slate-900 bg-amber-50/50">
                            {calc.total.toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi, I would like to inquire about current petroleum prices and place a bulk order.`} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2">
              <ArrowDownToLine className="w-5 h-5" />
              Request Official Quotation
            </a>
          </div>

        </section>
      </div>
    </main>
  );
}
