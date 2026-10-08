const fs = require('fs');

let data = fs.readFileSync('src/app/compliance/page.tsx', 'utf8');

// Replace w-full with exact calculation w-[calc(100vw-2rem)] for mobile
data = data.replace(
  /snap-center shrink-0 w-full sm:w-auto/g, 
  'snap-center shrink-0 w-[calc(100vw-2rem)] sm:w-auto'
);

fs.writeFileSync('src/app/compliance/page.tsx', data);
console.log('Patched card widths to precisely calc(100vw-2rem)');
