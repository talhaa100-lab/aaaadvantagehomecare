import type { Guide } from "../guides";

export const overview: Guide = {
  slug: "get-paid-to-care-for-a-family-member",
  title: "Can You Get Paid to Care for a Family Member? Medicaid Rules in Five States",
  metaTitle: "Get Paid to Care for a Family Member: Medicaid Programs in MI, MO, AZ, IN and SD",
  description:
    "A plain-English guide to being paid as a family caregiver through Medicaid, with the program, who can be paid, who cannot, and where to start in Michigan, Missouri, Arizona, Indiana and South Dakota.",
  category: "Overview",
  published: "2026-11-09",
  verified: "2026-11-09",
  facts: [
    { label: "Short answer", value: "Often yes, but only through a state Medicaid program" },
    { label: "First test", value: "Your loved one has to qualify, not you" },
    { label: "You are paid for", value: "Hours or days in an approved plan of care" },
    { label: "Varies by state", value: "Who can be paid, the rate and the limits" },
  ],
  intro:
    "In the five states we serve, Medicaid programs can pay a family member to provide care at home. But there is no single national rule. Each state decides who can be paid, how much and under what limits, and the first thing that has to happen is that your loved one qualifies.",
  takeaways: [
    "Family caregivers are paid through a state program that approves a plan of care after an assessment. The plan, not your calendar, sets the paid hours.{1}",
    "Spouses are the most common exclusion. Michigan and Missouri do not pay spouses, and Arizona allows it only under strict conditions and a 40-hour weekly cap.{2,3,8}",
    "Indiana’s Structured Family Caregiving requires the caregiver to live with the person, and its daily rates are paid to the agency, not directly to the family.{5,10}",
    "The care you give outside the approved plan is not automatically paid. Programs also cannot cut paid hours just because the provider is family.{1}",
    "Every state’s starting point is different: a county MDHHS office, a DSDS assessment, an ALTCS case manager, a waiver care manager or Dakota at Home.{2,3,4,6,7}",
  ],
  sections: [
    {
      id: "how-it-works",
      title: "How paid family caregiving works",
      blocks: [
        {
          type: "p",
          text: "The U.S. Department of Labor describes how these programs work. Certain Medicaid-funded and other publicly funded programs let the recipient, or their representative, select and supervise the care provider, and allow that provider to be a family or household member.{1}",
        },
        {
          type: "p",
          text: "The services and the number of paid hours are written into a plan of care. The program approves it after assessing what the person needs and their existing circumstances, including unpaid help from family or household members.{1}",
        },
        {
          type: "callout",
          title: "Paid hours versus the care you actually give",
          text: "When a family member is paid, only the hours in the approved plan of care are employment. Help given at other times is part of the family relationship and need not be paid. The plan must be reasonable: the program cannot reduce paid hours because the provider is family, or require more unpaid hours from a family provider in order to cut paid hours.{1}",
        },
      ],
    },
    {
      id: "state-by-state",
      title: "State by state: who can be paid",
      blocks: [
        {
          type: "table",
          head: ["State", "Program", "Can family be paid?", "Who cannot be paid"],
          rows: [
            ["Michigan", "Home Help", "Yes. A family member or friend 18 or older.{2}", "A spouse, a parent caring for a minor child, or anyone who also receives Home Help.{2}"],
            ["Missouri", "Consumer Directed Services (CDS)", "Yes. The attendant may be a family member.{3}", "A spouse or legal guardian, a current CDS participant, or someone previously involved in Medicaid fraud.{3}"],
            ["Arizona", "ALTCS (Self-Directed Attendant Care and paid spouse or parent models)", "Yes. Family members under SDAC, and spouses and parents of minors under special agency-based rules.{4}", "Under SDAC: a parent of a minor child, a spouse as paid caregiver, or a legal guardian as worker. Paid spouse and parent models have a 40-hour weekly cap.{4,8}"],
            ["Indiana", "Structured Family Caregiving (SFC)", "Yes. The caregiver may be a family member but must live in the home.{5}", "Same person cannot be both the SFC principal caregiver and the paid home health aide or nurse for the same recipient.{6}"],
            ["South Dakota", "HOPE Waiver, including Structured Family Caregiving", "SFC is a waiver service for a participant living with a principal caregiver who is 18 or older.{9}", "Details are in the state’s draft waiver renewal. Confirm with Dakota at Home.{9}"],
          ],
        },
        {
          type: "p",
          text: "Each state has its own full guide below. Follow the links to the one that matches where your loved one lives.",
        },
      ],
    },
    {
      id: "what-states-share",
      title: "What most programs have in common",
      blocks: [
        {
          type: "ul",
          items: [
            "An assessment decides what help is authorized. In Michigan an adult services worker visits the home, in Arizona the ALTCS case manager assesses needs, and in Indiana the care manager sets the SFC level.{2,4,6}",
            "The person receiving care has real control. In Michigan the client is the employer, in Missouri the participant is the employer of record, and in Arizona’s self-directed option the member hires and manages the worker.{2,3,4}",
            "The caregiver has to be set up before being paid. Michigan caregivers enroll in CHAMPS and pass a background check, Arizona SDAC workers complete required training, and Indiana SFC caregivers are trained by the provider agency.{2,4,5}",
            "There is a limit on the paid arrangement somewhere. Examples include the spouse exclusion in Michigan and Missouri, Arizona’s 40-hour weekly cap for spouses and parents, and the live-in requirement in Indiana.{2,3,5,8}",
          ],
        },
      ],
    },
    {
      id: "next-steps",
      title: "Your next steps",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Find the right state program",
              text: "Use the table above. Your loved one’s state of residence decides which program applies.",
            },
            {
              title: "Confirm your loved one is likely to qualify",
              text: "Programs generally require Medicaid and a level of need. Michigan, for example, requires active Medicaid and a need for physical help with at least one activity of daily living, and South Dakota requires a nursing facility level of care.{2,7}",
            },
            {
              title: "Check whether you are eligible to be paid",
              text: "Spouses, parents of minors and legal guardians have the most restrictions. Everyone else should look at the state-specific rules.",
            },
            {
              title: "Start with the right office",
              text: "A county MDHHS office in Michigan, DSDS in Missouri, an ALTCS case manager in Arizona, a waiver care manager in Indiana, or Dakota at Home in South Dakota.{2,3,4,6,7}",
            },
            {
              title: "Ask us if you want help",
              text: "AAA Advantage Home Care Agency helps families understand these programs, check eligibility and work through the process. Use the button below to get started.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Will Medicaid pay me for every hour I care for my family member?",
      a: "No. Programs pay for the hours or days approved in the plan of care. Time outside the plan is part of the family relationship and need not be paid.{1}",
    },
    {
      q: "Can my spouse be paid to be my caregiver?",
      a: "It depends on the state. Michigan and Missouri do not pay a spouse. Arizona allows a paid spouse only for extraordinary care, through an agency and up to 40 hours in a seven-day period. Indiana says a waiver recipient supported by a spouse can work with their care manager on adding SFC.{2,3,6,8}",
    },
    {
      q: "Can the program lower my paid hours because I am family?",
      a: "Under the Department of Labor’s guidance on these programs, a plan of care is not reasonable if it reduces the paid hours because the provider is a family or household member.{1}",
    },
    {
      q: "Who has to qualify first, me or the person receiving care?",
      a: "The person receiving care. The caregiver is then chosen and paid under the program’s rules once the person is approved.{2,7}",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. It is general information based on official program documents. Rules change, so confirm the current details with the state agency or with us.",
    },
  ],
  sources: [
    {
      org: "U.S. Department of Labor, Wage and Hour Division",
      title: "Fact Sheet #79F: Paid Family or Household Members in Certain Medicaid-Funded and Certain Other Publicly Funded Programs",
      url: "https://www.dol.gov/agencies/whd/fact-sheets/79f-flsa-publicly-funded-programs",
    },
    {
      org: "Michigan Department of Health and Human Services",
      title: "Home Help",
      url: "https://www.michigan.gov/mdhhs/adult-child-serv/adults-and-seniors/independent",
    },
    {
      org: "Missouri Department of Health and Senior Services",
      title: "HCBS Manual: Personal Care Assistance, State Plan (Consumer-Directed Services Model)",
      url: "https://health.mo.gov/providers/manuals/home-and-community-based-services-manual/300-available-home-and-community-13",
    },
    {
      org: "Arizona Health Care Cost Containment System (AHCCCS)",
      title: "AMPM Policy 1320-A: Self-Directed Attendant Care",
      url: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/1300/1320-A.pdf",
    },
    {
      org: "Indiana Family and Social Services Administration",
      title: "Structured Family Caregiving",
      url: "https://www.in.gov/fssa/ompp/files/Structured-Family-Caregiving.pdf",
    },
    {
      org: "Indiana Family and Social Services Administration",
      title: "Structured Family Caregiving Frequently Asked Questions for Waiver Individuals and Families",
      url: "https://www.in.gov/fssa/files/SFC-FAQ-Families-FINAL.pdf",
    },
    {
      org: "South Dakota Department of Human Services",
      title: "HOPE Waiver and Dakota at Home",
      url: "https://dhs.sd.gov/en/ltss/hope-waiver",
    },
    {
      org: "Arizona Health Care Cost Containment System (AHCCCS)",
      title: "AMPM Policy 1240-A: Direct Care Services (Attendant Care, Personal Care, and Homemaker Services)",
      url: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/1200/1240-A.pdf",
    },
    {
      org: "South Dakota Department of Human Services",
      title: "Application for 1915(c) HCBS Waiver, Draft SD.010.08.00 (HOPE Waiver renewal)",
      url: "https://dhs.sd.gov/content/dam/digital/united-states/south-dakota/sdo/pdf/public-notices/HOPE-Waiver-Renewal-Application-March2025.pdf",
    },
    {
      org: "Indiana Family and Social Services Administration",
      title: "Aged & Disabled (A&D) Waiver Attendant Care and Structured Family Care Overview",
      url: "https://www.in.gov/fssa/files/SFC-ATTC-side-by-side.pdf",
    },
  ],
  related: [
    "michigan-home-help-program",
    "missouri-consumer-directed-services",
    "arizona-altcs-paid-family-caregiver",
    "indiana-structured-family-caregiving",
    "south-dakota-hope-waiver",
  ],
};
