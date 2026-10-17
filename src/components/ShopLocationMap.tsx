import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Wifi, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ShopLocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // 100% Free Google Maps Embed - Zero API key required, zero quota limits, no billing needed
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'SHOP NO.1, near MAKHMALI TALAV, Neelkanth Society, Ganeshwadi, Thane West, Maharashtra 400601'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="shop-location" className="w-full py-16 sm:py-20 bg-gradient-to-b from-white via-[#F7F8FA] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F52619]/10 text-[#F52619] text-xs font-bold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store & Service Center · Makhmali Talav, Thane</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Visit Our Thane Experience Store & Service Hub
          </h2>
          <p className="text-base text-[#737782] leading-relaxed">
            Drop by in person for hands-on Wi-Fi 6 router speed testing, on-the-spot fiber connection booking, 
            hardware pickup, and friendly face-to-face technical advice from our local Thane team.
          </p>
        </div>

        {/* Main Grid: Interactive Map + Location Command Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top (Lg: 7 cols): Interactive Map */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-[#E8E8EC] shadow-md bg-slate-100">
              
              {/* Responsive interactive embed - 100% Free, No API key needed */}
              <iframe
                title="Plus Internet Store Location - Makhmali Talav, Thane"
                src={mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Float badge over map */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-[#24252B] flex items-center gap-2 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Shop No.1 · Near Makhmali Talav, Thane West</span>
              </div>
            </div>

            {/* Map Quick Action Buttons Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F52619] hover:bg-[#d81d11] text-white text-xs font-bold shadow-sm transition-all hover:shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-[#E8E8EC] text-xs font-semibold text-[#24252B] transition-all cursor-pointer shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#737782]" />
                <span>Open in Maps</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 border border-[#E8E8EC] text-xs font-semibold text-[#24252B] transition-all cursor-pointer sm:ml-auto shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#737782]" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right (Lg: 5 cols): Store Details & Directions Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8E8EC] shadow-sm space-y-5">
              
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F52619]">
                    Official Store Location
                  </span>
                  <h3 className="text-xl font-bold text-[#24252B]">
                    Plus Internet
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#F52619]/10 flex items-center justify-center text-[#F52619] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Exact Address formatted */}
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-2">
                <div className="text-xs font-bold text-[#24252B]">
                  SHOP NO.1, Neelkanth Society
                </div>
                <div className="text-xs text-[#525763] leading-relaxed">
                  Near MAKHMALI TALAV, Ganeshwadi,<br />
                  Thane West, Thane, Maharashtra <span className="font-semibold text-[#24252B]">400601</span>
                </div>
                <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#737782]">
                  <span className="font-medium text-slate-700">Landmark:</span>
                  <span>Makhmali Talav / Ganeshwadi Chowk</span>
                </div>
              </div>

              {/* Hours & Contact Quick Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#24252B]">
                    <Clock className="w-3.5 h-3.5 text-[#F52619]" />
                    <span>Store Hours</span>
                  </div>
                  <div className="text-[11px] text-[#737782]">
                    Mon – Sat: 9:30 AM – 8:30 PM<br />
                    Sun: 10:00 AM – 4:00 PM
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#24252B]">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Desk</span>
                  </div>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="block text-[11px] font-semibold text-[#24252B] hover:text-[#F52619] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-[10px] text-emerald-600 font-medium">
                    Call before arriving if needed
                  </div>
                </div>
              </div>

              {/* WhatsApp direct to store */}
              <a
                href={createWhatsAppUrl("Hi Plus Internet, I am planning to visit your store at Neelkanth Society, near Makhmali Talav in Thane West. Could you share details?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat with Store on WhatsApp</span>
              </a>

            </div>



          </div>

        </div>

        {/* Walk-in Store Services Highlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E8EC] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E8EC] pb-6">
            <div>
              <span className="text-xs font-bold text-[#F52619] uppercase tracking-wider">
                In-Person Customer Facilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#24252B] tracking-tight">
                What Can You Do At Our Thane Store?
              </h3>
            </div>
            <span className="text-xs text-[#737782] bg-[#F7F8FA] px-3.5 py-1.5 rounded-full border border-[#E8E8EC] font-medium self-start sm:self-auto">
              No Appointments Needed · Walk-in Friendly
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F52619]/10 text-[#F52619] flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#24252B]">Live Speed Demos</h4>
              <p className="text-xs text-[#737782] leading-relaxed">
                Connect your phone or laptop to our live fiber test rig and experience 500 Mbps and gigabit speeds before picking a plan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#24252B]">Instant Sign-Up</h4>
              <p className="text-xs text-[#737782] leading-relaxed">
                Bring your KYC ID (Aadhaar/electricity bill) to get same-day feasibility verification and priority installation booking.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Copy className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#24252B]">Hardware Pickup</h4>
              <p className="text-xs text-[#737782] leading-relaxed">
                Purchase or pick up Wi-Fi 6 mesh routers, gigabit switches, Cat6 patch cords, fiber splitters, and CCTV power supplies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#24252B]">Technical Helpdesk</h4>
              <p className="text-xs text-[#737782] leading-relaxed">
                Bring faulty routers or power adapters for diagnostic testing, quick firmware upgrades, or replacement under warranty.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
