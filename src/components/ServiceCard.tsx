import React from 'react';
import { Check } from 'lucide-react';
import { ServiceItem, getServiceWhatsAppUrl } from '../data/services';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const whatsappUrl = getServiceWhatsAppUrl(service);

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-[#E8E8EC] overflow-hidden hover:border-[#F52619]/40 hover:shadow-xl transition-all duration-300 group">
      <div>
        {/* Service Image Header */}
        <div className="relative w-full aspect-16/9 bg-[#F7F8FA] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Service number identifier */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-mono font-bold text-[#24252B] border border-[#E8E8EC]">
            {service.number}
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-xs text-white/80 font-medium">Serving Thane & Surrounds</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-[#24252B] group-hover:text-[#F52619] transition-colors tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-xs text-[#737782] leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          {/* Inclusions List */}
          <div className="pt-2 border-t border-[#E8E8EC]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#737782] mb-2">
              Scope of Service:
            </div>
            <ul className="space-y-1.5">
              {service.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#24252B]/80 leading-normal">
                  <Check className="w-3.5 h-3.5 text-[#F52619] shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Conversion CTA */}
      <div className="p-6 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#F7F8FA] group-hover:bg-[#25D366] group-hover:text-white text-[#24252B] text-xs font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
