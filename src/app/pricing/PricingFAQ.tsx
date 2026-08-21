"use client";

import { PRICES } from "@/lib/currency";
import { useCurrency } from "@/components/currency/CurrencyProvider";

export function PricingFAQ() {
  const { currency } = useCurrency();
  const { addOns } = PRICES[currency];

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
      a: `Yes. Additional publication capacity is available in packs of +100 passports for ${addOns.plus100}/month and +250 passports for ${addOns.plus250}/month. Talk to us to add capacity to your plan.`,
    },
  ];

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
