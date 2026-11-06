import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Check,
  ClipboardCheck,
  HeartHandshake,
  House,
  Phone,
  Plus,
} from "lucide-react";
import {
  blogPost,
  careCopy,
  faqs,
  highlights,
  locations,
  services,
  formLink,
  site,
  steps,
  testimonials,
} from "./lib/content";
import { MedHeader } from "./components/MedHeader";
import { MedFooter } from "./components/MedFooter";
import { StartCard } from "./components/StartCard";
import { ScrollReveal } from "./components/ScrollReveal";

const wrap = "mx-auto max-w-[75rem] px-6 lg:px-10";
const panel = "mx-3 rounded-[2rem] sm:mx-5 sm:rounded-[2.5rem]";

const highlightIcons = {
  enroll: ClipboardCheck,
  home: House,
  pay: BadgeDollarSign,
  support: HeartHandshake,
} as const;

const h2 =
  "font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.06] text-balance";

/** Stagger index for CSS: calc(var(--i) * step) */
const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

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

function ArrowCircle() {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-200 ease-out group-hover:border-navy group-hover:bg-navy group-hover:text-white">
      <ArrowUpRight
        size={18}
        strokeWidth={1.75}
        aria-hidden
        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </span>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-8 size-4 shrink-0 text-apricot"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0Z"
      />
    </svg>
  );
}

export default function SecondHome() {
  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div
            className={`${wrap} relative grid items-center gap-16 pb-24 pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-14`}
          >
            <div className="lg:col-span-6">
              <p
                className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                style={i(0)}
              >
                AAA Advantage Home Care Agency
              </p>
              <h1 className="font-display mt-6 text-[clamp(2.6rem,4.7vw,4.4rem)] font-light leading-[1.03]">
                <span className="med-in block text-balance" style={i(1)}>
                  Fair Pay, Meaningful Work,
                </span>
                <span
                  className="med-in relative mt-1 inline-block whitespace-nowrap pb-3 font-normal italic text-cobalt"
                  style={i(2)}
                >
                  Exceptional Care
                  <svg
                    viewBox="0 0 300 14"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-3 w-full"
                  >
                    <path
                      className="med-draw"
                      pathLength="1"
                      d="M3 9c52-6 142-8 294-3"
                      stroke="#f0a35e"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <div className="med-in mt-9 space-y-4" style={i(3)}>
                <p className="text-[1.15rem] leading-relaxed">
                  AAA Advantage Home Care Agency is where fair pay meets
                  exceptional care. We support family caregivers in providing
                  excellent care for loved ones while receiving the compensation
                  they deserve.
                </p>
                <p className="leading-relaxed text-slate-ink">
                  We guide you through the enrollment process. We help you
                  understand our services and available caregiving programs and
                  provide the support you need along the way. Our personal care
                  services help older adults and individuals with qualifying
                  disabilities live comfortably and safely. We help them enjoy a
                  greater quality of life.
                </p>
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

            {/* Photo stack */}
            <div className="relative lg:col-span-6">
              <div
                aria-hidden
                className="med-pop absolute -bottom-5 -right-3 hidden h-[92%] w-[86%] rounded-[2rem] bg-sky sm:block"
                style={{ "--d": "500ms" } as React.CSSProperties}
              />
              <div className="med-photo relative aspect-[5/4.4] overflow-hidden rounded-[2rem] bg-sand sm:aspect-[6/5]">
                <div className="med-settle absolute inset-0">
                  <Image
                    src="/images/woman-taking-care-old-man.webp"
                    alt="A caregiver gently combing an older man's hair"
                    fill
                    priority
                    sizes="(min-width: 1200px) 700px, (min-width: 1024px) 55vw, 100vw"
                    className="med-parallax object-cover object-[60%_40%]"
                  />
                </div>
              </div>

              <p
                className="med-pop absolute right-4 top-4 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-[13px] font-medium backdrop-blur-xl sm:right-6 sm:top-6"
                style={{ "--d": "1100ms" } as React.CSSProperties}
              >
                Serving Michigan, Missouri, and South Dakota
              </p>

              {/* Entrance and hover live on separate elements so they don't fight */}
              <div
                className="med-pop absolute -bottom-7 left-4 sm:-left-8"
                style={{ "--d": "1300ms" } as React.CSSProperties}
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
                    <span className="text-xs text-slate-ink">{site.hours}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Service marquee ═════════ */}
        <section
          aria-label="Our services"
          className="med-marquee overflow-hidden bg-navy py-6 text-white [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]"
        >
          <div className="med-marquee-track">
            {[0, 1].map((dup) => (
              <ul
                key={dup}
                aria-hidden={dup === 1}
                className="flex shrink-0 items-center"
              >
                {services.map((s) => (
                  <li key={s.title} className="flex shrink-0 items-center">
                    <span className="font-display whitespace-nowrap text-[1.65rem] font-light italic">
                      {s.title}
                    </span>
                    <Star />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ═════════ Four promises ═════════ */}
        <section className="py-20 lg:py-28">
          <div className={wrap}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((h, n) => {
                const Icon = highlightIcons[h.icon];
                return (
                  <li key={h.title} data-reveal="up" style={i(n)}>
                    <div className="med-card group h-full rounded-3xl border border-navy/10 bg-white p-7">
                      <span className="grid size-14 place-items-center rounded-full border border-navy/15 text-cobalt transition-colors duration-300 ease-out group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                        <Icon size={26} strokeWidth={1.4} aria-hidden />
                      </span>
                      <h2 className="font-display mt-7 text-[1.55rem] font-normal leading-tight">
                        {h.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-slate-ink">
                        {h.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ═════════ Join Our Team ═════════ */}
        <section id="how-it-works" className={`${panel} bg-sky py-20 lg:py-28`}>
          <div className={wrap}>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-6" data-reveal="up">
                <Label>How it works</Label>
                <h2 className={`${h2} mt-5`}>Join Our Team</h2>
              </div>
              <p
                className="text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:col-start-8"
                data-reveal="up"
                style={i(1)}
              >
                Start your journey with AAA Advantage Home Care. Let us guide
                you through how to join our elderly companion care and living
                assistance services.
              </p>
            </div>

            <div className="relative mt-16 lg:mt-20" data-reveal="none">
              <div
                aria-hidden
                className="med-line absolute left-7 right-[20%] top-7 hidden h-px bg-navy/25 lg:block"
              />
              <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {steps.map((s, n) => (
                  <li key={s.title} className="relative">
                    <span
                      className="med-dot font-display relative grid size-14 place-items-center rounded-full border border-navy/15 bg-white text-[1.7rem] font-medium text-cobalt shadow-[0_10px_24px_-14px_rgba(11,37,64,0.5)]"
                      style={i(n)}
                    >
                      {n + 1}
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-normal">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-ink">
                      {s.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-14" data-reveal="up">
              <a {...formLink} className="med-btn med-btn-primary">
                Start Getting Paid
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* ═════════ Services ═════════ */}
        <section id="services" className="py-24 lg:py-32">
          <div className={wrap}>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-6" data-reveal="up">
                <Label>Services</Label>
                <h2 className={`${h2} mt-5`}>Our Home Care Services</h2>
              </div>
              <p
                className="text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:col-start-8"
                data-reveal="up"
                style={i(1)}
              >
                Join or hire our AAA Advantage home care services in Michigan,
                Missouri, and South Dakota. We can train you to provide reliable
                home care to your loved ones or connect you to one of our
                trained caregivers.
              </p>
            </div>

            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, n) => (
                <li key={s.title} data-reveal="up" style={i(n % 3)}>
                  <Link
                    href={s.href}
                    className="med-card group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-3"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-sand">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                      <h3 className="font-display text-[1.6rem] font-normal leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-slate-ink">
                        {s.text}
                      </p>
                      <span className="mt-auto flex items-center justify-between gap-4 pt-7 text-[15px] font-semibold text-cobalt">
                        Learn more
                        <ArrowCircle />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ Care That Fits Your Life ═════════ */}
        <section id="benefits">
          <div className="pb-24 lg:pb-32">
            <div
              className={`${wrap} grid items-center gap-12 lg:grid-cols-12 lg:gap-20`}
            >
              <div className="lg:col-span-6">
                <div data-reveal="none">
                  <div
                    style={{ "--r": "2rem" } as React.CSSProperties}
                    className="med-clip relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand"
                  >
                    <Image
                      src={careCopy.fits.image}
                      alt={careCopy.fits.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6" data-reveal="up" style={i(1)}>
                <Label>Our approach</Label>
                <h2 className={`${h2} mt-5`}>{careCopy.fits.heading}</h2>
                <p className="font-display mt-8 text-[1.55rem] font-light leading-snug">
                  {careCopy.fits.paragraphs[0]}
                </p>
                <div className="mt-6 space-y-5 leading-relaxed text-slate-ink">
                  {careCopy.fits.paragraphs.slice(1).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Caregiver Benefits */}
          <div className={`${panel} bg-navy py-20 text-white lg:py-28`}>
            <div
              className={`${wrap} grid items-center gap-12 lg:grid-cols-12 lg:gap-20`}
            >
              <div className="lg:order-2 lg:col-span-6">
                <div data-reveal="none">
                  <div
                    style={{ "--r": "2rem" } as React.CSSProperties}
                    className="med-clip relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-navy-deep"
                  >
                    <Image
                      src={careCopy.benefits.image}
                      alt={careCopy.benefits.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:order-1 lg:col-span-6">
                <div data-reveal="up">
                  <Label light>Caregiver benefits</Label>
                  <h2 className={`${h2} mt-5`}>{careCopy.benefits.heading}</h2>
                  <p className="font-display mt-8 text-[1.55rem] font-light leading-snug text-white/95">
                    {careCopy.benefits.paragraphs[0]}
                  </p>
                  <p className="mt-6 leading-relaxed text-white/70">
                    {careCopy.benefits.paragraphs[1]}
                  </p>
                </div>
                <ul
                  data-reveal="none"
                  className="mt-10 grid gap-3 sm:grid-cols-2"
                >
                  {careCopy.benefits.perks.map((perk, n) => (
                    <li
                      key={perk}
                      className="flex items-center gap-3.5 rounded-full border border-white/15 bg-white/[0.04] py-3 pl-3.5 pr-5 text-[15px] font-medium transition-colors duration-200 hover:bg-white/10"
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-apricot text-navy">
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          aria-hidden
                          className="med-check"
                          style={i(n)}
                        />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Testimonials ═════════ */}
        <section id="stories" className="py-24 lg:py-32">
          <div className={wrap}>
            <div className="max-w-2xl" data-reveal="up">
              <Label>Stories</Label>
              <h2 className={`${h2} mt-5`}>What families and caregivers say</h2>
            </div>

            <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, n) => {
                const [who, ...role] = t.name.split(",");
                const featured = n === 0;
                return (
                  <li
                    key={t.title}
                    data-reveal="up"
                    style={i(n % 3)}
                    className={
                      featured
                        ? "md:col-span-2 lg:col-span-1 lg:row-span-2"
                        : ""
                    }
                  >
                    <figure
                      className={`med-card relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 ${
                        featured
                          ? "border-cobalt bg-cobalt text-white lg:p-10"
                          : "border-navy/10 bg-white"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`font-display pointer-events-none absolute right-6 top-3 text-[8rem] font-light leading-none ${
                          featured ? "text-white/15" : "text-cobalt/10"
                        }`}
                      >
                        &rdquo;
                      </span>
                      <h3
                        className={`font-display relative pr-10 leading-tight ${
                          featured
                            ? "text-[2.1rem] font-light"
                            : "text-[1.55rem] font-normal"
                        }`}
                      >
                        {t.title}
                      </h3>
                      <blockquote
                        className={`relative mt-5 leading-relaxed ${
                          featured
                            ? "text-[17px] text-white/85"
                            : "text-slate-ink"
                        }`}
                      >
                        {t.text}
                      </blockquote>
                      <figcaption className="relative mt-auto flex items-center gap-3.5 pt-8">
                        <span
                          aria-hidden
                          className={`grid size-11 shrink-0 place-items-center rounded-full font-display text-lg font-medium ${
                            featured ? "bg-white/15" : "bg-sand text-navy"
                          }`}
                        >
                          {who.trim().charAt(0)}
                        </span>
                        <span className="text-sm leading-snug">
                          <span className="block font-semibold">
                            {who}
                            {role.length > 0 && (
                              <span
                                className={`font-normal ${
                                  featured ? "text-white/75" : "text-slate-ink"
                                }`}
                              >
                                , {role.join(",").trim()}
                              </span>
                            )}
                          </span>
                          <span
                            className={
                              featured ? "text-white/60" : "text-slate-ink/80"
                            }
                          >
                            {t.date}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ═════════ Blog ═════════ */}
        <section id="blog" className="pb-24 lg:pb-32">
          <div className={wrap}>
            <div
              className="flex items-end justify-between gap-6"
              data-reveal="up"
            >
              <div>
                <Label>Latest</Label>
                <h2 className={`${h2} mt-5`}>Blog</h2>
              </div>
              <div className="hidden sm:block">
                <Link href="/blog" className="med-btn med-btn-ghost">
                  All articles
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                </Link>
              </div>
            </div>

            <div className="mt-12" data-reveal="up" style={i(1)}>
              <Link
                href={blogPost.href}
                className="med-card group grid items-center gap-8 rounded-3xl border border-navy/10 bg-white p-3 md:grid-cols-12 md:gap-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand md:col-span-6">
                  <Image
                    src={blogPost.image}
                    alt={blogPost.alt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-3 pb-4 md:col-span-6 md:pb-0 md:pr-10">
                  <time className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cobalt">
                    {blogPost.date}
                  </time>
                  <h3 className="font-display mt-4 text-[clamp(1.9rem,3.2vw,2.7rem)] font-light leading-[1.1]">
                    {blogPost.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-slate-ink">
                    {blogPost.excerpt}
                  </p>
                  <span className="mt-8 flex items-center justify-between gap-4 text-[15px] font-semibold text-cobalt">
                    Read the guide
                    <ArrowCircle />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════ FAQ ═════════ */}
        <section id="faq" className="pb-24 lg:pb-32">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-4" data-reveal="up">
              <div className="lg:sticky lg:top-36">
                <Label>FAQ</Label>
                <h2 className={`${h2} mt-5`}>Frequently asked questions</h2>
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
