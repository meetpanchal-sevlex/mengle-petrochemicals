const fs = require('fs');

let content = fs.readFileSync('src/components/TradingViewCharts.tsx', 'utf8');

// Shorten names to save horizontal space on mobile
content = content.replace(/"displayName": "WTI Crude Oil"/g, '"displayName": "WTI Crude"');

fs.writeFileSync('src/components/TradingViewCharts.tsx', content);

console.log('Shortened display names.');
