const fs = require('fs');

let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const navRegex = /<div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-\[1\.04\] transition-transform duration-200 bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 p-1">[\s\S]*?<\/div>/;

const newNavLogo = `<div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1120] to-slate-800 flex items-center justify-center shadow-md group-hover:scale-[1.04] transition-transform duration-200">
              <span className="text-amber-400 font-black text-xl" style={{ fontFamily: 'var(--font-sora)' }}>M</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-white" />
            </div>`;

navData = navData.replace(navRegex, newNavLogo);
fs.writeFileSync('src/components/Navbar.tsx', navData);


let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const footerRegex = /<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg p-1\.5 border border-slate-100">[\s\S]*?<\/div>/;

const newFooterLogo = `<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-slate-950 font-black text-2xl" style={{ fontFamily: 'var(--font-sora)' }}>M</span>
            </div>`;

footerData = footerData.replace(footerRegex, newFooterLogo);
fs.writeFileSync('src/components/Footer.tsx', footerData);

console.log('Reverted to beautiful CSS M logo');
