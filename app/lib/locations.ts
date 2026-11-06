// All copy below is taken verbatim from the existing location pages on
// aaaadvantagehomecare.com (city names are title-cased for display).

export type LocationPage = {
  slug: string;
  state: string;
  heading: string;
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
    "heading": "Home Care & Paid Family Caregiver Services in Arizona",
    "metaTitle": "Home Care & Paid Family Caregiver Services in Arizona",
    "metaDescription": "AAA Advantage Home Care Agency provides home care and paid family caregiver services in Arizona. We help families in Phoenix, Mesa, Chandler, Gilbert & Tucson.",
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
    "heading": "Home Care and Paid Family Caregiver Services in Indiana",
    "metaTitle": "Home Care and Paid Family Caregiver Services in Indiana",
    "metaDescription": "Get home care and caregiver support in Indiana. Learn about Structured Family Caregiving, the Aged and Disabled Waiver, and paid family caregiver options.",
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
    "heading": "Home Care & Paid Family Caregiver Services in Missouri",
    "metaTitle": "Home Care & Paid Family Caregiver Services in Missouri",
    "metaDescription": "AAA Advantage Home Care Agency provides home care and caregiver support in Missouri with Consumer Directed Services (CDS) program and appropriate compensation.",
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
    "heading": "Home Care & Paid Family Caregiver Services in South Dakota",
    "metaTitle": "Home Care & Paid Family Caregiver Services in South Dakota",
    "metaDescription": "Find personalized home care in South Dakota, including personal care, companionship, homemaking, and Structured Family Caregiving through the HOPE Waiver.",
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
    "heading": "Home Care & Paid Family Caregiver Services in Michigan",
    "metaTitle": "Home Care & Paid Family Caregiver Services in Michigan",
    "metaDescription": "Learn about the Michigan Home Help program with AAA Advantage Home Care Agency. Get paid to care for your loved one in Detroit, Ann Arbor, and Grand Rapids.",
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
