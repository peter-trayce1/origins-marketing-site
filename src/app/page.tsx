import Image from "next/image";
import { APP_URL } from "@/lib/utils";
import {
  ShieldCheck,
  QrCode,
  BarChart2,
  ArrowRight,
  Check,
  FileText,
  Upload,
  Send,
} from "lucide-react";

const TURTLENECK_IMG = "/turtleneck.webp";

// ─── Hero: Workflow visual ────────────────────────────────────────────────────

function WorkflowVisual() {
  const steps = [
    { label: "Product added", detail: "Merino Turtleneck", live: false },
    { label: "Supplier data requested", detail: "Sent to 2 suppliers", live: false },
    { label: "Passport built", detail: "94% complete", live: false },
    { label: "QR code generated", detail: "Ready to print", live: false },
    { label: "Passport live", detail: "originsid.com/ml-001", live: true },
  ];

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-[#E8E8E6] overflow-hidden w-[300px]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#E8E8E6] bg-[#F9F9F8]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          <div className="flex-1 h-5 bg-white border border-[#E8E8E6] rounded-md mx-2 flex items-center px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 shrink-0" />
            <span className="text-[9px] text-[#8C8C8C] truncate">app.originsid.com</span>
          </div>
        </div>
        {/* Product header */}
        <div className="px-4 py-3 border-b border-[#E8E8E6] flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#F4F4F3] shrink-0 relative overflow-hidden">
            <Image src={TURTLENECK_IMG} alt="" fill className="object-contain" sizes="36px" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-[#0A0A0A] truncate">Merino Turtleneck</div>
            <div className="text-[9px] text-[#8C8C8C]">Maison Loren · AW2025</div>
          </div>
          <span className="text-[9px] font-semibold text-green-700 bg-[#EDFAED] px-2 py-0.5 rounded-full shrink-0">
            Live
          </span>
        </div>
        {/* Pipeline */}
        <div className="p-4">
          <div className="text-[9px] font-semibold text-[#8C8C8C] uppercase tracking-wider mb-3">
            Passport pipeline
          </div>
          <div>
            {steps.map((step, i) => (
              <div key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full flex items-center justify-center shrink-0 ${
                      step.live ? "bg-green-500" : "bg-[#0A0A0A]"
                    }`}
                  >
                    {step.live ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    ) : (
                      <Check size={6} className="text-white" strokeWidth={3} />
                    )}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px bg-[#E8E8E6] my-1 min-h-[14px]" />
                  )}
                </div>
                <div className={`min-w-0 ${i < steps.length - 1 ? "pb-1" : ""}`}>
                  <div
                    className={`text-[10px] font-medium leading-none mb-0.5 ${
                      step.live ? "text-green-700" : "text-[#0A0A0A]"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div className="text-[9px] text-[#8C8C8C] leading-tight">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating QR chip */}
      <div className="absolute -right-10 bottom-10 bg-white border border-[#E8E8E6] rounded-xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
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
            <div key={i} style={{ backgroundColor: cell ? "#0A0A0A" : "white", aspectRatio: "1" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Example passport mockup ──────────────────────────────────────────────────

function PassportMockup() {
  return (
    <div
      className="bg-white rounded-[28px] shadow-[0_16px_56px_rgba(0,0,0,0.12)] border border-[#E8E8E6] overflow-hidden"
      style={{ width: 200 }}
    >
      <div className="bg-[#0A0A0A] h-8 flex items-center justify-center">
        <div className="w-14 h-2 bg-[#2A2A2A] rounded-full" />
      </div>
      <div className="h-32 relative overflow-hidden bg-[#F2F0EE]">
        <Image
          src={TURTLENECK_IMG}
          alt="Merino turtleneck"
          fill
          className="object-contain"
          sizes="200px"
        />
        <div className="absolute bottom-2 right-2 bg-white/95 rounded-md px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
          <ShieldCheck size={8} className="text-green-600" />
          <span className="text-[8px] font-semibold text-[#0A0A0A]">Verified</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <div className="text-[8px] font-semibold text-[#8C8C8C] uppercase tracking-widest mb-1">
            Maison Loren
          </div>
          <div className="text-sm font-semibold text-[#0A0A0A] leading-tight">Merino Turtleneck</div>
        </div>
        <div className="space-y-0">
          {[
            { label: "Materials", value: "100% Merino Wool" },
            { label: "Made in", value: "🇮🇹 Italy" },
            { label: "Certifications", value: "OEKO-TEX" },
            { label: "Impact", value: "2.1kg CO₂e" },
            { label: "Care", value: "Hand wash 30°C" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between py-1.5 border-b border-[#F4F4F3] last:border-0"
            >
              <span className="text-[8px] text-[#8C8C8C]">{row.label}</span>
              <span className="text-[8px] font-medium text-[#0A0A0A]">{row.value}</span>
            </div>
          ))}
        </div>
        <div className="pt-1 flex items-center gap-2">
          <div
            className="grid gap-px"
            style={{ gridTemplateColumns: "repeat(6, 1fr)", width: 24, height: 24 }}
          >
            {[1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1].map(
              (cell, i) => (
                <div key={i} style={{ backgroundColor: cell ? "#0A0A0A" : "white", aspectRatio: "1" }} />
              )
            )}
          </div>
          <span className="text-[8px] text-[#8C8C8C]">Scan to verify</span>
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
          <div className="flex flex-col gap-6 max-w-xl">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                Digital Product Passports for fashion brands
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05]">
              Create product passports<br />
              in minutes.<br />
              Not months.
            </h1>
            <p className="text-lg text-[#525252] leading-relaxed">
              Collect product data, request information from suppliers, generate QR codes and publish ESPR-ready Digital Product Passports from one simple platform.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0A0A0A] text-white text-sm font-semibold hover:bg-[#1C1C1C] transition-colors"
              >
                Start free trial
              </a>
              <a
                href={`${APP_URL}/example`}
                className="inline-flex items-center h-11 px-2 text-[#525252] text-sm font-medium hover:text-[#0A0A0A] transition-colors gap-1.5"
              >
                See example passport
                <ArrowRight size={14} />
              </a>
            </div>
            <p className="text-sm text-[#8C8C8C]">
              No credit card required · Set up in under 10 minutes
            </p>
          </div>

          <div className="relative hidden lg:flex items-center justify-end pr-16">
            <WorkflowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    "Supplier data collection built in",
    "ESPR-ready passport structure",
    "QR codes on every passport",
    "Bulk upload from spreadsheet",
    "Public passport pages included",
    "GOTS & OEKO-TEX fields supported",
  ];
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
      title: "Add your product",
      body: "Create a single passport manually or upload hundreds of products from a spreadsheet.",
    },
    {
      number: "02",
      title: "Request supplier data",
      body: "Send simple data requests to manufacturers and suppliers so they can provide the missing information.",
    },
    {
      number: "03",
      title: "Build your passport",
      body: "Use the guided passport builder to add materials, certifications, facilities, care, impact and product story.",
    },
    {
      number: "04",
      title: "Generate your QR code",
      body: "Every passport gets a QR code that can be used on labels, packaging, swing tags and ecommerce pages.",
    },
    {
      number: "05",
      title: "Publish and share",
      body: "Launch a public product passport page that customers, retailers and partners can access instantly.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-2xl">
            From product data to live passport in five simple steps.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-semibold tracking-[-0.04em] text-[#E8E8E6] leading-none shrink-0">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-[#E8E8E6]" />
                )}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0A0A0A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Feature grid ─────────────────────────────────────────────────────────────

function FeatureGrid() {
  const features = [
    {
      icon: FileText,
      title: "Passport Builder",
      body: "Guided fields for product identity, materials, suppliers, certifications, impact data and product story.",
    },
    {
      icon: Send,
      title: "Supplier Requests",
      body: "Request missing product data directly from suppliers and manufacturers through simple forms.",
    },
    {
      icon: Upload,
      title: "Bulk Upload",
      body: "Import collections by spreadsheet and automatically create draft passports ready for review.",
    },
    {
      icon: QrCode,
      title: "QR Code Management",
      body: "Generate and manage QR codes for products, packaging, care labels and ecommerce pages.",
    },
    {
      icon: ShieldCheck,
      title: "Evidence & Verification",
      body: "Upload supporting evidence and show verified data clearly inside the passport builder.",
    },
    {
      icon: BarChart2,
      title: "Analytics",
      body: "Track passport views, QR code scans and customer engagement across your product range.",
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-2xl">
            Everything you need to launch Digital Product Passports.
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

// ─── ESPR readiness ───────────────────────────────────────────────────────────

function ESPRReadiness() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-[#E8E8E6] rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center">
          <div className="flex-1 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              EU regulation in progress
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Designed to support ESPR readiness.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Origins helps fashion brands structure the data expected within future Digital Product Passports, including product identity, materials, certifications, manufacturing information, environmental claims, care guidance and supporting evidence.
            </p>
            <p className="text-sm text-[#8C8C8C] leading-relaxed">
              Origins is designed to support ESPR readiness as regulations evolve. We update our data model as official guidance develops.
            </p>
          </div>
          <div className="lg:w-72 shrink-0 space-y-4">
            {[
              {
                title: "ESPR-aligned data structure",
                body: "Passport fields are structured around the data categories expected by EU Digital Product Passport requirements.",
              },
              {
                title: "Certifications supported",
                body: "GOTS, OEKO-TEX, GRS, Bluesign and custom certifications can be added and evidenced.",
              },
              {
                title: "Audit trail included",
                body: "Published passports include a timestamped record of data contributions and changes.",
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

// ─── Built for fashion ────────────────────────────────────────────────────────

function BuiltForFashion() {
  const categories = [
    "Materials",
    "Certifications",
    "Manufacturing facilities",
    "Supplier data",
    "Care instructions",
    "Repair guidance",
    "End-of-life guidance",
    "Carbon / water / energy data",
    "Product story",
    "Evidence uploads",
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              For fashion brands
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Built around the way fashion products are made.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Origins is not a generic compliance tool. It is built around the specific data that fashion brands need to capture, manage and share — from raw materials to end of life.
            </p>
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:opacity-60 transition-opacity w-fit"
            >
              Start free trial
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {categories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-2.5 py-3 px-4 bg-white border border-[#E8E8E6] rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] shrink-0" />
                <span className="text-sm font-medium text-[#0A0A0A]">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Supplier data collection ─────────────────────────────────────────────────

function SupplierFormMockup() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden max-w-xs w-full">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E8E8E6] bg-[#F9F9F8]">
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <span className="ml-3 text-xs text-[#8C8C8C] font-medium">Supplier data request</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="space-y-1">
          <div className="text-xs text-[#8C8C8C]">
            From: <span className="font-semibold text-[#0A0A0A]">Maison Loren</span>
          </div>
          <div className="text-xs text-[#8C8C8C]">
            For: <span className="font-semibold text-[#0A0A0A]">Merino Turtleneck</span>
          </div>
        </div>
        <div className="border-t border-[#E8E8E6] pt-4 space-y-3">
          {[
            { q: "Fibre origin", a: "New Zealand (Mulesing-free)" },
            { q: "Certifications", a: "OEKO-TEX Standard 100" },
            { q: "Yarn spun in", a: "Biella, Italy" },
          ].map((field) => (
            <div key={field.q}>
              <div className="text-[10px] text-[#8C8C8C] mb-1">{field.q}</div>
              <div className="text-xs font-medium text-[#0A0A0A] bg-[#F4F4F3] rounded-lg px-3 py-2">
                {field.a}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-8 bg-[#0A0A0A] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5">
          Submit data
          <ArrowRight size={11} />
        </div>
      </div>
    </div>
  );
}

function SupplierCollection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Supplier data
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Getting the data is the hardest part. Origins makes it easier.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Most fashion brands don&apos;t have all the product information they need internally. Origins lets you request missing data from suppliers through simple forms — no spreadsheets back and forth.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { n: "1", label: "Brand requests data", sub: "Via Origins platform" },
                { n: "2", label: "Supplier completes form", sub: "Simple web form" },
                { n: "3", label: "Data reviewed", sub: "In the passport builder" },
                { n: "4", label: "Passport updated", sub: "And published" },
              ].map((step) => (
                <div
                  key={step.label}
                  className="flex flex-col gap-1 p-4 bg-[#F9F9F8] border border-[#E8E8E6] rounded-xl"
                >
                  <span className="text-xs font-bold text-[#C4C4C0]">{step.n}</span>
                  <div className="text-sm font-semibold text-[#0A0A0A]">{step.label}</div>
                  <div className="text-xs text-[#8C8C8C]">{step.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SupplierFormMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bulk upload ──────────────────────────────────────────────────────────────

function BulkUploadMockup() {
  const rows = [
    { name: "Merino Turtleneck", sku: "ML-001" },
    { name: "Linen Overshirt", sku: "ML-002" },
    { name: "Recycled Wool Coat", sku: "ML-003" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E8E8E6] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden max-w-sm w-full">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E8E8E6] bg-[#F9F9F8]">
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <div className="w-2 h-2 rounded-full bg-[#E8E8E6]" />
        <span className="ml-3 text-xs text-[#8C8C8C] font-medium">Import products</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="border-2 border-dashed border-[#E8E8E6] rounded-xl p-5 flex flex-col items-center gap-2 bg-[#F9F9F8]">
          <Upload size={20} className="text-[#C4C4C0]" />
          <div className="text-xs font-medium text-[#525252]">products-aw2025.csv</div>
          <div className="text-[10px] text-green-600 font-semibold">3 products found</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-semibold text-[#8C8C8C] uppercase tracking-wider mb-2">
            Preview
          </div>
          {rows.map((row) => (
            <div
              key={row.sku}
              className="flex items-center justify-between py-2 border-b border-[#F4F4F3] last:border-0"
            >
              <div>
                <div className="text-xs font-medium text-[#0A0A0A]">{row.name}</div>
                <div className="text-[10px] text-[#8C8C8C]">{row.sku}</div>
              </div>
              <span className="text-[10px] font-medium px-2 py-0.5 bg-[#F4F4F3] text-[#8C8C8C] rounded-full">
                draft
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-8 bg-[#0A0A0A] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5">
          Create 3 draft passports
          <ArrowRight size={11} />
        </div>
      </div>
    </div>
  );
}

function BulkUpload() {
  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:order-2 flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Bulk upload
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Already working in spreadsheets? Upload them.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Brands can bulk upload product data via CSV to create multiple unpublished draft passports. Review them in Origins and publish when ready.
            </p>
            <div className="flex items-start gap-4 p-5 bg-white border border-[#E8E8E6] rounded-2xl">
              <div className="text-3xl font-semibold tracking-[-0.04em] text-[#E8E8E6] leading-none shrink-0">
                ↑
              </div>
              <div className="space-y-0.5">
                <div className="text-sm font-semibold text-[#0A0A0A]">Upload once.</div>
                <div className="text-sm text-[#525252]">Review in Origins.</div>
                <div className="text-sm text-[#525252]">Publish when ready.</div>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Import full product collections in one upload",
                "Draft passports created automatically for each row",
                "Review and complete passport data before publishing",
                "Upload entire seasons at once — no size limit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#0A0A0A] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1 flex justify-center">
            <BulkUploadMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Example passport ─────────────────────────────────────────────────────────

function ExamplePassport() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Example passport
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              See what your customers will see.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Every product you publish in Origins becomes a beautiful, accessible passport page. Customers scan the QR code from the label, swing tag or packaging and see the full product story.
            </p>
            <ul className="space-y-3">
              {[
                "Product image and brand identity",
                "Materials and composition",
                "Country of manufacture",
                "Certifications and evidence",
                "Environmental impact data",
                "Care and end-of-life instructions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#0A0A0A] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`${APP_URL}/example`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:opacity-60 transition-opacity w-fit"
            >
              View example passport
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="flex justify-center">
            <PassportMockup />
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
      description: "For small brands launching their first passports.",
      features: [
        "250 active passports per year",
        "QR code generation",
        "Public passport pages",
        "Passport builder wizard",
        "CSV export",
      ],
      cta: "Start free trial",
      href: `${APP_URL}/signup`,
      highlight: false,
    },
    {
      name: "Growth",
      price: "£750",
      period: "/mo",
      description: "For growing brands managing collections and supplier data.",
      features: [
        "1,000 active passports per year",
        "Everything in Starter",
        "Supplier data requests",
        "Bulk CSV import",
        "AI Passport Generator",
        "Analytics dashboard",
        "Shopify integration",
      ],
      cta: "Start free trial",
      href: `${APP_URL}/signup`,
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For larger teams, supplier networks and custom workflows.",
      features: [
        "Unlimited passports",
        "Everything in Growth",
        "Multi-brand workspace",
        "Custom data extensions",
        "SSO and permissions",
        "Dedicated onboarding",
      ],
      cta: "Talk to us",
      href: "/book-demo",
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
              Simple pricing for brands at every stage.
            </h2>
          </div>
          <a
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors shrink-0"
          >
            View pricing
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
                    <span className={`text-sm ${plan.highlight ? "text-white/50" : "text-[#8C8C8C]"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/60" : "text-[#525252]"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      size={13}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white/70" : "text-[#0A0A0A]"}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-[#525252]"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
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
          All plans include a free trial. Annual billing available. Passport allocation applies per 12 months.
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
            Launch your first product passport today.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10">
            Create passports, collect supplier data and generate QR codes from one simple platform.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Start free trial
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
      <FeatureGrid />
      <ESPRReadiness />
      <BuiltForFashion />
      <SupplierCollection />
      <BulkUpload />
      <ExamplePassport />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
