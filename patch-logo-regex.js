const fs = require('fs');

let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Regex for Navbar Logo
const navRegex = /<div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-\[#0B1120\] to-slate-800 flex items-center justify-center shadow-md group-hover:scale-\[1\.04\] transition-transform duration-200">[\s\S]*?<\/div>/;

const newNavLogo = `<div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-[1.04] transition-transform duration-200 bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 p-1">
            <img src="/images/logo.png" alt="M Engle Logo" className="w-full h-full object-contain" />
          </div>`;

navData = navData.replace(navRegex, newNavLogo);
fs.writeFileSync('src/components/Navbar.tsx', navData);

let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Regex for Footer Logo
const footerRegex = /<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500\/20">[\s\S]*?<\/div>/;

const newFooterLogo = `<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg p-1.5 border border-slate-100">
              <img src="/images/logo.png" alt="M Engle Logo" className="w-full h-full object-contain" />
            </div>`;

footerData = footerData.replace(footerRegex, newFooterLogo);
fs.writeFileSync('src/components/Footer.tsx', footerData);

console.log('Successfully applied regex logo patch!');
