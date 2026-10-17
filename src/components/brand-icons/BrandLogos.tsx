import React from 'react';

export interface BrandIconProps {
  className?: string;
}

export const TPLinkIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="TP-Link">
    <g transform="translate(4, 6)">
      <path d="M18 4C10.268 4 4 10.268 4 18c0 3.866 1.567 7.366 4.1 9.9L12.5 23.5A9.97 9.97 0 0110 18c0-4.418 3.582-8 8-8 2.21 0 4.21.896 5.657 2.343l4.4-4.4A15.93 15.93 0 0018 4z" fill="#00B0B9"/>
      <path d="M18 32c7.732 0 14-6.268 14-14 0-3.866-1.567-7.366-4.1-9.9l-4.4 4.4A9.97 9.97 0 0126 18c0 4.418-3.582 8-8 8-2.21 0-4.21-.896-5.657-2.343l-4.4 4.4A15.93 15.93 0 0018 32z" fill="#00B0B9"/>
    </g>
    <text x="44" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontSize="19" fontWeight="800" letterSpacing="-0.5px" fill="#00B0B9">tp-link</text>
    <text x="110" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fontWeight="700" fill="#737782">/ Archer</text>
  </svg>
);

export const DLinkIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="D-Link">
    <g transform="translate(6, 10)">
      <circle cx="14" cy="14" r="11" stroke="#0084C7" strokeWidth="4.5"/>
      <path d="M14 3v8M14 17v8M3 14h8M17 14h8" stroke="#0084C7" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3.5" fill="#0084C7"/>
    </g>
    <text x="44" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="900" letterSpacing="0.5px" fill="#0084C7">D-Link</text>
    <text x="122" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" fill="#0084C7">®</text>
  </svg>
);

export const NetgearIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="NETGEAR">
    <g transform="translate(6, 10)">
      <polygon points="14,2 26,9 26,21 14,27 2,21 2,9" stroke="#37265E" strokeWidth="2.5" fill="#EDE9F7"/>
      <polyline points="2,9 14,15 26,9" stroke="#37265E" strokeWidth="2"/>
      <polyline points="14,15 14,27" stroke="#37265E" strokeWidth="2"/>
      <circle cx="14" cy="15" r="2.5" fill="#805AD5"/>
    </g>
    <text x="44" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1px" fill="#24252B">NETGEAR</text>
    <text x="144" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" fill="#737782">®</text>
  </svg>
);

export const HikvisionIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="HIKVISION">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#E60012"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
      <circle cx="14" cy="14" r="3" fill="#E60012"/>
      <circle cx="16" cy="12" r="1" fill="white"/>
    </g>
    <text x="44" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.5px" fill="#24252B">HIK</text>
    <text x="82" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.5px" fill="#E60012">VISION</text>
    <text x="146" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7" fontWeight="700" fill="#737782">®</text>
  </svg>
);

export const CPPlusIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="CP PLUS">
    <g transform="translate(6, 10)">
      <circle cx="14" cy="14" r="12" fill="#E31B23"/>
      <circle cx="14" cy="14" r="7" stroke="white" strokeWidth="2"/>
      <circle cx="14" cy="14" r="2.5" fill="white"/>
    </g>
    <text x="44" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="19" fontWeight="900" letterSpacing="0.5px" fill="#24252B">CP</text>
    <text x="75" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontSize="19" fontWeight="900" letterSpacing="0.5px" fill="#E31B23">PLUS</text>
    <text x="130" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7" fontWeight="700" fill="#737782">®</text>
  </svg>
);

export const SchneiderIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Schneider Electric">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#3DCD58"/>
      <path d="M7 16c0-4 4-8 8-8 1.5 0 2.8.5 3.8 1.4-1.2.3-2.3 1-3 2-1 1.4-1.3 3.2-1.3 5 0 2 .5 3.8 1.5 5.2-3.8-.4-9-2.6-9-5.6z" fill="white"/>
      <circle cx="19" cy="19" r="2.5" fill="white"/>
    </g>
    <text x="44" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="800" fill="#24252B">Schneider</text>
    <text x="44" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8.5" fontWeight="600" letterSpacing="1px" fill="#3DCD58">ELECTRIC</text>
  </svg>
);

export const CiscoIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="CISCO">
    <g transform="translate(6, 12)">
      <rect x="2" y="10" width="2" height="10" rx="1" fill="#1BA0D7"/>
      <rect x="6" y="6" width="2" height="14" rx="1" fill="#1BA0D7"/>
      <rect x="10" y="2" width="2" height="18" rx="1" fill="#1BA0D7"/>
      <rect x="14" y="6" width="2" height="14" rx="1" fill="#1BA0D7"/>
      <rect x="18" y="10" width="2" height="10" rx="1" fill="#1BA0D7"/>
      <rect x="22" y="14" width="2" height="6" rx="1" fill="#1BA0D7"/>
    </g>
    <text x="44" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="900" letterSpacing="2px" fill="#1BA0D7">CISCO</text>
  </svg>
);

export const FTTHCarrierIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Thane Fiber FTTH Carriers">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#F52619"/>
      <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="2.5"/>
      <circle cx="14" cy="14" r="1.5" fill="white"/>
      <path d="M7 7l4 4M21 7l-4 4M7 21l4-4M21 21l-4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="900" letterSpacing="0.5px" fill="#24252B">THANE FIBER</text>
    <text x="44" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="1px" fill="#F52619">FTTH CARRIERS</text>
  </svg>
);

export const TelecomLineIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Dedicated Leased Line Telecom Carrier">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#1D1363"/>
      <path d="M14 6v16M8 11h12M10 16h8M6 22h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="5" r="2" fill="#F52619"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.5px" fill="#24252B">LEASED LINE</text>
    <text x="44" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1px" fill="#1D1363">DEDICATED CARRIER</text>
  </svg>
);

export const ContractorIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Electrical & Interior Pre-Cabling Contractors">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#F59E0B"/>
      <path d="M7 19l4-4 4 4 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="9" r="2.5" fill="white"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.5px" fill="#24252B">CONTRACTORS</text>
    <text x="44" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1px" fill="#D97706">PRE-CABLING & INTERIORS</text>
  </svg>
);

export const DistributorIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Hardware Procurement Distributors">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#0284C7"/>
      <path d="M6 10l8-4 8 4-8 4-8-4z" stroke="white" strokeWidth="1.8" fill="none"/>
      <path d="M6 14l8 4 8-4M6 18l8 4 8-4" stroke="white" strokeWidth="1.8"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="900" letterSpacing="0.5px" fill="#24252B">DISTRIBUTORS</text>
    <text x="44" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1px" fill="#0284C7">HARDWARE PROCUREMENT</text>
  </svg>
);

export const SocietyIcon: React.FC<BrandIconProps> = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 160 48" fill="none" className={className} aria-label="Housing Societies & RWAs">
    <g transform="translate(6, 10)">
      <rect x="2" y="2" width="24" height="24" rx="6" fill="#059669"/>
      <path d="M5 21V10l9-6 9 6v11H5z" stroke="white" strokeWidth="1.8" fill="none"/>
      <rect x="11" y="14" width="6" height="7" fill="white"/>
    </g>
    <text x="44" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="900" letterSpacing="0.5px" fill="#24252B">SOCIETIES & RWAs</text>
    <text x="44" y="35" fontFamily="system-ui, -apple-system, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1px" fill="#059669">BUILDING FIBER & CCTV</text>
  </svg>
);

export type BrandKey = 
  | 'tp-link'
  | 'd-link'
  | 'netgear'
  | 'hikvision'
  | 'cp-plus'
  | 'schneider'
  | 'cisco'
  | 'ftth-carrier'
  | 'telecom-line'
  | 'contractor'
  | 'distributor'
  | 'society';

export const BRAND_COMPONENTS: Record<BrandKey, React.FC<BrandIconProps>> = {
  'tp-link': TPLinkIcon,
  'd-link': DLinkIcon,
  'netgear': NetgearIcon,
  'hikvision': HikvisionIcon,
  'cp-plus': CPPlusIcon,
  'schneider': SchneiderIcon,
  'cisco': CiscoIcon,
  'ftth-carrier': FTTHCarrierIcon,
  'telecom-line': TelecomLineIcon,
  'contractor': ContractorIcon,
  'distributor': DistributorIcon,
  'society': SocietyIcon,
};

export interface BrandLogoProps {
  brandKey?: string;
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * BrandLogo component that renders an inline SVG vector if a matching brandKey is found,
 * or gracefully renders a static <img> tag from public/brands/ as a fallback.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  brandKey, 
  src, 
  alt = "Brand Logo", 
  className = "h-7 max-w-full object-contain" 
}) => {
  // If brandKey is provided and recognized, render the inline React SVG component
  if (brandKey && BRAND_COMPONENTS[brandKey as BrandKey]) {
    const Component = BRAND_COMPONENTS[brandKey as BrandKey];
    return <Component className={className} />;
  }

  // Derive key from src path if possible (e.g. "/brands/tp-link.svg" -> "tp-link")
  if (src) {
    const match = src.match(/\/([^/]+)\.svg$/);
    const inferredKey = match ? (match[1] as BrandKey) : undefined;
    if (inferredKey && BRAND_COMPONENTS[inferredKey]) {
      const Component = BRAND_COMPONENTS[inferredKey];
      return <Component className={className} />;
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
      />
    );
  }

  return null;
};
