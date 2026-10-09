const fs = require('fs');

const pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// We will extract Hero Section and Product Portfolio into separate components
// Then rewrite page.tsx to use them.

const heroRegex = /<main>[\s\S]*?(<section className="relative bg-gradient[\s\S]*?<\/section>)[\s\S]*?\{?\/\* CREDENTIALS/;
const productsRegex = /(<section id="products"[\s\S]*?<\/section>)[\s\S]*?\{\/\* DUAL DEPOTS/;

const heroMatch = pageContent.match(heroRegex);
const productsMatch = pageContent.match(productsRegex);

if (!heroMatch || !productsMatch) {
  console.log("Regex didn't match.");
  process.exit(1);
}

const heroSectionCode = heroMatch[1];
const productsSectionCode = productsMatch[1];

// Write HeroSection.tsx
const heroSectionComponent = `'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Flame, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  fadeUp: any;
}

export default function HeroSection({ onOpenQuote, fadeUp }: HeroSectionProps) {
  return (
    ${heroSectionCode.replace(/onClick=\{\(\) => handleOpenQuote\(\)\}/g, 'onClick={onOpenQuote}')}
  );
}
`;
fs.writeFileSync('src/components/home/HeroSection.tsx', heroSectionComponent);

// Write ProductPortfolio.tsx
const productPortfolioComponent = `'use client';

import React from 'react';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, Product } from '@/data/companyData';

interface ProductPortfolioProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredProducts: Product[];
  onOpenProduct: (p: Product) => void;
}

export default function ProductPortfolio({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  filteredProducts,
  onOpenProduct
}: ProductPortfolioProps) {
  return (
    ${productsSectionCode.replace(/handleOpenProduct/g, 'onOpenProduct')}
  );
}
`;
fs.writeFileSync('src/components/home/ProductPortfolio.tsx', productPortfolioComponent);


// Rewrite page.tsx
const newPageCode = `'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, Product } from '@/data/companyData';

import QuoteModal from '@/components/QuoteModal';
import ProductModal from '@/components/ProductModal';
import HeroSection from '@/components/home/HeroSection';
import ProductPortfolio from '@/components/home/ProductPortfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('');
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PRODUCTS.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleOpenQuote = (productName?: string) => {
    setQuoteProduct(productName || '');
    setIsQuoteOpen(true);
  };

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#products-')) {
        const categoryMap: Record<string, string> = {
          '#products-black-oils': 'Black Oils (LDO, FO, LSHS)',
          '#products-white-oils': 'White Oils & LLP',
          '#products-base-oils': 'Base Oils',
          '#products-solvents': 'Hydrocarbon Solvents',
          '#products-aromatics': 'Aromatics',
        };
        const category = categoryMap[hash];
        if (category) {
          setSelectedCategory(category);
          const productsSection = document.getElementById('products');
          if (productsSection) {
            const y = productsSection.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      <main>
        <HeroSection onOpenQuote={handleOpenQuote} fadeUp={fadeUp} />
        
        <ProductPortfolio 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredProducts={filteredProducts}
          onOpenProduct={handleOpenProduct}
        />
      </main>

      <ProductModal 
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={selectedProduct}
        onOpenQuote={handleOpenQuote}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={quoteProduct}
      />
    </div>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', newPageCode);

console.log("Refactoring complete.");
