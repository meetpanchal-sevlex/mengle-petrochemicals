const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Optimize Hero Section vertical padding to eliminate the gap
page = page.replace(
  /className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-12 lg:py-28 border-b border-slate-800"/,
  'className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-16 border-b border-slate-800"'
);

// 2. Optimize Products Section padding to eliminate the gap above and below the grid
page = page.replace(
  /<section id="products" className="py-20 bg-slate-100\/70 border-b border-slate-200 relative">/,
  '<section id="products" className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-slate-100/70 border-b border-slate-200 relative">'
);

// 3. Remove huge bottom margins on the grid itself if they exist
page = page.replace(
  /mb-10/,
  'mb-6'
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Optimized homepage section padding.');
