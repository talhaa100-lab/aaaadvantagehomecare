import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { locations, services } from "../lib/content";
import { aboutPage, paragraphs } from "../lib/pages";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactSection } from "../components/ContactSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
};

export default function AboutPage() {
  const [lede, intro, offer, family, belief, mission] = paragraphs(aboutPage.html);
  const [main, accent] = aboutPage.images;
  const heading = (aboutPage.html.match(/<h2>([\s\S]*?)<\/h2>/)?.[1] ?? "").trim();

  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* Hero — text left, two stacked photographs right */}
        <section className={`${wrap} pb-16 pt-6 lg:pb-24 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                About Us
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="med-in" style={i(1)}>
                <Label>Who we are</Label>
              </div>
              <h1
                className="med-in font-display mt-5 text-[clamp(3.25rem,7.5vw,6.25rem)] font-light leading-[0.98] text-balance"
                style={i(2)}
              >
                About Us
              </h1>
              <p
                className="med-in mt-8 max-w-md text-lg leading-relaxed text-slate-ink"
                style={i(3)}
              >
                {lede}
              </p>
              <div className="med-in mt-9 flex flex-wrap gap-3" style={i(4)}>
                <Link href="/contact-us" className="med-btn med-btn-primary">
                  Contact Us
                  <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                </Link>
                <Link href="/careers" className="med-btn med-btn-ghost">
                  Become a Caregiver
                </Link>
              </div>
            </div>

            <div className="med-in relative lg:col-span-6" style={i(3)}>
              <div className="relative ml-auto aspect-[5/4] w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-sand">
                <Image
                  src={main.src}
                  alt={main.alt || "AAA Advantage Home Care Agency care team"}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 88vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 left-0 aspect-square w-[42%] overflow-hidden rounded-[2rem] border-[6px] border-white bg-sand shadow-[0_30px_60px_-30px_rgba(11,37,64,0.5)]">
                <Image
                  src={accent.src}
                  alt={accent.alt || "Care team with a heart symbol"}
                  fill
                  sizes="(min-width: 1024px) 230px, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className={`${panel} bg-sand py-20 lg:py-28`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-5" data-reveal="up">
              <div className="lg:sticky lg:top-32">
                <Label>Our agency</Label>
                <h2 className={`${h2} mt-5`}>{heading}</h2>
              </div>
            </div>
            <div
              className="space-y-6 text-[1.0625rem] leading-[1.8] text-slate-ink lg:col-span-7"
              data-reveal="up"
              style={i(1)}
            >
              <p className="font-display text-[clamp(1.4rem,2vw,1.75rem)] font-light leading-snug text-navy">
                {intro}
              </p>
              <p>{offer}</p>
              <p>{family}</p>
            </div>
          </div>

          <div className={`${wrap} mt-16`}>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink"
              data-reveal="up"
            >
              What we offer
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {services.map((s, n) => (
                <li key={s.href} data-reveal="up" style={i(n)}>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-[14px] font-semibold text-navy transition-[transform,background-color,color,border-color] duration-200 ease-out hover:border-navy hover:bg-navy hover:text-white active:scale-[0.97]"
                  >
                    {s.title}
                    <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Belief + mission */}
        <section className={`${wrap} py-20 lg:py-28`}>
          <blockquote
            className="font-display mx-auto max-w-4xl text-center text-[clamp(1.75rem,3.4vw,2.9rem)] font-light leading-[1.2] text-balance"
            data-reveal="up"
          >
            <span aria-hidden className="mb-4 block text-6xl leading-none text-apricot">
              &ldquo;
            </span>
            {belief}
          </blockquote>
        </section>

        <section className={`${panel} mb-3 bg-navy py-20 text-white sm:mb-5 lg:py-28`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-3" data-reveal="up">
              <Label light>Our mission</Label>
            </div>
            <div className="lg:col-span-9" data-reveal="up" style={i(1)}>
              <p className="font-display text-[clamp(1.5rem,2.5vw,2.15rem)] font-light leading-[1.35] text-white">
                {mission}
              </p>
              <ul className="mt-12 grid gap-3 sm:grid-cols-3">
                {locations.map((l) => (
                  <li
                    key={l.state}
                    className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-4"
                  >
                    <MapPin size={18} strokeWidth={1.75} className="shrink-0 text-apricot" aria-hidden />
                    <span className="font-display text-xl">{l.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
