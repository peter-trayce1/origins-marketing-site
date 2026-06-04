import type { Metadata } from "next";
import { APP_URL } from "@/lib/utils";
import {
  FileText,
  Sparkles,
  Globe,
  BarChart2,
  Database,
  ShieldCheck,
  ArrowRight,
  Check,
  Code,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Everything you need to build, manage and publish verified Digital Product Passports — passport builder, QR codes, AI content, public pages, analytics and integrations.",
};

// ─── Page header ──────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="bg-white pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-5">
            Product
          </div>
          <h1 className="text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05] mb-6">
            Everything you need to build verified passports at scale.
          </h1>
          <p className="text-lg text-[#525252] leading-relaxed mb-8">
            OriginsID gives fashion brands a complete infrastructure for Digital Product Passports — from the first data entry to the consumer scanning a QR code at the point of sale.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
            >
              Get started free
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center h-11 px-2 text-[#525252] text-sm font-medium hover:text-[#0A0A0A] transition-colors gap-1.5"
            >
              Book a demo
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature section component ────────────────────────────────────────────────

interface FeatureSectionProps {
  label: string;
  title: string;
  body: string;
  bullets: string[];
  flip?: boolean;
  visual: React.ReactNode;
}

function FeatureSection({ label, title, body, bullets, flip = false, visual }: FeatureSectionProps) {
  return (
    <section className="py-20 lg:py-28 border-b border-[#E8E8E6] last:border-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flip ? "" : ""}`}>
          <div className={`flex flex-col gap-6 ${flip ? "lg:order-2" : ""}`}>
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              {label}
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              {title}
            </h2>
            <p className="text-[#525252] leading-relaxed">{body}</p>
            <ul className="space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={flip ? "lg:order-1" : ""}>{visual}</div>
        </div>
      </div>
    </section>
  );
}

// ─── Passport Builder visual ──────────────────────────────────────────────────

function BuilderVisual() {
  const steps = [
    { label: "Product info", done: true },
    { label: "Materials", done: true },
    { label: "Certifications", done: true },
    { label: "Supply chain", done: false, active: true },
    { label: "Care & circularity", done: false },
    { label: "Brand story", done: false },
    { label: "Impact", done: false },
    { label: "Review & publish", done: false },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E8E8E6] bg-[#F9F9F8]">
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <span className="ml-3 text-xs text-[#8C8C8C]">Passport builder — Step 4 of 8</span>
        <div className="ml-auto">
          <div className="w-20 h-1.5 bg-[#E8E8E6] rounded-full">
            <div className="w-[37.5%] h-1.5 bg-[#0A0A0A] rounded-full" />
          </div>
        </div>
      </div>
      <div className="flex">
        {/* Step sidebar */}
        <div className="w-44 border-r border-[#E8E8E6] bg-[#F9F9F8] p-3 space-y-1">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs ${
                step.active
                  ? "bg-white border border-[#E8E8E6] font-semibold text-[#0A0A0A]"
                  : step.done
                  ? "text-[#525252]"
                  : "text-[#C4C4C0]"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  step.done
                    ? "bg-[#0A0A0A] border-[#0A0A0A]"
                    : step.active
                    ? "border-[#0A0A0A]"
                    : "border-[#E8E8E6]"
                }`}
              >
                {step.done && <Check size={7} className="text-white" strokeWidth={3} />}
                {step.active && <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />}
                {!step.done && !step.active && (
                  <span className="text-[8px] text-[#C4C4C0] font-medium">{i + 1}</span>
                )}
              </div>
              {step.label}
            </div>
          ))}
        </div>
        {/* Form content */}
        <div className="flex-1 p-5 space-y-4">
          <div>
            <div className="text-sm font-semibold text-[#0A0A0A] mb-0.5">Supply chain</div>
            <div className="text-xs text-[#8C8C8C]">Add the facilities involved in making this product</div>
          </div>
          {[
            { step: "Fibre production", country: "🇦🇺 Australia", done: true },
            { step: "Spinning & weaving", country: "🇮🇹 Italy", done: true },
            { step: "Garment manufacturing", country: "", done: false },
          ].map((facility) => (
            <div
              key={facility.step}
              className={`border rounded-xl p-3.5 ${
                facility.done ? "border-[#E8E8E6]" : "border-dashed border-[#E8E8E6]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-[#0A0A0A]">{facility.step}</div>
                  {facility.country && (
                    <div className="text-xs text-[#525252] mt-0.5">{facility.country}</div>
                  )}
                  {!facility.country && (
                    <div className="text-xs text-[#C4C4C0] mt-0.5">Click to add facility</div>
                  )}
                </div>
                {facility.done && (
                  <div className="w-5 h-5 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                    <Check size={9} className="text-white" strokeWidth={3} />
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <div className="h-8 w-24 bg-[#0A0A0A] rounded-lg" />
            <div className="h-8 w-16 border border-[#E8E8E6] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── QR visual ───────────────────────────────────────────────────────────────

function QRVisual() {
  const QR_PATTERN = [
    1,1,1,1,1,1,1,0, 1,0,0,0,0,1,0,1,
    1,0,1,1,1,0,1,0, 1,0,1,0,0,0,1,0,
    1,0,1,0,1,0,1,0, 1,0,1,1,1,0,1,0,
    1,1,1,1,1,1,1,0, 0,1,0,1,0,1,0,1,
    0,0,0,0,0,0,0,0, 1,1,0,1,0,0,0,0,
    1,1,0,1,1,0,1,1, 0,0,0,1,1,0,1,0,
    1,0,0,0,0,1,1,0, 1,1,0,0,1,0,1,1,
    0,1,1,0,1,0,0,0, 1,0,0,1,1,1,1,0,
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-semibold text-[#0A0A0A] mb-0.5">QR code manager</div>
          <div className="text-xs text-[#8C8C8C]">3 codes · 2 published</div>
        </div>
        <div className="h-7 px-3 bg-[#0A0A0A] rounded-lg flex items-center text-xs font-semibold text-white">
          Export all
        </div>
      </div>

      {/* Main QR */}
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white border border-[#E8E8E6] rounded-2xl p-5 shadow-sm">
          <div
            className="grid gap-px"
            style={{ gridTemplateColumns: "repeat(16, 1fr)", width: 120, height: 120 }}
          >
            {QR_PATTERN.map((cell, i) => (
              <div
                key={i}
                className="aspect-square"
                style={{ backgroundColor: cell ? "#0A0A0A" : "white" }}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm font-medium text-[#0A0A0A]">Merino Turtleneck</div>
          <div className="text-xs text-[#8C8C8C] mt-0.5">originsid.com/p/merino-turtleneck</div>
        </div>
      </div>

      {/* Export formats */}
      <div className="grid grid-cols-3 gap-2">
        {["PNG", "SVG", "PDF"].map((fmt) => (
          <div
            key={fmt}
            className="border border-[#E8E8E6] rounded-xl py-2.5 flex flex-col items-center gap-1 cursor-default"
          >
            <span className="text-xs font-semibold text-[#0A0A0A]">{fmt}</span>
            <span className="text-[9px] text-[#8C8C8C]">Print ready</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── AI visual ────────────────────────────────────────────────────────────────

function AIVisual() {
  const fields = [
    {
      label: "Product story",
      value: "Crafted from single-origin merino wool sourced from certified farms in the Patagonia region, this turtleneck is built to last a lifetime...",
      ai: true,
    },
    {
      label: "Sustainability summary",
      value: "Made using 100% renewable energy at our family-run partner mill in Biella, Italy. OEKO-TEX certified — no harmful substances.",
      ai: true,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E8E8E6] bg-[#F9F9F8]">
        <Sparkles size={13} className="text-[#525252]" />
        <span className="text-xs text-[#525252] font-medium">AI content generator</span>
        <span className="ml-auto text-[9px] font-semibold px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200">
          Review before publishing
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div className="border border-[#E8E8E6] rounded-xl p-3.5 space-y-1.5">
          <div className="text-xs text-[#8C8C8C] font-medium">Product description (your input)</div>
          <div className="text-sm text-[#525252]">
            Women&apos;s relaxed turtleneck, 100% merino wool from certified farms, made in Italy at a family mill. OEKO-TEX certified, designed to last 10+ years.
          </div>
        </div>
        {fields.map((field) => (
          <div key={field.label} className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-[#0A0A0A]">{field.label}</span>
              {field.ai && (
                <span className="text-[9px] font-semibold px-1.5 py-0.5 bg-[#F4F4F3] text-[#8C8C8C] rounded-full flex items-center gap-1">
                  <Sparkles size={7} />
                  AI suggested
                </span>
              )}
            </div>
            <div className="text-xs text-[#525252] leading-relaxed bg-[#F9F9F8] border border-[#E8E8E6] rounded-lg p-3">
              {field.value}
            </div>
          </div>
        ))}
        <div className="flex gap-2 pt-1">
          <div className="h-8 flex-1 bg-[#0A0A0A] rounded-lg flex items-center justify-center text-xs font-semibold text-white gap-1.5">
            <Check size={11} strokeWidth={2.5} />
            Accept all
          </div>
          <div className="h-8 px-4 border border-[#E8E8E6] rounded-lg flex items-center text-xs font-medium text-[#525252]">
            Edit
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Analytics visual ─────────────────────────────────────────────────────────

function AnalyticsVisual() {
  const bars = [12, 28, 18, 42, 35, 55, 48, 62, 70, 58, 75, 88, 72, 90, 85, 95, 78, 68, 82, 76, 92, 88, 96, 84, 78, 90, 88, 95, 82, 100];
  const maxBar = Math.max(...bars);

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="p-6 border-b border-[#E8E8E6]">
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-1">Scan analytics</div>
            <div className="text-3xl font-semibold tracking-tight text-[#0A0A0A]">12,841</div>
            <div className="text-xs text-[#2ECC71] font-medium mt-0.5">↑ 24% this month</div>
          </div>
          <div className="text-xs text-[#8C8C8C] border border-[#E8E8E6] rounded-lg px-2.5 py-1.5">Last 30 days</div>
        </div>
      </div>
      <div className="p-6">
        {/* Bar chart */}
        <div className="flex items-end gap-[3px] h-16 mb-5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[#0A0A0A] rounded-t-sm"
              style={{ height: `${(h / maxBar) * 100}%`, opacity: i === bars.length - 1 ? 1 : 0.15 + (i / bars.length) * 0.7 }}
            />
          ))}
        </div>
        {/* Country breakdown */}
        <div className="space-y-2.5">
          {[
            { country: "United Kingdom", flag: "🇬🇧", pct: 42 },
            { country: "France", flag: "🇫🇷", pct: 28 },
            { country: "Germany", flag: "🇩🇪", pct: 18 },
            { country: "Other", flag: "🌍", pct: 12 },
          ].map((item) => (
            <div key={item.country} className="flex items-center gap-3">
              <span className="text-sm">{item.flag}</span>
              <div className="flex-1">
                <div className="h-1.5 bg-[#E8E8E6] rounded-full">
                  <div
                    className="h-1.5 bg-[#0A0A0A] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
              <span className="text-xs text-[#525252] w-8 text-right">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Integrations visual ──────────────────────────────────────────────────────

function IntegrationsVisual() {
  const integrations = [
    { name: "Shopify", desc: "Sync products automatically", status: "available", icon: "🛍️" },
    { name: "GOTS", desc: "Pull certification data", status: "available", icon: "🌿" },
    { name: "EcoVadis", desc: "Supplier sustainability ratings", status: "available", icon: "📊" },
    { name: "Klaviyo", desc: "Embed QR codes in campaigns", status: "coming_soon", icon: "📧" },
    { name: "WooCommerce", desc: "Connect your store", status: "coming_soon", icon: "🛒" },
    { name: "REST API", desc: "Connect any system", status: "available", icon: "⚡" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {integrations.map((int) => (
        <div
          key={int.name}
          className="bg-white border border-[#E8E8E6] rounded-xl p-4 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xl">{int.icon}</span>
            {int.status === "available" ? (
              <span className="text-[9px] font-semibold px-1.5 py-0.5 bg-[#EDFAED] text-green-700 rounded-full">
                Available
              </span>
            ) : (
              <span className="text-[9px] font-medium px-1.5 py-0.5 bg-[#F4F4F3] text-[#8C8C8C] rounded-full">
                Soon
              </span>
            )}
          </div>
          <div>
            <div className="text-xs font-semibold text-[#0A0A0A]">{int.name}</div>
            <div className="text-[10px] text-[#8C8C8C] mt-0.5">{int.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Compliance section ───────────────────────────────────────────────────────

function ComplianceSection() {
  return (
    <section className="bg-[#F9F9F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Compliance
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Built for EU ESPR from day one.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              The EU&apos;s Ecodesign for Sustainable Products Regulation (ESPR) requires all fashion brands to issue Digital Product Passports by 2026. OriginsID structures your passport data to meet the regulation&apos;s technical requirements — without you needing to understand the legal text.
            </p>
            <ul className="space-y-3">
              {[
                "Data fields mapped to ESPR technical standards",
                "Timestamped publish records for audit compliance",
                "Immutable passport versioning",
                "GOTS, OEKO-TEX, GRS and Bluesign certification fields",
                "EU-hosted data for GDPR compliance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-[#E8E8E6] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-[#E8E8E6]">
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] flex items-center justify-center">
                <ShieldCheck size={18} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0A0A0A]">Compliance status</div>
                <div className="text-xs text-[#2ECC71] font-medium">ESPR-ready structure</div>
              </div>
            </div>
            {[
              { label: "EU ESPR 2026", status: "Ready" },
              { label: "GOTS Certification", status: "Supported" },
              { label: "OEKO-TEX Standard 100", status: "Supported" },
              { label: "GRS (Global Recycled Standard)", status: "Supported" },
              { label: "Bluesign", status: "Supported" },
              { label: "Custom certifications", status: "Supported" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-sm text-[#525252]">{item.label}</span>
                <span className="text-xs font-semibold text-green-700 bg-[#EDFAED] px-2.5 py-0.5 rounded-full">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function PlatformCTA() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-6">
            Ready to build your first passport?
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Set up in under 10 minutes. No credit card required.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get started free
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center h-11 px-2 text-white/50 text-sm font-medium hover:text-white transition-colors gap-1.5"
            >
              View pricing
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
  return (
    <>
      <PageHero />

      <div className="bg-white divide-y divide-[#E8E8E6]">
        <FeatureSection
          label="Passport builder"
          title="A guided wizard for every field your passport needs."
          body="The OriginsID passport builder walks you through every section — product info, materials, certifications, supply chain, care instructions, and brand story. A live completeness score shows exactly what's missing before you publish."
          bullets={[
            "8-step structured wizard with guided prompts",
            "Materials composition with percentage breakdowns",
            "Supply chain facility tracking — country, process, partner",
            "Certification fields for GOTS, OEKO-TEX, GRS and more",
            "Completeness score — draft until you're confident to publish",
          ]}
          visual={<BuilderVisual />}
        />

        <FeatureSection
          label="QR codes"
          title="Every passport gets a unique QR code, instantly."
          body="The moment you publish a passport, OriginsID generates a print-ready QR code linked to its public page. Export in PNG, SVG, or PDF — ready for swing tags, care labels, garment bags, and packaging inserts."
          bullets={[
            "Auto-generated on publish — no manual steps",
            "Export as PNG, SVG and PDF for any use case",
            "Batch export for entire product ranges",
            "Deep links for ecommerce product pages",
            "QR codes redirect to the latest published version",
          ]}
          flip
          visual={<QRVisual />}
        />

        <FeatureSection
          label="AI content generator"
          title="AI drafts your passport content. You approve it."
          body="Paste a product description and let OriginsID generate a full passport draft — product story, sustainability summary, consumer transparency copy, and more. Every AI suggestion is clearly labelled. Nothing is published without your review."
          bullets={[
            "Product story, sustainability summary, maker story",
            "Consumer-friendly transparency copy",
            "AI-labelled output — always editable before publishing",
            "Does not fabricate certifications or factual claims",
            "One-click copy to passport fields",
          ]}
          visual={<AIVisual />}
        />

        <FeatureSection
          label="Scan analytics"
          title="See exactly who's scanning your passports."
          body="Track QR scan activity across your entire catalogue — by product, country, device type, and time. Understand which products are resonating with consumers and prove the ROI of your transparency investment."
          bullets={[
            "Real-time scan tracking per passport and per QR code",
            "Country and device breakdowns",
            "30-day trend charts",
            "Top-performing passport rankings",
            "Exportable for reporting and brand communications",
          ]}
          flip
          visual={<AnalyticsVisual />}
        />

        <FeatureSection
          label="Integrations"
          title="Connect your existing product data stack."
          body="OriginsID integrates with the tools fashion brands already use. Sync products from Shopify, pull certification data from GOTS and EcoVadis, and connect to any PLM, ERP or custom system via the REST API."
          bullets={[
            "Shopify product sync — auto-create passport drafts for new products",
            "GOTS and EcoVadis certification data import",
            "Bulk CSV upload for large product ranges",
            "REST API for custom integrations",
            "Webhook support for automated workflows",
          ]}
          visual={<IntegrationsVisual />}
        />
      </div>

      <ComplianceSection />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              Also included
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#0A0A0A]">
              Everything else you&apos;ll need.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Embeddable widgets",
                body: "Add a passport badge, inline summary, or full modal to any Shopify, Hydrogen, Webflow or custom storefront.",
              },
              {
                icon: FileText,
                title: "Passport templates",
                body: "Start from a template tailored to your product category — apparel, accessories, sportswear, outerwear, childrenswear and more.",
              },
              {
                icon: Database,
                title: "Bulk import",
                body: "Upload a CSV to create hundreds of passport drafts in one step. Update existing passports in bulk as product data changes.",
              },
              {
                icon: Code,
                title: "REST API",
                body: "Push product and certification data from any system — PLM, ERP or custom platforms — using the OriginsID developer API.",
              },
              {
                icon: ShieldCheck,
                title: "Verification badges",
                body: "Every published passport carries a verification badge — a visible signal to consumers that your claims are structured and evidence-backed.",
              },
              {
                icon: BarChart2,
                title: "Team workspace",
                body: "Invite your team with role-based permissions. Multiple brands under one organisation. Enterprise SSO available.",
              },
            ].map((feat) => (
              <div key={feat.title} className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-xl border border-[#E8E8E6] flex items-center justify-center">
                  <feat.icon size={16} className="text-[#0A0A0A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A0A0A] mb-1">{feat.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed">{feat.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlatformCTA />
    </>
  );
}
