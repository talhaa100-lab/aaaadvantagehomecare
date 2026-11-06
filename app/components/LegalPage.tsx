import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LegalDoc } from "../lib/pages";
import { MedHeader } from "./MedHeader";
import { MedFooter } from "./MedFooter";
import { ContactSection } from "./ContactSection";
import { ScrollReveal } from "./ScrollReveal";
import { i, Label, wrap } from "./ui";

const prose = [
  "[&_p]:mt-5",
  "[&_h2]:font-display [&_h2]:mt-14 [&_h2]:scroll-mt-32 [&_h2]:text-[clamp(1.6rem,2.4vw,2.1rem)] [&_h2]:font-normal [&_h2]:leading-[1.15] [&_h2]:text-navy [&_h2]:text-balance first:[&_h2]:mt-0",
  "[&_h3]:font-display [&_h3]:mt-10 [&_h3]:scroll-mt-32 [&_h3]:text-[1.35rem] [&_h3]:font-normal [&_h3]:leading-snug [&_h3]:text-cobalt",
  "[&_h2+p]:mt-4 [&_h3+p]:mt-3",
  "[&_a]:font-medium [&_a]:text-cobalt [&_a]:underline [&_a]:decoration-cobalt/30 [&_a]:underline-offset-4 [&_a]:transition-[text-decoration-color] [&_a]:duration-150 hover:[&_a]:decoration-cobalt",
  "[&_ul]:mt-5 [&_ul]:space-y-3",
  "[&_ul>li]:relative [&_ul>li]:pl-7 [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.8em] [&_ul>li]:before:size-2 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-apricot",
  "[&_strong]:font-semibold [&_strong]:text-navy",
  "text-[1.0625rem] leading-[1.8] text-slate-ink",
].join(" ");

/** Shared layout for Terms & Conditions and Privacy Policy: quiet header, sticky contents, long-form prose. */
export function LegalPage({ doc, other }: { doc: LegalDoc; other: { label: string; href: string } }) {
  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        <section className={`${wrap} pb-12 pt-6 lg:pb-16 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                {doc.title}
              </li>
            </ol>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="med-in" style={i(1)}>
              <Label>Legal</Label>
            </div>
            <h1
              className="med-in font-display mt-5 text-[clamp(2.75rem,6vw,5rem)] font-light leading-[1.02] text-balance"
              style={i(2)}
            >
              {doc.title}
            </h1>
            {doc.updated && (
              <p className="med-in mt-6 text-[15px] text-slate-ink" style={i(3)}>
                Last updated{" "}
                <span className="rounded-full bg-sand px-3 py-1 font-semibold text-navy">
                  {doc.updated}
                </span>
              </p>
            )}
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="lg:sticky lg:top-32">
                <Label>On this page</Label>
                <ol className="mt-6 space-y-1 border-l border-navy/15">
                  {doc.toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-snug text-slate-ink transition-[color,border-color] duration-150 hover:border-cobalt hover:text-navy"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
                <Link
                  href={other.href}
                  className="med-sweep mt-8 inline-block pb-1 text-[14px] font-semibold text-navy"
                >
                  {other.label} &rarr;
                </Link>
              </div>
            </aside>

            <article className="lg:col-span-8 lg:col-start-5 xl:col-span-7">
              <div className={prose} dangerouslySetInnerHTML={{ __html: doc.html }} />
            </article>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
