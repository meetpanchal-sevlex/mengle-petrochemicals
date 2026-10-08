const fs = require('fs');

let content = fs.readFileSync('src/components/TradingViewCharts.tsx', 'utf8');

// Reduce padding on quotes container
content = content.replace(
  /<div className="bg-\[#0F172A\] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-4">/g,
  '<div className="bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-lg p-1 sm:p-4">'
);

fs.writeFileSync('src/components/TradingViewCharts.tsx', content);

console.log('Reduced padding on mobile.');
