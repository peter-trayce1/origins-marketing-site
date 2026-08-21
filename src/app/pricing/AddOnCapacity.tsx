"use client";

import { ArrowRight } from "lucide-react";
import { PRICES } from "@/lib/currency";
import { useCurrency } from "@/components/currency/CurrencyProvider";

export function AddOnCapacity() {
  const { currency } = useCurrency();
  const { addOns } = PRICES[currency];

  const packs = [
    {
      amount: "+100",
      label: "passports",
      price: addOns.plus100,
      detail: "Adds 100 additional published passports to your annual allowance",
    },
    {
      amount: "+250",
      label: "passports",
      price: addOns.plus250,
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
