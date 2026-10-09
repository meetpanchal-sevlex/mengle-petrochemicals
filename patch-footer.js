const fs = require('fs');

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// 1. Remove the entire "Product Portfolio" section
footer = footer.replace(
  /\{\/\* Product Categories \*\/\}[\s\S]*?(?=\{\/\* Depots & Offices \*\/})/m,
  ''
);

// 2. Adjust grid classes for the remaining two columns
// Change Company Info from lg:col-span-4 to lg:col-span-5
footer = footer.replace(
  /className="lg:col-span-4 space-y-4"/,
  'className="lg:col-span-5 space-y-4"'
);

// Change Depots & Offices from lg:col-span-5 to lg:col-span-7
footer = footer.replace(
  /className="lg:col-span-5 space-y-4"/,
  'className="lg:col-span-7 space-y-4"'
);

// If the main grid wrapper uses lg:grid-cols-12, this now perfectly adds up to 12.

fs.writeFileSync('src/components/Footer.tsx', footer);
console.log('Removed Product Portfolio clutter and rebalanced Footer grid.');
