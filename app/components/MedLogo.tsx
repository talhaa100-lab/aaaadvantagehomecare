/**
 * Wordmark: serif name + spaced small caps descriptor,
 * with a rounded monogram (roof line + cross).
 */
export function MedLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <span
      role="img"
      aria-label="AAA Advantage Home Care Agency"
      className="inline-flex items-center gap-3"
    >
      <svg viewBox="0 0 44 44" className="size-10 shrink-0" aria-hidden fill="none">
        <rect
          width="44"
          height="44"
          rx="13"
          fill={dark ? "#f6f2ea" : "#0b2540"}
        />
        <path
          d="M10 22.5 22 12l12 10.5"
          stroke={dark ? "#0b2540" : "#fff"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 20v12.5M15.75 26.25h12.5"
          stroke="#f0a35e"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.4rem] font-semibold ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          AAA Advantage
        </span>
        <span
          className={`mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.26em] ${
            dark ? "text-white/65" : "text-cobalt"
          }`}
        >
          Home Care Agency
        </span>
      </span>
    </span>
  );
}
