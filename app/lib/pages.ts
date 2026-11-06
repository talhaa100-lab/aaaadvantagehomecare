import data from "./pages.json";

// Copy for About / Terms / Privacy comes verbatim from the live site via scripts/build-pages.py.

type RawPage = { title: string; description: string; html: string };

export const aboutPage = data.about as RawPage & { images: { src: string; alt: string }[] };
export const contactPage = data.contact as RawPage;

/** Inner HTML of every <p>, in order. */
export function paragraphs(html: string) {
  return [...html.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1].trim()).filter(Boolean);
}

export type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  html: string;
  toc: { id: string; text: string }[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Prepare a legal page: drop the duplicate <h1> and the "Updated" line (shown in the page
 * header instead), give every <h2> an anchor id, and build the table of contents.
 */
function legalDoc(
  raw: RawPage,
  opts: { demoteH3?: boolean; skipToc?: number; title: string },
): LegalDoc {
  let html = raw.html.replace(/^<h1>[\s\S]*?<\/h1>/, "");

  const upd = html.match(/<p><strong>((?:Last )?Updated:\s*[^<]+)<\/strong><\/p>/i);
  const updated = upd ? upd[1].replace(/^(Last )?Updated:\s*/i, "").trim() : "";
  if (upd) html = html.replace(upd[0], "");

  // The source has one list entry stranded as a paragraph between two lists; rejoin it.
  html = html.replace(
    /<\/li><\/ul><p>(Monitoring and analyzing[^<]*)<\/p><ul><li>/,
    "</li><li>$1</li><li>",
  );

  if (opts.demoteH3) html = html.replace(/<(\/?)h3>/g, "<$1h2>");

  const toc: { id: string; text: string }[] = [];
  const seen = new Set<string>();
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    let id = slugify(inner) || "section";
    while (seen.has(id)) id += "-2";
    seen.add(id);
    toc.push({ id, text: inner.replace(/&amp;/g, "&") });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  return {
    title: opts.title,
    description: raw.description,
    updated,
    html,
    toc: toc.slice(opts.skipToc ?? 0),
  };
}

export const terms = legalDoc(data.terms as RawPage, { title: "Terms & Conditions", demoteH3: true });
export const privacy = legalDoc(data.privacy as RawPage, { title: "Privacy Policy", skipToc: 1 });
