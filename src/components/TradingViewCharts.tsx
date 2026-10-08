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
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "TVC:USOIL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1", // 1 = Candlesticks
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "#0F172A",
        "gridColor": "#1E293B",
        "hide_top_toolbar": true,
        "hide_legend": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      });
      chart1Ref.current.appendChild(script);
    }

    // Inject Chart 2 (Brent Crude)
    if (chart2Ref.current && chart2Ref.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "TVC:UKOIL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1", // 1 = Candlesticks
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "#0F172A",
        "gridColor": "#1E293B",
        "hide_top_toolbar": true,
        "hide_legend": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
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
              { "name": "TVC:USOIL", "displayName": "WTI Crude" },
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
        "showSymbolLogo": false,
        "isTransparent": true,
        "colorTheme": "dark",
        "locale": "en",
        "backgroundColor": "#0B1120"
      });
      quotesRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="h-[280px] bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-1">
        <div ref={chart1Ref} className="tradingview-widget-container h-full w-full" />
      </div>
      <div className="h-[280px] bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-1">
        <div ref={chart2Ref} className="tradingview-widget-container h-full w-full" />
      </div>
      <div className="bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-1 sm:p-4">
        <div ref={quotesRef} className="tradingview-widget-container w-full" />
      </div>
    </div>
  );
}
