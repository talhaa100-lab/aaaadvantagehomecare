export const wrap = "mx-auto max-w-[75rem] px-6 lg:px-10";
export const panel = "mx-3 rounded-[2rem] sm:mx-5 sm:rounded-[2.5rem]";
export const h2 =
  "font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.06] text-balance";

/** Stagger index for CSS: calc(var(--i) * step) */
export const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-apricot" : "text-cobalt"
      }`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-apricot" />
      {children}
    </p>
  );
}

/** WordPress dates are site-local with no zone; pin the calendar day so it never shifts. */
export const utcNoon = (iso: string) => new Date(iso.slice(0, 10) + "T12:00:00Z");
