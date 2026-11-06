"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { formConsent } from "../lib/content";

const field =
  "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3.5 text-base font-normal normal-case tracking-normal text-navy outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-ink/60 focus:border-navy focus:ring-4 focus:ring-cobalt/15";

const label =
  "block text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-ink";

// Same options as the live contact form.
const serviceOptions = [
  "Adult Companion Care",
  "Attendant Care",
  "Homemaking",
  "Personal Care",
  "Respite",
  "Structured Family Caregiving",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to the real lead endpoint / CRM before launch.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex min-h-[22rem] flex-col items-start justify-center transition duration-500 ease-out starting:translate-y-2 starting:opacity-0"
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
          Our care team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          First Name
          <input name="first_name" type="text" autoComplete="given-name" className={field} />
        </label>
        <label className={label}>
          Last Name
          <input name="last_name" type="text" autoComplete="family-name" className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" autoComplete="email" required className={field} />
        </label>
        <label className={label}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className={label}>
        Select Services
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Select Services
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        Message
        <textarea name="message" rows={5} className={`${field} resize-y`} />
      </label>
      <button type="submit" className="med-btn med-btn-primary w-full py-4">
        Send Message
        <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
      </button>
      <p className="text-xs leading-relaxed text-slate-ink">{formConsent}</p>
    </form>
  );
}
