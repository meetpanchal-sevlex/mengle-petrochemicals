const fs = require('fs');

let page = fs.readFileSync('src/app/about/page.tsx', 'utf8');

// 1. Optimize Hero Section Mobile Spacing
page = page.replace(
  'pt-24 pb-32',
  'pt-16 pb-24 sm:pt-24 sm:pb-32'
);
page = page.replace(
  'text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6',
  'text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1]'
);
page = page.replace(
  'text-lg sm:text-xl',
  'text-base sm:text-xl'
);

// 2. Optimize Mission & Vision Bento Boxes
page = page.replace(
  /-mt-16 max-w-7xl mx-auto px-4 sm:px-8 pb-20/g,
  '-mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-8 pb-12 sm:pb-20'
);
page = page.replace(
  /p-8 sm:p-10 shadow-\[0_8px_30px_rgb\(0,0,0,0\.04\)\] border border-slate-200\/80/g,
  'p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/80'
);
page = page.replace(
  /p-8 sm:p-10 shadow-\[0_8px_30px_rgb\(0,0,0,0\.08\)\] border border-slate-800/g,
  'p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-800'
);
// Shrink icons slightly on mobile
page = page.replace(
  /w-12 h-12 rounded-2xl/g,
  'w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl'
);
page = page.replace(
  /w-6 h-6/g,
  'w-5 h-5 sm:w-6 sm:h-6'
);

// 3. Optimize Operational Strengths Cards
page = page.replace(
  /py-20 bg-white/g,
  'py-12 sm:py-20 bg-white'
);
page = page.replace(
  /mb-16/g,
  'mb-10 sm:mb-16'
);
page = page.replace(
  /p-8 border border-slate-200\/80/g,
  'p-5 sm:p-8 border border-slate-200/80'
);

// 4. Optimize CTA Section
page = page.replace(
  /py-20 bg-slate-900/g,
  'py-16 sm:py-20 bg-slate-900'
);
page = page.replace(
  /px-8 py-4 bg-amber-500/g,
  'px-5 py-3.5 sm:px-8 sm:py-4 bg-amber-500 text-sm sm:text-base'
);
page = page.replace(
  /px-8 py-4 bg-slate-800/g,
  'px-5 py-3.5 sm:px-8 sm:py-4 bg-slate-800 text-sm sm:text-base'
);

fs.writeFileSync('src/app/about/page.tsx', page);
console.log('Applied aggressive mobile optimization to About page.');
