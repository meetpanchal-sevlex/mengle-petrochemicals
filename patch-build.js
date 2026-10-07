const fs = require('fs');

let pageData = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add missing Product type import
if (!pageData.includes('import { Product }')) {
  pageData = pageData.replace(
    "import { COMPANY_INFO, PRODUCTS } from '@/data/companyData';",
    "import { COMPANY_INFO, PRODUCTS, Product } from '@/data/companyData';"
  );
} else {
  // If it's already there from my previous replace, let's fix it by adding it to COMPANY_INFO import
  pageData = pageData.replace(
    "import { COMPANY_INFO, PRODUCTS } from '@/data/companyData';",
    "import { COMPANY_INFO, PRODUCTS, Product } from '@/data/companyData';"
  );
}

// Fix ProductCard onClick mapping
pageData = pageData.replace(/<ProductCard[^>]*onOpenQuote={\(name\) => handleOpenQuote\(name\)}[^>]*\/>/g, '<ProductCard key={prod.id} product={prod} onClick={() => handleOpenProduct(prod)} />');
// just in case it's multi-line:
pageData = pageData.replace(/<ProductCard[\s\S]*?onOpenQuote=\{.*?\}[\s\S]*?\/>/g, '<ProductCard key={prod.id} product={prod} onClick={() => handleOpenProduct(prod)} />');

fs.writeFileSync('src/app/page.tsx', pageData);

let modalData = fs.readFileSync('src/components/ProductModal.tsx', 'utf8');
modalData = modalData.replace(/initial=\{\{ y: "100%", sm: \{ y: 24, scale: 0.96 \} \}\}/g, 'initial={{ y: 24, scale: 0.96, opacity: 0 }}');
modalData = modalData.replace(/animate=\{\{ y: 0, sm: \{ y: 0, scale: 1 \} \}\}/g, 'animate={{ y: 0, scale: 1, opacity: 1 }}');
modalData = modalData.replace(/exit=\{\{ y: "100%", sm: \{ y: 16, scale: 0.97, opacity: 0 \} \}\}/g, 'exit={{ y: 16, scale: 0.97, opacity: 0 }}');
fs.writeFileSync('src/components/ProductModal.tsx', modalData);

console.log('Fixed build errors');
