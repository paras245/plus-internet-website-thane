import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export interface MeterPlanOption {
  speed: number;
  label: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: string;
  effectiveMonthly: string;
  yearlyPrice: string;
  quarterlyPrice: string;
  description: string;
  features: string[];
}

export const METER_PLANS: Record<number, MeterPlanOption> = {
  50: {
    speed: 50,
    label: "50 Mbps",
    badge: "Budget Friendly",
    monthlyPrice: "₹499",
    effectiveMonthly: "₹375/mo effective",
    yearlyPrice: "₹4,500",
    quarterlyPrice: "₹1,399",
    description: "Ideal for 1-3 devices, web browsing, HD video & WFH basics.",
    features: ["Symmetric 50 Mbps Upload & Download", "Unlimited Data Policy", "Local Thane Support"]
  },
  100: {
    speed: 100,
    label: "100 Mbps",
    badge: "Best Value",
    monthlyPrice: "₹749",
    effectiveMonthly: "₹416/mo effective",
    yearlyPrice: "₹4,999",
    quarterlyPrice: "₹2,099",
    description: "Great for 3-5 devices, multiple Smart TVs and simultaneous video streaming.",
    features: ["Dual-Band 5 GHz Support", "Low Ping Gaming", "Priority Society Fiber"]
  },
  200: {
    speed: 200,
    label: "200 Mbps",
    badge: "Most Popular",
    isPopular: true,
    monthlyPrice: "₹999",
    effectiveMonthly: "₹458/mo effective",
    yearlyPrice: "₹5,500",
    quarterlyPrice: "₹2,699",
    description: "Optimal for multi-room families, 4K Ultra HD streaming, and simultaneous heavy downloads.",
    features: ["Gigabit Wi-Fi 6 Compatible", "True Unlimited Data", "Zero Standard Installation on Annual"]
  },
  300: {
    speed: 300,
    label: "300 Mbps",
    badge: "Ultra Fast",
    monthlyPrice: "₹1,249",
    effectiveMonthly: "₹665/mo effective",
    yearlyPrice: "₹7,990",
    quarterlyPrice: "₹3,450",
    description: "High performance for heavy content creators, multi-PC homes, and executive offices.",
    features: ["Ultra-Low Latency Routing", "Dedicated Bandwidth", "Free Dual-Band Router Support"]
  },
  500: {
    speed: 500,
    label: "500 Mbps",
    badge: "Pro Speed",
    monthlyPrice: "₹1,799",
    effectiveMonthly: "₹999/mo effective",
    yearlyPrice: "₹11,990",
    quarterlyPrice: "₹4,890",
    description: "Commercial throughput for large offices, creative studios, and intensive cloud backups.",
    features: ["Commercial SLA Priority", "Static IP Options", "Dedicated On-Site Technician"]
  }
};

export const PlanSpeedMeter: React.FC = () => {
  const [selectedSpeed, setSelectedSpeed] = useState<number>(200);
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  const plan = METER_PLANS[selectedSpeed] || METER_PLANS[200];

  // SVG Gauge calculations
  // Gauge arc spanning 260 degrees (-220 deg to +40 deg)
  const radius = 100;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  
  // Speed percentage mapping: 50 -> 20%, 100 -> 40%, 200 -> 65%, 300 -> 85%, 500 -> 100%
  const speedPercents: Record<number, number> = {
    50: 0.22,
    100: 0.42,
    200: 0.65,
    300: 0.85,
    500: 1.00
  };
  const activePercent = speedPercents[selectedSpeed] || 0.65;
  const arcLength = circumference * 0.72; // 260 degrees
  const activeOffset = arcLength * (1 - activePercent);

  const priceToDisplay = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  const periodLabel = billingCycle === 'yearly' ? '/year' : '/month';

  const whatsappMessage = `Hi Plus Internet, I would like to get the ${plan.speed} Mbps ${billingCycle === 'yearly' ? 'Yearly' : 'Monthly'} plan (${priceToDisplay}${periodLabel}). Please confirm availability and installation in Thane.`;
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[32px] p-6 sm:p-8 border border-[#E8E8EC] shadow-2xl relative select-none">
      
      {/* Background subtle radial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E8EC_1px,transparent_1px)] [background-size:16px_16px] opacity-40 rounded-[32px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Circular Speedometer Meter Gauge */}
        <div className="relative w-64 h-64 flex items-center justify-center my-2">
          
          <svg className="w-full h-full transform -rotate-130" viewBox="0 0 240 240">
            {/* Background Faint Track */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#F4F4F6"
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeLinecap="round"
            />
            {/* Glowing Active Red Progress Arc */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="#F52619"
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeDashoffset={activeOffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
              style={{
                filter: 'drop-shadow(0px 0px 8px rgba(245, 38, 25, 0.5))'
              }}
            />
          </svg>

          {/* Meter Center Values */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-6xl sm:text-7xl font-extrabold text-[#F52619] tracking-tight font-sans transition-all duration-300">
              {plan.speed}
            </span>
            <span className="text-lg font-bold text-[#24252B] -mt-1 tracking-tight">
              Mbps
            </span>
            <span className="text-xs font-medium text-[#737782] tracking-wide mt-0.5">
              Max Speed
            </span>
          </div>

        </div>

        {/* Speed Selector Buttons: 50, 100, 200, 300, 500 */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 my-6 w-full">
          {[50, 100, 200, 300, 500].map((s) => {
            const isSelected = selectedSpeed === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSpeed(s)}
                className={`py-2 px-3.5 sm:px-4 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F52619] text-white shadow-md shadow-[#F52619]/30 scale-105'
                    : 'bg-[#F7F8FA] text-[#737782] hover:text-[#24252B] hover:bg-[#E8E8EC] border border-[#E8E8EC]/80'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Pricing Detail Card */}
        <div className="w-full relative mt-3 pt-6 pb-6 px-6 rounded-3xl bg-white border border-[#E8E8EC] shadow-md flex flex-col items-center text-center">
          
          {/* Top Floating Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F52619] text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1 whitespace-nowrap">
            <Sparkles className="w-3 h-3" />
            <span>{plan.badge || "Verified Plan"}</span>
          </div>

          {/* Plan Header */}
          <div className="mt-1">
            <h3 className="text-lg font-extrabold text-[#24252B] tracking-tight">
              {plan.speed} Mbps
            </h3>
            <div className="text-xs text-[#737782] font-medium mt-0.5">
              {billingCycle === 'yearly' ? 'Yearly Plan' : 'Monthly Plan'}
            </div>
          </div>

          {/* Big Bold Price */}
          <div className="mt-3 flex items-baseline justify-center gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
              {priceToDisplay}
            </span>
            <span className="text-xs text-[#737782] font-semibold">
              {periodLabel}
            </span>
          </div>

          {/* Subtext info */}
          <div className="mt-1.5 text-[11px] text-[#737782]">
            GST included · {plan.effectiveMonthly}
          </div>

          {/* Billing cycle pill switcher */}
          <div className="mt-4 p-1 bg-[#F7F8FA] rounded-full border border-[#E8E8EC] flex items-center gap-1">
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-[#24252B] shadow-xs'
                  : 'text-[#737782] hover:text-[#24252B]'
              }`}
            >
              Annual (Best Rate)
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#24252B] shadow-xs'
                  : 'text-[#737782] hover:text-[#24252B]'
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Primary Action Button (Red Button with Arrow, opens WhatsApp) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-6 py-3.5 px-6 rounded-2xl bg-[#F52619] hover:bg-[#D91F17] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F52619]/25 hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
          >
            <span>Get This Plan</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#737782]">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant booking & society feasibility check via WhatsApp</span>
          </div>

        </div>

      </div>

    </div>
  );
};
