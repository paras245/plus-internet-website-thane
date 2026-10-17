import { createWhatsAppUrl } from './company';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  inclusions: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "internet-connection-assistance",
    number: "01",
    title: "Internet Connection Assistance",
    shortDescription: "Guidance on choosing and provisioning the right broadband speed, fiber termination, and local connectivity for your property.",
    fullDescription: "Whether setting up a new home fiber line or shifting connections in Thane, we assist you from initial feasibility checks to final Wi-Fi testing, ensuring minimal downtime and transparent terms.",
    image: "/images/hero_networking_setup_1792171252724.jpg",
    inclusions: [
      "Broadband plan consultation based on device count",
      "Thane building and society fiber feasibility check",
      "Coordination for fast on-site line installation",
      "Initial router setup and throughput speed test"
    ],
    idealFor: "New flat owners, tenants moving into Thane, and commercial tenants"
  },
  {
    id: "router-sales-configuration",
    number: "02",
    title: "Router Sales and Configuration",
    shortDescription: "Supply of high-grade dual-band and Wi-Fi 6 routers tailored to your property layout with complete on-site configuration.",
    fullDescription: "We supply top networking router hardware suited to your bandwidth requirements and program your SSIDs, WPA3 passwords, guest networks, and parental controls right at your premises.",
    image: "/images/product_wifi_router_1792171253044.jpg",
    inclusions: [
      "Hardware selection (Gigabit, Dual-Band, Wi-Fi 6)",
      "Secure SSID and encrypted password setup",
      "Channel tuning to avoid neighborhood radio interference",
      "Firmware updates and port mapping configuration"
    ],
    idealFor: "Homes experiencing lag, multi-device families, and WFH professionals"
  },
  {
    id: "wifi-installation-coverage",
    number: "03",
    title: "Wi-Fi Installation & Coverage Optimization",
    shortDescription: "Professional placement and tuning to eliminate Wi-Fi dead spots in thick-walled Thane apartments and multi-floor premises.",
    fullDescription: "Thane apartments often suffer from concrete wall signal absorption. We analyze RF coverage, identify interference sources, and deploy strategic access points or mesh nodes to ensure full-strength signals in every room.",
    image: "/images/hero_networking_setup_1792171252724.jpg",
    inclusions: [
      "On-site RF signal mapping and dead-zone audit",
      "Optimal router and antenna positioning",
      "Mesh node synchronization across bedrooms and balconies",
      "Speed verification in all corners before handover"
    ],
    idealFor: "2BHK/3BHK flats, duplex apartments, and bungalow residences"
  },
  {
    id: "network-switch-installation",
    number: "04",
    title: "Network Switch Installation",
    shortDescription: "Deployment of gigabit unmanaged and managed PoE switches for offices, residential societies, and smart homes.",
    fullDescription: "Consolidate wired network lines cleanly with commercial-grade switching. We install, rackmount, and patch switches to power security cameras, desktop PCs, smart TVs, and network storage.",
    image: "/images/product_network_switch_1792171253982.jpg",
    inclusions: [
      "Supply and mounting of 8, 16, or 24-port switches",
      "PoE budget calculation for CCTV and access points",
      "Port labeling and structured patch cord dressing",
      "VLAN segregation for guest and internal traffic"
    ],
    idealFor: "Corporate branches, retail shops, clinics, and smart home hubs"
  },
  {
    id: "cctv-camera-sales-installation",
    number: "05",
    title: "CCTV Camera Sales and Installation",
    shortDescription: "End-to-end surveillance system setup including high-resolution IP dome and bullet cameras with NVR recording and mobile access.",
    fullDescription: "Protect your residential premises, society gates, or retail showroom with reliable CCTV surveillance. We handle physical mounting, conduit laying, cable pulling, power distribution, and mobile app live viewing.",
    image: "/images/product_cctv_camera_1792171253771.jpg",
    inclusions: [
      "Site inspection and optimal camera angle planning",
      "Indoor dome and weatherproof outdoor bullet installation",
      "NVR / DVR storage and continuous recording configuration",
      "Secure smartphone app setup for remote live viewing"
    ],
    idealFor: "Housing societies, retail outlets, standalone offices, and private homes"
  },
  {
    id: "lan-cabling-structured-networking",
    number: "06",
    title: "LAN Cabling & Structured Networking",
    shortDescription: "Neat, concealed Cat6 Ethernet cabling, wall faceplates, patch panels, and server rack dressing.",
    fullDescription: "Avoid messy tangled cables. Our technicians run certified solid-copper Cat6 cabling through PVC conduits, terminate wall faceplates, and organize rackmount patch panels for durable, high-speed wired performance.",
    image: "/images/product_network_switch_1792171253982.jpg",
    inclusions: [
      "Cat6 pure copper cable pulling through conduits/raceways",
      "RJ45 crimping and keystone jack wall plate punching",
      "Fluke/continuity wire verification testing",
      "Cable labeling and rack management tidying"
    ],
    idealFor: "New office fitouts, renovated residences, and commercial facilities"
  },
  {
    id: "office-networking-solutions",
    number: "07",
    title: "Office Networking Solutions",
    shortDescription: "Comprehensive turnkey connectivity for small businesses, co-working spaces, clinics, and professional firms in Thane.",
    fullDescription: "We design and deploy robust office IT infrastructure: multi-SSID wireless, guest Wi-Fi portals, department LAN segmentation, printer networking, and backup internet line switching.",
    image: "/images/hero_networking_setup_1792171252724.jpg",
    inclusions: [
      "Workstation LAN port distribution",
      "Network printer and shared NAS integration",
      "Secure staff vs. guest Wi-Fi isolation",
      "Dual-WAN router setup for secondary backup ISP"
    ],
    idealFor: "IT consultancies, CA firms, law offices, and creative agencies"
  },
  {
    id: "troubleshooting-maintenance",
    number: "08",
    title: "Network Troubleshooting & Maintenance",
    shortDescription: "Rapid diagnosis and resolution for frequent disconnections, slow Wi-Fi speeds, IP conflicts, and hardware faults.",
    fullDescription: "When internet drops or connections crawl, call our local Thane team. We test fiber signal attenuation, replace oxidized connectors, fix router configuration issues, and restore stable speeds.",
    image: "/images/product_wifi_router_1792171253044.jpg",
    inclusions: [
      "Physical fiber line and patch cord continuity check",
      "Router channel and DNS/DHCP conflict diagnosis",
      "Elimination of packet loss and latency spikes",
      "Preventive inspection of rack and power adapters"
    ],
    idealFor: "Existing internet users experiencing repeated drops or speed drops"
  },
  {
    id: "access-point-extender-setup",
    number: "09",
    title: "Access Point & Wi-Fi Extender Setup",
    shortDescription: "Expansion of existing wireless networks using ceiling-mount gigabit access points or high-gain range extenders.",
    fullDescription: "Extend existing Wi-Fi coverage to upper floors, terraces, basements, or remote offices without changing your primary internet connection. We configure power-over-ethernet access points with uniform network credentials.",
    image: "/images/product_wifi_router_1792171253044.jpg",
    inclusions: [
      "Ceiling or wall mounting of commercial access points",
      "Single SSID configuration with roaming protocol",
      "PoE injector / PoE switch cable termination",
      "Coverage verification across target rooms"
    ],
    idealFor: "Duplexes, multi-room offices, and commercial showrooms"
  },
  {
    id: "equipment-supply",
    number: "10",
    title: "Networking Equipment Supply",
    shortDescription: "Direct supply of brand-certified routers, switches, patch cords, server racks, and surveillance hardware at competitive local rates.",
    fullDescription: "Get the right networking hardware delivered directly to your doorstep in Thane. From individual patch cords and crimpers to full server racks and 24-port switches, we supply verified equipment with manufacturer warranty.",
    image: "/images/product_network_switch_1792171253982.jpg",
    inclusions: [
      "Authentic hardware from leading technology brands",
      "Assistance with hardware specification selection",
      "Local Thane delivery and handover",
      "Optional on-site installation bundling"
    ],
    idealFor: "Contractors, electrical fitout teams, IT managers, and home users"
  }
];

export function getServiceWhatsAppUrl(service: ServiceItem): string {
  const message = `Hi Plus Internet, I need installation assistance for ${service.title} in Thane. Please let me know the details, availability, and charges.`;
  return createWhatsAppUrl(message);
}
