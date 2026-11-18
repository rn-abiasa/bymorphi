// Placeholder plans and prices. Replace with your real packages.
export type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "Rp 1.500.000",
    description: "One polished page that puts your menu, hours, and location in front of guests.",
    features: ["One-page website", "Menu and price list", "Maps and opening hours", "WhatsApp button", "Mobile friendly"],
  },
  {
    name: "Standard",
    price: "Rp 3.500.000",
    description: "A full site with room for your story, photos, and easy booking.",
    features: [
      "Up to 5 pages",
      "Reservation or order form",
      "Photo gallery",
      "Basic SEO setup",
      "Two rounds of revisions",
    ],
    featured: true,
  },
  {
    name: "Signature",
    price: "Rp 6.500.000",
    description: "A custom-designed site built around your brand, for places ready to stand out.",
    features: [
      "Custom design and layout",
      "Brand colors and type guide",
      "Online menu you can update",
      "Advanced SEO setup",
      "Priority support",
    ],
  },
];
