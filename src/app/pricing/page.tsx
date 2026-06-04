import type { Metadata } from "next";
import { APP_URL } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";
import PricingToggle from "./PricingToggle";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for every stage of your Digital Product Passport journey. 14-day free trial, no credit card required.",
};

// ─── Pricing hero ─────────────────────────────────────────────────────────────

function PricingHero() {
  return (
    <section className="bg-white pt-20 pb-14 lg:pt-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-5">
            Pricing
          </div>
          <h1 className="text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.05] mb-5">
            Simple pricing for every stage of your Digital Product Passport journey.
          </h1>
          <p className="text-lg text-[#525252] leading-relaxed mb-4">
            Create, publish and manage Digital Product Passports with transparent pricing that scales with your brand.
          </p>
          <p className="text-sm font-semibold text-[#0A0A0A]">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── How pricing works ────────────────────────────────────────────────────────

function HowPricingWorks() {
  return (
    <section className="bg-[#F9F9F8] py-16 lg:py-20 border-t border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              How Origins pricing works
            </h2>
            <p className="text-[#525252] leading-relaxed">
              Origins pricing is based on the number of Product Passports your brand publishes each year.
            </p>
            <ul className="space-y-3">
              {[
                "One passport = one product style",
                "Unlimited QR labels per passport",
                "Unlimited QR scans",
                "Draft passports are always free",
                "Updates and edits never count towards your allowance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#525252]">
                  <Check size={14} className="text-[#0A0A0A] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[400px] shrink-0">
            <div className="bg-white border border-[#E8E8E6] rounded-2xl p-6 space-y-4">
              <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest">
                Example
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-[#F9F9F8] rounded-xl">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-2xl font-semibold tracking-tight text-[#0A0A0A]">1</span>
                    <span className="text-sm font-medium text-[#0A0A0A]">passport publication</span>
                  </div>
                  <p className="text-sm text-[#525252]">
                    A t-shirt style published once
                  </p>
                </div>
                <div className="p-4 bg-[#F9F9F8] rounded-xl">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-2xl font-semibold tracking-tight text-[#0A0A0A]">Still 1</span>
                    <span className="text-sm font-medium text-[#0A0A0A]">passport publication</span>
                  </div>
                  <p className="text-sm text-[#525252]">
                    10,000 QR labels printed from that same passport
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Free trial banner ────────────────────────────────────────────────────────

function FreeTrialBanner() {
  const perks = [
    "14-day free trial",
    "Publish up to 3 passports",
    "QR code generation",
    "Public passport pages",
    "Full passport builder access",
    "No credit card required",
  ];

  return (
    <section className="bg-white py-12 border-t border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-[#E8E8E6] rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl lg:text-2xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight mb-1.5">
              Included with every approved workspace
            </h2>
            <p className="text-sm text-[#8C8C8C]">
              Every workspace application is reviewed by our team to ensure the best onboarding experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 shrink-0">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2.5">
                <Check size={13} className="text-[#2ECC71] shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-[#525252]">{perk}</span>
              </div>
            ))}
          </div>
          <div className="shrink-0">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#0E6EEA] text-white text-sm font-semibold hover:bg-[#0C5CD0] transition-colors whitespace-nowrap"
            >
              Start your trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What counts as a Product Passport publication?",
    a: "A publication is counted when a passport is published for the first time. Editing, updating or re-publishing an existing passport does not use an additional publication.",
  },
  {
    q: "Do QR scans count towards my allowance?",
    a: "No. QR scans are unlimited on every plan.",
  },
  {
    q: "Do QR labels count towards my allowance?",
    a: "No. You can generate unlimited QR labels from a published passport.",
  },
  {
    q: "Do draft passports count?",
    a: "No. Draft and archived passports do not count towards your annual allowance.",
  },
  {
    q: "What happens after my trial?",
    a: "Choose the plan that best fits your expected passport volume and continue publishing passports.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade from Essentials to Growth or Enterprise at any time.",
  },
];

function FAQ() {
  return (
    <section className="bg-[#F9F9F8] py-24 lg:py-32 border-t border-[#E8E8E6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-widest mb-4">
              FAQ
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-tight">
              Common questions.
            </h2>
          </div>
          <div className="divide-y divide-[#E8E8E6]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-sm font-semibold text-[#0A0A0A] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white leading-[1.05] mb-4">
            Start your trial today.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Publish your first Digital Product Passport in minutes. No credit card required.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-white text-[#0A0A0A] text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Start your trial
            </a>
            <a
              href="/book-demo"
              className="inline-flex items-center h-11 px-2 text-white/50 text-sm font-medium hover:text-white transition-colors gap-1.5"
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

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <HowPricingWorks />
      <FreeTrialBanner />
      <PricingToggle />
      <FAQ />
      <FinalCTA />
    </>
  );
}
