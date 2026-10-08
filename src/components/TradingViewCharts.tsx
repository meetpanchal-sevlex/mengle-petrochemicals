'use client';

import React, { useEffect, useRef } from 'react';

export function TradingViewCharts() {
  const chart1Ref = useRef<HTMLDivElement>(null);
  const chart2Ref = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Chart 1 (WTI Crude)
    if (chart1Ref.current && chart1Ref.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "TVC:USOIL",
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "dateRange": "1M",
        "colorTheme": "dark",
        "trendLineColor": "rgba(245, 158, 11, 1)",
        "underLineColor": "rgba(245, 158, 11, 0.15)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      });
      chart1Ref.current.appendChild(script);
    }

    // Inject Chart 2 (Brent Crude)
    if (chart2Ref.current && chart2Ref.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "TVC:UKOIL",
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "dateRange": "1M",
        "colorTheme": "dark",
        "trendLineColor": "rgba(16, 185, 129, 1)",
        "underLineColor": "rgba(16, 185, 129, 0.15)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      });
      chart2Ref.current.appendChild(script);
    }

    // Inject Quotes
    if (quotesRef.current && quotesRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "320",
        "symbolsGroups": [
          {
            "name": "Global Energy",
            "originalName": "Energy",
            "symbols": [
              { "name": "TVC:USOIL", "displayName": "WTI Crude Oil" },
              { "name": "TVC:UKOIL", "displayName": "Brent Crude" },
              { "name": "CAPITALCOM:NATURALGAS", "displayName": "Natural Gas" }
            ]
          },
          {
            "name": "Industrial Metals",
            "symbols": [
              { "name": "TVC:GOLD", "displayName": "Gold" },
              { "name": "TVC:SILVER", "displayName": "Silver" },
              { "name": "OANDA:XCUUSD", "displayName": "Copper" }
            ]
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#0B1120"
      });
      quotesRef.current.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="h-48 bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-4">
          <div ref={chart1Ref} className="tradingview-widget-container h-full w-full" />
        </div>
        <div className="h-48 bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-4">
          <div ref={chart2Ref} className="tradingview-widget-container h-full w-full" />
        </div>
      </div>
      <div className="bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-4">
        <div ref={quotesRef} className="tradingview-widget-container w-full" />
      </div>
    </>
  );
}
