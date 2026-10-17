import React, { useState, useEffect } from 'react';
import { X, Check, Wrench, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '../data/products';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.mainImage);
      // Keyboard Escape listener
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [product, onClose]);

  if (!product) return null;

  const priceWhatsAppUrl = getProductWhatsAppUrl(product, false);
  const installWhatsAppUrl = getProductWhatsAppUrl(product, true);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#140C1D]/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E8E8EC] overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title & Close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8EC] bg-[#F7F8FA]">
          <div className="flex items-center gap-2 text-xs text-[#737782]">
            <span className="font-semibold text-[#24252B]">{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-medium">{product.availability}</span>
            <span aria-hidden="true">·</span>
            <span className="text-xs font-mono">{product.thumbnails.length} Photos</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#737782] hover:text-[#24252B] rounded-xl hover:bg-slate-200/60 transition-colors"
            aria-label="Close product details dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Gallery Section with 3 to 4 images */}
            <div className="space-y-3">
              {/* Main Expanded View */}
              <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#F7F8FA] border border-[#E8E8EC] relative flex items-center justify-center shadow-xs">
                <img
                  src={selectedImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* 3 to 4 High-Resolution Thumbnails Strip */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#737782] px-0.5">
                  <span className="font-medium">Product Gallery ({product.thumbnails.length} Views):</span>
                  <span>Click to expand view</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.thumbnails.map((thumb, idx) => {
                    const isCurrent = selectedImage === thumb;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(thumb)}
                        className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          isCurrent
                            ? 'border-[#F52619] ring-2 ring-[#F52619]/20 shadow-sm scale-[1.02]'
                            : 'border-[#E8E8EC] opacity-70 hover:opacity-100 hover:border-slate-400'
                        }`}
                        aria-label={`View product image ${idx + 1}`}
                      >
                        <img
                          src={thumb}
                          alt={`${product.name} view ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Equipment authenticity marker */}
              <div className="p-3 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] flex items-center gap-2 text-[11px] text-[#737782]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Genuine Hardware · Sealed Box with Manufacturer Warranty</span>
              </div>
            </div>

            {/* Product Meta & Description */}
            <div className="space-y-4">
              <div>
                <h2 id="product-modal-title" className="text-2xl font-bold text-[#24252B] tracking-tight">
                  {product.name}
                </h2>
                <div className="mt-2 inline-block px-3 py-1 bg-[#F7F8FA] rounded-md text-sm font-semibold text-[#F52619] border border-[#E8E8EC]">
                  {product.priceLabel}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#737782] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Technical Specifications Table */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#737782] mb-2.5">
                  Technical Specifications
                </div>
                <div className="bg-[#F7F8FA] rounded-xl p-3.5 border border-[#E8E8EC] space-y-1.5 text-xs">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-[#E8E8EC]/60 last:border-0">
                      <span className="text-[#737782] font-medium">{key}:</span>
                      <span className="text-[#24252B] font-semibold text-right ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Installation note for Thane */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-3">
            <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold">Thane On-Site Service:</span> Technicians available for doorstep delivery, physical mounting, structured Cat6 termination, and RF channel tuning across all sectors of Thane.
            </div>
          </div>
        </div>

        {/* Footer CTAs (Direct WhatsApp Actions - 100% form-free) */}
        <div className="p-5 border-t border-[#E8E8EC] bg-[#F7F8FA] flex flex-col sm:flex-row gap-3 justify-end items-center">
          <a
            href={priceWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#24252B] hover:bg-black text-white text-xs font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Enquire Product Price</span>
          </a>

          {product.installationAvailable && (
            <a
              href={installWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Get Price + Installation Quote</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
