import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { formLink, site } from "../lib/content";
import { cityPath, citiesInState } from "../lib/cities";
import { locationPages } from "../lib/locations";
import { breadcrumbJsonLd } from "../lib/seo";
import { JsonLd } from "../components/JsonLd";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactSection } from "../components/ContactSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: "Our Locations: Home Care in AZ, IN, MI, MO & SD | AAA Advantage",
  description:
    "AAA Advantage Home Care Agency provides in-home care and family caregiver programs across Arizona, Indiana, Michigan, Missouri and South Dakota. Find your city.",
};

export default function LocationsPage() {
  const totalCities = locationPages.reduce((n, l) => n + citiesInState(l.slug).length, 0);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
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
                  Locations
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
                  Currently{" "}
                  <span className="font-normal italic text-cobalt">serving</span>
                </h1>
                <p className="med-in mt-8 max-w-2xl text-[1.15rem] leading-relaxed" style={i(3)}>
                  We provide in-home care and help eligible family caregivers get paid across five
                  states and {totalCities} cities. Choose your state to see the programs available
                  where you live.
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

        {/* ═════════ States ═════════ */}
        <section className="pb-24 lg:pb-32" aria-label="States we serve">
          <div className={wrap}>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {locationPages.map((l, n) => {
                const cities = citiesInState(l.slug);
                return (
                  <li key={l.slug} data-reveal="up" style={i(n % 3)}>
                    <div className="med-card group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white">
                      <Link
                        href={`/locations/${l.slug}`}
                        className="relative block aspect-[4/3] overflow-hidden bg-sand"
                        aria-label={`${l.state} home care`}
                      >
                        <Image
                          src={l.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col p-7">
                        <h2 className="font-display text-[1.9rem] font-light leading-tight">
                          <Link href={`/locations/${l.slug}`} className="med-sweep">
                            {l.state}
                          </Link>
                        </h2>
                        <p className="mt-3 line-clamp-4 leading-relaxed text-slate-ink">{l.intro}</p>

                        {cities.length > 0 && (
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {cities.map((c) => (
                              <li key={c.slug}>
                                <Link
                                  href={cityPath(c)}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-sky/50 px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-150 hover:bg-sky"
                                >
                                  <MapPin size={13} strokeWidth={1.75} aria-hidden className="text-cobalt" />
                                  {c.city}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        <Link
                          href={`/locations/${l.slug}`}
                          className="mt-auto flex items-center justify-between pt-8 text-[15px] font-semibold text-cobalt"
                        >
                          Explore {l.state}
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.75}
                            aria-hidden
                            className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ═════════ City directory ═════════ */}
        <section className={`${panel} bg-navy py-20 text-white lg:py-28`} aria-labelledby="directory">
          <div className={wrap}>
            <div className="max-w-2xl" data-reveal="up">
              <Label light>Directory</Label>
              <h2 id="directory" className={`${h2} mt-5`}>
                Find your{" "}
                <span className="font-normal italic text-apricot">city</span>
              </h2>
            </div>
            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {locationPages.map((l, n) => (
                <div key={l.slug} data-reveal="up" style={i(n % 3)}>
                  <h3 className="font-display text-[1.5rem] font-light text-apricot">
                    <Link href={`/locations/${l.slug}`} className="med-sweep">
                      {l.state}
                    </Link>
                  </h3>
                  <ul className="mt-4 border-t border-white/15">
                    {citiesInState(l.slug).map((c) => (
                      <li key={c.slug} className="border-b border-white/15">
                        <Link
                          href={cityPath(c)}
                          className="group flex items-center justify-between py-3 text-[1.05rem] transition-[padding] duration-300 ease-out hover:pl-2"
                        >
                          {c.city}, {c.stateAbbr}
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.75}
                            aria-hidden
                            className="text-apricot opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
