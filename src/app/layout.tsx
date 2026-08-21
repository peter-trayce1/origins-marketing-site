import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { cookies, headers } from "next/headers";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CurrencyProvider } from "@/components/currency/CurrencyProvider";
import { CURRENCY_COOKIE, resolveCurrency } from "@/lib/currency";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://knownobjects.io"),
  title: {
    default: "Known Objects.: Digital Identities for Physical Products",
    template: "%s | Known Objects.",
  },
  description:
    "Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.",
  openGraph: {
    title: "Known Objects.: Digital Identities for Physical Products",
    description:
      "Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.",
    type: "website",
    siteName: "Known Objects.",
    url: "https://knownobjects.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Known Objects.: Digital Identities for Physical Products",
    description:
      "Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.",
  },
  alternates: {
    canonical: "https://knownobjects.io",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Resolve the display currency once per request. Vercel injects
  // x-vercel-ip-country in production and preview deployments; a manual cookie
  // choice, if present, always wins.
  const [cookieStore, headerList] = await Promise.all([cookies(), headers()]);
  const manual = cookieStore.get(CURRENCY_COOKIE)?.value;
  const country = headerList.get("x-vercel-ip-country");
  const currency = resolveCurrency(manual, country);

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <CurrencyProvider initialCurrency={currency}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
