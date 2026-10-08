const fs = require('fs');

let navData = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// 1. Remove the rigid h-[68px] and let it expand safely to accommodate the large logo
navData = navData.replace(
  'h-[68px]',
  'py-4 min-h-[80px] md:min-h-[96px]'
);

// 2. Adjust the logo height so it is huge but fits safely inside the new taller navbar
navData = navData.replace(
  /className="h-16 md:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply"/g,
  'className="h-14 md:h-16 w-auto max-w-[200px] md:max-w-[250px] object-contain group-hover:opacity-90 transition-opacity duration-200 mix-blend-multiply"'
);

fs.writeFileSync('src/components/Navbar.tsx', navData);
console.log('Fixed Navbar container height to prevent logo overflow!');
