import Link from "next/link";
import { Phone } from "lucide-react";
import { landing } from "../lib/michigan-landing";
import { MedLogo } from "./MedLogo";

const anchors = [
  { label: "Eligibility", href: "#eligibility" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

/** Focused landing header: logo, in-page anchors, one primary action. No site nav to leak attention. */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 px-3 pb-2 pt-3 sm:px-5">
      <div className="mx-auto flex h-[68px] max-w-[80rem] items-center justify-between gap-6 rounded-full border border-navy/[0.07] bg-white/85 pl-5 pr-2.5 shadow-[0_18px_40px_-26px_rgba(11,37,64,0.45)] backdrop-blur-xl lg:pl-7">
        <Link href="/" aria-label="AAA Advantage Home Care Agency, home">
          <MedLogo />
        </Link>

        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {anchors.map((a) => (
              <li key={a.href}>
                <a href={a.href} className="med-link block py-2 text-[15px] font-medium text-navy">
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={landing.phoneHref}
            className="med-sweep hidden items-center gap-2 pb-0.5 text-[15px] font-semibold text-navy md:inline-flex"
          >
            <Phone size={16} strokeWidth={1.75} aria-hidden />
            {landing.phone}
          </a>
          <a href="#check" className="med-btn med-btn-primary">
            Check Eligibility
          </a>
        </div>
      </div>
    </header>
  );
}
