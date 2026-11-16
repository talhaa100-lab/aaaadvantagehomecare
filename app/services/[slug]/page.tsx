import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Phone,
  Plus,
} from "lucide-react";
import { formLink, locations, services, site } from "../../lib/content";
import {
  getServicePage,
  servicePages,
  type ServicePage,
} from "../../lib/services";
import { MedHeader } from "../../components/MedHeader";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "../../lib/seo";
import { MedFooter } from "../../components/MedFooter";
import { StartCard } from "../../components/StartCard";
import { ScrollReveal } from "../../components/ScrollReveal";

const wrap = "mx-auto max-w-[75rem] px-6 lg:px-10";
const panel = "mx-3 rounded-[2rem] sm:mx-5 sm:rounded-[2.5rem]";
const h2 =
  "font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.06] text-balance";

/** Stagger index for CSS: calc(var(--i) * step) */
const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

type Section = ServicePage["sections"][number];

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | AAA Advantage Home Care Agency`,
    description: page.metaDescription || undefined,
  };
}

function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-apricot" : "text-cobalt"
      }`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-apricot" />
      {children}
    </p>
  );
}

/**
 * The original pages put a bullet list right after a paragraph ending in ":".
 * Keep that order: everything up to and including that paragraph, then the
 * list, then whatever remains.
 */
function splitAtLead(paragraphs: string[]) {
  const at = paragraphs.findIndex((p) => p.trim().endsWith(":"));
  if (at === -1) return { before: paragraphs, after: [] as string[] };
  return {
    before: paragraphs.slice(0, at + 1),
    after: paragraphs.slice(at + 1),
  };
}

function Checklist({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  return (
    <ul className="grid gap-3">
      {items.map((item, n) => (
        <li
          key={item}
          data-reveal="up"
          style={i(n)}
          className={`flex items-start gap-4 rounded-2xl border p-4 pr-5 leading-relaxed ${
            light
              ? "border-white/15 bg-white/[0.04] text-white/90"
              : "border-navy/10 bg-white"
          }`}
        >
          <span
            className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${
              light ? "bg-apricot text-navy" : "bg-navy text-white"
            }`}
          >
            <Check
              size={15}
              strokeWidth={2.5}
              aria-hidden
              className="med-check"
              style={i(n)}
            />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RichText({
  section,
  light = false,
  leadSize = true,
}: {
  section: Pick<Section, "paragraphs" | "list">;
  light?: boolean;
  leadSize?: boolean;
}) {
  const { before, after } = splitAtLead(section.paragraphs);
  const para = (text: string, n: number, lead: boolean) =>
    lead && leadSize ? (
      <p
        key={text}
        className={`font-display text-[1.55rem] font-light leading-snug ${
          light ? "text-white/95" : ""
        }`}
      >
        {text}
      </p>
    ) : (
      <p
        key={text}
        className={`leading-relaxed ${light ? "text-white/70" : "text-slate-ink"}`}
      >
        {text}
      </p>
    );
  return (
    <div className="space-y-5">
      {before.map((p, n) => para(p, n, n === 0))}
      {section.list.length > 0 && (
        <div className="pt-1">
          <Checklist items={section.list} light={light} />
        </div>
      )}
      {after.map((p, n) => para(p, n, false))}
    </div>
  );
}

function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
  dark = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  dark?: boolean;
}) {
  return (
    <div data-reveal="none">
      <div
        style={{ "--r": "2rem" } as React.CSSProperties}
        className={`med-clip relative ${ratio} overflow-hidden rounded-[2rem] ${
          dark ? "bg-navy-deep" : "bg-sand"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function CardGrid({ cards }: { cards: Section["cards"] }) {
  const cols =
    cards.length === 4
      ? "lg:grid-cols-4 sm:grid-cols-2"
      : "lg:grid-cols-3 sm:grid-cols-2";
  return (
    <ul className={`mt-12 grid gap-5 ${cols}`}>
      {cards.map((c, n) => (
        <li key={c.title} data-reveal="up" style={i(n % 3)}>
          <div className="med-card group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7">
            <span className="font-display text-[1.7rem] font-medium text-cobalt">
              {String(n + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-5 text-[1.5rem] font-normal leading-tight">
              {c.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-ink">{c.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
// All slugs come from generateStaticParams, so each page is still prerendered.
export default function ServicePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const [heroImg, benefitImg, becomeImg] = [
    page.images[0],
    page.images[1] ?? page.images[0],
    page.images[2] ?? page.images[1] ?? page.images[0],
  ];

  const introSplit = splitAtLead(page.intro.paragraphs);
  const offerings = page.sections.find((s) => s.cards.length >= 5);
  const lastIdx = page.sections.length - 1;
  const others = services.filter((s) => s.href !== `/services/${page.slug}`);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.title, path: `/services/${page.slug}` },
          ]),
          ...(page.faqs.length > 0 ? [faqJsonLd(page.faqs)] : []),
        ]}
      />
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div className={`${wrap} relative pb-20 pt-6 lg:pb-28 lg:pt-8`}>
            <nav
              aria-label="Breadcrumb"
              className="med-in text-[13px] text-slate-ink"
              style={i(0)}
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="med-sweep">
                    Home
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li>
                  <Link href="/services" className="med-sweep">
                    Services
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li aria-current="page" className="font-medium text-navy">
                  {page.title}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <p
                  className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                  style={i(1)}
                >
                  AAA Advantage Home Care Agency
                </p>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-light leading-[1.03] text-balance"
                  style={i(2)}
                >
                  {page.heading ?? page.title}
                </h1>

                <div className="med-in mt-8 space-y-4" style={i(3)}>
                  {introSplit.before.map((p, n) => (
                    <p
                      key={p}
                      className={
                        n === 0
                          ? "text-[1.15rem] leading-relaxed"
                          : "leading-relaxed text-slate-ink"
                      }
                    >
                      {p}
                    </p>
                  ))}
                  {page.intro.list.length > 0 && (
                    <ul className="flex flex-wrap gap-2.5 pt-1">
                      {page.intro.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 rounded-full border border-navy/15 bg-white/70 py-2 pl-2.5 pr-4 text-[15px] font-medium backdrop-blur"
                        >
                          <span className="grid size-6 place-items-center rounded-full bg-navy text-white">
                            <Check size={13} strokeWidth={2.5} aria-hidden />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {introSplit.after.map((p) => (
                    <p key={p} className="leading-relaxed text-slate-ink">
                      {p}
                    </p>
                  ))}
                </div>

                <div
                  className="med-in mt-10 flex flex-wrap items-center gap-3"
                  style={i(4)}
                >
                  <a {...formLink} className="med-btn med-btn-primary">
                    Start Getting Paid
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </a>
                  <a href={site.phoneHref} className="med-btn med-btn-ghost">
                    Talk to Our Care Team
                  </a>
                </div>
              </div>

              <div className="relative lg:col-span-6">
                <div
                  aria-hidden
                  className="med-pop absolute -bottom-5 -right-3 hidden h-[92%] w-[86%] rounded-[2rem] bg-sky sm:block"
                  style={{ "--d": "500ms" } as React.CSSProperties}
                />
                <div className="med-photo relative aspect-[4/4.2] overflow-hidden rounded-[2rem] bg-sand sm:aspect-[5/5]">
                  <div className="med-settle absolute inset-0">
                    <Image
                      src={heroImg}
                      alt={page.title}
                      fill
                      priority
                      sizes="(min-width: 1200px) 640px, (min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className="med-pop absolute -bottom-7 left-4 sm:-left-8"
                  style={{ "--d": "1100ms" } as React.CSSProperties}
                >
                  <a
                    href={site.phoneHref}
                    className="med-card group flex items-center gap-4 rounded-2xl border border-white/70 bg-white/85 p-3.5 pr-6 shadow-[0_24px_48px_-24px_rgba(11,37,64,0.5)] backdrop-blur-xl"
                  >
                    <span className="grid size-12 place-items-center rounded-full bg-navy text-white transition-colors duration-200 group-hover:bg-cobalt">
                      <Phone size={20} strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                        Talk to Our Care Team
                      </span>
                      <span className="font-display text-[1.65rem] font-medium leading-tight">
                        {site.phone}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Body sections (same order as the original page) ═════════ */}
        {page.sections.map((s, idx) => {
          const isOfferings = s === offerings;
          const isBecome = idx === lastIdx && !isOfferings && idx > 0;

          if (isOfferings) {
            return (
              <section key={s.heading} className="pb-24 lg:pb-32">
                <div className={wrap}>
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
                    <div className="lg:col-span-6" data-reveal="up">
                      <Label>Services</Label>
                      <h2 className={`${h2} mt-5`}>{s.heading}</h2>
                    </div>
                    <div
                      className="space-y-4 text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:col-start-8"
                      data-reveal="up"
                      style={i(1)}
                    >
                      {s.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <CardGrid cards={s.cards} />
                </div>
              </section>
            );
          }

          if (isBecome) {
            return (
              <section
                key={s.heading}
                className={`${panel} mb-24 bg-navy py-20 text-white lg:mb-32 lg:py-28`}
              >
                <div
                  className={`${wrap} grid items-center gap-12 lg:grid-cols-12 lg:gap-20`}
                >
                  <div className="lg:order-2 lg:col-span-5">
                    <Photo
                      src={becomeImg}
                      alt={page.title}
                      ratio="aspect-[4/5]"
                      dark
                    />
                  </div>
                  <div className="lg:order-1 lg:col-span-7">
                    <div data-reveal="up">
                      <Label light>Join or hire</Label>
                      <h2 className={`${h2} mt-5`}>{s.heading}</h2>
                    </div>
                    <div className="mt-8" data-reveal="up" style={i(1)}>
                      <RichText section={s} light />
                    </div>
                    <div
                      className="mt-10 flex flex-wrap items-center gap-3"
                      data-reveal="up"
                      style={i(2)}
                    >
                      <a {...formLink} className="med-btn med-btn-light">
                        Start Getting Paid
                        <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                      </a>
                      <a
                        href={site.phoneHref}
                        className="med-btn border-white/30 text-white hover:bg-white/10"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          // "Who can benefit" style section: text + checklist beside a photo,
          // or text + cards when the original used cards here.
          const flip = idx % 2 === 0;
          if (s.cards.length > 0) {
            return (
              <section key={s.heading} className="pb-24 lg:pb-32">
                <div className={wrap}>
                  <div className="max-w-3xl" data-reveal="up">
                    <Label>Who it&rsquo;s for</Label>
                    <h2 className={`${h2} mt-5`}>{s.heading}</h2>
                    {s.paragraphs.length > 0 && (
                      <div className="mt-8">
                        <RichText
                          section={{ paragraphs: s.paragraphs, list: [] }}
                        />
                      </div>
                    )}
                  </div>
                  <CardGrid cards={s.cards} />
                </div>
              </section>
            );
          }
          return (
            <section key={s.heading} className="pb-24 lg:pb-32">
              <div
                className={`${wrap} grid items-start gap-12 lg:grid-cols-12 lg:gap-20`}
              >
                <div
                  className={`lg:col-span-5 ${flip ? "" : "lg:order-2"} lg:sticky lg:top-32`}
                >
                  <Photo
                    src={benefitImg}
                    alt={s.heading}
                    ratio="aspect-[4/5]"
                  />
                </div>
                <div className={`lg:col-span-7 ${flip ? "" : "lg:order-1"}`}>
                  <div data-reveal="up">
                    <Label>Who it&rsquo;s for</Label>
                    <h2 className={`${h2} mt-5`}>{s.heading}</h2>
                  </div>
                  <div className="mt-8" data-reveal="up" style={i(1)}>
                    <RichText section={s} />
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ═════════ FAQ ═════════ */}
        {page.faqs.length > 0 && (
          <section id="faq" className="pb-24 lg:pb-32">
            <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-20`}>
              <div className="lg:col-span-4" data-reveal="up">
                <div className="lg:sticky lg:top-36">
                  <Label>FAQ</Label>
                  <h2 className={`${h2} mt-5`}>Frequently asked questions</h2>
                </div>
              </div>

              <div className="space-y-3 lg:col-span-8">
                {page.faqs.map((f, n) => (
                  <div key={f.q} data-reveal="up" style={i(n)}>
                    <details
                      name="faq"
                      open={n === 0}
                      className="faq group rounded-2xl border border-navy/10 bg-white transition-[border-color,box-shadow] duration-300 ease-out open:border-navy/25 open:shadow-[0_24px_44px_-30px_rgba(11,37,64,0.4)]"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left sm:px-7">
                        <span className="font-display text-[1.3rem] font-normal leading-snug">
                          {f.q}
                        </span>
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-200 ease-out group-open:border-navy group-open:bg-navy group-open:text-white">
                          <Plus
                            size={18}
                            strokeWidth={1.5}
                            aria-hidden
                            className="faq-plus transition-transform duration-300 ease-out"
                          />
                        </span>
                      </summary>
                      <p className="max-w-2xl px-6 pb-7 pr-12 leading-relaxed text-slate-ink sm:px-7">
                        {f.a}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═════════ Other services ═════════ */}
        <section className="pb-24 lg:pb-32" aria-label="Other services">
          <div className={wrap}>
            <div data-reveal="up">
              <Label>More services</Label>
              <h2 className={`${h2} mt-5`}>Our Home Care Services</h2>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {others.map((s, n) => (
                <li key={s.title} data-reveal="up" style={i(n % 5)}>
                  <Link
                    href={s.href}
                    className="med-card group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-2.5"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 220px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 items-end justify-between gap-3 px-2.5 pb-2.5 pt-5">
                      <h3 className="font-display text-[1.25rem] font-normal leading-tight">
                        {s.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.75}
                        aria-hidden
                        className="shrink-0 text-cobalt transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ Contact ═════════ */}
        <section
          id="contact"
          className={`${panel} mb-3 bg-sky py-20 sm:mb-5 lg:py-28`}
        >
          <div className={`${wrap} grid gap-16 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-7">
              <div data-reveal="up">
                <Label>Contact</Label>
                <h2 className={`${h2} mt-5 max-w-xl`}>
                  We&rsquo;re Here to Answer Your Questions
                </h2>
              </div>

              <div className="mt-12" data-reveal="up" style={i(1)}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
                  Talk to Our Care Team
                </p>
                <a
                  href={site.phoneHref}
                  className="med-sweep font-display mt-3 inline-block pb-2 text-[clamp(2.5rem,5vw,4rem)] font-light leading-none"
                >
                  {site.phone}
                </a>
              </div>

              <ul className="mt-12 grid gap-4 sm:grid-cols-3">
                {locations.map((l, n) => (
                  <li key={l.state} data-reveal="up" style={i(n + 2)}>
                    <div className="med-card h-full rounded-2xl border border-navy/10 bg-white p-5">
                      <h3 className="font-display text-2xl font-normal">
                        {l.state}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">
                        {l.address}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5" data-reveal="up" style={i(2)}>
              <StartCard />
            </div>
          </div>
        </section>
      </main>
      <MedFooter />
    </>
  );
}
