import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const ctaWhatsAppUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to get a new high-speed broadband connection in Thane. Please share available plans and installation feasibility."
  );

  return (
    <>
      {/* 1. SEO Local Suburbs Paragraph (Light Section above red banner) */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-[#E8E8EC] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-[#737782] leading-relaxed">
            Looking for broadband near you? Plus Internet provides optical fiber broadband connections, Wi-Fi 6 hardware, and networking solutions across Thane & neighboring localities including Ghodbunder Road, Majiwada, Naupada, Panchpakhadi, Vartak Nagar, Kolshet, Hiranandani Estate, Wagle Estate, Kasarvadavali, Thane East, and surrounding areas. Symmetrical plans starting from ₹499/month with speeds up to 500 Mbps.
          </p>
        </div>
      </section>

      {/* 2. Bold Red Call-to-Action Banner (Matches Reference Image with Thane Customization) */}
      <section className="bg-[#E01E12] bg-gradient-to-r from-[#D91F17] via-[#F52619] to-[#C91A10] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Experience the Fastest Internet in Thane?
          </h2>
          <p className="text-sm sm:text-base text-white/95 font-medium">
            Get connected in 24–48 hours. Free consultation & doorstep installation support.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* White pill button with red text & arrow */}
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#F52619] font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Get Connection Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Translucent outlined call pill button */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black/20 hover:bg-black/30 border border-white/35 text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full backdrop-blur-xs transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 text-white fill-white" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Main Dark Footer */}
      <footer className="bg-[#140C1D] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            {/* Brand & Mission */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-block text-2xl font-extrabold tracking-tight text-white">
                <span>Plus</span>
                <span className="text-[#F52619]">Internet</span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Internet service provider and networking hardware sales & professional installation specialist serving residential and commercial clients across Thane, Maharashtra.
              </p>
              <div className="text-xs text-white/50 pt-2">
                <span>Serving Ghodbunder Road</span> · <span>Naupada</span> · <span>Wagle Estate</span> · <span>Panchpakhadi</span> · <span>Majiwada</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/plans" className="hover:text-white transition-colors">Internet Plans</Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">Products Catalog</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">Services & Installation</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-white transition-colors">Our Partners</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white transition-colors">Projects & Setups</Link>
                </li>
              </ul>
            </div>

            {/* Core Hardware & Solutions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Hardware Solutions
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/products?category=wifi-routers" className="hover:text-white transition-colors">Wi-Fi 6 Routers</Link>
                </li>
                <li>
                  <Link to="/products?category=network-switches" className="hover:text-white transition-colors">PoE Network Switches</Link>
                </li>
                <li>
                  <Link to="/products?category=cctv-cameras" className="hover:text-white transition-colors">CCTV Security Cameras</Link>
                </li>
                <li>
                  <Link to="/products?category=accessories" className="hover:text-white transition-colors">Cat6 Patch Cords & Cable</Link>
                </li>
                <li>
                  <Link to="/products?category=infrastructure" className="hover:text-white transition-colors">Server Racks & Panels</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">Structured LAN Cabling</Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/90">
                Contact & Support
              </h4>
              <div className="space-y-3 text-sm text-white/70">
                <a
                  href={createWhatsAppUrl("Hi Plus Internet, I need quick support or advice regarding internet services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F52619] shrink-0" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F52619] shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>

                <a
                  href={COMPANY_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors pt-1"
                >
                  <MapPin className="w-4 h-4 text-[#F52619] shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed text-white/80">
                    SHOP NO.1, near MAKHMALI TALAV, Neelkanth Society, Ganeshwadi, Thane West 400601
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar with Dynamic Copyright & Policy Notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div>
              © {currentYear} {COMPANY_INFO.name}. All rights reserved. Serving Thane, Maharashtra.
            </div>
            <div className="flex items-center gap-6">
              <span className="text-white/40">Broadband speeds and final installation subject to building fiber duct feasibility.</span>
              <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
