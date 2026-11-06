// Blog posts come from Sanity Studio (see app/lib/sanity.ts) and are prepared for display here.
import { getSanityPosts, type SanityPost } from "./sanity";

type PostSource = SanityPost & { metaTitle?: string | null };

export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  image: string | null;
  imageAlt: string;
  category: string;
  /** Original article markup, cleaned (no WP classes, h2s get ids) */
  html: string;
  toc: { id: string; text: string }[];
  minutes: number;
};

function decode(s: string) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ");
}

const text = (h: string) => decode(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function prepare(p: PostSource): Post {
  const toc: Post["toc"] = [];
  const used = new Set<string>();

  const html = p.html
    .replace(/\s+class="[^"]*"/g, "")
    .replace(/\n{2,}/g, "\n")
    .replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
      const label = text(inner);
      let id = slugify(label) || "section";
      while (used.has(id)) id += "-2";
      used.add(id);
      toc.push({ id, text: label });
      return `<h2 id="${id}">${inner}</h2>`;
    })
    // External links open in a new tab; mailto/tel stay as-is.
    .replace(/<a href="(https?:\/\/(?!aaaadvantagehomecare\.com)[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"')
    // Internal absolute links -> relative
    .replace(/<a href="https?:\/\/aaaadvantagehomecare\.com\/?"/g, '<a href="/"');

  const words = text(html).split(" ").length;

  return {
    slug: p.slug,
    date: p.date,
    title: p.title,
    excerpt: text(p.excerpt),
    metaTitle: p.metaTitle ?? `${p.title} - AAA Advantage Home Care`,
    image: p.image,
    imageAlt: p.imageAlt,
    category: p.category,
    html,
    toc,
    minutes: Math.max(1, Math.round(words / 220)),
  };
}

/** Posts published in Sanity, newest first. */
export async function getPosts(): Promise<Post[]> {
  return (await getSanityPosts()).map(prepare);
}

export async function getPost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug);
}
