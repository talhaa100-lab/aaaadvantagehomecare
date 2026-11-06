import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { formLink, locations as offices, site } from "../../lib/content";
import { getLocationPage, locationPages } from "../../lib/locations";
import { MedHeader } from "../../components/MedHeader";
import { MedFooter } from "../../components/MedFooter";
import { ContactSection } from "../../components/ContactSection";
import { ScrollReveal } from "../../components/ScrollReveal";
import { h2, i, Label, wrap } from "../../components/ui";

export function generateStaticParams() {
  return locationPages.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.heading} | AAA Advantage Home Care Agency`,
    description: page.metaDescription || undefined,
  };
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
// All slugs come from generateStaticParams, so each page is still prerendered.
export default function LocationRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <LocationContent params={params} />
    </Suspense>
  );
}

async function LocationContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) notFound();

  // Keep the original heading text intact; just set the state name in italics.
  const suffix = ` in ${page.state}`;
  const headingLead = page.heading.endsWith(suffix)
    ? page.heading.slice(0, -page.state.length)
    : page.heading;
  const headingTail = page.heading.endsWith(suffix) ? page.state : null;

  const office = offices.find((o) => o.state === page.state);
  const others = locationPages.filter((l) => l.slug !== page.slug);

  // The closing "Want to find out… / Contact us to find out…" paragraph becomes a call-out.
  const last = page.programParagraphs[page.programParagraphs.length - 1];
  const hasCallout = /^(want to|contact us)/i.test(last);
  const body = hasCallout ? page.programParagraphs.slice(0, -1) : page.programParagraphs;
  const [lead, ...rest] = body;

  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div className={`${wrap} pb-20 pt-6 lg:pb-28 lg:pt-8`}>
            <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="med-sweep">
                    Home
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li>Locations</li>
                <ChevronRight size={14} aria-hidden />
                <li aria-current="page" className="font-medium text-navy">
                  {page.state}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-stretch gap-14 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col justify-center lg:col-span-7">
                <p
                  className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                  style={i(1)}
                >
                  AAA Advantage Home Care Agency
                </p>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.4rem,4.6vw,4.2rem)] font-light leading-[1.05] text-balance"
                  style={i(2)}
                >
                  {headingLead}
                  {headingTail && (
                    <span className="font-normal italic text-cobalt">{headingTail}</span>
                  )}
                </h1>
                <p className="med-in mt-8 max-w-2xl text-[1.15rem] leading-relaxed" style={i(3)}>
                  {page.intro}
                </p>
                <div className="med-in mt-10 flex flex-wrap items-center gap-3" style={i(4)}>
                  <a {...formLink} className="med-btn med-btn-primary">
                    Let&rsquo;s Talk
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </a>
                  <a href={site.phoneHref} className="med-btn med-btn-ghost">
                    {site.phone}
                  </a>
                  {page.siteUrl && (
                    <a
                      href={page.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="med-btn med-btn-ghost"
                    >
                      Visit {page.state} Site
                      <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden />
                    </a>
                  )}
                </div>
              </div>

              {/* Service-area ledger */}
              <div className="med-pop lg:col-span-5" style={{ "--d": "400ms" } as React.CSSProperties}>
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-10">
                  <span
                    aria-hidden
                    className="font-display pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] font-light italic leading-none text-white/[0.05]"
                  >
                    {page.state.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-apricot">
                    <MapPin size={15} strokeWidth={1.75} aria-hidden />
                    Areas we currently serve
                  </p>
                  <h2 className="font-display mt-3 text-[1.9rem] font-light leading-tight">
                    Our {page.state} Locations
                  </h2>

                  <ol className="mt-8 border-t border-white/15">
                    {page.areas.map((area, n) => (
                      <li
                        key={area}
                        className="group flex items-baseline gap-5 border-b border-white/15 py-4 transition-[padding] duration-300 ease-out hover:pl-2"
                      >
                        <span className="w-6 text-[13px] font-semibold tabular-nums text-white/45">
                          {String(n + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.7rem] font-light leading-none">
                          {area}
                        </span>
                        <span
                          aria-hidden
                          className="ml-auto size-1.5 rounded-full bg-apricot opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                      </li>
                    ))}
                  </ol>

                  {office && (
                    <p className="mt-8 text-[14px] leading-relaxed text-white/70">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        Our office
                      </span>
                      {office.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ State program ═════════ */}
        <section className="pb-24 lg:pb-32">
          <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div data-reveal="none">
                <div
                  style={{ "--r": "2rem" } as React.CSSProperties}
                  className="med-clip relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand"
                >
                  <Image
                    src={page.image}
                    alt={page.programHeading}
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div data-reveal="up">
                <Label>State program</Label>
                <h2 className={`${h2} mt-5`}>{page.programHeading}</h2>
              </div>

              <p
                className="font-display mt-8 text-[1.55rem] font-light leading-snug"
                data-reveal="up"
                style={i(1)}
              >
                {lead}
              </p>

              <div className="mt-8 space-y-5 border-l-2 border-apricot/70 pl-6">
                {rest.map((p, n) => (
                  <p
                    key={p}
                    className="leading-relaxed text-slate-ink"
                    data-reveal="up"
                    style={i(n + 2)}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {hasCallout && (
                <div
                  className="mt-10 rounded-3xl bg-sky p-7 sm:p-9"
                  data-reveal="up"
                  style={i(3)}
                >
                  <p className="font-display text-[1.4rem] font-light leading-snug">{last}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a {...formLink} className="med-btn med-btn-primary">
                      Let&rsquo;s Talk
                      <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                    </a>
                    <a href={site.phoneHref} className="med-btn med-btn-ghost">
                      <Phone size={17} strokeWidth={1.75} aria-hidden />
                      {site.phone}
                    </a>
                  </div>
                </div>
              )}

              {page.siteUrl && (
                <div className="mt-10" data-reveal="up">
                  <a
                    href={page.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="med-btn med-btn-primary"
                  >
                    Visit {page.state} Site
                    <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═════════ Other states ═════════ */}
        <section className="pb-24 lg:pb-32" aria-label="Other locations">
          <div className={wrap}>
            <div data-reveal="up">
              <Label>More locations</Label>
              <h2 className={`${h2} mt-5`}>Where else we help</h2>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((l, n) => (
                <li key={l.slug} data-reveal="up" style={i(n)}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="med-card group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7"
                  >
                    <h3 className="font-display text-[1.9rem] font-light leading-tight">
                      {l.state}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">
                      {l.areas.join(", ")}
                    </p>
                    <span className="mt-auto flex items-center justify-between pt-7 text-[15px] font-semibold text-cobalt">
                      View {l.state}
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.75}
                        aria-hidden
                        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
