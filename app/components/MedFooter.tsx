import Link from "next/link";
import { footer, site } from "../lib/content";
import { MedLogo } from "./MedLogo";

const iconClass = "size-4";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
        <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
      </svg>
    ),
  },
];

const heading = "text-[12px] font-semibold uppercase tracking-[0.22em] text-apricot";
const link =
  "med-sweep text-white/75 transition-colors duration-200 hover:text-white";

export function MedFooter() {
  return (
    <footer className="p-3 pt-0 sm:p-5 sm:pt-0">
      <div className="overflow-hidden rounded-[2rem] bg-navy-deep text-white sm:rounded-[2.5rem]">
        <div className="mx-auto grid max-w-[75rem] gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10">
          <div>
            <MedLogo tone="dark" />
            <ul className="mt-8 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-white/20 text-white/85 transition duration-200 ease-out hover:border-apricot hover:bg-apricot hover:text-navy active:scale-95"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Services</h3>
            <ul className="mt-6 space-y-3.5 text-[15px]">
              {footer.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Company</h3>
            <ul className="mt-6 space-y-3.5 text-[15px]">
              {[...footer.company, ...footer.legal].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Get In Touch</h3>
            <ul className="mt-6 space-y-3.5 text-[15px] text-white/75">
              <li>Email: {site.email}</li>
              <li>
                Phone:{" "}
                <a href={site.phoneHref} className={link}>
                  {site.phone}
                </a>
              </li>
              <li>Hours: {site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-[75rem] px-6 py-6 text-sm text-white/55 lg:px-10">
            &copy; 2026 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
