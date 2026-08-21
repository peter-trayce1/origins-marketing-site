"use client";

import { APP_URL } from "@/lib/utils";
import { useCurrency } from "./CurrencyProvider";

/**
 * Link into the Known Objects app that carries the visitor's currency
 * preference as ?currency=GBP|EUR. The app owns Stripe; this only forwards the
 * preference so checkout can default to the right currency.
 */
export function AppLink({
  path,
  className,
  children,
}: {
  path: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { currency } = useCurrency();
  const separator = path.includes("?") ? "&" : "?";
  const href = `${APP_URL}${path}${separator}currency=${currency}`;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
