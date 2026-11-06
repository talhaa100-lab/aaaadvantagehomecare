// Job listings pulled verbatim from aaaadvantagehomecare.com (scripts/build-jobs.py).
import raw from "./jobs.json";

export type JobFull = {
  slug: string;
  title: string;
  location: string;
  company: string;
  /** ISO date (site-local time) */
  date: string;
  type: string;
  category: string;
  apply: string;
  featured: boolean;
  /** Original description markup (p, strong, br, h3, ul, li only) */
  html: string;
};

/** Light version for the client-side search list (no description). */
export type JobSummary = Omit<JobFull, "html" | "apply" | "featured">;

export const jobs = raw as JobFull[];

export const jobSummaries: JobSummary[] = jobs.map((j) => ({
  slug: j.slug,
  title: j.title,
  location: j.location,
  company: j.company,
  date: j.date,
  type: j.type,
  category: j.category,
}));

export function getJob(slug: string) {
  return jobs.find((j) => j.slug === slug);
}

function decode(s: string) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ");
}

/** Plain-text meta description from the first paragraph. */
export function jobDescription(job: JobFull) {
  const first = job.html.match(/<p>([\s\S]*?)<\/p>/)?.[1] ?? "";
  const text = decode(first.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  return text.length > 158 ? `${text.slice(0, 155).trimEnd()}…` : text;
}
