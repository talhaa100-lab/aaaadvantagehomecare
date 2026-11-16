import type { MetadataRoute } from "next";
import { site } from "./lib/content";
import { getPosts } from "./lib/blog";
import { getGuides } from "./lib/guides";
import { jobs } from "./lib/jobs";
import { locationPages } from "./lib/locations";
import { servicePages } from "./lib/services";
import { cities, cityPath } from "./lib/cities";
import { howTos, programs } from "./lib/programs";

type Entry = MetadataRoute.Sitemap[number];

const url = (path: string) => `${site.url}${path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: Entry[] = [
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/locations"), changeFrequency: "monthly", priority: 0.9 },
    ...locationPages.map((l) => ({
      url: url(`/locations/${l.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...cities.map((c) => ({
      url: url(cityPath(c)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: url("/services"), changeFrequency: "monthly", priority: 0.9 },
    ...servicePages.map((s) => ({
      url: url(`/services/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...programs.map((p) => ({
      url: url(`/programs/${p.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...howTos.map((h) => ({
      url: url(`/how-to-get-paid/${h.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: url("/michigan-landing"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/south-dakota-landing"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/guides"), changeFrequency: "weekly", priority: 0.8 },
    ...getGuides().map((g) => ({
      url: url(`/guides/${g.slug}`),
      lastModified: g.verified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: url("/blog"), changeFrequency: "weekly", priority: 0.6 },
    { url: url("/careers"), changeFrequency: "daily", priority: 0.6 },
    ...jobs.map((j) => ({
      url: url(`/careers/${j.slug}`),
      lastModified: j.date,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
    { url: url("/about-us"), changeFrequency: "yearly", priority: 0.5 },
    { url: url("/contact-us"), changeFrequency: "yearly", priority: 0.5 },
    { url: url("/privacy-policy"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/terms-and-conditions"), changeFrequency: "yearly", priority: 0.2 },
  ];

  // Blog posts live in Sanity. If Sanity is unreachable, still ship a valid sitemap.
  try {
    const posts = await getPosts();
    entries.push(
      ...posts.map((p) => ({
        url: url(`/blog/${p.slug}`),
        lastModified: p.date,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    );
  } catch {
    // skip blog entries
  }

  return entries;
}
