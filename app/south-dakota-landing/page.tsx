import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Clock, Mail, Phone, Plus } from "lucide-react";
import { JsonLd } from "../components/JsonLd";
import { LandingHeader } from "../components/LandingHeader";
import { LeadForm } from "../components/LeadForm";
import { MedLogo } from "../components/MedLogo";
import { ScrollReveal } from "../components/ScrollReveal";
import { h2, i, Label, panel, wrap } from "../components/ui";
import { breadcrumbJsonLd, faqJsonLd } from "../lib/seo";
import { landing } from "../lib/michigan-landing";

export const metadata: Metadata = {
  title: "South Dakota: Get Paid to Care for a Loved One on Medicaid | AAA Advantage",
  description:
    "South Dakota caregivers can get paid $16 an hour to care for a loved one on Medicaid. Check your eligibility with AAA Advantage Home Care.",
};

const perks = [
  "Easy and reliable payments",
  "Help family at home",
  "Get paid for care you already give",
];

const relatives = ["Child", "Sibling", "Spouse"];

const likelyEligible = [
  "Has a certified medical need for services (we’ll walk you through how to determine this)",
  "Is covered under Medicaid",
  "Is not a resident of a hospital, nursing facility, or an Intermediate Care Facility (ICF)",
];

const steps = [
  { title: "We Check Your Eligibility" },
  { title: "We Collect Needed Forms" },
  { title: "An in-person assessment is scheduled" },
  { title: "Get approved and start getting paid for your care" },
];

const faqs = [
  {
    q: "How much do caregivers get paid and how often?",
    a: "Caregivers are paid $16 per hour, with bi-weekly direct deposit payments every other Friday.",
  },
  {
    q: "Who pays me — your company or the state?",
    a: "You are paid directly by our company, not the state. We handle payroll and direct deposit for all caregivers.",
  },
  {
    q: "How many hours can I work per week?",
    a: "Hours vary based on your client’s needs and your availability. Most caregivers work 20–70 hours per month.",
  },
  {
    q: "How long can we be enrolled in the program?",
    a: "You can be enrolled for life. There is no hard limit on how long caregivers can be compensated for care.",
  },
  {
    q: "How long does it take to start getting paid?",
    a: "Once your client’s case is approved, the state takes up to 45 days to authorize care and release funds.",
  },
  {
    q: "Can I get paid to care for a family member?",
    a: "Yes. Relatives, friends, and neighbors can be paid caregivers — but parents of minors cannot.",
  },
  {
    q: "Will this income affect my other government benefits?",
    a: "This is a W-2 position, and income may impact certain benefits like SSI or Medicaid, depending on your situation.",
  },
  {
    q: "Who qualifies for the program?",
    a: "Clients must have Medicaid, need help with daily tasks (ADLs), not be a resident of a hospital, nursing facility, or an Intermediate Care Facility (ICF), and have no responsible relative available to help.",
  },
  {
    q: "What kind of tasks can I be paid for?",
    a: "You can be paid for hands-on help with ADLs (e.g., bathing, dressing, toileting), IADLs (e.g., meal prep, laundry, shopping) and complex care (e.g., wound care, catheter care, feeding tubes).",
  },
  {
    q: "What government programs support this care?",
    a: "South Dakota’s HOPE Waiver is funded through Medicaid and managed by the Department of Health and Human Services (DHS).",
  },
];

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function SouthDakotaLandingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "South Dakota", path: "/locations/south-dakota" },
          { name: "Get Paid to Care for a Loved One", path: "/south-dakota-landing" },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <ScrollReveal />
      <LandingHeader />

      <main className="pb-24 md:pb-0">
        {/* ═════════ Hero ═════════ */}
        <section className="relative overflow-x-clip">
          <div className={`${wrap} pb-20 pt-10 lg:pb-28 lg:pt-14`}>
            <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="med-in" style={i(0)}>
                  <Label>South Dakota family caregivers</Label>
                </div>
                <h1
                  className="med-in font-display mt-6 text-[clamp(2.6rem,5.2vw,4.6rem)] font-light leading-[1.04] text-balance"
                  style={i(1)}
                >
                  South Dakota: Get Paid to Care for a Loved One{" "}
                  <span className="font-normal italic text-cobalt">on Medicaid</span>
                </h1>

                <ul className="mt-9 space-y-3.5">
                  {perks.map((perk, n) => (
                    <li
                      key={perk}
                      className="med-in flex items-center gap-3.5 text-[1.1rem]"
                      style={i(n + 2)}
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-apricot text-navy">
                        <Check size={15} strokeWidth={2.5} aria-hidden />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="med-in mt-10 flex flex-wrap items-center gap-3" style={i(5)}>
                  <a href="#check" className="med-btn med-btn-primary">
                    Get Paid for Care
                    <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                  </a>
                  <a href={landing.phoneHref} className="med-btn med-btn-ghost">
                    <Phone size={17} strokeWidth={1.75} aria-hidden />
                    Call Now: {landing.phone}
                  </a>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div
                  aria-hidden
                  className="med-pop absolute -bottom-5 -left-3 hidden h-[88%] w-[82%] rounded-[2rem] bg-sky sm:block"
                  style={d(500)}
                />
                <div className="med-photo relative aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-sand lg:aspect-[4/5]">
                  <div className="med-settle absolute inset-0">
                    <Image
                      src="/south-dakota-landing/caregiver-family.jpg"
                      alt="A family caregiver sitting with an older relative at home"
                      fill
                      priority
                      sizes="(min-width: 1024px) 460px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p
                  className="med-pop absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 text-[14px] font-medium shadow-[0_24px_44px_-26px_rgba(11,37,64,0.5)] backdrop-blur-xl sm:right-6"
                  style={d(1100)}
                >
                  <span className="grid size-9 place-items-center rounded-full bg-navy text-apricot">
                    <CalendarCheck size={18} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="leading-snug">
                    $16 per hour
                    <span className="block text-[12px] font-normal text-slate-ink">
                      Direct deposit every other Friday
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ Who qualifies ═════════ */}
        <section className="pb-24 lg:pb-32" aria-labelledby="who-title">
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label>Eligibility</Label>
              <h2 id="who-title" className={`${h2} mt-5`}>
                Who Qualifies for Paid Caregiving in{" "}
                <span className="font-normal italic text-cobalt">South Dakota?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-slate-ink">
                If you are a child, sibling or spouse of a Medicaid recipient, you may be eligible
                to be compensated for your care.
              </p>
            </div>

            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {relatives.map((r, n) => (
                <li key={r} data-reveal="up" style={i(n)}>
                  <div className="med-card relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-8">
                    <span
                      aria-hidden
                      className="font-display pointer-events-none absolute -bottom-7 right-6 select-none text-[8rem] font-light italic leading-none text-navy/[0.06]"
                    >
                      {n + 1}
                    </span>
                    <h3 className="font-display relative text-[2rem] font-light leading-tight">{r}</h3>
                    <p className="relative mt-3 text-slate-ink">of a Medicaid recipient</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12" data-reveal="up">
              <a href="#check" className="med-btn med-btn-primary">
                See If You Qualify
                <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* ═════════ Likely eligible ═════════ */}
        <section className={`${panel} bg-navy py-20 text-white lg:py-28`}>
          <div className={`${wrap} grid items-start gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-5" data-reveal="up">
              <Label light>Get the pay you deserve</Label>
              <h2 className={`${h2} mt-5`}>
                Get the pay you deserve for the{" "}
                <span className="font-normal italic text-apricot">care you provide.</span>
              </h2>
              <div className="mt-9">
                <a href="#check" className="med-btn med-btn-light">
                  Start Getting Paid
                  <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display text-[1.5rem] font-light" data-reveal="up">
                You are likely eligible if your care recipient:
              </p>
              <ul className="mt-6 grid gap-3">
                {likelyEligible.map((item, n) => (
                  <li
                    key={item}
                    data-reveal="up"
                    style={i(n)}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 pr-5 leading-relaxed text-white/90"
                  >
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-apricot text-navy">
                      <Check size={15} strokeWidth={2.5} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═════════ How it works ═════════ */}
        <section id="how-it-works" className="scroll-mt-28 py-24 lg:py-32">
          <div className={wrap}>
            <div className="max-w-3xl" data-reveal="up">
              <Label>How it works</Label>
              <h2 className={`${h2} mt-5`}>Our team will guide you through the entire process.</h2>
            </div>
            <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((s, n) => (
                <li key={s.title} data-reveal="up" style={i(n)}>
                  <span className="font-display grid size-14 place-items-center rounded-full border border-navy/15 bg-white text-[1.7rem] font-medium text-cobalt shadow-[0_10px_24px_-14px_rgba(11,37,64,0.5)]">
                    {n + 1}
                  </span>
                  <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
                    Step {n + 1}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-normal leading-snug">{s.title}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═════════ FAQ ═════════ */}
        <section id="faqs" className="scroll-mt-28 pb-24 lg:pb-32">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-20`}>
            <div className="lg:col-span-4" data-reveal="up">
              <div className="lg:sticky lg:top-36">
                <Label>FAQ</Label>
                <h2 className={`${h2} mt-5`}>FAQs</h2>
              </div>
            </div>
            <div className="space-y-3 lg:col-span-8">
              {faqs.map((f, n) => (
                <div key={f.q} data-reveal="up" style={i(n % 5)}>
                  <details
                    name="faq"
                    open={n === 0}
                    className="faq group rounded-2xl border border-navy/10 bg-white transition-[border-color,box-shadow] duration-300 ease-out open:border-navy/25 open:shadow-[0_24px_44px_-30px_rgba(11,37,64,0.4)]"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left sm:px-7">
                      <span className="font-display text-[1.3rem] font-normal leading-snug">{f.q}</span>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-navy/20 text-navy transition-colors duration-200 ease-out group-open:border-navy group-open:bg-navy group-open:text-white">
                        <Plus
                          size={18}
                          strokeWidth={1.5}
                          aria-hidden
                          className="faq-plus transition-transform duration-300 ease-out"
                        />
                      </span>
                    </summary>
                    <p className="max-w-2xl px-6 pb-7 pr-12 leading-relaxed text-slate-ink sm:px-7">
                      {f.a}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ Check eligibility form ═════════ */}
        <section id="check" className={`${panel} mb-3 scroll-mt-24 bg-sky py-20 sm:mb-5 lg:py-28`}>
          <div className={`${wrap} grid items-start gap-14 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-6">
              <div data-reveal="up">
                <Label>Get paid for care</Label>
                <h2 className={`${h2} mt-5 max-w-xl`}>See if you qualify</h2>
                <p className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-slate-ink">
                  Tell us a little about your situation and our team will check your eligibility.
                </p>
              </div>

              <ul className="mt-12 space-y-4">
                {[
                  { Icon: Phone, label: "Call us", value: landing.phone, href: landing.phoneHref },
                  {
                    Icon: Mail,
                    label: "Email us",
                    value: landing.email,
                    href: `mailto:${landing.email}`,
                  },
                  { Icon: Clock, label: "Hours", value: landing.hours, href: undefined },
                ].map(({ Icon, label, value, href }, n) => (
                  <li key={label} data-reveal="up" style={i(n + 1)}>
                    <div className="flex items-center gap-5 rounded-2xl border border-navy/10 bg-white p-5">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy text-apricot">
                        <Icon size={20} strokeWidth={1.5} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="med-sweep font-display mt-1 inline-block break-all text-[1.35rem] font-normal leading-tight"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="font-display mt-1 text-[1.35rem] font-normal leading-tight">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6" data-reveal="up" style={i(2)}>
              <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-[0_40px_70px_-40px_rgba(11,37,64,0.45)] sm:p-10">
                <h3 className="font-display text-[1.9rem] font-light leading-tight">
                  Check Your Eligibility
                </h3>
                <div className="mt-8">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-28 pt-12 md:pb-14 lg:px-10">
        <div className="mx-auto flex max-w-[75rem] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" aria-label="AAA Advantage Home Care Agency, home">
              <MedLogo />
            </Link>
            <p className="mt-5 text-[14px] text-slate-ink">
              &copy; 2026 AAA Advantage Home Care. Serving South Dakota families.
            </p>
          </div>
          <div className="text-[14px] text-slate-ink md:text-right">
            <p>
              <a href={landing.phoneHref} className="med-sweep font-semibold text-navy">
                {landing.phone}
              </a>
              <span aria-hidden className="mx-3 text-navy/25">
                |
              </span>
              {landing.hours}
            </p>
            <p className="mt-3 flex gap-5 md:justify-end">
              <Link href="/privacy-policy" className="med-sweep">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="med-sweep">
                Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a href={landing.phoneHref} className="med-btn med-btn-ghost px-3">
            <Phone size={17} strokeWidth={1.75} aria-hidden />
            Call Now
          </a>
          <a href="#check" className="med-btn med-btn-primary px-3">
            Get Paid
          </a>
        </div>
      </div>
    </>
  );
}
