import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { privacy } from "../lib/pages";

export const metadata: Metadata = {
  title: "Privacy Policy - AAA Advantage Home Care",
  description:
    "How AAA Advantage Home Care Inc. collects, uses and discloses your personal information.",
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} other={{ label: "Terms & Conditions", href: "/terms-and-conditions" }} />;
}
