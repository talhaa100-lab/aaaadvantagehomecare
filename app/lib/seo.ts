// Structured-data builders (schema.org JSON-LD) used across the site.
import { site } from "./content";
import type { JobFull } from "./jobs";

const abs = (path: string) => `${site.url}${path}`;

const PHONE = "+1-314-970-3753";

/** The three offices listed in the site footer (same addresses as content.ts `locations`). */
const offices = [
  { id: "michigan", state: "Michigan", street: "24120 Meadowbrook Rd. #201-B", city: "Novi", region: "MI", zip: "48375" },
  { id: "missouri", state: "Missouri", street: "500 Market Street, Suite 302B", city: "Fulton", region: "MO", zip: "65251" },
  { id: "south-dakota", state: "South Dakota", street: "526 Saint Joseph Street, Suite 205", city: "Rapid City", region: "SD", zip: "57701" },
];

const SERVED_STATES = ["Michigan", "Missouri", "South Dakota", "Arizona", "Indiana"];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": abs("/#organization"),
        name: site.name,
        url: site.url,
        logo: abs("/icon.png"),
        telephone: PHONE,
        areaServed: SERVED_STATES.map((name) => ({ "@type": "State", name })),
      },
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        url: site.url,
        name: site.name,
        publisher: { "@id": abs("/#organization") },
      },
      ...offices.map((o) => ({
        "@type": "LocalBusiness",
        "@id": abs(`/#office-${o.id}`),
        name: `${site.name} (${o.state})`,
        url: abs(`/locations/${o.id}`),
        telephone: PHONE,
        image: abs("/icon.png"),
        address: {
          "@type": "PostalAddress",
          streetAddress: o.street,
          addressLocality: o.city,
          addressRegion: o.region,
          postalCode: o.zip,
          addressCountry: "US",
        },
        openingHours: "Mo-Fr 09:00-17:00",
        parentOrganization: { "@id": abs("/#organization") },
      })),
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, n) => ({
      "@type": "ListItem",
      position: n + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  // Some pages repeat a question; schema.org wants each Question once (first one wins).
  const seen = new Set<string>();
  const unique = faqs.filter((f) => (seen.has(f.q) ? false : (seen.add(f.q), true)));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: unique.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const EMPLOYMENT: Record<string, string> = {
  "Part Time": "PART_TIME",
  "Full Time": "FULL_TIME",
  Contract: "CONTRACTOR",
  Temporary: "TEMPORARY",
};

export function jobPostingJsonLd(job: JobFull) {
  const [city, region] = job.location.split(",").map((s) => s.trim());
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.html,
    datePosted: job.date.slice(0, 10),
    employmentType: EMPLOYMENT[job.type] ?? "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
      logo: abs("/icon.png"),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: region,
        addressCountry: "US",
      },
    },
    industry: "Home health care",
    occupationalCategory: job.category,
    url: abs(`/careers/${job.slug}`),
  };
}
