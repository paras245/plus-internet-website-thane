import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Gauge
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { INTERNET_PLANS } from '../data/plans';
import { PRODUCTS, Product } from '../data/products';
import { SERVICES } from '../data/services';
import { InternetPlanCard } from '../components/InternetPlanCard';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { ServiceCard } from '../components/ServiceCard';
import { GlassShowcase } from '../components/GlassShowcase';
import { FullHeroHathway } from '../components/FullHeroHathway';
import { HeroCarousel } from '../components/HeroCarousel';
import { PlanSpeedMeter } from '../components/PlanSpeedMeter';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { HomeFAQ } from '../components/HomeFAQ';
import { ShopLocationMap } from '../components/ShopLocationMap';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useSEO } from '../hooks/useSEO';

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // SEO configuration for Home Page
  useSEO({
    title: "High-Speed Broadband & Networking Services in Thane",
    description: "Plus Internet delivers optical fiber internet plans, Wi-Fi 6 router sales, PoE network switches, CCTV surveillance installation, and structured cabling in Thane, Maharashtra.",
    keywords: "Plus Internet Thane, broadband Thane, fiber internet Thane, Wi-Fi router Thane, CCTV installation Thane, office networking Ghodbunder road, Naupada ISP"
  });

  const heroWhatsAppUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to inquire about broadband internet connection and networking equipment in Thane."
  );

  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <div className="w-full bg-white">
      
      {/* 1. FULL-WIDTH HERO CAROUSEL WITH TRANSPARENT OVERLAY & CLASSIC LIGHT TRUST STRIP */}
      <FullHeroHathway />


      {/* 2. INTERACTIVE PLAN SPEED METER SECTION (Requested Meter Widget) */}
      <section id="speed-meter-section" className="py-20 bg-gradient-to-b from-white via-[#F7F8FA] to-white relative overflow-hidden border-b border-[#E8E8EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8EC] shadow-xs text-xs font-semibold text-[#24252B]">
                <Gauge className="w-4 h-4 text-[#F52619]" />
                <span>Speed & Pricing Meter</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24252B] tracking-tight leading-tight">
                Select Your Speed.{' '}
                <span className="text-[#F52619] block sm:inline">Check Value Plans.</span>
              </h2>

              <p className="text-base text-[#737782] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience symmetrical high-speed fiber internet designed for modern Thane households and offices. Tap on the speed meter to see our recommended annual package, speed capabilities, and instant WhatsApp booking.
              </p>

              {/* Bullet Features */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] space-y-1 shadow-xs">
                  <div className="text-xs font-bold text-[#24252B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Equal Upload & Download</span>
                  </div>
                  <p className="text-[11px] text-[#737782]">Full optical symmetric pipe with zero choking on video calls.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] space-y-1 shadow-xs">
                  <div className="text-xs font-bold text-[#24252B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free Router Support</span>
                  </div>
                  <p className="text-[11px] text-[#737782]">Dual-band 5 GHz gigabit equipment options with select plans.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] space-y-1 shadow-xs">
                  <div className="text-xs font-bold text-[#24252B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero Lag Gaming</span>
                  </div>
                  <p className="text-[11px] text-[#737782]">Direct local peering routing minimizing jitter and packet loss.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] space-y-1 shadow-xs">
                  <div className="text-xs font-bold text-[#24252B] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Local Thane Team</span>
                  </div>
                  <p className="text-[11px] text-[#737782]">Quick 24-48 hr doorstep installation and society approvals.</p>
                </div>
              </div>

              {/* Link to all plans */}
              <div className="pt-2">
                <Link
                  to="/plans"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F52619] hover:underline uppercase tracking-wider"
                >
                  <span>Compare All Broadband Plans in Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Interactive Plan Speed Meter (Gauge widget) */}
            <div className="lg:col-span-6 flex justify-center">
              <PlanSpeedMeter />
            </div>

          </div>

        </div>
      </section>


      {/* 3. BROADBAND INTERNET PLANS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
              High-Speed Fiber Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
              Transparent Broadband For Thane
            </h2>
            <p className="text-sm sm:text-base text-[#737782]">
              Select a plan suited to your device count and bandwidth needs. All rates are indicative placeholders—inquire on WhatsApp for current building feasibility and promo offers.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNET_PLANS.map((plan) => (
              <InternetPlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Bottom Feasibility Note */}
          <div className="mt-10 p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737782]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Final plan availability, installation feasibility, and router options must be confirmed by the business based on your society fiber duct access.
              </span>
            </div>
            <Link
              to="/plans"
              className="font-semibold text-[#F52619] hover:underline whitespace-nowrap"
            >
              Compare All Details →
            </Link>
          </div>

        </div>
      </section>


      {/* 4. INTERACTIVE HARDWARE SHOWCASE */}
      <GlassShowcase />


      {/* 5. FEATURED PRODUCTS CATALOG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
                Hardware Supply
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
                Networking Equipment & CCTV
              </h2>
              <p className="text-sm text-[#737782] max-w-xl">
                We supply genuine Wi-Fi routers, PoE switches, surveillance cameras, and Cat6 cabling with optional on-site configuration.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F52619] hover:underline uppercase tracking-wider"
            >
              <span>View Full Products Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>

        </div>
      </section>


      {/* 6. CORE SERVICES & INSTALLATION */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
              Professional Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
              Installation & Infrastructure Setup
            </h2>
            <p className="text-sm sm:text-base text-[#737782]">
              From apartment Wi-Fi dead-zone tuning to commercial office LAN cabling and society CCTV setups in Thane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#24252B] hover:bg-black text-white text-xs font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              <span>View All 10 Services & Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* 7. WHY CHOOSE PLUS INTERNET */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
                Local Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
                Why Enquire With Plus Internet?
              </h2>
              <p className="text-sm text-[#737782] leading-relaxed">
                Finding the right combination of broadband speeds, Wi-Fi hardware, and professional cabling can be confusing. We provide practical, tailored assistance right here in Thane without the hassle of generic call centers.
              </p>

              <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-[#24252B]">
                  <Sparkles className="w-4 h-4 text-[#F52619]" />
                  <span>Direct WhatsApp Assistance</span>
                </div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  No frustrating phone IVRs or chatbot loops. Talk directly to a local networking specialist who understands Thane apartment layouts and commercial connectivity.
                </p>
                <a
                  href={createWhatsAppUrl("Hi Plus Internet, I would like to consult on networking options for my home/office in Thane.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Consult via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Value Proposition Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-sm font-bold text-[#24252B]">Tailored Solutions</div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  Every home and office has different wall thicknesses and device counts. We recommend hardware suited to your real layout.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-sm font-bold text-[#24252B]">Internet + Gear in One Place</div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  Get your internet line guidance, router hardware, and structured cabling handled under a single coordinated workflow.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-sm font-bold text-[#24252B]">Hardware Selection Guidance</div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  Avoid buying mismatched routers or under-powered switches. We explain exact port speeds and wireless capabilities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-sm font-bold text-[#24252B]">Professional On-Site Installation</div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  Clean wall mounting, neat cable clipping, and device password configuration by trained technicians.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-sm font-bold text-[#24252B]">Homes & Commercial Spaces</div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  Experience with residential flats, co-working desks, retail shops, clinics, and standalone commercial premises.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-sm font-bold text-[#24252B]">Clear Quotations Before Work</div>
                <p className="text-xs text-[#737782] leading-relaxed">
                  Upfront clarity on hardware costs and installation labor charges before any installation starts.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. WHAT OUR CUSTOMERS SAY (Testimonials & Feedback) */}
      <CustomerTestimonials />

      {/* 9. COLLAPSIBLE ACCORDION FAQ SECTION */}
      <HomeFAQ />

      {/* 10. SHOP LOCATION, INTERACTIVE MAP & DIRECTIONS GUIDE */}
      <ShopLocationMap />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
};
