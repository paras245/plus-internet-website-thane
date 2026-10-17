import { createWhatsAppUrl } from './company';

export interface InternetPlan {
  id: string;
  name: string;
  speed: string; // e.g. 50 Mbps, 100 Mbps, 200 Mbps, 300 Mbps
  speedValue: number;
  priceMonthly: string; // e.g. "₹499" (editable placeholder)
  billingCycle: string;
  fupPolicy: string;
  installationFee: string;
  equipment: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
}

export const INTERNET_PLANS: InternetPlan[] = [
  {
    id: "essential",
    name: "Essential Plan",
    speed: "50 Mbps",
    speedValue: 50,
    priceMonthly: "₹499",
    billingCycle: "/month + taxes (sample rate)",
    fupPolicy: "Unlimited Data / Commercial FUP Applicable",
    installationFee: "Free on quarterly & annual commitments",
    equipment: "Wi-Fi router provided / BYO router option",
    idealFor: "1-3 Devices, web browsing, HD streaming & WFH basics",
    features: [
      "Symmetric upload & download speeds",
      "Low latency for smooth video calls & browsing",
      "Fiber-optic direct termination",
      "Priority customer WhatsApp support in Thane",
      "Quick local installation scheduling"
    ]
  },
  {
    id: "home-plus",
    name: "Home Plus",
    speed: "100 Mbps",
    speedValue: 100,
    priceMonthly: "₹749",
    billingCycle: "/month + taxes (sample rate)",
    fupPolicy: "Unlimited High-Speed Data",
    installationFee: "Zero installation charges with select plans",
    equipment: "Dual-band gigabit Wi-Fi router options available",
    isPopular: true,
    idealFor: "Family households, 4K Smart TVs & simultaneous gaming",
    features: [
      "Blazing 100 Mbps symmetric fiber speed",
      "Multi-device 4K Ultra HD video streaming",
      "Low ping for competitive online gaming",
      "Dual-band 2.4 GHz + 5 GHz compatibility",
      "Local Thane on-site technician dispatch"
    ]
  },
  {
    id: "ultra-stream",
    name: "Ultra Stream",
    speed: "200 Mbps",
    speedValue: 200,
    priceMonthly: "₹999",
    billingCycle: "/month + taxes (sample rate)",
    fupPolicy: "True Unlimited Fiber Data",
    installationFee: "Zero standard installation on eligible terms",
    equipment: "High-power dual-band gigabit router supported",
    idealFor: "Power users, content creators & large multi-room homes",
    features: [
      "Ultra-fast 200 Mbps gigabit pipe",
      "Zero buffering on concurrent heavy downloads",
      "Seamless multi-room video conferencing & cloud backups",
      "Dedicated bandwidth routing",
      "Direct engineer assistance via WhatsApp"
    ]
  },
  {
    id: "business-connect",
    name: "Business Connect",
    speed: "300+ Mbps",
    speedValue: 300,
    priceMonthly: "₹1,499",
    billingCycle: "/month + taxes (sample rate)",
    fupPolicy: "Commercial SLA & Unlimited Data",
    installationFee: "Custom network survey & free structured setup",
    equipment: "Enterprise router & switch integration support",
    idealFor: "Offices, commercial shops, retail spaces & clinics",
    features: [
      "High-throughput commercial bandwidth",
      "Static IP configuration available on request",
      "Multi-device office Wi-Fi & LAN switch support",
      "CCTV camera stream priority handling",
      "Dedicated relationship manager for business accounts"
    ]
  }
];

export function getPlanWhatsAppUrl(plan: InternetPlan): string {
  const message = `Hi Plus Internet, I am interested in the ${plan.name} (${plan.speed}) internet plan. Please share the confirmed pricing, availability, and installation details for my area in Thane.`;
  return createWhatsAppUrl(message);
}
