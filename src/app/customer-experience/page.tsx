import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { APP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Customer Experience — Origins",
  description: "Turn every product into a digital customer experience. Digital Product Passports give customers access to product stories, certifications, care guidance and circularity pathways.",
};

const experiences = [
  {
    label: "Story",
    title: "Tell your product story.",
    body: "Every product has a story worth telling. Origins lets you share the people, places and processes behind what you make — from the farm where the fibre was grown to the factory where it was finished.",
    detail: "Customers who understand where a product comes from are more likely to buy, more likely to return, and more likely to keep the product longer.",
    features: [
      "Brand narrative and founding story",
      "Product design and development context",
      "Supplier and manufacturing story",
      "Seasonal collection context",
    ],
  },
  {
    label: "Transparency",
    title: "Back every claim with evidence.",
    body: "Transparency is not a marketing claim — it is a standard. Origins lets you show customers verified certifications, composition data, manufacturing origins and environmental metrics that are evidence-backed, not just stated.",
    detail: "Greenwashing is increasingly scrutinised by regulators and consumers. Origins gives you a structured way to show what is independently verified versus self-declared.",
    features: [
      "Verified certifications with evidence",
      "Composition and material breakdown",
      "Country of origin and manufacturing",
      "Carbon footprint and water usage data",
    ],
  },
  {
    label: "Care",
    title: "Extend the life of every product.",
    body: "The most sustainable product is the one that lasts. Origins lets you give customers clear care instructions, product maintenance guidance and longevity tips — making products easier to look after and longer-lasting.",
    detail: "A well-cared-for product is kept longer, replaced less often, and generates fewer returns. Better care guidance is good for customers and good for the planet.",
    features: [
      "Wash, dry, iron and storage icons",
      "Extended care guidance",
      "Fabric-specific maintenance tips",
      "Repair guidance and instructions",
    ],
  },
  {
    label: "Circularity",
    title: "Give every product a second life.",
    body: "A Digital Product Passport is the foundation of a circular product system. Origins lets you offer customers clear pathways to repair, resale, take-back and recycling — making end-of-life easy to act on.",
    detail: "Circularity requires infrastructure. Origins gives you the tools to build that infrastructure and give every customer a clear path to responsible product disposal.",
    features: [
      "Repair guidance and repair partners",
      "Resale programme and marketplace links",
      "Take-back scheme registration",
      "Recycling guidance and drop-off points",
    ],
  },
];

export default function CustomerExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] shrink-0" />
              Beyond compliance
            </div>
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05] mb-6">
              Turn every product into a customer experience.
            </h1>
            <p className="text-xl text-[#525252] leading-relaxed mb-10 max-w-2xl">
              Most brands see Digital Product Passports as a compliance requirement. Forward-thinking brands see them as a new customer channel — a permanent, scannable connection between product and person.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors"
              >
                Start free trial
              </a>
              <a
                href="https://app.origins-id.com/c/ORI-89413809"
                className="inline-flex items-center gap-1.5 h-11 px-2 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors"
              >
                See example passport
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Four experience sections */}
      {experiences.map((exp, i) => (
        <section
          key={exp.label}
          className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-[#F9F9F8]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="text-xs font-semibold text-[#0E6EEA] uppercase tracking-widest mb-4">
                  {exp.label}
                </div>
                <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight mb-5">
                  {exp.title}
                </h2>
                <p className="text-[#525252] leading-relaxed mb-4">{exp.body}</p>
                <p className="text-sm text-[#8C8C8C] leading-relaxed mb-8">{exp.detail}</p>
                <ul className="space-y-3">
                  {exp.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-[#525252]">
                      <Check size={14} className="text-[#2ECC71] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Image
                  src="/screenshot-certifications-mobile.png"
                  alt={`${exp.label} passport experience`}
                  width={862}
                  height={1478}
                  className="w-full max-w-[280px] h-auto [filter:brightness(1.08)]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Screenshot gallery */}
      <section className="bg-[#F9F9F8] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              The platform
            </div>
            <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight max-w-xl">
              Built to show the full picture.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8E8E6] rounded-2xl overflow-hidden">
              <div className="h-[280px] bg-[#F9F9F8] flex items-center justify-center overflow-hidden">
                <Image
                  src="/screenshot-supply-chain-builder.png"
                  alt="Supply chain builder"
                  width={2284}
                  height={1508}
                  className="w-full h-auto mix-blend-multiply"
                />
              </div>
              <div className="p-7">
                <h3 className="font-semibold text-[#0A0A0A] mb-1.5">Supply Chain</h3>
                <p className="text-sm text-[#525252] leading-relaxed">
                  Map every supplier in the product journey — from raw material source to final assembly. Show customers where and how their product was made.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E8E8E6] rounded-2xl overflow-hidden">
              <div className="h-[280px] bg-[#F9F9F8] flex items-center justify-center overflow-hidden">
                <Image
                  src="/screenshot-impact-builder.png"
                  alt="Impact and certifications"
                  width={2308}
                  height={1508}
                  className="w-full h-auto mix-blend-multiply"
                />
              </div>
              <div className="p-7">
                <h3 className="font-semibold text-[#0A0A0A] mb-1.5">Impact & Certifications</h3>
                <p className="text-sm text-[#525252] leading-relaxed">
                  Add verified certifications with evidence, carbon footprint, water usage and self-declared claims. Evidence-backed, customer-facing transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
                Verification
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight mb-5">
                Verified, not just claimed.
              </h2>
              <p className="text-[#525252] leading-relaxed mb-4">
                Every Origins passport shows customers what is independently verified versus self-declared. Evidence can be uploaded directly in the platform — certificates, test reports, lab results — so customers and regulators can trust what they see.
              </p>
              <p className="text-[#525252] leading-relaxed mb-8">
                The AUTHENTIC badge on published passports signals that a product&apos;s data has been reviewed and is backed by evidence. It is not just a claim — it is a standard.
              </p>
              <ul className="space-y-3">
                {[
                  "Verified vs self-declared claims clearly distinguished",
                  "Evidence files attached to each certification",
                  "Timestamped audit trail of data contributions",
                  "AUTHENTIC badge on published passports",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#525252]">
                    <Check size={14} className="text-[#2ECC71] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/Sustainability screenshot.png"
                alt="Certifications on passport"
                width={726}
                height={1374}
                className="w-full max-w-[280px] h-auto [filter:brightness(1.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-6">
              Every product deserves a story.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10">
              Start building Digital Product Passports that connect your brand to your customers — not just your brand to a regulator.
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
