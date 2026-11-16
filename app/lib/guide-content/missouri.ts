import type { Guide } from "../guides";

export const missouri: Guide = {
  slug: "missouri-consumer-directed-services",
  title: "Missouri Consumer Directed Services: Hiring a Family Member as Your Attendant",
  metaTitle: "Missouri Consumer Directed Services (CDS): Who Can Be Paid and How It Works",
  description:
    "How Missouri’s Consumer Directed Services program works: you hire your own personal care attendant, family members are allowed, spouses and legal guardians are not. Includes the 2026 provider enrollment pause.",
  category: "Missouri",
  locationSlug: "missouri",
  published: "2026-11-09",
  verified: "2026-11-09",
  facts: [
    { label: "Program", value: "Consumer Directed Services (CDS), MO HealthNet" },
    { label: "Family can be paid?", value: "Yes, except a spouse or legal guardian" },
    { label: "You are", value: "The employer of your attendant" },
    { label: "Run by", value: "Missouri Dept. of Health and Senior Services (DSDS)" },
  ],
  intro:
    "Missouri’s Consumer Directed Services program, known as CDS, lets eligible MO HealthNet participants hire, train and supervise the person who provides their personal care. That person can be a family member, with two exceptions: a spouse and a legal guardian.{2,3}",
  takeaways: [
    "CDS is Missouri’s consumer-directed personal care program under MO HealthNet. Participants hire, train and supervise the attendant they choose.{2}",
    "The attendant can be a family member, but cannot be the participant’s spouse or legal guardian.{1,3}",
    "The attendant is the employee of the participant, not of the CDS vendor. The vendor is responsible for training the consumer, attendant screening, timekeeping and taxes under the consumer’s employer number.{2}",
    "Services come from a face-to-face assessment and a person-centered care plan from the Division of Senior and Disability Services (DSDS).{3}",
    "Since August 1, 2026, Missouri has paused new CDS provider enrollments for six months. Providers already enrolled are not affected.{5}",
  ],
  sections: [
    {
      id: "what-is-cds",
      title: "What CDS is",
      blocks: [
        {
          type: "p",
          text: "MO HealthNet, Missouri’s state Medicaid program, offers a consumer-directed personal care program. Eligible applicants hire, train and supervise the individuals they choose to provide personal care. It is administered by the Division of Senior and Disability Services within the Department of Health and Senior Services (DHSS) and is available statewide.{2}",
        },
        {
          type: "p",
          text: "Assistance covers daily living activities, including toileting, mobility, cooking and light housekeeping. The program is not limited to older adults, and the person decides when care is delivered.{2}",
        },
        {
          type: "p",
          text: "In Missouri law, a personal care attendant is a person, other than the consumer’s spouse, who performs personal care assistance services for the consumer.{4}",
        },
      ],
    },
    {
      id: "who-can-be-paid",
      title: "Who can be hired as the attendant",
      blocks: [
        {
          type: "table",
          head: ["Attendant", "Allowed?", "What the state says"],
          rows: [
            ["Adult child, sibling, grandchild or other relative", "Yes", "The attendant may be a family member.{1}"],
            ["Spouse", "No", "The attendant cannot be the participant’s spouse.{1,3}"],
            ["Legal guardian", "No", "A participant may not hire a legally responsible relative, such as a spouse or guardian.{1,3}"],
            ["Someone who is a current CDS participant", "No", "The attendant cannot be a current CDS participant.{1,3}"],
            ["Someone previously involved in Medicaid fraud", "No", "The attendant must not have been involved in Medicaid fraud.{1}"],
          ],
        },
        {
          type: "p",
          text: "Because the participant is the employer of record, the choice is theirs. DHSS lists the participant’s duties as selecting and hiring the attendant, training them on the tasks in the care plan, supervising the work and, if needed, ending the arrangement.{1,3}",
        },
      ],
    },
    {
      id: "what-is-covered",
      title: "What CDS covers and what it does not",
      blocks: [
        {
          type: "p",
          text: "CDS pays for personal care tasks authorized in the participant’s person-centered care plan. DHSS lists situations where CDS will not be authorized:{1}",
        },
        {
          type: "ul",
          items: [
            "Tasks whose primary benefit is to a household unit, or that household members would reasonably be expected to share, unless they go above and beyond what is typical for a household member without a disability.{1}",
            "Any task that must be performed or trained by a licensed professional, such as skilled nursing or physician-ordered therapies.{1}",
            "Services for people who live in a nursing facility, a residential care facility or an assisted living facility licensed by DHSS.{1}",
            "Services for pets, friends or visitors, or services when the participant is not home.{3}",
          ],
        },
        {
          type: "p",
          text: "Visits are tracked through electronic visit verification, and misusing it counts as fraud under the program rules.{3}",
        },
      ],
    },
    {
      id: "enrollment-pause",
      title: "Check this first: the 2026 CDS provider enrollment pause",
      blocks: [
        {
          type: "callout",
          tone: "warn",
          title: "New CDS providers cannot enroll right now",
          text: "Effective August 1, 2026, the Missouri Department of Social Services and MMAC began a six-month statewide pause on new Consumer Directed Services and personal care provider enrollments. It can be extended in six-month steps for up to one year. Providers already enrolled, applications received before August 1 and revalidations are not affected.{5}",
        },
        {
          type: "p",
          text: "The pause applies to providers, meaning the CDS vendor organizations, not to participants. In practice it means a family should choose a CDS vendor that is already actively enrolled. Existing enrolled providers may keep serving participants.{5}",
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How to start, step by step",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Get assessed by DSDS",
              text: "Participants agree to a comprehensive face-to-face assessment with DSDS or its designee, and again at reassessment. The result is a person-centered care plan that lists the authorized tasks.{3}",
            },
            {
              title: "Choose an enrolled CDS vendor",
              text: "Pick a vendor that is actively enrolled with MO HealthNet. The vendor is responsible for training the consumer, and for attendant screening, timekeeping, taxes paid under the consumer’s employer number and repayment of funds to the state.{2}",
            },
            {
              title: "Hire your attendant",
              text: "Select a family member or other person who is not on the excluded list above, and train them on the tasks in the care plan.{1,3}",
            },
            {
              title: "Deliver and record care",
              text: "The attendant provides only the tasks authorized in the plan. Time is recorded through electronic visit verification.{3}",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I be paid to care for my parent in Missouri?",
      a: "Under CDS the attendant may be a family member, so an adult child can be hired by a parent who is an eligible participant. The attendant cannot be the participant’s spouse or legal guardian.{1,2}",
    },
    {
      q: "Can my husband or wife be my CDS attendant?",
      a: "No. Missouri law defines a personal care attendant as a person other than the consumer’s spouse, and DHSS says the attendant cannot be the participant’s spouse or legal guardian.{1,4}",
    },
    {
      q: "Who is the attendant’s employer in CDS?",
      a: "The participant is the employer of record. The attendant is not an employee of the CDS vendor.{1,2}",
    },
    {
      q: "Is CDS available if I live in assisted living?",
      a: "No. DHSS says people who live in a nursing facility, residential care facility or assisted living facility licensed by DHSS are not eligible for CDS.{1}",
    },
    {
      q: "Does the 2026 moratorium mean families cannot get CDS?",
      a: "No. The pause covers new provider enrollments, not participants. Actively enrolled providers can keep serving MO HealthNet participants.{5}",
    },
  ],
  sources: [
    {
      org: "Missouri Department of Health and Senior Services",
      title: "HCBS Manual: Personal Care Assistance, State Plan (Consumer-Directed Services Model)",
      url: "https://health.mo.gov/providers/manuals/home-and-community-based-services-manual/300-available-home-and-community-13",
    },
    {
      org: "Missouri Medicaid Audit and Compliance (MMAC)",
      title: "Consumer Directed Services Orientation",
      url: "https://mmac.mo.gov/wp-content/uploads/sites/11/2022/08/CDS-Orientation-July-2022-Website.pdf",
    },
    {
      org: "Missouri Department of Health and Senior Services",
      title: "CDS Rights and Responsibilities (HCBS Manual Appendix 2e)",
      url: "https://health.mo.gov/seniors/hcbs/hcbsmanual/pdf/4.00appendix2e.pdf",
    },
    {
      org: "Missouri Revisor of Statutes",
      title: "RSMo Section 208.900: Definitions",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=208.900",
    },
    {
      org: "Missouri Medicaid Audit and Compliance (MMAC)",
      title: "DME and CDS Temporary New Enrollment Moratoria (July 24, 2026)",
      url: "https://mmac.mo.gov/dme-cds-temporary-new-enrollment-moratoria/",
    },
  ],
  related: ["get-paid-to-care-for-a-family-member", "michigan-home-help-program"],
};
