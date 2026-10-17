import React, { useState, useEffect } from 'react';

export interface CleanSlide {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

export const CLEAN_HERO_SLIDES: CleanSlide[] = [
  {
    id: 'home-fiber',
    image: '/src/assets/images/hero_networking_setup_1792171252724.jpg',
    alt: 'High-speed optical fiber broadband and modern Wi-Fi in Thane residence',
    caption: 'High-Speed Optical Fiber Broadband & Home Wi-Fi'
  },
  {
    id: 'family-lifestyle',
    image: '/src/assets/images/hero_family_fiber_wifi_1792177571218.jpg',
    alt: 'Happy family enjoying buffer-free high-speed fiber internet in Thane',
    caption: 'Zero-Buffering 4K Streaming & Multi-Device Family Wi-Fi'
  },
  {
    id: 'technician-setup',
    image: '/src/assets/images/hero_technician_fiber_1792172707801.jpg',
    alt: 'Professional network technician configuring optical fiber router on-site in Thane',
    caption: 'Professional On-Site Installation & Signal Tuning'
  },
  {
    id: 'office-rack',
    image: '/src/assets/images/hero_office_server_rack_1792172708567.jpg',
    alt: 'Organized corporate server rack cabinet with switches and Cat6 patch cabling',
    caption: 'Structured Office LAN Cabling & Commercial Racks'
  }
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance every 6 seconds cleanly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLEAN_HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E8EC] aspect-16/10 bg-[#F7F8FA] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Plus Internet showcase carousel"
    >
      {/* Slides with smooth crossfade — NO numbers, NO progress bars, NO heavy black box */}
      {CLEAN_HERO_SLIDES.map((slide, index) => {
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
              className="w-full h-full object-cover transition-transform duration-7000 ease-out hover:scale-105"
            />
            {/* Subtle clean bottom vignette for soft readable caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Quiet, clean caption on bottom */}
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-xs font-semibold text-white/95 drop-shadow-sm tracking-wide">
                {slide.caption}
              </span>
            </div>
          </div>
        );
      })}

      {/* Floating Verified Trust Badge (Top Left) */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[11px] font-semibold text-[#24252B] shadow-sm">
        Thane On-Site Solutions
      </div>
    </div>
  );
};
