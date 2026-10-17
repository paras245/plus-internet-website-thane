import React from 'react';
import { Check } from 'lucide-react';
import { InternetPlan, getPlanWhatsAppUrl } from '../data/plans';
import { WhatsAppIcon } from './WhatsAppIcon';

interface InternetPlanCardProps {
  plan: InternetPlan;
}

export const InternetPlanCard: React.FC<InternetPlanCardProps> = ({ plan }) => {
  const whatsappUrl = getPlanWhatsAppUrl(plan);

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl bg-white p-7 transition-all duration-300 border ${
        plan.isPopular
          ? 'border-[#F52619] shadow-xl ring-1 ring-[#F52619]/20'
          : 'border-[#E8E8EC] hover:border-[#F52619]/40 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Popular indicator without garish badges */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-7 bg-[#F52619] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          Popular Choice
        </div>
      )}

      <div>
        {/* Header & Speed */}
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-[#24252B] tracking-tight">
            {plan.name}
          </h3>
          <p className="text-xs text-[#737782] min-h-[32px]">
            {plan.idealFor}
          </p>
        </div>

        {/* Speed Highlight */}
        <div className="my-6 pb-6 border-b border-[#E8E8EC]">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-[#24252B]">
              {plan.speed}
            </span>
          </div>
          <div className="mt-2 text-2xl font-bold text-[#F52619] tracking-tight">
            {plan.priceMonthly}{' '}
            <span className="text-xs font-normal text-[#737782]">{plan.billingCycle}</span>
          </div>
          <p className="mt-1 text-[11px] text-[#737782] italic">
            *Indicative pricing; final rates confirmed based on term and building fiber duct.
          </p>
        </div>

        {/* Specifications & Inclusions (Zero-pill clean layout) */}
        <div className="space-y-3 py-2 text-xs text-[#24252B]/90">
          <div className="flex justify-between items-center py-1.5 border-b border-[#E8E8EC]/60">
            <span className="text-[#737782]">Data Policy:</span>
            <span className="font-semibold text-right">{plan.fupPolicy}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-[#E8E8EC]/60">
            <span className="text-[#737782]">Installation:</span>
            <span className="font-semibold text-right">{plan.installationFee}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-[#E8E8EC]/60">
            <span className="text-[#737782]">Equipment:</span>
            <span className="font-semibold text-right text-balance">{plan.equipment}</span>
          </div>
        </div>

        {/* Bullet Inclusions */}
        <div className="mt-6 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#737782]">
            What’s Included:
          </div>
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-[#24252B]/80 leading-relaxed">
                <Check className="w-4 h-4 text-[#F52619] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* WhatsApp Conversion Action */}
      <div className="mt-8 pt-6 border-t border-[#E8E8EC]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-200 shadow-sm ${
            plan.isPopular
              ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white'
              : 'bg-[#F7F8FA] hover:bg-[#25D366] hover:text-white text-[#24252B]'
          }`}
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
