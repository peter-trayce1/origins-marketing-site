import type { Metadata } from "next";
import { PlatformContent } from "./PlatformContent";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Everything you need to build, manage and publish verified Digital Product Passports: passport builder, QR codes, integrations, analytics and more.",
};

export default function PlatformPage() {
  return <PlatformContent />;
}
