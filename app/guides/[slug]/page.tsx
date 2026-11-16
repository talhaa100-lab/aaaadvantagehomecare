import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Phone, Plus, ShieldCheck } from "lucide-react";
import { formLink, site } from "../../lib/content";
import { getGuide, getGuides, readingMinutes, RETRIEVED } from "../../lib/guides";
import { MedHeader } from "../../components/MedHeader";
import { MedFooter } from "../../components/MedFooter";
import { ContactSection } from "../../components/ContactSection";
import { ScrollReveal } from "../../components/ScrollReveal";
import { GuideBlock, plain, Rich } from "../../components/GuideBlocks";
import { i, Label, utcNoon, wrap } from "../../components/ui";
import { breadcrumbJsonLd } from "../../lib/seo";

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.description,
    openGraph: { type: "article", title: guide.metaTitle, description: guide.description },
  };
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
export default function GuidePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <GuideContent params={params} />
    </Suspense>
  );
}

const date = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });

const h2 =
  "font-display scroll-mt-32 text-[clamp(1.8rem,2.8vw,2.4rem)] font-normal leading-[1.15] text-navy text-balance";

async function GuideContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const minutes = readingMinutes(guide);
  const related = guide.related
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const toc = [
    { id: "takeaways", text: "Key takeaways" },
    ...guide.sections.map((s) => ({ id: s.id, text: s.title })),
    { id: "faq", text: "Frequently asked questions" },
    { id: "references", text: "References" },
  ];

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.category, path: `/guides/${guide.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      datePublished: guide.published,
      dateModified: guide.verified,
      author: { "@type": "Organization", name: site.name },
      publisher: { "@type": "Organization", name: site.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    },
  ];

  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        <header className={`${wrap} pb-10 pt-6 lg:pb-14 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li>
                <Link href="/guides" className="med-sweep">
                  Guides
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                {guide.category}
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <div
              className="med-in flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em]"
              style={i(1)}
            >
              <span className="rounded-full bg-sky px-3.5 py-1.5 text-cobalt">{guide.category}</span>
              <span className="text-slate-ink">{minutes} min read</span>
            </div>
            <h1
              className="med-in font-display mt-7 text-[clamp(2.4rem,5.4vw,4.4rem)] font-light leading-[1.07] text-balance"
              style={i(2)}
            >
              {guide.title}
            </h1>
            <p
              className="med-in mx-auto mt-7 max-w-2xl text-[1.18rem] leading-relaxed text-slate-ink"
              style={i(3)}
            >
              <Rich text={guide.intro} />
            </p>

            {/* Byline */}
            <div
              className="med-in mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[14px] text-slate-ink"
              style={i(4)}
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-10 place-items-center rounded-full bg-navy text-[13px] font-semibold tracking-wide text-white"
                >
                  AA
                </span>
                <span className="font-semibold text-navy">AAA Advantage Care Team</span>
              </span>
              <span aria-hidden className="hidden size-1 rounded-full bg-slate-ink/40 sm:block" />
              <span>
                Published{" "}
                <time dateTime={guide.published}>{date.format(utcNoon(guide.published))}</time>
              </span>
              <span aria-hidden className="hidden size-1 rounded-full bg-slate-ink/40 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} strokeWidth={1.75} aria-hidden className="text-cobalt" />
                Last verified{" "}
                <time dateTime={guide.verified}>{date.format(utcNoon(guide.verified))}</time>
              </span>
            </div>
          </div>

          {/* At a glance */}
          <dl
            className="med-in mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4"
            style={i(5)}
          >
            {guide.facts.map((f) => (
              <div key={f.label} className="bg-white p-6">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cobalt">
                  {f.label}
                </dt>
                <dd className="font-display mt-2 text-[1.2rem] leading-snug text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="py-12 lg:py-20">
          <div className={`${wrap} grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16`}>
            {/* Sticky contents */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="lg:sticky lg:top-32">
                <Label>In this guide</Label>
                <ol className="mt-6 space-y-1 border-l border-navy/15">
                  {toc.map((t) => (
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
                <a
                  {...formLink}
                  className="med-btn med-btn-primary mt-8 inline-flex"
                >
                  Start Getting Paid
                </a>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center gap-2 text-[14px] font-semibold text-navy"
                >
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                  <span className="med-sweep">{site.phone}</span>
                </a>
              </div>
            </aside>

            <article className="min-w-0 lg:col-span-8 lg:col-start-5 xl:col-span-7">
              {/* Key takeaways */}
              <section
                id="takeaways"
                aria-labelledby="takeaways-title"
                className="scroll-mt-32 rounded-3xl bg-sky p-7 sm:p-9"
              >
                <h2 id="takeaways-title" className={h2}>
                  Key takeaways
                </h2>
                <ul className="mt-6 space-y-4">
                  {guide.takeaways.map((t, n) => (
                    <li key={n} className="flex gap-3.5 text-[1.05rem] leading-[1.7] text-ink">
                      <span
                        aria-hidden
                        className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-cobalt text-white"
                      >
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <span>
                        <Rich text={t} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {guide.sections.map((s) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="mt-16 scroll-mt-32">
                  <h2 id={`${s.id}-title`} className={h2}>
                    {s.title}
                  </h2>
                  {s.blocks.map((b, n) => (
                    <GuideBlock key={n} block={b} />
                  ))}
                </section>
              ))}

              {/* FAQ */}
              <section id="faq" aria-labelledby="faq-title" className="mt-16 scroll-mt-32">
                <h2 id="faq-title" className={h2}>
                  Frequently asked questions
                </h2>
                <div className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
                  {guide.faqs.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.3rem] leading-snug text-navy [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <Plus
                          size={22}
                          strokeWidth={1.5}
                          aria-hidden
                          className="mt-1 shrink-0 text-cobalt transition-transform duration-200 ease-out group-open:rotate-45"
                        />
                      </summary>
                      <p className="mt-4 text-[1.05rem] leading-[1.8] text-ink">
                        <Rich text={f.a} />
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* References */}
              <section id="references" aria-labelledby="references-title" className="mt-16 scroll-mt-32">
                <h2 id="references-title" className={h2}>
                  References
                </h2>
                <p className="mt-4 text-[14px] text-slate-ink">
                  Government and official program sources only. Each was opened and checked on {RETRIEVED}.
                </p>
                <ol className="mt-6 space-y-4">
                  {guide.sources.map((s, n) => (
                    <li
                      key={s.url}
                      id={`ref-${n + 1}`}
                      className="scroll-mt-32 flex gap-4 text-[14.5px] leading-relaxed text-slate-ink target:text-navy"
                    >
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sky text-[12px] font-semibold text-cobalt">
                        {n + 1}
                      </span>
                      <span className="min-w-0">
                        {s.org}. {s.title}.{" "}
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all font-medium text-cobalt underline decoration-cobalt/30 underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-cobalt"
                        >
                          {new URL(s.url).hostname.replace(/^www\./, "")}
                        </a>
                        . Retrieved {RETRIEVED}.
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              <p className="mt-12 rounded-2xl bg-frost p-5 text-[14px] leading-relaxed text-slate-ink">
                This guide is general information based on the official documents listed above. It is not legal,
                medical or financial advice, and program rules and rates change. Confirm current details with the
                state agency, or call us at{" "}
                <a href={site.phoneHref} className="font-semibold text-navy">
                  {site.phone}
                </a>
                .
              </p>

              {/* Related */}
              {related.length > 0 && (
                <section aria-labelledby="related-title" className="mt-16">
                  <h2 id="related-title" className={h2}>
                    Keep reading
                  </h2>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {related.map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/guides/${g.slug}`}
                          className="med-card group flex h-full flex-col rounded-3xl bg-white p-6"
                        >
                          <span className="w-fit rounded-full bg-sky px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-cobalt">
                            {g.category}
                          </span>
                          <span className="font-display mt-4 text-[1.3rem] leading-snug text-navy">
                            {g.title}
                          </span>
                          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[15px] font-semibold text-cobalt">
                            <span className="med-sweep">Read the guide</span>
                            <ArrowRight
                              size={18}
                              strokeWidth={1.75}
                              aria-hidden
                              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                            />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {guide.locationSlug && (
                <Link
                  href={`/locations/${guide.locationSlug}`}
                  className="med-sweep mt-12 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt"
                >
                  See our {guide.category} services
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                </Link>
              )}
            </article>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
