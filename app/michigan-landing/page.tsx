import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ClipboardCheck,
  Clock,
  Compass,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { JsonLd } from "../components/JsonLd";
import { LandingHeader } from "../components/LandingHeader";
import { LeadForm } from "../components/LeadForm";
import { MedLogo } from "../components/MedLogo";
import { ScrollReveal } from "../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../components/ui";
import { breadcrumbJsonLd, faqJsonLd } from "../lib/seo";
import {
  alone,
  closing,
  faqs,
  form,
  hero,
  landing,
  process,
  qualify,
  reviews,
  support,
  whoCards,
} from "../lib/michigan-landing";

export const metadata: Metadata = {
  title: "Get Paid $17.50/Hour to Care for a Loved One in Michigan | AAA Advantage",
  description:
    "Get paid $17.50 an hour to care for a loved one on Medicaid in Michigan. Check your eligibility and get help from application to approval.",
};

const aloneIcons = {
  guide: Compass,
  support: Headphones,
  comms: MessageCircle,
  approval: BadgeCheck,
} as const;

const qualifyIcons = {
  medical: Stethoscope,
  medicaid: ShieldCheck,
  enrollment: ClipboardCheck,
} as const;

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function MichiganLandingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Michigan", path: "/locations/michigan" },
          { name: "Get Paid to Care for a Loved One", path: "/michigan-landing" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <ScrollReveal />
      <LandingHeader />

      <main className="pb-24 md:pb-0">
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div className={`${wrap} pb-20 pt-10 lg:pb-28 lg:pt-14`}>
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="med-in" style={i(0)}>
                  <Label>Michigan family caregivers</Label>
                </div>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.6rem,5.2vw,4.6rem)] font-light leading-[1.04] text-balance"
                  style={i(1)}
                >
                  Get Paid{" "}
                  <span className="font-normal italic text-cobalt">$17.50/Hour</span> to Care for a
                  Loved One in Michigan
                </h1>

                <ul className="mt-9 space-y-3.5">
                  {hero.perks.map((perk, n) => (
                    <li
                      key={perk}
                      className="med-in flex items-center gap-3.5 text-[1.1rem]"
                      style={i(n + 2)}
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-apricot text-navy">
                        <Check size={15} strokeWidth={2.5} aria-hidden />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="med-in mt-10 flex flex-wrap items-center gap-3" style={i(5)}>
                  <a href="#check" className="med-btn med-btn-primary">
                    Check Eligibility
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </a>
                  <a href={landing.phoneHref} className="med-btn med-btn-ghost">
                    <Phone size={17} strokeWidth={1.75} aria-hidden />
                    Call Now: {landing.phone}
                  </a>
                </div>

                <p
                  className="med-in mt-7 inline-flex items-center gap-2.5 text-[15px] text-slate-ink"
                  style={i(6)}
                >
                  <Users size={18} strokeWidth={1.75} aria-hidden className="text-cobalt" />
                  {hero.caregivers}
                </p>
              </div>

              <div className="relative lg:col-span-5">
                <div
                  aria-hidden
                  className="med-pop absolute -bottom-5 -left-3 hidden h-[88%] w-[82%] rounded-[2rem] bg-sky sm:block"
                  style={d(500)}
                />
                <div className="med-photo relative aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-sand lg:aspect-[4/5]">
                  <div className="med-settle absolute inset-0">
                    <Image
                      src="/michigan-landing/hero-img.webp"
                      alt="A smiling caregiver holding hands with an older woman outdoors"
                      fill
                      priority
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p
                  className="med-pop absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 text-[14px] font-medium shadow-[0_24px_44px_-26px_rgba(11,37,64,0.5)] backdrop-blur-xl sm:right-6"
                  style={d(1100)}
                >
                  <span className="grid size-9 place-items-center rounded-full bg-navy text-apricot">
                    <CalendarCheck size={18} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="leading-snug">
                    Paid every other Friday
                    <span className="block text-[12px] font-normal text-slate-ink">
                      Bi-weekly direct deposit
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Eligibility ═════════ */}
        <section id="eligibility" className="scroll-mt-28 pb-24 lg:pb-32">
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label>Eligibility</Label>
              <h2 className={`${h2} mt-5`}>
                {qualify.heading}{" "}
                <span className="font-normal italic text-cobalt">{qualify.accent}</span>{" "}
                {qualify.headingEnd}
              </h2>
              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-slate-ink">
                {qualify.intro}
              </p>
            </div>

            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {qualify.items.map((item, n) => {
                const Icon = qualifyIcons[item.icon];
                return (
                  <li key={item.title} data-reveal="up" style={i(n)}>
                    <div className="med-card relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-8">
                      <span
                        aria-hidden
                        className="font-display pointer-events-none absolute -bottom-7 right-6 select-none text-[8rem] font-light italic leading-none text-navy/[0.06]"
                      >
                        {n + 1}
                      </span>
                      <span className="relative grid size-12 place-items-center rounded-2xl bg-sky text-cobalt">
                        <Icon size={22} strokeWidth={1.5} aria-hidden />
                      </span>
                      <h3 className="font-display relative mt-6 text-[1.6rem] font-normal leading-snug">
                        {item.title}
                      </h3>
                      <p className="relative mt-3 leading-relaxed text-slate-ink">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12" data-reveal="up">
              <a href="#check" className="med-btn med-btn-primary">
                Check Eligibility
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* ═════════ Support + testimonial ═════════ */}
        <section className="pb-24 lg:pb-32">
          <div className={`${wrap} grid items-center gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-5" data-reveal="none">
              <div
                style={{ "--r": "2rem" } as React.CSSProperties}
                className="med-clip relative aspect-[570/449] overflow-hidden rounded-[2rem] bg-sand"
              >
                <Image
                  src="/michigan-landing/caregivers.webp"
                  alt="A caregiver hugging an older woman from behind, both smiling"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div data-reveal="up">
                <Label>Caregiver support</Label>
                <h2 className={`${h2} mt-5 max-w-2xl`}>{support.heading}</h2>
              </div>
              <figure
                className="mt-9 border-l-2 border-apricot/70 pl-6"
                data-reveal="up"
                style={i(1)}
              >
                <blockquote className="font-display text-[1.45rem] font-light leading-snug">
                  &ldquo;{support.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-[15px] font-semibold text-cobalt">
                  {support.author}
                </figcaption>
              </figure>
              <div className="mt-9" data-reveal="up" style={i(2)}>
                <a href="#check" className="med-btn med-btn-primary">
                  Check Eligibility
                  <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Who can be paid ═════════ */}
        <section className="pb-24 lg:pb-32" aria-labelledby="who-title">
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label>Who this is for</Label>
              <h2 id="who-title" className={`${h2} mt-5`}>
                {whoCards.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-slate-ink">
                {whoCards.intro}
              </p>
            </div>

            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {whoCards.cards.map((c, n) => (
                <li key={c.title} data-reveal="up" style={i(n)}>
                  <a
                    href="#check"
                    className="med-card group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white"
                  >
                    <div className="relative aspect-[374/275] overflow-hidden bg-sand">
                      <Image
                        src={c.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 360px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-display text-[1.7rem] font-light leading-tight">
                        {c.title}
                      </h3>
                      <span className="mt-auto flex items-center justify-between pt-8 text-[15px] font-semibold text-cobalt">
                        Check Eligibility
                        <ArrowRight
                          size={18}
                          strokeWidth={1.75}
                          aria-hidden
                          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ Not alone ═════════ */}
        <section className={`${panel} bg-navy py-20 text-white lg:py-28`}>
          <div className={`${wrap} grid items-center gap-14 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-5" data-reveal="none">
              <div
                style={{ "--r": "2rem" } as React.CSSProperties}
                className="med-clip relative aspect-[604/700] overflow-hidden rounded-[2rem] bg-navy-deep"
              >
                <Image
                  src="/michigan-landing/figure-it-out.webp"
                  alt="Two people shaking hands across a table"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div data-reveal="up">
                <Label light>We guide you</Label>
                <h2 className={`${h2} mt-5`}>
                  {alone.heading}{" "}
                  <span className="font-normal italic text-apricot">{alone.accent}</span>
                </h2>
                <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-white/75">
                  {alone.intro}
                </p>
              </div>

              <ul className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2">
                {alone.items.map((item, n) => {
                  const Icon = aloneIcons[item.icon];
                  return (
                    <li key={item.title} data-reveal="up" style={i(n + 1)}>
                      <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-apricot">
                        <Icon size={22} strokeWidth={1.5} aria-hidden />
                      </span>
                      <h3 className="font-display mt-5 text-[1.4rem] font-normal leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-white/70">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ═════════ How it works ═════════ */}
        <section id="how-it-works" className="scroll-mt-28 py-24 lg:py-32">
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label>How it works</Label>
              <h2 className={`${h2} mt-5`}>{process.heading}</h2>
              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-slate-ink">
                {process.intro}
              </p>
            </div>

            <div className="relative mt-16 lg:mt-20" data-reveal="none">
              <div
                aria-hidden
                className="med-line absolute left-7 right-[20%] top-7 hidden h-px bg-navy/25 lg:block"
              />
              <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {process.steps.map((s, n) => (
                  <li key={s.title} className="relative">
                    <span
                      className="med-dot font-display relative grid size-14 place-items-center rounded-full border border-navy/15 bg-white text-[1.7rem] font-medium text-cobalt shadow-[0_10px_24px_-14px_rgba(11,37,64,0.5)]"
                      style={i(n)}
                    >
                      {n + 1}
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-normal leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[16rem] leading-relaxed text-slate-ink">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ═════════ Closing call-out ═════════ */}
        <section className={`${panel} relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28`}>
          <Image
            src="/michigan-landing/cta-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_26_46/0.92),rgb(7_26_46/0.55))]"
          />
          <div className={`${wrap} relative`}>
            <div className="max-w-2xl" data-reveal="up">
              <h2 className={h2}>{closing.heading}</h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-white/80">{closing.text}</p>
              <p className="font-display mt-8 text-[1.6rem] font-light italic leading-snug text-apricot">
                {closing.tagline}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={landing.phoneHref} className="med-btn med-btn-light">
                  <Phone size={17} strokeWidth={1.75} aria-hidden />
                  Call Now: {landing.phone}
                </a>
                <a
                  href="#check"
                  className="med-btn border-white/40 text-white transition-colors hover:bg-white/10"
                >
                  Check Eligibility
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Reviews ═════════ */}
        <section id="reviews" className="scroll-mt-28 py-24 lg:py-32">
          <div className={wrap}>
            <div
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
              data-reveal="up"
            >
              <div className="max-w-2xl">
                <Label>Reviews</Label>
                <h2 className={`${h2} mt-5`}>{reviews.heading}</h2>
              </div>
              <a
                href={landing.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="med-btn med-btn-ghost w-fit"
              >
                Read Google Reviews
                <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>

            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {reviews.items.map((r, n) => (
                <li key={r.author} data-reveal="up" style={i(n)}>
                  <figure className="med-card flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-8">
                    <div className="flex gap-1 text-apricot" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={18} strokeWidth={0} fill="currentColor" aria-hidden />
                      ))}
                    </div>
                    <blockquote className="mt-6 leading-relaxed">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto pt-7 text-[15px] font-semibold text-cobalt">
                      {r.author}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ FAQ ═════════ */}
        <section id="faqs" className="scroll-mt-28 pb-24 lg:pb-32">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-4" data-reveal="up">
              <div className="lg:sticky lg:top-36">
                <Label>FAQ</Label>
                <h2 className={`${h2} mt-5`}>Caregiver Pay Questions?</h2>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-8">
              {faqs.map((f, n) => (
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

        {/* ═════════ Check eligibility form ═════════ */}
        <section id="check" className={`${panel} mb-3 scroll-mt-24 bg-sky py-20 sm:mb-5 lg:py-28`}>
          <div className={`${wrap} grid items-start gap-14 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-6">
              <div data-reveal="up">
                <Label>Check eligibility</Label>
                <h2 className={`${h2} mt-5 max-w-xl`}>{form.heading}</h2>
                <p className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-slate-ink">
                  {form.intro}
                </p>
              </div>

              <ul className="mt-12 space-y-4">
                {[
                  {
                    Icon: Phone,
                    label: "Call us",
                    value: landing.phone,
                    href: landing.phoneHref,
                  },
                  {
                    Icon: Mail,
                    label: "Email us",
                    value: landing.email,
                    href: `mailto:${landing.email}`,
                  },
                  { Icon: Clock, label: "Hours", value: landing.hours },
                ].map(({ Icon, label, value, href }, n) => (
                  <li key={label} data-reveal="up" style={i(n + 1)}>
                    <div className="flex items-center gap-5 rounded-2xl border border-navy/10 bg-white p-5">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy text-apricot">
                        <Icon size={20} strokeWidth={1.5} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="med-sweep font-display mt-1 inline-block break-all text-[1.35rem] font-normal leading-tight"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="font-display mt-1 text-[1.35rem] font-normal leading-tight">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6" data-reveal="up" style={i(2)}>
              <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-[0_40px_70px_-40px_rgba(11,37,64,0.45)] sm:p-10">
                <h3 className="font-display text-[1.9rem] font-light leading-tight">
                  Check Your Eligibility
                </h3>
                <div className="mt-8">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-28 pt-12 md:pb-14 lg:px-10">
        <div className="mx-auto flex max-w-[75rem] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" aria-label="AAA Advantage Home Care Agency, home">
              <MedLogo />
            </Link>
            <p className="mt-5 text-[14px] text-slate-ink">
              &copy; 2026 AAA Advantage Home Care. Serving Michigan families.
            </p>
          </div>
          <div className="text-[14px] text-slate-ink md:text-right">
            <p>
              <a href={landing.phoneHref} className="med-sweep font-semibold text-navy">
                {landing.phone}
              </a>
              <span aria-hidden className="mx-3 text-navy/25">
                |
              </span>
              {landing.hours}
            </p>
            <p className="mt-3 flex gap-5 md:justify-end">
              <Link href="/privacy-policy" className="med-sweep">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="med-sweep">
                Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Phone-first: a persistent call + check bar on small screens */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href={landing.phoneHref} className="med-btn med-btn-ghost px-3">
            <Phone size={17} strokeWidth={1.75} aria-hidden />
            Call Now
          </a>
          <a href="#check" className="med-btn med-btn-primary px-3">
            Check Eligibility
          </a>
        </div>
      </div>
    </>
  );
}
