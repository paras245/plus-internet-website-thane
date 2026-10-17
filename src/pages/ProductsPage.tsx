import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Info } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, Product, ProductCategory } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { useSEO } from '../hooks/useSEO';

export const ProductsPage: React.FC = () => {
  useSEO({
    title: "Networking Equipment, Wi-Fi 6 Routers & CCTV Cameras in Thane",
    description: "Buy Wi-Fi 6 gigabit routers, mesh systems, PoE network switches, CCTV security cameras, and Cat6 cabling in Thane with on-site installation options.",
    keywords: "Wi-Fi router buy Thane, PoE switch Thane, CCTV camera installation Thane, Cat6 cable Thane, server rack Thane"
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = (searchParams.get('category') as ProductCategory) || 'all';

  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(initialCat);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCategoryChange = (catId: ProductCategory | 'all') => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Hardware Store & Supply
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Networking Equipment & Surveillance
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            Genuine hardware supplied and configured for Thane residences, retail establishments, and corporate offices. Click any product to inspect specifications and request quotation directly via WhatsApp.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#E8E8EC]">
          
          {/* Category Tabs (Segmented Buttons - Accessible) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F8FA] rounded-xl border border-[#E8E8EC] w-full md:w-auto">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#24252B] shadow-xs'
                    : 'text-[#737782] hover:text-[#24252B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737782]" />
            <input
              type="text"
              placeholder="Search routers, switches, CCTV..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F7F8FA] rounded-xl border border-[#E8E8EC] text-xs text-[#24252B] focus:bg-white focus:outline-none focus:border-[#F52619] transition-all"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-3 bg-[#F7F8FA] rounded-2xl border border-[#E8E8EC]">
            <p className="text-sm font-semibold text-[#24252B]">
              No products found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-bold text-[#F52619] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pricing Transparency Note */}
        <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] text-xs text-[#737782] space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-[#24252B]">
            <Info className="w-4 h-4 text-[#F52619]" />
            <span>Hardware Sourcing & Warranty Standards</span>
          </div>
          <p className="leading-relaxed">
            All prices are provided on request to reflect real-time local distributor rates, quantity discounts, and optional on-site installation bundling in Thane. Equipment is supplied brand new with respective manufacturer warranty cards.
          </p>
        </div>

      </div>

      {/* Modal Dialog */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
