const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// 1. Extreme container compaction
footer = footer.replace(
  /py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12/,
  'py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'
);

// 2. Shrink vertical space between elements in Brand Column
footer = footer.replace(/space-y-3\.5/g, 'space-y-2.5');
footer = footer.replace(/flex flex-col gap-2/g, 'flex flex-col gap-1.5');
footer = footer.replace(/mt-1/g, 'mt-0');

// 3. Compact text sizes and gaps in Contact Links
footer = footer.replace(/text-\[13px\] text-slate-300/g, 'text-[12px] text-slate-300');
footer = footer.replace(/text-\[13px\] text-amber-400/g, 'text-[12px] text-amber-400');
footer = footer.replace(/gap-3 text-\[12px\]/g, 'gap-2 text-[12px]'); // for phone and mail icon gap

// 4. Shrink Office Locations
footer = footer.replace(/space-y-4/g, 'space-y-2.5'); // Outer spacing
footer = footer.replace(/flex flex-col gap-3/g, 'flex flex-col gap-2'); // Gap between the two locations
footer = footer.replace(/text-\[13px\] font-bold text-slate-200 mb-0\.5/g, 'text-xs font-bold text-slate-200 mb-0'); // Title size and margin
footer = footer.replace(/text-\[11px\] font-bold text-slate-500 uppercase tracking-widest/g, 'text-[10px] font-bold text-slate-500 uppercase tracking-widest'); // Section header

// 5. Compact Bottom Bar
footer = footer.replace(/border-t border-slate-900 py-4 px-4/g, 'border-t border-slate-900 py-3 px-4');
footer = footer.replace(/text-\[11px\] text-slate-500/g, 'text-[10px] text-slate-500');

fs.writeFileSync('src/components/Footer.tsx', footer);
console.log('Applied ultra-extreme compaction to Footer.');
