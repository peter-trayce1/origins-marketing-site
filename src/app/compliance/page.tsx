import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ESPR Compliance — Origins",
  description: "Origins helps fashion brands prepare for EU Digital Product Passport requirements simply, without consultants or complex implementation projects.",
};

const milestones = [
  {
    year: "2026",
    label: "Preparation",
    body: "Brands begin structuring product data. Early movers publish voluntary passports and build supplier data pipelines.",
  },
  {
    year: "2027",
    label: "Initial requirements",
    body: "First EU Digital Product Passport requirements take effect for selected textile and apparel product categories.",
  },
  {
    year: "2028",
    label: "Expanded scope",
    body: "Requirements expand across broader fashion and textile categories. Passports become standard practice for EU market access.",
  },
  {
    year: "2030",
    label: "Full adoption",
    body: "Digital Product Passports required across all regulated product categories. Compliance is baseline, not competitive advantage.",
  },
];

const whatBrandsNeed = [
  "A structured record of product identity, materials and composition",
  "Country of origin and manufacturing facility information",
  "Verified certifications and supporting evidence",
  "Environmental impact data (carbon, water, energy)",
  "Care and end-of-life guidance",
  "A QR code linked to the passport record",
  "A publicly accessible passport page for customers",
  "An audit trail of data contributions and changes",
];

const howOriginsHelps = [
  {
    title: "ESPR-aligned data structure",
    body: "Passport fields are structured around the data categories expected by EU Digital Product Passport requirements. As guidance develops, Origins updates the data model.",
  },
  {
    title: "Built-in certifications",
    body: "GOTS, OEKO-TEX, GRS, Bluesign, B Corp and custom certifications can be added and evidenced directly in the platform.",
  },
  {
    title: "Supplier data collection",
    body: "Send suppliers a secure link to request missing data. Responses populate passports automatically — no spreadsheets.",
  },
  {
    title: "Audit trail included",
    body: "Every published passport includes a timestamped record of data contributions and changes, supporting compliance documentation.",
  },
  {
    title: "QR codes on every passport",
    body: "Every product gets a permanent QR code and a public passport URL. Print it on labels, packaging, swing tags or ecommerce pages.",
  },
  {
    title: "Bulk passport creation",
    body: "Import entire collections via CSV. Origins creates draft passports automatically, ready to review and publish at scale.",
  },
];

const faqs = [
  {
    q: "What is ESPR?",
    a: "ESPR stands for the EU Ecodesign for Sustainable Products Regulation. It is a major piece of EU legislation that sets requirements for the environmental performance of products sold in the EU, including a mandatory Digital Product Passport for many product categories.",
  },
  {
    q: "Which brands does ESPR apply to?",
    a: "ESPR applies to brands and retailers that sell products in the EU market. It is not limited to EU-based companies — any brand selling into the EU will need to comply.",
  },
  {
    q: "When do fashion brands need to be compliant?",
    a: "The first requirements for textile and apparel products are expected to take effect from 2027, with broader adoption through 2028–2030. The specific timeline continues to be refined as the EU publishes delegated acts.",
  },
  {
    q: "Does Origins guarantee compliance?",
    a: "Origins is designed to support ESPR readiness by providing the data infrastructure required for Digital Product Passports. We update our data model as official guidance develops. We recommend consulting a legal or compliance advisor for specific compliance obligations.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most brands publish their first passport within an hour of signing up. Origins is designed to be simple — guided fields, AI-assisted content and bulk import mean you can move quickly without consultants or complex projects.",
  },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              EU regulation in progress
            </div>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05] mb-6">
              The simplest path to ESPR readiness.
            </h1>
            <p className="text-xl text-[#525252] leading-relaxed mb-10 max-w-2xl">
              Digital Product Passports are becoming a legal requirement for fashion brands selling into the EU. Origins gives you the infrastructure to prepare early — without consultants, spreadsheets or complex implementation projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
              >
                Start free trial
              </a>
              <a
                href="/book-demo"
                className="inline-flex items-center gap-1.5 h-11 px-2 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors"
              >
                Book a demo
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is ESPR */}
      <section className="bg-[#F9F9F8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
                What is ESPR?
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight mb-6">
                A new era of product transparency.
              </h2>
              <p className="text-[#525252] leading-relaxed mb-4">
                The EU&apos;s Ecodesign for Sustainable Products Regulation (ESPR) is one of the most significant pieces of product legislation in decades. It sets requirements for the environmental performance, durability and recyclability of products sold in the EU.
              </p>
              <p className="text-[#525252] leading-relaxed mb-4">
                Central to ESPR is the Digital Product Passport — a structured digital record linked to every product via a QR code. It gives consumers, retailers and regulators access to verified product information across a product&apos;s full lifecycle.
              </p>
              <p className="text-[#525252] leading-relaxed">
                Fashion and textiles are among the first product categories in scope. Brands that start now will be well-positioned when requirements take effect.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Applies to", value: "All brands selling products in the EU market" },
                { label: "Product scope", value: "Textiles and apparel among the first categories" },
                { label: "First requirements", value: "2027 onwards, with phased expansion" },
                { label: "Required element", value: "A Digital Product Passport linked via QR code" },
                { label: "Data required", value: "Materials, origins, certifications, environmental impact" },
                { label: "Customer access", value: "Passport must be publicly accessible to consumers" },
              ].map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-6 py-4 border-b border-[#E8E8E6] last:border-0">
                  <span className="text-sm text-[#8C8C8C] shrink-0">{row.label}</span>
                  <span className="text-sm font-medium text-[#0A0A0A] text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              Regulatory timeline
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-xl">
              What to expect and when.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E8E6]">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white p-8 flex flex-col gap-4">
                <div className="text-4xl font-semibold tracking-[-0.04em] text-[#E8E8E6]">{m.year}</div>
                <div>
                  <div className="text-sm font-semibold text-[#0A0A0A] mb-2">{m.label}</div>
                  <p className="text-sm text-[#525252] leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#8C8C8C] mt-6">
            Timelines are based on current EU proposals and may be updated as delegated acts are published. Origins monitors regulatory developments and updates its data model accordingly.
          </p>
        </div>
      </section>

      {/* What brands need */}
      <section className="bg-[#F9F9F8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
                What brands need to do
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight mb-6">
                The data requirements, in plain language.
              </h2>
              <p className="text-[#525252] leading-relaxed">
                While the full technical specifications continue to be developed, the core data requirements for fashion Digital Product Passports are already clear. Here is what brands need to capture and publish.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {whatBrandsNeed.map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 bg-white border border-[#E8E8E6] rounded-xl">
                  <Check size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#525252] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Origins helps */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              How Origins helps
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-xl">
              Built for ESPR readiness from day one.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E8E6]">
            {howOriginsHelps.map((item) => (
              <div key={item.title} className="bg-white p-8 flex flex-col gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <Check size={10} className="text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0A0A0A] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F9F9F8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div>
              <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">FAQ</div>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
                ESPR questions.
              </h2>
            </div>
            <div className="divide-y divide-[#E8E8E6]">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6">
                  <h3 className="text-sm font-semibold text-[#0A0A0A] mb-3">{faq.q}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-6">
              Start preparing today.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Most brands publish their first passport within an hour of signing up. No consultants, no complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Start free trial
              </a>
              <a
                href="/book-demo"
                className="inline-flex items-center gap-1.5 h-11 px-2 text-white/50 text-sm font-medium hover:text-white transition-colors"
              >
                Book a demo
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
