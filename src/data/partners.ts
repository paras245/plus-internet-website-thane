import { BrandKey } from '../components/brand-icons/BrandLogos';

export interface PartnerItem {
  name: string;
  type: string;
  status: 'Supported Equipment Hardware' | 'Upstream Network Carrier (Subject to Local Feasibility)' | 'Open for Collaboration';
  note: string;
  iconPath: string;
  brandKey?: BrandKey;
}

export interface PartnerTier {
  id: string;
  category: 'supported-hardware' | 'network-carriers' | 'prospective';
  title: string;
  description: string;
  items: PartnerItem[];
}

export const PARTNERS_DATA: PartnerTier[] = [
  {
    id: "supported-hardware",
    category: "supported-hardware",
    title: "Equipment Brands Supported & Installed",
    description: "Hardware brands frequently deployed, configured, and maintained by our technicians. Mention of brands reflects hardware compatibility and technical deployment experience, not exclusive proprietary endorsement.",
    items: [
      {
        name: "TP-Link / Archer",
        type: "Wi-Fi 6 Routers & Mesh Units",
        status: "Supported Equipment Hardware",
        note: "Dual-band wireless routers, Deco mesh systems & gigabit switches",
        iconPath: "/brands/tp-link.svg",
        brandKey: "tp-link"
      },
      {
        name: "D-Link",
        type: "Ethernet Switches & Routers",
        status: "Supported Equipment Hardware",
        note: "Fast Ethernet / Gigabit unmanaged switches and home Wi-Fi",
        iconPath: "/brands/d-link.svg",
        brandKey: "d-link"
      },
      {
        name: "Netgear",
        type: "Managed & PoE Switches",
        status: "Supported Equipment Hardware",
        note: "ProSafe switches, business APs & multi-antenna Wi-Fi",
        iconPath: "/brands/netgear.svg",
        brandKey: "netgear"
      },
      {
        name: "Hikvision",
        type: "CCTV Surveillance Systems",
        status: "Supported Equipment Hardware",
        note: "IP dome cameras, bullet cameras & network video recorders",
        iconPath: "/brands/hikvision.svg",
        brandKey: "hikvision"
      },
      {
        name: "CP Plus",
        type: "Security & Camera Hardware",
        status: "Supported Equipment Hardware",
        note: "Indoor and outdoor residential & commercial surveillance",
        iconPath: "/brands/cp-plus.svg",
        brandKey: "cp-plus"
      },
      {
        name: "Schneider / D-Link Structured Cabling",
        type: "Cat6 Cabling & Racks",
        status: "Supported Equipment Hardware",
        note: "Solid copper Cat6 drums, patch cords, keystone jacks & patch panels",
        iconPath: "/brands/schneider.svg",
        brandKey: "schneider"
      }
    ]
  },
  {
    id: "network-carriers",
    category: "network-carriers",
    title: "Upstream Telecom & Fiber Feasibility",
    description: "Local area fiber infrastructure connectivity in Thane. Final connection availability depends on residential society fiber permissions, building duct clearance, and local DP distribution.",
    items: [
      {
        name: "Local Thane Fiber Infrastructure",
        type: "Fiber-to-the-Home (FTTH)",
        status: "Upstream Network Carrier (Subject to Local Feasibility)",
        note: "High-speed optical fiber delivery across Thane West & East sectors",
        iconPath: "/brands/ftth-carrier.svg",
        brandKey: "ftth-carrier"
      },
      {
        name: "Commercial Leased Line Carriers",
        type: "Dedicated Business Internet",
        status: "Upstream Network Carrier (Subject to Local Feasibility)",
        note: "Static IP routing and commercial bandwidth for corporate premises",
        iconPath: "/brands/telecom-line.svg",
        brandKey: "telecom-line"
      }
    ]
  },
  {
    id: "prospective",
    category: "prospective",
    title: "Supplier & Technical Collaboration",
    description: "Are you a networking distributor, electrical contractor, interior designer, or IT service provider in Thane? Partner with Plus Internet for mutual hardware supply and client installations.",
    items: [
      {
        name: "Electrical & Interior Contractors",
        type: "Pre-Cabling Collaboration",
        status: "Open for Collaboration",
        note: "Coordinate structured cabling conduits during home and office interior renovations",
        iconPath: "/brands/contractor.svg",
        brandKey: "contractor"
      },
      {
        name: "Hardware Wholesalers & Distributors",
        type: "Equipment Procurement",
        status: "Open for Collaboration",
        note: "Direct bulk sourcing of routers, PoE switches, racks, and Cat6 reels",
        iconPath: "/brands/distributor.svg",
        brandKey: "distributor"
      },
      {
        name: "Housing Society Management Committees",
        type: "Society Fiber Cabling & CCTV",
        status: "Open for Collaboration",
        note: "Society-wide CCTV maintenance contracts and clean riser cabling",
        iconPath: "/brands/society.svg",
        brandKey: "society"
      }
    ]
  }
];
