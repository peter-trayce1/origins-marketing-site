// Homepage pricing preview plans. Prices are not stored here; they are looked
// up per-currency from src/lib/currency.ts (PRICES) at render time. Feature
// lists are aligned with the full pricing page in
// src/app/pricing/PricingToggle.tsx.

export type HomePlan = {
  id: "essentials" | "growth" | "enterprise";
  name: string;
  description: string;
  features: string[];
  cta: string;
  /** "app" CTAs go into the Known Objects app and carry ?currency=. */
  ctaType: "app" | "internal";
  ctaPath: string;
  highlight: boolean;
};

export const homePlans: HomePlan[] = [
  {
    id: "essentials",
    name: "Essentials",
    description:
      "For smaller and growing brands starting to build connected product identities.",
    features: [
      "100 published passports / year",
      "Unlimited drafts, QR labels & scans",
      "AI Passport Builder",
      "Public passport pages",
      "Certification management",
      "CSV import & export",
    ],
    cta: "Start free trial",
    ctaType: "app",
    ctaPath: "/signup",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "For established brands managing larger product ranges, suppliers and teams.",
    features: [
      "500 published passports / year",
      "Unlimited drafts, QR labels & scans",
      "Everything in Essentials",
      "Supplier data requests",
      "Team members",
      "Advanced analytics",
      "Custom branding",
    ],
    cta: "Start free trial",
    ctaType: "app",
    ctaPath: "/signup",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "For brands, manufacturers and teams requiring higher volumes, integrations and dedicated support.",
    features: [
      "Custom publication allowance",
      "Everything in Growth",
      "ERP & PLM integration",
      "API access",
      "Supplier portal",
      "Dedicated success manager",
      "White-label options",
    ],
    cta: "Talk to us",
    ctaType: "internal",
    ctaPath: "/book-demo",
    highlight: false,
  },
];
