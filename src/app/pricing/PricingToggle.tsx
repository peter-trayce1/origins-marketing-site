"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PRICES } from "@/lib/currency";
import { useCurrency } from "@/components/currency/CurrencyProvider";
import { CurrencySelector } from "@/components/currency/CurrencySelector";
import { AppLink } from "@/components/currency/AppLink";

type Billing = "monthly" | "annual";

type Plan = {
  id: "essentials" | "growth" | "enterprise";
  name: string;
  custom?: boolean;
  positioning: string;
  allowance: string;
  cta: string;
  ctaType: "app" | "internal";
  ctaPath: string;
  highlight: boolean;
  badge?: string;
  everythingLine?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: "essentials",
    name: "Essentials",
    positioning:
      "For smaller and growing brands starting to build connected product identities.",
    allowance: "100 published passports / year",
    cta: "Start free trial",
    ctaType: "app",
    ctaPath: "/signup",
    highlight: false,
    features: [
      "AI Passport Builder",
      "Digital Product Passport pages",
      "QR code generation",
      "Product data management",
      "Certification management",
      "Product storytelling",
      "CSV import and export",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    positioning:
      "For established brands managing larger product ranges, suppliers and teams.",
    allowance: "500 published passports / year",
    cta: "Start free trial",
    ctaType: "app",
    ctaPath: "/signup",
    highlight: true,
    badge: "Most popular",
    everythingLine: "Everything in Essentials, plus:",
    features: [
      "Supplier data requests",
      "Additional team members",
      "Advanced analytics",
      "Passport templates",
      "Custom branding",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    custom: true,
    positioning:
      "For brands, manufacturers and teams requiring higher volumes, integrations and dedicated support.",
    allowance: "Custom publication allowance",
    cta: "Talk to us",
    ctaType: "internal",
    ctaPath: "/book-demo",
    highlight: false,
    everythingLine: "Everything in Growth, plus:",
    features: [
      "ERP & PLM integration",
      "API access",
      "Supplier portal",
      "Dedicated success manager",
      "White-label options",
      "Custom onboarding",
    ],
  },
];

export default function PricingToggle() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const { currency } = useCurrency();
  const prices = PRICES[currency];

  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Toggle + currency selector */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <div className="inline-flex items-center gap-1 bg-[#F6F4F2] border border-[#E6E6E2] rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-[13px] font-[500] rounded-full transition-colors ${
                billing === "monthly"
                  ? "bg-white text-[#111111] shadow-sm"
                  : "text-[#72726D] hover:text-[#111111]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 text-[13px] font-[500] rounded-full transition-colors flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-white text-[#111111] shadow-sm"
                  : "text-[#72726D] hover:text-[#111111]"
              }`}
            >
              Annual
              <span className="text-[11px] font-[600] text-[#164ED8]">Save 17%</span>
            </button>
          </div>
          <CurrencySelector />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => {
            const planPrice =
              plan.id === "enterprise"
                ? "Custom"
                : billing === "annual"
                  ? prices[plan.id].annual
                  : prices[plan.id].monthly;
            const period = billing === "annual" ? "/year" : "/month";

            return (
              <div
                key={plan.name}
                className={`relative bg-white flex flex-col ${
                  plan.highlight
                    ? "border-2 border-[#111111]"
                    : "border border-[#E6E6E2]"
                }`}
              >
                {/* Cobalt top accent for highlighted plan */}
                {plan.highlight && <div className="h-1 bg-[#164ED8]" />}

                <div className="p-8 flex flex-col gap-6">
                  {/* Name + badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-[500] uppercase tracking-[0.12em] text-[#72726D]">
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span className="text-[11px] font-[600] text-[#164ED8] bg-[#EAF1FF] px-2.5 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-5xl font-[600] tracking-[-0.02em] text-[#111111]">
                        {planPrice}
                      </span>
                      {!plan.custom && <span className="text-sm text-[#72726D]">{period}</span>}
                    </div>
                    {billing === "annual" && plan.id !== "enterprise" && (
                      <p className="text-[12px] text-[#72726D] mt-2">
                        {prices[plan.id].annualEquivalent}
                      </p>
                    )}
                  </div>

                  {/* Allowance — the hero of the card */}
                  <div
                    className={`rounded-lg px-5 py-4 ${
                      plan.highlight ? "bg-[#EAF1FF]" : "bg-[#F6F4F2]"
                    }`}
                  >
                    <div className="text-xl font-[600] text-[#111111] tracking-[-0.01em]">
                      {plan.allowance}
                    </div>
                    <div className="text-[12px] text-[#72726D] mt-1.5">
                      Unlimited drafts · Unlimited QR labels · Unlimited scans
                    </div>
                  </div>

                  {/* Positioning */}
                  <p className="text-[13px] text-[#72726D] leading-relaxed">
                    {plan.positioning}
                  </p>

                  {/* CTA */}
                  {plan.ctaType === "app" ? (
                    <AppLink
                      path={plan.ctaPath}
                      className={`inline-flex items-center justify-center h-11 px-5 text-[13px] font-[500] transition-colors border ${
                        plan.highlight
                          ? "bg-[#164ED8] text-white border-[#164ED8] hover:bg-[#123fad]"
                          : "bg-[#111111] text-white border-[#111111] hover:bg-[#2a2a2a]"
                      }`}
                    >
                      {plan.cta}
                    </AppLink>
                  ) : (
                    <a
                      href={plan.ctaPath}
                      className={`inline-flex items-center justify-center h-11 px-5 text-[13px] font-[500] transition-colors border ${
                        plan.highlight
                          ? "bg-[#164ED8] text-white border-[#164ED8] hover:bg-[#123fad]"
                          : "bg-[#111111] text-white border-[#111111] hover:bg-[#2a2a2a]"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  )}

                  {/* Features */}
                  <ul className="space-y-2.5 pt-2 border-t border-[#E6E6E2]">
                    {plan.everythingLine && (
                      <li className="text-[13px] font-[500] text-[#111111] pb-1">
                        {plan.everythingLine}
                      </li>
                    )}
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          size={13}
                          className="mt-0.5 shrink-0 text-[#164ED8]"
                          strokeWidth={2}
                        />
                        <span className="text-[13px] text-[#72726D]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[12px] text-[#72726D] mt-8">
          All prices exclude VAT. Annual billing is invoiced once per year.
        </p>
      </div>
    </section>
  );
}
