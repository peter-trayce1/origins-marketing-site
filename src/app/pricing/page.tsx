import type { Metadata } from "next";
import Image from "next/image";
import { APP_URL } from "@/lib/utils";
import { ArrowRight, ArrowDown } from "lucide-react";
import PricingToggle from "./PricingToggle";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing built around your products. Essentials from £150/month with 100 published passports per year. Drafts, QR labels and scans are unlimited.",
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

function PricingHero() {
  return (
    <section className="bg-white pt-20 pb-14 lg:pt-28 lg:pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <p className="eyebrow mb-5">Pricing</p>
        <h1 className="font-serif text-5xl lg:text-[3.75rem] text-[#111111] leading-[1.02] tracking-[-0.02em] mb-6 max-w-2xl">
          Simple pricing.<br />
          Built around your <span className="italic">products.</span>
        </h1>
        <p className="text-lg text-[#72726D] leading-relaxed max-w-2xl mb-3">
          Create, publish and manage connected product identities with pricing that grows with your product range.
        </p>
        <p className="text-[15px] text-[#111111] font-[500] max-w-2xl">
          Draft freely. Publish when you are ready. QR labels and customer scans are unlimited.
        </p>
      </div>
    </section>
  );
}

// ─── How pricing works ────────────────────────────────────────────────────────

function HowPricingWorks() {
  const steps = [
    {
      number: "01",
      title: "Create",
      body: "Build and edit passport drafts without using your allowance.",
    },
    {
      number: "02",
      title: "Publish",
      body: "A publication is counted when a new passport goes live for the first time.",
    },
    {
      number: "03",
      title: "Connect",
      body: "Use that passport across your products with unlimited QR labels and scans.",
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-20 lg:py-28 border-t border-[#E6E6E2]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-tight tracking-[-0.02em] mb-5">
            You pay for published product identities.
          </h2>
          <p className="text-[#72726D] leading-relaxed">
            Your plan includes an annual allowance of new passports you can publish. Drafts are unlimited, and once a passport is live you can continue updating it, generating QR labels and receiving customer scans without using another publication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-[13px] font-[600] text-[#164ED8] tracking-[0.05em]">
                {step.number}
              </span>
              <div className="h-px bg-[#E6E6E2] w-full" />
              <h3 className="text-lg font-[600] text-[#111111] mt-2">{step.title}</h3>
              <p className="text-[14px] text-[#72726D] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Real-world example ───────────────────────────────────────────────────────

function PublicationExample() {
  const flow = [
    { value: "1 passport published", muted: false },
    { value: "10,000 QR labels generated", muted: true },
    { value: "Unlimited customer scans", muted: true },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#E6E6E2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Copy + flow */}
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-tight tracking-[-0.02em] mb-4">
              One product identity.<br />
              One <span className="italic">publication.</span>
            </h2>
            <p className="text-[#72726D] leading-relaxed mb-10 max-w-md">
              A published passport can be used across every physical unit that shares that product identity.
            </p>

            <div className="border border-[#E6E6E2] rounded-lg p-6 max-w-md">
              <p className="text-[11px] font-[500] uppercase tracking-[0.12em] text-[#72726D] mb-5">
                Waxed Cotton Field Jacket
              </p>
              <div className="flex flex-col gap-3">
                {flow.map((item, i) => (
                  <div key={item.value} className="flex flex-col gap-3">
                    <div
                      className={`text-[15px] font-[500] ${
                        item.muted ? "text-[#72726D]" : "text-[#111111]"
                      }`}
                    >
                      {item.value}
                    </div>
                    {i < flow.length - 1 && (
                      <ArrowDown size={14} className="text-[#C4C4C0]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="h-px bg-[#E6E6E2] my-5" />
              <p className="text-[15px] font-[600] text-[#164ED8]">
                Still only 1 publication.
              </p>
            </div>
          </div>

          {/* Jacket visual */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <Image
              src="/hero-jacket-full-white.png"
              alt="Waxed cotton field jacket with sewn-in Known Objects. QR label"
              width={1448}
              height={1086}
              className="w-full max-w-md h-auto"
              style={{ backgroundColor: "#ffffff" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Add-on capacity ──────────────────────────────────────────────────────────

function AddOnCapacity() {
  const packs = [
    {
      amount: "+100",
      label: "passports",
      price: "£100",
      detail: "Adds 100 additional published passports to your annual allowance",
    },
    {
      amount: "+250",
      label: "passports",
      price: "£200",
      detail: "Adds 250 additional published passports to your annual allowance",
    },
  ];

  return (
    <section className="bg-[#F6F4F2] py-20 lg:py-28 border-t border-[#E6E6E2]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-tight tracking-[-0.02em] mb-4">
            Need more passports?
          </h2>
          <p className="text-[#72726D] leading-relaxed">
            Add publication capacity to your plan as your product range grows. These are optional capacity add-ons, not separate plans.
          </p>
        </div>

        <div className="border-t border-[#E6E6E2]">
          {packs.map((pack) => (
            <div
              key={pack.amount}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-[#E6E6E2]"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-[600] text-[#164ED8] tracking-[-0.01em]">
                  {pack.amount}
                </span>
                <span className="text-sm text-[#72726D]">{pack.label}</span>
              </div>
              <p className="text-[13px] text-[#72726D] sm:flex-1 sm:px-8 sm:max-w-md">
                {pack.detail}
              </p>
              <div className="text-lg font-[600] text-[#111111] whitespace-nowrap">
                {pack.price}
                <span className="text-[13px] font-[400] text-[#72726D]">/month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="/book-demo" className="link-cobalt text-sm">
            Talk to us about additional capacity <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Trial ────────────────────────────────────────────────────────────────────

function TrialSection() {
  const perks = [
    "14-day free trial",
    "No credit card required",
    "Build full passport drafts",
    "Publish up to your trial limit",
    "Generate QR codes",
    "Preview public passports",
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#E6E6E2]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border border-[#E6E6E2] rounded-lg p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-3xl text-[#111111] leading-tight tracking-[-0.02em] mb-3">
              Try Known Objects with your own <span className="italic">products.</span>
            </h2>
            <p className="text-[#72726D] leading-relaxed mb-6">
              Build real passport drafts and experience how Known Objects works before choosing a paid plan.
            </p>
            <a href={`${APP_URL}/signup`} className="btn-primary bg-[#164ED8] hover:bg-[#123fad] border-none h-11 px-6 text-sm">
              Start free trial
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5 shrink-0">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-[#164ED8] shrink-0" />
                <span className="text-[13px] text-[#72726D]">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What counts as a published passport?",
    a: "A publication is counted when a new passport is published for the first time. Editing or updating that passport later does not consume another publication.",
  },
  {
    q: "Do draft passports count towards my allowance?",
    a: "No. You can create and work on draft passports without using your publication allowance.",
  },
  {
    q: "Do QR codes count towards my allowance?",
    a: "No. QR code generation does not consume additional publications.",
  },
  {
    q: "Are QR scans limited?",
    a: "No. Customer scans are unlimited.",
  },
  {
    q: "If I print 10,000 QR labels, does that use 10,000 publications?",
    a: "No. If those labels all link to the same published product identity, it still counts as one publication.",
  },
  {
    q: "Do edits to a live passport count again?",
    a: "No. You can continue updating an existing published passport without consuming an additional publication.",
  },
  {
    q: "When does my allowance reset?",
    a: "Your publication allowance resets at the start of each subscription year.",
  },
  {
    q: "What happens when I reach my allowance?",
    a: "Your existing published passports remain live. You can increase your capacity or move to a larger plan before publishing additional new product identities.",
  },
  {
    q: "Can I buy additional passport capacity?",
    a: "Yes. Additional publication capacity is available in packs of +100 passports for £100/month and +250 passports for £200/month. Talk to us to add capacity to your plan.",
  },
];

function FAQ() {
  return (
    <section className="bg-[#F6F4F2] py-24 lg:py-32 border-t border-[#E6E6E2]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#111111] leading-tight tracking-[-0.02em]">
              Common questions.
            </h2>
          </div>
          <div className="divide-y divide-[#E6E6E2]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-[14px] font-[600] text-[#111111] mb-2">{faq.q}</h3>
                <p className="text-[14px] text-[#72726D] leading-relaxed">{faq.a}</p>
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
    <section className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-[1.05] tracking-[-0.02em] mb-5">
            Ready to make your products <span className="italic">known?</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-9">
            Start building connected product identities today, or speak to us about the right setup for your brand.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="btn-primary bg-white text-[#111111] hover:bg-white/90 h-11 px-6 text-sm"
            >
              Start free trial
            </a>
            <a
              href="/book-demo"
              className="link-cobalt text-sm text-white/60 hover:text-white"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Book a demo <ArrowRight size={13} />
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
      <PublicationExample />
      <PricingToggle />
      <AddOnCapacity />
      <TrialSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
