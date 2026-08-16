import type { Metadata } from "next";
import { ComplianceContent } from "./ComplianceContent";

export const metadata: Metadata = {
  title: "ESPR Compliance",
  description:
    "Known Objects helps brands prepare for EU Digital Product Passport requirements simply, without consultants or complex implementation projects.",
};

export default function CompliancePage() {
  return <ComplianceContent />;
}
