import { locations, site } from "../lib/content";
import { StartCard } from "./StartCard";
import { h2, i, Label, panel, wrap } from "./ui";

/** Shared contact block: phone, office addresses and the Start Getting Paid card. */
export function ContactSection() {
  return (
    <section
      id="contact"
      className={`${panel} mb-3 bg-sky py-20 sm:mb-5 lg:py-28`}
    >
      <div className={`${wrap} grid gap-16 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-7">
          <div data-reveal="up">
            <Label>Contact</Label>
            <h2 className={`${h2} mt-5 max-w-xl`}>
              We&rsquo;re Here to Answer Your Questions
            </h2>
          </div>

          <div className="mt-12" data-reveal="up" style={i(1)}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
              Talk to Our Care Team
            </p>
            <a
              href={site.phoneHref}
              className="med-sweep font-display mt-3 inline-block pb-2 text-[clamp(2.5rem,5vw,4rem)] font-light leading-none"
            >
              {site.phone}
            </a>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {locations.map((l, n) => (
              <li key={l.state} data-reveal="up" style={i(n + 2)}>
                <div className="med-card h-full rounded-2xl border border-navy/10 bg-white p-5">
                  <h3 className="font-display text-2xl font-normal">
                    {l.state}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-ink">
                    {l.address}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5" data-reveal="up" style={i(2)}>
          <StartCard />
        </div>
      </div>
    </section>
  );
}
