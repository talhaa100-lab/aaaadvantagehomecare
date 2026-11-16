import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Phone } from "lucide-react";
import { formLink, services, site } from "../lib/content";
import { programs } from "../lib/programs";
import { breadcrumbJsonLd } from "../lib/seo";
import { JsonLd } from "../components/JsonLd";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactSection } from "../components/ContactSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: "Home Care Services: Companion, Attendant, Personal Care & More | AAA Advantage",
  description:
    "Adult companion care, attendant care, homemaking, personal care, respite and structured family caregiving from AAA Advantage Home Care Agency.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div className={`${wrap} pb-16 pt-6 lg:pb-20 lg:pt-8`}>
            <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
              <ol className="flex items-center gap-1.5">
                <li>
                  <Link href="/" className="med-sweep">
                    Home
                  </Link>
                </li>
                <ChevronRight size={14} aria-hidden />
                <li aria-current="page" className="font-medium text-navy">
                  Services
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-8">
                <p
                  className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                  style={i(1)}
                >
                  AAA Advantage Home Care Agency
                </p>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.8rem,5.4vw,5rem)] font-light leading-[1.03] text-balance"
                  style={i(2)}
                >
                  Our home care{" "}
                  <span className="font-normal italic text-cobalt">services</span>
                </h1>
                <p className="med-in mt-8 max-w-2xl text-[1.15rem] leading-relaxed" style={i(3)}>
                  Personalized, non-medical care for older adults and people with disabilities,
                  delivered at home and shaped around each person&rsquo;s needs, routines and
                  preferences.
                </p>
              </div>
              <div className="med-in flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end" style={i(4)}>
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
          </div>
        </section>

        {/* ═════════ Services ═════════ */}
        <section className="pb-24 lg:pb-32" aria-label="Services">
          <div className={wrap}>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, n) => (
                <li key={s.title} data-reveal="up" style={i(n % 3)}>
                  <Link
                    href={s.href}
                    className="med-card group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="font-display text-[1.4rem] font-medium text-cobalt">
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display mt-3 text-[1.8rem] font-light leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-slate-ink">{s.text}</p>
                      <span className="mt-auto flex items-center justify-between pt-8 text-[15px] font-semibold text-cobalt">
                        Learn more
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.75}
                          aria-hidden
                          className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ Programs ═════════ */}
        <section className={`${panel} bg-navy py-20 text-white lg:py-28`} aria-labelledby="programs">
          <div className={wrap}>
            <div className="max-w-2xl" data-reveal="up">
              <Label light>State programs</Label>
              <h2 id="programs" className={`${h2} mt-5`}>
                Programs we{" "}
                <span className="font-normal italic text-apricot">work with</span>
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-white/75">
                Many of these services are covered through state Medicaid and waiver programs. See
                what each one includes and who qualifies.
              </p>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2">
              {programs.map((p, n) => (
                <li key={p.slug} data-reveal="up" style={i(n % 2)}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.04] p-8 transition-colors duration-200 hover:bg-white/[0.09]"
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-apricot">
                      {p.state}
                    </span>
                    <h3 className="font-display mt-3 text-[1.7rem] font-light leading-tight">
                      {p.title}
                    </h3>
                    <span className="mt-auto flex items-center justify-between pt-8 text-[15px] font-semibold text-apricot">
                      Services &amp; eligibility
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
