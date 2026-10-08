const fs = require('fs');

// Patch Navbar
let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const navRegex = /<Link href="\/" className="flex items-center gap-3 group shrink-0">[\s\S]*?<\/Link>/;

const newNavLogo = `<Link href="/" className="flex items-center group shrink-0">
            <img src="/images/logo.png" alt="M Engle Logo" className="w-36 md:w-44 h-auto object-contain group-hover:opacity-90 transition-opacity duration-200" />
          </Link>`;

navData = navData.replace(navRegex, newNavLogo);
fs.writeFileSync('src/components/Navbar.tsx', navData);

// Patch Footer
let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const footerRegex = /<Link href="\/" className="flex items-center gap-3 group shrink-0">[\s\S]*?<\/Link>/;

const newFooterLogo = `<Link href="/" className="flex items-center group shrink-0 bg-white p-2 rounded-xl inline-block max-w-[200px]">
              <img src="/images/logo.png" alt="M Engle Logo" className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-200" />
            </Link>`;

footerData = footerData.replace(footerRegex, newFooterLogo);
fs.writeFileSync('src/components/Footer.tsx', footerData);

console.log('Successfully injected real logo into Navbar and Footer!');
