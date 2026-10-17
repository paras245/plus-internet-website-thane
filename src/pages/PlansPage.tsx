import React, { useState } from 'react';
import { Check, Info, Sparkles, Gauge } from 'lucide-react';
import { INTERNET_PLANS, InternetPlan, getPlanWhatsAppUrl } from '../data/plans';
import { createWhatsAppUrl } from '../data/company';
import { InternetPlanCard } from '../components/InternetPlanCard';
import { PlanSpeedMeter } from '../components/PlanSpeedMeter';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useSEO } from '../hooks/useSEO';

export const PlansPage: React.FC = () => {
  useSEO({
    title: "High-Speed Fiber Broadband Plans & Pricing in Thane",
    description: "Compare unlimited optical fiber internet plans in Thane from 50 Mbps to 300+ Mbps. Symmetric speeds, zero installation options, and local WhatsApp support.",
    keywords: "broadband plans Thane, internet price Thane, fiber optic plans Thane, 100 Mbps internet Thane, home broadband Thane"
  });

  // Speed Recommender Interactive Helper
  const [deviceCount, setDeviceCount] = useState<number>(4);
  const [activity, setActivity] = useState<'browsing' | 'streaming' | 'gaming' | 'business'>('streaming');

  const getRecommendedPlan = (): InternetPlan => {
    if (activity === 'business' || deviceCount > 10) return INTERNET_PLANS[3];
    if (activity === 'gaming' || deviceCount >= 6) return INTERNET_PLANS[2];
    if (activity === 'streaming' || deviceCount >= 3) return INTERNET_PLANS[1];
    return INTERNET_PLANS[0];
  };

  const recommendedPlan = getRecommendedPlan();

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F52619]">
            Broadband Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#24252B] tracking-tight">
            High-Speed Internet Plans in Thane
          </h1>
          <p className="text-base text-[#737782] leading-relaxed">
            Reliable optical fiber broadband tailored for residential flats, home offices, and commercial establishments in Thane. Review indicative plan tiers below and enquire directly on WhatsApp for area-specific availability.
          </p>
        </div>

        {/* Featured Speed Meter Dial Widget */}
        <div className="flex flex-col items-center justify-center p-6 sm:p-10 rounded-[36px] bg-gradient-to-b from-[#F7F8FA] to-white border border-[#E8E8EC] shadow-sm">
          <div className="text-center mb-6 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F52619] flex items-center justify-center gap-1.5">
              <Gauge className="w-4 h-4" />
              <span>Speed & Pricing Meter</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#24252B]">
              Interactive Speed Dial & Annual Value
            </h2>
            <p className="text-xs sm:text-sm text-[#737782]">
              Select speed to preview annual package savings, GST inclusion, and free equipment eligibility.
            </p>
          </div>
          <PlanSpeedMeter />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERNET_PLANS.map((plan) => (
            <InternetPlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Interactive Speed & Plan Advisor */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F8FA] border border-[#E8E8EC] shadow-sm">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F52619] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Helper</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#24252B]">
                Find the Right Speed For Your Property
              </h2>
              <p className="text-xs sm:text-sm text-[#737782]">
                Adjust your device count and primary usage to see which fiber tier will deliver lag-free performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Device Count Selector */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E8EC] space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-[#24252B]">
                  <span>Connected Devices:</span>
                  <span className="text-[#F52619] text-sm font-mono">{deviceCount} Devices</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={deviceCount}
                  onChange={(e) => setDeviceCount(Number(e.target.value))}
                  className="w-full accent-[#F52619] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#737782]">
                  <span>1-2 (Minimal)</span>
                  <span>4-6 (Family)</span>
                  <span>10+ (Heavy / Office)</span>
                </div>
              </div>

              {/* Usage Priority */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E8EC] space-y-3">
                <div className="text-xs font-bold text-[#24252B]">Primary Network Demand:</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'browsing', label: 'Browsing & WFH' },
                    { id: 'streaming', label: '4K TV Streaming' },
                    { id: 'gaming', label: 'Low-Ping Gaming' },
                    { id: 'business', label: 'Office / Multiple PCs' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivity(item.id as any)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium text-center transition-all cursor-pointer ${
                        activity === item.id
                          ? 'bg-[#24252B] text-white font-semibold shadow-xs'
                          : 'bg-[#F7F8FA] text-[#737782] hover:bg-[#E8E8EC]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Recommendation Result Box */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#F52619]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs text-[#737782] font-semibold">Recommended Match for Your Setup:</div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#24252B]">
                  {recommendedPlan.name} ({recommendedPlan.speed})
                </div>
                <p className="text-xs text-[#737782]">
                  {recommendedPlan.idealFor}
                </p>
              </div>

              <a
                href={getPlanWhatsAppUrl(recommendedPlan)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-sm whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Enquire This Plan on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Detailed Plan Comparison Table */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#24252B] tracking-tight">
              Feature Comparison Matrix
            </h2>
            <p className="text-xs text-[#737782]">
              Side-by-side comparison of speed, equipment, and service provisions.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E8E8EC] rounded-2xl shadow-xs bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F7F8FA] border-b border-[#E8E8EC]">
                  <th className="py-4 px-6 font-bold text-[#24252B]">Feature</th>
                  {INTERNET_PLANS.map((plan) => (
                    <th key={plan.id} className="py-4 px-6 font-bold text-[#24252B] whitespace-nowrap">
                      {plan.name}
                      <span className="block text-[11px] font-normal text-[#F52619]">{plan.speed}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E8EC]">
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#737782]">Indicative Price</td>
                  {INTERNET_PLANS.map((plan) => (
                    <td key={plan.id} className="py-3.5 px-6 font-bold text-[#24252B] font-mono">
                      {plan.priceMonthly}/mo*
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#737782]">Data Limit / FUP</td>
                  {INTERNET_PLANS.map((plan) => (
                    <td key={plan.id} className="py-3.5 px-6 text-[#24252B]">
                      {plan.fupPolicy}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#737782]">Upload / Download Speed</td>
                  {INTERNET_PLANS.map((plan) => (
                    <td key={plan.id} className="py-3.5 px-6 text-[#24252B]">
                      Symmetric fiber link
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#737782]">Router Provision</td>
                  {INTERNET_PLANS.map((plan) => (
                    <td key={plan.id} className="py-3.5 px-6 text-[#24252B]">
                      {plan.equipment}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#737782]">Thane Local WhatsApp Support</td>
                  {INTERNET_PLANS.map((plan) => (
                    <td key={plan.id} className="py-3.5 px-6 text-emerald-600 font-semibold">
                      Included
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-semibold text-[#737782]">Action</td>
                  {INTERNET_PLANS.map((plan) => (
                    <td key={plan.id} className="py-3.5 px-6">
                      <a
                        href={getPlanWhatsAppUrl(plan)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#25D366] hover:underline"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold">Important Notice on Plan Availability & Pricing:</div>
            <p className="leading-relaxed">
              All listed internet speeds, monthly rates, and installation waivers are indicative design placeholders until verified by Plus Internet for your specific address in Thane. Final connection availability is strictly subject to residential society fiber duct feasibility, building permissions, and existing DP lines.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
