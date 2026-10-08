const fs = require('fs');

let pageData = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

// Replace the useEffect block
const oldUseEffectRegex = /useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/;
const newUseEffect = `useEffect(() => {
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
  }, []);`;

pageData = pageData.replace(oldUseEffectRegex, newUseEffect);

// Replace the HTML section for the charts
const oldSection = `<section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Live Crude Oil Markets</h2>
              <p className="text-xs text-slate-500">WTI Crude Oil (USD/BBL) - Real-time Data</p>
            </div>
          </div>
          
          <div className="w-full h-[500px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-2">
            <div id="tradingview_widget" className="w-full h-full"></div>
          </div>
        </section>`;

const newSection = `<section>
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
        </section>`;

pageData = pageData.replace(oldSection, newSection);

fs.writeFileSync('src/app/price-list/page.tsx', pageData);
console.log('Successfully upgraded to dual WTI and Brent charts');
