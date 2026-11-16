import { Fragment } from "react";
import { Info, TriangleAlert } from "lucide-react";
import type { Block } from "../lib/guides";

/**
 * Renders the structured content of a guide (see lib/guides.ts):
 * **bold** and {1,2} citation markers inside text, plus p / ul / steps / table / callout blocks.
 */

const TOKEN = /(\*\*[^*]+\*\*|\{\d+(?:,\d+)*\})/g;

export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, n) => {
        if (part.startsWith("**")) {
          return (
            <strong key={n} className="font-semibold text-navy">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("{")) {
          const ids = part.slice(1, -1).split(",");
          return (
            <sup key={n} className="ml-0.5 text-[0.68em] font-semibold leading-none">
              {ids.map((id, k) => (
                <Fragment key={id}>
                  {k > 0 && <span className="text-slate-ink/60">,</span>}
                  <a
                    href={`#ref-${id}`}
                    aria-label={`Source ${id}`}
                    className="px-px text-cobalt no-underline transition-colors duration-150 hover:text-navy hover:underline"
                  >
                    {id}
                  </a>
                </Fragment>
              ))}
            </sup>
          );
        }
        return <Fragment key={n}>{part}</Fragment>;
      })}
    </>
  );
}

/** Text with markers stripped, for JSON-LD and meta use. */
export const plain = (text: string) =>
  text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\{\d+(?:,\d+)*\}/g, "").replace(/\s{2,}/g, " ").trim();

const body = "text-[1.1rem] leading-[1.8] text-ink";

export function GuideBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className={`mt-6 ${body}`}>
          <Rich text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item, n) => (
            <li key={n} className={`relative pl-7 ${body}`}>
              <span aria-hidden className="absolute left-0 top-[0.8em] size-2 rounded-full bg-apricot" />
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-8">
          {block.items.map((step, n) => (
            <li key={n} className="relative pb-9 pl-14 last:pb-0">
              <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-navy text-[14px] font-semibold text-white">
                {n + 1}
              </span>
              {n < block.items.length - 1 && (
                <span aria-hidden className="absolute bottom-0 left-[17px] top-11 w-px bg-navy/15" />
              )}
              <h3 className="font-display text-[1.45rem] font-normal leading-snug text-navy">{step.title}</h3>
              <p className={`mt-2 ${body}`}>
                <Rich text={step.text} />
              </p>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-[0.97rem] leading-relaxed">
              <thead>
                <tr className="bg-sky">
                  {block.head.map((h, n) => (
                    <th
                      key={n}
                      scope="col"
                      className="px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-cobalt"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-t border-navy/10 align-top">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`px-5 py-4 ${c === 0 ? "font-semibold text-navy" : "text-ink"}`}
                      >
                        <Rich text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "callout": {
      const warn = block.tone === "warn";
      const Icon = warn ? TriangleAlert : Info;
      return (
        <aside
          className={`mt-8 flex gap-4 rounded-2xl border p-6 sm:p-7 ${
            warn ? "border-apricot/50 bg-cream" : "border-cobalt/15 bg-sky"
          }`}
        >
          <Icon
            size={22}
            strokeWidth={1.75}
            aria-hidden
            className={`mt-0.5 shrink-0 ${warn ? "text-ember-deep" : "text-cobalt"}`}
          />
          <div>
            <p className="font-display text-[1.3rem] leading-snug text-navy">{block.title}</p>
            <p className="mt-2 text-[1.02rem] leading-[1.75] text-ink">
              <Rich text={block.text} />
            </p>
          </div>
        </aside>
      );
    }
  }
}
