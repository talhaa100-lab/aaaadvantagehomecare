import { readFileSync } from "node:fs";
import type { NextConfig } from "next";

// The previous WordPress site served everything from the root (/detroit, /homemaking, /our-story …).
// Keep every one of those addresses working by sending it to its new home permanently.
const cities: { slug: string; state: string }[] = JSON.parse(
  readFileSync(new URL("./app/lib/cities.json", import.meta.url), "utf8"),
);

const states = ["arizona", "indiana", "michigan", "missouri", "south-dakota"];
const services = [
  "adult-companion-care",
  "attendant-care",
  "homemaking",
  "personal-care",
  "respite",
  "structured-family-caregiving",
];
const programs = [
  "arizona-long-term-care-system-altcs",
  "indiana-aged-and-disabled-waiver",
  "missouri-consumer-directed-services",
  "south-dakota-hope-waiver",
];

const legacy: Record<string, string> = {
  "/our-story": "/locations",
  "/jobs": "/careers",
  "/terms-conditions": "/terms-and-conditions",
  "/google-south-dakota": "/south-dakota-landing",
  "/google-michigan": "/michigan-landing",
  "/how-to-get-paid-to-be-a-caregiver-in-indiana": "/how-to-get-paid/indiana",
  "/how-to-get-paid-to-be-a-caregiver-in-missouri": "/how-to-get-paid/missouri",
  "/how-to-get-paid-to-be-a-caregiver-in-south-dakota": "/how-to-get-paid/south-dakota",
  ...Object.fromEntries(states.map((s) => [`/${s}`, `/locations/${s}`])),
  ...Object.fromEntries(services.map((s) => [`/${s}`, `/services/${s}`])),
  ...Object.fromEntries(programs.map((p) => [`/${p}`, `/programs/${p}`])),
  ...Object.fromEntries(cities.map((c) => [`/${c.slug}`, `/locations/${c.state}/${c.slug}`])),
};

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  images: {
    // Pictures uploaded by the client in Sanity Studio
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      ...Object.entries(legacy).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      { source: "/job/:slug", destination: "/careers/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
