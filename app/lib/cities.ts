// City pages (23). Copy comes from the existing city pages on aaaadvantagehomecare.com via
// scripts/build-cities.py -> cities.json. Regenerate that file rather than editing it by hand.
import data from "./cities.json";

export type City = {
  slug: string;
  /** Matching /locations/[slug] */
  state: string;
  city: string;
  stateAbbr: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  programHeading: string;
  programParagraphs: string[];
  servicesIntro: string;
  services: { slug: string; title: string; text: string }[];
  whyIntro: string;
  why: { title: string; text: string }[];
};

export const cities = data as City[];

export const citiesInState = (state: string) => cities.filter((c) => c.state === state);

export const getCity = (state: string, slug: string) =>
  cities.find((c) => c.state === state && c.slug === slug);

export const cityPath = (c: Pick<City, "state" | "slug">) => `/locations/${c.state}/${c.slug}`;
