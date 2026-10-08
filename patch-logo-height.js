const fs = require('fs');

// Patch Navbar
let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const navRegex = /<Link href="\/" className="flex items-center group shrink-0">[\s\S]*?<\/Link>/;

const newNavLogo = `<Link href="/" className="flex items-center group shrink-0">
            <img src="/images/logo.png" alt="M Engle Logo" className="h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply" />
          </Link>`;

navData = navData.replace(navRegex, newNavLogo);
fs.writeFileSync('src/components/Navbar.tsx', navData);

// Patch Footer
let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const footerRegex = /<Link href="\/" className="flex items-center group shrink-0 bg-white p-2 rounded-xl inline-block max-w-\[200px\]">[\s\S]*?<\/Link>/;

const newFooterLogo = `<Link href="/" className="flex items-center group shrink-0 bg-white p-3 rounded-xl inline-block">
              <img src="/images/logo.png" alt="M Engle Logo" className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply" />
            </Link>`;

footerData = footerData.replace(footerRegex, newFooterLogo);
fs.writeFileSync('src/components/Footer.tsx', footerData);

console.log('Successfully constrained logo heights!');
