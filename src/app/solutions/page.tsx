import type { Metadata } from "next";
import { APP_URL } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "OriginsID for every type of fashion brand — from independent labels to luxury houses and enterprise retailers.",
};

// ─── Page hero ────────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="bg-white pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-5">
            Solutions
          </div>
          <h1 className="text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05] mb-6">
            Built for every kind of fashion brand.
          </h1>
          <p className="text-lg text-[#525252] leading-relaxed">
            From independent labels to luxury houses and enterprise retailers — OriginsID scales to the size, complexity and ambition of your brand.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Segments ─────────────────────────────────────────────────────────────────

const segments = [
  {
    tag: "Independent & sustainable brands",
    headline: "Prove your sustainability claims with structured, verifiable data.",
    body: "For brands built on transparency, OriginsID gives you the infrastructure to back your claims — not just say them. Structure your materials data, certifications, supply chain steps and impact metrics in a format that consumers, stockists and regulators can verify.",
    features: [
      "GOTS, OEKO-TEX, GRS and custom certification fields",
      "Supply chain transparency — country, facility, process",
      "Consumer-facing sustainability summaries",
      "Impact metrics — carbon, water, waste",
      "Evidence-backed, not just stated",
    ],
    quote: {
      text: "We used to spend hours writing sustainability copy that nobody could verify. OriginsID gives us a structure that actually means something.",
      attribution: "Head of Sustainability, independent knitwear label",
    },
  },
  {
    tag: "Premium & luxury brands",
    headline: "Protect provenance. Communicate craftsmanship.",
    body: "Luxury products deserve a digital identity that matches their physical quality. OriginsID gives every piece a verifiable, branded passport — communicating provenance, materials, artisan stories and certifications in a format customers access instantly by scanning the label.",
    features: [
      "Artisan and maker story fields",
      "Provenance and origin documentation",
      "Premium passport page design",
      "Certification and authenticity fields",
      "Anti-counterfeit QR identity",
    ],
    quote: {
      text: "Our customers want to know exactly who made their piece and where. OriginsID lets us tell that story at the moment they're holding the garment.",
      attribution: "Creative Director, luxury accessories brand",
    },
  },
  {
    tag: "Scaling fashion brands",
    headline: "Manage passports across your entire catalogue.",
    body: "Whether you have 50 products or 5,000, OriginsID scales with your range. Bulk CSV import, Shopify sync, and AI-assisted content drafting mean you can build and maintain a complete passport library without a dedicated compliance team.",
    features: [
      "Bulk CSV import for large product ranges",
      "Shopify product sync — auto-draft on new products",
      "AI content generation at scale",
      "Templates by product category",
      "Team workspace with role permissions",
    ],
    quote: {
      text: "We launched 300 passport pages in a week using the bulk import. The AI drafts saved us from starting from scratch on every product.",
      attribution: "Digital Product Manager, contemporary fashion brand",
    },
  },
  {
    tag: "Ecommerce & DTC brands",
    headline: "Embed passports into your product pages and checkout.",
    body: "OriginsID integrates directly into your ecommerce stack. Add passport badges, inline material summaries, and full passport modals to any Shopify, Hydrogen or custom storefront — reducing customer questions and building trust at the point of purchase.",
    features: [
      "Shopify and Hydrogen widgets",
      "Webflow and custom embed support",
      "Passport modal triggered from any button",
      "Product page badge components",
      "Scan analytics — who's reading your passports",
    ],
    quote: {
      text: "Our conversion rate on product pages with passport badges is measurably higher. Transparency sells.",
      attribution: "Head of Ecommerce, DTC fashion brand",
    },
  },
  {
    tag: "Enterprise retailers",
    headline: "EU DPP compliance infrastructure for large teams.",
    body: "For retailers managing hundreds of brands or thousands of products, OriginsID provides the data infrastructure, team controls and API access to manage Digital Product Passports at scale — with compliance built in from day one.",
    features: [
      "Unlimited passports across multiple brands",
      "Multi-brand workspace management",
      "SSO and role-based access control",
      "REST API for PLM and ERP integration",
      "Custom data model extensions",
      "Dedicated onboarding and account support",
    ],
    quote: {
      text: "We needed a platform that could handle our full product range and integrate with our existing systems. OriginsID was the only one that could do both.",
      attribution: "Head of Digital, enterprise fashion retailer",
    },
  },
];

function Segments() {
  return (
    <div className="bg-white divide-y divide-[#E8E8E6] border-t border-[#E8E8E6]">
      {segments.map((seg, i) => (
        <section key={seg.tag} className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start`}>
              <div className={`flex flex-col gap-6 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
                  {seg.tag}
                </div>
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
                  {seg.headline}
                </h2>
                <p className="text-[#525252] leading-relaxed">{seg.body}</p>
                <ul className="space-y-3">
                  {seg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-[#525252]">
                      <Check size={14} className="text-[#0A0A0A] mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:opacity-60 transition-opacity w-fit"
                >
                  Get started free
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                {/* Quote card */}
                <div className="bg-[#F9F9F8] border border-[#E8E8E6] rounded-2xl p-8 flex flex-col gap-5">
                  <div className="text-2xl text-[#E8E8E6] font-serif leading-none select-none">&#8220;</div>
                  <p className="text-[#0A0A0A] leading-relaxed font-medium">
                    {seg.quote.text}
                  </p>
                  <div className="pt-2 border-t border-[#E8E8E6]">
                    <p className="text-sm text-[#8C8C8C]">{seg.quote.attribution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

// ─── Compliance callout ───────────────────────────────────────────────────────

function ComplianceCallout() {
  return (
    <section className="bg-[#F9F9F8] border-t border-[#E8E8E6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-5 items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8E8E6] text-xs font-medium text-[#525252]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
            EU regulation incoming
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
            Whatever your size, EU ESPR applies to you.
          </h2>
          <p className="text-[#525252] leading-relaxed">
            The EU&apos;s Ecodesign for Sustainable Products Regulation requires all fashion brands — from independents to global retailers — to issue Digital Product Passports by 2026. OriginsID builds the compliance structure in from day one, so you&apos;re never scrambling to catch up.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0A0A0A] text-white text-sm font-semibold hover:bg-[#1C1C1C] transition-colors"
            >
              Get started free
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center h-11 px-4 rounded-xl border border-[#E8E8E6] text-[#525252] text-sm font-medium hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors gap-1.5"
            >
              Book a demo
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <>
      <PageHero />
      <Segments />
      <ComplianceCallout />
    </>
  );
}
