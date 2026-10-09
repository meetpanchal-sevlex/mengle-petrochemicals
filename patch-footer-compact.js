const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// 1. Cut padding and gaps
footer = footer.replace(/py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12/, 'py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12');
footer = footer.replace(/space-y-5/g, 'space-y-3.5');
footer = footer.replace(/flex flex-col gap-3/, 'flex flex-col gap-2');

// 2. Shrink fonts and elements slightly
footer = footer.replace(/w-9 h-9/g, 'w-8 h-8');
footer = footer.replace(/text-lg shadow-md/g, 'text-base shadow-md');
footer = footer.replace(/text-base font-bold text-white tracking-tight/, 'text-[15px] font-bold text-white tracking-tight');
footer = footer.replace(/text-\[11px\] text-amber-500 font-medium/g, 'text-[10px] text-amber-500 font-medium');

// 3. Compact office locations
footer = footer.replace(/flex flex-col gap-4/g, 'flex flex-col gap-3');
footer = footer.replace(/text-\[13px\] font-bold text-slate-200 mb-0.5/g, 'text-xs font-bold text-slate-200');
footer = footer.replace(/text-xs text-slate-400 leading-relaxed max-w-sm/g, 'text-[11px] text-slate-400 leading-snug max-w-sm');

fs.writeFileSync('src/components/Footer.tsx', footer);
console.log('Compacted Footer even more.');
