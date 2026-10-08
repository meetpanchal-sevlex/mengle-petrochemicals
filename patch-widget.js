const fs = require('fs');

let content = fs.readFileSync('src/components/TradingViewCharts.tsx', 'utf8');
content = content.replace(
  'className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"', 
  'className="grid grid-cols-1 gap-6 mb-8"'
);
fs.writeFileSync('src/components/TradingViewCharts.tsx', content);

console.log('Fixed TradingView widgets to stack cleanly.');
