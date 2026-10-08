const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// 1. Collapse top bar on scroll
nav = nav.replace(
  '<div className="bg-[#0B1120] text-slate-400 text-[11px] py-2 px-4 sm:px-8 border-b border-slate-800/60">',
  '<div className={cn("bg-[#0B1120] text-slate-400 text-[11px] px-4 sm:px-8 overflow-hidden transition-all duration-300", scrolled ? "h-0 py-0 opacity-0 border-transparent" : "h-auto py-2 border-b border-slate-800/60 opacity-100")}>'
);

// 2. Shrink main nav padding on scroll
nav = nav.replace(
  '<nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 min-h-[80px] md:min-h-[96px] flex items-center justify-between">',
  '<nav className={cn("max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-300", scrolled ? "min-h-[60px] py-2" : "min-h-[80px] md:min-h-[96px] py-4")}>'
);

// 3. Shrink logo on scroll
nav = nav.replace(
  '<img src="/images/logo.png" alt="M Engle Logo" className="h-14 md:h-16 w-auto max-w-[200px] md:max-w-[250px] object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply" />',
  '<img src="/images/logo.png" alt="M Engle Logo" className={cn("w-auto object-contain group-hover:opacity-90 transition-all duration-300 mix-blend-multiply", scrolled ? "h-10 md:h-12 max-w-[160px]" : "h-14 md:h-16 max-w-[200px] md:max-w-[250px]")} />'
);

fs.writeFileSync('src/components/Navbar.tsx', nav);
console.log('Applied mobile shrink-on-scroll to Navbar.');
