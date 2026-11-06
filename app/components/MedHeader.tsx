"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { formLink, nav, site } from "../lib/content";
import { MedLogo } from "./MedLogo";

const items = nav.map((n) => (n.label === "Home" ? { ...n, href: "/" } : n));

export function MedHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility strip */}
      <div className="text-[13px] text-slate-ink">
        <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-6 px-6 py-2.5 lg:px-10">
          <p className="hidden sm:block">{site.hours}</p>
          <p className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
            <span className="hidden md:inline">{site.email}</span>
            <span aria-hidden className="hidden h-3 w-px bg-navy/20 md:inline" />
            <a href={site.phoneHref} className="med-sweep font-semibold text-navy">
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 px-3 pb-2 pt-1 sm:px-5">
        <div
          className={`mx-auto flex h-[68px] max-w-[80rem] items-center justify-between gap-6 rounded-full border bg-white/80 pl-5 pr-2.5 backdrop-blur-xl transition-[box-shadow,border-color,background-color] duration-300 ease-out lg:pl-7 ${
            scrolled
              ? "border-navy/10 bg-white/90 shadow-[0_18px_40px_-22px_rgba(11,37,64,0.45)]"
              : "border-navy/[0.07] shadow-[0_1px_0_rgba(11,37,64,0.02)]"
          }`}
        >
          <Link href="/" aria-label="AAA Advantage Home Care Agency, home">
            <MedLogo />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {items.map((item) => (
                <li key={item.label} className="group relative">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-haspopup="true"
                        className="med-link flex items-center gap-1 py-2 text-[15px] font-medium text-navy"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          strokeWidth={1.75}
                          aria-hidden
                          className="transition-transform duration-200 ease-out group-focus-within:rotate-180 group-hover:rotate-180"
                        />
                      </button>
                      <div className="med-menu absolute -left-4 top-full w-72 pt-4">
                        <ul className="rounded-2xl border border-navy/10 bg-white p-2 shadow-[0_24px_48px_-24px_rgba(11,37,64,0.4)]">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block rounded-xl px-4 py-2.5 text-[15px] transition-colors duration-150 hover:bg-sky"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={item.label === "Home" ? "page" : undefined}
                      className="med-link block py-2 text-[15px] font-medium text-navy"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <a {...formLink} className="med-btn med-btn-primary">
                Start Getting Paid
              </a>
            </div>
            <button
              type="button"
              className="grid size-12 place-items-center rounded-full transition-colors duration-150 hover:bg-sky active:scale-95 lg:hidden"
              aria-expanded={open}
              aria-controls="med-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="med-mobile-menu"
            className="mx-auto mt-2 max-h-[calc(100dvh-140px)] max-w-[80rem] origin-top overflow-y-auto rounded-3xl border border-navy/10 bg-white shadow-[0_24px_48px_-24px_rgba(11,37,64,0.4)] transition duration-200 ease-out starting:-translate-y-2 starting:scale-[0.98] starting:opacity-0 lg:hidden"
          >
            <ul className="px-6 py-2">
              {items.map((item) => (
                <li key={item.label} className="border-b border-navy/10 last:border-0">
                  {item.children ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-xl [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          aria-hidden
                          className="transition-transform duration-200 ease-out group-open:rotate-180"
                        />
                      </summary>
                      <ul className="pb-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2.5 pl-3 text-slate-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-xl"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="py-5">
                <a
                  {...formLink}
                  onClick={() => setOpen(false)}
                  className="med-btn med-btn-primary w-full"
                >
                  Start Getting Paid
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
