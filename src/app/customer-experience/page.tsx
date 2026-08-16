import type { Metadata } from "next";
import { CustomerContent } from "./CustomerContent";

export const metadata: Metadata = {
  title: "Customer Experience",
  description:
    "Turn every product into a customer experience. Digital Product Passports give customers access to product stories, certifications, care guidance and circularity pathways.",
};

export default function CustomerExperiencePage() {
  return <CustomerContent />;
}
