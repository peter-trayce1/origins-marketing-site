"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type MotionProps, type Variants } from "framer-motion";
import { APP_URL } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  Fingerprint,
  FileCheck,
  Route,
  Heart,
  Recycle,
  Send,
  Upload,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const hasHeroImage = true; // set to false if hero-jacket.png not yet in /public

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-0 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div {...fadeUp(0)} className="pb-16 lg:pb-24 flex flex-col gap-8 max-w-xl">
            <p className="eyebrow">Digital identities for physical products</p>

            <h1 className="font-serif text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] text-[#111111] leading-[1.0] tracking-[-0.02em]">
              Make every<br />
              product{" "}
              <span className="italic">known.</span>
            </h1>

            <p className="text-[#72726D] text-lg leading-relaxed">
              Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a href="/book-demo" className="btn-primary h-11 px-6 text-sm">
                  Book a demo
                </a>
                <a
                  href="/platform"
                  className="link-cobalt h-11 items-center text-sm"
                >
                  See how it works <ArrowRight size={13} />
                </a>
              </div>
              <a
                href="https://passport.knownobjects.io/c/ORI-89413809"
                className="link-cobalt text-xs text-[#72726D] hover:text-[#111111]"
                style={{ color: "#72726D" }}
              >
                See example passport (best viewed on mobile) <ArrowRight size={11} />
              </a>
            </div>

            <p className="text-[12px] text-[#72726D]">
              No credit card required · Live in minutes
            </p>
          </motion.div>

          {/* Right: product image */}
          <motion.div {...fadeUp(0.15)} className="relative flex justify-center lg:justify-end">
            <Image
              src="/hero-jacket-full-white.png"
              alt="Waxed field jacket with Known Objects. digital identity tag"
              width={1448}
              height={1086}
              className="w-full h-auto"
              style={{ backgroundColor: "#ffffff" }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────────────────

function TrustStrip() {
  const brands = [
    "Acme Studios",
    "Field Folk",
    "Tanner Goods",
    "Aura",
    "Vemadic",
    "Fleurgt",
  ];
  const ticker = [...brands, ...brands];

  return (
    <div className="border-y border-[#E6E6E2] bg-white overflow-hidden py-5">
      <p className="text-center text-[11px] font-[500] text-[#72726D] uppercase tracking-[0.1em] mb-4">
        Trusted by forward-thinking brands
      </p>
      <div className="animate-marquee flex items-center">
        {ticker.map((brand, i) => (
          <span
            key={i}
            className="shrink-0 px-10 text-[13px] font-[500] text-[#C4C4C0] whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── System Pillars ───────────────────────────────────────────────────────────

function SystemPillars() {
  const pillars = [
    {
      icon: Fingerprint,
      title: "Identity",
      body: "Every object. Every detail. Structured, consistent and trusted.",
    },
    {
      icon: FileCheck,
      title: "Evidence",
      body: "Verified data supported by sources brands and customers can trust.",
    },
    {
      icon: Route,
      title: "Journey",
      body: "Track key events across the product lifecycle.",
    },
    {
      icon: Heart,
      title: "Care",
      body: "Give customers the right guidance to extend product life.",
    },
    {
      icon: Recycle,
      title: "Afterlife",
      body: "Enable repair, resale, reuse and responsible end-of-life pathways.",
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">The Known Objects system</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-tight tracking-[-0.02em]">
            A complete identity for every{" "}
            <span className="italic">object.</span>
          </h2>
          <p className="mt-5 text-[#72726D] leading-relaxed">
            Known Objects captures what matters, connects supporting evidence and carries the product&apos;s identity across its entire lifecycle.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-5 gap-px bg-[#E6E6E2]"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="bg-[#F6F4F2] px-6 py-8 flex flex-col gap-4"
            >
              <p.icon size={20} className="text-[#164ED8]" strokeWidth={1.5} />
              <div>
                <h3 className="font-[600] text-[#111111] mb-1.5 text-sm">{p.title}</h3>
                <p className="text-[13px] text-[#72726D] leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="mt-8">
          <a href="/platform" className="link-cobalt text-sm">
            Explore the system <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Product Storytelling ─────────────────────────────────────────────────────

function ProductStorytelling() {
  const tabs = ["Product", "Materials", "Journey", "Care", "Afterlife"];
  const highlights = [
    "Product story & brand narrative",
    "Materials and composition",
    "Maker and supplier information",
    "Care instructions",
    "Repair and resale pathways",
    "Ownership and end-of-life guidance",
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-7">
            <p className="eyebrow">Customer connection</p>
            <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-tight tracking-[-0.02em]">
              More than a passport.<br />
              A connection that lasts.
            </h2>
            <p className="text-[#72726D] leading-relaxed">
              Give customers access to the story, care guidance and services around each product. From first purchase through repair, resale and beyond.
            </p>
            <ul className="space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[13px] text-[#72726D]">
                  <Check size={13} className="text-[#164ED8] shrink-0" strokeWidth={2} />
                  {h}
                </li>
              ))}
            </ul>
            <a href="/customer-experience" className="link-cobalt text-sm">
              Explore customer experience <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* Mobile passport mockup */}
          <motion.div {...fadeUp(0.15)} className="flex justify-center">
            <div className="relative">
              <Image
                src="/screenshot-certifications-mobile.png"
                alt="Known Objects. digital passport on mobile"
                width={862}
                height={1478}
                className="w-full max-w-[260px] h-auto [filter:brightness(1.08)]"
              />
              {/* Cobalt tab indicators */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1">
                {tabs.map((t, i) => (
                  <div
                    key={t}
                    className={`h-0.5 rounded-full transition-all ${
                      i === 0 ? "w-6 bg-[#164ED8]" : "w-3 bg-[#E6E6E2]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works (Passport Steps) ───────────────────────────────────────────

function PassportSteps() {
  const steps = [
    {
      number: "01",
      title: "Add product information",
      body: "Name, description, imagery, country of origin, category and identifiers.",
      image: "/screenshot-passport-builder.png",
      alt: "Product information builder",
      width: 2870,
      height: 1614,
    },
    {
      number: "02",
      title: "Add materials, impact & certifications",
      body: "Composition, carbon footprint, water usage, claims and verified certifications.",
      image: "/screenshot-impact-builder.png",
      alt: "Impact and certifications builder",
      width: 2308,
      height: 1508,
    },
    {
      number: "03",
      title: "Connect supply chain data",
      body: "Add suppliers and manufacturing facilities, or send requests for suppliers to complete directly.",
      image: "/screenshot-supply-chain-builder.png",
      alt: "Supply chain builder",
      width: 2284,
      height: 1508,
    },
    {
      number: "04",
      title: "Publish and generate your QR code",
      body: "Your identity goes live instantly. Download a QR code for labels, packaging and product pages.",
      image: "/screenshot-passport-builder.png",
      alt: "Publish and QR code generation",
      width: 2870,
      height: 1614,
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-tight tracking-[-0.02em]">
            The world&apos;s most customisable<br />
            <span className="italic">passport builder.</span>
          </h2>
          <p className="mt-5 text-[#72726D] leading-relaxed">
            Most brands have their first identity live within an hour of signing up.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="bg-white border border-[#E6E6E2] overflow-hidden"
            >
              <div className="h-[220px] bg-[#F6F4F2] overflow-hidden flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  className="w-full h-auto mix-blend-multiply"
                />
              </div>
              <div className="p-7 border-t border-[#E6E6E2]">
                <p className="text-[11px] font-[500] text-[#164ED8] uppercase tracking-[0.1em] mb-2">
                  {step.number}
                </p>
                <h3 className="font-[600] text-[#111111] mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-[#72726D] leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          <a href={`${APP_URL}/signup`} className="btn-primary h-11 px-6 text-sm">
            Start building free
          </a>
          <p className="text-[12px] text-[#72726D] self-center">
            No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Supplier Collection ──────────────────────────────────────────────────────

function SupplierCollection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
            <p className="eyebrow">Supply chain</p>
            <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-tight tracking-[-0.02em]">
              Collect supplier data without spreadsheets.
            </h2>
            <p className="text-[#72726D] leading-relaxed">
              Send suppliers a secure link and request only the data you need. They complete a simple form with no account required. Responses populate your identity automatically.
            </p>
            <ul className="space-y-2.5">
              {[
                "Send a secure link to any supplier",
                "Request only the fields you need",
                "Track responses in real time",
                "Data populates identities automatically",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[13px] text-[#72726D]">
                  <Check size={13} className="text-[#164ED8] shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <a href={`${APP_URL}/signup`} className="link-cobalt text-sm">
              Start for free <ArrowRight size={13} />
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="flex justify-center lg:justify-end">
            <Image
              src="/screenshot-supplier-request.png"
              alt="Supply chain requests"
              width={2334}
              height={1164}
              className="w-full max-w-lg h-auto mix-blend-multiply"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Bulk Upload ──────────────────────────────────────────────────────────────

function BulkUpload() {
  return (
    <section className="bg-[#F6F4F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div {...fadeUp(0)} className="lg:order-2 flex flex-col gap-6">
            <p className="eyebrow">Scale</p>
            <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-tight tracking-[-0.02em]">
              Create hundreds of identities at once.
            </h2>
            <p className="text-[#72726D] leading-relaxed">
              Download a template (Quick Start, Standard or Advanced), upload your product data, map columns automatically and publish at scale.
            </p>
            <ul className="space-y-2.5">
              {[
                "Download a CSV template in seconds",
                "Upload any column format",
                "Columns mapped automatically",
                "Review drafts and publish at scale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-[#72726D]">
                  <Check size={13} className="text-[#164ED8] mt-0.5 shrink-0" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="lg:order-1 flex justify-center">
            <Image
              src="/screenshot-bulk-import.png"
              alt="Bulk import"
              width={1700}
              height={1454}
              className="w-full max-w-lg h-auto mix-blend-multiply"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Compliance ───────────────────────────────────────────────────────────────

function ComplianceSection() {
  const milestones = [
    { year: "2026", label: "Preparation", body: "Early adopters structure product data and issue voluntary passports." },
    { year: "2027", label: "Initial rollout", body: "First requirements take effect for selected textile categories." },
    { year: "2028–30", label: "Expanded scope", body: "Requirements extend across broader product categories." },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Regulatory readiness</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-tight tracking-[-0.02em]">
            Prepare for Digital Product Passports<br />
            <span className="italic">without rebuilding your systems.</span>
          </h2>
          <p className="mt-5 text-[#72726D] leading-relaxed">
            Bring your product information together, identify gaps and create customer-ready digital identities using a platform built to adapt as requirements evolve.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-px bg-[#E6E6E2] mb-12"
        >
          {milestones.map((m) => (
            <motion.div key={m.year} variants={staggerItem} className="bg-white p-8">
              <div className="text-4xl font-[300] text-[#E6E6E2] tracking-tight mb-4">{m.year}</div>
              <h3 className="font-[600] text-[#111111] mb-2 text-sm">{m.label}</h3>
              <p className="text-[13px] text-[#72726D] leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex gap-4">
          <a href="/compliance" className="link-cobalt text-sm">
            Learn about ESPR readiness <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Solutions ────────────────────────────────────────────────────────────────

function SolutionsGrid() {
  const solutions = [
    {
      number: "01",
      title: "Prepare",
      body: "Organise the product data required for evolving Digital Product Passport requirements. Start with what you have.",
    },
    {
      number: "02",
      title: "Connect",
      body: "Bring together information from teams, suppliers, certifications and supporting evidence in one structured identity.",
    },
    {
      number: "03",
      title: "Engage",
      body: "Turn product information into customer-facing stories, care guidance and lifecycle services that last beyond purchase.",
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="eyebrow mb-4">Solutions</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-tight tracking-[-0.02em] max-w-xl">
            Three clear areas of value.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-px bg-[#E6E6E2]"
        >
          {solutions.map((s) => (
            <motion.div key={s.title} variants={staggerItem} className="bg-[#F6F4F2] p-8 lg:p-10">
              <p className="text-[11px] font-[500] text-[#164ED8] uppercase tracking-[0.1em] mb-5">{s.number}</p>
              <h3 className="font-serif text-2xl text-[#111111] mb-4 italic">{s.title}</h3>
              <p className="text-[13px] text-[#72726D] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pricing preview ──────────────────────────────────────────────────────────

function PricingPreview() {
  const plans = [
    {
      name: "Essentials",
      price: "£150",
      period: "/mo",
      description: "For smaller and growing brands starting to build connected product identities.",
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
      description: "For established brands managing larger product ranges, suppliers and teams.",
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
      description: "For brands, manufacturers and teams requiring higher volumes and integrations.",
      features: [
        "Custom publication allowance",
        "Unlimited drafts, QR labels & scans",
        "Everything in Growth",
        "ERP & PLM integration",
        "Supplier portal",
        "Dedicated success manager",
      ],
      cta: "Talk to us",
      href: "/book-demo",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-tight tracking-[-0.02em]">
              Simple pricing for brands<br />at every stage.
            </h2>
          </div>
          <a href="/pricing" className="link-cobalt text-sm shrink-0">
            View full pricing <ArrowRight size={13} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-7 flex flex-col gap-6 border ${
                plan.highlight
                  ? "bg-[#111111] border-[#111111]"
                  : "bg-white border-[#E6E6E2]"
              }`}
            >
              <div>
                <p className={`text-[10px] font-[500] uppercase tracking-[0.12em] mb-3 ${
                  plan.highlight ? "text-white/40" : "text-[#72726D]"
                }`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-[300] tracking-tight ${
                    plan.highlight ? "text-white" : "text-[#111111]"
                  }`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? "text-white/40" : "text-[#72726D]"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-[13px] leading-relaxed ${plan.highlight ? "text-white/50" : "text-[#72726D]"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      size={12}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white/50" : "text-[#164ED8]"}`}
                      strokeWidth={2}
                    />
                    <span className={`text-[13px] ${plan.highlight ? "text-white/60" : "text-[#72726D]"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`inline-flex items-center justify-center h-10 px-5 text-[13px] font-[500] transition-colors border ${
                  plan.highlight
                    ? "bg-white text-[#111111] border-white hover:bg-white/90"
                    : "bg-[#111111] text-white border-[#111111] hover:bg-[#2a2a2a]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-[#72726D] mt-6">
          All plans include a 14-day free trial. Annual billing available. Additional capacity from +100 passports for £100/month.
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function HomepageFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is a Digital Product Passport?",
      a: "A Digital Product Passport is a digital record linked to a physical product via a QR code. It gives customers, retailers and regulators access to verified product information including materials, origins, certifications, environmental data and circularity guidance.",
    },
    {
      q: "Is Known Objects only for fashion brands?",
      a: "No. Known Objects is built for any brand that makes physical products: fashion, luxury, beauty, furniture, electronics, homeware, sporting goods and more. The platform is designed to work wherever product data and customer connection matter.",
    },
    {
      q: "What is ESPR and does it affect my brand?",
      a: "ESPR stands for the EU Ecodesign for Sustainable Products Regulation. It requires brands selling into the EU to issue Digital Product Passports. If you sell into European markets, this regulation will apply to your brand from 2027 onwards.",
    },
    {
      q: "How long does it take to set up?",
      a: "Most brands have their first identity live within an hour of signing up. The platform is designed to be simple. Guided fields, AI-assisted content and CSV import mean you can move quickly without consultants or complex projects.",
    },
    {
      q: "Can my suppliers contribute data directly?",
      a: "Yes. Known Objects has a built-in supplier request feature. You send a secure link, your supplier completes a simple web form with no account required, and the information flows directly into your product identity.",
    },
    {
      q: "Can I bulk upload my product catalogue?",
      a: "Yes. Download a template, populate it with your product data and upload. Known Objects maps columns automatically and creates draft identities for each product, ready to review and publish.",
    },
    {
      q: "Do customers need an app to view a passport?",
      a: "No. Passport pages are public web pages. Customers scan the QR code with any smartphone camera and the page opens instantly in their browser. No app or login required.",
    },
    {
      q: "How are QR codes managed?",
      a: "QR codes are permanent and linked to the identity, not the label. Download and reprint them at any time in PNG or SVG format. The URL never changes, so existing printed labels always work.",
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-24 lg:py-32 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20">
          <motion.div {...fadeUp(0)}>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-tight tracking-[-0.02em]">
              Common questions.
            </h2>
            <p className="mt-4 text-[13px] text-[#72726D] leading-relaxed">
              Still have questions?{" "}
              <a href="mailto:hello@knownobjects.io" className="text-[#164ED8] hover:underline">
                Get in touch.
              </a>
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="divide-y divide-[#E6E6E2]">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="text-[13px] font-[500] text-[#111111]">{faq.q}</span>
                  <span className="shrink-0 mt-0.5 text-[#72726D]">
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-[13px] text-[#72726D] leading-relaxed pr-6">{faq.a}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em] mb-6">
            Make every product{" "}
            <span className="italic">known.</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10">
            Connect product data, collect supplier information and generate QR codes in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href="/book-demo" className="btn-primary bg-white text-[#111111] hover:bg-white/90 h-11 px-6 text-sm">
              Book a demo
            </a>
            <a
              href={`${APP_URL}/signup`}
              className="link-cobalt text-sm text-white/50 hover:text-white"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Start for free <ArrowRight size={13} />
            </a>
          </div>
          <p className="text-[12px] text-white/25 mt-5">
            No credit card required · Live in minutes
          </p>
        </motion.div>
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
      <SystemPillars />
      <ProductStorytelling />
      <PassportSteps />
      <SupplierCollection />
      <BulkUpload />
      <ComplianceSection />
      <SolutionsGrid />
      <PricingPreview />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}
