import React from 'react';
import { Shield, Target, Users, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useSEO } from '../hooks/useSEO';

export const AboutPage: React.FC = () => {
  useSEO({
    title: "About Plus Internet - Reliable Internet & Networking in Thane",
    description: "Learn about Plus Internet, your dedicated local connectivity partner serving residential and commercial properties across Thane, Maharashtra.",
    keywords: "about Plus Internet, ISP Thane company, networking experts Thane, local broadband provider Thane"
  });

  const whatsappUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to learn more about your services and connectivity solutions in Thane."
  );

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            About Plus Internet
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Local Networking & Broadband Specialist in Thane
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            Plus Internet was founded to bridge the gap between high-speed internet delivery, reliable networking equipment supply, and clean, professional on-site installation across Thane, Maharashtra.
          </p>
        </div>

        {/* Story & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24252B] tracking-tight">
              Practical Connectivity Tailored for Modern Spaces
            </h2>
            <div className="space-y-4 text-sm text-[#737782] leading-relaxed">
              <p>
                Modern apartments, high-rises, and offices in Thane frequently struggle with inconsistent Wi-Fi signals caused by dense reinforced-concrete walls, radio congestion from neighboring routers, and substandard internal wiring.
              </p>
              <p>
                At Plus Internet, we treat connectivity as a complete system. Rather than just dropping a basic router and leaving you with buffering in the bedroom or lag in the home office, we analyze your space, advise on the right broadband tier, install high-grade gigabit hardware, and execute clean structured cabling.
              </p>
              <p>
                From single-room WFH desks to multi-floor co-working spaces and housing society CCTV perimeters, our goal is dependable, stable, and hassle-free connectivity.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-1">
                <div className="text-xs font-bold text-[#24252B]">Clarity & Honesty</div>
                <p className="text-xs text-[#737782]">No misleading uptime claims. Realistic speeds and itemized quotes upfront.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-1">
                <div className="text-xs font-bold text-[#24252B]">Practical Engineering</div>
                <p className="text-xs text-[#737782]">Solid Cat6 copper wiring, proper antenna placement, and clean cable runs.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-1">
                <div className="text-xs font-bold text-[#24252B]">Direct Communication</div>
                <p className="text-xs text-[#737782]">Direct WhatsApp dialogue with local technicians who know Thane neighborhoods.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-1">
                <div className="text-xs font-bold text-[#24252B]">Turnkey Solutions</div>
                <p className="text-xs text-[#737782]">Internet connection assistance, hardware sales, and installation under one roof.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8E8EC] aspect-4/3 bg-[#F7F8FA]">
              <img
                src="/src/assets/images/hero_networking_setup_1792171252724.jpg"
                alt="Plus Internet modern connectivity environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Who We Serve */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24252B]">
              Who We Serve Across Thane
            </h2>
            <p className="text-xs sm:text-sm text-[#737782]">
              Solutions customized to the distinct requirements of each environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
              <h3 className="text-base font-bold text-[#24252B]">Residential Flats & Homes</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                High-speed fiber connectivity, whole-home mesh Wi-Fi, and lag-free 4K streaming for 1BHK, 2BHK, 3BHK, and duplex homes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
              <h3 className="text-base font-bold text-[#24252B]">Corporate & Small Offices</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Workstation LAN cabling, server rack setups, managed PoE switches, and secure isolated guest Wi-Fi networks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
              <h3 className="text-base font-bold text-[#24252B]">Retail Outlets & Clinics</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                High-reliability internet for POS billing terminals, CCTV security camera feeds, and customer Wi-Fi hotspots.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
              <h3 className="text-base font-bold text-[#24252B]">Housing Societies</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Compound CCTV surveillance, perimeter intercom wiring, and organized riser cable tidy-up for building wings.
              </p>
            </div>

          </div>
        </div>

        {/* Local Thane Presence Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#140C1D] to-[#24252B] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F52619]">
              <MapPin className="w-4 h-4" />
              <span>Shop No.1, near Makhmali Talav, Neelkanth Society, Ganeshwadi, Thane West</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Physical Experience Store & Prompt On-Site Service
            </h3>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl">
              Visit our walk-in shop near Makhmali Talav in Thane West for hands-on router speed demos, instant connection registrations, or request prompt technician visits to your society.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs py-3.5 px-6 rounded-xl shadow-lg transition-all whitespace-nowrap shrink-0 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

        {/* Company Leadership & Structure Placeholder (Data-driven, clearly identified placeholder) */}
        <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] text-xs text-[#737782] space-y-2">
          <div className="font-bold text-[#24252B]">Business Profile & Information Notice:</div>
          <p className="leading-relaxed">
            Plus Internet operates out of Thane, Maharashtra, specializing in local internet service assistance, networking equipment distribution, and physical network deployments. Exact registration numbers, founder profile, and certification credentials remain editable placeholders and will be updated as official public disclosures are verified.
          </p>
        </div>

      </div>
    </div>
  );
};
