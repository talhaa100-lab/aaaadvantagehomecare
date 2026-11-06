import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { site, steps } from "../lib/content";
import { jobSummaries } from "../lib/jobs";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactSection } from "../components/ContactSection";
import { JobSearch } from "../components/JobSearch";
import { ScrollReveal } from "../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: "AAA Advantage Home Care Agency Careers | Open Positions",
  description:
    "Explore career opportunities at AAA Advantage Home Care Agency. View open positions and join our compassionate team dedicated to providing quality home care.",
};

// Role categories from the live careers page filter.
const roles = ["Caregiver", "CNA (Certified Nursing Assistant)", "Homemaker", "PCA (Personal Care Aide)"];

const arches = [
  {
    src: "/images/Adult-companion-care-at-home.webp",
    alt: "Two older adults playing chess together on a sofa at home",
    className: "mt-12 aspect-[3/4]",
  },
  {
    src: "/images/woman-taking-care-old-man.webp",
    alt: "A caregiver gently combing an older man's hair",
    className: "aspect-[3/4.4]",
  },
  {
    src: "/images/Respite.webp",
    alt: "A woman kneeling beside an older woman in a wheelchair holding a red rose",
    className: "mt-12 aspect-[3/4]",
  },
];

export default function CareersPage() {
  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* ═════════ Hero — centered, arch trio ═════════ */}
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
                <li aria-current="page" className="font-medium text-navy">
                  Careers
                </li>
              </ol>
            </nav>

            <div className="mx-auto mt-12 max-w-3xl text-center">
              <p
                className="med-in text-[12px] font-semibold uppercase tracking-[0.24em] text-cobalt"
                style={i(1)}
              >
                AAA Advantage Home Care Agency
              </p>
              <h1
                className="med-in font-display mt-6 text-[clamp(3rem,6.4vw,5.6rem)] font-light leading-[1.02]"
                style={i(2)}
              >
                Our{" "}
                <span className="relative inline-block pb-3 font-normal italic text-cobalt">
                  Careers
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
              <p
                className="med-in mx-auto mt-8 max-w-2xl text-[1.15rem] leading-relaxed"
                style={i(3)}
              >
                Become part of our compassionate and reliable caregiver community. We help
                eligible family caregivers enroll in applicable programs, provide training and
                guidance to support their loved ones, and receive appropriate compensation for
                their caregiving.
              </p>
              <div
                className="med-in mt-10 flex flex-wrap items-center justify-center gap-3"
                style={i(4)}
              >
                <a href="#jobs" className="med-btn med-btn-primary">
                  Explore Caregiver Job Opportunities
                  <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                </a>
                <a href={site.phoneHref} className="med-btn med-btn-ghost">
                  {site.phone}
                </a>
              </div>
            </div>

            <ul
              className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6"
              aria-hidden={false}
            >
              {arches.map((a, n) => (
                <li
                  key={a.src}
                  className={`med-pop ${a.className}`}
                  style={{ "--d": `${500 + n * 140}ms` } as React.CSSProperties}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[1.5rem] bg-sand">
                    <Image
                      src={a.src}
                      alt={a.alt}
                      fill
                      priority={n === 1}
                      sizes="(min-width: 768px) 240px, 33vw"
                      className="object-cover"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <ul
              className="med-in mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-2.5"
              style={i(6)}
              aria-label="Roles"
            >
              {roles.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-navy/15 bg-white/70 px-4 py-2 text-[14px] font-medium backdrop-blur"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ Job search ═════════ */}
        <section id="jobs" className={`${panel} scroll-mt-28 bg-navy py-20 text-white lg:py-28`}>
          <div className={wrap}>
            <div className="max-w-2xl" data-reveal="up">
              <Label light>Open positions</Label>
              <h2 className={`${h2} mt-5`}>Explore Caregiver Job Opportunities</h2>
            </div>
            {/* No scroll-reveal here: the list is tall and changes height while filtering. */}
            <div className="mt-12">
              <JobSearch jobs={jobSummaries} />
            </div>
          </div>
        </section>

        {/* ═════════ Getting started — bento ═════════ */}
        <section className="py-24 lg:py-32">
          <div className={wrap}>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-6" data-reveal="up">
                <Label>Getting started</Label>
                <h2 className={`${h2} mt-5`}>How to join our caregiver community</h2>
              </div>
              <p
                className="text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:col-start-8"
                data-reveal="up"
                style={i(1)}
              >
                We guide you through the enrollment process and provide the support you need
                along the way.
              </p>
            </div>

            <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, n) => (
                <li key={s.title} data-reveal="up" style={i(n)}>
                  <div
                    className={`med-card flex h-full flex-col rounded-3xl p-7 ${
                      n % 2 === 0 ? "bg-white" : "bg-sky"
                    } ${n % 2 === 0 ? "border border-navy/10" : ""}`}
                  >
                    <span className="font-display text-[3.4rem] font-light italic leading-none text-cobalt/70">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-10 text-[1.6rem] font-normal leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-ink">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
