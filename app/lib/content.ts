// All copy below is taken from the existing site (aaaadvantagehomecare.com).
// Keep it here so pages/sections stay presentation-only.

export const site = {
  name: "AAA Advantage Home Care Agency",
  phone: "314 970 3753",
  phoneHref: "tel:+13149703753",
  email: "hello (at) aaaadvantagehomecare.com",
  hours: "Mon-Fri, 9:00AM - 5:00PM",
};

/** Every "Start Getting Paid" button on the live site opens this Google Form (Family Caregiver intake). */
export const formLink = {
  href: "https://forms.gle/h5wz4ZakzQ8FjXzq6",
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Adult Companion Care", href: "/services/adult-companion-care" },
      { label: "Attendant Care", href: "/services/attendant-care" },
      { label: "Homemaking", href: "/services/homemaking" },
      { label: "Personal Care", href: "/services/personal-care" },
      { label: "Respite", href: "/services/respite" },
      {
        label: "Structured Family Caregiving",
        href: "/services/structured-family-caregiving",
      },
    ],
  },
  {
    label: "Locations",
    href: "#locations",
    children: [
      { label: "Arizona", href: "/locations/arizona" },
      { label: "Indiana", href: "/locations/indiana" },
      { label: "Missouri", href: "/locations/missouri" },
      { label: "South Dakota", href: "/locations/south-dakota" },
      { label: "Michigan", href: "/locations/michigan" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const highlights = [
  {
    icon: "enroll",
    title: "Guided Enrollment",
    text: "Help enroll in programs that pay you for the care you provide.",
  },
  {
    icon: "home",
    title: "Care at Home",
    text: "Provide assistance with personal care, daily tasks, and companionship.",
  },
  {
    icon: "pay",
    title: "Caregiver Compensation",
    text: "Offer fair compensation for the top-notch assistance you provide.",
  },
  {
    icon: "support",
    title: "Personalized Support",
    text: "Ensure individualized care and support according to your needs.",
  },
] as const;

export const steps = [
  {
    title: "Eligibility",
    text: "We assess your qualifications to determine whether you meet the requirements for our personalized care program.",
  },
  {
    title: "Enrollment",
    text: "We guide you to fill out our required forms and add necessary documents that prove your eligibility.",
  },
  {
    title: "Assessment",
    text: "We schedule an in-person assessment to determine what kind of care and services you can provide.",
  },
  {
    title: "Approval to Start",
    text: "Once approved, you can begin your in-home assistance and receive compensation for the services.",
  },
];

export const services = [
  {
    title: "Adult Companion Care",
    text: "AAA Home Care offers non-medical home care services including companionship, meaningful conversations, social activities, and general supervision.",
    image: "/images/Adult-companion-care-at-home.webp",
    alt: "Two older adults playing chess together on a sofa at home",
    href: "/services/adult-companion-care",
  },
  {
    title: "Attendant Care",
    text: "We help with bathing, grooming, dressing, toileting, mobility, medication reminders, meal preparation, light housekeeping, and transportation.",
    image: "/images/Attendant-Care.webp",
    alt: "A caregiver holding the hand of an older woman and smiling",
    href: "/services/attendant-care",
  },
  {
    title: "Homemaking",
    text: "We offer expert assistance with light housekeeping, laundry, meal planning and preparation, grocery shopping, and running errands.",
    image: "/images/Homemaking.webp",
    alt: "A woman wearing rubber gloves wiping a window",
    href: "/services/homemaking",
  },
  {
    title: "Personal Care",
    text: "Our personal care services include eating, bathing, toileting, dressing, grooming, administering medication, and helping with mobility.",
    image: "/images/Home-care-service-banner.webp",
    alt: "A caregiver in a yellow cardigan supporting an older man seated in a wicker chair",
    href: "/services/personal-care",
  },
  {
    title: "Respite",
    text: "We help primary caregivers take a break from their duties with routine care tasks, supervisory roles, and recreational activities.",
    image: "/images/Respite.webp",
    alt: "A woman kneeling beside an older woman in a wheelchair holding a red rose",
    href: "/services/respite",
  },
  {
    title: "Structured Family Caregiving",
    text: "AAA Home Care provides support and resources to families who are caring for their loved ones with disabilities or health issues at home.",
    image: "/images/Structured-Family-Caregiving.webp",
    alt: "A family and care professionals gathered around a woman in a wheelchair in a park",
    href: "/services/structured-family-caregiving",
  },
];

export const careCopy = {
  fits: {
    tab: "Care That Fits Your Life",
    heading: "Care That Fits Your Life",
    paragraphs: [
      "AAA Advantage Home Care Agency supports your comfort, independence, and quality of life at home.",
      "Caregivers are guided through enrollment in programs that value their services and compensate them fairly. They can choose the services they want to provide and spend time with clients based on their experience, allowing them to be themselves. We also train family caregivers who are caring for their loved ones with health conditions and disabilities.",
      "We ensure older adults and individuals with qualifying disabilities get the highest-quality care in their homes and live a comfortable life. AAA Advantage Home Care Agency stands with both the caregivers and clients. We provide the guidance, training, and support needed to make reliable in-home care possible.",
    ],
    image: "/images/happy-fit-senior-couple-exercising-autumn-park.webp",
    alt: "A happy older couple exercising together in an autumn park",
  },
  benefits: {
    tab: "Caregiver Benefits",
    heading: "Caregiver Benefits",
    paragraphs: [
      "AAA Advantage Home Care Agency\u2019s compassionate caregivers are rewarded with excellent training, meaningful work, competitive pay, career growth, flexible hours, and ongoing support.",
      "From personal care to homemaking to adult companion care, you can choose the service you want to provide. Meet the unique needs of individuals and improve the quality of life of your loved ones with care and dedication.",
    ],
    perks: [
      "Excellent training",
      "Meaningful work",
      "Competitive pay",
      "Career growth",
      "Flexible hours",
      "Ongoing support",
    ],
    image:
      "/images/hospice-nurse-is-helping-caucasian-man-bed-exercising-muscle-strength.webp",
    alt: "A caregiver helping an older man lift a hand weight",
  },
};

export const testimonials = [
  {
    title: "She Feels Comfortable and Respected",
    text: "AAA Personal Care Services\u2019 caregiver is patient, kind, and respectful. My mom is very particular about maintaining her personal hygiene. The professional caregiver patiently gained her trust, learned how she likes to maintain her hygiene, and now Mom lets her handle all the work.",
    name: "Marie K.",
    date: "18 November, 2025",
  },
  {
    title: "They Made Caring for Mom Easier",
    text: "When my mom suddenly fell sick, it was hard to care for her while managing work and family responsibilities. However, we finally felt relaxed when AAA Advantage Home Care Agency helped us understand our options, connected us with a trained caregiver, and cared for my mom till she was healthy again. Thank you, and we are grateful for your support.",
    name: "Anne R.",
    date: "10 January, 2026",
  },
  {
    title: "She Looks Forward to Her Visits",
    text: "Due to my busy work schedule, my mom spent most of her days alone, and we were looking for someone reliable who could spend time with her. AAA Home Care connected us with a compassionate caregiver who talks with her, keeps her engaged, and encourages her to stay socially active. She genuinely looks forward to their time together.",
    name: "Taylor, Daughter of a Client",
    date: "12 March, 2026",
  },
  {
    title: "Finally Got a Much-Needed Break",
    text: "While being a caregiver is rewarding, it can also be exhausting. Thanks to AAA Advantage Home Care Agency, I could finally take a break. The caregiver handled all the tasks with care and precision, ensuring my loved one never felt alone.",
    name: "Julia, Primary Caregiver",
    date: "5 April, 2026",
  },
  {
    title: "I Love Being There for My Loved One",
    text: "AAA Advantage Home Care Agency gave me training and support to look after my dad and gave me compensation too. It made a real difference and encouraged me to look after him better.",
    name: "Nancy",
    date: "27 December, 2025",
  },
];

export const blogPost = {
  title: "Guide to CDS in Missouri",
  date: "August 1, 2024",
  excerpt:
    "Learn how Missouri\u2019s Consumer Directed Services program helps eligible adults with disabilities receive personalized care at home, choose a trusted caregiver, and maintain independence.",
  image: "/images/retired-man-with-disability-talking-family-video-call.webp",
  alt: "A caregiver and an older man in a wheelchair on a video call with family",
  href: "/blog/guide-to-cds-in-missouri",
};

export const faqs = [
  {
    q: "Do I need professional caregiving experience to join AAA Advantage Home Care Agency?",
    a: "Not necessarily. AAA Advantage Home Care provides guidance and training to care for individuals, family members, and loved ones at home.",
  },
  {
    q: "What home help care services can I provide?",
    a: "At AAA Advantage Home Care Agency, you can provide adult companion care, attendant care, personal care, homemaking, respite, and structured family caregiving. However, choosing the services depends on your qualifications, the care recipient\u2019s needs, and program requirements.",
  },
  {
    q: "Does AAA Home Care train caregivers to care for their loved ones?",
    a: "Absolutely. We train individuals to care for their loved ones while compensating them for their work and support.",
  },
  {
    q: "Can I get paid for my home help services?",
    a: "Of course. From the training to providing house help services, eligible caregivers are fairly compensated for their care and support.",
  },
  {
    q: "Can I choose my caregiver?",
    a: "Yes. Depending on the applicable program and eligibility requirements, you can choose your caregiver, or we can assign you one according to your needs.",
  },
];

export const locations = [
  {
    state: "Michigan",
    address: "24120 Meadowbrook Rd. #201-B Novi, Michigan 48375-3407",
  },
  {
    state: "Missouri",
    address: "500 Market Street, Suite 302B, Fulton, MO, 65251",
  },
  {
    state: "South Dakota",
    address: "526 Saint Joseph Street, Suite 205, Rapid City, SD, 57701",
  },
];

export const footer = {
  services: [
    "Adult Companion Care",
    "Attendant Care",
    "Homemaking",
    "Personal Care",
    "Structured Family Caregiving",
  ].map((label) => ({
    label,
    href: `/services/${label.toLowerCase().replace(/ /g, "-")}`,
  })),
  legal: [
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const formConsent =
  "By sharing your contact information, you agree to our Privacy Policy. You also consent for AAA Advantage Home Care to text and call you at the number you provide. Outreach may be during quiet hours under all applicable laws, auto-dialed, or may use pre-recorded or artificial voice. Msg/data rates may apply. Reply STOP to opt out.";
