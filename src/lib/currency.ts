// Shared region → currency helper for display-only pricing.
//
// The marketing site never touches Stripe. It only decides whether to *show*
// GBP or EUR, and forwards that preference into the app via a ?currency= param.
// The single source of truth for the European country list and the fixed
// regional prices lives here so nothing is duplicated around the codebase.

export type Currency = "GBP" | "EUR";

/** Cookie holding a visitor's manual currency choice (takes priority over geo). */
export const CURRENCY_COOKIE = "ko_currency";

/**
 * Countries treated as the EUR pricing region. This is geographic Europe
 * (EU + EEA/EFTA + the rest of the continent), including countries that do not
 * use the euro domestically (Sweden, Denmark, Norway, Switzerland, etc).
 * The UK (GB) is deliberately excluded — it is GBP. ISO 3166-1 alpha-2.
 */
export const EUR_COUNTRIES = new Set<string>([
  // EU 27
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE",
  // EEA / EFTA
  "IS", "LI", "NO", "CH",
  // Rest of geographic Europe
  "AD", "AL", "AX", "BA", "BY", "FO", "GG", "GI", "IM", "JE", "MC", "MD",
  "ME", "MK", "RS", "RU", "SM", "UA", "VA", "XK",
]);

export function isCurrency(value: unknown): value is Currency {
  return value === "GBP" || value === "EUR";
}

/** UK and everywhere else → GBP; European countries → EUR. */
export function currencyForCountry(country?: string | null): Currency {
  if (country && EUR_COUNTRIES.has(country.toUpperCase())) return "EUR";
  return "GBP";
}

/**
 * Resolve the currency to display.
 * Priority: 1) manual cookie preference, 2) visitor country, 3) default GBP.
 */
export function resolveCurrency(
  manual?: string | null,
  country?: string | null,
): Currency {
  if (isCurrency(manual)) return manual;
  return currencyForCountry(country);
}

type PlanPrice = {
  monthly: string;
  annual: string;
  /** Monthly figure shown under the annual price (annual ÷ 12). */
  annualEquivalent: string;
};

type CurrencyPricing = {
  /** Currency symbol, e.g. "£". */
  symbol: string;
  /** Selector label, e.g. "GBP £". */
  label: string;
  essentials: PlanPrice;
  growth: PlanPrice;
  /** Optional capacity add-on packs, per month. */
  addOns: { plus100: string; plus250: string };
};

/**
 * Fixed Known Objects regional prices. These are NOT live-converted; they are
 * the agreed regional list. Enterprise is always "Custom" and has no price.
 */
export const PRICES: Record<Currency, CurrencyPricing> = {
  GBP: {
    symbol: "£",
    label: "GBP £",
    essentials: {
      monthly: "£150",
      annual: "£1,500",
      annualEquivalent: "Equivalent to £125/month",
    },
    growth: {
      monthly: "£450",
      annual: "£4,500",
      annualEquivalent: "Equivalent to £375/month",
    },
    addOns: { plus100: "£100", plus250: "£200" },
  },
  EUR: {
    symbol: "€",
    label: "EUR €",
    essentials: {
      monthly: "€200",
      annual: "€2,000",
      annualEquivalent: "Equivalent to €167/month",
    },
    growth: {
      monthly: "€550",
      annual: "€5,400",
      annualEquivalent: "Equivalent to €450/month",
    },
    addOns: { plus100: "€130", plus250: "€260" },
  },
};
