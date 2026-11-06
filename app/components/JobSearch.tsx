"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Search, X } from "lucide-react";
import { formLink, site } from "../lib/content";
import type { JobSummary } from "../lib/jobs";

// Same filters as the live careers page.
const categories = [
  "Caregiver",
  "CNA (Certified Nursing Assistant)",
  "Homemaker",
  "PCA (Personal Care Aide)",
];
const jobTypes = ["Freelance", "Full Time", "Internship", "Part Time", "Temporary"];
const PAGE_SIZE = 10;

const field =
  "w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5 text-[15px] text-white placeholder:text-white/45 outline-none transition-[border-color,background-color] duration-200 ease-out focus:border-apricot focus:bg-white/10";

/** Whole days since epoch; 0 on the server so the relative label fills in after hydration. */
function useToday() {
  return useSyncExternalStore(
    () => () => {},
    () => Math.floor(Date.now() / 86_400_000),
    () => 0,
  );
}

function postedAgo(iso: string, today: number) {
  if (!today) return "";
  const days = today - Math.floor(new Date(iso).getTime() / 86_400_000);
  const unit = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"} ago`;
  if (days < 1) return "Posted today";
  if (days < 7) return `Posted ${unit(days, "day")}`;
  // Rounded like WordPress's "X months ago" so it matches the original site.
  if (days < 30) return `Posted ${unit(Math.round(days / 7), "week")}`;
  if (days < 365) return `Posted ${unit(Math.round(days / 30), "month")}`;
  return `Posted ${unit(Math.round(days / 365), "year")}`;
}

export function JobSearch({ jobs = [] }: { jobs?: JobSummary[] }) {
  const today = useToday();
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [types, setTypes] = useState<string[]>(jobTypes);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const kw = keywords.trim().toLowerCase();
  const loc = location.trim().toLowerCase();
  const results = jobs.filter(
    (j) =>
      (!kw || `${j.title} ${j.company}`.toLowerCase().includes(kw)) &&
      (!loc || j.location.toLowerCase().includes(loc)) &&
      (!category || j.category === category) &&
      types.includes(j.type),
  );
  const shown = results.slice(0, visible);

  const dirty =
    keywords !== "" || location !== "" || category !== "" || types.length !== jobTypes.length;

  const reset = () => {
    setKeywords("");
    setLocation("");
    setCategory("");
    setTypes(jobTypes);
    setVisible(PAGE_SIZE);
  };

  // Any filter change returns to the first page of results.
  const on =
    <T,>(set: (v: T) => void) =>
    (v: T) => {
      set(v);
      setVisible(PAGE_SIZE);
    };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-3 md:grid-cols-12"
        aria-label="Search caregiver jobs"
      >
        <div className="md:col-span-4">
          <label htmlFor="search_keywords" className="sr-only">
            Keywords
          </label>
          <input
            id="search_keywords"
            type="text"
            value={keywords}
            onChange={(e) => on(setKeywords)(e.target.value)}
            placeholder="Keywords"
            className={field}
          />
        </div>
        <div className="md:col-span-3">
          <label htmlFor="search_location" className="sr-only">
            Location
          </label>
          <input
            id="search_location"
            type="text"
            value={location}
            onChange={(e) => on(setLocation)(e.target.value)}
            placeholder="Location"
            className={field}
          />
        </div>
        <div className="relative md:col-span-3">
          <ChevronDown
            size={18}
            strokeWidth={1.75}
            aria-hidden
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/60"
          />
          <label htmlFor="search_categories" className="sr-only">
            Category
          </label>
          <select
            id="search_categories"
            value={category}
            onChange={(e) => on(setCategory)(e.target.value)}
            className={`${field} appearance-none pr-12`}
          >
            <option value="" className="text-navy">
              Any category
            </option>
            {categories.map((c) => (
              <option key={c} value={c} className="text-navy">
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="med-btn med-btn-light w-full">
            <Search size={17} strokeWidth={1.75} aria-hidden />
            Search Jobs
          </button>
        </div>

        <fieldset className="md:col-span-12">
          <legend className="sr-only">Job type</legend>
          <ul className="mt-2 flex flex-wrap gap-2.5">
            {jobTypes.map((t) => (
              <li key={t}>
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    checked={types.includes(t)}
                    onChange={(e) => {
                      setTypes((prev) =>
                        e.target.checked ? [...prev, t] : prev.filter((x) => x !== t),
                      );
                      setVisible(PAGE_SIZE);
                    }}
                    className="peer sr-only"
                  />
                  <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium text-white/60 transition-[background-color,color,border-color,transform] duration-200 ease-out active:scale-[0.97] peer-checked:border-apricot peer-checked:bg-apricot peer-checked:text-navy peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white">
                    {t}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>

      {/* Results */}
      <div className="mt-10 rounded-3xl bg-white p-5 text-navy sm:p-8" aria-live="polite">
        <div className="flex flex-wrap items-center justify-between gap-3 px-1">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-cobalt">
            {results.length} open listing{results.length === 1 ? "" : "s"}
          </p>
          {dirty && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold text-slate-ink transition-colors duration-150 hover:bg-sky hover:text-navy"
            >
              <X size={14} strokeWidth={2} aria-hidden />
              Reset
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className="mt-6 grid items-center gap-8 px-1 pb-2 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-display text-[1.7rem] font-light leading-snug">
                There are no listings matching your search.
              </p>
              <p className="mt-3 leading-relaxed text-slate-ink">
                Try a different city or category, or talk to our care team about enrollment,
                training and compensation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
              <a {...formLink} className="med-btn med-btn-primary">
                Start Getting Paid
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
              <a href={site.phoneHref} className="med-btn med-btn-ghost">
                {site.phone}
              </a>
            </div>
          </div>
        ) : (
          <>
            <ul className="mt-4 divide-y divide-navy/10">
              {shown.map((j) => (
                <li
                  key={j.slug}
                  className="group relative grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 rounded-2xl px-2 py-4 transition-colors duration-150 hover:bg-sky/60 lg:grid-cols-[auto_1fr_minmax(0,14rem)_auto] sm:px-3"
                >
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-sky">
                    <Image
                      src="/images/job-logo.png"
                      alt=""
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-semibold leading-snug text-cobalt">
                      <Link
                        href={`/careers/${j.slug}`}
                        className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                      >
                        {j.title}
                      </Link>
                    </h3>
                    <p className="mt-0.5 text-[14px] font-medium text-slate-ink">{j.company}</p>
                  </div>
                  <p className="col-start-2 inline-flex items-center gap-1.5 text-[14px] text-slate-ink lg:col-start-auto">
                    <MapPin size={14} strokeWidth={1.75} aria-hidden className="shrink-0" />
                    {j.location}
                  </p>
                  <div className="col-start-2 flex items-baseline gap-3 lg:col-start-auto lg:flex-col lg:items-end lg:gap-0 lg:text-right">
                    <span className="text-[14px] font-bold text-[#b8651a]">{j.type}</span>
                    <span className="min-h-[1lh] text-[13px] text-slate-ink">
                      {postedAgo(j.date, today)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {shown.length < results.length && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="med-btn med-btn-ghost"
                >
                  Load more listings
                  <ChevronDown size={18} strokeWidth={1.75} aria-hidden />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
