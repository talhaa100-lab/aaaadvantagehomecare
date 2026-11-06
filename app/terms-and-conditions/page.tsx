import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { terms } from "../lib/pages";

export const metadata: Metadata = {
  title: "Terms & Conditions - AAA Advantage Home Care",
  description:
    "Terms and Conditions for text, email and phone communications from AAA Advantage Home Care.",
};

export default function TermsPage() {
  return <LegalPage doc={terms} other={{ label: "Privacy Policy", href: "/privacy-policy" }} />;
}
