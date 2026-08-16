"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { APP_URL } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";

const specRows = [
  { label: "Applies to", value: "All brands selling products in the EU market" },
  { label: "Product scope", value: "Textiles and apparel among the first categories" },
  { label: "First requirements", value: "2027 onwards, with phased expansion" },
  { label: "Required element", value: "A Digital Product Passport linked via QR code" },
  { label: "Data required", value: "Materials, origins, certifications, environmental impact" },
  { label: "Customer access", value: "Passport must be publicly accessible" },
];

const milestones = [
  { year: "2026", color: "#111111", label: "Preparation", body: "Brands structure product data. Early movers publish voluntary passports and build supplier pipelines." },
  { year: "2027", color: "#164ED8", label: "Initial requirements", body: "First requirements take effect for selected textile and apparel categories." },
  { year: "2028", color: "#C4C4C0", label: "Expanded scope", body: "Requirements expand across broader categories. Passports become standard for EU market access." },
  { year: "2030", color: "#C4C4C0", label: "Full adoption", body: "Passports required across all regulated categories. Compliance becomes the baseline." },
];

const requirements = [
  "A structured record of identity, materials and composition",
  "Country of origin and manufacturing facilities",
  "Verified certifications and supporting evidence",
  "Environmental impact data for carbon, water and energy",
  "Care and end-of-life guidance",
  "A QR code linked to the passport record",
  "A publicly accessible passport page",
  "An audit trail of data contributions and changes",
];

const helps = [
  { title: "ESPR-aligned data structure", body: "Passport fields follow the data categories expected by EU requirements, and the model is updated as guidance develops." },
  { title: "Built-in certifications", body: "GOTS, OEKO-TEX, GRS, Bluesign, B Corp and custom certifications can be added and evidenced in the platform." },
  { title: "Supplier data collection", body: "Send suppliers a secure link to request missing data. Responses populate passports automatically." },
  { title: "Audit trail included", body: "Every published passport carries a timestamped record of contributions and changes for compliance documentation." },
  { title: "QR codes on every passport", body: "Every product gets a permanent QR code and public URL for labels, packaging, swing tags or product pages." },
  { title: "Bulk passport creation", body: "Import entire collections by CSV. Drafts are created automatically, ready to review and publish at scale." },
];

const faqs = [
  { q: "What is ESPR?", a: "ESPR stands for the EU Ecodesign for Sustainable Products Regulation. It sets requirements for the environmental performance of products sold in the EU, including a mandatory Digital Product Passport for many product categories." },
  { q: "Which brands does ESPR apply to?", a: "It applies to brands and retailers selling products in the EU market. It is not limited to EU-based companies, so any brand selling into the EU will need to comply." },
  { q: "When do brands need to be compliant?", a: "The first requirements for textiles and apparel are expected from 2027, with broader adoption through 2028 to 2030. The specific timeline is still being refined as the EU publishes delegated acts." },
  { q: "Does Known Objects guarantee compliance?", a: "Known Objects provides the data infrastructure required for Digital Product Passports and updates its data model as official guidance develops. For your specific obligations, consult a legal or compliance advisor." },
  { q: "How quickly can we get started?", a: "Most brands publish their first passport within an hour of signing up. Guided fields, AI-assisted content and bulk import mean you can move quickly without consultants." },
];

function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[760px] flex flex-col gap-7">
          <p className="eyebrow">Regulatory readiness</p>
          <h1 className="font-serif text-[3.25rem] lg:text-[4rem] text-[#111111] leading-[1.05] tracking-[-0.02em]">
            The simplest path to ESPR <span className="italic">readiness.</span>
          </h1>
          <p className="text-[#72726D] text-[18px] leading-[1.65] max-w-[32em]">
            Digital Product Passports are becoming a legal requirement for brands selling into the EU. Known Objects gives you the infrastructure to prepare early, without consultants or spreadsheets.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a href={`${APP_URL}/signup`} className="btn-primary h-11 px-6 text-sm">
              Start free trial
            </a>
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

function WhatIsEspr() {
  return (
    <section className="bg-[#F6F4F2] py-28 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-5">
          <p className="eyebrow">What is ESPR?</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            A new era of product transparency.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.75]">
            The Ecodesign for Sustainable Products Regulation sets requirements for the environmental performance, durability and recyclability of products sold in the EU.
          </p>
          <p className="text-[#72726D] text-base leading-[1.75]">
            Central to it is the Digital Product Passport, a structured record linked to every product by QR code, giving consumers, retailers and regulators access to verified information across the product&apos;s life.
          </p>
          <p className="text-[#72726D] text-base leading-[1.75]">
            Textiles are among the first categories in scope, so brands that start now will be ready when requirements take effect.
          </p>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="flex flex-col">
          {specRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start justify-between gap-8 py-[18px] ${
                i < specRows.length - 1 ? "border-b border-[#E6E6E2]" : ""
              }`}
            >
              <span className="text-[13px] text-[#72726D] shrink-0">{row.label}</span>
              <span className="text-sm font-[500] text-[#111111] text-right">{row.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[640px] mb-16">
          <p className="eyebrow mb-4">Regulatory timeline</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            What to expect and when.
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-[#111111]"
        >
          {milestones.map((m) => (
            <motion.div key={m.year} variants={staggerItem} className="relative pt-8">
              <div
                className="absolute -top-1 left-0 w-[7px] h-[7px] rounded-full"
                style={{ background: m.color }}
              />
              <div
                className="font-serif text-[40px] leading-none mb-3.5"
                style={{ color: m.color }}
              >
                {m.year}
              </div>
              <h3 className="font-[600] text-sm text-[#111111] mb-2">{m.label}</h3>
              <p className="text-[13px] text-[#72726D] leading-[1.7]">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-10 text-[12px] text-[#72726D] leading-[1.7] max-w-[60em]">
          Timelines follow current EU proposals and may change as delegated acts are published. Known Objects tracks these developments and updates its data model accordingly.
        </p>
      </div>
    </section>
  );
}

function WhatBrandsNeed() {
  return (
    <section className="bg-[#F6F4F2] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
        <motion.div {...fadeUp(0)} className="flex flex-col gap-5">
          <p className="eyebrow">What brands need to do</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            The data requirements, in plain language.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.75]">
            The full technical specifications are still being developed, but the core data requirements are already clear.
          </p>
        </motion.div>
        <motion.ul {...fadeUp(0.15)} className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
          {requirements.map((r) => (
            <li key={r} className="flex items-start gap-3 text-sm text-[#72726D] leading-[1.6]">
              <Check size={13} className="text-[#164ED8] shrink-0 mt-1" strokeWidth={2} />
              {r}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function HowItHelps() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-[640px] mb-14">
          <p className="eyebrow mb-4">How Known Objects helps</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Built for readiness from day one.
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E6E6E2]"
        >
          {helps.map((h) => (
            <motion.div
              key={h.title}
              variants={staggerItem}
              className="bg-white px-7 py-8 flex flex-col gap-3"
            >
              <h3 className="text-[15px] font-[600] text-[#111111]">{h.title}</h3>
              <p className="text-[13px] text-[#72726D] leading-[1.7]">{h.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F6F4F2] py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20">
        <motion.div {...fadeUp(0)}>
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            ESPR questions.
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="divide-y divide-[#E6E6E2] border-t border-[#E6E6E2]">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="text-sm font-[500] text-[#111111]">{faq.q}</span>
                <span className="shrink-0 mt-0.5 text-[#72726D]">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-[13px] text-[#72726D] leading-[1.75] pr-10 max-w-[62ch]">{faq.a}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em] mb-6">
            Start preparing <span className="italic">today.</span>
          </h2>
          <p className="text-lg text-white/50 leading-[1.65] mb-10">
            Most brands publish their first passport within an hour of signing up.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a href={`${APP_URL}/signup`} className="btn-primary bg-white text-[#111111] hover:bg-white/90 h-11 px-6 text-sm">
              Start free trial
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center gap-[5px] text-sm font-[500] text-white/50 transition-colors hover:text-white"
            >
              Book a demo <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ComplianceContent() {
  return (
    <>
      <Hero />
      <WhatIsEspr />
      <Timeline />
      <WhatBrandsNeed />
      <HowItHelps />
      <FAQ />
      <CTA />
    </>
  );
}
