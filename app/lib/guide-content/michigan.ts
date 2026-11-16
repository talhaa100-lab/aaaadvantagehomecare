import type { Guide } from "../guides";

export const michigan: Guide = {
  slug: "michigan-home-help-program",
  title: "Michigan Home Help: How a Family Member Gets Paid to Provide Care",
  metaTitle: "Michigan Home Help Program: Who Gets Paid, Pay Rate and How to Apply (2026)",
  description:
    "How Michigan’s Home Help program works in 2026: who qualifies, which relatives can be paid, the $17.13 hourly caregiver rate, and the step-by-step application with MDHHS.",
  category: "Michigan",
  locationSlug: "michigan",
  published: "2026-11-09",
  verified: "2026-11-09",
  facts: [
    { label: "Program", value: "Home Help (Michigan Dept. of Health and Human Services)" },
    { label: "Individual caregiver pay", value: "$17.13 an hour since Jan. 1, 2026" },
    { label: "Spouse can be paid?", value: "No" },
    { label: "Decision time", value: "Written notice within 45 days" },
  ],
  intro:
    "Michigan’s Home Help program pays for hands-on help at home, and the person receiving care gets to choose who provides it, including a family member or friend. Here is who qualifies, who can and cannot be paid, what the pay rate is, and how the application works.{1}",
  takeaways: [
    "Home Help is run by the Michigan Department of Health and Human Services (MDHHS) to help people live safely at home instead of in an adult foster care home, a home for the aged or a nursing facility.{1}",
    "The person receiving care is the employer, not the State of Michigan. They can hire, fire or change their caregiver at any time.{1}",
    "A family member or friend who is at least 18 can be the paid caregiver. A spouse, a parent caring for a minor child, and anyone who also receives Home Help cannot.{1}",
    "Since January 1, 2026 the individual caregiver rate is $17.13 an hour: the $13.73 state minimum wage plus a $3.40 pass-through.{2,3}",
    "There is no maximum number of Home Help hours. MDHHS sets hours person by person after an in-home assessment.{1}",
  ],
  sections: [
    {
      id: "what-is-home-help",
      title: "What Michigan Home Help is",
      blocks: [
        {
          type: "p",
          text: "Home Help, previously called Independent Living Services, is designed for people who want to live safely and independently in their own home. A range of services is available to anyone who needs assistance to maintain that ability.{1}",
        },
        {
          type: "p",
          text: "The program is administered by MDHHS and gives qualified people funding to hire someone to help with daily activities. The helper is not a state employee: recipients hire and employ their own providers, who can be a relative, friend, neighbor or a home care agency.{4}",
        },
        {
          type: "callout",
          title: "You are the employer",
          text: "In Home Help, the client is the employer. If a client is unhappy with their caregiver, they can choose a different one at any time.{1}",
        },
      ],
    },
    {
      id: "who-qualifies",
      title: "Who qualifies for Home Help",
      blocks: [
        {
          type: "p",
          text: "To receive Home Help, a person must have active Medicaid and need physical assistance with at least one activity of daily living.{4}",
        },
        {
          type: "p",
          text: "Income that is above the Medicaid standard does not automatically rule someone out. MDHHS says people with personal care needs whose income exceeds Medicaid eligibility standards may still be eligible, and to ask the local adult services unit about Home Help for individuals with a deductible.{4}",
        },
        {
          type: "p",
          text: "If your loved one does not have Medicaid yet, MDHHS says to apply at Michigan.gov/MiBridges or at the local MDHHS office.{1}",
        },
      ],
    },
    {
      id: "who-can-be-paid",
      title: "Who can and cannot be the paid caregiver",
      blocks: [
        {
          type: "p",
          text: "Most families ask this first. The rules come from MDHHS’s own program page and its Adult Services Manual.",
        },
        {
          type: "table",
          head: ["Caregiver", "Can be paid?", "What MDHHS says"],
          rows: [
            ["Adult child, sibling or other relative (18 or older)", "Yes", "The client can choose an individual caregiver: a family member or friend who is at least 18.{1}"],
            ["Friend or neighbor (18 or older)", "Yes", "Providers may be a relative, friend, neighbor or health care agency.{4}"],
            ["Spouse", "No", "A spouse caring for a spouse is a responsible relative and cannot be paid Home Help.{5}"],
            ["Parent caring for a minor child", "No", "A parent caring for a minor child cannot be paid.{1,5}"],
            ["Anyone 17 or under", "No", "Minors cannot be paid caregivers.{5}"],
            ["Someone who also receives Home Help", "No", "The caregiver cannot also receive Home Help services.{1}"],
          ],
        },
        {
          type: "p",
          text: "Being eligible to be hired is only the first step. Caregivers must enroll in the Community Health Automated Medicaid Processing System (CHAMPS) and pass a background check before they can be paid, and every caregiver must be approved in CHAMPS and given a provider ID number first.{1}",
        },
        {
          type: "p",
          text: "MDHHS also expects the caregiver to be able to follow instructions, perform the services required, handle emergencies, be in adequate health for the work and be willing to take training if needed. An adult services worker checks this in an in-person interview, and payment can be stopped if the caregiver stops meeting the criteria.{5}",
        },
      ],
    },
    {
      id: "what-it-pays",
      title: "What Home Help pays and what it covers",
      blocks: [
        {
          type: "p",
          text: "MDHHS publishes the individual caregiver and agency rates in a county rate table. The current rates took effect January 1, 2026, when the state minimum wage rose to $13.73.{2,3}",
        },
        {
          type: "table",
          head: ["Provider type", "Hourly rate (from Jan. 1, 2026)", "How it is built"],
          rows: [
            ["Individual caregiver (family or friend)", "$17.13", "$13.73 minimum wage + $3.40 pass-through{2,3}"],
            ["Agency provider", "$27.00", "$23.60 + $3.40 pass-through{2}"],
          ],
        },
        {
          type: "p",
          text: "Check the county table for your county before you plan around a number, because MDHHS notes the hourly rate is based on where the client lives.{4}",
        },
        {
          type: "p",
          text: "There is no cap on hours. Each person is unique, so approved hours are determined on an individual basis after the home visit assessment, which looks at what help is needed and how long each task takes.{1,4}",
        },
        {
          type: "p",
          text: "Covered help includes bathing, dressing, grooming, moving through the home, transferring and using the toilet. If the client qualifies, help can also include light housework, meal preparation and clean-up, and travel for shopping or laundry.{4}",
        },
        {
          type: "p",
          text: "Home Help does not cover heavy housework, home repairs, prompting or reminding someone to complete a task, supervision, transportation or yard work.{1}",
        },
      ],
    },
    {
      id: "how-to-apply",
      title: "How to apply, step by step",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Send a referral to the county MDHHS office",
              text: "A referral is simply a request for services. The person who needs help, or someone on their behalf, can make it by phone, mail, fax or in person at the local MDHHS office in the county where the client lives.{1}",
            },
            {
              title: "Complete the two forms",
              text: "An Adult Services Worker (ASW) is assigned and sends the DHS-390 Adult Services Application, signed by the client or guardian, and the MDHHS-6200 Adult Services Medical Needs Certification, completed by the client’s Medicaid-approved medical provider.{1}",
            },
            {
              title: "Attend the home visit together",
              text: "The ASW schedules a home visit to assess eligibility. If a caregiver has already been chosen, MDHHS says it is best if they attend too. If not, the ASW explains the options for choosing one.{1}",
            },
            {
              title: "Get the written decision",
              text: "The ASW approves or denies the application and sends written notice within 45 days. If the client disagrees with the decision, they can request a hearing.{1}",
            },
            {
              title: "Enroll the caregiver so they can be paid",
              text: "The caregiver enrolls in CHAMPS and completes the background check. For help, Provider Support Services is at 800-979-4662 or providersupport@michigan.gov.{1} Starting this early can save time, since nobody is paid before the provider ID number is issued.{1}",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I get paid to take care of my mom in Michigan?",
      a: "Possibly. If your mother has active Medicaid, needs hands-on help with at least one activity of daily living and is approved for Home Help, she can choose you as her paid individual caregiver, as long as you are at least 18, are not her spouse, and enroll in CHAMPS and pass the background check.{1,4}",
    },
    {
      q: "Can a spouse be paid through Home Help?",
      a: "No. MDHHS does not pay Home Help to a responsible relative, which means a spouse caring for a spouse or a parent caring for a minor child.{5}",
    },
    {
      q: "How long does the Home Help application take?",
      a: "It can take up to 45 days. MDHHS sends the client a written notice of the decision within that time.{1}",
    },
    {
      q: "How many hours can Home Help pay for?",
      a: "There is no set maximum. Hours are approved case by case based on the assessment of the individual’s needs.{1}",
    },
    {
      q: "Does the family caregiver need to enroll anywhere?",
      a: "Yes. Caregivers must enroll in CHAMPS and pass a background check, and they cannot be paid until they have been approved and given a provider ID number.{1}",
    },
  ],
  sources: [
    {
      org: "Michigan Department of Health and Human Services",
      title: "Home Help",
      url: "https://www.michigan.gov/mdhhs/adult-child-serv/adults-and-seniors/independent",
    },
    {
      org: "Michigan Department of Health and Human Services",
      title: "Adult Services Manual ASM 138: Individual Caregiver and Agency County Rates",
      url: "https://mdhhs-pres-prod.michigan.gov/olmweb/exf/AS/Public/ASM/138.pdf",
    },
    {
      org: "Michigan Department of Health and Human Services",
      title: "Numbered Letter L 25-75: January 2026 Home Help Individual Caregiver Pay Rate Increase",
      url: "https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Assistance-Programs/Medicaid-BPHASA/Numbered-Letter-L-25-75-Home-Help-final.pdf",
    },
    {
      org: "Michigan Department of Health and Human Services",
      title: "DHS-PUB-0815: Home Help Services",
      url: "https://www.michigan.gov/mdhhs/-/media/Project/Websites/mdhhs/Adult-and-Childrens-Services/Adults-and-Seniors/Forms-and-Publications/DHS-PUB-0815.pdf",
    },
    {
      org: "Michigan Department of Health and Human Services",
      title: "Adult Services Manual ASM 135: Home Help Caregivers",
      url: "https://mdhhs-pres-prod.michigan.gov/olmweb/exf/AS/Public/ASM/135.pdf",
    },
  ],
  related: ["get-paid-to-care-for-a-family-member", "indiana-structured-family-caregiving"],
};
