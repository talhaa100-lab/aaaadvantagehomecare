import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getPosts } from "../lib/blog";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactSection } from "../components/ContactSection";
import { ScrollReveal } from "../components/ScrollReveal";
import { i, utcNoon, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: "AAA Advantage Home Care Agency Blog | Care Tips and Guides",
  description:
    "Read AAA Advantage Home Care Agency’s blog to stay updated. Learn helpful home care tips, caregiving guides, senior care advice, and resources for families.",
};

const date = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

export default async function BlogPage() {
  const [featured, ...rest] = await getPosts();

  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        {/* Masthead — editorial, left-aligned with a giant serif word */}
        <section className={`${wrap} pb-14 pt-6 lg:pb-20 lg:pt-8`}>
          <nav
            aria-label="Breadcrumb"
            className="med-in text-[13px] text-slate-ink"
            style={i(0)}
          >
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                Blog
              </li>
            </ol>
          </nav>

          <div className="mt-14 grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
            <h1
              className="med-in font-display text-[clamp(4.5rem,13vw,10.5rem)] font-light leading-[0.9] tracking-[-0.02em] lg:col-span-7"
              style={i(1)}
            >
              Blog
              <span className="text-apricot">.</span>
            </h1>
            <p
              className="med-in max-w-md text-[1.2rem] leading-relaxed lg:col-span-5 lg:pb-4"
              style={i(2)}
            >
              Stay updated with helpful caregiving and home care advice, tips,
              and guides for families
            </p>
          </div>
        </section>

        {/* Featured story */}
        <section className="pb-24 lg:pb-32">
          <div className={wrap}>
            {!featured && (
              <p className="text-[1.15rem] text-slate-ink">
                New articles are coming soon. Check back shortly.
              </p>
            )}
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="med-card group grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-12"
                data-reveal="up"
              >
                <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[30rem]">
                  {featured.image && (
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt || featured.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 700px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-10 p-8 sm:p-12 lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em]">
                    {featured.category && (
                      <span className="rounded-full bg-sky px-3.5 py-1.5 text-cobalt">
                        {featured.category}
                      </span>
                    )}
                    <time dateTime={featured.date} className="text-slate-ink">
                      {date.format(utcNoon(featured.date))}
                    </time>
                  </div>
                  <div>
                    <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.4rem)] font-light leading-[1.08] text-balance">
                      {featured.title}
                    </h2>
                    <p className="mt-6 text-[1.05rem] leading-relaxed text-slate-ink">
                      {featured.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt">
                    <span className="med-sweep">Read more</span>
                    <ArrowRight
                      size={18}
                      strokeWidth={1.75}
                      aria-hidden
                      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p, n) => (
                  <li key={p.slug} data-reveal="up" style={i(n)}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="med-card group flex h-full flex-col overflow-hidden rounded-3xl bg-white"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                        {p.image && (
                          <Image
                            src={p.image}
                            alt={p.imageAlt || p.title}
                            fill
                            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex flex-wrap items-center gap-3 text-[13px]">
                          {p.category && (
                            <span className="rounded-full bg-sky px-3 py-1 font-semibold uppercase tracking-[0.14em] text-cobalt">
                              {p.category}
                            </span>
                          )}
                          <time dateTime={p.date} className="text-slate-ink">
                            {date.format(utcNoon(p.date))}
                          </time>
                        </div>
                        <h3 className="font-display mt-4 text-[1.6rem] font-normal leading-snug">
                          {p.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-slate-ink">{p.excerpt}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-semibold text-cobalt">
                          <span className="med-sweep">Read more</span>
                          <ArrowRight
                            size={18}
                            strokeWidth={1.75}
                            aria-hidden
                            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <ContactSection />
      </main>
      <MedFooter />
    </>
  );
}
