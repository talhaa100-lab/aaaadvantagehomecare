// Question library for /guides (Brevy-style "a box for every question").
//
// Writing rules, same as ./guides.ts:
//  - Every answer is grounded in a government or official program source listed in SOURCES.
//  - `a` is the short answer shown on the card. `more` is the detail revealed when it opens.
//  - Rates and limits are dated. Anything that changes yearly says which year it is for.
//  - We never promise eligibility. Where a rule varies, the answer says who decides.

export type StateCode = "ALL" | "MI" | "MO" | "AZ" | "IN" | "SD";

export const STATE_NAMES: Record<StateCode, string> = {
  ALL: "All states",
  MI: "Michigan",
  MO: "Missouri",
  AZ: "Arizona",
  IN: "Indiana",
  SD: "South Dakota",
};

export type SourceKey = keyof typeof SOURCES;

export const SOURCES = {
  dol79f: {
    org: "U.S. Department of Labor, Wage and Hour Division",
    title: "Fact Sheet #79F: Paid Family or Household Members in Certain Medicaid-Funded Programs",
    url: "https://www.dol.gov/agencies/whd/fact-sheets/79f-flsa-publicly-funded-programs",
  },
  dolDirect: {
    org: "U.S. Department of Labor, Wage and Hour Division",
    title: "Direct Care Workers: Home Care Rule",
    url: "https://www.dol.gov/agencies/whd/direct-care",
  },
  medicaidHcbs: {
    org: "Medicaid.gov (CMS)",
    title: "Home & Community Based Services",
    url: "https://www.medicaid.gov/medicaid/home-community-based-services/index.html",
  },
  eldercare: {
    org: "Administration for Community Living",
    title: "Eldercare Locator",
    url: "https://eldercare.acl.gov",
  },
  irs2014: {
    org: "Internal Revenue Service",
    title: "Notice 2014-7: Difficulty of Care Payments",
    url: "https://www.irs.gov/pub/irs-drop/n-14-07.pdf",
  },
  irs525: {
    org: "Internal Revenue Service",
    title: "Publication 525: Taxable and Nontaxable Income",
    url: "https://www.irs.gov/publications/p525",
  },
  bls: {
    org: "U.S. Bureau of Labor Statistics",
    title: "Occupational Outlook Handbook: Home Health and Personal Care Aides",
    url: "https://www.bls.gov/ooh/healthcare/home-health-and-personal-care-aides.htm",
  },
  cfr484: {
    org: "Electronic Code of Federal Regulations",
    title: "42 CFR 484.80: Condition of participation, Home health aide services",
    url: "https://www.ecfr.gov/current/title-42/section-484.80",
  },
  mcHome: {
    org: "Medicare.gov (CMS)",
    title: "Home health services",
    url: "https://www.medicare.gov/coverage/home-health-services",
  },
  mcLtc: {
    org: "Medicare.gov (CMS)",
    title: "Long-term care",
    url: "https://www.medicare.gov/coverage/long-term-care",
  },
  careerOneStop: {
    org: "U.S. Department of Labor",
    title: "CareerOneStop",
    url: "https://www.careeronestop.org",
  },
  miHelp: {
    org: "Michigan Department of Health and Human Services",
    title: "Home Help",
    url: "https://www.michigan.gov/mdhhs/adult-child-serv/adults-and-seniors/independent",
  },
  miRates: {
    org: "Michigan Department of Health and Human Services",
    title: "Adult Services Manual ASM 138: Individual Caregiver and Agency County Rates",
    url: "https://mdhhs-pres-prod.michigan.gov/olmweb/exf/AS/Public/ASM/138.pdf",
  },
  miLetter: {
    org: "Michigan Department of Health and Human Services",
    title: "Numbered Letter L 25-75: January 2026 Home Help Pay Rate Increase",
    url: "https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Assistance-Programs/Medicaid-BPHASA/Numbered-Letter-L-25-75-Home-Help-final.pdf",
  },
  miPub: {
    org: "Michigan Department of Health and Human Services",
    title: "DHS-PUB-0815: Home Help Services",
    url: "https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Adult-and-Childrens-Services/Adults-and-Seniors/Forms-and-Publications/DHS-PUB-0815.pdf",
  },
  miAsm135: {
    org: "Michigan Department of Health and Human Services",
    title: "Adult Services Manual ASM 135: Home Help Caregivers",
    url: "https://mdhhs-pres-prod.michigan.gov/olmweb/exf/AS/Public/ASM/135.pdf",
  },
  moManual: {
    org: "Missouri Department of Health and Senior Services",
    title: "HCBS Manual: Personal Care Assistance, Consumer-Directed Services Model",
    url: "https://health.mo.gov/providers/manuals/home-and-community-based-services-manual/300-available-home-and-community-13",
  },
  moCds: {
    org: "Missouri Medicaid Audit and Compliance (MMAC)",
    title: "Consumer Directed Services Orientation",
    url: "https://mmac.mo.gov/wp-content/uploads/sites/11/2022/08/CDS-Orientation-July-2022-Website.pdf",
  },
  moRights: {
    org: "Missouri Department of Health and Senior Services",
    title: "CDS Rights and Responsibilities (HCBS Manual Appendix 2e)",
    url: "https://health.mo.gov/seniors/hcbs/hcbsmanual/pdf/4.00appendix2e.pdf",
  },
  moStatute: {
    org: "Missouri Revisor of Statutes",
    title: "RSMo Section 208.900: Definitions",
    url: "https://revisor.mo.gov/main/OneSection.aspx?section=208.900",
  },
  azAltcs: {
    org: "Arizona Health Care Cost Containment System (AHCCCS)",
    title: "ALTCS: Coverage for Individuals with Long-Term Care Needs",
    url: "https://www.azahcccs.gov/Members/GetCovered/Categories/ALTCS.html",
  },
  azApply: {
    org: "Arizona Health Care Cost Containment System (AHCCCS)",
    title: "Filing an Application for ALTCS (DE-828)",
    url: "https://www.azahcccs.gov/Members/Downloads/Publications/DE-828_english.pdf",
  },
  azSdac: {
    org: "Arizona Health Care Cost Containment System (AHCCCS)",
    title: "AMPM Policy 1320-A: Self-Directed Attendant Care",
    url: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/1300/1320-A.pdf",
  },
  azDirect: {
    org: "Arizona Health Care Cost Containment System (AHCCCS)",
    title: "AMPM Policy 1240-A: Direct Care Services",
    url: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/1200/1240-A.pdf",
  },
  azSpouse: {
    org: "Arizona Administrative Code",
    title: "R9-28-506: Requirements for Spouse as Paid Caregiver",
    url: "https://www.law.cornell.edu/regulations/arizona/Ariz-Admin-Code-SS-R9-28-506",
  },
  inFaq: {
    org: "Indiana Family and Social Services Administration",
    title: "Structured Family Caregiving FAQ for Waiver Individuals and Families",
    url: "https://www.in.gov/fssa/files/SFC-FAQ-Families-FINAL.pdf",
  },
  inSide: {
    org: "Indiana Family and Social Services Administration",
    title: "A&D Waiver Attendant Care and Structured Family Care Overview",
    url: "https://www.in.gov/fssa/files/SFC-ATTC-side-by-side.pdf",
  },
  inSfc: {
    org: "Indiana Family and Social Services Administration",
    title: "Structured Family Caregiving",
    url: "https://www.in.gov/fssa/ompp/files/Structured-Family-Caregiving.pdf",
  },
  sdHope: {
    org: "South Dakota Department of Human Services",
    title: "HOPE Waiver",
    url: "https://dhs.sd.gov/en/ltss/hope-waiver",
  },
  sdDakota: {
    org: "South Dakota Department of Human Services",
    title: "Dakota at Home",
    url: "https://www.dhs.sd.gov/en/ltss/dakota-at-home",
  },
  sdRule: {
    org: "South Dakota Legislature",
    title: "ARSD 67:44:03:02: Eligibility requirements",
    url: "https://sdlegislature.gov/rules/administrative/67:44:03:02",
  },
  sdWaiver: {
    org: "South Dakota Department of Human Services",
    title: "HOPE Waiver renewal application (draft)",
    url: "https://dhs.sd.gov/content/dam/digital/united-states/south-dakota/sdo/pdf/public-notices/HOPE-Waiver-Renewal-Application-March2025.pdf",
  },
} as const;

export type Topic = {
  id: string;
  /** Short label used on chips and cards */
  label: string;
  /** The keyword this cluster targets, shown as the topic row title */
  title: string;
  blurb: string;
  state: StateCode;
  cta: { label: string; href: string };
};

export type Qa = {
  id: string;
  topic: string;
  q: string;
  /** Short answer, always visible on the card */
  a: string;
  /** Detail revealed when the card opens */
  more: string[];
  src: SourceKey[];
  /** Overrides the topic's state when a question is about one state only */
  state?: StateCode;
};

export const TOPICS: Topic[] = [
  {
    id: "get-paid",
    label: "Get paid to care",
    title: "Get paid to care for a family member",
    blurb: "How states pay relatives, who can be hired, and how to apply.",
    state: "ALL",
    cta: { label: "Read the full guide", href: "/guides/get-paid-to-care-for-a-family-member" },
  },
  {
    id: "programs",
    label: "Caregiver programs",
    title: "Paid family caregiver programs",
    blurb: "Which programs exist, who qualifies, taxes and weekly hours.",
    state: "ALL",
    cta: { label: "Compare the five states", href: "/guides/get-paid-to-care-for-a-family-member" },
  },
  {
    id: "agency",
    label: "Home care agencies",
    title: "Choosing a home care agency",
    blurb: "Agency vs. home health, what it costs and what insurance covers.",
    state: "ALL",
    cta: { label: "See our personal care service", href: "/services/personal-care" },
  },
  {
    id: "michigan",
    label: "Michigan Home Help",
    title: "Michigan Home Help program",
    blurb: "Eligibility, CHAMPS enrollment, the hourly rate and the timeline.",
    state: "MI",
    cta: { label: "Read the Michigan guide", href: "/guides/michigan-home-help-program" },
  },
  {
    id: "missouri",
    label: "Missouri CDS",
    title: "Missouri Consumer Directed Services",
    blurb: "Who qualifies, who you can hire, and what the attendant does.",
    state: "MO",
    cta: { label: "Read the Missouri guide", href: "/guides/missouri-consumer-directed-services" },
  },
  {
    id: "arizona",
    label: "Arizona ALTCS",
    title: "Arizona ALTCS family caregiver",
    blurb: "Self-directed care, medical criteria, pay and how to apply.",
    state: "AZ",
    cta: { label: "Read the Arizona guide", href: "/guides/arizona-altcs-paid-family-caregiver" },
  },
  {
    id: "indiana",
    label: "Indiana SFC",
    title: "Indiana Structured Family Caregiving",
    blurb: "Daily rates, the live-in rule, care coaches and A&D differences.",
    state: "IN",
    cta: { label: "Read the Indiana guide", href: "/guides/indiana-structured-family-caregiving" },
  },
  {
    id: "south-dakota",
    label: "South Dakota HOPE",
    title: "South Dakota HOPE Waiver home care",
    blurb: "Covered services, level of care, eligibility and applying.",
    state: "SD",
    cta: { label: "Read the South Dakota guide", href: "/guides/south-dakota-hope-waiver" },
  },
  {
    id: "sfc",
    label: "Structured family caregiving",
    title: "Structured family caregiving",
    blurb: "How the live-in model works, taxes and how it differs from PCA.",
    state: "ALL",
    cta: { label: "See the service", href: "/services/structured-family-caregiving" },
  },
  {
    id: "jobs",
    label: "Care aide jobs",
    title: "Personal care aide jobs",
    blurb: "Training, wages, PCA vs. HHA, daily duties and where to apply.",
    state: "ALL",
    cta: { label: "See open roles", href: "/careers" },
  },
];

export const QUESTIONS: Qa[] = [
  // 1. Get paid to care for a family member
  {
    id: "paid-by-state",
    topic: "get-paid",
    q: "How can I get paid by the state to take care of a family member?",
    a: "Through a state Medicaid program that lets the person you care for hire you. Your loved one has to qualify first, not you.",
    more: [
      "The U.S. Department of Labor explains that certain Medicaid-funded programs let the recipient, or their representative, choose and supervise the caregiver, and allow that caregiver to be a family or household member.",
      "You are paid for the hours or days written into an approved plan of care, after an assessment. Help you give outside that plan is part of the family relationship and need not be paid.",
      "Each state decides who can be paid and how much. The five states we serve are Michigan (Home Help), Missouri (CDS), Arizona (ALTCS), Indiana (Structured Family Caregiving) and South Dakota (HOPE Waiver).",
    ],
    src: ["dol79f", "medicaidHcbs"],
  },
  {
    id: "medicaid-pay-family",
    topic: "get-paid",
    q: "Does Medicaid pay family members to be caregivers?",
    a: "In many states, yes, through home and community-based services programs. It is a state choice, so it depends on where your loved one lives.",
    more: [
      "Medicaid home and community-based services (HCBS) let states pay for care at home instead of a nursing facility. Many states allow the paid provider to be a relative.",
      "Even where relatives can be paid, there are exclusions. Spouses and parents of minor children are the most common.",
      "Medicaid does not pay for every hour a family member helps. Paid hours come from the plan of care approved after an assessment.",
    ],
    src: ["medicaidHcbs", "dol79f"],
  },
  {
    id: "spouse-paid",
    topic: "get-paid",
    q: "Can a spouse get paid to care for an elderly or disabled husband or wife?",
    a: "It depends on the state. Michigan and Missouri do not pay a spouse. Arizona allows it only for extraordinary care with a 40-hour weekly cap.",
    more: [
      "Michigan: a spouse caring for a spouse is a responsible relative and cannot be paid Home Help.",
      "Missouri: the attendant cannot be the participant's spouse or legal guardian under CDS.",
      "Arizona: a spouse can be paid under the Spouse as Paid Caregiver rule, but only for extraordinary care, through an agency, and no more than 40 hours in any seven-day period.",
      "Indiana: FSSA says a waiver recipient supported by a spouse can work with their care manager to consider adding Structured Family Caregiving to the service plan.",
    ],
    src: ["miAsm135", "moManual", "azSpouse", "inFaq"],
  },
  {
    id: "max-income",
    topic: "get-paid",
    q: "What is the maximum monthly income for a paid family caregiver?",
    a: "The income test applies to the person receiving care, not to you. Arizona's 2026 limit for ALTCS is $2,982 a month.",
    more: [
      "Medicaid programs check the income and assets of the person who needs care. Your own earnings from being their caregiver are the program's payment to you.",
      "Arizona ALTCS: a gross monthly income limit of $2,982 for an individual, effective January 1, 2026, and a $2,000 countable resource limit.",
      "South Dakota HOPE Waiver: the person receives SSI or has income within 300 percent of the SSI standard benefit amount.",
      "Michigan Home Help requires active Medicaid. Income above the Medicaid standard does not automatically rule someone out, so ask your local adult services office about a deductible.",
    ],
    src: ["azApply", "sdRule", "miPub"],
  },
  {
    id: "apply-reimbursement",
    topic: "get-paid",
    q: "How do I apply for family caregiver reimbursement programs?",
    a: "Start with the right office for your loved one's state, because they apply, not you. Each state has a different front door.",
    more: [
      "Michigan: a referral to the county MDHHS office, followed by a home visit and written notice within 45 days.",
      "Missouri: a face-to-face assessment by the Division of Senior and Disability Services (DSDS).",
      "Arizona: apply for ALTCS through the Health-e-Arizona Plus portal or by calling (888) 621-6880.",
      "Indiana: ask the waiver care manager about Structured Family Caregiving.",
      "South Dakota: contact Dakota at Home at 833-663-9673.",
      "Once your loved one is approved, you are enrolled or hired as their caregiver under that program's rules.",
    ],
    src: ["miHelp", "moManual", "azApply", "inFaq", "sdDakota"],
  },

  // 2. Paid family caregiver program
  {
    id: "which-states",
    topic: "programs",
    q: "Which states have paid family caregiver programs?",
    a: "Many states do, under different names. We cover Michigan, Missouri, Arizona, Indiana and South Dakota in detail.",
    more: [
      "Michigan: Home Help. Missouri: Consumer Directed Services. Arizona: ALTCS with Self-Directed Attendant Care. Indiana: Structured Family Caregiving. South Dakota: HOPE Waiver.",
      "For another state, search your state Medicaid agency's site for \"self-directed\" or \"consumer-directed\" services. Your local Area Agency on Aging can point you there; the Eldercare Locator finds it by ZIP code.",
    ],
    src: ["medicaidHcbs", "eldercare", "dol79f"],
  },
  {
    id: "qualifications",
    topic: "programs",
    q: "What qualifications do I need to join a paid family caregiver program?",
    a: "Usually you must be an adult, be willing to enroll, pass a background check and complete any required training.",
    more: [
      "Michigan: the caregiver must be at least 18, enroll in CHAMPS, pass a background check and get a provider ID number before being paid.",
      "Missouri: the attendant is hired by the participant and cannot be a spouse, legal guardian, current CDS participant or someone previously involved in Medicaid fraud.",
      "Arizona SDAC: workers complete Universal Precautions and HIPAA training. Background checks are recommended but not required by AHCCCS.",
      "Indiana: the SFC agency trains the caregiver based on the person's needs, and the caregiver must live in the home.",
    ],
    src: ["miHelp", "moManual", "azSdac", "inFaq"],
  },
  {
    id: "taxable",
    topic: "programs",
    q: "Are payments received through a paid caregiver program taxable?",
    a: "Often yes, but the IRS excludes some Medicaid waiver payments for a caregiver who lives with the person. Ask a tax professional.",
    more: [
      "Under IRS Notice 2014-7, certain \"difficulty of care\" payments for individuals receiving Medicaid home and community-based waiver care are excluded from the caregiver's income when the caregiver lives in the same home.",
      "Payments for a caregiver who does not live with the person are generally treated as income. IRS Publication 525 explains what is taxable and what is not.",
      "How you are paid also matters: wages from the person or an agency come with payroll tax rules. This is general information, not tax advice.",
    ],
    src: ["irs2014", "irs525"],
  },
  {
    id: "weekly-hours",
    topic: "programs",
    q: "How many hours a week can a paid family caregiver work?",
    a: "There is no single number. The approved plan of care sets paid hours, and some states cap spouses and parents at 40.",
    more: [
      "Michigan Home Help has no set maximum. Hours are approved person by person after the in-home assessment.",
      "Arizona ALTCS: a spouse or parent of a minor paid under the special models is limited to 40 hours in any seven-day period. The case manager sets hours for everyone else.",
      "Indiana SFC is paid by the day, not the hour, based on a level of need decided by the care manager.",
      "The Department of Labor says a plan of care is not reasonable if it cuts paid hours simply because the provider is a family member.",
    ],
    src: ["miHelp", "azSpouse", "inFaq", "dol79f"],
  },
  {
    id: "experience",
    topic: "programs",
    q: "Is prior medical experience required to enroll in a caregiver program?",
    a: "Generally no. These programs are for non-medical daily help, and training is provided or required instead of experience.",
    more: [
      "Home Help, CDS and Arizona SDAC cover hands-on help with daily living such as bathing, dressing, toileting, mobility and meals. They do not require a nursing background.",
      "Skilled tasks are different. Missouri CDS, for example, will not authorize tasks that must be performed or trained by a licensed professional.",
      "Programs ask for willingness to follow instructions, health adequate for the work and any required training. Indiana's SFC agency trains the caregiver.",
    ],
    src: ["miAsm135", "moManual", "azSdac", "inFaq"],
  },

  // 3. Home care agency near me
  {
    id: "choose-agency",
    topic: "agency",
    q: "How do I choose the best home care agency for a loved one?",
    a: "Check licensing and Medicaid enrollment first, then compare screening, training, supervision and written rates.",
    more: [
      "Ask whether the agency is licensed or registered where you live, and whether it is enrolled with your state Medicaid program if Medicaid will pay.",
      "Ask how caregivers are screened and trained, who supervises them, and what happens when a caregiver calls out.",
      "Get the hourly rate, minimum hours and cancellation terms in writing, and ask for references from current families.",
      "For Medicare-certified home health agencies, Medicare.gov's Care Compare lets you compare quality ratings.",
    ],
    src: ["mcHome", "medicaidHcbs", "eldercare"],
  },
  {
    id: "home-health-vs-personal",
    topic: "agency",
    q: "What is the difference between home health care and personal home care agencies?",
    a: "Home health is skilled medical care ordered by a doctor. Personal care is non-medical help with daily living.",
    more: [
      "Home health, as Medicare defines it, includes skilled nursing and therapy, usually part time, ordered by a doctor for someone who is homebound.",
      "Personal care covers help with bathing, dressing, toileting, meals, mobility and light housekeeping. It does not need a physician's order in most private-pay arrangements.",
      "Many families need both. Indiana's SFC guidance notes that state plan home health can sit alongside Structured Family Caregiving when the person qualifies, but the same paid caregiver cannot provide both at once.",
    ],
    src: ["mcHome", "mcLtc", "inFaq"],
  },
  {
    id: "agency-cost",
    topic: "agency",
    q: "How much does a home care agency charge per hour out of pocket?",
    a: "Rates vary by agency and area, and no federal source publishes one price. Ask for a written rate sheet.",
    more: [
      "For reference, Michigan's Medicaid agency rate for Home Help is $27.00 an hour as of January 1, 2026, set by MDHHS. That is a program rate, not a private-pay price.",
      "The Bureau of Labor Statistics reports a median wage of $17.21 an hour for home health and personal care aides (May 2025). An agency's hourly charge has to cover that wage plus overhead, so private-pay prices are higher.",
      "Ask about minimum shift lengths, overnight and weekend rates, and whether the quote is all-in.",
    ],
    src: ["miRates", "bls"],
    state: "ALL",
  },
  {
    id: "medicare-agency",
    topic: "agency",
    q: "Does Medicare cover the cost of a private home care agency?",
    a: "Not for personal care alone. Medicare covers part-time skilled home health, not long-term daily help at home.",
    more: [
      "Medicare covers home health when you are homebound, a doctor certifies you need skilled care and the agency is Medicare-certified.",
      "Medicare does not pay for 24-hour home care, homemaker services or personal care when that is the only care you need.",
      "Medicaid is the main public payer for long-term care at home, through state programs like the ones on this page.",
    ],
    src: ["mcHome", "mcLtc"],
  },
  {
    id: "find-medicaid-agency",
    topic: "agency",
    q: "How can I find Medicaid-approved home care agencies in my area?",
    a: "Ask the office that runs your loved one's program. They keep the list of enrolled providers.",
    more: [
      "Michigan: your adult services worker at the county MDHHS office.",
      "Missouri: DSDS lists enrolled CDS vendors. Note that Missouri paused new CDS provider enrollments from August 1, 2026, so choose a vendor that is already actively enrolled.",
      "Arizona: your ALTCS case manager and Long Term Care health plan.",
      "Indiana: your care manager lists Structured Family Caregiving providers.",
      "South Dakota: Dakota at Home at 833-663-9673.",
      "Anywhere else, the Eldercare Locator connects you to your local Area Agency on Aging.",
    ],
    src: ["miHelp", "moManual", "azAltcs", "inFaq", "sdDakota", "eldercare"],
  },

  // 4. Michigan Home Help
  {
    id: "mi-limits",
    topic: "michigan",
    q: "What are the income and asset limits for the Michigan Home Help program?",
    a: "Home Help requires active Medicaid and a need for hands-on help with at least one daily living activity. Medicaid sets the limits.",
    more: [
      "To receive Home Help a person must have active Medicaid and need physical assistance with at least one activity of daily living.",
      "Income above the Medicaid standard does not automatically rule someone out. MDHHS says to ask the local adult services unit about Home Help with a deductible.",
      "If your loved one does not have Medicaid yet, apply at Michigan.gov/MiBridges or at the local MDHHS office. MDHHS publishes current asset limits in its Bridges Eligibility Manual.",
    ],
    src: ["miHelp", "miPub"],
    state: "MI",
  },
  {
    id: "mi-champs",
    topic: "michigan",
    q: "How do I register as a caregiver in the Michigan CHAMPS system?",
    a: "Enroll in CHAMPS and pass a background check. You cannot be paid until you are approved and issued a provider ID number.",
    more: [
      "Every Home Help caregiver must be approved in the Community Health Automated Medicaid Processing System (CHAMPS) and given a provider ID number first.",
      "MDHHS also requires a background check. Starting early saves time, because nobody is paid before the ID number is issued.",
      "For help, Provider Support Services is at 800-979-4662 or providersupport@michigan.gov.",
    ],
    src: ["miHelp", "miAsm135"],
  },
  {
    id: "mi-rate",
    topic: "michigan",
    q: "What is the hourly pay rate for Michigan Home Help caregivers?",
    a: "$17.13 an hour for individual caregivers since January 1, 2026. Agency providers are paid $27.00.",
    more: [
      "The individual caregiver rate is the $13.73 state minimum wage plus a $3.40 pass-through. The agency rate is $23.60 plus the same $3.40.",
      "MDHHS publishes a county rate table, and notes the hourly rate is based on where the client lives. Check your county before you plan around a number.",
    ],
    src: ["miLetter", "miRates", "miPub"],
    state: "MI",
  },
  {
    id: "mi-child",
    topic: "michigan",
    q: "Can a child get paid to take care of an elderly parent under Michigan Home Help?",
    a: "Yes. An adult child who is at least 18 can be the paid caregiver if the parent is approved for Home Help.",
    more: [
      "The client can choose an individual caregiver, such as a family member or friend who is at least 18.",
      "Cannot be paid: a spouse, a parent caring for a minor child, anyone 17 or under, or someone who also receives Home Help.",
      "The caregiver must enroll in CHAMPS and pass a background check before payment starts.",
    ],
    src: ["miHelp", "miAsm135"],
    state: "MI",
  },
  {
    id: "mi-timeline",
    topic: "michigan",
    q: "How long does the Michigan Home Help assessment and approval process take?",
    a: "MDHHS sends a written decision within 45 days of the application.",
    more: [
      "Send a referral to the county MDHHS office. An Adult Services Worker sends the DHS-390 application and the MDHHS-6200 medical needs form to complete.",
      "The worker visits the home to assess eligibility. If a caregiver is already chosen, it is best if they attend.",
      "If you disagree with the decision, you can request a hearing.",
    ],
    src: ["miHelp"],
    state: "MI",
  },

  // 5. Missouri CDS
  {
    id: "mo-eligible",
    topic: "missouri",
    q: "Who is eligible for Missouri Consumer Directed Services (CDS)?",
    a: "MO HealthNet participants who need personal care at home and are assessed as eligible by DSDS. Confirm current criteria with DSDS.",
    more: [
      "CDS is Missouri's consumer-directed personal care program under MO HealthNet, run by the Division of Senior and Disability Services within DHSS and available statewide.",
      "It is not limited to older adults. Participants are assessed face to face, and the result is a person-centered care plan listing authorized tasks.",
      "People who live in a nursing facility, residential care facility or assisted living facility licensed by DHSS are not eligible.",
      "Eligibility criteria such as age, disability and level-of-care score are set in the HCBS manual and can change, so confirm with DSDS before you apply.",
    ],
    src: ["moManual", "moCds"],
    state: "MO",
  },
  {
    id: "mo-spouse",
    topic: "missouri",
    q: "Can a spouse or legal guardian be a paid attendant under Missouri CDS?",
    a: "No. The attendant can be another relative, but not the participant's spouse or legal guardian.",
    more: [
      "Missouri law defines a personal care attendant as a person, other than the consumer's spouse, who performs personal care services for the consumer.",
      "The attendant also cannot be a current CDS participant or someone previously involved in Medicaid fraud.",
      "An adult child, sibling, grandchild or other relative can be hired.",
    ],
    src: ["moManual", "moRights", "moStatute"],
    state: "MO",
  },
  {
    id: "mo-hire",
    topic: "missouri",
    q: "How do I hire and manage my own attendant through Missouri CDS?",
    a: "You are the employer. You select, train, supervise and, if needed, end the arrangement. A CDS vendor handles paperwork.",
    more: [
      "Get assessed by DSDS and receive a care plan. Choose a CDS vendor that is actively enrolled with MO HealthNet.",
      "The vendor trains the consumer, screens attendants, tracks time and handles taxes under the consumer's employer number.",
      "Visits are recorded through electronic visit verification. Misusing it counts as fraud under the program rules.",
    ],
    src: ["moManual", "moCds", "moRights"],
    state: "MO",
  },
  {
    id: "mo-tasks",
    topic: "missouri",
    q: "What personal care tasks are covered under Missouri CDS?",
    a: "Daily living help such as toileting, mobility, cooking and light housekeeping, as authorized in the care plan.",
    more: [
      "CDS pays only for tasks written into the person-centered care plan.",
      "Not authorized: tasks whose main benefit is to the household, tasks that need a licensed professional, services for pets or visitors, and services while the participant is not home.",
    ],
    src: ["moManual", "moRights"],
    state: "MO",
  },
  {
    id: "mo-vs-home-health",
    topic: "missouri",
    q: "What is the difference between Missouri CDS and traditional home health care?",
    a: "In CDS you hire and direct a personal care attendant. Home health is skilled care ordered by a doctor and delivered by an agency.",
    more: [
      "The CDS attendant is your employee, not the vendor's. You train and supervise them on the tasks in your care plan.",
      "Home health is skilled nursing or therapy delivered by a licensed agency, typically part time and under a physician's order.",
      "Note: Missouri paused new CDS provider enrollments for six months from August 1, 2026. The pause covers providers, not participants, and enrolled vendors keep serving.",
    ],
    src: ["moManual", "mcHome"],
    state: "MO",
  },

  // 6. Arizona ALTCS
  {
    id: "az-sdac",
    topic: "arizona",
    q: "How does Self-Directed Attendant Care (SDAC) work under ALTCS?",
    a: "The member recruits, hires, manages and can dismiss their own direct care worker, including family members.",
    more: [
      "The member chooses tasks within the service plan, picks days and times, and employs the worker. A Fiscal Employer Agent handles payroll and workers' compensation.",
      "SDAC is for members who live in their own home. A parent of a minor child, a spouse as paid caregiver and a legal guardian cannot be the paid worker under SDAC.",
      "Workers must complete Universal Precautions and HIPAA training.",
    ],
    src: ["azSdac"],
    state: "AZ",
  },
  {
    id: "az-criteria",
    topic: "arizona",
    q: "What medical criteria must a person meet to qualify for ALTCS?",
    a: "They must be at immediate risk of institutionalization, meaning they need a nursing facility level of care, as decided by AHCCCS.",
    more: [
      "An AHCCCS medical assessor interviews the person and any caregivers and reviews medical records.",
      "The person does not need to live in a facility. They must need that level of care.",
      "Financial limits apply too: for 2026, gross monthly income up to $2,982 for an individual and $2,000 in countable resources.",
    ],
    src: ["azApply", "azAltcs"],
    state: "AZ",
  },
  {
    id: "az-rate",
    topic: "arizona",
    q: "How much do ALTCS family caregivers get paid per hour in Arizona?",
    a: "There is no single family rate. Pay depends on the route, the AHCCCS rate and your agency or fiscal agent.",
    more: [
      "Under SDAC the member is the employer and a Fiscal Employer Agent processes pay. Under the spouse or parent models, the caregiver is employed by an agency and cannot be paid more than a non-spouse would be.",
      "Ask your ALTCS case manager and the agency for the hourly wage in writing before you start.",
    ],
    src: ["azSdac", "azDirect", "azSpouse"],
    state: "AZ",
  },
  {
    id: "az-overtime",
    topic: "arizona",
    q: "Can family caregivers get paid for overtime hours through ALTCS?",
    a: "Spouses and parents are capped at 40 hours a week. For others, ask the employer how overtime is handled.",
    more: [
      "Spouse and Parent as Paid Caregiver models limit paid services to 40 hours in any seven-day period, so overtime does not arise.",
      "For SDAC workers, the case manager sets authorized hours and the Fiscal Employer Agent processes pay. Federal overtime rules for home care workers are published by the Department of Labor, and the rules for agencies have been under review, so get the employer's overtime policy in writing.",
    ],
    src: ["azSpouse", "azSdac", "dolDirect"],
    state: "AZ",
  },
  {
    id: "az-apply",
    topic: "arizona",
    q: "How do I apply for ALTCS caregiver benefits for an aging parent?",
    a: "Apply for ALTCS for your parent through the Health-e-Arizona Plus portal or by calling (888) 621-6880.",
    more: [
      "You can act on your parent's behalf. You will need documents showing financial and non-financial eligibility.",
      "Once approved, your parent is enrolled with a Long Term Care health plan and assigned a case manager, who develops the service plan with the family.",
      "Caregiver payment happens inside that plan, so approval for your parent comes first.",
    ],
    src: ["azApply", "azAltcs"],
    state: "AZ",
  },

  // 7. Indiana SFC
  {
    id: "in-who",
    topic: "indiana",
    q: "Who qualifies for Indiana Structured Family Caregiving (SFC)?",
    a: "A person on a qualifying Indiana waiver who lives with their caregiver and whose care manager adds SFC to the service plan.",
    more: [
      "SFC is offered under the Health and Wellness (formerly Aged & Disabled), Traumatic Brain Injury and PathWays for Aging waivers.",
      "The caregiver may be a family member or not, but must live in the same home.",
      "The care manager decides the level from a needs-based assessment.",
    ],
    src: ["inFaq", "inSfc"],
    state: "IN",
  },
  {
    id: "in-rate",
    topic: "indiana",
    q: "What is the daily stipend rate for Indiana Structured Family Caregiving?",
    a: "The state pays the agency $77.54, $99.71 or $133.44 a day for Levels 1, 2 and 3. The caregiver's share depends on the agency.",
    more: [
      "These are FSSA daily rates paid to the provider agency, not straight to the family.",
      "How much of the rate reaches the caregiver varies by agency. Get the caregiver's share in writing before you sign.",
      "Up to 15 days of unskilled respite a year are built into SFC.",
    ],
    src: ["inFaq", "inSide"],
    state: "IN",
  },
  {
    id: "in-tax",
    topic: "indiana",
    q: "Can a live-in family caregiver receive tax-free payments under Indiana SFC?",
    a: "Possibly. The IRS excludes some Medicaid waiver difficulty-of-care payments for live-in caregivers. Confirm with a tax professional.",
    more: [
      "IRS Notice 2014-7 excludes qualifying difficulty-of-care payments from a caregiver's income when the caregiver lives in the same home as the person receiving waiver care.",
      "Because Indiana pays the agency and the agency pays the caregiver, ask the agency how your payment is reported (for example W-2 or 1099) and what it believes qualifies.",
      "FSSA does not give tax advice. This is general information.",
    ],
    src: ["irs2014", "irs525", "inFaq"],
    state: "IN",
  },
  {
    id: "in-coach",
    topic: "indiana",
    q: "Does Indiana Structured Family Caregiving require a care coach?",
    a: "Yes. The SFC agency supports the household with visits from a caregiver coach or nurse.",
    more: [
      "These occasional in-person home visits provide person-centered support and training on relevant care needs.",
      "The coach and nursing staff do not provide skilled care themselves.",
      "The agency also trains the caregiver and makes sure they meet qualifications.",
    ],
    src: ["inFaq", "inSfc"],
    state: "IN",
  },
  {
    id: "in-vs-ad",
    topic: "indiana",
    q: "What is the difference between Indiana SFC and the Aged & Disabled (A&D) Waiver?",
    a: "SFC is a service inside the waiver. The waiver is the program, and SFC is paid daily instead of hourly attendant care.",
    more: [
      "The A&D waiver, now called Health and Wellness, offers several services. SFC and attendant care are two of them.",
      "Attendant care is an hourly rate (the state pays the agency $34.36 per hour of direct service). SFC is a daily rate by level of need.",
      "They cannot be stacked. While a person receives SFC, separate payment cannot be made for attendant care, home and community assistance, assisted living or adult family care.",
    ],
    src: ["inSide", "inFaq"],
    state: "IN",
  },

  // 8. South Dakota HOPE Waiver
  {
    id: "sd-services",
    topic: "south-dakota",
    q: "What services are covered under the South Dakota HOPE Waiver?",
    a: "Adult day, chore, homemaker, personal care, respite, adult companion, assisted living, in-home nursing, meals and Structured Family Caregiving, among others.",
    more: [
      "The state's list also includes emergency response systems and community living home services.",
      "All services are delivered by Medicaid-enrolled providers that meet state qualification requirements.",
    ],
    src: ["sdWaiver", "sdHope"],
    state: "SD",
  },
  {
    id: "sd-loc",
    topic: "south-dakota",
    q: "How do you meet the nursing facility level of care for the HOPE Waiver?",
    a: "Case management specialists assess your needs and determine functional eligibility through Dakota at Home.",
    more: [
      "You must meet a nursing facility level of care and take part in a needs assessment.",
      "You must also have an assessed need for one or more waiver services at least once a month, and not live in a hospital, nursing facility or intermediate care facility.",
    ],
    src: ["sdHope", "sdWaiver"],
    state: "SD",
  },
  {
    id: "sd-paid",
    topic: "south-dakota",
    q: "Can a family member get paid as a caregiver under the HOPE Waiver?",
    a: "Structured Family Caregiving lets a participant live with a principal caregiver who is at least 18. Confirm details with Dakota at Home.",
    more: [
      "The home must be the primary residence of both the caregiver and the participant. No more than two participants may receive SFC in one private home.",
      "A Medicaid-enrolled SFC oversight agency assesses the home before services begin.",
      "SFC payments do not include room and board. These rules come from the state's draft waiver renewal, so check current rules before you plan.",
    ],
    src: ["sdWaiver", "sdDakota"],
    state: "SD",
  },
  {
    id: "sd-eligibility",
    topic: "south-dakota",
    q: "What are the age and financial eligibility guidelines for the South Dakota HOPE Waiver?",
    a: "Age 65 or older, or 18 or older with a qualifying disability, and income within 300 percent of the SSI benefit amount.",
    more: [
      "The rules say the person receives SSI or has income within 300 percent of the SSI standard benefit amount, and meets the other Medicaid eligibility criteria.",
      "Financial eligibility is decided by the Division of Economic Assistance.",
      "The person must live, or plan to live, at home or in a HOPE Waiver-approved setting and have an individual support plan.",
    ],
    src: ["sdRule", "sdHope"],
    state: "SD",
  },
  {
    id: "sd-apply",
    topic: "south-dakota",
    q: "How do I apply for the South Dakota HOPE Waiver program?",
    a: "Contact Dakota at Home at 833-663-9673 or use its online referral form. It is free.",
    more: [
      "Intake specialists complete the intake. Case management specialists then do options planning and assessments.",
      "Economic Assistance reviews financial eligibility. Applications are processed first come, first served.",
      "If eligible, case managers build a person-centered plan after exploring natural and community supports.",
    ],
    src: ["sdDakota", "sdWaiver"],
    state: "SD",
  },

  // 9. Structured family caregiving
  {
    id: "sfc-what",
    topic: "sfc",
    q: "What is structured family caregiving and how does it work?",
    a: "A Medicaid service where a caregiver who lives with the person is paid a daily rate, with training and coach visits from an agency.",
    more: [
      "The caregiver may be a relative. The agency trains them, supports the household and receives the daily payment from the state.",
      "The rate depends on the person's assessed level of need rather than hourly time.",
      "In the states we serve, Indiana and South Dakota offer it.",
    ],
    src: ["inSfc", "inFaq", "sdWaiver"],
  },
  {
    id: "sfc-live-in",
    topic: "sfc",
    q: "Do you have to live with the person you care for to qualify for structured family caregiving?",
    a: "In Indiana and South Dakota, yes. The caregiver and participant share a home.",
    more: [
      "Indiana: the principal caregiver must live in the home.",
      "South Dakota: the home must be the primary residence of both the caregiver and the participant.",
      "Other states may differ, so check your state Medicaid agency.",
    ],
    src: ["inFaq", "sdWaiver"],
  },
  {
    id: "sfc-tax",
    topic: "sfc",
    q: "Is the stipend for structured family caregiving taxable income?",
    a: "It may not be. IRS Notice 2014-7 can exclude difficulty-of-care payments for live-in Medicaid waiver caregivers.",
    more: [
      "The exclusion applies to qualifying payments when the caregiver lives with the person. Whether your payment qualifies depends on how it is made and reported.",
      "Ask the agency how it reports your payment, and talk to a tax professional. This is general information, not tax advice.",
    ],
    src: ["irs2014", "irs525"],
  },
  {
    id: "sfc-states",
    topic: "sfc",
    q: "What states currently offer structured family caregiving options?",
    a: "Indiana and South Dakota in our coverage area. Other states run similar models under different names.",
    more: [
      "Indiana offers SFC under its Health and Wellness, TBI and PathWays waivers.",
      "South Dakota lists SFC as a HOPE Waiver service.",
      "For a state we do not cover, ask the state Medicaid agency or your Area Agency on Aging about \"structured family caregiving\" or similar live-in caregiver services.",
    ],
    src: ["inFaq", "sdHope", "eldercare"],
  },
  {
    id: "sfc-vs-pca",
    topic: "sfc",
    q: "How does structured family caregiving differ from personal care attendant programs?",
    a: "SFC is daily, live-in and agency-supported. A personal care attendant program usually pays hourly and has no coach.",
    more: [
      "SFC pays by day, by level of need, to an agency that also trains the caregiver and makes coach or nurse visits.",
      "Attendant and personal care programs, such as Michigan Home Help or Missouri CDS, usually pay by the hour for authorized tasks and are directed by the person receiving care.",
      "Indiana publishes a side-by-side comparison of SFC and attendant care.",
    ],
    src: ["inSide", "miHelp", "moManual"],
  },

  // 10. Personal care aide jobs
  {
    id: "job-quals",
    topic: "jobs",
    q: "What qualifications or certifications do you need to become a personal care aide?",
    a: "Requirements vary by state and employer. Most personal care aides are trained on the job.",
    more: [
      "The Bureau of Labor Statistics notes that training and credential requirements for home health and personal care aides vary by state and employer.",
      "Aides at Medicare-certified home health agencies need at least 75 hours of training and a competency evaluation under 42 CFR 484.80.",
      "Ask the employer about required training, background checks and CPR or first aid certification.",
    ],
    src: ["bls", "cfr484"],
  },
  {
    id: "job-wage",
    topic: "jobs",
    q: "What is the average hourly wage for a personal care aide?",
    a: "The BLS median is $17.21 an hour ($35,800 a year) for home health and personal care aides, May 2025.",
    more: [
      "Median means half earn more and half earn less. Pay varies by state, employer and experience.",
      "Michigan's Home Help individual caregiver rate is $17.13 an hour as of January 1, 2026.",
    ],
    src: ["bls", "miLetter"],
  },
  {
    id: "job-pca-hha",
    topic: "jobs",
    q: "What is the difference between a Personal Care Aide (PCA) and a Home Health Aide (HHA)?",
    a: "A PCA helps with daily living. An HHA also does basic health tasks under a nurse's supervision, with federal training rules.",
    more: [
      "HHAs working for Medicare-certified agencies need 75 hours of training and a competency evaluation.",
      "PCA rules are set by each state and employer, and the work centers on bathing, dressing, meals, mobility and companionship.",
    ],
    src: ["cfr484", "bls"],
  },
  {
    id: "job-duties",
    topic: "jobs",
    q: "What are the daily job responsibilities of a personal care aide?",
    a: "Help with bathing, dressing, toileting, mobility, meals, light housekeeping and companionship.",
    more: [
      "The Bureau of Labor Statistics lists helping clients with daily living activities, housekeeping, meal prep and arranging transportation.",
      "Duties follow the client's plan of care. Skilled medical tasks are outside a personal care aide's role.",
    ],
    src: ["bls", "miHelp"],
  },
  {
    id: "job-find",
    topic: "jobs",
    q: "How do I find entry-level personal care aide jobs hiring immediately?",
    a: "Check our open roles, then your state job service on CareerOneStop. Home care employers hire all year.",
    more: [
      "AAA Advantage Home Care lists current openings on our careers page.",
      "CareerOneStop, sponsored by the U.S. Department of Labor, links to your state's job service and local listings.",
      "The Bureau of Labor Statistics projects strong demand for home health and personal care aides.",
    ],
    src: ["careerOneStop", "bls"],
  },
];

export function stateOf(qa: Qa): StateCode {
  if (qa.state) return qa.state;
  return TOPICS.find((t) => t.id === qa.topic)?.state ?? "ALL";
}

export function topicOf(id: string): Topic {
  return TOPICS.find((t) => t.id === id) ?? TOPICS[0];
}
