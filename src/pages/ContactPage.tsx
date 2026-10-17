import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight,
  Navigation 
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ShopLocationMap } from '../components/ShopLocationMap';
import { useSEO } from '../hooks/useSEO';

export const ContactPage: React.FC = () => {
  useSEO({
    title: "Contact Plus Internet Thane - Direct WhatsApp & Phone Support",
    description: "Contact Plus Internet directly on WhatsApp at +91 81085 05678 or call for broadband enquiries, Wi-Fi router sales, and CCTV installation across Thane.",
    keywords: "contact Plus Internet, Thane ISP phone number, broadband customer care Thane, WhatsApp internet enquiry"
  });

  const [selectedTopic, setSelectedTopic] = useState<string>('General Enquiry');

  const topics = [
    { id: 'General Enquiry', message: 'Hi Plus Internet, I would like to know more about your internet and networking services in Thane.' },
    { id: 'New Broadband Connection', message: 'Hi Plus Internet, I want to check fiber broadband availability and pricing for my flat/office in Thane.' },
    { id: 'Wi-Fi & Router Setup', message: 'Hi Plus Internet, I need assistance with router selection and eliminating Wi-Fi dead spots in Thane.' },
    { id: 'CCTV Installation', message: 'Hi Plus Internet, I would like to enquire about CCTV camera installation and recording setup in Thane.' },
    { id: 'Office LAN Cabling', message: 'Hi Plus Internet, I require structured Cat6 LAN cabling and network switch setup for an office in Thane.' },
    { id: 'Equipment Purchase', message: 'Hi Plus Internet, I want to purchase networking hardware (router/switch/cables/rack) in Thane.' },
  ];

  const currentTopic = topics.find(t => t.id === selectedTopic) || topics[0];
  const dynamicWhatsAppUrl = createWhatsAppUrl(currentTopic.message);

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Direct Customer Support · No Tedious Forms
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            Connect Directly With Plus Internet
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            We value your time. We do not use slow web contact forms that disappear into inboxes. Reach out directly via WhatsApp, direct phone call, or email to get immediate local answers in Thane.
          </p>
        </div>

        {/* 4 Large Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: WhatsApp */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E8EC] hover:border-[#25D366] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#24252B]">Chat on WhatsApp</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Fastest way to get speed feasibility, hardware quotes, and schedule installation visits.
              </p>
              <div className="text-xs font-semibold text-[#24252B]">
                {COMPANY_INFO.phone}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E8EC] mt-6">
              <a
                href={createWhatsAppUrl("Hi Plus Internet, I would like to enquire about your services in Thane.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Open WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Call */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E8EC] hover:border-[#F52619] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F52619]/10 flex items-center justify-center text-[#F52619] group-hover:bg-[#F52619] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#24252B]">Call Directly</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Speak directly with our local support representative for urgent technical inquiries.
              </p>
              <div className="text-xs font-semibold text-[#24252B]">
                {COMPANY_INFO.phone}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E8EC] mt-6">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#24252B] hover:bg-black text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <span>Call Now</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E8EC] hover:border-[#24252B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#24252B] group-hover:bg-[#24252B] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#24252B]">Send Email</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                For formal corporate tenders, society committee requests, or detailed equipment RFQs.
              </p>
              <div className="text-xs font-semibold text-[#24252B] break-all">
                {COMPANY_INFO.email}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E8EC] mt-6">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F7F8FA] hover:bg-[#E8E8EC] text-[#24252B] text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <span>Send Email</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Google Maps Search */}
          <div className="p-8 rounded-3xl bg-white border border-[#E8E8EC] hover:border-[#F52619] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F52619]/10 flex items-center justify-center text-[#F52619] group-hover:bg-[#F52619] group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#24252B]">Visit Our Shop</h3>
              <p className="text-xs text-[#737782] leading-relaxed">
                Shop No.1, near Makhmali Talav, Neelkanth Society, Ganeshwadi, Thane West.
              </p>
              <div className="text-xs font-semibold text-[#24252B] leading-tight">
                SHOP NO.1, near MAKHMALI TALAV, Neelkanth Society, Ganeshwadi, Thane West 400601
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E8EC] mt-6 flex flex-col sm:flex-row gap-2">
              <a
                href={COMPANY_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F52619] hover:bg-[#d81d11] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-all"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#F7F8FA] hover:bg-slate-200/70 border border-[#E8E8EC] text-[#24252B] text-xs font-semibold py-3 px-3 rounded-xl transition-all"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#737782]" />
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Fast-Track WhatsApp Message Selector */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F8FA] border border-[#E8E8EC] space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold text-[#F52619] uppercase tracking-wider">
              Instant Prefilled WhatsApp Enquiry
            </div>
            <h2 className="text-2xl font-bold text-[#24252B]">
              What would you like to discuss today?
            </h2>
            <p className="text-xs sm:text-sm text-[#737782]">
              Choose a topic below to automatically formulate your WhatsApp greeting. You can review and edit before sending.
            </p>
          </div>

          {/* Topic Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTopic(t.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedTopic === t.id
                    ? 'bg-[#24252B] text-white shadow-xs'
                    : 'bg-white text-[#737782] hover:text-[#24252B] border border-[#E8E8EC]'
                }`}
              >
                {t.id}
              </button>
            ))}
          </div>

          {/* Formulated Message Preview Box */}
          <div className="p-5 rounded-2xl bg-white border border-[#E8E8EC] space-y-4">
            <div className="text-xs font-semibold text-[#737782]">
              Prefilled Message Ready to Send:
            </div>
            <div className="p-4 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] text-xs text-[#24252B] font-mono leading-relaxed">
              "{currentTopic.message}"
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-[#737782]">
                Opens WhatsApp Web or App directly · No personal data stored on this site.
              </span>

              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-3 px-6 rounded-xl shadow-sm transition-all whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Launch WhatsApp With This Message</span>
              </a>
            </div>
          </div>

        </div>

        {/* Coverage Localities Reference */}
        <div className="p-8 rounded-3xl bg-white border border-[#E8E8EC] space-y-4">
          <h3 className="text-lg font-bold text-[#24252B] flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#F52619]" />
            <span>Thane Primary Service Sectors</span>
          </h3>
          <p className="text-xs text-[#737782] leading-relaxed">
            Our technicians provide on-site fiber assistance, Wi-Fi configuration, CCTV installation, and structured cabling across key locations:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {COMPANY_INFO.servingAreas.map((area, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#F7F8FA] border border-[#E8E8EC] text-xs font-medium text-[#24252B] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Shop Map & Directions Component */}
      <ShopLocationMap />
    </div>
  );
};
