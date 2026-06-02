import type { Metadata } from "next";
import { APP_URL } from "@/lib/utils";
import { Check, ArrowRight, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for fashion brands of all sizes. Start free, scale as you grow.",
};

// ─── Plans ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Starter",
    price: "£350",
    period: "/mo",
    tagline: "For growing brands",
    description: "Everything you need to launch your first Digital Product Passports and go live with QR codes.",
    cta: "Start free trial",
    ctaHref: `${APP_URL}/signup`,
    highlight: false,
    features: [
      { label: "Active passports", value: "250" },
      { label: "QR code generation (PNG, SVG, PDF)", value: true },
      { label: "Public passport pages", value: true },
      { label: "Standard passport templates", value: true },
      { label: "Passport builder wizard", value: true },
      { label: "CSV export", value: true },
      { label: "Email support", value: true },
      { label: "AI Passport Generator", value: false },
      { label: "Shopify integration", value: false },
      { label: "Analytics dashboard", value: false },
      { label: "Bulk CSV import", value: false },
      { label: "Full embed suite", value: false },
      { label: "Multi-brand workspace", value: false },
    ],
  },
  {
    name: "Growth",
    price: "£750",
    period: "/mo",
    tagline: "Most popular",
    description: "For scaling brands that need AI content generation, integrations and deeper analytics.",
    cta: "Start free trial",
    ctaHref: `${APP_URL}/signup`,
    highlight: true,
    features: [
      { label: "Active passports", value: "1,000" },
      { label: "QR code generation (PNG, SVG, PDF)", value: true },
      { label: "Public passport pages", value: true },
      { label: "Custom brand templates", value: true },
      { label: "Passport builder wizard", value: true },
      { label: "CSV export", value: true },
      { label: "Priority email and chat support", value: true },
      { label: "AI Passport Generator", value: true },
      { label: "Shopify integration", value: true },
      { label: "Analytics dashboard", value: true },
      { label: "Bulk CSV import", value: true },
      { label: "Full embed suite", value: true },
      { label: "Multi-brand workspace", value: false },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For large teams",
    description: "For retailers, luxury brands and large teams needing custom data models, SSO and multi-brand management.",
    cta: "Talk to us",
    ctaHref: "/book-demo",
    highlight: false,
    features: [
      { label: "Active passports", value: "Unlimited" },
      { label: "QR code generation (PNG, SVG, PDF)", value: true },
      { label: "Public passport pages", value: true },
      { label: "Custom brand templates", value: true },
      { label: "Passport builder wizard", value: true },
      { label: "CSV export", value: true },
      { label: "Dedicated account support", value: true },
      { label: "AI Passport Generator", value: true },
      { label: "Shopify integration", value: true },
      { label: "Analytics dashboard", value: true },
      { label: "Bulk CSV import", value: true },
      { label: "Full embed suite", value: true },
      { label: "Multi-brand workspace", value: true },
    ],
  },
];

// ─── Plan cards ───────────────────────────────────────────────────────────────

function PlanCards() {
  return (
    <section className="bg-white pt-20 pb-16 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-5">
            Pricing
          </div>
          <h1 className="text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05] mb-4">
            Simple, transparent pricing.
          </h1>
          <p className="text-lg text-[#525252] leading-relaxed">
            All plans start with a free trial. No credit card required to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-7 ${
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
                  {plan.tagline === "Most popular" && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 bg-white/15 text-white rounded-full">
                      Most popular
                    </span>
                  )}
                  {plan.tagline !== "Most popular" && (
                    <span
                      className={`text-[10px] font-medium ${
                        plan.highlight ? "text-white/30" : "text-[#8C8C8C]"
                      }`}
                    >
                      {plan.tagline}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-4xl font-semibold tracking-tight ${
                      plan.highlight ? "text-white" : "text-[#0A0A0A]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlight ? "text-white/40 text-sm" : "text-[#8C8C8C] text-sm"}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/60" : "text-[#525252]"}`}>
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#0A0A0A] hover:bg-white/90"
                    : "bg-[#0A0A0A] text-white hover:bg-[#1C1C1C]"
                }`}
              >
                {plan.cta}
              </a>

              {/* Feature list */}
              <ul className="space-y-3 pt-1 border-t border-white/10">
                {plan.features.map((feat) => (
                  <li key={feat.label} className="flex items-start gap-3">
                    {feat.value === false ? (
                      <Minus
                        size={14}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white/20" : "text-[#D4D4D0]"}`}
                        strokeWidth={2}
                      />
                    ) : (
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white/70" : "text-[#0A0A0A]"}`}
                        strokeWidth={2.5}
                      />
                    )}
                    <span
                      className={`text-sm ${
                        feat.value === false
                          ? plan.highlight
                            ? "text-white/20"
                            : "text-[#C4C4C0]"
                          : plan.highlight
                          ? "text-white/70"
                          : "text-[#525252]"
                      }`}
                    >
                      {feat.label}
                      {typeof feat.value === "string" && (
                        <span
                          className={`ml-1 font-semibold ${
                            plan.highlight ? "text-white/90" : "text-[#0A0A0A]"
                          }`}
                        >
                          — {feat.value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#8C8C8C] mt-8">
          All prices exclude VAT. Annual billing available on request.
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is a Digital Product Passport?",
    a: "A Digital Product Passport (DPP) is a structured digital record of a product's materials, origin, manufacturing, certifications, care instructions, and end-of-life options. It is accessed via a QR code or unique link. The EU's Ecodesign for Sustainable Products Regulation (ESPR) is introducing mandatory DPP requirements for fashion and other product categories from 2026.",
  },
  {
    q: "How long does setup take?",
    a: "Most brands publish their first passport in under 10 minutes using the OriginsID wizard. For teams with existing product data, bulk CSV import lets you create hundreds of passport drafts in a single upload.",
  },
  {
    q: "Can I try before committing to a plan?",
    a: "Yes — all plans start with a free trial. You can create passports, generate QR codes, and publish public pages before committing. No credit card required. Book a demo if you'd like a guided walkthrough first.",
  },
  {
    q: "Do I need technical knowledge to use OriginsID?",
    a: "No. The passport builder, QR code manager, and public page publishing all work without any technical knowledge. For teams who want to integrate OriginsID with their existing systems, a REST API and developer documentation are available on Growth and Enterprise plans.",
  },
  {
    q: "What happens when I go over my passport limit?",
    a: "We'll notify you before you reach your plan limit so you can upgrade without any disruption. Published passports remain live and accessible to consumers while you manage your plan.",
  },
  {
    q: "Is OriginsID compliant with EU ESPR?",
    a: "OriginsID structures passport data to align with the EU ESPR technical requirements for Digital Product Passports. We work closely with regulatory guidance to ensure our data model stays up to date as the regulation develops. For specific compliance questions, our team is available to advise.",
  },
  {
    q: "Can I use OriginsID for multiple brands?",
    a: "Yes — multi-brand workspaces are available on the Enterprise plan. Each brand gets its own passport library, QR codes, and public pages under a shared organisation.",
  },
  {
    q: "What integrations are available?",
    a: "OriginsID currently supports Shopify product sync, GOTS and EcoVadis certification imports, bulk CSV upload, and a REST API for connecting any custom system. Additional integrations including WooCommerce and Klaviyo are in progress.",
  },
];

function FAQ() {
  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32 border-t border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              FAQ
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Common questions.
            </h2>
          </div>
          <div className="space-y-0 divide-y divide-[#E8E8E6]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-sm font-semibold text-[#0A0A0A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function PricingCTA() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Talk to the team — we can walk you through the platform, help you choose the right plan, and answer any compliance questions.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Book a demo
            </a>
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center h-11 px-2 text-white/50 text-sm font-medium hover:text-white transition-colors gap-1.5"
            >
              Start free trial
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <PlanCards />
      <FAQ />
      <PricingCTA />
    </>
  );
}
