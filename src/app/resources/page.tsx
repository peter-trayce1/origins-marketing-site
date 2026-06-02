import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, articles, and resources for fashion brands preparing for Digital Product Passports.",
};

const resources = [
  {
    tag: "Guide",
    title: "Guide to Digital Product Passports",
    description:
      "Everything brands need to know about DPPs, what they contain, and how to prepare.",
    readingTime: "12 min read",
  },
  {
    tag: "Technical",
    title: "How QR-linked product IDs work",
    description:
      "From physical product to digital identity: the technical and UX story.",
    readingTime: "8 min read",
  },
  {
    tag: "Practical guide",
    title: "Preparing textile product data for DPPs",
    description:
      "A practical guide to collecting and structuring materials, supply chain, and care data.",
    readingTime: "10 min read",
  },
  {
    tag: "Strategy",
    title: "Using product passports for storytelling and circularity",
    description:
      "How forward-thinking brands are using DPPs beyond compliance.",
    readingTime: "7 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24 border-b border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
              Resources
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight">
              Learn about Digital Product Passports.
            </h1>
            <p className="mt-6 text-lg text-[#525252] leading-relaxed">
              Guides, practical walkthroughs, and strategic thinking for fashion
              and lifestyle brands preparing for a more transparent future.
            </p>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-[#F9F9F8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-xl p-8 border border-[#E8E8E6] shadow-sm flex flex-col opacity-60"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#F4F4F3] text-xs font-medium text-[#525252] border border-[#E8E8E6]">
                    {resource.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#F9F9F8] text-[10px] font-semibold text-[#8C8C8C] uppercase tracking-wide border border-[#E8E8E6]">
                    Available soon
                  </span>
                </div>
                <h2 className="font-bold text-lg text-[#0A0A0A] mb-3 leading-snug">
                  {resource.title}
                </h2>
                <p className="text-sm text-[#525252] leading-relaxed flex-1 mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8C8C8C]">{resource.readingTime}</span>
                  <span className="text-xs text-[#8C8C8C] font-medium cursor-not-allowed">
                    Read guide →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#8C8C8C]">
              More guides and resources are coming soon. In the meantime, book a
              demo for a personalised walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter / waitlist block */}
      <section className="bg-white py-24 border-t border-[#E8E8E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0A0A0A] mb-3">
                Stay ahead on product transparency.
              </h2>
              <p className="text-base text-[#525252] leading-relaxed">
                Book a demo to learn how OriginsID can help your brand prepare
                for Digital Product Passport requirements.
              </p>
            </div>
            <Button href="/book-demo" size="lg">
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
