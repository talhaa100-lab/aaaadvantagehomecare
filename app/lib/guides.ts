// Long-form "Guides" (Brevy-style explainer pages). Content lives in
// ./guide-content/*.ts so adding a guide = adding one file and listing it below.
//
// Writing rules for every guide:
//  - Only cite government / official program sources (state agencies, CMS, DOL, eCFR, state code).
//  - Every number, rule or limit must be traceable to a numbered source on that guide.
//  - Inline markup inside any text string:
//      **bold**        -> bold
//      {1} or {1,3}    -> superscript citation(s) pointing at sources[1], sources[3]

import { overview } from "./guide-content/overview";
import { michigan } from "./guide-content/michigan";
import { indiana } from "./guide-content/indiana";
import { missouri } from "./guide-content/missouri";
import { arizona } from "./guide-content/arizona";
import { southDakota } from "./guide-content/south-dakota";

export type Source = {
  /** Publishing body, e.g. "Michigan Department of Health and Human Services" */
  org: string;
  title: string;
  url: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string; tone?: "info" | "warn" };

export type GuideSection = { id: string; title: string; blocks: Block[] };

export type Guide = {
  slug: string;
  title: string;
  /** <title> / search result headline */
  metaTitle: string;
  /** Meta description and card blurb */
  description: string;
  /** "Overview" or a state name */
  category: string;
  /** Matching /locations/[slug], used to cross-link the state page */
  locationSlug?: string;
  /** ISO dates */
  published: string;
  verified: string;
  /** "At a glance" panel */
  facts: { label: string; value: string }[];
  /** Opening paragraph under the title */
  intro: string;
  takeaways: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Cited as {1}, {2}... in order */
  sources: Source[];
  /** Slugs of related guides */
  related: string[];
};

/** Date every source in this batch was last opened and checked. */
export const RETRIEVED = "Nov 9, 2026";

export const guides: Guide[] = [overview, michigan, indiana, missouri, arizona, southDakota];

export function getGuides() {
  return guides;
}

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

/** Reading time from every visible string in the guide (about 220 words a minute). */
export function readingMinutes(g: Guide) {
  const text: string[] = [g.intro, ...g.takeaways];
  for (const s of g.sections) {
    text.push(s.title);
    for (const b of s.blocks) {
      if (b.type === "p") text.push(b.text);
      if (b.type === "ul") text.push(...b.items);
      if (b.type === "steps") b.items.forEach((x) => text.push(x.title, x.text));
      if (b.type === "table") text.push(...b.head, ...b.rows.flat());
      if (b.type === "callout") text.push(b.title, b.text);
    }
  }
  g.faqs.forEach((f) => text.push(f.q, f.a));
  const words = text.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 220));
}
