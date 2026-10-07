'use client';

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Phone, Building2, MapPin, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '@/data/companyData';
import { cn } from '@/lib/utils';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

const inputClass = cn(
  "w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5",
  "text-sm text-slate-900 placeholder:text-slate-400",
  "focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-400",
  "transition-all duration-150 font-medium"
);

export default function QuoteModal({ isOpen, onClose, preselectedProduct }: QuoteModalProps) {
  const [product, setProduct] = useState(preselectedProduct || PRODUCTS[0]?.name || '');
  const [quantity, setQuantity] = useState('10 KL (Tanker Load)');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `*New RFQ — M. Engle Petrochemicals*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📦 *Product:* ${product}\n` +
      `📊 *Volume:* ${quantity}\n` +
      `🏢 *Company:* ${companyName || 'Not specified'}\n` +
      `📍 *Delivery Location:* ${location || 'Not specified'}\n` +
      `📞 *Contact:* ${contactNumber || 'Not specified'}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Source: menglepetro.com`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    onClose();
  };

  const handleSubmitEmail = () => {
    const subject = encodeURIComponent(`RFQ: ${product} — ${companyName || 'Industrial Inquiry'}`);
    const body = encodeURIComponent(
      `Dear M. Engle Petrochemicals Team,\n\n` +
      `Product: ${product}\nVolume: ${quantity}\nCompany: ${companyName}\n` +
      `Delivery Location: ${location}\nContact Phone: ${contactNumber}\nNotes: ${notes}\n\nThank you.`
    );
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            {/* Panel */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed z-50 inset-0 flex items-center justify-center p-4 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-neutral-200/80 overflow-y-auto pointer-events-auto max-h-[90vh]"
                  initial={{ y: 24, scale: 0.96, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 16, scale: 0.97, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                >
                  {/* Header */}
                  <div className="bg-[#0B1120] text-white p-7 pb-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div
                          className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-1"
                          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        >
                          M. Engle Petrochemicals — Commercial Desk
                        </div>
                        <Dialog.Title
                          className="text-2xl font-bold tracking-tight"
                          style={{ fontFamily: 'var(--font-sora)' }}
                        >
                          Request a Quotation
                        </Dialog.Title>
                        <Dialog.Description
                          className="text-slate-400 text-[13px] mt-1.5 leading-relaxed"
                          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                        >
                          Direct factory pricing & dispatch terms across Gujarat, MP & Pan-India.
                        </Dialog.Description>
                      </div>
                      <Dialog.Close
                        onClick={onClose}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer mt-0.5"
                      >
                        <X className="w-4.5 h-4.5" />
                      </Dialog.Close>
                    </div>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmitWhatsApp}
                    className="p-7 space-y-5"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    {/* Product Select */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                        Product
                      </label>
                      <div className="relative">
                        <select
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                          className={cn(inputClass, "appearance-none pr-9 cursor-pointer")}
                          required
                        >
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name} ({p.code})
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Quantity */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                          Volume Required
                        </label>
                        <div className="relative">
                          <select
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className={cn(inputClass, "appearance-none pr-9 cursor-pointer")}
                          >
                            <option>5 KL / Small Tanker</option>
                            <option>10 KL (Tanker Load)</option>
                            <option>20 KL (Bulk Tanker)</option>
                            <option>30+ KL (Contract Supply)</option>
                            <option>Barrel / Drum Lot</option>
                            <option>Sample for Lab Test</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                        </div>
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                          Delivery Location
                        </label>
                        <div className="relative">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="City, State"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={cn(inputClass, "pl-8")}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                          Company / Firm
                        </label>
                        <div className="relative">
                          <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Your Company"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className={cn(inputClass, "pl-8")}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className={cn(inputClass, "pl-8")}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                        Specifications / Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Flash point min 66°C, urgent delivery required..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-1 flex flex-col sm:flex-row gap-3">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Send via WhatsApp
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={handleSubmitEmail}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-neutral-100 hover:bg-neutral-200 text-slate-800 font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-slate-500" />
                        Email Inquiry
                      </motion.button>
                    </div>

                    <p className="text-[10px] text-center text-slate-400 leading-relaxed">
                      PESO Authorization: A/P/CB/MP/16/167 • Direct response within 1 business hour.
                    </p>
                  </form>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
