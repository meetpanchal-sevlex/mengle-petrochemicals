import React from 'react';
import { TrendingUp, Info, ArrowRight, ChevronRight, Layers } from 'lucide-react';
import Papa from 'papaparse';
import Link from 'next/link';
import { TradingViewCharts } from '@/components/TradingViewCharts';

// ============================================================================
// Google Sheets Integration (Auto-Updating Prices via Native Next.js Server Fetch)
// ============================================================================
const GOOGLE_SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDPCHWI7Rg2dBe9p9Sf-DZX02CdEZ-L6BWlb9pkSJN8l6jxJUEgC3vtabWOe_zScumaxy7iKOiOJZ6/pub?output=csv';

interface PriceItem {
  name: string;
  basic: number;
  gstRate: number;
  unit: string;
}

async function fetchGoogleSheetPrices() {
  try {
    const res = await fetch(GOOGLE_SHEET_CSV_URL, {
      next: { revalidate: 60 },
    });
    const csvText = await res.text();

    return new Promise<{ parsedBlack: PriceItem[]; parsedWhite: PriceItem[] }>((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedBlack: PriceItem[] = [];
          const parsedWhite: PriceItem[] = [];

          results.data.forEach((row: any) => {
            if (!row.Category || !row.Product || !row.BasicPrice) return;

            const item: PriceItem = {
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
        },
      });
    });
  } catch (error) {
    console.error('Server failed to fetch Google Sheets:', error);
    return { parsedBlack: [], parsedWhite: [] };
  }
}

function PriceTable({
  title,
  accentColor,
  items,
  emptyLabel,
}: {
  title: string;
  accentColor: string;
  items: PriceItem[];
  emptyLabel: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-300/80 overflow-hidden">
      <div className="bg-[#0B1120] px-4 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-slate-800">
        <h2
          className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2.5"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          <span className={`w-2.5 h-2.5 rounded-full ${accentColor}`} />
          <span>{title}</span>
        </h2>
        <span className="text-[11px] font-bold text-slate-300 bg-slate-800/90 border border-slate-700 px-2.5 py-0.5 rounded-full">
          {items.length} Grades
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-wider text-slate-600 font-bold">
              <th className="py-2.5 px-3 sm:py-3.5 sm:px-6">Product Grade</th>
              <th className="py-2.5 px-2.5 sm:py-3.5 sm:px-6 text-right">Basic Price</th>
              <th className="py-2.5 px-2 sm:py-3.5 sm:px-6 text-right">GST</th>
              <th className="py-2.5 px-3 sm:py-3.5 sm:px-6 text-right">Total Est.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80">
            {items.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-slate-400 text-sm">
                  {emptyLabel}
                </td>
              </tr>
            ) : (
              items.map((item, idx) => {
                const gstAmount = item.basic * (item.gstRate / 100);
                const total = item.basic + gstAmount;
                return (
                  <tr
                    key={idx}
                    className="even:bg-slate-50/70 hover:bg-amber-50/50 transition-colors"
                  >
                    <td className="py-3 px-3 sm:py-4 sm:px-6 font-bold text-slate-900 text-xs sm:text-[15px] leading-tight">
                      {item.name}
                    </td>
                    <td
                      className="py-3 px-2.5 sm:py-4 sm:px-6 text-right text-xs sm:text-sm whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      <span className="font-bold text-slate-900">
                        ₹{item.basic.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-slate-500 ml-1">
                        /{item.unit}
                      </span>
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-6 text-right text-slate-600 text-[11px] sm:text-sm whitespace-nowrap">
                      <span>{item.gstRate}%</span>
                      <span className="hidden md:inline text-xs text-slate-400 ml-1.5">
                        (₹{gstAmount.toFixed(2)})
                      </span>
                    </td>
                    <td
                      className="py-3 px-3 sm:py-4 sm:px-6 text-right text-xs sm:text-[15px] text-amber-700 font-extrabold whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                    >
                      ₹{total.toFixed(2)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default async function PriceListPage() {
  const { parsedBlack, parsedWhite } = await fetchGoogleSheetPrices();

  return (
    <main className="min-h-screen bg-slate-200/60 overflow-x-hidden">
      {/* 1. CLEAN PHOTOGRAPHIC HERO BANNER */}
      <section className="relative bg-slate-950 text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800 overflow-hidden">
        <img
          src="/images/hero-refinery-2.jpg"
          alt="Bulk Petroleum Pricing and Market Terminal"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(2, 6, 23, 0.78) 0%, rgba(2, 6, 23, 0.70) 50%, rgba(2, 6, 23, 0.94) 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-300">
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-amber-400">Price List</span>
              </div>

              <h1
                className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Bulk Pricing &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  Market Indices
                </span>
              </h1>
              <p className="text-slate-300 max-w-2xl text-xs sm:text-base leading-relaxed">
                Live ex-depot basic rates for wholesale industrial petroleum and chemical grades, paired with real-time global crude benchmarks.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/90 px-4 py-3 sm:p-4 rounded-xl border border-slate-700/80 shadow-lg backdrop-blur-md shrink-0 self-start md:self-auto">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">
                  Status
                </div>
                <div className="text-white font-bold text-xs sm:text-sm">
                  Active Trading Period
                </div>
              </div>
              <div className="w-px h-7 bg-slate-700" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-0.5">
                  Sync
                </div>
                <div className="text-emerald-400 font-bold text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sheet Sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH RATE CARDS (Clean Hierarchy Below Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Ex-Depot Wholesale Rate Card (INR)</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
          >
            <span>Need Tanker Delivery Quote?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-6">
          <PriceTable
            title="Black Oils (Furnace Oil / LDO / LSHS)"
            accentColor="bg-amber-500"
            items={parsedBlack}
            emptyLabel="Unable to load Black Oils pricing right now."
          />

          <PriceTable
            title="White Oils & Solvents (MTO / C9 / C10)"
            accentColor="bg-sky-400"
            items={parsedWhite}
            emptyLabel="Unable to load White Oils & Solvents pricing right now."
          />
        </div>

        {/* Commercial Disclaimer + CTA */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex gap-3 text-amber-900 text-xs leading-relaxed">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
            <p>
              <strong>Commercial Terms:</strong> Rates above are strictly for Bulk Loads ex-depot. Transport charges, tolls, and loading/unloading charges apply at actuals. Final billing is governed by the rate applicable on the date of dispatch.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#0B1120] hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs whitespace-nowrap flex items-center justify-center gap-1.5 shrink-0 transition-colors"
          >
            <span>Lock Today&apos;s Rate</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
        </div>

        {/* 3. FULL-WIDTH SIDE-BY-SIDE LIVE MARKET INDICES */}
        <div className="bg-[#0B1120] rounded-2xl p-5 sm:p-8 shadow-xl border border-slate-800 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-slate-800 pb-4">
            <div>
              <h3
                className="text-lg sm:text-xl font-extrabold flex items-center gap-2"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                <TrendingUp className="w-5 h-5 text-amber-500" />
                <span>Live Crude Market Indices</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Real-time WTI &amp; Brent Crude Oil benchmarks driving regional petroleum pricing.
              </p>
            </div>
          </div>

          <TradingViewCharts />
        </div>
      </section>
    </main>
  );
}
