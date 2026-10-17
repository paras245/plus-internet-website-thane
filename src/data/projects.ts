export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  locationArea: string; // Sample general location in Thane
  equipmentUsed: string;
  description: string;
  images: string[];
}

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "residential-mesh-wifi",
    title: "Multi-Room Wi-Fi Optimization (Sample Layout)",
    category: "Home Wi-Fi Setup",
    locationArea: "Ghodbunder Road, Thane",
    equipmentUsed: "Dual-Band Wi-Fi 6 Mesh Nodes & Cat6 Backhaul",
    description: "Eliminated dead spots in a 3BHK high-rise apartment by installing dual mesh nodes connected via concealed Ethernet backhaul, ensuring uniform signal in all bedrooms and balcony work area.",
    images: [
      "/images/hero_networking_setup_1792171252724.jpg",
      "/images/product_wifi_router_1792171253044.jpg"
    ]
  },
  {
    id: "corporate-office-lan",
    title: "18-Seat Office Structured LAN & Wi-Fi (Sample Setup)",
    category: "Office Networking",
    locationArea: "Wagle Estate, Thane",
    equipmentUsed: "24-Port Gigabit Switch, 6U Wall Rack & Cat6 Cable",
    description: "Deployed clean structured cabling from a 6U wall server rack to individual employee desks with faceplate termination and dual-SSID office wireless for staff and visitors.",
    images: [
      "/images/product_network_switch_1792171253982.jpg",
      "/images/hero_networking_setup_1792171252724.jpg"
    ]
  },
  {
    id: "retail-cctv-surveillance",
    title: "Retail Showroom CCTV Surveillance (Sample Deployment)",
    category: "CCTV Installation",
    locationArea: "Naupada, Thane",
    equipmentUsed: "4x High-Definition IP Dome Cameras, 8-Port PoE Switch & NVR",
    description: "Installed ceiling dome cameras covering the cash counter, display racks, and customer entryway, configured with 30-day continuous recording and secure smartphone remote monitoring.",
    images: [
      "/images/product_cctv_camera_1792171253771.jpg",
      "/images/product_network_switch_1792171253982.jpg"
    ]
  },
  {
    id: "clinic-network-and-switch",
    title: "Healthcare Clinic Network & Backup Router (Sample Deployment)",
    category: "Small Business Connectivity",
    locationArea: "Panchpakhadi, Thane",
    equipmentUsed: "Gigabit Dual-Band Router & 8-Port Metal Switch",
    description: "Set up isolated network lines for patient reception, doctor consulting rooms, and billing systems with zero signal drops.",
    images: [
      "/images/product_wifi_router_1792171253044.jpg",
      "/images/product_network_switch_1792171253982.jpg"
    ]
  },
  {
    id: "housing-society-cabling",
    title: "Apartment Lobby & Gate Intercom Cabling (Sample Project)",
    category: "Structured Cabling",
    locationArea: "Majiwada, Thane",
    equipmentUsed: "Cat6 Solid Copper Cable & Outdoor Conduit Raceways",
    description: "Concealed heavy-duty networking cabling linking security gate cameras and reception desk to the central network cabinet.",
    images: [
      "/images/product_network_switch_1792171253982.jpg",
      "/images/product_cctv_camera_1792171253771.jpg"
    ]
  }
];
