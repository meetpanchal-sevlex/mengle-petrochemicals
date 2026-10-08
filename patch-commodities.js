const fs = require('fs');

let pageData = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

// 1. Add the market quotes widget script injection
const newUseEffect = `
  // Inject TradingView Commodities Widget
  useEffect(() => {
    const container = document.getElementById('tradingview_commodities');
    if (container && !container.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "width": "100%",
        "height": "400",
        "symbolsGroups": [
          {
            "name": "Global Commodities",
            "originalName": "Commodities",
            "symbols": [
              { "name": "CME_MINI:QM1!", "displayName": "Crude Oil" },
              { "name": "NYMEX:NG1!", "displayName": "Natural Gas" },
              { "name": "NYMEX:RB1!", "displayName": "Gasoline" },
              { "name": "NYMEX:HO1!", "displayName": "Heating Oil" },
              { "name": "COMEX:GC1!", "displayName": "Gold" },
              { "name": "COMEX:SI1!", "displayName": "Silver" },
              { "name": "COMEX:HG1!", "displayName": "Copper" }
            ]
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "colorTheme": "light",
        "locale": "en",
        "backgroundColor": "#ffffff"
      });
      container.appendChild(script);
    }
  }, []);
`;

pageData = pageData.replace('// Inject TradingView Widget', newUseEffect + '\n\n  // Inject TradingView Widget');

// 2. Add the UI for it below the charts
const chartsUI = `<div className="w-full h-[450px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-2">
              <div id="tradingview_brent" className="w-full h-full"></div>
            </div>
          </div>`;

const newChartsUI = `<div className="w-full h-[450px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-2">
              <div id="tradingview_brent" className="w-full h-full"></div>
            </div>
          </div>

          <div className="mt-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-2">
            <div id="tradingview_commodities" className="w-full h-[400px]"></div>
          </div>`;

pageData = pageData.replace(chartsUI, newChartsUI);

fs.writeFileSync('src/app/price-list/page.tsx', pageData);
console.log('Added Commodities Widget!');
