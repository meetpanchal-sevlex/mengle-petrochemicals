'use client';

import React from 'react';
import { Product } from '@/data/companyData';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md group cursor-pointer flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/80"
    >
      <div className="w-full aspect-square relative bg-slate-50/50 border-b border-slate-100 overflow-hidden p-2">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out p-2"
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs font-bold text-slate-300">NO IMAGE</span>
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4 flex-1 flex flex-col bg-white">
        <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight line-clamp-2 mb-1.5 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-auto">
          {product.code}
        </p>
      </div>
    </div>
  );
}
