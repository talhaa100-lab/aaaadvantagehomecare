import { createClient } from "@sanity/client";
import { toHTML, uriLooksSafe } from "@portabletext/to-html";
import { cacheLife, cacheTag } from "next/cache";

// Blog posts the client writes in Sanity Studio (see /studio).
// Read-only, public dataset: no token needed, drafts are never visible.
const client = createClient({
  projectId: "9iuyuzir",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

type Block = Parameters<typeof toHTML>[0];

export type SanityPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string | null;
  imageAlt: string;
  /** Article body as HTML (headings, lists, links, images) */
  html: string;
};

type SanityDoc = {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string | null;
  category: string | null;
  image: string | null;
  imageAlt: string | null;
  body: Block | null;
};

const QUERY = `*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  category,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "body": body[]{
    ...,
    _type == "image" => { ..., "url": asset->url }
  }
}`;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function bodyToHtml(body: Block | null) {
  if (!body) return "";
  return toHTML(body, {
    onMissingComponent: false,
    components: {
      types: {
        image: ({ value }: { value: { url?: string; alt?: string } }) =>
          value.url
            ? `<img src="${esc(value.url)}?w=1400&auto=format" alt="${esc(value.alt ?? "")}" loading="lazy" />`
            : "",
      },
      marks: {
        link: ({ children, value }) => {
          const href = value?.href ?? "";
          return uriLooksSafe(href) ? `<a href="${esc(href)}">${children}</a>` : children;
        },
      },
    },
  });
}

// Cached for a minute at a time: a post published in Sanity shows up on the site
// within ~1 minute, with no rebuild or redeploy.
async function fetchPosts(): Promise<SanityPost[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("sanity-posts");

  const docs = await client.fetch<SanityDoc[]>(QUERY);
  return docs.map((d) => ({
    slug: d.slug,
    date: d.publishedAt,
    title: d.title,
    excerpt: d.excerpt ?? "",
    category: d.category ?? "",
    image: d.image ? `${d.image}?w=1600&auto=format` : null,
    imageAlt: d.imageAlt ?? "",
    html: bodyToHtml(d.body),
  }));
}

/** Never throws: if Sanity is unreachable the site just shows the built-in posts. */
export async function getSanityPosts(): Promise<SanityPost[]> {
  try {
    return await fetchPosts();
  } catch (err) {
    console.error("[sanity] could not load blog posts:", err);
    return [];
  }
}
