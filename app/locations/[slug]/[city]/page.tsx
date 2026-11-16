import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { formLink, services, site } from "../../../lib/content";
import { cities, cityPath, citiesInState, getCity } from "../../../lib/cities";
import { getLocationPage } from "../../../lib/locations";
import { programForState } from "../../../lib/programs";
import { breadcrumbJsonLd } from "../../../lib/seo";
import { JsonLd } from "../../../components/JsonLd";
import { MedHeader } from "../../../components/MedHeader";
import { MedFooter } from "../../../components/MedFooter";
import { ContactSection } from "../../../components/ContactSection";
import { ScrollReveal } from "../../../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../../../components/ui";

type Params = Promise<{ slug: string; city: string }>;

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.state, city: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, city } = await params;
  const page = getCity(slug, city);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription || undefined,
  };
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
// Every city comes from generateStaticParams, so each page is still prerendered.
export default function CityRoute({ params }: { params: Params }) {
  return (
    <Suspense fallback={null}>
      <CityContent params={params} />
    </Suspense>
  );
}

async function CityContent({ params }: { params: Params }) {
  const { slug, city: citySlug } = await params;
  const page = getCity(slug, citySlug);
  const state = getLocationPage(slug);
  if (!page || !state) notFound();

  const program = programForState(slug);
  const siblings = citiesInState(slug);
  const serviceCard = (s: string) => services.find((x) => x.href.endsWith(`/${s}`));
  const [lead, ...rest] = page.programParagraphs;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: state.state, path: `/locations/${state.slug}` },
          { name: page.city, path: cityPath(page) },
        ])}
      />
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div className={`${wrap} pb-20 pt-6 lg:pb-28 lg:pt-8`}>
            <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="med-sweep">
                    Home
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li>
                  <Link href="/locations" className="med-sweep">
                    Locations
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li>
                  <Link href={`/locations/${state.slug}`} className="med-sweep">
                    {state.state}
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li aria-current="page" className="font-medium text-navy">
                  {page.city}
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
                  Home Care in{" "}
                  <span className="font-normal italic text-cobalt">{page.city}</span>,{" "}
                  {page.stateAbbr}
                </h1>
                <p className="med-in mt-8 max-w-2xl text-[1.15rem] leading-relaxed" style={i(3)}>
                  {page.intro}
                </p>
                <div className="med-in mt-10 flex flex-wrap items-center gap-3" style={i(4)}>
                  <Link href="/contact-us" className="med-btn med-btn-primary">
                    Talk to Our Care Team
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </Link>
                  <a href={site.phoneHref} className="med-btn med-btn-ghost">
                    <Phone size={17} strokeWidth={1.75} aria-hidden />
                    {site.phone}
                  </a>
                </div>
              </div>

              {/* Other cities in this state */}
              <div className="med-pop lg:col-span-5" style={{ "--d": "400ms" } as React.CSSProperties}>
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-10">
                  <span
                    aria-hidden
                    className="font-display pointer-events-none absolute -right-4 -top-6 select-none text-[9rem] font-light italic leading-none text-white/[0.05]"
                  >
                    {page.stateAbbr}
                  </span>
                  <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-apricot">
                    <MapPin size={15} strokeWidth={1.75} aria-hidden />
                    Areas we currently serve
                  </p>
                  <h2 className="font-display mt-3 text-[1.9rem] font-light leading-tight">
                    Our {state.state} Locations
                  </h2>

                  <ol className="mt-8 border-t border-white/15">
                    {siblings.map((c, n) => {
                      const here = c.slug === page.slug;
                      return (
                        <li key={c.slug} className="border-b border-white/15">
                          <Link
                            href={cityPath(c)}
                            aria-current={here ? "page" : undefined}
                            className="group flex items-baseline gap-5 py-4 transition-[padding] duration-300 ease-out hover:pl-2"
                          >
                            <span className="w-6 text-[13px] font-semibold tabular-nums text-white/45">
                              {String(n + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`font-display text-[1.7rem] leading-none ${
                                here ? "font-normal italic text-apricot" : "font-light"
                              }`}
                            >
                              {c.city}
                            </span>
                            <ArrowUpRight
                              size={18}
                              strokeWidth={1.75}
                              aria-hidden
                              className="ml-auto text-apricot opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
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
                    src={state.image}
                    alt={`${page.city}, ${state.state}`}
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div data-reveal="up">
                <Label>{state.state} program</Label>
                <h2 className={`${h2} mt-5`}>{page.programHeading}</h2>
              </div>

              {lead && (
                <p
                  className="font-display mt-8 text-[1.55rem] font-light leading-snug"
                  data-reveal="up"
                  style={i(1)}
                >
                  {lead}
                </p>
              )}

              {rest.length > 0 && (
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
              )}

              {program && (
                <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal="up" style={i(3)}>
                  <Link href={`/programs/${program.slug}`} className="med-btn med-btn-primary">
                    Check Your Eligibility
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </Link>
                  <Link href={`/locations/${state.slug}`} className="med-btn med-btn-ghost">
                    About {state.state}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ═════════ Services ═════════ */}
        <section className="pb-24 lg:pb-32" aria-labelledby="city-services">
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label>Services</Label>
              <h2 id="city-services" className={`${h2} mt-5`}>
                Our Home Care Services in {page.city}, {page.stateAbbr}
              </h2>
              {page.servicesIntro && (
                <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-slate-ink">
                  {page.servicesIntro}
                </p>
              )}
            </div>

            <ul
              className={`mt-14 grid gap-5 sm:grid-cols-2 ${
                page.services.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              }`}
            >
              {page.services.map((s, n) => {
                const card = serviceCard(s.slug);
                return (
                  <li key={s.slug} data-reveal="up" style={i(n)}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="med-card group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                        {card && (
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-[1.45rem] font-normal leading-snug">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">{s.text}</p>
                        <span className="mt-auto flex items-center justify-between pt-6 text-[15px] font-semibold text-cobalt">
                          Learn more
                          <ArrowRight
                            size={18}
                            strokeWidth={1.75}
                            aria-hidden
                            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ═════════ Why choose us ═════════ */}
        <section className={`${panel} mb-24 bg-navy py-20 text-white lg:mb-32 lg:py-28`}>
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label light>Why choose us</Label>
              <h2 className={`${h2} mt-5`}>
                Home care in{" "}
                <span className="font-normal italic text-apricot">{page.city}</span> you can rely
                on
              </h2>
              {page.whyIntro && (
                <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-white/75">
                  {page.whyIntro}
                </p>
              )}
            </div>

            <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {page.why.map((w, n) => (
                <li key={w.title} data-reveal="up" style={i(n)}>
                  <span className="font-display text-[2.6rem] font-light italic leading-none text-apricot">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-5 text-[1.45rem] font-normal leading-snug">
                    {w.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/70">{w.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-14" data-reveal="up">
              <a {...formLink} className="med-btn med-btn-light">
                Get Home Care Today
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
