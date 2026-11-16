// All copy below is taken verbatim from the existing location pages on
// aaaadvantagehomecare.com (city names are title-cased for display).

export type LocationPage = {
  slug: string;
  state: string;
  heading: string;
  /** Part of `heading` shown in italic cobalt (the program name). */
  headingAccent?: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  areas: string[];
  programHeading: string;
  programParagraphs: string[];
  image: string;
  /** Dedicated state-program website, shown as a "Visit … site" button */
  siteUrl?: string;
};

export const locationPages: LocationPage[] = [
  {
    "slug": "arizona",
    "state": "Arizona",
    "heading": "Arizona ALTCS Family Caregiver Program",
    "headingAccent": "Arizona ALTCS",
    "metaTitle": "Arizona ALTCS Family Caregiver: Get Paid to Care at Home",
    "metaDescription": "Arizona ALTCS can pay a family caregiver, including a spouse or parent under set rules and a 40-hour weekly limit. Learn how to start with AAA Advantage.",
    "intro": "AAA Advantage Home Care provides compassionate in-home care and caregiver support for individuals and families across Arizona. Our services include Arizona Long Term Care Services (ALTCS) in Chandler, Gilbert, Mesa, Phoenix, and Tucson, and help eligible family caregivers get paid for the care they provide.",
    "areas": [
      "Chandler",
      "Gilbert",
      "Mesa",
      "Phoenix",
      "Tucson"
    ],
    "programHeading": "Arizona ALTCS Caregiver Program",
    "programParagraphs": [
      "Are you planning to become a caregiver for a family member, or are you already providing care for a loved one? You may be eligible to receive financial compensation for the care you provide through Arizona’s Long Term Care Services (ALTCS).",
      "ALTCS provides health coverage and long-term care services for individuals age 65 and older, as well as people with disabilities who require a nursing facility level of care. Depending on their needs and eligibility, ALTCS may be provided in a nursing facility or through home- and community-based settings.",
      "If your loved one qualifies for ALTCS and meets the program requirements, we help choose a qualified family member to provide certain care services and receive compensation for that care.",
      "Want to find out if you or your loved one may qualify? Learn more about ALTCS and how you can get started with us."
    ],
    "image": "/images/locations/arizona.webp"
  },
  {
    "slug": "indiana",
    "state": "Indiana",
    "heading": "Indiana Structured Family Caregiving (SFC)",
    "headingAccent": "Structured Family Caregiving",
    "metaTitle": "Indiana Structured Family Caregiving: Daily Rates & How to Apply",
    "metaDescription": "Indiana Structured Family Caregiving has state daily rates of $77.54, $99.71 or $133.44 by level. See who qualifies and how to apply with AAA Advantage.",
    "intro": "Receive reliable in-home care support for individuals across Indiana. Our service areas include Carmel, Evansville, Fort Wayne, Indianapolis, and South Bend. We help eligible individuals access home and community-based care through programs such as the Aged and Disabled (A&D) Waiver and Structured Family Caregiving (SFC), including opportunities for qualified family members to receive compensation for providing care.",
    "areas": [
      "Carmel",
      "Evansville",
      "Fort Wayne",
      "Indianapolis",
      "South Bend"
    ],
    "programHeading": "Indiana Home Care Services for Families & Loved Ones",
    "programParagraphs": [
      "At AAA Advantage Home Care Agency, we can help you become a caregiver or choose a trained home care professional appropriate for your loved one. Also, offer financial compensation for providing care through Indiana’s Structured Family Caregiving (SFC) program.",
      "Structured Family Caregiving (SFC) can help eligible individuals receive the care they need while staying in their own homes instead of moving to a nursing facility. The Aged and Disabled (A&D) Waiver may help eligible individuals who are aged, blind, or disabled access home- and community-based services (HCBS) based on their care needs.",
      "Our home care services can provide support with everyday care and help individuals remain safely in their homes and communities. If the individual meets the program requirements, a qualified family member may also have the opportunity to receive compensation for providing care through Structured Family Caregiving.",
      "Want to know if you or your loved one may qualify? Learn more about Indiana’s A&D Waiver and Structured Family Caregiving programs, and find out how AAA Advantage Home Care Agency can help you get started."
    ],
    "image": "/images/locations/indiana.jpg"
  },
  {
    "slug": "missouri",
    "state": "Missouri",
    "heading": "Missouri Consumer Directed Services (CDS): Get Paid to Care for Family",
    "headingAccent": "Missouri Consumer Directed Services (CDS)",
    "metaTitle": "Missouri Consumer Directed Services (CDS) | Get Paid",
    "metaDescription": "Missouri Consumer Directed Services lets a loved one hire a family member as their attendant. See who can be hired, who can't, and how to start.",
    "intro": "AAA Advantage Home Care Agency provides dependable in-home care and caregiver support to individuals and families throughout Missouri, including Columbia, Independence, Kansas City, Springfield, and St. Louis. We also help eligible family caregivers get paid for the care they provide through Missouri’s Consumer Directed Services (CDS) program.",
    "areas": [
      "Columbia",
      "Independence",
      "Kansas City",
      "Springfield",
      "St. Louis"
    ],
    "programHeading": "Consumer Directed Services (CDS) Program",
    "programParagraphs": [
      "AAA Advantage Home Care Agency can help you become a caregiver or choose a trained home caregiver to care for your loved one. If you are eligible, you can also receive compensation for providing care through Missouri’s Consumer Directed Services (CDS) program.",
      "Missouri’s Consumer Directed Services program helps eligible individuals with physical disabilities receive personal care services in their homes and communities. The program allows eligible individuals to choose their own personal care attendant (PCA) to provide the support they need.",
      "If you are interested in becoming a caregiver to provide certain care services to your loved one, we can give you guidance and train you to become a caregiver, as well as provide compensation for your care based on your eligibility and program requirements.",
      "Contact us to find out whether you or your loved one qualify for the program. Learn more about Missouri Consumer Directed Services and how we can help you get started."
    ],
    "image": "/images/locations/missouri.webp",
    "siteUrl": "https://cdsmissouri.org/"
  },
  {
    "slug": "south-dakota",
    "state": "South Dakota",
    "heading": "South Dakota HOPE Waiver Home Care",
    "headingAccent": "South Dakota HOPE Waiver",
    "metaTitle": "South Dakota HOPE Waiver Home Care & Paid Family Caregiving",
    "metaDescription": "South Dakota HOPE Waiver home care for adults 65+ and eligible adults 18+, including structured family caregiving. See eligibility and how to get started.",
    "intro": "AAA Advantage Home Care Agency offers personalized, reliable home care services throughout South Dakota. From personal care and companionship to homemaking and structured family caregiving, our dedicated team helps individuals maintain their independence, comfort, and quality of life at home.",
    "areas": [
      "Aberdeen",
      "Brookings",
      "Rapid City",
      "Sioux Falls",
      "Watertown"
    ],
    "programHeading": "HOPE Waiver for Home Care",
    "programParagraphs": [
      "Are you caring for a family member at home or considering becoming their caregiver? Depending on your loved one’s eligibility and care needs, you may receive financial compensation through South Dakota’s Medicaid programs.",
      "The Home and Community-Based Options and Person-Centered Excellence (HOPE) Waiver provides home and community-based services for eligible individuals who meet a nursing facility level of care.",
      "The HOPE Waiver program offers flexible care options for people aged 65 and older, as well as individuals aged 18 and older with qualifying disabilities, helping them remain independent and receive care in the comfort of their preferred place."
    ],
    "image": "/images/locations/south-dakota.webp",
    "siteUrl": "https://dakotaathomecaregiving.com/"
  },
  {
    "slug": "michigan",
    "state": "Michigan",
    "heading": "Michigan Home Help Program: Get Paid to Care for a Family Member",
    "headingAccent": "Michigan Home Help Program",
    "metaTitle": "Michigan Home Help Program: Get Paid to Care for Family",
    "metaDescription": "Michigan Home Help pays a family caregiver $17.13 an hour (2026). See who qualifies, who can't be paid, and how to apply, with help from AAA Advantage.",
    "intro": "AAA Advantage Home Care Agency provides personalized home care services in Michigan, including Detroit, Ann Arbor, and Grand Rapids. We help families understand the Home Help program, check eligibility requirements, and guide families through the next steps toward receiving support.",
    "areas": [
      "Detroit",
      "Ann Arbor",
      "Grand Rapids"
    ],
    "programHeading": "Home Help Michigan",
    "programParagraphs": [
      "Interested in becoming a caregiver for a family member or already providing care for your loved one? You may be eligible to receive financial compensation for the care you provide through Michigan’s Home Help program.",
      "AAA Advantage Home Care Agency’s Home Help Program in Michigan helps families understand the program, check eligibility, and navigate the process to receive support.",
      "Our services include laundry, errands, bathing, grooming, and other approved daily home care tasks, ensuring family members receive the proper care."
    ],
    "image": "/images/locations/michigan.webp",
    "siteUrl": "https://homehelpmichigan.org/"
  }
];

export function getLocationPage(slug: string) {
  return locationPages.find((l) => l.slug === slug);
}
