// State program pages (the four waiver / consumer-directed programs) plus the short
// "How to get paid to be a caregiver" pages. All copy is from the existing pages on
// aaaadvantagehomecare.com (obvious typos fixed).

/** A run of text where some words link out. */
export type Rich = (string | { label: string; href: string })[];

export type ProgramList = { heading?: string; items: { text: Rich; sub?: string[] }[] };

export type Program = {
  slug: string;
  /** Matching /locations/[slug] */
  stateSlug: string;
  state: string;
  title: string;
  /** Short name shown in breadcrumbs / buttons */
  short: string;
  metaTitle: string;
  metaDescription: string;
  about: string;
  servicesIntro: string;
  services: ProgramList["items"];
  eligibilityIntro: string;
  eligibility: ProgramList[];
  /** Service pages linked from the services list */
  serviceLinks?: Record<string, string>;
};

export const programs: Program[] = [
  {
    slug: "arizona-long-term-care-system-altcs",
    stateSlug: "arizona",
    state: "Arizona",
    title: "Arizona Long Term Care System (ALTCS)",
    short: "ALTCS",
    metaTitle: "Arizona Long Term Care System (ALTCS): Services & Eligibility",
    metaDescription:
      "ALTCS offers health coverage to adults 65+ and people with disabilities who need a nursing-facility level of care. See covered home care services and who qualifies.",
    about:
      "ALTCS offers health insurance to those 65 and older, and to those with disabilities who need a nursing facility level of care. These services can be delivered in a nursing institution or within the comfort of their own home or community-based setting.",
    servicesIntro: "The services covered under ALTCS are:",
    services: [
      { text: ["Attendant Care"] },
      { text: ["Homemaking"] },
      { text: ["Respite"] },
      { text: ["Personal Care"] },
    ],
    eligibilityIntro: "To qualify for ALTCS, one must meet the following requirements:",
    eligibility: [
      {
        heading: "Non-financial requirements",
        items: [
          { text: ["Have U.S. citizenship, or be a qualified immigrant"] },
          { text: ["Have Arizona residency"] },
          { text: ["Have a social security number (SSN), or apply for one"] },
          {
            text: [
              "Apply for all cash benefits that you may be entitled to, such as Pension or VA benefits",
            ],
          },
          { text: ["Having been determined to require nursing facility level of care"] },
          {
            text: [
              "Live in an approved living arrangement, such as your own home, or an AHCCCS certified nursing facility or assisted living facility",
            ],
          },
        ],
      },
      {
        heading: "Financial requirements",
        items: [
          { text: ["Have a gross monthly income of no more than $2,829 for an individual"] },
          { text: ["Countable resources no more than $2,000 for single applicants"] },
        ],
      },
    ],
    serviceLinks: {
      "Attendant Care": "attendant-care",
      Homemaking: "homemaking",
      Respite: "respite",
      "Personal Care": "personal-care",
    },
  },
  {
    slug: "indiana-aged-and-disabled-waiver",
    stateSlug: "indiana",
    state: "Indiana",
    title: "Aged and Disabled Waiver",
    short: "A&D Waiver",
    metaTitle: "Indiana Aged and Disabled (A&D) Waiver: Services & Eligibility",
    metaDescription:
      "Indiana's Aged and Disabled (A&D) Waiver helps older adults and people with disabilities get care at home. See the services we provide and who qualifies.",
    about:
      "Indiana’s Aged and Disabled (A&D) Waiver is a program designed to assist older adults and individuals with disabilities who require nursing home level of care, enabling them to receive care services within their home or community. The goal of this waiver is to support independence and improve the quality of life by providing access to home and community-based services (HCBS) as an alternative to institutional care. Services can range from personal care assistance, transportation, home modifications, to meal delivery and more, tailored to meet individual needs and preferences.",
    servicesIntro: "The services we provide that are covered under the A&D Waiver are:",
    services: [
      { text: ["Attendant Care"] },
      { text: ["Homemaking"] },
      { text: ["Structured Family Caregiving"] },
    ],
    eligibilityIntro:
      "To qualify for the A&D Waiver, individuals must meet the HCBS waiver eligibility and Medicaid eligibility guidelines:",
    eligibility: [
      {
        items: [
          { text: ["Be an Indiana resident"] },
          { text: ["Be aged, blind, or otherwise disabled"] },
          { text: ["Reside in or transitioning into an HCBS-compliant setting (non-institutionalized)"] },
          {
            text: [
              "Have income no greater than 300% of maximum Supplemental Security Income (SSI) amount (parental income for children under 18 years of age is disregarded)",
            ],
          },
          { text: ["Meet nursing facility level of care"] },
        ],
      },
    ],
    serviceLinks: {
      "Attendant Care": "attendant-care",
      Homemaking: "homemaking",
      "Structured Family Caregiving": "structured-family-caregiving",
    },
  },
  {
    slug: "missouri-consumer-directed-services",
    stateSlug: "missouri",
    state: "Missouri",
    title: "Consumer Directed Services",
    short: "CDS",
    metaTitle: "Missouri Consumer Directed Services (CDS): Services & Eligibility",
    metaDescription:
      "Missouri's Consumer Directed Services (CDS) program lets you hire, train and supervise your own personal care attendant. See what it covers and who qualifies.",
    about:
      "Missouri’s Consumer Directed Services (CDS) program allows participants to hire, train, supervise and even dismiss their personal care attendant. This model of care promotes independence and autonomy by giving individuals the ability to manage their in-home care based on their specific needs and schedules. The administrative aspects like payroll are handled by an agency (us), making it easier for participants to focus on their care.",
    servicesIntro: "The services covered under CDS are:",
    services: [
      {
        text: ["State Plan Personal Care, which includes but is not limited to:"],
        sub: [
          "Personal Care – bathing, grooming, dressing, personal hygiene",
          "Toileting – ostomy or catheter hygiene; bowel and/or bladder routine; general toileting activities",
          "Health – use of transfer devices/mobility issues/prostheses, passive range of motion, manual assistance with medications, treatments, cleaning and maintenance of equipment",
          "Housekeeping – cleaning, dusting, bed linens, laundry, trash",
          "Meals – meal preparation and/or assistance with eating, washing dishes",
          "Transportation – essential shopping/errands, school or employment",
        ],
      },
      {
        text: [
          "Independent Living Waiver (ILW) – this program offers additional services beyond the limitations of the Consumer Directed State Plan Personal Care program to a limited number of eligible consumers. ILW services include case management, personal care, environmental accessibility adaptations and specialized medical equipment and supplies.",
        ],
      },
    ],
    eligibilityIntro: "To qualify for CDS, an individual must:",
    eligibility: [
      {
        items: [
          { text: ["Be a resident of Missouri"] },
          { text: ["Be at least 18 years old"] },
          { text: ["Be capable of directing their own care services"] },
          {
            text: [
              "Require assistance with Activities of Daily Living (ADLs) and certain Instrumental Activities of Daily Living (IADLs)",
            ],
          },
          { text: ["Meet Medicaid’s financial eligibility criteria"] },
        ],
      },
    ],
  },
  {
    slug: "south-dakota-hope-waiver",
    stateSlug: "south-dakota",
    state: "South Dakota",
    title: "Home and Community-Based Options and Person-Centered Excellence (HOPE) Waiver",
    short: "HOPE Waiver",
    metaTitle: "South Dakota HOPE Waiver: Services & Eligibility",
    metaDescription:
      "South Dakota's HOPE Waiver provides home and community-based services to adults who need a nursing-home level of care. See the services we provide and who qualifies.",
    about:
      "South Dakota’s Home and Community-Based Options and Person-Centered Excellence (HOPE) Waiver is a program that provides a range of services to individuals who require a nursing home level of care but prefer to live at home or in a community-based setting. The waiver gives access to a variety of personalized services for people over 18 with certain disabilities and to people over 65 who may need the level of care typically provided by a nursing home. The program aims at promoting independence and an enhanced quality of life for the recipients.",
    servicesIntro: "The services we provide that are covered under the HOPE Waiver are:",
    services: [
      { text: ["Structured Family Caregiving (SFC)"] },
      {
        text: ["In-Home Services:"],
        sub: ["Adult Companionship", "Homemaking and Chores", "Personal Care"],
      },
    ],
    eligibilityIntro: "To qualify for the HOPE Waiver, one must meet the following requirements:",
    eligibility: [
      {
        items: [
          { text: ["Be a resident of South Dakota"] },
          {
            text: [
              "Be age 65 and older or age 18 and older with a ",
              {
                label: "qualifying disability",
                href: "https://sdlegislature.gov/Rules/Administrative/67:44:03:01",
              },
            ],
          },
          {
            text: [
              "Meet a ",
              {
                label: "nursing facility level of care",
                href: "https://sdlegislature.gov/Rules/Administrative/67:45:01:03",
              },
            ],
          },
          { text: ["Participate in an assessment of needs"] },
          {
            text: [
              "Not be a resident of a hospital, nursing facility, or an Intermediate Care Facility (ICF)",
            ],
          },
          {
            text: ["Have an assessed need for one or more waiver services at least once per month"],
          },
          {
            text: [
              "Meet financial eligibility as decided by ",
              {
                label: "Economic Assistance",
                href: "https://sdlegislature.gov/Rules/Administrative/67:44:03:02",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
export const programForState = (stateSlug: string) => programs.find((p) => p.stateSlug === stateSlug);

// ───────────── "How to get paid to be a caregiver in …" ─────────────

export type HowTo = {
  /** URL segment under /how-to-get-paid/ */
  slug: string;
  stateSlug: string;
  state: string;
  title: string;
  /** Italic sub-line under the title */
  via: string;
  metaDescription: string;
  /** Program page the eligibility rule points to */
  programSlug: string;
  sections: { heading: string; paragraphs: Rich[] }[];
};

export const howTos: HowTo[] = [
  {
    slug: "indiana",
    stateSlug: "indiana",
    state: "Indiana",
    title: "How to get paid to be a caregiver in Indiana",
    via: "via Structured Family Caregiving (SFC), available through the Aged and Disabled Waiver",
    metaDescription:
      "Indiana's Structured Family Caregiving program trains and pays family members who care for a loved one at home. See how it works and who is eligible.",
    programSlug: "indiana-aged-and-disabled-waiver",
    sections: [
      {
        heading: "What is Structured Family Caregiving?",
        paragraphs: [
          [
            "Indiana’s Structured Family Caregiving (SFC) program provides support to families who are caring for a loved one at home who is elderly or has a disability. The program offers training and compensation to family members who act as primary caregivers, aiding in their abilities to provide high-quality, personalized care. This approach to caregiving is designed to be both sustainable and efficient and fosters a living environment beneficial to both the caregiver and the individual receiving care.",
          ],
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          [
            "To receive SFC benefits, participants must be enrolled in the ",
            { label: "Aged and Disabled Waiver", href: "/programs/indiana-aged-and-disabled-waiver" },
            " (Medicaid).",
          ],
        ],
      },
    ],
  },
  {
    slug: "missouri",
    stateSlug: "missouri",
    state: "Missouri",
    title: "How to get paid to be a caregiver in Missouri",
    via: "via Consumer Directed Services (CDS)",
    metaDescription:
      "Missouri's Consumer Directed Services (CDS) program lets you hire your own caregiver, including family. See how caregivers are paid and what we handle for you.",
    programSlug: "missouri-consumer-directed-services",
    sections: [
      {
        heading: "What is Consumer Directed Services (CDS)?",
        paragraphs: [
          [
            "Missouri’s Consumer Directed Services (CDS) program allows participants to hire, train, supervise and even dismiss their personal care attendant. This model of care promotes independence and autonomy by giving individuals the ability to manage their in-home care based on their specific needs and schedule. The administrative aspects like payroll are handled by an agency (us), making it easier for participants to focus on their care.",
          ],
        ],
      },
      {
        heading: "Compensation for Caregivers",
        paragraphs: [
          [
            "Caregivers hired by CDS participants are compensated by the state, via Medicaid, for the care provided. Our agency will act as the Fiscal/Employer Agent (F/EA) to provide Financial Management Services (FMS). We will handle the payments and administrative responsibilities, eliminating the need for the care recipient to handle payroll and tax liabilities. The rate of pay varies and is generally established by the state.",
          ],
        ],
      },
    ],
  },
  {
    slug: "south-dakota",
    stateSlug: "south-dakota",
    state: "South Dakota",
    title: "How to get paid to be a caregiver in South Dakota",
    via: "Through Structured Family Caregiving (SFC), available through the HOPE Waiver",
    metaDescription:
      "South Dakota's Structured Family Caregiving program supports a family member or close friend who cares for a loved one at home. See how it works and who is eligible.",
    programSlug: "south-dakota-hope-waiver",
    sections: [
      {
        heading: "About the Program",
        paragraphs: [
          [
            "South Dakota’s Structured Family Caregiving (SFC) program is designed to support individuals who need assistance with daily living activities but prefer to remain in a home environment. Under this program, a family member or close friend becomes the caregiver for their loved one and assists in their day-to-day tasks. From personal care to homemaker services, the caregiver caters to the individual needs of the recipient. This not only promotes a familiar and comfortable living situation for the care recipient, but also provides a structured framework and financial compensation for the caregiver, acknowledging their vital role in supporting their loved one.",
          ],
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          [
            "To receive SFC benefits, participants must be enrolled in the ",
            { label: "HOPE Waiver", href: "/programs/south-dakota-hope-waiver" },
            " (Medicaid).",
          ],
        ],
      },
    ],
  },
];

export const getHowTo = (slug: string) => howTos.find((h) => h.slug === slug);
