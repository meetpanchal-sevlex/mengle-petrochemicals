'use client';

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
    <section id="products" className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-slate-100/70 border-b border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                  Comprehensive Portfolio
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
                  style={{ fontFamily: 'var(--font-sora)' }}>
                  Industrial Products & Lab Specifications
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                  Explore our complete range of certified industrial fuels, white oils, base stocks, solvents, and aromatics with verifiable lab test parameters.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-72 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder="Search products or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>
            </div>

            
            {/* Hidden Anchors for Routing */}
            <div id="products-black-oils" className="absolute -top-24 pointer-events-none" />
            <div id="products-white-oils" className="absolute -top-24 pointer-events-none" />
            <div id="products-base-oils" className="absolute -top-24 pointer-events-none" />
            <div id="products-solvents" className="absolute -top-24 pointer-events-none" />
            <div id="products-aromatics" className="absolute -top-24 pointer-events-none" />

            {/* Category Filter Tabs */}

            <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? PRODUCTS.length 
                  : PRODUCTS.filter(p => p.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                {filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onClick={() => onOpenProduct(prod)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  No products found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-3 text-xs font-bold text-amber-600 hover:underline"
                >
                  Clear filters & view all products
                </button>
              </div>
            )}
          </div>
        </section>
  );
}
