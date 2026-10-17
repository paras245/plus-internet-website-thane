import { createWhatsAppUrl } from './company';

export type ProductCategory = 
  | 'wifi-routers'
  | 'network-switches'
  | 'cctv-cameras'
  | 'accessories'
  | 'infrastructure';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  priceLabel: string; // e.g. "Price on Request" or "Request a Quote"
  availability: string;
  mainImage: string;
  thumbnails: string[];
  specifications: Record<string, string>;
  installationAvailable: boolean;
  featured?: boolean;
}

export const PRODUCT_CATEGORIES: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'wifi-routers', label: 'Wi-Fi Routers' },
  { id: 'network-switches', label: 'Network Switches' },
  { id: 'cctv-cameras', label: 'CCTV Cameras' },
  { id: 'accessories', label: 'Networking Accessories' },
  { id: 'infrastructure', label: 'Networking Infrastructure' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'wifi-6-gigabit-router',
    name: 'Dual-Band Wi-Fi 6 Gigabit Router',
    category: 'wifi-routers',
    categoryLabel: 'Wi-Fi Routers',
    shortDescription: 'High-performance AX3000 gigabit router with multi-beamforming antennas for seamless 4K streaming and high coverage.',
    fullDescription: 'Engineered for dense device environments, this dual-band Wi-Fi 6 router delivers blazing wireless speeds up to 3000 Mbps with OFDMA and MU-MIMO technology. Ideal for 2BHK/3BHK flats, duplexes, and small office spaces in Thane. Comes with gigabit WAN and 4 gigabit LAN ports.',
    priceLabel: 'Price on Request',
    availability: 'Available / Ready to Configure',
    mainImage: '/images/product_wifi_router_1792171253044.jpg',
    thumbnails: [
      '/images/product_wifi_router_1792171253044.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg',
      '/images/hero_networking_setup_1792171252724.jpg',
      '/images/product_mesh_wifi_node_1792172707311.jpg'
    ],
    specifications: {
      'Wi-Fi Standard': 'Wi-Fi 6 (802.11ax/ac/n/g/b/a)',
      'Speed Rating': 'AX3000 (2402 Mbps on 5GHz + 574 Mbps on 2.4GHz)',
      'Ethernet Ports': '1x Gigabit WAN + 4x Gigabit LAN',
      'Antennas': '4x High-gain external omni antennas',
      'Security': 'WPA3 Personal, SPI Firewall, Guest Network',
      'Coverage': 'Up to 2,000 sq. ft. typical residential layout'
    },
    installationAvailable: true,
    featured: true
  },
  {
    id: 'high-coverage-mesh-router',
    name: 'Whole-Home Mesh Wi-Fi System',
    category: 'wifi-routers',
    categoryLabel: 'Wi-Fi Routers',
    shortDescription: 'Multi-node mesh system eliminating dead zones across multi-level residences, large offices, and row houses.',
    fullDescription: 'Say goodbye to Wi-Fi dead spots. This mesh Wi-Fi system creates a unified network under a single SSID with seamless roaming between rooms and floors. Designed for larger residential flats, bungalows, and retail premises in Thane.',
    priceLabel: 'Price on Request',
    availability: 'Available on Order',
    mainImage: '/images/product_mesh_wifi_node_1792172707311.jpg',
    thumbnails: [
      '/images/product_mesh_wifi_node_1792172707311.jpg',
      '/images/hero_networking_setup_1792171252724.jpg',
      '/images/product_wifi_router_1792171253044.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg'
    ],
    specifications: {
      'Coverage Area': 'Up to 3,500 – 4,500 sq. ft. with multi-pack',
      'Roaming Protocol': '802.11k/v/r Seamless Handover',
      'Frequency': 'Simultaneous Dual-Band AC/AX',
      'Management': 'Mobile App & Web GUI Administration',
      'Node Ports': '2x Auto-sensing Gigabit ports per unit'
    },
    installationAvailable: true,
    featured: true
  },
  {
    id: 'poe-gigabit-switch-24port',
    name: '24-Port Gigabit Smart PoE+ Network Switch',
    category: 'network-switches',
    categoryLabel: 'Network Switches',
    shortDescription: 'Commercial rackmount switch delivering high power PoE+ for CCTV cameras, IP phones, and wireless access points.',
    fullDescription: 'Heavy-duty 24-port Gigabit Ethernet switch equipped with IEEE 802.3at/af PoE+ capability. Built with a rugged metal chassis, intelligent power budget management, and SFP uplink slots. Ideal for commercial offices, clinics, housing societies, and retail establishments in Thane.',
    priceLabel: 'Price on Request',
    availability: 'Available / Ready for Deployment',
    mainImage: '/images/product_network_switch_1792171253982.jpg',
    thumbnails: [
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_office_server_rack_1792172708567.jpg',
      '/images/product_cctv_camera_1792171253771.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg'
    ],
    specifications: {
      'Total Ports': '24x 10/100/1000 Mbps RJ45 + 2x Gigabit SFP Slots',
      'PoE Capability': 'PoE+ (30W per port, up to 250W total budget)',
      'Switching Capacity': '52 Gbps Non-blocking',
      'Form Factor': '19-inch 1U standard rackmount',
      'Management': 'Smart Web UI, VLAN, QoS, IGMP Snooping'
    },
    installationAvailable: true,
    featured: true
  },
  {
    id: 'unmanaged-desktop-switch-8port',
    name: '8-Port Gigabit Desktop Ethernet Switch',
    category: 'network-switches',
    categoryLabel: 'Network Switches',
    shortDescription: 'Compact, silent plug-and-play desktop switch for expanding wired connections in home offices and retail desks.',
    fullDescription: 'Easily expand your wired network to computers, NAS drives, smart TVs, and gaming consoles. Fanless silent design with sturdy metal casing and auto-negotiation MDI/MDIX on all ports.',
    priceLabel: 'Price on Request',
    availability: 'In Stock',
    mainImage: '/images/product_network_switch_1792171253982.jpg',
    thumbnails: [
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_office_server_rack_1792172708567.jpg',
      '/images/hero_networking_setup_1792171252724.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg'
    ],
    specifications: {
      'Ports': '8x 10/100/1000 Mbps Gigabit Ports',
      'Enclosure': 'Durable metal housing, wall-mountable',
      'Cooling': 'Fanless quiet operation',
      'Architecture': 'Store-and-forward switching',
      'Standard': 'IEEE 802.3az Energy Efficient Ethernet'
    },
    installationAvailable: true,
    featured: false
  },
  {
    id: 'ip-dome-cctv-camera',
    name: 'Commercial HD IP Dome Security Camera',
    category: 'cctv-cameras',
    categoryLabel: 'CCTV Cameras',
    shortDescription: 'High-resolution indoor/outdoor dome camera with infrared night vision, wide dynamic range, and vandal-resistant housing.',
    fullDescription: 'Professional grade IP surveillance camera designed for crystal-clear 24/7 video recording. Features smart infrared night vision, weather resistance, and PoE support for single-cable data and power delivery. Ideal for apartment lobbies, stores, and office entrances in Thane.',
    priceLabel: 'Price on Request',
    availability: 'In Stock / Installation Available',
    mainImage: '/images/product_cctv_camera_1792171253771.jpg',
    thumbnails: [
      '/images/product_cctv_camera_1792171253771.jpg',
      '/images/product_cctv_bullet_1792172707540.jpg',
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_office_server_rack_1792172708567.jpg'
    ],
    specifications: {
      'Sensor': 'High-Definition CMOS Sensor',
      'Lens': '2.8mm / 4mm Wide-angle Fixed Lens',
      'Night Vision': 'IR Range up to 30 meters with Smart IR',
      'Power Supply': 'PoE (802.3af) or 12V DC',
      'Housing': 'IP67 Weatherproof & IK10 Vandal-proof'
    },
    installationAvailable: true,
    featured: true
  },
  {
    id: 'outdoor-bullet-cctv-camera',
    name: 'Outdoor Weatherproof Bullet CCTV Camera',
    category: 'cctv-cameras',
    categoryLabel: 'CCTV Cameras',
    shortDescription: 'Heavy-duty perimeter surveillance camera with long-range night vision and motion detection for building compounds.',
    fullDescription: 'Designed for residential society perimeters, parking lots, and commercial building gates. Provides sharp video day and night with enhanced weather sealing to withstand Mumbai monsoons.',
    priceLabel: 'Price on Request',
    availability: 'Available on Order',
    mainImage: '/images/product_cctv_bullet_1792172707540.jpg',
    thumbnails: [
      '/images/product_cctv_bullet_1792172707540.jpg',
      '/images/product_cctv_camera_1792171253771.jpg',
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_office_server_rack_1792172708567.jpg'
    ],
    specifications: {
      'Resolution': '1080p / 4MP options',
      'Weather Protection': 'IP67 all-weather rated',
      'IR Distance': 'Up to 40 meters infrared illumination',
      'Connection': 'PoE Ethernet RJ45 Interface',
      'Storage': 'MicroSD card slot + NVR Recording compatibility'
    },
    installationAvailable: true,
    featured: false
  },
  {
    id: 'cat6-utp-cable-bundle',
    name: 'Cat6 Pure Copper High-Speed LAN Cable',
    category: 'accessories',
    categoryLabel: 'Networking Accessories',
    shortDescription: '100% solid copper 23AWG Cat6 Ethernet cable roll for gigabit backbone wiring and high-bandwidth data transfers.',
    fullDescription: 'Reliable, low-interference networking cable suitable for structured building installations, connecting switches, Wi-Fi access points, and CCTV cameras. Low crosstalk with central spline separator.',
    priceLabel: 'Price on Request',
    availability: 'Available by Length / Full Drum (305m)',
    mainImage: '/images/hero_office_server_rack_1792172708567.jpg',
    thumbnails: [
      '/images/hero_office_server_rack_1792172708567.jpg',
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg',
      '/images/hero_networking_setup_1792171252724.jpg'
    ],
    specifications: {
      'Conductor': '23 AWG Solid Bare Copper',
      'Bandwidth': 'Up to 250 MHz / 1000BASE-T Gigabit',
      'Jacket': 'Flame-retardant PVC / LSZH options',
      'Standard': 'TIA/EIA-568-C.2 Compliant',
      'Applications': 'Gigabit Ethernet, CCTV IP PoE, Intercom'
    },
    installationAvailable: true,
    featured: false
  },
  {
    id: 'network-patch-cords-connectors',
    name: 'RJ45 Connectors & Molded Snagless Patch Cords',
    category: 'accessories',
    categoryLabel: 'Networking Accessories',
    shortDescription: 'Factory-tested patch cables and gold-plated RJ45 crimp plugs for neat server racks and desktop connections.',
    fullDescription: 'High quality gold-plated pins ensure minimal signal degradation and corrosion resistance. Available in multiple lengths (1m, 2m, 3m, 5m, 10m) with molded strain-relief boots.',
    priceLabel: 'Price on Request',
    availability: 'In Stock',
    mainImage: '/images/product_network_switch_1792171253982.jpg',
    thumbnails: [
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_office_server_rack_1792172708567.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg',
      '/images/product_wifi_router_1792171253044.jpg'
    ],
    specifications: {
      'Contact Plating': '50 Micron Gold Plating',
      'Wire Gauge': '24/26 AWG Stranded Copper',
      'Lengths': '1 Meter to 15 Meters readily available',
      'Boot Type': 'Snagless protective boot'
    },
    installationAvailable: false,
    featured: false
  },
  {
    id: 'server-network-rack-cabinet',
    name: 'Wall-Mount & Floor Server Rack Enclosure',
    category: 'infrastructure',
    categoryLabel: 'Networking Infrastructure',
    shortDescription: 'Standard 19-inch equipment racks (4U, 6U, 9U, 12U) with lockable glass doors, fan trays, and cable management.',
    fullDescription: 'Keep your routers, NVRs, network switches, and power supplies securely locked, cooled, and organized. Features powder-coated cold-rolled steel, cable entry punch-outs, and earthing provisions.',
    priceLabel: 'Price on Request',
    availability: 'Available / Custom Sizing on Request',
    mainImage: '/images/hero_office_server_rack_1792172708567.jpg',
    thumbnails: [
      '/images/hero_office_server_rack_1792172708567.jpg',
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg',
      '/images/product_cctv_camera_1792171253771.jpg'
    ],
    specifications: {
      'Rack Sizes': '4U, 6U, 9U, 12U wall-mount / larger floor units',
      'Material': 'SPCC Cold Rolled Steel',
      'Front Door': 'Toughened glass door with key lock',
      'Ventilation': 'Top fan mounting slots & side vents',
      'Accessories Included': 'Cable management channel & hardware nuts'
    },
    installationAvailable: true,
    featured: true
  },
  {
    id: 'structured-cabling-patch-panel',
    name: '24-Port Cat6 Rackmount Patch Panel',
    category: 'infrastructure',
    categoryLabel: 'Networking Infrastructure',
    shortDescription: '1U 19-inch termination panel for organized office LAN distribution and server rack dressing.',
    fullDescription: 'Essential for clean, manageable structured cabling in corporate offices and commercial facilities. Color-coded 110/Krone IDC termination blocks with rear cable tie management bar.',
    priceLabel: 'Price on Request',
    availability: 'Available on Order',
    mainImage: '/images/hero_office_server_rack_1792172708567.jpg',
    thumbnails: [
      '/images/hero_office_server_rack_1792172708567.jpg',
      '/images/product_network_switch_1792171253982.jpg',
      '/images/hero_technician_fiber_1792172707801.jpg',
      '/images/product_mesh_wifi_node_1792172707311.jpg'
    ],
    specifications: {
      'Port Count': '24-Port 1U 19-inch rack unit',
      'Termination': 'Dual IDC (110 & Krone compatible)',
      'Labeling': 'Numbered ports with writable label fields',
      'Standard': 'Cat6 EIA/TIA 568A/B'
    },
    installationAvailable: true,
    featured: false
  }
];

export function getProductWhatsAppUrl(product: Product, includeInstallation: boolean = false): string {
  if (includeInstallation) {
    const message = `Hi Plus Internet, I am interested in purchasing ${product.name} along with professional installation in Thane. Please share the pricing, equipment availability, and installation charges.`;
    return createWhatsAppUrl(message);
  }
  const message = `Hi Plus Internet, I am interested in ${product.name}. Please share the price, specifications, and availability in Thane.`;
  return createWhatsAppUrl(message);
}
