import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, CalendarDays, ChevronRight, MapPin, Phone } from "lucide-react";
import { site } from "../../lib/content";
import { getJob, jobDescription, jobs } from "../../lib/jobs";
import { MedHeader } from "../../components/MedHeader";
import { MedFooter } from "../../components/MedFooter";
import { ContactSection } from "../../components/ContactSection";
import { ScrollReveal } from "../../components/ScrollReveal";
import { i, Label, panel, utcNoon, wrap } from "../../components/ui";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: `${job.title} | AAA Advantage Home Care Agency`,
    description: jobDescription(job),
  };
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
// All slugs come from generateStaticParams, so each page is still prerendered.
export default function JobPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <JobContent params={params} />
    </Suspense>
  );
}

const posted = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

// Styles for the original description markup (p, strong, br, h3, ul, li).
const prose = [
  "text-[1.05rem] leading-[1.75] text-ink",
  "[&_p]:mt-5 [&_p:first-child]:mt-0",
  "[&_strong]:font-semibold [&_strong]:text-navy",
  "[&_h3]:font-display [&_h3]:mt-12 [&_h3]:text-[1.75rem] [&_h3]:font-normal [&_h3]:leading-tight [&_h3]:text-navy",
  "[&_ul]:mt-5 [&_ul]:space-y-3",
  "[&_li]:relative [&_li]:pl-7 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:size-2 [&_li]:before:rounded-full [&_li]:before:bg-apricot",
].join(" ");

async function JobContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const idx = jobs.findIndex((j) => j.slug === job.slug);
  const state = job.location.split(",").pop()?.trim();
  // Other openings in the same state first, then the rest.
  const more = jobs
    .filter((j) => j.slug !== job.slug)
    .sort(
      (a, b) =>
        Number(b.location.endsWith(`, ${state}`)) - Number(a.location.endsWith(`, ${state}`)) ||
        Math.abs(jobs.indexOf(a) - idx) - Math.abs(jobs.indexOf(b) - idx),
    )
    .slice(0, 3);

  const mailto = `mailto:${job.apply}?subject=${encodeURIComponent(`Application: ${job.title}`)}`;

  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* Header — compact "listing card" instead of a photo hero */}
        <section className={`${wrap} pb-10 pt-6 lg:pb-14 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li>
                <Link href="/careers" className="med-sweep">
                  Careers
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                {job.location}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-9">
              <div className="med-in flex items-center gap-4" style={i(1)}>
                <div className="relative size-14 overflow-hidden rounded-2xl bg-sky">
                  <Image
                    src="/images/job-logo.png"
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <p className="text-[15px] font-semibold">{job.company}</p>
              </div>
              <h1
                className="med-in font-display mt-6 text-[clamp(2.1rem,4.6vw,3.9rem)] font-light leading-[1.08] text-balance"
                style={i(2)}
              >
                {job.title}
              </h1>
              <ul
                className="med-in mt-8 flex flex-wrap gap-2.5 text-[14px] font-medium"
                style={i(3)}
              >
                <li className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2">
                  <MapPin size={15} strokeWidth={1.75} aria-hidden />
                  {job.location}
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2">
                  <Briefcase size={15} strokeWidth={1.75} aria-hidden />
                  {job.type}
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2">
                  {job.category}
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-sky px-4 py-2">
                  <CalendarDays size={15} strokeWidth={1.75} aria-hidden />
                  Posted {posted.format(utcNoon(job.date))}
                </li>
              </ul>
            </div>
            <div className="med-in flex flex-wrap gap-3 lg:col-span-3 lg:justify-end" style={i(4)}>
              <a href={mailto} className="med-btn med-btn-primary">
                Apply for job
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* Description + sticky apply card */}
        <section className="pb-24 lg:pb-32">
          <div className={`${wrap} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
            <article className="lg:col-span-8" data-reveal="up">
              <div className={prose} dangerouslySetInnerHTML={{ __html: job.html }} />
              <Link
                href="/careers#jobs"
                className="med-sweep mt-14 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt"
              >
                <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
                All open positions
              </Link>
            </article>

            <aside className="lg:col-span-4">
              <div className="space-y-4 lg:sticky lg:top-32" data-reveal="up" style={i(1)}>
                <div className="rounded-3xl bg-navy p-8 text-white">
                  <Label light>Interested?</Label>
                  <p className="font-display mt-5 text-[1.8rem] font-light leading-tight">
                    Get paid to care for your family.
                  </p>
                  <div className="mt-7 flex flex-col gap-3">
                    <a href={mailto} className="med-btn med-btn-light">
                      Apply for job
                      <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                    </a>
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold transition-[background-color,transform] duration-200 ease-out hover:bg-white/10 active:scale-[0.98]"
                    >
                      <Phone size={17} strokeWidth={1.75} aria-hidden />
                      {site.phone}
                    </a>
                  </div>
                  <p className="mt-5 text-[13px] text-white/60">{site.hours}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* More openings */}
        <section className={`${panel} bg-sky py-20 lg:py-24`}>
          <div className={wrap}>
            <div className="flex flex-wrap items-end justify-between gap-6" data-reveal="up">
              <div>
                <Label>More openings</Label>
                <h2 className="font-display mt-5 text-[clamp(2rem,3.6vw,3rem)] font-light leading-[1.08]">
                  Other caregiver jobs near you
                </h2>
              </div>
              <Link href="/careers#jobs" className="med-btn med-btn-ghost">
                View all
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </Link>
            </div>
            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {more.map((j, n) => (
                <li key={j.slug} data-reveal="up" style={i(n)}>
                  <Link
                    href={`/careers/${j.slug}`}
                    className="med-card group flex h-full flex-col rounded-3xl bg-white p-7"
                  >
                    <span className="text-[13px] font-bold text-[#b8651a]">{j.type}</span>
                    <h3 className="font-display mt-4 text-[1.4rem] font-normal leading-snug">
                      {j.title}
                    </h3>
                    <p className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[14px] text-slate-ink">
                      <MapPin size={14} strokeWidth={1.75} aria-hidden />
                      {j.location}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-3 sm:mt-5">
          <ContactSection />
        </div>
      </main>
      <MedFooter />
    </>
  );
}
