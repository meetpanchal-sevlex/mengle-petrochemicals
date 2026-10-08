const fs = require('fs');

// Patch Navbar
let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navData = navData.replace(
  /className="h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply"/g,
  'className="h-16 md:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply"'
);
fs.writeFileSync('src/components/Navbar.tsx', navData);

// Patch Footer
let footerData = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footerData = footerData.replace(
  /className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply"/g,
  'className="h-20 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply"'
);
fs.writeFileSync('src/components/Footer.tsx', footerData);

console.log('Successfully scaled up logo size');
