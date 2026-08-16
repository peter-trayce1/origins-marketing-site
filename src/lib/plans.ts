import { APP_URL } from "@/lib/utils";

// Homepage pricing preview plans. Feature lists are aligned with the full
// pricing page in src/app/pricing/PricingToggle.tsx.

export type HomePlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlight: boolean;
};

export const homePlans: HomePlan[] = [
  {
    name: "Essentials",
    price: "£150",
    period: "/mo",
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
    href: `${APP_URL}/signup`,
    highlight: false,
  },
  {
    name: "Growth",
    price: "£450",
    period: "/mo",
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
    href: `${APP_URL}/signup`,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
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
    href: "/book-demo",
    highlight: false,
  },
];
