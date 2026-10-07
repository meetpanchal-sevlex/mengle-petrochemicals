const fs = require('fs');
let data = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add ProductModal import
data = data.replace(
  "import QuoteModal from '@/components/QuoteModal';",
  "import QuoteModal from '@/components/QuoteModal';\nimport ProductModal from '@/components/ProductModal';"
);
data = data.replace(
  "import { Product } from '@/data/companyData';",
  "import { Product } from '@/data/companyData';"
);

// 2. Add state
data = data.replace(
  "const [quoteProduct, setQuoteProduct] = useState<string>('');",
  "const [quoteProduct, setQuoteProduct] = useState<string>('');\n  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);\n  const [isProductModalOpen, setIsProductModalOpen] = useState(false);"
);

// 3. Add function to open product
data = data.replace(
  "const handleOpenQuote = (productName?: string) => {",
  "const handleOpenProduct = (prod: typeof PRODUCTS[0]) => {\n    setSelectedProduct(prod);\n    setIsProductModalOpen(true);\n  };\n\n  const handleOpenQuote = (productName?: string) => {"
);

// 4. Update Category Render
const newCategories = `
              <div className="flex items-center gap-3 pt-2 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:pb-2 scrollbar-hide snap-x">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  
                  let bgColors = "bg-slate-100 text-slate-700 border-slate-200";
                  if(cat === 'Black Oils') bgColors = isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900 border-slate-200';
                  if(cat === 'White Oils') bgColors = isActive ? 'bg-sky-500 text-white' : 'bg-sky-50 text-sky-800 border-sky-100';
                  if(cat === 'Base Oils') bgColors = isActive ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-900 border-amber-100';
                  if(cat === 'Solvents') bgColors = isActive ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-900 border-emerald-100';
                  if(cat === 'Aromatic Petrochemicals') bgColors = isActive ? 'bg-purple-500 text-white' : 'bg-purple-50 text-purple-900 border-purple-100';
                  if(cat === 'All') bgColors = isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-800 border-blue-100';

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={\`snap-start shrink-0 flex flex-col items-center justify-center gap-2 p-3 w-24 h-24 rounded-2xl transition-all border \${bgColors} \${isActive ? 'shadow-md scale-105' : 'hover:scale-105'}\`}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center shadow-xs">
                        <span className="font-bold text-lg">{cat.charAt(0)}</span>
                      </div>
                      <span className="text-[10px] font-bold text-center leading-tight">
                        {cat === 'Aromatic Petrochemicals' ? 'Aromatics' : cat}
                      </span>
                    </button>
                  );
                })}
              </div>
`;
data = data.replace(/<div className="flex items-center gap-3 pt-2 overflow-x-auto.*?<\/div>/s, newCategories);

// 5. Update Grid classes & ProductCard mapping
data = data.replace(
  '<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">',
  '<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">'
);
data = data.replace(
  '<ProductCard\n                      key={prod.id}\n                      product={prod}\n                      onOpenQuote={(name) => handleOpenQuote(name)}\n                    />',
  '<ProductCard\n                      key={prod.id}\n                      product={prod}\n                      onClick={() => handleOpenProduct(prod)}\n                    />'
);

// 6. Add Modal
data = data.replace(
  "{/* Quote RFQ Modal */}",
  "{/* Product Detail Modal */}\n        <ProductModal \n          isOpen={isProductModalOpen}\n          onClose={() => setIsProductModalOpen(false)}\n          product={selectedProduct}\n          onOpenQuote={handleOpenQuote}\n        />\n\n        {/* Quote RFQ Modal */}"
);

fs.writeFileSync('src/app/page.tsx', data);
console.log('page.tsx refactored for master-detail');
