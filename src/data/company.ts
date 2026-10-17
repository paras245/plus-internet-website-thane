export const COMPANY_INFO = {
  name: "Plus Internet",
  tagline: "Reliable Internet. Smarter Connectivity.",
  subheadline: "Internet solutions, networking products, and professional installation for homes and businesses in Thane.",
  
  // Official Physical Store Address
  fullAddress: "SHOP NO.1, near MAKHMALI TALAV, Neelkanth Society, Ganeshwadi, Thane West, Thane, Maharashtra 400601",
  shortAddress: "Shop No.1, Neelkanth Society, Near Makhmali Talav, Ganeshwadi, Thane West",
  shopNumber: "SHOP NO.1",
  landmark: "Near Makhmali Talav",
  society: "Neelkanth Society",
  area: "Ganeshwadi, Thane West",
  city: "Thane",
  state: "Maharashtra",
  pincode: "400601",
  country: "India",
  location: "SHOP NO.1, near MAKHMALI TALAV, Neelkanth Society, Ganeshwadi, Thane West, Thane 400601",
  
  // Coordinates
  coordinates: {
    lat: 19.1982,
    lng: 72.9715
  },
  
  // Contact Channels
  phone: "+91 81085 05678",
  phoneRaw: "+918108505678",
  email: "plusinternet@gmail.com",
  
  // Maps & Navigation Links
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SHOP+NO.1+near+MAKHMALI+TALAV+Neelkanth+Society+Ganeshwadi+Thane+West+Maharashtra+400601",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=SHOP+NO.1+near+MAKHMALI+TALAV+Neelkanth+Society+Ganeshwadi+Thane+West+Maharashtra+400601",
  
  // Store Timings
  storeHours: [
    { days: "Monday – Saturday", hours: "9:30 AM – 8:30 PM", status: "Open" },
    { days: "Sunday", hours: "10:00 AM – 4:00 PM", status: "Open" }
  ],
  
  // Nearby Localities Serviced
  servingAreas: [
    "Ganeshwadi & Makhmali Talav",
    "Ghodbunder Road",
    "Naupada",
    "Panchpakhadi",
    "Vartak Nagar",
    "Majiwada",
    "Hiranandani Estate",
    "Wagle Estate",
    "Kasarvadavali",
    "Thane West & East"
  ]
};

export function createWhatsAppUrl(message: string): string {
  const base = `https://wa.me/918108505678`;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
