"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { homePlans } from "@/lib/plans";
import { PRICES } from "@/lib/currency";
import { useCurrency } from "@/components/currency/CurrencyProvider";
import { CurrencySelector } from "@/components/currency/CurrencySelector";
import { AppLink } from "@/components/currency/AppLink";
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
} from "lucide-react";

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <motion.div {...fadeUp(0)} className="pb-16 lg:pb-24 flex flex-col gap-8 max-w-xl">
            <p className="eyebrow">Digital identities for physical products</p>

            <h1 className="font-serif text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] text-[#111111] leading-[1.0] tracking-[-0.02em]">
              Make every<br />
              product{" "}
              <span className="italic">known.</span>
            </h1>

            <p className="text-[#72726D] text-[18px] leading-[1.65] max-w-[30em]">
              Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.
            </p>

            <div className="flex flex-col gap-3 items-start">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a href="/book-demo" className="btn-primary h-11 px-6 text-sm">
                  Book a demo
                </a>
                <a
                  href="/platform"
                  className="inline-flex items-center gap-[5px] h-11 px-3 text-sm font-[500] text-[#111111] transition-opacity hover:opacity-60"
                >
                  See how it works <ArrowRight size={13} />
                </a>
              </div>
              <a
                href="https://passport.knownobjects.io/c/ORI-89413809"
                className="link-cobalt text-xs"
              >
                See example passport (best viewed on mobile) <ArrowRight size={11} />
              </a>
            </div>

            <p className="text-[12px] text-[#72726D]">
              No credit card required · Live in minutes
            </p>
          </motion.div>

          {/* Right: product image, pushed down to align with the headline */}
          <motion.div {...fadeUp(0.15)} className="relative flex justify-center lg:justify-end lg:mt-12">
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

// ─── Benefits band (marquee) ───────────────────────────────────────────────────

function BenefitsBand() {
  const phrases = [
    "Live in minutes",
    "No consultants required",
    "ESPR-ready data structure",
    "Evidence-backed claims",
    "Accessible and easy pricing",
    "QR codes that never change",
    "No app for customers to download",
  ];
  const ticker = [...phrases, ...phrases];

  return (
    <div className="border-y border-[#E6E6E2] bg-white overflow-hidden py-[18px]">
      <div className="animate-marquee flex items-center w-max">
        {ticker.map((phrase, i) => (
          <Fragment key={i}>
            <span className="shrink-0 px-7 text-[13px] font-[500] text-[#72726D] whitespace-nowrap">
              {phrase}
            </span>
            <span className="shrink-0 w-[3px] h-[3px] rounded-full bg-[#C4C4C0]" />
          </Fragment>
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
    <section className="bg-[#F6F4F2] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">The Known Objects system</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            A complete identity for every{" "}
            <span className="italic">object.</span>
          </h2>
          <p className="mt-5 text-[#72726D] text-base leading-[1.7]">
            Capture what matters, connect the supporting evidence, and carry the product&apos;s identity across its lifecycle.
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
                <p className="text-[13px] text-[#72726D] leading-[1.65]">{p.body}</p>
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

// ─── Customer connection ───────────────────────────────────────────────────────

function CustomerConnection() {
  const highlights = [
    "Product story & brand narrative",
    "Materials and composition",
    "Maker and supplier information",
    "Care instructions",
    "Repair and resale pathways",
    "Ownership and end-of-life guidance",
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col gap-7">
            <p className="eyebrow">Customer connection</p>
            <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
              More than a passport.<br />
              A connection that lasts.
            </h2>
            <p className="text-[#72726D] text-base leading-[1.7]">
              Give customers the story, care guidance and services around each product, from first purchase through repair and resale.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
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

          <motion.div {...fadeUp(0.15)} className="flex justify-center">
            <Image
              src="/screenshot-certifications-mobile.png"
              alt="Known Objects. digital passport on mobile"
              width={862}
              height={1478}
              className="w-full max-w-[280px] h-auto [filter:brightness(1.08)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── How it works (interactive passport builder) ───────────────────────────────

function PassportSteps() {
  const [active, setActive] = useState(0);

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
      body: "Add suppliers and facilities, or send requests for suppliers to complete directly.",
      image: "/screenshot-supply-chain-builder.png",
      alt: "Supply chain builder",
      width: 2284,
      height: 1508,
    },
    {
      number: "04",
      title: "Publish and generate your QR code",
      body: "Your identity goes live instantly. Download a QR code for labels, packaging and product pages.",
      image: "/screenshot-passports-list.png",
      alt: "Publish and QR code generation",
      width: 2854,
      height: 1606,
    },
  ];

  const current = steps[active];

  return (
    <section className="bg-[#F6F4F2] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            The world&apos;s most customisable<br />
            <span className="italic">passport builder.</span>
          </h2>
          <p className="mt-5 text-[#72726D] text-base leading-[1.7]">
            Most brands have their first identity live within an hour of signing up.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="grid lg:grid-cols-[380px_1fr] gap-14 items-start">
          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const on = i === active;
              return (
                <button
                  key={step.number}
                  onClick={() => setActive(i)}
                  className="text-left border-l-2 pl-6 py-5 flex flex-col gap-2 transition-colors"
                  style={{ borderColor: on ? "#164ED8" : "#E6E6E2" }}
                >
                  <span
                    className="text-[11px] font-[500] tracking-[0.1em]"
                    style={{ color: on ? "#164ED8" : "#C4C4C0" }}
                  >
                    {step.number}
                  </span>
                  <span
                    className="text-base font-[600]"
                    style={{ color: on ? "#111111" : "#72726D" }}
                  >
                    {step.title}
                  </span>
                  <span
                    className="text-[13px] leading-[1.65] text-[#72726D]"
                    style={{ opacity: on ? 1 : 0.55 }}
                  >
                    {step.body}
                  </span>
                </button>
              );
            })}

            <div className="mt-10 flex items-center gap-5">
              <AppLink path="/signup" className="btn-primary h-11 px-6 text-sm">
                Start building free
              </AppLink>
              <p className="text-[12px] text-[#72726D]">No credit card required</p>
            </div>
          </div>

          {/* Screenshot */}
          <div className="flex items-center justify-center min-h-[520px]">
            <Image
              key={current.image}
              src={current.image}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="w-full h-auto mix-blend-multiply"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Supply chain & scale ──────────────────────────────────────────────────────

function SupplyChainScale() {
  const cells = [
    {
      image: "/screenshot-supplier-request.png",
      alt: "Supply chain requests",
      width: 2334,
      height: 1164,
      title: "Collect supplier data without spreadsheets.",
      body: "Send suppliers a secure link and request only the data you need. They complete a simple form with no account required, and responses populate your identity automatically.",
      bullets: [
        "Send a secure link to any supplier",
        "Request only the fields you need",
        "Track responses in real time",
      ],
      link: true,
    },
    {
      image: "/screenshot-bulk-import.png",
      alt: "Bulk import",
      width: 1700,
      height: 1454,
      title: "Create hundreds of identities at once.",
      body: "Download a template, upload your product data, and let columns map automatically before you publish at scale.",
      bullets: [
        "Download a CSV template in seconds",
        "Upload any column format",
        "Review drafts and publish at scale",
      ],
      link: false,
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">Supply chain &amp; scale</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Get the data in{" "}
            <span className="italic">without the spreadsheets.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-px bg-[#E6E6E2] border border-[#E6E6E2]"
        >
          {cells.map((cell) => (
            <motion.div
              key={cell.title}
              variants={staggerItem}
              className="bg-white p-10 flex flex-col gap-6"
            >
              <div className="bg-[#F6F4F2] p-7 flex items-center justify-center min-h-[220px]">
                <Image
                  src={cell.image}
                  alt={cell.alt}
                  width={cell.width}
                  height={cell.height}
                  className="w-full h-auto mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-[28px] leading-[1.2] text-[#111111]">
                  {cell.title}
                </h3>
                <p className="text-[#72726D] text-sm leading-[1.7]">{cell.body}</p>
                <ul className="flex flex-col gap-2.5">
                  {cell.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[13px] text-[#72726D]">
                      <Check size={13} className="text-[#164ED8] shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
                {cell.link && (
                  <AppLink path="/signup" className="link-cobalt text-sm">
                    Start for free <ArrowRight size={13} />
                  </AppLink>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Regulatory readiness (timeline) ───────────────────────────────────────────

function ComplianceTimeline() {
  const milestones = [
    { year: "2026", color: "#111111", label: "Preparation", body: "Early adopters structure product data and issue voluntary passports." },
    { year: "2027", color: "#164ED8", label: "Initial rollout", body: "First requirements take effect for selected textile categories." },
    { year: "2028–30", color: "#C4C4C0", label: "Expanded scope", body: "Requirements extend across broader product categories." },
  ];

  return (
    <section className="bg-[#F6F4F2] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl mb-20">
          <p className="eyebrow mb-4">Regulatory readiness</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
            Prepare for Digital Product Passports<br />
            <span className="italic">without rebuilding your systems.</span>
          </h2>
          <p className="mt-5 text-[#72726D] text-base leading-[1.7]">
            Bring your product information together, identify the gaps, and publish customer-ready identities on a platform built to adapt as requirements evolve.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 border-t border-[#111111]"
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
              <p className="text-[13px] text-[#72726D] leading-[1.7] max-w-[24em]">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="mt-14">
          <a href="/compliance" className="link-cobalt text-sm">
            Learn about ESPR readiness <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pricing preview ──────────────────────────────────────────────────────────

function PricingPreview() {
  const { currency } = useCurrency();
  const prices = PRICES[currency];

  return (
    <section className="bg-white py-32 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
              Simple pricing for brands<br />at every stage.
            </h2>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <CurrencySelector />
            <a href="/pricing" className="link-cobalt text-sm">
              View full pricing <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {homePlans.map((plan) => {
            const price = plan.id === "enterprise" ? "Custom" : prices[plan.id].monthly;
            const period = plan.id === "enterprise" ? "" : "/mo";

            return (
              <div
                key={plan.name}
                className={`p-7 flex flex-col gap-6 border rounded-[4px] ${
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
                      {price}
                    </span>
                    {period && (
                      <span className={`text-sm ${plan.highlight ? "text-white/40" : "text-[#72726D]"}`}>
                        {period}
                      </span>
                    )}
                  </div>
                  <p className={`text-[13px] leading-[1.65] ${plan.highlight ? "text-white/50" : "text-[#72726D]"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        size={12}
                        className={`mt-[3px] shrink-0 ${plan.highlight ? "text-white/50" : "text-[#164ED8]"}`}
                        strokeWidth={2}
                      />
                      <span className={`text-[13px] ${plan.highlight ? "text-white/60" : "text-[#72726D]"}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.ctaType === "app" ? (
                  <AppLink
                    path={plan.ctaPath}
                    className={`inline-flex items-center justify-center h-10 px-5 text-[13px] font-[500] transition-colors border rounded-[4px] ${
                      plan.highlight
                        ? "bg-white text-[#111111] border-white hover:bg-white/90"
                        : "bg-[#111111] text-white border-[#111111] hover:bg-[#2a2a2a]"
                    }`}
                  >
                    {plan.cta}
                  </AppLink>
                ) : (
                  <a
                    href={plan.ctaPath}
                    className={`inline-flex items-center justify-center h-10 px-5 text-[13px] font-[500] transition-colors border rounded-[4px] ${
                      plan.highlight
                        ? "bg-white text-[#111111] border-white hover:bg-white/90"
                        : "bg-[#111111] text-white border-[#111111] hover:bg-[#2a2a2a]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-[12px] text-[#72726D] mt-6">
          All plans include a 14-day free trial. Annual billing available. Additional capacity from +100 passports for {prices.addOns.plus100}/month.
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
      a: "No. Known Objects is built for any brand that makes physical products: fashion, luxury, beauty, furniture, electronics, homeware, sporting goods and more.",
    },
    {
      q: "What is ESPR and does it affect my brand?",
      a: "ESPR stands for the EU Ecodesign for Sustainable Products Regulation. It requires brands selling into the EU to issue Digital Product Passports. If you sell into European markets, this regulation will apply to your brand from 2027 onwards.",
    },
    {
      q: "How long does it take to set up?",
      a: "Most brands have their first identity live within an hour of signing up. Guided fields, AI-assisted content and CSV import mean you can move quickly without consultants or complex projects.",
    },
    {
      q: "Can my suppliers contribute data directly?",
      a: "Yes. You send a secure link, your supplier completes a simple web form with no account required, and the information flows directly into your product identity.",
    },
    {
      q: "Can I bulk upload my product catalogue?",
      a: "Yes. Download a template, populate it with your product data and upload. Known Objects maps columns automatically and creates draft identities for each product, ready to review and publish.",
    },
    {
      q: "Do customers need an app to view a passport?",
      a: "No. Passport pages are public web pages. Customers scan the QR code with any smartphone camera and the page opens instantly in their browser.",
    },
    {
      q: "How are QR codes managed?",
      a: "QR codes are permanent and linked to the identity, not the label. Download and reprint them at any time in PNG or SVG format. The URL never changes, so existing printed labels always work.",
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-32 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20">
          <motion.div {...fadeUp(0)}>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-[1.12] tracking-[-0.02em]">
              Common questions.
            </h2>
            <p className="mt-4 text-[13px] text-[#72726D] leading-[1.7]">
              Still have questions?{" "}
              <a href="mailto:hello@knownobjects.io" className="text-[#164ED8] hover:underline">
                Get in touch.
              </a>
            </p>
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
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl">
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em] mb-6">
            Make every product{" "}
            <span className="italic">known.</span>
          </h2>
          <p className="text-lg text-white/50 leading-[1.65] mb-10">
            Connect product data, collect supplier information and generate QR codes in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a href="/book-demo" className="btn-primary bg-white text-[#111111] hover:bg-white/90 h-11 px-6 text-sm">
              Book a demo
            </a>
            <AppLink
              path="/signup"
              className="inline-flex items-center gap-[5px] text-sm font-[500] text-white/50 transition-colors hover:text-white"
            >
              Start for free <ArrowRight size={13} />
            </AppLink>
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
      <BenefitsBand />
      <SystemPillars />
      <CustomerConnection />
      <PassportSteps />
      <SupplyChainScale />
      <ComplianceTimeline />
      <PricingPreview />
      <HomepageFAQ />
      <FinalCTA />
    </>
  );
}
