"use client";

import { useState } from "react";
import { APP_URL } from "@/lib/utils";
import { Check } from "lucide-react";

type Billing = "monthly" | "annual";

type Feature =
  | string
  | { text: string; sub: string }
  | { divider: true };

const plans: {
  name: string;
  monthly: { price: string; period: string };
  annual: { price: string; period: string };
  tagline: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  ctaHref: string;
  features: Feature[];
}[] = [
  {
    name: "Essentials",
    monthly: { price: "£375", period: "/month" },
    annual: { price: "£3,750", period: "/year" },
    tagline: "Perfect for emerging and growing brands.",
    highlight: false,
    cta: "Start Trial",
    ctaHref: `${APP_URL}/signup`,
    features: [
      {
        text: "250 passport publications per year",
        sub: "Unlimited QR labels · Unlimited scans",
      },
      "AI Passport Builder",
      "QR Code Generation",
      "Public Passport Pages",
      "Certification Management",
      "Product Storytelling",
      "CSV Import & Export",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    monthly: { price: "£795", period: "/month" },
    annual: { price: "£7,950", period: "/year" },
    tagline: "For established brands managing larger product ranges.",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Trial",
    ctaHref: `${APP_URL}/signup`,
    features: [
      {
        text: "750 passport publications per year",
        sub: "Unlimited QR labels · Unlimited scans",
      },
      { divider: true },
      "Everything in Essentials, plus:",
      "Supplier Data Requests",
      "Team Members",
      "Advanced Analytics",
      "Passport Templates",
      "Custom Branding",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    monthly: { price: "Custom", period: "" },
    annual: { price: "Custom", period: "" },
    tagline:
      "For brands, manufacturers and enterprise teams requiring higher volumes and integrations.",
    highlight: false,
    cta: "Talk to Us",
    ctaHref: "/book-demo",
    features: [
      {
        text: "Custom publication allowance",
        sub: "Unlimited QR labels · Unlimited scans",
      },
      { divider: true },
      "Everything in Growth, plus:",
      "ERP & PLM Integration",
      "API Access",
      "Supplier Portal",
      "Dedicated Success Manager",
      "White Label Options",
      "Custom Compliance Workflows",
    ],
  },
];

function FeatureItem({
  feature,
  highlight,
}: {
  feature: Feature;
  highlight: boolean;
}) {
  if (typeof feature === "object" && "divider" in feature) {
    return <div className={`h-px my-1 ${highlight ? "bg-white/10" : "bg-[#E8E8E6]"}`} />;
  }

  if (typeof feature === "object" && "sub" in feature) {
    return (
      <li className="flex items-start gap-2.5">
        <Check
          size={13}
          className={`mt-0.5 shrink-0 ${highlight ? "text-white/70" : "text-[#0A0A0A]"}`}
          strokeWidth={2.5}
        />
        <div>
          <div className={`text-sm font-semibold ${highlight ? "text-white/90" : "text-[#0A0A0A]"}`}>
            {feature.text}
          </div>
          <div className={`text-xs mt-0.5 ${highlight ? "text-white/40" : "text-[#8C8C8C]"}`}>
            {feature.sub}
          </div>
        </div>
      </li>
    );
  }

  const text = feature as string;
  const isEverything = text.startsWith("Everything in");

  return (
    <li className={`flex items-start gap-2.5 ${isEverything ? "opacity-60" : ""}`}>
      {!isEverything && (
        <Check
          size={13}
          className={`mt-0.5 shrink-0 ${highlight ? "text-white/70" : "text-[#0A0A0A]"}`}
          strokeWidth={2.5}
        />
      )}
      <span
        className={`text-sm ${
          isEverything
            ? highlight
              ? "text-white/50 italic"
              : "text-[#8C8C8C] italic"
            : highlight
            ? "text-white/70"
            : "text-[#525252]"
        } ${isEverything ? "ml-[21px]" : ""}`}
      >
        {text}
      </span>
    </li>
  );
}

export default function PricingToggle() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Toggle */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-1 bg-[#F4F4F3] rounded-xl p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                billing === "monthly"
                  ? "bg-white text-[#0A0A0A] shadow-sm"
                  : "text-[#8C8C8C] hover:text-[#525252]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-white text-[#0A0A0A] shadow-sm"
                  : "text-[#8C8C8C] hover:text-[#525252]"
              }`}
            >
              Annual
              <span className="text-[10px] font-semibold text-green-700 bg-[#EDFAED] px-1.5 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => {
            const pricing = billing === "annual" ? plan.annual : plan.monthly;
            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 flex flex-col gap-6 ${
                  plan.highlight
                    ? "bg-[#0A0A0A] ring-1 ring-[#0A0A0A]"
                    : "bg-white border border-[#E8E8E6]"
                }`}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        plan.highlight ? "text-white/50" : "text-[#8C8C8C]"
                      }`}
                    >
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/15 text-white rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className={`text-4xl font-semibold tracking-tight ${
                        plan.highlight ? "text-white" : "text-[#0A0A0A]"
                      }`}
                    >
                      {pricing.price}
                    </span>
                    {pricing.period && (
                      <span
                        className={`text-sm ${
                          plan.highlight ? "text-white/40" : "text-[#8C8C8C]"
                        }`}
                      >
                        {pricing.period}
                      </span>
                    )}
                  </div>

                  {billing === "annual" && pricing.price !== "Custom" && (
                    <p
                      className={`text-xs mb-3 ${
                        plan.highlight ? "text-[#2ECC71]" : "text-[#2ECC71]"
                      }`}
                    >
                      Save 17% with annual billing
                    </p>
                  )}

                  <p
                    className={`text-sm leading-relaxed mt-2 ${
                      plan.highlight ? "text-white/60" : "text-[#525252]"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-white text-[#0A0A0A] hover:bg-white/90"
                      : "bg-[#0E6EEA] text-white hover:bg-[#0C5CD0]"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-2.5 pt-1 border-t border-white/10">
                  {plan.features.map((feat, i) => (
                    <FeatureItem key={i} feature={feat} highlight={plan.highlight} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-[#8C8C8C] mt-8">
          All prices exclude VAT. Annual billing invoiced once per year.
        </p>
      </div>
    </section>
  );
}
