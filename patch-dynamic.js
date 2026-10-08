const fs = require('fs');
let price = fs.readFileSync('src/app/price-list/page.tsx', 'utf8');
if (!price.includes('export const dynamic')) {
  price = "export const dynamic = 'force-dynamic';\n" + price;
  fs.writeFileSync('src/app/price-list/page.tsx', price);
}
console.log('Fixed dynamic rendering for price list');
