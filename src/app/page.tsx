import Image from "next/image";
import { APP_URL } from "@/lib/utils";
import {
  ShieldCheck,
  Sparkles,
  QrCode,
  BarChart2,
  ArrowRight,
  Check,
  FileText,
  Database,
  Globe,
  Zap,
} from "lucide-react";

const TURTLENECK_IMG = "/turtleneck.webp";

// ─── Product mockups (CSS-only) ───────────────────────────────────────────────

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-[#E8E8E6] overflow-hidden w-[320px]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#E8E8E6] bg-[#F9F9F8]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          <div className="flex-1 h-5 bg-white border border-[#E8E8E6] rounded-md mx-2 flex items-center px-2.5 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="w-24 h-2 bg-[#E8E8E6] rounded" />
          </div>
        </div>
        {/* App shell */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 border-r border-[#E8E8E6] py-4 flex flex-col items-center gap-3 bg-[#F9F9F8]">
            <div className="w-5 h-5 rounded-md bg-[#0A0A0A]" />
            <div className="w-5 h-px bg-[#E8E8E6] my-1" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-5 h-5 rounded bg-[#E8E8E6] ${i === 0 ? "bg-[#D4D4D0]" : ""}`} />
            ))}
          </div>
          {/* Main content */}
          <div className="flex-1 p-4 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <div className="w-20 h-3.5 bg-[#0A0A0A] rounded-sm" />
              <div className="w-16 h-6 bg-[#0A0A0A] rounded-lg" />
            </div>
            {[
              { name: "Merino Turtleneck", status: "published", score: 96 },
              { name: "Linen Overshirt", status: "published", score: 88 },
              { name: "Recycled Wool Coat", status: "draft", score: 72 },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3 py-2 border-b border-[#F4F4F3] last:border-0">
                <div className="w-8 h-8 rounded-lg bg-[#F4F4F3] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium text-[#0A0A0A] truncate">{item.name}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="h-1 bg-[#E8E8E6] rounded-full flex-1 max-w-[60px]">
                      <div
                        className="h-1 bg-[#0A0A0A] rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-[9px] text-[#8C8C8C]">{item.score}%</span>
                  </div>
                </div>
                <span
                  className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full shrink-0 ${
                    item.status === "published"
                      ? "bg-[#EDFAED] text-green-700"
                      : "bg-[#F4F4F3] text-[#8C8C8C]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating QR chip */}
      <div className="absolute -right-5 bottom-8 bg-white border border-[#E8E8E6] rounded-xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="text-[9px] font-semibold text-[#525252] mb-1.5 flex items-center gap-1">
          <QrCode size={9} />
          QR generated
        </div>
        <div
          className="grid gap-px"
          style={{ gridTemplateColumns: "repeat(8, 1fr)", width: 36, height: 36 }}
        >
          {[
            1,1,1,1,0,1,1,1, 1,0,0,1,0,1,0,1,
            1,0,1,1,0,1,1,1, 1,1,0,0,0,0,1,0,
            0,0,1,0,0,1,0,0, 1,1,0,1,0,1,1,1,
            1,0,1,1,0,1,0,1, 1,1,1,0,0,1,1,1,
          ].map((cell, i) => (
            <div
              key={i}
              style={{ backgroundColor: cell ? "#0A0A0A" : "white", aspectRatio: "1" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PassportMockup() {
  return (
    <div
      className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-[#E8E8E6] overflow-hidden"
      style={{ width: 152 }}
    >
      {/* Status bar */}
      <div className="bg-[#0A0A0A] h-8 flex items-center justify-center">
        <div className="w-14 h-2 bg-[#2A2A2A] rounded-full" />
      </div>
      {/* Hero image */}
      <div className="h-24 relative overflow-hidden bg-[#F2F0EE]">
        <Image
          src={TURTLENECK_IMG}
          alt="Merino turtleneck"
          fill
          className="object-contain"
          sizes="152px"
        />
        <div className="absolute bottom-2 right-2 bg-white/95 rounded-md px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
          <ShieldCheck size={7} className="text-green-600" />
          <span className="text-[7px] font-semibold text-[#0A0A0A]">Verified</span>
        </div>
      </div>
      {/* Passport content */}
      <div className="p-3 space-y-2">
        <div className="text-[7px] font-semibold text-[#8C8C8C] uppercase tracking-widest">Maison Loren</div>
        <div className="text-[12px] font-semibold text-[#0A0A0A] leading-tight">
          Merino<br />Turtleneck
        </div>
        <div className="space-y-1">
          <div className="text-[8px] font-medium text-[#525252]">Materials</div>
          <div className="flex flex-wrap gap-1">
            <span className="text-[7px] px-1.5 py-0.5 bg-[#F4F4F3] rounded-full text-[#525252]">
              100% Merino
            </span>
            <span className="text-[7px] px-1.5 py-0.5 bg-[#F4F4F3] rounded-full text-[#525252]">
              OEKO-TEX
            </span>
          </div>
        </div>
        <div className="pt-1.5 border-t border-[#E8E8E6] flex items-center gap-1">
          <span className="text-[7px] text-[#525252]">🇮🇹</span>
          <span className="text-[7px] text-[#525252]">Made in Italy</span>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                Built for EU ESPR 2026 compliance
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05]">
              Create verified<br />
              Digital Product<br />
              Passports<br />
              in minutes.
            </h1>
            <p className="text-lg text-[#525252] leading-relaxed">
              OriginsID is the simplest way for fashion brands to build,
              manage and publish verified product passports — with QR codes,
              public pages and EU compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0A0A0A] text-white text-sm font-semibold hover:bg-[#1C1C1C] transition-colors"
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
            <p className="text-sm text-[#8C8C8C]">
              No credit card required · Set up in under 10 minutes
            </p>
          </div>

          {/* Right: Mockups */}
          <div className="relative h-[400px] hidden lg:flex items-center justify-end pr-8">
            <div style={{ transform: "rotate(-2deg)" }}>
              <DashboardMockup />
            </div>
            <div
              className="absolute bottom-0 -left-4"
              style={{ transform: "rotate(1.5deg)" }}
            >
              <PassportMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    "EU ESPR compliant structure",
    "GOTS & OEKO-TEX fields built in",
    "QR codes on every passport",
    "Public passport pages included",
    "AI content drafting",
    "Quick setup",
  ];

  // Duplicate for seamless loop
  const ticker = [...items, ...items];

  return (
    <div className="border-y border-[#E8E8E6] bg-[#F9F9F8] overflow-hidden">
      <div className="animate-marquee flex py-3.5">
        {ticker.map((item, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0 px-8">
            <Check size={12} className="text-green-600 shrink-0" />
            <span className="text-sm text-[#525252] whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Build your passport",
      body: "Add your product, materials, certifications and supply chain data using the guided wizard — or let AI draft the content from a simple product description.",
    },
    {
      number: "02",
      title: "Publish and generate a QR code",
      body: "Hit publish and OriginsID automatically generates a unique QR code and a branded public passport page — ready for swing tags, care labels and packaging.",
    },
    {
      number: "03",
      title: "Turn compliance into trust",
      body: "Consumers scan the QR and see a verified, beautiful product story. You get real-time scan analytics and a complete audit trail for EU DPP compliance.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-xl">
            From product data to verified passport in minutes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-5">
              <div className="text-4xl font-semibold tracking-[-0.04em] text-[#E8E8E6]">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">{step.title}</h3>
                <p className="text-[#525252] leading-relaxed text-sm">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Feature: Passport builder ────────────────────────────────────────────────

function BuilderPreview() {
  const fields = [
    { label: "Product name", value: "Merino Turtleneck", done: true },
    { label: "Materials", value: "100% Merino Wool", done: true },
    { label: "Certifications", value: "OEKO-TEX Standard 100", done: true },
    { label: "Country of origin", value: "Italy", done: true },
    { label: "Care instructions", value: "Hand wash 30°C", done: false },
    { label: "Supply chain", value: "Add facility details", done: false },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E8E8E6] bg-[#F9F9F8]">
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <span className="ml-3 text-xs text-[#8C8C8C] font-medium">Passport builder</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#525252]">72%</span>
          <div className="w-16 h-1.5 bg-[#E8E8E6] rounded-full">
            <div className="w-[72%] h-1.5 bg-[#0A0A0A] rounded-full" />
          </div>
        </div>
      </div>
      <div className="p-5 space-y-2.5">
        {fields.map((field) => (
          <div key={field.label} className="flex items-center gap-3 py-2 border-b border-[#F4F4F3] last:border-0">
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                field.done
                  ? "bg-[#0A0A0A] border-[#0A0A0A]"
                  : "border-[#E8E8E6]"
              }`}
            >
              {field.done && <Check size={8} className="text-white" strokeWidth={3} />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#8C8C8C]">{field.label}</div>
              <div
                className={`text-sm font-medium truncate ${
                  field.done ? "text-[#0A0A0A]" : "text-[#C4C4C0]"
                }`}
              >
                {field.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureBuilder() {
  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Passport builder
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Every field your brand needs. Nothing it doesn&apos;t.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              The guided passport wizard walks you through materials, certifications, supply chain steps, care instructions, product stories and impact data. A completeness score shows you exactly what&apos;s missing before you publish.
            </p>
            <ul className="space-y-3">
              {[
                "Materials and composition with verified certifications",
                "Supply chain facility tracking",
                "AI-assisted content drafting — always editable",
                "Completeness score before publishing",
                "Draft, review and publish workflow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#0A0A0A] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-8">
            <BuilderPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature: Public passport ─────────────────────────────────────────────────

function PublicPassportPreview() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Phone frame */}
        <div
          className="bg-white rounded-[36px] shadow-[0_16px_56px_rgba(0,0,0,0.12)] border border-[#E8E8E6] overflow-hidden"
          style={{ width: 240 }}
        >
          {/* Notch */}
          <div className="bg-[#0A0A0A] h-10 flex items-center justify-center">
            <div className="w-16 h-2 bg-[#2A2A2A] rounded-full" />
          </div>
          {/* Passport header image */}
          <div className="h-40 relative overflow-hidden bg-[#F2F0EE]">
            <Image
              src={TURTLENECK_IMG}
              alt="Merino turtleneck"
              fill
              className="object-contain"
              sizes="240px"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-end p-4 justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/80 backdrop-blur" />
                <span className="text-xs font-semibold text-white drop-shadow">Maison Loren</span>
              </div>
              <div className="bg-white/95 rounded-md px-2 py-1 flex items-center gap-1 shadow-sm">
                <ShieldCheck size={9} className="text-green-600" />
                <span className="text-[8px] font-semibold text-[#0A0A0A]">Verified</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-[#0A0A0A]">Merino Turtleneck</h3>
              <p className="text-xs text-[#8C8C8C] mt-0.5">AW2025 · Knitwear</p>
            </div>
            {/* Tabs */}
            <div className="flex gap-2 border-b border-[#E8E8E6]">
              {["Materials", "Supply chain", "Care"].map((tab, i) => (
                <button
                  key={tab}
                  className={`text-[10px] font-medium pb-2 ${
                    i === 0
                      ? "text-[#0A0A0A] border-b-2 border-[#0A0A0A]"
                      : "text-[#8C8C8C]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Materials content */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#0A0A0A] font-medium">Merino Wool</span>
                <span className="text-xs text-[#525252]">100%</span>
              </div>
              <div className="h-1.5 bg-[#E8E8E6] rounded-full">
                <div className="w-full h-1.5 bg-[#0A0A0A] rounded-full" />
              </div>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[9px] px-2 py-0.5 bg-[#EDFAED] text-green-700 rounded-full font-medium">
                  OEKO-TEX
                </span>
                <span className="text-[9px] px-2 py-0.5 bg-[#F4F4F3] text-[#525252] rounded-full">
                  Mulesing-free
                </span>
              </div>
              <div className="pt-1.5 border-t border-[#F4F4F3]">
                <div className="text-[9px] text-[#525252]">🇮🇹 Spun and knitted in Italy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scan count chip */}
        <div className="absolute -right-10 top-24 bg-white border border-[#E8E8E6] rounded-xl px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <div className="text-[9px] text-[#8C8C8C] font-medium">Total scans</div>
          <div className="text-sm font-semibold text-[#0A0A0A]">2,841</div>
        </div>
      </div>
    </div>
  );
}

function FeaturePassport() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:order-2 flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Public passport pages
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              A consumer experience, not a compliance document.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Every passport publishes as a beautiful, branded consumer page — designed to tell the real story of your product, not just satisfy a regulatory checkbox. Accessible by QR code, direct link, or embedded on your site.
            </p>
            <ul className="space-y-3">
              {[
                "Auto-generated QR codes in PNG, SVG and PDF",
                "Branded public pages — materials, origin, certifications",
                "Embeddable widget for Shopify, Hydrogen and any storefront",
                "Consumer-friendly language, not regulatory jargon",
                "Scan analytics — countries, devices, daily trends",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#0A0A0A] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1">
            <PublicPassportPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature grid ─────────────────────────────────────────────────────────────

function FeatureGrid() {
  const features = [
    {
      icon: Sparkles,
      title: "AI content drafting",
      body: "Describe your product and let AI generate passport content — product story, sustainability summary, transparency copy. Always editable before publishing.",
    },
    {
      icon: BarChart2,
      title: "Scan analytics",
      body: "See who&apos;s scanning your QR codes in real time. Track engagement by country, device and passport — proof that your transparency is being read.",
    },
    {
      icon: Database,
      title: "Bulk import",
      body: "Already have product data? Upload a CSV and create hundreds of passport drafts in one go. No technical knowledge required.",
    },
    {
      icon: Globe,
      title: "Integrations",
      body: "Sync products from Shopify, pull certification data from GOTS and EcoVadis, and connect to any system via the OriginsID REST API.",
    },
    {
      icon: FileText,
      title: "Templates by category",
      body: "Start from a passport template tailored to your product type — fashion essentials, premium outerwear, sustainable hero, accessories and more.",
    },
    {
      icon: Zap,
      title: "Instant publishing",
      body: "Draft → review → publish in minutes. Your QR code and public passport page go live the moment you hit publish. No deployment, no delays.",
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            Everything you need
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-lg">
            Built for fashion brands. Designed for speed.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E8E6]">
          {features.map((feat) => (
            <div key={feat.title} className="bg-[#F9F9F8] p-8 flex flex-col gap-4">
              <div className="w-9 h-9 rounded-xl border border-[#E8E8E6] bg-white flex items-center justify-center">
                <feat.icon size={16} className="text-[#0A0A0A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A0A0A] mb-1.5">{feat.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{feat.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EU compliance callout ────────────────────────────────────────────────────

function ComplianceBanner() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-[#E8E8E6] rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center">
          <div className="flex-1 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              EU regulation incoming
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              EU ESPR mandates Digital Product Passports for fashion from 2026.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              The Ecodesign for Sustainable Products Regulation (ESPR) will require fashion brands to attach a verified Digital Product Passport to every product. OriginsID gives you the structure, data fields, and publishing infrastructure to be ready — without compliance ever feeling like a burden.
            </p>
            <a
              href="/platform"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:opacity-60 transition-opacity w-fit"
            >
              See how we handle compliance
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="lg:w-72 shrink-0 space-y-4">
            {[
              {
                title: "ESPR-ready data structure",
                body: "Passport fields map directly to EU DPP data requirements.",
              },
              {
                title: "Verified and audit-ready",
                body: "Every published passport has a timestamped, immutable audit trail.",
              },
              {
                title: "Certifications built in",
                body: "GOTS, OEKO-TEX, GRS, Bluesign and custom certifications supported.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={10} className="text-white" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A0A0A]">{item.title}</div>
                  <div className="text-sm text-[#525252]">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing preview ──────────────────────────────────────────────────────────

function PricingPreview() {
  const plans = [
    {
      name: "Starter",
      price: "£350",
      period: "/mo",
      description: "For growing brands launching their first passports.",
      features: [
        "Up to 250 active passports",
        "QR code generation",
        "Public passport pages",
        "Standard templates",
        "CSV export",
      ],
      cta: "Get started",
      highlight: false,
    },
    {
      name: "Growth",
      price: "£750",
      period: "/mo",
      description: "For scaling brands with larger catalogues and teams.",
      features: [
        "Up to 1,000 active passports",
        "Everything in Starter",
        "AI Passport Generator",
        "Shopify integration",
        "Analytics dashboard",
        "Bulk import",
        "Full embed suite",
      ],
      cta: "Get started",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large teams, multi-brand workspaces and custom requirements.",
      features: [
        "Unlimited passports",
        "Everything in Growth",
        "Custom data extensions",
        "Multi-brand workspace",
        "SSO and permissions",
        "Dedicated onboarding",
      ],
      cta: "Talk to us",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              Pricing
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Simple, transparent pricing.
            </h2>
          </div>
          <a
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors shrink-0"
          >
            See full pricing details
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-[#0A0A0A] text-white"
                  : "bg-white border border-[#E8E8E6]"
              }`}
            >
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                    plan.highlight ? "text-white/50" : "text-[#8C8C8C]"
                  }`}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-semibold tracking-tight ${
                      plan.highlight ? "text-white" : "text-[#0A0A0A]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/50" : "text-[#8C8C8C]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlight ? "text-white/60" : "text-[#525252]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      size={13}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight ? "text-white/70" : "text-[#0A0A0A]"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/70" : "text-[#525252]"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === "Enterprise" ? "/book-demo" : `${APP_URL}/signup`}
                className={`inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#0A0A0A] hover:bg-white/90"
                    : "bg-[#0A0A0A] text-white hover:bg-[#1C1C1C]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#8C8C8C] mt-8">
          All plans include a free trial. No credit card required to get started.
        </p>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-6">
            The simplest way to launch Digital Product Passports.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10">
            Join fashion brands using OriginsID to build verified product passports, prepare for EU regulation and turn transparency into consumer trust.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get started free
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center h-11 px-2 text-white/50 text-sm font-medium hover:text-white transition-colors gap-1.5"
            >
              Book a demo
              <ArrowRight size={14} />
            </a>
          </div>
          <p className="text-sm text-white/30 mt-5">
            No credit card required · Set up in under 10 minutes
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <FeatureBuilder />
      <FeaturePassport />
      <FeatureGrid />
      <ComplianceBanner />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
