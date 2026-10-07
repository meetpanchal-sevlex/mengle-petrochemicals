'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product, COMPANY_INFO } from '@/data/companyData';
import Image from 'next/image';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (productName: string) => void;
}

export default function ProductModal({ product, isOpen, onClose, onOpenQuote }: ProductModalProps) {
  if (!product) return null;

  const getWhatsAppLink = (productName: string, productCode: string) => {
    const msg = `Hello, I am interested in inquiring about ${productName} (Code: ${productCode}). Please share pricing and availability.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Black Oils': return 'bg-slate-900 text-slate-100 border-slate-700';
      case 'White Oils': return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'Base Oils': return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'Solvents': return 'bg-emerald-50 text-emerald-900 border-emerald-200';
      case 'Aromatic Petrochemicals': return 'bg-purple-50 text-purple-900 border-purple-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed z-50 inset-0 flex items-end sm:items-center justify-center pointer-events-none sm:p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white w-full h-[90vh] sm:h-auto sm:max-h-[90vh] sm:max-w-2xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-neutral-200/80 overflow-y-auto pointer-events-auto flex flex-col"
                  initial={{ y: 24, scale: 0.96, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 16, scale: 0.97, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                >
                  {/* Sticky Header with Close Button */}
                  <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
                    <Dialog.Title className="text-lg font-bold text-slate-900 pr-8 truncate">
                      {product.name}
                    </Dialog.Title>
                    <Dialog.Close className="p-2 -mr-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
                      <X className="w-5 h-5" />
                    </Dialog.Close>
                  </div>

                  <div className="p-5 flex-1">
                    {/* Hero Image & Basics */}
                    <div className="flex flex-col sm:flex-row gap-6 mb-8">
                      <div className="w-full sm:w-1/2 h-64 sm:h-full min-h-[240px] relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                        {product.image ? (
                          <Image src={product.image} alt={product.name} fill className="object-cover object-center" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-black text-slate-200 tracking-tighter">NO IMAGE</span>
                          </div>
                        )}
                      </div>
                      <div className="w-full sm:w-1/2 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${getCategoryColor(product.category)}`}>
                            {product.category}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                            {product.code}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-xl font-extrabold text-slate-900 leading-tight mb-2">
                            {product.name}
                          </h2>
                          <p className="text-sm font-medium text-amber-600 mb-3">{product.shortDesc}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Applications */}
                    {product.applications && product.applications.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
                          Key Industrial Applications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.applications.map((app, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700 leading-snug">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specifications */}
                    {product.specs && product.specs.length > 0 && (
                      <div className="mb-4">
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
                          Lab Specifications
                        </h3>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                          <table className="w-full text-left text-xs text-slate-600 border-collapse">
                            <thead className="bg-slate-50 text-slate-800 font-semibold border-b border-slate-200">
                              <tr>
                                <th className="py-2.5 px-3">Parameter</th>
                                <th className="py-2.5 px-3">Method</th>
                                <th className="py-2.5 px-3">Unit</th>
                                {product.specs.some(s => s.specification) && <th className="py-2.5 px-3">Spec</th>}
                                {product.specs.some(s => s.testResult) && <th className="py-2.5 px-3 text-amber-700">Result</th>}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {product.specs.map((spec, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                  <td className="py-2 px-3 font-medium text-slate-900">{spec.parameter}</td>
                                  <td className="py-2 px-3 font-mono text-[10px]">{spec.testMethod}</td>
                                  <td className="py-2 px-3">{spec.unit}</td>
                                  {spec.specification !== undefined && <td className="py-2 px-3">{spec.specification}</td>}
                                  {spec.testResult !== undefined && <td className="py-2 px-3 font-semibold text-amber-700">{spec.testResult}</td>}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sticky Footer Actions */}
                  <div className="sticky bottom-0 z-10 p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3 mt-auto">
                    <a
                      href={getWhatsAppLink(product.name, product.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenQuote(product.name);
                      }}
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}
