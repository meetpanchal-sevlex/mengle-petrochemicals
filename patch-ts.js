const fs = require('fs');
let data = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

data = data.replace(
  'if (!GOOGLE_SHEET_CSV_URL || GOOGLE_SHEET_CSV_URL === "PASTE_YOUR_GOOGLE_SHEET_CSV_LINK_HERE") {',
  'if (!GOOGLE_SHEET_CSV_URL) {'
);

fs.writeFileSync('src/app/price-list/page.tsx', data);
console.log('Fixed TS error!');
