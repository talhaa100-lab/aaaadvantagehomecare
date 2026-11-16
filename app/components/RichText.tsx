import Link from "next/link";
import type { Rich } from "../lib/programs";

/** Renders a run of text where some words are links (internal links use next/link). */
export function RichText({ parts }: { parts: Rich }) {
  return (
    <>
      {parts.map((p, n) =>
        typeof p === "string" ? (
          <span key={n}>{p}</span>
        ) : p.href.startsWith("/") ? (
          <Link key={n} href={p.href} className="med-sweep font-medium text-cobalt">
            {p.label}
          </Link>
        ) : (
          <a
            key={n}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="med-sweep font-medium text-cobalt"
          >
            {p.label}
          </a>
        ),
      )}
    </>
  );
}
