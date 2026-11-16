import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Phone } from "lucide-react";
import { formLink, site } from "../../lib/content";
import { citiesInState, cityPath } from "../../lib/cities";
import { getLocationPage } from "../../lib/locations";
import { getProgram, howTos, programs } from "../../lib/programs";
import { breadcrumbJsonLd } from "../../lib/seo";
import { JsonLd } from "../../components/JsonLd";
import { MedHeader } from "../../components/MedHeader";
import { MedFooter } from "../../components/MedFooter";
import { ContactSection } from "../../components/ContactSection";
import { RichText } from "../../components/RichText";
import { ScrollReveal } from "../../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../../components/ui";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const page = getProgram(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
export default function ProgramRoute({ params }: { params: Params }) {
  return (
    <Suspense fallback={null}>
      <ProgramContent params={params} />
    </Suspense>
  );
}

async function ProgramContent({ params }: { params: Params }) {
  const { slug } = await params;
  const page = getProgram(slug);
  const state = page ? getLocationPage(page.stateSlug) : undefined;
  if (!page || !state) notFound();

  const howTo = howTos.find((h) => h.stateSlug === page.stateSlug);
  const nearby = citiesInState(page.stateSlug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: page.state, path: `/locations/${page.stateSlug}` },
          { name: page.short, path: `/programs/${page.slug}` },
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
                  <Link href={`/locations/${page.stateSlug}`} className="med-sweep">
                    {page.state}
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li aria-current="page" className="font-medium text-navy">
                  {page.short}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p
                  className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                  style={i(1)}
                >
                  {page.state} state program
                </p>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.3rem,4.4vw,4rem)] font-light leading-[1.06] text-balance"
                  style={i(2)}
                >
                  {page.title}
                </h1>
                <div className="med-in mt-9 max-w-2xl" style={i(3)}>
                  <h2 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
                    About the program
                  </h2>
                  <p className="mt-4 text-[1.15rem] leading-relaxed">{page.about}</p>
                </div>
                <div className="med-in mt-10 flex flex-wrap items-center gap-3" style={i(4)}>
                  <a {...formLink} className="med-btn med-btn-primary">
                    Start Getting Paid
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </a>
                  <a href={site.phoneHref} className="med-btn med-btn-ghost">
                    <Phone size={17} strokeWidth={1.75} aria-hidden />
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div
                  aria-hidden
                  className="med-pop absolute -bottom-5 -left-3 hidden h-[88%] w-[82%] rounded-[2rem] bg-sky sm:block"
                  style={{ "--d": "500ms" } as React.CSSProperties}
                />
                <div className="med-photo relative aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-sand lg:aspect-[4/5]">
                  <div className="med-settle absolute inset-0">
                    <Image
                      src={state.image}
                      alt={`${page.state} home care`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Services ═════════ */}
        <section className="pb-24 lg:pb-32" aria-labelledby="program-services">
          <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-5 lg:sticky lg:top-32" data-reveal="up">
              <Label>Services</Label>
              <h2 id="program-services" className={`${h2} mt-5`}>
                What&rsquo;s{" "}
                <span className="font-normal italic text-cobalt">covered</span>
              </h2>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-ink">
                {page.servicesIntro}
              </p>
            </div>

            <ul className="grid gap-3 lg:col-span-7">
              {page.services.map((s, n) => {
                const label = typeof s.text[0] === "string" ? s.text[0] : "";
                const link = page.serviceLinks?.[label];
                return (
                  <li
                    key={label + n}
                    data-reveal="up"
                    style={i(n)}
                    className="rounded-2xl border border-navy/10 bg-white p-4 pr-5"
                  >
                    <div className="flex items-start gap-4 leading-relaxed">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-navy text-white">
                        <Check size={15} strokeWidth={2.5} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        {link ? (
                          <Link href={`/services/${link}`} className="med-sweep font-medium text-cobalt">
                            {label}
                          </Link>
                        ) : (
                          <span>
                            <RichText parts={s.text} />
                          </span>
                        )}
                        {s.sub && (
                          <ul className="mt-3 space-y-2 border-l-2 border-apricot/70 pl-5 text-[15px] text-slate-ink">
                            {s.sub.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ═════════ Eligibility ═════════ */}
        <section className={`${panel} bg-navy py-20 text-white lg:py-28`} aria-labelledby="program-eligibility">
          <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-5 lg:sticky lg:top-32" data-reveal="up">
              <Label light>Eligibility</Label>
              <h2 id="program-eligibility" className={`${h2} mt-5`}>
                Who{" "}
                <span className="font-normal italic text-apricot">qualifies</span>
              </h2>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-white/75">
                {page.eligibilityIntro}
              </p>
            </div>

            <div className="space-y-10 lg:col-span-7">
              {page.eligibility.map((group, g) => (
                <div key={g}>
                  {group.heading && (
                    <h3
                      className="font-display mb-4 text-[1.5rem] font-light text-apricot"
                      data-reveal="up"
                    >
                      {group.heading}
                    </h3>
                  )}
                  <ul className="grid gap-3">
                    {group.items.map((item, n) => (
                      <li
                        key={n}
                        data-reveal="up"
                        style={i(n)}
                        className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 pr-5 leading-relaxed text-white/90"
                      >
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-apricot text-navy">
                          <Check size={15} strokeWidth={2.5} aria-hidden />
                        </span>
                        <span className="[&_a]:text-apricot">
                          <RichText parts={item.text} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-wrap items-center gap-3 pt-2" data-reveal="up">
                <a {...formLink} className="med-btn med-btn-light">
                  Check Your Eligibility
                  <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                </a>
                {howTo && (
                  <Link
                    href={`/how-to-get-paid/${howTo.slug}`}
                    className="med-btn border-white/40 text-white transition-colors hover:bg-white/10"
                  >
                    How caregivers get paid
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Where we serve ═════════ */}
        <section className="py-24 lg:py-32" aria-labelledby="program-cities">
          <div className={wrap}>
            <div data-reveal="up">
              <Label>Where we serve</Label>
              <h2 id="program-cities" className={`${h2} mt-5`}>
                {page.short} care across {page.state}
              </h2>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {nearby.map((c, n) => (
                <li key={c.slug} data-reveal="up" style={i(n)}>
                  <Link
                    href={cityPath(c)}
                    className="med-card group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6"
                  >
                    <h3 className="font-display text-[1.6rem] font-light leading-tight">{c.city}</h3>
                    <span className="mt-auto flex items-center justify-between pt-6 text-[15px] font-semibold text-cobalt">
                      Home care in {c.city}
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.75}
                        aria-hidden
                        className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
