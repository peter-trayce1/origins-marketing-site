import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OriginsID — Digital Product Passports",
    template: "%s | OriginsID",
  },
  description:
    "OriginsID helps fashion and lifestyle brands generate QR-linked product passports, publish trusted product stories, and prepare for the future of product transparency.",
  openGraph: {
    title: "OriginsID — Digital Product Passports",
    description:
      "Create beautiful Digital Product Passports in minutes. QR codes, AI generation, and website widgets for fashion brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
