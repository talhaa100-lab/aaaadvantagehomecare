import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { locations, site } from "../lib/content";
import { contactPage, paragraphs } from "../lib/pages";
import { MedHeader } from "../components/MedHeader";
import { MedFooter } from "../components/MedFooter";
import { ContactForm } from "../components/ContactForm";
import { ScrollReveal } from "../components/ScrollReveal";
import { i, Label, panel, wrap } from "../components/ui";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
};

// The live site shows this address only through an obfuscated link.
const email = "hello@aaaadvantagehomecare.com";

const [lede, messageLede] = paragraphs(contactPage.html);
const messageHeading = (contactPage.html.match(/<h2>\s*Leave us a Message\s*<\/h2>/i) ?? [
  "Leave us a Message",
])[0].replace(/<[^>]+>/g, "").trim();

const rowIcon = "size-11 shrink-0 rounded-full bg-sky p-3 text-cobalt";

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <MedHeader />
      <main>
        <section className={`${wrap} pb-14 pt-6 lg:pb-20 lg:pt-8`}>
          <nav aria-label="Breadcrumb" className="med-in text-[13px] text-slate-ink" style={i(0)}>
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="med-sweep">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} aria-hidden />
              <li aria-current="page" className="font-medium text-navy">
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="mt-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="med-in" style={i(1)}>
                <Label>Get in touch</Label>
              </div>
              <h1
                className="med-in font-display mt-5 text-[clamp(3.25rem,8vw,7rem)] font-light leading-[0.95] text-balance"
                style={i(2)}
              >
                Contact <span className="italic text-cobalt">Us</span>
              </h1>
            </div>
            <p
              className="med-in max-w-md text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:pb-3"
              style={i(3)}
            >
              {lede}
            </p>
          </div>
        </section>

        <section className={`${panel} mb-3 bg-sky py-16 sm:mb-5 lg:py-24`}>
          <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-5" data-reveal="up">
              <h2 className="font-display text-[clamp(2rem,3.4vw,2.9rem)] font-light leading-[1.1] text-balance">
                {messageHeading}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-slate-ink">{messageLede}</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-center gap-4">
                  <Mail className={rowIcon} strokeWidth={1.75} aria-hidden />
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
                      Email
                    </p>
                    <a href={`mailto:${email}`} className="med-sweep pb-0.5 text-lg font-medium">
                      {email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className={rowIcon} strokeWidth={1.75} aria-hidden />
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
                      Phone
                    </p>
                    <a href={site.phoneHref} className="med-sweep pb-0.5 text-lg font-medium">
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className={rowIcon} strokeWidth={1.75} aria-hidden />
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-ink">
                      Hours
                    </p>
                    <p className="text-lg font-medium">{site.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7" data-reveal="up" style={i(1)}>
              <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-[0_40px_70px_-40px_rgba(11,37,64,0.45)] sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className={`${wrap} pb-20 pt-10 lg:pb-28`}>
          <ul className="grid gap-4 md:grid-cols-3">
            {locations.map((l, n) => (
              <li key={l.state} data-reveal="up" style={i(n)}>
                <div className="med-card h-full rounded-2xl border border-navy/10 bg-white p-7">
                  <MapPin size={22} strokeWidth={1.75} className="text-apricot" aria-hidden />
                  <h3 className="font-display mt-4 text-3xl font-normal">{l.state}</h3>
                  <p className="mt-3 leading-relaxed text-slate-ink">{l.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <MedFooter />
    </>
  );
}
