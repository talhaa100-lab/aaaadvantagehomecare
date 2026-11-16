"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { form as copy, landing } from "../lib/michigan-landing";

const field =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3.5 text-base font-normal normal-case tracking-normal text-navy outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-ink/60 focus:border-navy focus:ring-4 focus:ring-cobalt/15";

const label =
  "block text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-ink";

type Status = "idle" | "sending" | "sent";

/** Two-field eligibility form from the live Michigan landing page. Saves to Sanity via /api/lead. */
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("full_name"),
          phone: data.get("phone"),
          company: data.get("company"), // honeypot
          pageUrl: window.location.href,
        }),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
      if (!res.ok || !json?.ok) {
        // 4xx = something the person can fix; anything else gets the call-us fallback.
        setError(
          res.status >= 400 && res.status < 500 && json?.message
            ? json.message
            : `We couldn't send that. Please try again, or call ${landing.phone}.`,
        );
        setStatus("idle");
        return;
      }
      setStatus("sent");
    } catch {
      setError(`We couldn't send that. Please try again, or call ${landing.phone}.`);
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex min-h-[20rem] flex-col items-start justify-center transition duration-500 ease-out starting:translate-y-2 starting:opacity-0"
      >
        <svg viewBox="0 0 56 56" className="size-14" fill="none" aria-hidden>
          <circle cx="28" cy="28" r="27" fill="#0b2540" />
          <path
            className="med-draw"
            pathLength="1"
            d="M17 29.5 25 37.5 39 20"
            stroke="#f0a35e"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animationDelay: "150ms", animationDuration: "600ms" }}
          />
        </svg>
        <p className="font-display mt-6 text-4xl font-light">Thank you.</p>
        <p className="mt-3 text-slate-ink">
          The AAA Advantage Home Care team will reach out to help with your next steps.
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className={label}>
        Full Name <span aria-hidden>*</span>
        <input
          name="full_name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          className={field}
        />
      </label>
      <label className={label}>
        Phone Number <span aria-hidden>*</span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          className={field}
        />
      </label>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="med-btn med-btn-primary w-full py-4 disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? "Sending…" : "Submit"}
        {!sending && <ArrowRight size={18} strokeWidth={1.75} aria-hidden />}
      </button>

      {error && (
        <p
          role="alert"
          className="rounded-xl bg-peach px-4 py-3 text-sm text-navy transition duration-200 ease-out starting:translate-y-1 starting:opacity-0"
        >
          {error}
        </p>
      )}

      <p className="text-xs leading-relaxed text-slate-ink">
        {copy.consentLead}{" "}
        <Link href="/terms-and-conditions" className="underline underline-offset-2">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        . {copy.consentTail}
      </p>
    </form>
  );
}
