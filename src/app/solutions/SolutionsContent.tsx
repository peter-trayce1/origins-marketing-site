"use client";

import { motion } from "framer-motion";
import { APP_URL } from "@/lib/utils";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { ArrowRight, Check } from "lucide-react";

const segments = [
  {
    eyebrow: "Independent and sustainable brands",
    title: "Prove your sustainability claims with verifiable data.",
    body: "Structure your materials data, certifications, supply chain steps and impact metrics in a format that customers, stockists and regulators can check for themselves.",
    features: [
      "GOTS, OEKO-TEX, GRS and custom certification fields",
      "Supply chain by country, facility and process",
      "Impact metrics for carbon, water and waste",
      "Customer-facing sustainability summaries",
    ],
  },
  {
    eyebrow: "Premium and luxury brands",
    title: "Protect provenance. Communicate craftsmanship.",
    body: "Give every piece a branded passport covering provenance, materials, artisan stories and certifications, reachable by scanning the label.",
    features: [
      "Artisan and maker story fields",
      "Provenance and origin documentation",
      "Certification and authenticity fields",
      "Anti-counterfeit QR identity",
    ],
  },
  {
    eyebrow: "Scaling brands",
    title: "Manage passports across your entire catalogue.",
    body: "Whether the range is fifty products or five thousand, bulk import, Shopify sync and AI-assisted drafting keep a full passport library maintainable without a dedicated compliance team.",
    features: [
      "Bulk CSV import for large ranges",
      "Shopify sync that drafts on new products",
      "Templates by product category",
      "Team workspace with role permissions",
    ],
  },
  {
    eyebrow: "Ecommerce and DTC",
    title: "Embed passports into your product pages.",
    body: "Add passport badges, inline material summaries and full passport modals to any Shopify, Hydrogen or custom storefront, so the detail is there at the point of purchase.",
    features: [
      "Shopify and Hydrogen widgets",
      "Webflow and custom embed support",
      "Product page badge components",
      "Scan analytics per product",
    ],
  },
  {
    eyebrow: "Enterprise retailers",
    title: "Passport infrastructure for large teams.",
    body: "For retailers managing hundreds of brands or thousands of products, Known Objects provides the data model, team controls and API access to run passports at scale.",
    features: [
      "Multi-brand workspace management",
      "SSO and role-based access control",
      "REST API for PLM and ERP integration",
      "Dedicated onboarding and support",
    ],
  },
];

function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl flex flex-col gap-7">
          <p className="eyebrow">Solutions</p>
          <h1 className="font-serif text-[3.25rem] lg:text-[4rem] text-[#111111] leading-[1.05] tracking-[-0.02em]">
            Built for every kind of <span className="italic">brand.</span>
          </h1>
          <p className="text-[#72726D] text-[18px] leading-[1.65] max-w-[32em]">
            From independent labels to luxury houses and enterprise retailers, Known Objects scales to the size and complexity of your range.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Segments() {
  return (
    <section className="bg-[#F6F4F2] py-28 border-t border-[#E6E6E2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col gap-px bg-[#E6E6E2] border border-[#E6E6E2]"
        >
          {segments.map((seg) => (
            <motion.div
              key={seg.eyebrow}
              variants={staggerItem}
              className="bg-[#F6F4F2] p-12 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start"
            >
              <div>
                <p className="eyebrow mb-4">{seg.eyebrow}</p>
                <h2 className="font-serif text-[34px] text-[#111111] leading-[1.15] tracking-[-0.02em]">
                  {seg.title}
                </h2>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[#72726D] text-[15px] leading-[1.75]">{seg.body}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {seg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#72726D]">
                      <Check size={13} className="text-[#164ED8] shrink-0 mt-[3px]" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ComplianceCallout() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-3xl flex flex-col gap-6">
          <p className="eyebrow">Whatever your size</p>
          <h2 className="font-serif text-4xl lg:text-[2.75rem] text-[#111111] leading-[1.12] tracking-[-0.02em]">
            EU requirements apply either way.
          </h2>
          <p className="text-[#72726D] text-base leading-[1.7]">
            The Ecodesign for Sustainable Products Regulation asks brands selling into the EU to issue Digital Product Passports, from independents to global retailers. Known Objects builds that structure in from the start.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-2">
            <a href={`${APP_URL}/signup`} className="btn-primary h-11 px-6 text-sm">
              Start for free
            </a>
            <a href="/compliance" className="link-cobalt text-sm">
              Read about ESPR readiness <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SolutionsContent() {
  return (
    <>
      <Hero />
      <Segments />
      <ComplianceCallout />
    </>
  );
}
