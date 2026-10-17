import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { BrandLogo, BrandKey } from './brand-icons/BrandLogos';

export interface BrandItem {
  name: string;
  sub: string;
  icon: string;
  badge: string;
  brandKey: BrandKey;
}

export const BRAND_ITEMS: BrandItem[] = [
  {
    name: "TP-Link",
    sub: "Wi-Fi 6 & Deco Mesh",
    icon: "/brands/tp-link.svg",
    badge: "Routers & Mesh",
    brandKey: "tp-link",
  },
  {
    name: "D-Link",
    sub: "Switches & Converters",
    icon: "/brands/d-link.svg",
    badge: "Gigabit Switches",
    brandKey: "d-link",
  },
  {
    name: "NETGEAR",
    sub: "PoE & ProSafe",
    icon: "/brands/netgear.svg",
    badge: "PoE Switching",
    brandKey: "netgear",
  },
  {
    name: "HIKVISION",
    sub: "HD CCTV & NVRs",
    icon: "/brands/hikvision.svg",
    badge: "Surveillance",
    brandKey: "hikvision",
  },
  {
    name: "CP PLUS",
    sub: "Security Cameras",
    icon: "/brands/cp-plus.svg",
    badge: "CCTV Hardware",
    brandKey: "cp-plus",
  },
  {
    name: "Schneider",
    sub: "Structured Cabling",
    icon: "/brands/schneider.svg",
    badge: "Cat6 Cables",
    brandKey: "schneider",
  },
  {
    name: "Cisco",
    sub: "Enterprise Routing",
    icon: "/brands/cisco.svg",
    badge: "Infrastructure",
    brandKey: "cisco",
  },
];

export const BrandPartnersStrip: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8F9FA] border-y border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F52619] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Supported Hardware Brands & Ecosystem</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#24252B] tracking-tight">
              Leading Networking & Security Equipment We Install in Thane
            </h2>
          </div>

          <Link
            to="/partners"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F52619] hover:underline uppercase tracking-wider self-start md:self-auto"
          >
            <span>View All Brands & Partners</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Brands Grid with High Quality Vector Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5">
          {BRAND_ITEMS.map((brand, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-2xs hover:shadow-md hover:border-[#F52619]/40 transition-all flex flex-col items-center justify-between text-center group min-h-[110px]"
            >
              {/* Brand Logo Container */}
              <div className="h-10 w-full flex items-center justify-center">
                <BrandLogo
                  brandKey={brand.brandKey}
                  src={brand.icon}
                  alt={`${brand.name} company logo`}
                  className="h-7 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Subtext and Badge */}
              <div className="pt-2 w-full text-center">
                <span className="text-[10px] font-semibold text-[#737782] bg-[#F7F8FA] px-2 py-0.5 rounded-full inline-block">
                  {brand.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-[#737782] text-center sm:text-left">
          Trademarks belong to their respective owners. Mention of TP-Link, D-Link, Netgear, Hikvision, CP Plus, Schneider & Cisco denotes technical compatibility and installation capability in Thane.
        </p>

      </div>
    </section>
  );
};
