'use client';

import React from 'react';
import { Product } from '@/data/companyData';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  // Minimalist thumbnail card design (3-col mobile)
  return (
    <div 
      onClick={onClick}
      className="bg-white group cursor-pointer flex flex-col"
    >
      <div className="w-full aspect-square relative bg-slate-100 mb-3 overflow-hidden rounded-md border border-slate-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs font-bold text-slate-300">NO IMAGE</span>
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-[10px] font-semibold text-slate-500 mt-auto">
          {product.code}
        </p>
      </div>
    </div>
  );
}
