import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "./lib/content";
import { JsonLd } from "./components/JsonLd";
import { organizationJsonLd } from "./lib/seo";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Home Care Agency in MI, MO, AZ, IN & SD | AAA Advantage",
  description:
    "AAA Advantage Home Care Agency provides home care and guides family caregivers through enrollment so they can be paid for caring for a loved one in Michigan, Missouri, Arizona, Indiana and South Dakota.",
  // "./" resolves to each page's own URL, so every page gets a self-referencing canonical.
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: "/images/happy-fit-senior-couple-exercising-autumn-park.webp" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${dm.variable}`}>
      <body className="min-h-screen">
        <JsonLd data={organizationJsonLd()} />
        <div className="med relative">
          {/* One soft wash behind header + hero; fades fully out, no hard edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] bg-[radial-gradient(70rem_34rem_at_80%_0%,rgb(205_222_238/0.8),transparent_72%)]"
          />
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
