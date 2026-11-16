import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { formLink, site } from "../../lib/content";
import { getLocationPage } from "../../lib/locations";
import { getHowTo, getProgram, howTos } from "../../lib/programs";
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
  return howTos.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const page = getHowTo(slug);
  if (!page) return {};
  return { title: `${page.title} | AAA Advantage`, description: page.metaDescription };
}

export default function HowToRoute({ params }: { params: Params }) {
  return (
    <Suspense fallback={null}>
      <HowToContent params={params} />
    </Suspense>
  );
}

async function HowToContent({ params }: { params: Params }) {
  const { slug } = await params;
  const page = getHowTo(slug);
  const state = page ? getLocationPage(page.stateSlug) : undefined;
  const program = page ? getProgram(page.programSlug) : undefined;
  if (!page || !state || !program) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: page.state, path: `/locations/${page.stateSlug}` },
          { name: page.title, path: `/how-to-get-paid/${page.slug}` },
        ])}
      />
      <ScrollReveal />
      <MedHeader />
      <main>
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
                  <Link href={`/locations/${page.stateSlug}`} className="med-sweep">
                    {page.state}
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li aria-current="page" className="font-medium text-navy">
                  Get paid to be a caregiver
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p
                  className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                  style={i(1)}
                >
                  Family caregivers in {page.state}
                </p>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.4rem,4.6vw,4.2rem)] font-light leading-[1.06] text-balance"
                  style={i(2)}
                >
                  How to get paid to be a{" "}
                  <span className="font-normal italic text-cobalt">caregiver</span> in {page.state}
                </h1>
                <p
                  className="med-in font-display mt-6 max-w-xl text-[1.4rem] font-light italic leading-snug text-slate-ink"
                  style={i(3)}
                >
                  {page.via}
                </p>
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
                      alt={`${page.state} family caregiving`}
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

        {/* ═════════ Body ═════════ */}
        <section className="pb-24 lg:pb-32">
          <div className={`${wrap} space-y-16`}>
            {page.sections.map((s, n) => (
              <div key={s.heading} className="grid gap-8 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-5" data-reveal="up">
                  <Label>{String(n + 1).padStart(2, "0")}</Label>
                  <h2 className={`${h2} mt-5`}>{s.heading}</h2>
                </div>
                <div className="space-y-5 lg:col-span-7" data-reveal="up" style={i(1)}>
                  {s.paragraphs.map((p, k) => (
                    <p
                      key={k}
                      className={
                        k === 0 && n === 0
                          ? "font-display text-[1.45rem] font-light leading-snug"
                          : "text-[1.1rem] leading-relaxed text-slate-ink"
                      }
                    >
                      <RichText parts={p} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═════════ Program callout ═════════ */}
        <section className={`${panel} mb-24 bg-navy py-16 text-white lg:mb-32 lg:py-20`}>
          <div className={`${wrap} grid items-center gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-8" data-reveal="up">
              <Label light>{program.short}</Label>
              <h2 className={`${h2} mt-5`}>{program.title}</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/75">{program.about}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end" data-reveal="up" style={i(1)}>
              <Link href={`/programs/${program.slug}`} className="med-btn med-btn-light">
                Services &amp; eligibility
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
