import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
import { site } from "../../lib/content";
import { getPost, getPosts } from "../../lib/blog";
import { MedHeader } from "../../components/MedHeader";
import { MedFooter } from "../../components/MedFooter";
import { ContactSection } from "../../components/ContactSection";
import { ScrollReveal } from "../../components/ScrollReveal";
import { i, Label, utcNoon, wrap } from "../../components/ui";

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.excerpt,
    openGraph: post.image ? { images: [post.image] } : undefined,
  };
}

// Cache Components: reading `params` must sit under a <Suspense> boundary.
// Known slugs are prerendered; posts published later render on first visit.
export default function PostPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <PostContent params={params} />
    </Suspense>
  );
}

const date = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });

// Styles for the original article markup (p, h2, ul, ol, li, a).
const prose = [
  "text-[1.1rem] leading-[1.8] text-ink",
  "[&_p]:mt-6",
  "[&_h2]:font-display [&_h2]:mt-16 [&_h2]:scroll-mt-32 [&_h2]:text-[clamp(1.8rem,2.8vw,2.4rem)] [&_h2]:font-normal [&_h2]:leading-[1.15] [&_h2]:text-navy [&_h2]:text-balance",
  "[&_h2+p]:mt-5",
  "[&_img]:mt-10 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-2xl",
  "[&_a]:font-medium [&_a]:text-cobalt [&_a]:underline [&_a]:decoration-cobalt/30 [&_a]:underline-offset-4 [&_a]:transition-[text-decoration-color] [&_a]:duration-150 hover:[&_a]:decoration-cobalt",
  "[&_ul]:mt-6 [&_ul]:space-y-3",
  "[&_ul>li]:relative [&_ul>li]:pl-7 [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.8em] [&_ul>li]:before:size-2 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-apricot",
  "[&_ol]:mt-6 [&_ol]:list-decimal [&_ol]:space-y-4 [&_ol]:pl-6 [&_ol>li]:pl-2 [&_ol>li]:marker:font-semibold [&_ol>li]:marker:text-cobalt",
].join(" ");

async function PostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        <header className={`${wrap} pb-10 pt-6 lg:pb-14 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li>
                <Link href="/blog" className="med-sweep">
                  Blog
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <div
              className="med-in flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em]"
              style={i(1)}
            >
              {post.category && (
                <span className="rounded-full bg-sky px-3.5 py-1.5 text-cobalt">
                  {post.category}
                </span>
              )}
              <time dateTime={post.date} className="text-slate-ink">
                {date.format(utcNoon(post.date))}
              </time>
              <span aria-hidden className="size-1 rounded-full bg-slate-ink/40" />
              <span className="text-slate-ink">{post.minutes} min read</span>
            </div>
            <h1
              className="med-in font-display mt-7 text-[clamp(2.6rem,6vw,5rem)] font-light leading-[1.05] text-balance"
              style={i(2)}
            >
              {post.title}
            </h1>
            <p
              className="med-in mx-auto mt-7 max-w-2xl text-[1.2rem] leading-relaxed text-slate-ink"
              style={i(3)}
            >
              {post.excerpt}
            </p>
          </div>
        </header>

        {post.image && (
          <div className={`${wrap} med-in`} style={i(4)}>
            <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(min-width: 1200px) 1100px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <section className="py-16 lg:py-24">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
            {/* Sticky contents */}
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="lg:sticky lg:top-32">
                <Label>In this guide</Label>
                <ol className="mt-6 space-y-1 border-l border-navy/15">
                  {post.toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-snug text-slate-ink transition-[color,border-color] duration-150 hover:border-cobalt hover:text-navy"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
                <a
                  href={site.phoneHref}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] duration-200 ease-out hover:bg-cobalt active:scale-[0.98]"
                >
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                  {site.phone}
                </a>
              </div>
            </aside>

            <article className="lg:col-span-8 lg:col-start-5 xl:col-span-7">
              <div className={prose} dangerouslySetInnerHTML={{ __html: post.html }} />
              <Link
                href="/blog"
                className="med-sweep mt-16 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt"
              >
                <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
                Back to blog
              </Link>
            </article>
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}

