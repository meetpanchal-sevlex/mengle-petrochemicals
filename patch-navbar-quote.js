const fs = require('fs');

let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace the button onClick with a Link to /contact
navData = navData.replace(
  /<button\s+onClick=\{onOpenQuote\}[\s\S]*?<\/button>/,
  `<Link
              href="/contact"
              className="bg-[#0B1120] hover:bg-slate-800 text-white text-[13px] font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer tracking-tight"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Request Quote
            </Link>`
);

navData = navData.replace(
  /<button\s+onClick=\{[^}]*onOpenQuote\?\.\(\)[^}]*\}[\s\S]*?<\/button>/,
  `<Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="w-full bg-[#0B1120] text-white font-bold py-3 rounded-xl text-center text-sm cursor-pointer block"
                  >
                    Request Quote
                  </Link>`
);

fs.writeFileSync('src/components/Navbar.tsx', navData);

// Now properly remove Navbar from page.tsx completely
let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');
pageData = pageData.replace(/<Navbar onOpenQuote=\{[^\}]+\} \/>/g, '');
pageData = pageData.replace(/<Footer \/>/g, '');
pageData = pageData.replace(/<FloatingActions \/>/g, '');
pageData = pageData.replace(/import Navbar from '@\/components\/Navbar';\n/g, '');
fs.writeFileSync('src/app/page.tsx', pageData);

console.log('Fixed Navbar routing for Quote, completely removed from page.tsx');
