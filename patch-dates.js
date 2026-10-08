const fs = require('fs');

let price = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');

// Remove the force-dynamic flag
price = price.replace("export const dynamic = 'force-dynamic';\n", "");

// Replace the unstable new Date() calls
price = price.replace(
  /const currentMonth = new Date\(\)\.toLocaleString\("default", \{ month: "short", year: "numeric" \}\);/g,
  'const currentMonth = "Active Trading Period";'
);
price = price.replace(/const timestamp = new Date\(\)\.toLocaleString\(\);/g, '');

fs.writeFileSync('src/app/price-list/page.tsx', price);
console.log('Stripped unstable Dates for Next15 compatibility.');
