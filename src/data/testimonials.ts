export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  category: 'All' | 'Work From Home' | 'Home Fiber' | 'Commercial LAN' | 'Wi-Fi & CCTV';
  planOrService: string;
  quote: string;
  rating: number;
  timeframe: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'priya-mehta',
    name: 'Priya Mehta',
    initials: 'PM',
    location: 'Ghodbunder Road, Thane',
    category: 'Work From Home',
    planOrService: '200 Mbps Symmetric Fiber',
    quote: 'Switched to Plus Internet 2 years ago and haven\'t looked back. The 200 Mbps plan handles all our heavy work-from-home requirements, simultaneous HD client presentations, and 4K family streaming without any buffering. Their local Thane technician team is just a quick WhatsApp message away.',
    rating: 5,
    timeframe: 'Customer since 2024',
    verified: true
  },
  {
    id: 'rajesh-deshmukh',
    name: 'Rajesh Deshmukh',
    initials: 'RD',
    location: 'Panchpakhadi, Thane West',
    category: 'Home Fiber',
    planOrService: 'Dual-Band Wi-Fi 6 Router + 100 Mbps',
    quote: 'Our old connection kept dropping in the master bedroom due to thick concrete walls. Plus Internet recommended a high-gain Wi-Fi 6 router and tested signal coverage room-by-room during doorstep installation. The entire flat now enjoys full signal with zero dead zones.',
    rating: 5,
    timeframe: 'Customer since 2023',
    verified: true
  },
  {
    id: 'sanjay-patel',
    name: 'Sanjay Patel',
    initials: 'SP',
    location: 'Wagle Industrial Estate, Thane',
    category: 'Commercial LAN',
    planOrService: 'Office LAN Cabling & PoE Switch',
    quote: 'We hired Plus Internet to wire Cat6 Ethernet drops and install a 16-port PoE switch for our 18-person agency office. The cabling was cleanly concealed inside wall channels with zero clutter, and network throughput has been 100% reliable every business day.',
    rating: 5,
    timeframe: 'Commercial Client',
    verified: true
  },
  {
    id: 'ananya-kulkarni',
    name: 'Ananya Kulkarni',
    initials: 'AK',
    location: 'Hiranandani Estate, Thane',
    category: 'Wi-Fi & CCTV',
    planOrService: '300 Mbps Fiber + CCTV Surveillance',
    quote: 'Got both high-speed optical fiber and a 4-camera CCTV surveillance system set up for our ground-floor duplex flat. Both wireless speeds and live phone monitoring work seamlessly. Professional technicians who took care of society permissions.',
    rating: 5,
    timeframe: 'Customer since 2024',
    verified: true
  },
  {
    id: 'vikram-joshi',
    name: 'Vikram Joshi',
    initials: 'VJ',
    location: 'Naupada, Thane West',
    category: 'Home Fiber',
    planOrService: '100 Mbps High-Speed Plan',
    quote: 'Clear, upfront pricing with no hidden equipment rental charges. Installation was done within 24 hours of reaching out on WhatsApp. Gaming ping dropped significantly and video calls connect instantly. Best broadband experience in Thane.',
    rating: 5,
    timeframe: 'Customer since 2025',
    verified: true
  }
];
