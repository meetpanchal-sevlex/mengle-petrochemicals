import React from 'react';
import { ArrowDownToLine, TrendingUp, Info } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import Papa from 'papaparse';
import { TradingViewCharts } from '@/components/TradingViewCharts';

// ============================================================================
// Google Sheets Integration (Auto-Updating Prices via Native Next.js Server Fetch)
// ============================================================================
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDPCHWI7Rg2dBe9p9Sf-DZX02CdEZ-L6BWlb9pkSJN8l6jxJUEgC3vtabWOe_zScumaxy7iKOiOJZ6/pub?output=csv";

// Next.js config to force server-side dynamic rendering (or cache heavily)
// (Dynamic rendering) // Cache on Edge CDN for 60 seconds

async function fetchGoogleSheetPrices() {
  try {
    const res = await fetch(GOOGLE_SHEET_CSV_URL, {
      next: { revalidate: 60 } // Revalidate every 60 seconds natively
    });
    const csvText = await res.text();
    
    return new Promise<{ parsedBlack: any[], parsedWhite: any[] }>((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedBlack: any[] = [];
          const parsedWhite: any[] = [];
          
          results.data.forEach((row: any) => {
            if (!row.Category || !row.Product || !row.BasicPrice) return;
            
            const item = {
              name: row.Product.trim(),
              basic: parseFloat(row.BasicPrice) || 0,
              gstRate: parseFloat(row.GST) || 18,
              unit: row.Unit?.trim() || 'Ltr',
            };

            if (row.Category.trim().toUpperCase() === 'BLACK') {
              parsedBlack.push(item);
            } else if (row.Category.trim().toUpperCase() === 'WHITE') {
              parsedWhite.push(item);
            }
          });
          resolve({ parsedBlack, parsedWhite });
        }
      });
    });
  } catch (error) {
    console.error('Server failed to fetch Google Sheets:', error);
    return { parsedBlack: [], parsedWhite: [] };
  }
}

export default async function PriceListPage() {
  const { parsedBlack, parsedWhite } = await fetchGoogleSheetPrices();
  
  // Format dates securely on the server
  const currentMonth = "Active Trading Period";
  

  return (
    <main className="min-h-screen pt-20 bg-slate-50">
      {/* Hero Section */}
      <section className="bg-[#0B1120] text-white pt-16 pb-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Official Rate Card
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
                Bulk Pricing & Indices
              </h1>
              <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
                Live ex-depot basic rates for wholesale industrial commodities. Rates are updated daily and subject to standard GST and transport actuals.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800 shadow-xl backdrop-blur-md">
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Effective Period</div>
                <div className="text-white font-bold">{currentMonth}</div>
              </div>
              <div className="w-px h-8 bg-slate-700 mx-2"></div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Last Sync</div>
                <div className="text-emerald-400 font-bold text-xs flex items-center gap-1">
                  Server Pre-Rendered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-10 relative z-20 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Pricing Tables (Server Fetched!) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Black Oils Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                Black Oils (Furnace / LDO)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <th className="py-4 px-6">Product Grade</th>
                    <th className="py-4 px-6 text-right">Basic Price</th>
                    <th className="py-4 px-6 text-right">GST</th>
                    <th className="py-4 px-6 text-right">Total Estimated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {parsedBlack.length === 0 ? (
                    <tr><td colSpan={4} className="py-8 text-center text-slate-400">Failed to fetch Black Oils.</td></tr>
                  ) : (
                    parsedBlack.map((item, idx) => {
                      const gstAmount = item.basic * (item.gstRate / 100);
                      const total = item.basic + gstAmount;
                      return (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                          <td className="py-4 px-6 font-bold text-slate-900">{item.name}</td>
                          <td className="py-4 px-6 text-right font-mono text-sm"><span className="font-bold">{item.basic.toFixed(2)}</span><span className="text-[10px] text-slate-400 ml-1">/{item.unit}</span></td>
                          <td className="py-4 px-6 text-right text-slate-500 text-sm">{item.gstRate}%</td>
                          <td className="py-4 px-6 text-right font-mono text-sm text-amber-700 font-bold">{total.toFixed(2)}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* White Oils Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                White Oils & Solvents (MTO / C9)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <th className="py-4 px-6">Product Grade</th>
                    <th className="py-4 px-6 text-right">Basic Price</th>
                    <th className="py-4 px-6 text-right">GST</th>
                    <th className="py-4 px-6 text-right">Total Estimated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {parsedWhite.length === 0 ? (
                    <tr><td colSpan={4} className="py-8 text-center text-slate-400">Failed to fetch White Oils.</td></tr>
                  ) : (
                    parsedWhite.map((item, idx) => {
                      const gstAmount = item.basic * (item.gstRate / 100);
                      const total = item.basic + gstAmount;
                      return (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                          <td className="py-4 px-6 font-bold text-slate-900">{item.name}</td>
                          <td className="py-4 px-6 text-right font-mono text-sm"><span className="font-bold">{item.basic.toFixed(2)}</span><span className="text-[10px] text-slate-400 ml-1">/{item.unit}</span></td>
                          <td className="py-4 px-6 text-right text-slate-500 text-sm">{item.gstRate}%</td>
                          <td className="py-4 px-6 text-right font-mono text-sm text-amber-700 font-bold">{total.toFixed(2)}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex gap-3 text-amber-800 text-xs leading-relaxed shadow-inner">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
            <p>
              <strong>Commercial Disclaimer:</strong> Rates mentioned above are strictly for Bulk Loads ex-depot. Transport charges, state-specific tolls, and loading un-loading charges will be added at actuals. Final billing will be governed by the rate applicable at the time of tanker dispatch, regardless of advance payment date.
            </p>
          </div>
        </div>

        {/* Right Column: Isolated Client-Side Interactive Widgets */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0B1120] rounded-2xl p-6 shadow-xl border border-slate-800 text-white">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              Live Market Indices
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Global energy markets dictate localized depot pricing. Monitor real-time WTI and Brent Crude fluctuations below.
            </p>
            {/* The isolated client component for injection scripts */}
            <TradingViewCharts />
          </div>
        </div>
      </section>
    </main>
  );
}
