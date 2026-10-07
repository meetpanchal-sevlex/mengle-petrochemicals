const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Reduce massive padding on sections for mobile
pageData = pageData.replace(/py-20 bg-white/g, 'py-10 lg:py-20 bg-white');
pageData = pageData.replace(/py-20 bg-slate-900/g, 'py-10 lg:py-20 bg-slate-900');
pageData = pageData.replace(/py-20 lg:py-28/g, 'py-12 lg:py-28');

// 2. Yellow Credentials strip -> 2x2 grid on mobile instead of 1-column stack
pageData = pageData.replace(
  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
  'grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'
);
// Shrink icon sizes slightly on the credentials strip
pageData = pageData.replace(/Award className="w-6 h-6/g, 'Award className="w-5 h-5 lg:w-6 lg:h-6');
pageData = pageData.replace(/CheckCircle2 className="w-6 h-6/g, 'CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6');
pageData = pageData.replace(/ShieldCheck className="w-6 h-6/g, 'ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6');
pageData = pageData.replace(/Flame className="w-6 h-6/g, 'Flame className="w-5 h-5 lg:w-6 lg:h-6');
// Shrink text size on credentials
pageData = pageData.replace(/text-sm font-extrabold tracking-tight uppercase/g, 'text-[10px] lg:text-sm font-extrabold tracking-tight uppercase leading-tight');
pageData = pageData.replace(/text-xs font-semibold text-slate-900/g, 'text-[9px] lg:text-xs font-semibold text-slate-900 leading-tight mt-0.5');

// 3. Compact the About section text
pageData = pageData.replace(
  'text-3xl sm:text-4xl font-extrabold text-slate-900',
  'text-2xl sm:text-4xl font-extrabold text-slate-900'
);

// 4. Core Strengths -> Make it a horizontal swipe carousel on mobile!
const coreStrengthsOld = `<div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Our Core Operational Strengths
                  </div>

                  {COMPANY_INFO.coreStrengths.map((strength, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/50 hover:shadow-lg transition-all group">`;

const coreStrengthsNew = `<div className="lg:col-span-6">
                  <div className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                    Our Core Operational Strengths
                  </div>

                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0 snap-x scrollbar-hide">
                  {COMPANY_INFO.coreStrengths.map((strength, i) => (
                    <div key={i} className="snap-start shrink-0 w-[85vw] lg:w-auto flex gap-3 lg:gap-4 p-4 lg:p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400/50 hover:shadow-lg transition-all group">`;

pageData = pageData.replace(coreStrengthsOld, coreStrengthsNew);

// Make sure the number circles in strengths are slightly smaller on mobile
pageData = pageData.replace(/w-10 h-10 rounded-xl bg-slate-900/g, 'w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-slate-900');
pageData = pageData.replace(/text-lg font-black text-amber-400/g, 'text-base lg:text-lg font-black text-amber-400');
pageData = pageData.replace(/text-sm font-bold text-slate-900/g, 'text-xs lg:text-sm font-bold text-slate-900');
pageData = pageData.replace(/text-xs text-slate-500 mt-1/g, 'text-[11px] lg:text-xs text-slate-500 mt-1 leading-relaxed');

// 5. Products Section title smaller
pageData = pageData.replace(
  'text-2xl sm:text-3xl font-extrabold',
  'text-xl sm:text-3xl font-extrabold'
);

fs.writeFileSync('src/app/page.tsx', pageData);
console.log('Fixed page chunkiness');
