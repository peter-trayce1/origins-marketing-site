import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "OriginsID is a product transparency platform helping fashion and lifestyle brands connect their physical products to trusted digital identities.",
};

const values = [
  {
    title: "Transparency",
    body: "We believe every claim about a product should be backed by real data — and that transparency is the foundation of lasting customer trust.",
  },
  {
    title: "Trust",
    body: "Trust is earned through consistency, accuracy, and clarity. We build tools that help brands make promises they can keep and customers can verify.",
  },
  {
    title: "Simplicity",
    body: "Product transparency doesn't have to be complicated. We remove friction from the process of creating, managing, and sharing Digital Product Passports.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 border-b border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              About OriginsID
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight">
              We believe every product should have a trusted digital identity.
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F9F9F8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
                Our mission
              </span>
              <p className="mt-6 text-xl text-[#0A0A0A] leading-relaxed font-medium">
                OriginsID is a product transparency platform helping fashion and
                lifestyle brands connect their physical products to trusted digital
                identities.
              </p>
              <p className="mt-6 text-base text-[#525252] leading-relaxed">
                We&apos;re building the infrastructure for a future where every product
                tells its story — where a customer scanning a tag on a jacket can
                instantly learn where the cotton was grown, how the garment was made,
                what certifications it holds, how to care for it, and what to do at the
                end of its life.
              </p>
              <p className="mt-4 text-base text-[#525252] leading-relaxed">
                We work with brands preparing for incoming Digital Product Passport
                requirements, helping them build the systems, content, and customer
                experiences they&apos;ll need to meet those standards — and to go beyond
                compliance into genuine transparency.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl p-8 border border-[#E8E8E6] shadow-sm">
                <div className="text-sm font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
                  What we do
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Digital Product Passport creation and management",
                    "QR code generation and distribution",
                    "AI-assisted passport drafting",
                    "Public passport page hosting",
                    "Website widget embedding",
                    "Compliance-ready data structure and export",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0A0A0A] mt-2" />
                      <span className="text-sm text-[#525252]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              What we stand for
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0A0A0A]">Our values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#F9F9F8] rounded-xl p-8 border border-[#E8E8E6]"
              >
                <h3 className="font-bold text-lg text-[#0A0A0A] mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context note */}
      <section className="bg-[#F9F9F8] py-24 border-t border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Why now
            </span>
            <p className="mt-6 text-base text-[#525252] leading-relaxed">
              The EU&apos;s Ecodesign for Sustainable Products Regulation (ESPR) is
              introducing mandatory Digital Product Passport requirements for
              textiles and apparel from 2026 onwards. We&apos;re working with brands
              today to ensure they&apos;re prepared — with clean data structures,
              customer-facing passport pages, and the workflows needed to maintain
              accurate product records at scale.
            </p>
            <p className="mt-4 text-base text-[#525252] leading-relaxed">
              Beyond compliance, we believe Digital Product Passports represent a
              fundamentally better relationship between brands and their customers —
              one built on openness, accountability, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              The team
            </span>
            <h2 className="mt-4 text-2xl font-bold text-[#0A0A0A] mb-4">
              The team is growing.
            </h2>
            <p className="text-base text-[#525252] leading-relaxed">
              We&apos;re building OriginsID with a small, focused team. If you&apos;re
              passionate about product transparency, sustainable fashion, and
              building meaningful software, we&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <Button href="/book-demo" variant="outline" size="md">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
