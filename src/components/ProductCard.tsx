import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Product, getProductWhatsAppUrl } from '../data/products';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [activeImage, setActiveImage] = useState<string>(product.mainImage);

  const priceWhatsAppUrl = getProductWhatsAppUrl(product, false);

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-[#E8E8EC] overflow-hidden hover:border-[#F52619]/40 hover:shadow-lg transition-all duration-300 group">
      <div>
        {/* Main Product Image Container (Click opens Lightbox Modal) */}
        <div 
          onClick={() => onSelect(product)}
          className="relative w-full aspect-4/3 bg-[#F7F8FA] overflow-hidden cursor-pointer"
          title="Click to view high-resolution gallery and specifications"
        >
          <img
            src={activeImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Quick Inspection Hint Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-[#24252B] shadow-md">
              <Eye className="w-3.5 h-3.5 text-[#F52619]" />
              <span>Inspect Details</span>
            </span>
          </div>

          {/* Category kicker */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#24252B] border border-[#E8E8EC] shadow-xs">
            {product.categoryLabel}
          </div>
        </div>

        {/* Thumbnail selector (if product has multiple images) */}
        {product.thumbnails.length > 1 && (
          <div className="flex items-center gap-1.5 px-4 pt-3">
            {product.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(thumb);
                }}
                className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                  activeImage === thumb
                    ? 'border-[#F52619] shadow-xs'
                    : 'border-[#E8E8EC] opacity-60 hover:opacity-100'
                }`}
                aria-label={`View thumbnail ${idx + 1}`}
              >
                <img
                  src={thumb}
                  alt={`${product.name} preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Text Content */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-[#737782]">
            <span>{product.availability}</span>
            <span className="font-semibold text-[#F52619]">{product.priceLabel}</span>
          </div>

          <h3 
            onClick={() => onSelect(product)}
            className="text-base font-bold text-[#24252B] hover:text-[#F52619] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#737782] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Action Footer (View Details vs WhatsApp Price) */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#F7F8FA] hover:bg-[#E8E8EC] text-[#24252B] text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>

        <a
          href={priceWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-xs"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
          <span>Get Price</span>
        </a>
      </div>
    </div>
  );
};
