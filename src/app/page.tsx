'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, Product } from '@/data/companyData';

import QuoteModal from '@/components/QuoteModal';
import ProductModal from '@/components/ProductModal';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
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
        
        <AboutPreview />
        
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
