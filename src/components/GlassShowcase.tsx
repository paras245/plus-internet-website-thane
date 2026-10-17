import React, { useState } from 'react';
import { Wifi, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const GlassShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wifi' | 'cctv' | 'switching'>('wifi');

  const showcaseData = {
    wifi: {
      title: "Gigabit Wi-Fi 6 & Multi-Node Mesh",
      subtitle: "Ultra-low latency wireless architecture for modern Thane homes and executive offices.",
      image: "/images/product_wifi_router_1792171253044.jpg",
      metrics: [
        { label: "Target Coverage", value: "Up to 3,500 sq. ft." },
        { label: "Bandwidth Class", value: "Gigabit OFDMA" },
        { label: "Concurrent Clients", value: "60+ Devices" }
      ],
      whatsappMsg: "Hi Plus Internet, I want to inquire about Wi-Fi 6 router and mesh deployment in Thane."
    },
    cctv: {
      title: "Commercial IP Surveillance Systems",
      subtitle: "High-definition PoE dome and bullet cameras with night vision and remote phone monitoring.",
      image: "/images/product_cctv_camera_1792171253771.jpg",
      metrics: [
        { label: "Night Vision", value: "Smart IR 30m" },
        { label: "Resolution", value: "Full HD / 4MP" },
        { label: "Enclosure", value: "IP67 Weatherproof" }
      ],
      whatsappMsg: "Hi Plus Internet, I want to inquire about CCTV camera surveillance setup for my premises in Thane."
    },
    switching: {
      title: "High-Density PoE+ Network Switching",
      subtitle: "Reliable distribution backbone for access points, security cameras, and workstation LANs.",
      image: "/images/product_network_switch_1792171253982.jpg",
      metrics: [
        { label: "Switching Fabric", value: "52 Gbps" },
        { label: "Power over Ethernet", value: "802.3at PoE+" },
        { label: "Rack Standard", value: "19-inch 1U" }
      ],
      whatsappMsg: "Hi Plus Internet, I am interested in network switch installation and cabling in Thane."
    }
  };

  const current = showcaseData[activeTab];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F7F8FA] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
              Engineering Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
              Interactive Hardware Showcase
            </h2>
            <p className="text-sm text-[#737782] max-w-xl">
              Preview our core networking hardware classes, purpose-configured for clean installation and maximum stability.
            </p>
          </div>

          {/* Interactive Segmented Tabs (Functional Buttons as per Frontend Constitution) */}
          <div className="inline-flex p-1 bg-white border border-[#E8E8EC] rounded-xl shadow-xs shrink-0">
            <button
              onClick={() => setActiveTab('wifi')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'wifi'
                  ? 'bg-[#24252B] text-white shadow-xs'
                  : 'text-[#737782] hover:text-[#24252B]'
              }`}
            >
              <Wifi className="w-3.5 h-3.5" />
              <span>Wi-Fi 6 Routers</span>
            </button>
            <button
              onClick={() => setActiveTab('cctv')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'cctv'
                  ? 'bg-[#24252B] text-white shadow-xs'
                  : 'text-[#737782] hover:text-[#24252B]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CCTV Security</span>
            </button>
            <button
              onClick={() => setActiveTab('switching')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'switching'
                  ? 'bg-[#24252B] text-white shadow-xs'
                  : 'text-[#737782] hover:text-[#24252B]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>PoE Switches</span>
            </button>
          </div>
        </div>

        {/* Refined Liquid-Glass Feature Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E8E8EC] bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[480px] bg-slate-900 overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
              
              {/* Floating glass badge on top of image */}
              <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-xl text-xs font-semibold text-[#24252B] shadow-md">
                Verified Hardware Class
              </div>
            </div>

            {/* Content & Specs Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-white/95 backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#F52619] tracking-wider uppercase">
                    Hardware Specification
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-[#24252B] tracking-tight">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#737782] leading-relaxed">
                    {current.subtitle}
                  </p>
                </div>

                {/* Key Technical Metric Tiles (Liquid-Glass style) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 pt-2">
                  {current.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] flex items-center justify-between"
                    >
                      <span className="text-xs text-[#737782] font-medium">{metric.label}:</span>
                      <span className="text-xs font-bold text-[#24252B] font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Actions */}
              <div className="pt-8 border-t border-[#E8E8EC] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={createWhatsAppUrl(current.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-3 px-5 rounded-xl shadow-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7F8FA] hover:bg-[#E8E8EC] text-[#24252B] text-xs font-semibold py-3 px-5 rounded-xl transition-colors"
                >
                  <span>Explore Catalog</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
