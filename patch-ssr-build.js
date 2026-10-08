const fs = require('fs');

// Re-add 'use client' to compliance page
let comp = fs.readFileSync('src/app/compliance/page.tsx', 'utf8');
if (!comp.startsWith("'use client'")) {
  fs.writeFileSync('src/app/compliance/page.tsx', "'use client';\n" + comp);
}

// Remove export const revalidate = 60 from price list page
let price = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');
price = price.replace('export const revalidate = 60;', '// (Dynamic rendering)');
fs.writeFileSync('src/app/price-list/page.tsx', price);

console.log('Fixed build errors.');
