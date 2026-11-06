import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";

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
  title: "Quality Care, Right at Home | AAA Advantage Home Care Agency",
  description:
    "AAA Advantage Home Care Agency is where fair pay meets exceptional care. We guide family caregivers through enrollment so they can care for loved ones and be compensated for it in Michigan, Missouri, and South Dakota.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${dm.variable}`}>
      <body className="min-h-screen">
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
