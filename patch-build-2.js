const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add missing Product type import
pageData = pageData.replace(
  "import { COMPANY_INFO, PRODUCTS } from '@/data/companyData';",
  "import { COMPANY_INFO, PRODUCTS, Product } from '@/data/companyData';"
);

fs.writeFileSync('src/app/page.tsx', pageData);

let modalData = fs.readFileSync('src/components/ProductModal.tsx', 'utf8');
modalData = modalData.replace(/initial=\{\{ y: "100%", sm: \{ y: 24, scale: 0.96 \} \}\}/g, 'initial={{ y: 24, scale: 0.96, opacity: 0 }}');
modalData = modalData.replace(/animate=\{\{ y: 0, sm: \{ y: 0, scale: 1 \} \}\}/g, 'animate={{ y: 0, scale: 1, opacity: 1 }}');
modalData = modalData.replace(/exit=\{\{ y: "100%", sm: \{ y: 16, scale: 0.97, opacity: 0 \} \}\}/g, 'exit={{ y: 16, scale: 0.97, opacity: 0 }}');
fs.writeFileSync('src/components/ProductModal.tsx', modalData);

console.log('Fixed TS errors cleanly');
