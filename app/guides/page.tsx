import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { getGuides, readingMinutes } from "../lib/guides";
import { QUESTIONS, TOPICS } from "../lib/guide-questions";
import { breadcrumbJsonLd, faqJsonLd } from "../lib/seo";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactSection } from "../components/ContactSection";
import { GuideLibrary, type GuideCard } from "../components/GuideLibrary";
import { ScrollReveal } from "../components/ScrollReveal";
import { i, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: "Medicaid Caregiver Guides | Get Paid to Care for Family",
  description:
    "Search plain-English answers on getting paid as a family caregiver through Medicaid in Michigan, Missouri, Arizona, Indiana and South Dakota. Every answer is sourced from government and official program documents.",
};

export default function GuidesPage() {
  const guides = getGuides();
  const cards: GuideCard[] = guides.map((g) => ({
    slug: g.slug,
    title: g.title,
    description: g.description,
    category: g.category,
    minutes: readingMinutes(g),
    facts: g.facts,
  }));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
    ]),
    faqJsonLd(QUESTIONS.map((q) => ({ q: q.q, a: [q.a, ...q.more].join(" ") }))),
  ];

  const stats = [
    { value: QUESTIONS.length, label: "questions answered" },
    { value: guides.length, label: "in-depth guides" },
    { value: TOPICS.filter((t) => t.state !== "ALL").length, label: "state programs" },
  ];

  return (
    <>
      <MedHeader />
      <main>
        <section className={`${wrap} pb-10 pt-6 lg:pb-14 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                Guides
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
            <h1
              className="med-in font-display text-[clamp(3.75rem,10vw,8rem)] font-light leading-[0.9] tracking-[-0.02em] lg:col-span-6"
              style={i(1)}
            >
              Guides
              <span className="text-apricot">.</span>
            </h1>
            <div className="med-in lg:col-span-6 lg:pb-3" style={i(2)}>
              <p className="max-w-lg text-[1.2rem] leading-relaxed">
                How family caregivers get paid through Medicaid, explained state by state in plain English.
                Search a question or browse by topic.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-[14px] text-slate-ink">
                <ShieldCheck size={18} strokeWidth={1.75} aria-hidden className="text-cobalt" />
                Every fact is cited to a government or official program source.
              </p>
            </div>
          </div>

          <dl className="med-in mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-edge pt-6" style={i(3)}>
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[2.2rem] leading-none text-navy">{s.value}</dd>
                <dd className="text-[14px] text-slate-ink" aria-hidden>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className={wrap}>
            <GuideLibrary guides={cards} />
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
      <ScrollReveal />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
