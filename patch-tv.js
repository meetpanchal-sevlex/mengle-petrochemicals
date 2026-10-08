const fs = require('fs');

let content = fs.readFileSync('src/components/TradingViewCharts.tsx', 'utf8');
content = content.replace(/"showSymbolLogo": true/g, '"showSymbolLogo": false');
fs.writeFileSync('src/components/TradingViewCharts.tsx', content);

console.log('Disabled symbol logos in TradingView market quotes to save horizontal space.');
