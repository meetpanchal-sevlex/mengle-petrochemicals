'use client';

import React, { useState } from 'react';
import { Product, COMPANY_INFO } from '@/data/companyData';
import { MessageSquare, FileText, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuote: (productName: string) => void;
}

export default function ProductCard({ product, onOpenQuote }: ProductCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Black Oils':
        return 'bg-slate-900 text-slate-100 border-slate-700';
      case 'White Oils':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'Base Oils':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'Solvents':
        return 'bg-emerald-50 text-emerald-900 border-emerald-200';
      case 'Aromatic Petrochemicals':
        return 'bg-purple-50 text-purple-900 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getWhatsAppLink = (prodName: string, code: string) => {
    const text = encodeURIComponent(
      `Hello M. Engle team, I would like to inquire about pricing, lab test reports, and delivery terms for ${prodName} (Code: ${code}).`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      {/* Top Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${getCategoryColor(product.category)}`}>
            {product.category}
          </span>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            {product.code}
          </span>
        </div>

        <h3
          className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Industrial Applications:
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {product.applications.slice(0, 3).map((app, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Expandable Technical Specs Table */}
      {product.specs && product.specs.length > 0 && (
        <div className="px-6 py-2 border-t border-slate-100 bg-slate-50/50">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="w-full py-2 text-xs font-semibold text-slate-700 hover:text-amber-600 flex items-center justify-between transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              {showSpecs ? 'Hide Lab Test Parameters' : `View Lab Specifications (${product.specs.length} Parameters)`}
            </span>
            {showSpecs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showSpecs && (
            <div className="mt-2 mb-4 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-[11px] text-slate-600 border-collapse">
                <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-2.5">Param</th>
                    <th className="py-2 px-2">Method</th>
                    <th className="py-2 px-2">Unit</th>
                    {product.specs.some(s => s.specification) && <th className="py-2 px-2">Spec</th>}
                    {product.specs.some(s => s.testResult) && <th className="py-2 px-2 text-amber-700">Typical Result</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.specs.map((spec, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-1.5 px-2.5 font-medium text-slate-900">{spec.parameter}</td>
                      <td className="py-1.5 px-2 text-slate-500 font-mono text-[10px]">{spec.testMethod}</td>
                      <td className="py-1.5 px-2">{spec.unit}</td>
                      {product.specs?.some(s => s.specification) && (
                        <td className="py-1.5 px-2 text-slate-600">{spec.specification || '-'}</td>
                      )}
                      {product.specs?.some(s => s.testResult) && (
                        <td className="py-1.5 px-2 font-semibold text-amber-700">{spec.testResult || '-'}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Action Footer */}
      <div className="p-6 pt-3 bg-white border-t border-slate-100 flex items-center gap-3">
        <a
          href={getWhatsAppLink(product.name, product.code)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Inquire on WhatsApp</span>
        </a>
        <button
          onClick={() => onOpenQuote(product.name)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-3.5 rounded-lg text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          <span>RFQ</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
