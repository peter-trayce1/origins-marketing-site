"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { AppLink } from "@/components/currency/AppLink";
import {
  ArrowRight,
  Check,
  Sparkles,
  BarChart2,
  Globe,
  FileText,
  Database,
  Users,
} from "lucide-react";

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl flex flex-col gap-7">
          <p className="eyebrow">Product</p>
          <h1 className="font-serif text-[3.25rem] lg:text-[4rem] text-[#111111] leading-[1.05] tracking-[-0.02em]">
            Everything you need to build verified passports{" "}
            <span className="italic">at scale.</span>
          </h1>
          <p className="text-[#72726D] text-[18px] leading-[1.65] max-w-[32em]">
            A complete infrastructure for Digital Product Passports, from the first data entry to the customer scanning a QR code in store.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <AppLink path="/signup" className="btn-primary h-11 px-6 text-sm">
              Start building free
            </AppLink>
            <a
              href="/book-demo"
              className="inline-flex items-center gap-[5px] text-sm font-[500] text-[#111111] transition-opacity hover:opacity-60"
            >
              Book a demo <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Passport builder ─────────────────────────────────────────────────────────

function PassportBuilder() {
  const bullets = [
    "Materials composition with percentage breakdowns",
    "Supply chain tracked by country, process and partner",
    "Certification fields for GOTS, OEKO-TEX, GRS and more",
  ];

  return (
    <section className="bg-[#F6F4F2] py-28 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-[72px] items-center">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
          <p className="eyebrow">Passport builder</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            A guided wizard for every field your passport needs.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.7]">
            Eight steps cover product info, materials, certifications, supply chain, care and brand story. A live completeness score shows what is missing before you publish.
          </p>
          <ul className="flex flex-col gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-[#72726D]">
                <Check size={13} className="text-[#164ED8] shrink-0 mt-1" strokeWidth={2} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="flex items-center justify-center">
          <Image
            src="/screenshot-passport-builder.png"
            alt="Passport builder"
            width={2870}
            height={1614}
            className="w-full h-auto mix-blend-multiply"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── QR codes ─────────────────────────────────────────────────────────────────

function QRCodes() {
  const bullets = [
    "Export as PNG, SVG or PDF",
    "Batch export for an entire product range",
    "Always resolves to the latest published version",
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-[72px] items-center">
        <motion.div {...fadeUp(0)} className="bg-[#F6F4F2] p-16 flex flex-col items-center gap-6">
          <div className="bg-white border border-[#E6E6E2] p-6">
            <Image
              src="/qr-example.png"
              alt="Example passport QR code"
              width={314}
              height={308}
              className="w-40 h-40"
            />
          </div>
          <div className="flex gap-2">
            {["PNG", "SVG", "PDF"].map((f) => (
              <span
                key={f}
                className="text-[11px] font-[500] tracking-[0.08em] text-[#72726D] border border-[#E6E6E2] bg-white px-4 py-[7px]"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="flex flex-col gap-6">
          <p className="eyebrow">QR codes</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Every passport gets a QR code the moment you publish.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.7]">
            The code points at the identity rather than the label, so printed labels keep working when the data behind them changes.
          </p>
          <ul className="flex flex-col gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-[#72726D]">
                <Check size={13} className="text-[#164ED8] shrink-0 mt-1" strokeWidth={2} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Integrations ─────────────────────────────────────────────────────────────

function Integrations() {
  const integrations = [
    { name: "Shopify", note: "Sync products automatically", soon: false },
    { name: "GOTS", note: "Pull certification data", soon: false },
    { name: "EcoVadis", note: "Supplier sustainability ratings", soon: false },
    { name: "REST API", note: "Connect any system", soon: false },
    { name: "Klaviyo", note: "Coming soon", soon: true },
    { name: "WooCommerce", note: "Coming soon", soon: true },
  ];

  return (
    <section className="bg-[#F6F4F2] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-[72px] items-center">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
          <p className="eyebrow">Integrations</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Connect the product data stack you already run.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.7]">
            Sync products from Shopify, pull certification data from GOTS and EcoVadis, and connect any PLM or ERP through the REST API.
          </p>
          <a href="/book-demo" className="link-cobalt text-sm">
            Read the API docs <ArrowRight size={13} />
          </a>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-px bg-[#E6E6E2] border border-[#E6E6E2]"
        >
          {integrations.map((it) => (
            <motion.div
              key={it.name}
              variants={staggerItem}
              className="bg-white p-6 flex flex-col gap-1.5"
            >
              <span
                className="text-sm font-[600]"
                style={{ color: it.soon ? "#C4C4C0" : "#111111" }}
              >
                {it.name}
              </span>
              <span
                className="text-xs"
                style={{ color: it.soon ? "#C4C4C0" : "#72726D" }}
              >
                {it.note}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Also included ────────────────────────────────────────────────────────────

function AlsoIncluded() {
  const features = [
    {
      icon: Sparkles,
      title: "AI passport builder",
      body: "Paste a product description and get a draft story and sustainability summary. Suggestions are labelled and never published without review.",
    },
    {
      icon: BarChart2,
      title: "Scan analytics",
      body: "Track scan activity per passport by country, device and date. Exportable for reporting.",
    },
    {
      icon: Globe,
      title: "Embeddable widgets",
      body: "Add a passport badge, inline summary or full modal to Shopify, Hydrogen, Webflow or a custom storefront.",
    },
    {
      icon: FileText,
      title: "Passport templates",
      body: "Start from a template built for your category: apparel, accessories, sportswear, outerwear, childrenswear.",
    },
    {
      icon: Database,
      title: "Bulk import",
      body: "Upload a CSV to create hundreds of drafts at once, and update existing passports in bulk as data changes.",
    },
    {
      icon: Users,
      title: "Team workspace",
      body: "Role-based permissions, multiple brands under one organisation, and SSO on Enterprise.",
    },
  ];

  return (
    <section className="bg-white py-28 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="eyebrow mb-4">Also included</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Everything else you will need.
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E6E6E2]"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              className="bg-white px-7 py-8 flex flex-col gap-3.5"
            >
              <f.icon size={20} className="text-[#164ED8]" strokeWidth={1.5} />
              <h3 className="text-[15px] font-[600] text-[#111111]">{f.title}</h3>
              <p className="text-[13px] text-[#72726D] leading-[1.7]">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em] mb-6">
            Ready to build your first{" "}
            <span className="italic">passport?</span>
          </h2>
          <p className="text-lg text-white/50 leading-[1.65] mb-10">
            Set up in under ten minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <AppLink path="/signup" className="btn-primary bg-white text-[#111111] hover:bg-white/90 h-11 px-6 text-sm">
              Start building free
            </AppLink>
            <a
              href="/pricing"
              className="inline-flex items-center gap-[5px] text-sm font-[500] text-white/50 transition-colors hover:text-white"
            >
              View pricing <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PlatformContent() {
  return (
    <>
      <Hero />
      <PassportBuilder />
      <QRCodes />
      <Integrations />
      <AlsoIncluded />
      <CTA />
    </>
  );
}
