'use client';

import React, { useEffect, useRef } from 'react';

export function TradingViewCharts() {
  const chart1Ref = useRef<HTMLDivElement>(null);
  const chart2Ref = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="h-[280px] bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-1">
        <div ref={chart1Ref} className="tradingview-widget-container h-full w-full" />
      </div>
      <div className="h-[280px] bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-1">
        <div ref={chart2Ref} className="tradingview-widget-container h-full w-full" />
      </div>
    </div>
  );
}
