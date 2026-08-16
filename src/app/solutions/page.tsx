import type { Metadata } from "next";
import { SolutionsContent } from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Known Objects for every kind of brand, from independent labels to luxury houses and enterprise retailers.",
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
