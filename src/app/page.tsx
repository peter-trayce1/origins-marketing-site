"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type MotionProps, type Variants } from "framer-motion";
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
  Plus,
  Minus,
  BookOpen,
  RefreshCw,
} from "lucide-react";

const TURTLENECK_IMG = "/turtleneck.webp";

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-6 max-w-xl">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] shrink-0" />
                Digital Product Passports for fashion brands
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05]">
              Create Digital Product<br />
              Passports in minutes.
            </h1>
            <p className="text-lg text-[#525252] leading-relaxed">
              Connect product data, collect supplier information, generate QR codes and publish customer-facing passport pages — all from one platform. ESPR-ready from day one.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
              >
                Start free trial
              </a>
              <a
                href="https://app.origins-id.com/c/ORI-89413809"
                className="inline-flex items-center h-11 px-2 text-[#525252] text-sm font-medium hover:text-[#0A0A0A] transition-colors gap-1.5"
              >
                See example passport (best viewed on mobile)
                <ArrowRight size={14} />
              </a>
            </div>
            <p className="text-sm text-[#8C8C8C]">
              No credit card required · Set up in under 10 minutes
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="relative">
            <Image
              src="/product-preview.png - 2.png"
              alt="OriginsID dashboard and passport preview"
              width={1536}
              height={1024}
              className="w-full h-auto mix-blend-multiply"
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
            <Check size={12} className="text-[#2ECC71] shrink-0" />
            <span className="text-sm text-[#525252] whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── What Is A DPP ────────────────────────────────────────────────────────────

function WhatIsADPP() {
  const steps = [
    {
      number: "01",
      title: "Product Data",
      body: "Add product information, materials, supply chain, certifications and impact data in the Origins passport builder.",
      image: "/screenshot-passport-builder.png",
      alt: "Origins passport builder",
      width: 2870,
      height: 1614,
      portrait: false,
    },
    {
      number: "02",
      title: "QR Code",
      body: "Every passport generates a unique QR code ready to print on labels, packaging, swing tags or product pages.",
      image: null,
      alt: "",
      width: 0,
      height: 0,
      portrait: false,
    },
    {
      number: "03",
      title: "Customer Experience",
      body: "Customers scan and access the full product story — materials, origins, certifications, impact and circularity options.",
      image: "/screenshot-certifications-mobile.png",
      alt: "Customer passport experience",
      width: 862,
      height: 1478,
      portrait: true,
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            What is a Digital Product Passport?
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
            A digital identity for every product you make.
          </h2>
          <p className="mt-5 text-lg text-[#525252] leading-relaxed">
            A Digital Product Passport is a digital record attached to a physical product via a QR code. When customers scan it, they access the full product story — materials, origins, certifications, impact and care instructions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={staggerItem} className="flex flex-col gap-5">
              <div className="h-[220px] rounded-2xl bg-white border border-[#E8E8E6] overflow-hidden flex items-center justify-center relative">
                {step.image ? (
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={step.width}
                    height={step.height}
                    className={`mix-blend-multiply ${step.portrait ? "h-full w-auto" : "w-full h-auto"}`}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 px-6">
                    <span className="text-xs font-medium text-[#525252] text-center">Scan to see this product&apos;s story</span>
                    <Image
                      src="/qr-example.png"
                      alt="Scan to see product passport"
                      width={400}
                      height={400}
                      className="w-28 h-28"
                    />
                  </div>
                )}
                {/* Step connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-5 h-5 items-center justify-center">
                    <ArrowRight size={16} className="text-[#C4C4C0]" />
                  </div>
                )}
              </div>
              <div>
                <div className="text-xs font-semibold text-[#0E6EEA] uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Digital Touchpoints ──────────────────────────────────────────────────────

function DigitalTouchpoints() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Tell your product story",
      body: "Let customers discover the materials, people and journey behind what they bought. Every product has a story worth telling.",
    },
    {
      icon: ShieldCheck,
      title: "Build trust through transparency",
      body: "Show verified certifications, composition data and manufacturing origins — not just claims. Evidence-backed and customer-facing.",
    },
    {
      icon: RefreshCw,
      title: "Enable a second life",
      body: "Give every product a pathway to repair, resale, take-back or recycling. Circularity starts with a scan.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            Beyond compliance
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
            Every product becomes a<br />digital touchpoint.
          </h2>
          <p className="mt-5 text-lg text-[#525252] leading-relaxed max-w-2xl">
            Most brands see Digital Product Passports as a compliance obligation. Forward-thinking brands see them as a new customer channel — a permanent, scannable connection between product and person.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-px bg-[#E8E8E6]"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              className="bg-white p-8 lg:p-10 flex flex-col gap-5"
            >
              <div className="w-10 h-10 rounded-xl border border-[#E8E8E6] flex items-center justify-center">
                <pillar.icon size={18} className="text-[#0A0A0A]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3 tracking-[-0.02em]">
                  {pillar.title}
                </h3>
                <p className="text-[#525252] leading-relaxed">{pillar.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="mt-8 flex items-center gap-6">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
          >
            Start free trial
          </a>
          <a
            href="https://app.origins-id.com/c/ORI-89413809"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors"
          >
            See example passport
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Passport Steps ───────────────────────────────────────────────────────────

function PassportSteps() {
  const steps = [
    {
      number: "01",
      title: "Add product information",
      body: "Name, description, imagery, country of origin, category and product identifiers.",
      image: "/screenshot-passport-builder.png",
      alt: "Product information builder",
      width: 2870,
      height: 1614,
    },
    {
      number: "02",
      title: "Add materials, impact & certifications",
      body: "Composition, carbon footprint, water usage, self-declared claims and verified certifications.",
      image: "/screenshot-impact-builder.png",
      alt: "Sustainability and impact builder",
      width: 2308,
      height: 1508,
    },
    {
      number: "03",
      title: "Connect supply chain data",
      body: "Add suppliers and manufacturing facilities, or send a request and let suppliers complete their own data.",
      image: "/screenshot-supply-chain-builder.png",
      alt: "Supply chain builder",
      width: 2284,
      height: 1508,
    },
    {
      number: "04",
      title: "Publish and generate your QR code",
      body: "Your passport goes live instantly. Download a QR code for labels, packaging, swing tags and product pages.",
      image: "/screenshot-passport-builder.png",
      alt: "Publish passport and QR code",
      width: 2870,
      height: 1614,
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
            Create a passport in minutes.
          </h2>
          <p className="mt-5 text-[#525252] leading-relaxed">
            Origins is designed to be simple. Most brands publish their first passport within an hour of signing up.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="bg-white border border-[#E8E8E6] rounded-2xl overflow-hidden"
            >
              <div className="h-[240px] bg-[#F9F9F8] overflow-hidden flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  className="w-full h-auto mix-blend-multiply"
                />
              </div>
              <div className="p-7">
                <div className="text-xs font-semibold text-[#0E6EEA] uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="mt-10 text-center">
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
          >
            Start building for free
          </a>
          <p className="text-sm text-[#8C8C8C] mt-3">No credit card required · Set up in under 10 minutes</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Now ──────────────────────────────────────────────────────────────────

function WhyNow() {
  const milestones = [
    {
      year: "2026",
      label: "Preparation",
      body: "Brands get organised. Early adopters structure product data and begin issuing passports voluntarily.",
    },
    {
      year: "2027",
      label: "Initial rollout",
      body: "First EU Digital Product Passport requirements take effect for selected textile product categories.",
    },
    {
      year: "2028–30",
      label: "Expanded adoption",
      body: "Requirements expand across broader fashion and textile categories. Passports become standard practice.",
    },
  ];

  const benefits = [
    "Future compliance built in",
    "Better organised product data",
    "Improved supplier collaboration",
    "Greater product transparency",
    "Foundation for resale and circularity",
    "No consultants or spreadsheets required",
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
            Why brands are acting now
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
            Digital Product Passports are coming. Origins makes them simple.
          </h2>
          <p className="mt-5 text-[#525252] leading-relaxed">
            The EU&apos;s Ecodesign for Sustainable Products Regulation requires fashion brands to issue Digital Product Passports. Origins gives you the infrastructure to prepare early — without consultants, spreadsheets or complex implementation projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-0 mb-16 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-5 left-[16.67%] right-[16.67%] h-px bg-[#E8E8E6] z-0" />

          {milestones.map((m, i) => (
            <motion.div key={m.year} variants={staggerItem} className="flex flex-col gap-4 p-6 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0 z-10">
                  <span className="text-white text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#0A0A0A] tracking-[-0.02em]">{m.year}</div>
                  <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">{m.label}</div>
                </div>
              </div>
              <p className="text-sm text-[#525252] leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div {...fadeUp(0.1)} className="border border-[#E8E8E6] rounded-2xl p-8 lg:p-10">
          <div className="text-sm font-semibold text-[#0A0A0A] mb-6">
            Brands that start now get:
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <Check size={14} className="text-[#2ECC71] shrink-0" />
                <span className="text-sm text-[#525252]">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
            >
              Start free trial
            </a>
            <a
              href="/compliance"
              className="inline-flex items-center gap-1.5 h-11 px-2 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors"
            >
              Learn about ESPR
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
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
          <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
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
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-2.5"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat}
                variants={staggerItem}
                className="flex items-center gap-2.5 py-3 px-4 bg-white border border-[#E8E8E6] rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] shrink-0" />
                <span className="text-sm font-medium text-[#0A0A0A]">{cat}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Supplier data collection ─────────────────────────────────────────────────

function SupplierCollection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Supplier data
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Collect supplier data without spreadsheets.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Send suppliers a secure link and request only the data you need. They complete a simple form — no account required. Responses populate your passport automatically.
            </p>
            <ul className="space-y-3">
              {[
                "Send a secure link to any supplier",
                "Request only the fields you need",
                "Track responses in real time",
                "Data populates passports automatically",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#2ECC71] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:opacity-60 transition-opacity w-fit"
            >
              Start free trial
              <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="flex justify-center lg:justify-end">
            <Image
              src="/screenshot-supplier-request.png"
              alt="Supply Chain Requests in Origins"
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

// ─── Bulk upload ──────────────────────────────────────────────────────────────

function BulkUpload() {
  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp(0)} className="lg:order-2 flex flex-col gap-6">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Bulk upload
            </div>
            <h2 className="text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Create hundreds of passports at once.
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Download a template — Quick Start, Standard or Advanced — upload your product data, map columns automatically and publish at scale. No spreadsheet expertise required.
            </p>
            <ul className="space-y-3">
              {[
                "Download a CSV template — 3 levels to choose from",
                "Upload your product data, any column format",
                "Origins maps columns automatically",
                "Review drafts and publish at scale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="lg:order-1 flex justify-center">
            <Image
              src="/screenshot-bulk-import.png"
              alt="Bulk import in Origins"
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

// ─── Example passport ─────────────────────────────────────────────────────────

function ExamplePassport() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
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
                  <Check size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://app.origins-id.com/c/ORI-89413809"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:opacity-60 transition-opacity w-fit"
            >
              View example passport (best viewed on mobile)
              <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="flex justify-start pl-6">
            <Image
              src="/Sustainability screenshot.png"
              alt="Example passport on mobile"
              width={726}
              height={1374}
              className="w-full max-w-[300px] h-auto [filter:brightness(1.18)]"
            />
          </motion.div>
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
      body: "Guided fields for product identity, materials, suppliers, certifications, impact data and product story. Live preview as you build.",
    },
    {
      icon: Send,
      title: "Supplier Requests",
      body: "Send suppliers a secure link and request only the data you need. No account or spreadsheet required.",
    },
    {
      icon: Upload,
      title: "Bulk Upload",
      body: "Import entire product collections by CSV and automatically create draft passports ready to review and publish.",
    },
    {
      icon: QrCode,
      title: "QR Code Management",
      body: "Generate and download QR codes for every passport. Use them on labels, packaging, care tags and ecommerce pages.",
    },
    {
      icon: ShieldCheck,
      title: "Verification & Evidence",
      body: "Upload supporting evidence for certifications and claims. Show customers what is verified and what is self-declared.",
    },
    {
      icon: BarChart2,
      title: "Analytics",
      body: "Track passport views, QR code scans and customer engagement across your full product range.",
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-14">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
            Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-2xl">
            Everything you need to build, manage and share Digital Product Passports.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E8E6]"
        >
          {features.map((feat) => (
            <motion.div key={feat.title} variants={staggerItem} className="bg-[#F9F9F8] p-8 flex flex-col gap-4">
              <div className="w-9 h-9 rounded-xl border border-[#E8E8E6] bg-white flex items-center justify-center">
                <feat.icon size={16} className="text-[#0A0A0A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A0A0A] mb-1.5">{feat.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{feat.body}</p>
              </div>
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
      price: "£375",
      period: "/mo",
      description: "For emerging and growing brands launching their first passports.",
      features: [
        "250 passports per year",
        "Unlimited QR labels & scans",
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
      price: "£795",
      period: "/mo",
      description: "For established brands managing larger product ranges.",
      features: [
        "750 passports per year",
        "Unlimited QR labels & scans",
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
      description: "For brands, manufacturers and enterprise teams requiring higher volumes and integrations.",
      features: [
        "Custom passport allowance",
        "Unlimited QR labels & scans",
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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
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
            View full pricing
            <ArrowRight size={14} />
          </a>
        </motion.div>

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
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white/70" : "text-[#2ECC71]"}`}
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
                    : "bg-[#0E6EEA] text-white hover:bg-[#0C5CD0]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#8C8C8C] mt-8">
          All plans include a 14-day free trial. Annual billing available. Passport publications are counted per year.
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
      a: "A Digital Product Passport (DPP) is a digital record linked to a physical product via a QR code. It gives customers, retailers and regulators access to verified product information — materials, origins, certifications, environmental data and circularity guidance.",
    },
    {
      q: "Is a Digital Product Passport the same as a QR code?",
      a: "No — the QR code is just the access point. The Digital Product Passport is the data behind it: a structured, customer-facing record of everything about that product. Origins builds the passport and generates the QR code automatically.",
    },
    {
      q: "What is ESPR and does it affect my brand?",
      a: "ESPR stands for the EU Ecodesign for Sustainable Products Regulation. It requires fashion and textile brands selling into the EU to issue Digital Product Passports. If you sell into European markets, this will apply to your brand.",
    },
    {
      q: "Is DPP legislation mandatory?",
      a: "For brands selling into the EU, yes. The regulation is being phased in from 2027 onwards, starting with certain textile categories. Origins helps brands prepare early so the transition is straightforward.",
    },
    {
      q: "How long does it take to set up Origins?",
      a: "Most brands publish their first passport within an hour of signing up. Origins is designed to be simple — guided fields, AI-assisted content generation and CSV import mean you can move quickly.",
    },
    {
      q: "Can my suppliers contribute data directly?",
      a: "Yes. Origins has a built-in supplier request feature. You send a secure link, your supplier completes a simple web form with the data you need — no account required — and the information flows directly into your passport.",
    },
    {
      q: "Can I bulk upload my product catalogue?",
      a: "Yes. Origins supports CSV import. Download a template, populate it with your product data and upload. Origins maps the columns automatically and creates draft passports for each product, ready for you to review and publish.",
    },
    {
      q: "Do customers need to download an app to view a passport?",
      a: "No. Passport pages are public web pages. Customers scan the QR code with any smartphone camera and the passport opens instantly in their browser — no app, no login required.",
    },
    {
      q: "Can I customise the passport with my own branding?",
      a: "Yes. Growth and Enterprise plans include custom branding. Your logo, brand name and colour palette can be applied to the public passport experience.",
    },
    {
      q: "How are QR codes managed — can I reprint them?",
      a: "Yes. QR codes are permanent and linked to the passport, not the label. You can download and reprint them at any time in PNG or SVG format. The passport URL never changes, so existing printed labels always work.",
    },
  ];

  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <motion.div {...fadeUp(0)}>
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">FAQ</div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Common questions.
            </h2>
            <p className="mt-4 text-[#525252] leading-relaxed text-sm">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="mailto:hello@originsid.com" className="underline underline-offset-2 hover:text-[#0A0A0A] transition-colors">
                Get in touch.
              </a>
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="divide-y divide-[#E8E8E6]">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="text-sm font-semibold text-[#0A0A0A]">{faq.q}</span>
                  <span className="shrink-0 mt-0.5 text-[#8C8C8C]">
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-sm text-[#525252] leading-relaxed pr-6">{faq.a}</p>
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
    <section className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-6">
            Ready to create your first Digital Product Passport?
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10">
            Connect product data, collect supplier information and generate QR codes in minutes.
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
      <WhatIsADPP />
      <DigitalTouchpoints />
      <PassportSteps />
      <WhyNow />
      <BuiltForFashion />
      <SupplierCollection />
      <BulkUpload />
      <ExamplePassport />
      <FeatureGrid />
      <PricingPreview />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}
