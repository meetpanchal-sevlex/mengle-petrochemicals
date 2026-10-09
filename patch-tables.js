const fs = require('fs');

let content = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

// Compact the table headers
content = content.replace(
  /text-xs uppercase tracking-wider text-slate-500 font-bold/g,
  'text-[10px] sm:text-xs uppercase tracking-normal sm:tracking-wider text-slate-500 font-bold'
);

// Compact the table header background padding
content = content.replace(
  /bg-slate-900 px-6 py-4/g,
  'bg-slate-900 px-4 py-3 sm:px-6 sm:py-4'
);

// Reduce the text size for the prices
content = content.replace(
  /font-mono text-sm/g,
  'font-mono text-[12px] sm:text-sm'
);

// Reduce the text size for the GST
content = content.replace(
  /text-slate-500 text-sm/g,
  'text-slate-500 text-[12px] sm:text-sm'
);

fs.writeFileSync('src/app/price-list/page.tsx', content);
console.log('Applied aggressive mobile compacting to tables.');
