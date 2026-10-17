import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Gauge 
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface FullHeroSlide {
  id: string;
  image: string;
  alt: string;
  badgeKicker: string;
  goldenHeadline: string;
  goldenHighlight: string;
  subheadline: string;
  offerNote: string;
  whatsappMessage: string;
}

export const HERO_HATHWAY_SLIDES: FullHeroSlide[] = [
  {
    id: 'family-wifi',
    image: '/images/hero_family_fiber_wifi_1792177571218.jpg',
    alt: 'Happy family in Thane living room using high-speed optical fiber internet',
    badgeKicker: 'LIMITED TIME THANE FESTIVE OFFER',
    goldenHeadline: 'FREE TO USE*',
    goldenHighlight: '5 GHZ DUAL BAND ROUTER',
    subheadline: 'Zero buffering for 4K streaming, simultaneous gaming, and work-from-home across all Thane societies.',
    offerNote: '*Included with eligible 6-month & 12-month broadband plans. Doorstep installation in 24-48 hrs.',
    whatsappMessage: 'Hi Plus Internet, I saw your Free Dual Band Router offer in Thane. Please share available plans and installation details.'
  },
  {
    id: 'gigabit-speed',
    image: '/images/hero_networking_setup_1792171252724.jpg',
    alt: 'High speed fiber broadband and smart connectivity in Thane residence',
    badgeKicker: 'ULTRA HIGH SPEED FIBER',
    goldenHeadline: 'BLAZING 200 MBPS',
    goldenHighlight: 'SYMMETRIC FIBER BROADBAND',
    subheadline: 'Equal high-speed upload and download with ultra-low ping. True unlimited optical connectivity.',
    offerNote: '*Dedicated optical core termination with local WhatsApp technician support in Thane.',
    whatsappMessage: 'Hi Plus Internet, I am interested in the 200 Mbps Symmetric Fiber plan in Thane. Please share pricing.'
  },
  {
    id: 'technician-service',
    image: '/images/hero_technician_fiber_1792172707801.jpg',
    alt: 'Certified Indian network technician testing fiber connection in Thane',
    badgeKicker: 'LOCAL ON-SITE ENGINEERING',
    goldenHeadline: 'PRECISION FIBER',
    goldenHighlight: 'ON-SITE TUNING & ZERO LAG',
    subheadline: 'Eliminate Wi-Fi dead spots in thick-walled Thane flats. Professional router placement and RF mapping.',
    offerNote: '*Doorstep testing with signal strength meter and live speed check before handover.',
    whatsappMessage: 'Hi Plus Internet, I need on-site Wi-Fi dead-zone tuning and router installation in Thane.'
  },
  {
    id: 'office-rack',
    image: '/images/hero_office_server_rack_1792172708567.jpg',
    alt: 'Corporate office server rack and structured LAN cabling in Thane',
    badgeKicker: 'ENTERPRISE & COMMERCIAL FIBER',
    goldenHeadline: 'GIGABIT SPEED',
    goldenHighlight: 'COMMERCIAL LAN & WI-FI MESH',
    subheadline: 'High-density Wi-Fi and structured Cat6 cabling for Thane offices, clinics, co-working spaces, and retail.',
    offerNote: '*Multi-VLAN configuration, PoE switches, and rack server installation.',
    whatsappMessage: 'Hi Plus Internet, I need an office commercial networking and high-speed Wi-Fi quote in Thane.'
  }
];

export const FullHeroHathway: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // 6-second auto cycle
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_HATHWAY_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = HERO_HATHWAY_SLIDES[currentIndex];
  const slideWhatsAppUrl = createWhatsAppUrl(currentSlide.whatsappMessage);

  return (
    <div className="w-full bg-white text-[#24252B] overflow-hidden">
      
      {/* Main Full-Bleed Carousel Viewport */}
      <div 
        className="relative w-full min-h-[520px] sm:min-h-[580px] lg:h-[620px] flex items-center justify-between overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Background Images with smooth crossfade */}
        {HERO_HATHWAY_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-100 transform transition-transform duration-7000 ease-out hover:scale-105"
              />
              {/* Soft transparent scrim: gentle gradient ensuring text contrast without obscuring the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 sm:to-transparent sm:w-4/5 lg:w-3/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            </div>
          );
        })}

        {/* Content Container with COMPLETELY TRANSPARENT Card Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-0">
          <div className="max-w-xl lg:max-w-2xl">
            
            {/* Transparent Card Layout (No heavy dark background box, clean transparent presentation) */}
            <div className="relative p-0 sm:p-2 bg-transparent border-0 shadow-none space-y-4">
              
              {/* Top Header Badge & Wi-Fi Icon */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#F52619] flex items-center justify-center text-white shadow-lg shadow-[#F52619]/50 shrink-0">
                  <Wifi className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#FFD700] uppercase drop-shadow-sm">
                    {currentSlide.badgeKicker}
                  </span>
                  <div className="text-xs text-white/90 drop-shadow-sm font-medium">
                    Serving Thane, Maharashtra
                  </div>
                </div>
              </div>

              {/* High-Impact Headline with DUBAI GOLDEN BUILDING Gradient */}
              <div className="space-y-1 pt-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.05] bg-gradient-to-r from-[#FFE57F] via-[#FDCB58] to-[#E5A93C] bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(243,156,18,0.55)]">
                  {currentSlide.goldenHeadline}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase leading-tight bg-gradient-to-r from-[#FFF3A8] via-[#FFD700] to-[#F39C12] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,215,0,0.45)]">
                  {currentSlide.goldenHighlight}
                </div>
              </div>

              {/* Subheadline prose with subtle drop shadow for legibility directly on the image */}
              <p className="text-xs sm:text-sm text-white/95 drop-shadow-md leading-relaxed pt-1 max-w-lg">
                {currentSlide.subheadline}
              </p>

              {/* Offer terms asterisk footnote */}
              <div className="text-[11px] text-white/75 drop-shadow-sm italic pt-1">
                {currentSlide.offerNote}
              </div>

              {/* CTAs (Get Connection on WhatsApp + Check Speed Meter) */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={slideWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Get Connection on WhatsApp</span>
                </a>

                <a
                  href="#speed-meter-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('speed-meter-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white font-semibold text-xs py-3.5 px-5 rounded-xl border border-white/25 backdrop-blur-xs transition-colors cursor-pointer"
                >
                  <Gauge className="w-4 h-4 text-[#FFD700]" />
                  <span>Check Speed Meter</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Clean Carousel Beads (Dots) - No numbers, No running bar, changing every 6s */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0 z-30 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
          {HERO_HATHWAY_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-2 bg-[#F52619] shadow-sm'
                    : 'w-2 h-2 bg-white/60 hover:bg-white'
                }`}
              />
            );
          })}
        </div>

      </div>

      {/* REVERTED TO CLASSIC LIGHT TRUST STRIP WITH 4 CLEAN WHITE CARDS AS IT WAS OLD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#E8E8EC] bg-[#F7F8FA]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          {/* Card 1: Home Connectivity (Wifi) */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs flex flex-col items-center gap-2 hover:border-[#F52619]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] flex items-center justify-center text-[#F52619] shadow-xs">
              <Wifi className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-[#24252B]">Home Connectivity</span>
            <span className="text-xs text-[#737782]">Fast fiber lines for residences</span>
          </div>

          {/* Card 2: Business Networking (Cpu) */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs flex flex-col items-center gap-2 hover:border-[#F52619]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] flex items-center justify-center text-[#F52619] shadow-xs">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-[#24252B]">Business Networking</span>
            <span className="text-xs text-[#737782]">Office switches, LAN & VLANs</span>
          </div>

          {/* Card 3: Equipment Sales (ShieldCheck) */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs flex flex-col items-center gap-2 hover:border-[#F52619]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] flex items-center justify-center text-[#F52619] shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-[#24252B]">Equipment Sales</span>
            <span className="text-xs text-[#737782]">Routers, CCTV & Cat6 cabling</span>
          </div>

          {/* Card 4: Professional Installation (Wrench) */}
          <div className="p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs flex flex-col items-center gap-2 hover:border-[#F52619]/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F7F8FA] flex items-center justify-center text-[#F52619] shadow-xs">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold text-[#24252B]">Professional Installation</span>
            <span className="text-xs text-[#737782]">Local on-site setup in Thane</span>
          </div>

        </div>
      </div>

    </div>
  );
};
