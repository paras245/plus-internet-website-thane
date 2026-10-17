import React from 'react';
import { PARTNERS_DATA } from '../data/partners';
import { createWhatsAppUrl } from '../data/company';
import { Handshake, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useSEO } from '../hooks/useSEO';

export const PartnersPage: React.FC = () => {
  useSEO({
    title: "Hardware Brands & Vendor Ecosystem | Plus Internet Thane",
    description: "Explore supported networking equipment brands, upstream fiber carrier feasibility, and B2B contractor collaboration with Plus Internet in Thane.",
    keywords: "networking partners Thane, router brands Thane, IT hardware supplier Thane, fiber carrier Thane"
  });

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to discuss a potential business partnership or equipment supply collaboration in Thane."
  );

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

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {tier.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-2 shadow-xs hover:border-[#F52619]/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-[#24252B]">{item.name}</h3>
                      <span className="text-[10px] font-semibold text-[#737782] bg-[#F7F8FA] px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                    </div>

                    <p className="text-xs text-[#737782] leading-relaxed">
                      {item.note}
                    </p>

                    <div className="pt-2 text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140C1D] to-[#24252B] text-white flex flex-col md:flex-row items-center justify-between gap-8">
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
          <span className="font-bold text-[#24252B]">Notice of Brand Non-Affiliation:</span> All third-party hardware trademarks, product names, and brand identifiers (such as TP-Link, D-Link, Netgear, Hikvision, CP Plus) remain the intellectual property of their respective owners. Mention of these brands indicates technical compatibility, supply capability, or installation expertise, and does not imply official authorization, direct dealership status, or proprietary brand affiliation unless explicitly stated.
        </div>

      </div>
    </div>
  );
};
