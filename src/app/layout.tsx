import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

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
  title: {
    default: "Known Objects. — Digital Identities for Physical Products",
    template: "%s | Known Objects.",
  },
  description:
    "Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.",
  openGraph: {
    title: "Known Objects. — Digital Identities for Physical Products",
    description:
      "Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.",
    type: "website",
    siteName: "Known Objects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Known Objects. — Digital Identities for Physical Products",
    description:
      "Known Objects creates connected digital identities that bring together product data, stories and services across the entire product lifecycle.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
