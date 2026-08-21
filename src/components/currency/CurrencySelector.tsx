"use client";

import { Fragment } from "react";
import { PRICES, type Currency } from "@/lib/currency";
import { useCurrency } from "./CurrencyProvider";

const OPTIONS: Currency[] = ["GBP", "EUR"];

/**
 * Subtle GBP £ / EUR € toggle. Sits quietly beside the pricing section; the
 * active currency is emphasised, the other is muted.
 */
export function CurrencySelector({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className={`inline-flex items-center gap-2 text-[12px] ${className ?? ""}`}>
      {OPTIONS.map((option, i) => {
        const active = currency === option;
        return (
          <Fragment key={option}>
            {i > 0 && <span className="text-[#C4C4C0]">/</span>}
            <button
              type="button"
              onClick={() => setCurrency(option)}
              aria-pressed={active}
              className={`transition-colors ${
                active
                  ? "text-[#111111] font-[500]"
                  : "text-[#72726D] hover:text-[#111111]"
              }`}
            >
              {PRICES[option].label}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
