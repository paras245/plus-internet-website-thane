import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/testimonials';
import { createWhatsAppUrl } from '../data/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CustomerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const categories = ['All', 'Work From Home', 'Home Fiber', 'Commercial LAN', 'Wi-Fi & CCTV'];

  const filteredTestimonials = selectedCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedCategory);

  // Keep index within bounds if filtered list changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Gentle auto-rotation every 7 seconds
  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, filteredTestimonials.length]);

  const activeTestimonial: Testimonial = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const reviewWhatsAppUrl = createWhatsAppUrl(
    "Hi Plus Internet, I am an existing customer in Thane and would like to share my feedback / review."
  );

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white via-[#F7F8FA] to-white relative overflow-hidden border-t border-[#E8E8EC]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#F52619]/5 via-[#FFD700]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8EC] shadow-xs text-xs font-semibold text-[#24252B]">
            <Sparkles className="w-3.5 h-3.5 text-[#F52619]" />
            <span>Customer Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24252B] tracking-tight">
            What Our Customers Say
          </h2>

          <p className="text-sm sm:text-base text-[#737782] max-w-xl mx-auto">
            Authentic feedback from families, work-from-home professionals, and business owners across Thane.
          </p>
        </div>

        {/* Trust Metric Strip */}
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 mb-10 text-center">
          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs">
            <div className="flex items-center justify-center gap-1 text-lg sm:text-2xl font-black text-[#24252B]">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            </div>
            <div className="text-[11px] sm:text-xs text-[#737782] font-medium mt-0.5">Average Customer Rating</div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs">
            <div className="flex items-center justify-center gap-1 text-lg sm:text-2xl font-black text-[#24252B]">
              <Zap className="w-4 h-4 text-[#F52619]" />
              <span>99.4%</span>
            </div>
            <div className="text-[11px] sm:text-xs text-[#737782] font-medium mt-0.5">Reported Fiber Uptime</div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-[#E8E8EC] shadow-xs">
            <div className="flex items-center justify-center gap-1 text-lg sm:text-2xl font-black text-[#24252B]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>24–48h</span>
            </div>
            <div className="text-[11px] sm:text-xs text-[#737782] font-medium mt-0.5">Doorstep Setup in Thane</div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#24252B] text-white shadow-sm'
                  : 'bg-white text-[#737782] hover:text-[#24252B] border border-[#E8E8EC] hover:bg-[#F7F8FA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Distinctive Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-[#E8E8EC] shadow-xl p-7 sm:p-12 transition-all duration-500 overflow-hidden">
            
            {/* Elegant Accent Gradient Edge */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F52619] via-[#FFD700] to-[#F52619]" />

            {/* Background Watermark Quote Symbol */}
            <Quote className="absolute right-6 sm:right-10 top-6 sm:top-10 w-20 sm:w-28 h-20 sm:h-28 text-[#F52619]/5 pointer-events-none stroke-1 rotate-180" />

            {/* Top Row: Plan / Service Badge & Star Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F8FA] border border-[#E8E8EC] text-xs font-semibold text-[#24252B]">
                <span className="w-2 h-2 rounded-full bg-[#F52619]" />
                <span>{activeTestimonial.planOrService}</span>
              </div>

              {/* 5 Radiant Stars */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#24252B] ml-1">5.0</span>
              </div>
            </div>

            {/* Quote Body */}
            <div className="relative z-10 mb-8">
              <p className="text-base sm:text-xl text-[#24252B] font-medium leading-relaxed italic">
                "{activeTestimonial.quote}"
              </p>
            </div>

            {/* Bottom Row: Customer Details & Verification */}
            <div className="relative z-10 pt-6 border-t border-[#E8E8EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <div className="flex items-center gap-3.5">
                {/* Initials Avatar */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#24252B] to-[#3a3c45] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {activeTestimonial.initials}
                </div>
                <div>
                  <div className="text-base font-bold text-[#24252B]">
                    {activeTestimonial.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#737782] font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F52619] shrink-0" />
                    <span>{activeTestimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Installation Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-full self-start sm:self-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Thane Customer</span>
              </div>

            </div>

          </div>

          {/* Navigation Controls & Pagination Beads */}
          <div className="flex items-center justify-between mt-8 px-2">
            
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#F7F8FA] border border-[#E8E8EC] text-[#24252B] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Interactive Carousel Beads */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Jump to review by ${item.name}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-7 h-2 bg-[#F52619]'
                        : 'w-2 h-2 bg-[#E8E8EC] hover:bg-[#737782]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next story"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#F7F8FA] border border-[#E8E8EC] text-[#24252B] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Footer review action & disclaimer */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737782] px-2 text-center sm:text-left">
            <span className="italic">
              *Illustrative customer experiences based on typical installation feedback in Thane.
            </span>

            <a
              href={reviewWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#24252B] hover:text-[#F52619] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Share your feedback on WhatsApp →</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
