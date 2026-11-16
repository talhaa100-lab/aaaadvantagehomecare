"use client";

// Brevy-style guide library: instant search, topic + state filters, a box for every question.
// Motion notes (emil-design-eng):
//  - Typing / filtering never animates (used constantly). Only the dialog open/close does.
//  - Press feedback: scale on :active. Hover only on fine pointers. See .qa-* in globals.css.

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Search, X } from "lucide-react";
import {
  QUESTIONS,
  SOURCES,
  STATE_NAMES,
  TOPICS,
  stateOf,
  topicOf,
  type Qa,
  type StateCode,
  type Topic,
} from "../lib/guide-questions";

export type GuideCard = {
  slug: string;
  title: string;
  description: string;
  category: string;
  minutes: number;
  facts: { label: string; value: string }[];
};

const PAGE = 10;
const STATE_ORDER: StateCode[] = ["ALL", "MI", "MO", "AZ", "IN", "SD"];
const TRY = ["spouse", "tax", "CHAMPS", "hourly rate", "Medicare", "apply"];

// Search index is built once, outside React.
const INDEX = QUESTIONS.map((qa) => {
  const t = topicOf(qa.topic);
  const text = [qa.q, qa.a, ...qa.more, t.title, t.label, STATE_NAMES[stateOf(qa)]].join(" ").toLowerCase();
  return { qa, text };
});

const norm = (s: string) => s.toLowerCase().split(/\s+/).filter(Boolean);

const matchesState = (s: StateCode, pick: StateCode) => pick === "ALL" || s === "ALL" || s === pick;

export function GuideLibrary({ guides }: { guides: GuideCard[] }) {
  const [query, setQuery] = useState("");
  const [pickState, setPickState] = useState<StateCode>("ALL");
  const [pickTopic, setPickTopic] = useState<string | null>(null);
  // shownId stays set after close so content does not vanish during the exit transition.
  const [shownId, setShownId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const tokens = useMemo(() => norm(query), [query]);
  const filtering = tokens.length > 0 || pickState !== "ALL" || pickTopic !== null;

  const questions = useMemo(
    () =>
      INDEX.filter(({ qa, text }) => {
        if (pickTopic && qa.topic !== pickTopic) return false;
        if (!matchesState(stateOf(qa), pickState)) return false;
        return tokens.every((tk) => text.includes(tk));
      }).map((x) => x.qa),
    [tokens, pickState, pickTopic],
  );

  // Show 10 at a time. The count resets whenever the search or filters change.
  const filterKey = `${query.trim()}|${pickState}|${pickTopic ?? ""}`;
  const [pager, setPager] = useState({ key: filterKey, count: PAGE });
  const visibleCount = pager.key === filterKey ? pager.count : PAGE;
  const visibleQuestions = questions.slice(0, visibleCount);
  const remaining = questions.length - visibleQuestions.length;

  const showMore = () => {
    const firstNew = questions[visibleCount]?.id;
    setPager({ key: filterKey, count: visibleCount + PAGE });
    // Keyboard users: move focus to the first new card without scrolling the page.
    requestAnimationFrame(() =>
      document.querySelector<HTMLElement>(`#q-${firstNew} button`)?.focus({ preventScroll: true }),
    );
  };

  const shownGuides = useMemo(() => {
    const topicSlug = pickTopic
      ? (() => {
          const href = topicOf(pickTopic).cta.href;
          return href.startsWith("/guides/") ? href.slice("/guides/".length) : null;
        })()
      : undefined;
    return guides.filter((g) => {
      if (topicSlug !== undefined && g.slug !== topicSlug) return false;
      if (pickState !== "ALL" && g.category !== "Overview" && g.category !== STATE_NAMES[pickState]) return false;
      const hay = `${g.title} ${g.description} ${g.category}`.toLowerCase();
      return tokens.every((tk) => hay.includes(tk));
    });
  }, [guides, tokens, pickState, pickTopic]);

  const counts = useMemo(() => {
    const byState = {} as Record<StateCode, number>;
    for (const s of STATE_ORDER) byState[s] = QUESTIONS.filter((q) => matchesState(stateOf(q), s)).length;
    const byTopic: Record<string, number> = {};
    for (const q of QUESTIONS) byTopic[q.topic] = (byTopic[q.topic] ?? 0) + 1;
    return { byState, byTopic };
  }, []);

  const openQa = useCallback((id: string) => {
    setShownId(id);
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    window.history.replaceState(null, "", `#q-${id}`);
  }, []);

  const onDialogClose = useCallback(() => {
    if (window.location.hash.startsWith("#q-")) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const clear = () => {
    setQuery("");
    setPickState("ALL");
    setPickTopic(null);
  };

  // "/" focuses the search box, like most docs sites. Instant, no animation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Deep links: /guides#q-mi-rate opens that question.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#q-")) return;
    const id = hash.slice(3);
    if (!QUESTIONS.some((q) => q.id === id)) return;
    const raf = requestAnimationFrame(() => openQa(id));
    return () => cancelAnimationFrame(raf);
  }, [openQa]);

  const jumpToResults = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resultsRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const [featured, ...rest] = shownGuides;
  const showFeatured = !filtering && featured;
  const gridGuides = showFeatured ? rest : shownGuides;

  return (
    <div>
      {/* State + topic dropdowns sit left of the search box */}
      <section aria-label="Search the guides" className="rounded-[2rem] border border-edge bg-white p-5 sm:p-8">
        <label htmlFor="guide-search" className="sr-only">
          Search questions and guides
        </label>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:shrink-0">
              <Dropdown
                label="State"
                value={pickState}
                onChange={(v) => setPickState(v as StateCode)}
                options={STATE_ORDER.map((st) => ({
                  value: st,
                  label: STATE_NAMES[st],
                  count: counts.byState[st],
                }))}
              />
              <Dropdown
                label="Topic"
                value={pickTopic ?? ""}
                onChange={(v) => setPickTopic(v === "" ? null : v)}
                options={[
                  { value: "", label: "Any topic", count: QUESTIONS.length },
                  ...TOPICS.map((t) => ({ value: t.id, label: t.label, count: counts.byTopic[t.id] ?? 0 })),
                ]}
              />
          </div>
          <div className="relative min-w-0 flex-1">
            <Search
              size={20}
              strokeWidth={1.75}
              aria-hidden
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-ink"
            />
            <input
              id="guide-search"
              ref={inputRef}
              type="search"
              inputMode="search"
              autoComplete="off"
              spellCheck={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
              }}
              placeholder="Search questions: spouse, hourly rate, taxes, how to apply"
              className="qa-search w-full rounded-full border border-edge bg-frost py-4 pl-14 pr-24 text-[1.05rem] text-navy placeholder:text-slate-ink/70"
            />
            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                  className="qa-icon-btn"
                >
                  <X size={16} strokeWidth={2} aria-hidden />
                </button>
              ) : (
                <kbd
                  aria-hidden
                  className="hidden rounded-md border border-edge bg-white px-2 py-0.5 text-[12px] font-semibold text-slate-ink sm:block"
                >
                  /
                </kbd>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-slate-ink">
          <span className="font-semibold uppercase tracking-[0.14em] text-[12px]">Try</span>
          {TRY.map((t) => (
            <button key={t} type="button" className="qa-try" onClick={() => setQuery(t)}>
              {t}
            </button>
          ))}
        </div>

      </section>

      {/* Results */}
      <div ref={resultsRef} className="scroll-mt-28 pt-14 lg:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[clamp(1.8rem,2.8vw,2.4rem)] font-normal leading-[1.15]">
              {filtering ? "Results" : "Start from a question families arrive with"}
            </h2>
            <p role="status" aria-live="polite" className="mt-2 text-[15px] text-slate-ink">
              {questions.length} {questions.length === 1 ? "question" : "questions"}
              {shownGuides.length > 0 && (
                <>
                  {" "}
                  and {shownGuides.length} {shownGuides.length === 1 ? "guide" : "guides"}
                </>
              )}
              {tokens.length > 0 && <> for &ldquo;{query.trim()}&rdquo;</>}
            </p>
          </div>
          {filtering && (
            <button type="button" className="med-btn med-btn-ghost" onClick={clear}>
              Clear filters
            </button>
          )}
        </div>

        {/* Guides */}
        {shownGuides.length > 0 && (
          <div className="mt-10">
            {showFeatured && <FeaturedGuide g={featured} />}
            {gridGuides.length > 0 && (
              <>
                {(showFeatured || filtering) && (
                  <h3 className="font-display mt-14 text-[1.6rem] font-normal text-navy">
                    {filtering ? "Matching guides" : "State guides"}
                  </h3>
                )}
                <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {gridGuides.map((g) => (
                    <li key={g.slug}>
                      <GuideTile g={g} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {/* Questions */}
        {questions.length > 0 ? (
          <>
            {shownGuides.length > 0 && (
              <h3 className="font-display mt-16 text-[1.6rem] font-normal text-navy">Questions</h3>
            )}
            <ul className={`${shownGuides.length > 0 ? "mt-6" : "mt-10"} grid gap-5 md:grid-cols-2 xl:grid-cols-3`}>
              {visibleQuestions.map((qa) => (
                <QaCard key={qa.id} qa={qa} onOpen={openQa} />
              ))}
            </ul>
            {questions.length > PAGE && (
              <div className="mt-10 flex flex-col items-center gap-4">
                <p className="text-[14px] text-slate-ink">
                  Showing {visibleQuestions.length} of {questions.length} questions
                </p>
                {remaining > 0 && (
                  <button type="button" className="med-btn med-btn-ghost" onClick={showMore}>
                    Show {Math.min(PAGE, remaining)} more
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          shownGuides.length === 0 && <EmptyState onClear={clear} />
        )}
      </div>

      {/* Topic directory: last section, default view only */}
      {!filtering && (
        <section aria-labelledby="start-heading" className="mt-20 lg:mt-28">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-cobalt">Browse by topic</p>
          <h2
            id="start-heading"
            className="font-display mt-3 text-[clamp(1.8rem,2.8vw,2.4rem)] font-normal leading-[1.15] text-balance"
          >
            Every question, answered
          </h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {TOPICS.map((t) => (
              <li key={t.id}>
                <TopicRow
                  topic={t}
                  count={counts.byTopic[t.id] ?? 0}
                  onPick={() => {
                    setPickTopic(t.id);
                    requestAnimationFrame(jumpToResults);
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
      )}


      <QaDialog
        qa={QUESTIONS.find((q) => q.id === shownId)}
        dialogRef={dialogRef}
        onClose={onDialogClose}
      />
    </div>
  );
}

type DropdownOption = { value: string; label: string; count: number };

// Custom listbox: popover scales from its trigger (origin-aware), 150ms ease-out.
function Dropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const current = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const focusOption = (i: number) => {
    const els = listRef.current?.querySelectorAll<HTMLElement>("[role=option]");
    if (!els?.length) return;
    els[(i + els.length) % els.length].focus();
  };

  const openMenu = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      const idx = Math.max(0, options.findIndex((o) => o.value === value));
      focusOption(idx);
    });
  };

  const onListKey = (e: React.KeyboardEvent) => {
    const els = [...(listRef.current?.querySelectorAll<HTMLElement>("[role=option]") ?? [])];
    const i = els.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusOption(i + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusOption(i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusOption(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusOption(els.length - 1);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
      if (e.key === "Escape") triggerRef.current?.focus();
    }
  };

  return (
    <div ref={rootRef} className="qa-dd" data-open={open}>
      <button
        ref={triggerRef}
        type="button"
        className="qa-dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            openMenu();
          }
        }}
      >
        <span className="qa-dd-text">
          <span id={`${id}-label`} className="qa-dd-label">
            {label}
          </span>
          <span id={`${id}-value`} className="qa-dd-value">
            {current.label}
          </span>
        </span>
        <ChevronDown size={16} strokeWidth={2} aria-hidden className="qa-dd-chevron ml-auto shrink-0" />
      </button>
      <ul
        ref={listRef}
        role="listbox"
        aria-labelledby={`${id}-label`}
        className="qa-dd-menu"
        inert={!open}
        onKeyDown={onListKey}
      >
        {options.map((o) => (
          <li
            key={o.value}
            role="option"
            tabIndex={-1}
            aria-selected={o.value === value}
            className="qa-dd-option"
            onClick={() => {
              onChange(o.value);
              setOpen(false);
              triggerRef.current?.focus();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onChange(o.value);
                setOpen(false);
                triggerRef.current?.focus();
              }
            }}
          >
            <span className="min-w-0 flex-1 truncate">{o.label}</span>
            <Check size={15} strokeWidth={2.25} aria-hidden className="qa-dd-check" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopicRow({ topic, count, onPick }: { topic: Topic; count: number; onPick: () => void }) {
  return (
    <button type="button" onClick={onPick} className="qa-topic group">
      <span className="min-w-0 flex-1">
        <span className="font-display block text-[1.2rem] leading-snug text-navy">{topic.title}</span>
        <span className="mt-1.5 block text-[14.5px] leading-relaxed text-slate-ink">{topic.blurb}</span>
      </span>
      <span className="flex shrink-0 flex-col items-end gap-3">
        <span className="rounded-full bg-sky px-2.5 py-1 text-[12px] font-semibold text-cobalt">
          {count} {count === 1 ? "question" : "questions"}
        </span>
        <ArrowRight size={18} strokeWidth={1.75} aria-hidden className="qa-arrow text-cobalt" />
      </span>
    </button>
  );
}

function QaCard({ qa, onOpen }: { qa: Qa; onOpen: (id: string) => void }) {
  const topic = topicOf(qa.topic);
  const state = stateOf(qa);

  return (
    <li id={`q-${qa.id}`} className="scroll-mt-28">
      <button type="button" className="qa-card" aria-haspopup="dialog" onClick={() => onOpen(qa.id)}>
        <span className="flex flex-wrap items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em]">
          <span className="rounded-full bg-sky px-2.5 py-1 text-cobalt">{topic.label}</span>
          {state !== "ALL" && (
            <span className="rounded-full bg-navy px-2.5 py-1 text-white">{STATE_NAMES[state]}</span>
          )}
        </span>
        <span className="font-display block text-[1.3rem] leading-[1.25] text-navy text-balance">{qa.q}</span>
        <span className="qa-preview block text-[15px] leading-relaxed text-slate-ink">{qa.a}</span>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-cobalt">
          Read the answer
          <ArrowRight size={16} strokeWidth={2} aria-hidden className="qa-arrow" />
        </span>
      </button>
    </li>
  );
}

// One shared native <dialog>: focus trap, Esc, inert page and top-layer stacking come free.
function QaDialog({
  qa,
  dialogRef,
  onClose,
}: {
  qa: Qa | undefined;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  onClose: () => void;
}) {
  const topic = qa ? topicOf(qa.topic) : null;
  const state = qa ? stateOf(qa) : "ALL";

  return (
    <dialog
      ref={dialogRef}
      className="qa-dialog"
      aria-labelledby="qa-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {qa && topic && (
        <div className="qa-dialog-inner">
          <div className="qa-dialog-top">
            <span className="flex flex-wrap items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em]">
              <span className="rounded-full bg-sky px-2.5 py-1 text-cobalt">{topic.label}</span>
              {state !== "ALL" && (
                <span className="rounded-full bg-navy px-2.5 py-1 text-white">{STATE_NAMES[state]}</span>
              )}
            </span>
            <button
              type="button"
              className="qa-icon-btn"
              aria-label="Close"
              onClick={() => dialogRef.current?.close()}
            >
              <X size={16} strokeWidth={2} aria-hidden />
            </button>
          </div>

          <h2
            id="qa-dialog-title"
            className="font-display mt-5 text-[clamp(1.6rem,3vw,2.1rem)] font-normal leading-[1.15] text-navy text-balance"
          >
            {qa.q}
          </h2>
          <p className="mt-5 rounded-2xl bg-sky/70 px-5 py-4 text-[1.02rem] font-medium leading-relaxed text-navy">
            {qa.a}
          </p>

          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-navy">
            {qa.more.map((p, n) => (
              <p key={n}>{p}</p>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-frost p-5">
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-slate-ink">Sources</p>
            <ol className="mt-2.5 space-y-2 text-[14px] leading-snug">
              {qa.src.map((k) => {
                const s = SOURCES[k];
                return (
                  <li key={k}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1 text-cobalt"
                    >
                      <span className="med-sweep">
                        {s.org}: {s.title}
                      </span>
                      <ArrowUpRight size={14} strokeWidth={2} aria-hidden className="mt-0.5 shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href={topic.cta.href} className="med-btn med-btn-primary">
              {topic.cta.label}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
            </Link>
            <Link href="/contact-us" className="med-btn med-btn-ghost">
              Ask us about your situation
            </Link>
          </div>
        </div>
      )}
    </dialog>
  );
}

function FeaturedGuide({ g }: { g: GuideCard }) {
  const [lead, ...rows] = g.facts;
  return (
    <Link
      href={`/guides/${g.slug}`}
      className="med-card group grid overflow-hidden rounded-[2rem] border border-edge bg-white lg:grid-cols-12"
    >
      <div className="flex flex-col gap-10 bg-navy p-8 text-white sm:p-10 lg:col-span-5">
        <span className="w-fit rounded-full bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-apricot">
          Start here
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">{lead?.label}</p>
          <p className="font-display mt-3 text-[clamp(1.6rem,2.5vw,2.1rem)] leading-[1.2] text-balance">
            {lead?.value}
          </p>
        </div>
        <dl className="mt-auto divide-y divide-white/15 border-t border-white/15">
          {rows.slice(0, 3).map((f) => (
            <div key={f.label} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 py-3.5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">{f.label}</dt>
              <dd className="text-[15px] leading-snug text-white/95">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex flex-col gap-8 p-8 sm:p-10 lg:col-span-7 lg:p-12">
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em]">
          <span className="rounded-full bg-sky px-3.5 py-1.5 text-cobalt">{g.category}</span>
          <span className="text-slate-ink">{g.minutes} min read</span>
        </div>
        <div>
          <h3 className="font-display text-[clamp(1.9rem,3vw,2.8rem)] font-light leading-[1.12] text-balance">
            {g.title}
          </h3>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-slate-ink">{g.description}</p>
        </div>
        <span className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt">
          <span className="med-sweep">Read the guide</span>
          <ArrowRight
            size={18}
            strokeWidth={1.75}
            aria-hidden
            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

function GuideTile({ g }: { g: GuideCard }) {
  return (
    <Link
      href={`/guides/${g.slug}`}
      className="med-card group flex h-full flex-col rounded-3xl border border-edge bg-white p-7"
    >
      <div className="flex flex-wrap items-center gap-3 text-[12px]">
        <span className="rounded-full bg-sky px-3 py-1 font-semibold uppercase tracking-[0.14em] text-cobalt">
          {g.category}
        </span>
        <span className="text-slate-ink">{g.minutes} min read</span>
      </div>
      <h3 className="font-display mt-5 text-[1.5rem] font-normal leading-snug text-balance">{g.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">{g.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-semibold text-cobalt">
        <span className="med-sweep">Read the guide</span>
        <ArrowRight
          size={18}
          strokeWidth={1.75}
          aria-hidden
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="mt-10 rounded-[2rem] border border-dashed border-edge bg-white px-6 py-14 text-center">
      <p className="font-display text-[1.7rem] text-navy">No match for that search</p>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-ink">
        Try a shorter word like &ldquo;spouse&rdquo; or &ldquo;rate&rdquo;, or clear the filters. If your question
        is not here, ask us and we will find the answer.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <button type="button" className="med-btn med-btn-ghost" onClick={onClear}>
          Clear filters
        </button>
        <Link href="/contact-us" className="med-btn med-btn-primary">
          Ask a question
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
