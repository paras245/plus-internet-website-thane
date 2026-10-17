import React from 'react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { createWhatsAppUrl } from '../data/company';
import { CheckCircle2, MessageSquare, Wrench, Shield, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const ServicesPage: React.FC = () => {
  useSEO({
    title: "Broadband Setup, Wi-Fi Optimization & CCTV Installation in Thane",
    description: "Professional networking services across Thane: Wi-Fi dead-zone tuning, router configuration, office LAN cabling, CCTV installation, and network maintenance.",
    keywords: "Wi-Fi setup Thane, CCTV installation Thane, office LAN cabling Thane, router configuration Thane, network troubleshooting Thane"
  });

  const generalServiceWhatsApp = createWhatsAppUrl(
    "Hi Plus Internet, I need installation and networking service assistance for my property in Thane."
  );

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Technical Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Installation & Networking Services in Thane
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            Professional on-site technical solutions for residential flats, housing societies, retail showrooms, and office spaces. All installations are tested for speed, stability, and signal coverage before sign-off.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Practical 4-Step Installation Workflow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24252B] tracking-tight">
              Our On-Site Service Workflow
            </h2>
            <p className="text-xs sm:text-sm text-[#737782]">
              Straightforward, transparent execution with no hidden surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-2">
              <div className="text-xs font-mono font-bold text-[#F52619]">01. CONSULTATION</div>
              <h3 className="text-sm font-bold text-[#24252B]">Site & Needs Audit</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                We discuss your floor plan, device density, and dead-zone issues over WhatsApp or a quick site visit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-2">
              <div className="text-xs font-mono font-bold text-[#F52619]">02. CLEAR QUOTE</div>
              <h3 className="text-sm font-bold text-[#24252B]">Itemized Estimate</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Clear hardware specifications, cable length estimates, and labor charges agreed upon before work begins.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-2">
              <div className="text-xs font-mono font-bold text-[#F52619]">03. CLEAN DEPLOYMENT</div>
              <h3 className="text-sm font-bold text-[#24252B]">Concealed Installation</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Concealed wiring, neat raceways, rack dressing, and optimal antenna orientation for maximum coverage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-2">
              <div className="text-xs font-mono font-bold text-[#F52619]">04. HANDOVER & TEST</div>
              <h3 className="text-sm font-bold text-[#24252B]">Speed & Signal Check</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Multi-corner speed tests, camera stream verification on your phone, and customer walkthrough before signoff.
              </p>
            </div>

          </div>

          {/* Quick Direct CTA */}
          <div className="text-center pt-4">
            <a
              href={generalServiceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F52619] hover:bg-[#D91F17] text-white font-semibold text-xs py-3.5 px-6 rounded-xl shadow-sm hover-red-glow transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book a Service Enquiry on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
