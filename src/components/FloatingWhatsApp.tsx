import React, { useState } from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultUrl = createWhatsAppUrl(
    "Hi Plus Internet, I would like to know more about your broadband plans and networking services in Thane."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Optional Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-[#24252B] p-4 rounded-2xl shadow-xl border border-[#E8E8EC] text-xs space-y-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between font-semibold text-slate-800">
            <span className="flex items-center gap-1.5">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Support</span>
            </span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-[#737782] hover:text-[#24252B] p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[#737782] leading-normal">
            Have a question about fiber availability in Thane, router setups, or CCTV? Chat directly with our local team.
          </p>
          <a
            href={defaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2 px-3 rounded-lg transition-colors shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E8EC] text-xs font-semibold text-[#24252B] shadow-md hover:bg-white transition-all cursor-pointer"
          aria-label="Toggle WhatsApp message options"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Chat with us</span>
        </button>

        <a
          href={defaultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label={`Chat on WhatsApp with ${COMPANY_INFO.name} at ${COMPANY_INFO.phone}`}
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};
