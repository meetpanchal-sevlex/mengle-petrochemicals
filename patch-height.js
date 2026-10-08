const fs = require('fs');

let data = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

// Replace TradingView JSON height
data = data.replace(/"height": "400"/g, '"height": "320"');

// Replace the tailwind wrapper height
data = data.replace(/className="w-full h-\[400px\]"/g, 'className="w-full h-[320px]"');

fs.writeFileSync('src/app/price-list/page.tsx', data);
console.log('Fixed Commodities widget height to remove extra whitespace');
