import React from 'react';
import { PARTNERS_DATA } from '../data/partners';
import { createWhatsAppUrl } from '../data/company';
import { Handshake, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BrandLogo, BrandKey } from '../components/brand-icons/BrandLogos';
import { useSEO } from '../hooks/useSEO';

export const PartnersPage: React.FC = () => {
  useSEO({
    title: "Hardware Brands & Vendor Ecosystem | Plus Internet Thane",
    description: "Explore supported networking equipment brands (TP-Link, D-Link, Netgear, Hikvision, CP Plus, Schneider), upstream fiber carrier feasibility, and B2B contractor collaboration with Plus Internet in Thane.",
    keywords: "networking partners Thane, TP-Link Thane, D-Link Thane, Netgear Thane, Hikvision Thane, CP Plus Thane, IT hardware supplier Thane, fiber carrier Thane"
  });

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to discuss a potential business partnership or equipment supply collaboration in Thane."
  );

  const featuredBrands: { name: string; role: string; icon: string; brandKey: BrandKey }[] = [
    { name: "TP-Link", role: "Wi-Fi 6 & Mesh", icon: "/brands/tp-link.svg", brandKey: "tp-link" },
    { name: "D-Link", role: "Switches & Routers", icon: "/brands/d-link.svg", brandKey: "d-link" },
    { name: "NETGEAR", role: "PoE & Managed", icon: "/brands/netgear.svg", brandKey: "netgear" },
    { name: "HIKVISION", role: "CCTV Surveillance", icon: "/brands/hikvision.svg", brandKey: "hikvision" },
    { name: "CP PLUS", role: "Security Cameras", icon: "/brands/cp-plus.svg", brandKey: "cp-plus" },
    { name: "Schneider", role: "Structured Cabling", icon: "/brands/schneider.svg", brandKey: "schneider" },
    { name: "Cisco", role: "Enterprise Routing", icon: "/brands/cisco.svg", brandKey: "cisco" },
  ];

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Ecosystem & Collaboration
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Hardware Brands & Industry Partners
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            We work with leading industry equipment standards and collaborate with local contractors, suppliers, and residential communities across Thane.
          </p>
        </div>

        {/* Quick Brands Showcase Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8E8EC] pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F52619] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Equipment Brands</span>
              </div>
              <h2 className="text-lg font-bold text-[#24252B]">
                Trusted Hardware Manufacturers We Configure & Deploy
              </h2>
            </div>
            <span className="text-xs text-[#737782]">
              Genuine hardware sourced for Thane homes and offices
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
            {featuredBrands.map((brand, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white border border-[#E8E8EC] shadow-2xs hover:shadow-sm hover:border-[#F52619]/40 transition-all flex flex-col items-center justify-center text-center group"
              >
                <div className="h-10 w-full flex items-center justify-center">
                  <BrandLogo
                    brandKey={brand.brandKey}
                    src={brand.icon}
                    alt={`${brand.name} company logo`}
                    className="h-7 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-2 text-[10px] font-semibold text-[#737782] bg-[#F7F8FA] px-2 py-0.5 rounded-full">
                  {brand.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners & Hardware Tiers */}
        <div className="space-y-12">
          {PARTNERS_DATA.map((tier) => (
            <div key={tier.id} className="p-8 sm:p-10 rounded-3xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F52619] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{tier.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#737782] max-w-2xl leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Items Grid with Brand Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                {tier.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-3.5 shadow-xs hover:border-[#F52619]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Brand Logo Container */}
                      <div className="h-12 w-full px-3 py-1.5 rounded-xl bg-[#F8F9FB] border border-[#E8E8EC]/80 flex items-center justify-start mb-3">
                        <BrandLogo
                          brandKey={item.brandKey}
                          src={item.iconPath}
                          alt={`${item.name} company icon`}
                          className="h-8 max-w-[145px] object-contain"
                        />
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-bold text-[#24252B] leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-[10px] font-semibold text-[#737782] bg-[#F7F8FA] px-2 py-0.5 rounded whitespace-nowrap shrink-0">
                          {item.type}
                        </span>
                      </div>

                      <p className="text-xs text-[#737782] leading-relaxed mt-2">
                        {item.note}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0F1F3] text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Partnership WhatsApp Conversion Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140C1D] to-[#24252B] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F52619] uppercase tracking-wider">
              <Handshake className="w-4 h-4" />
              <span>B2B & Vendor Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Interested in Partnering With Plus Internet?
            </h2>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl">
              Are you an electrical contractor, interior designer, IT hardware distributor, or housing society secretary in Thane? Let's discuss working together.
            </p>
          </div>

          <a
            href={partnerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs py-3.5 px-6 rounded-xl shadow-lg transition-all whitespace-nowrap shrink-0 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat About Partnership</span>
          </a>
        </div>

        {/* Brand Representation Legal Notice */}
        <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] text-xs text-[#737782] leading-relaxed">
          <span className="font-bold text-[#24252B]">Notice of Brand Non-Affiliation:</span> All third-party hardware trademarks, product names, and brand identifiers (such as TP-Link, D-Link, Netgear, Hikvision, CP Plus, Schneider Electric, Cisco) remain the intellectual property of their respective owners. Mention of these brands indicates technical compatibility, supply capability, or installation expertise, and does not imply official authorization, direct dealership status, or proprietary brand affiliation unless explicitly stated.
        </div>

      </div>
    </div>
  );
};
