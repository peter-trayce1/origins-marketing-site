import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Known Objects is a product transparency platform helping brands connect their physical products to trusted digital identities.",
};

export default function AboutPage() {
  return <AboutContent />;
}
