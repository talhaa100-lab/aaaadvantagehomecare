import type { Guide } from "../guides";

export const indiana: Guide = {
  slug: "indiana-structured-family-caregiving",
  title: "Indiana Structured Family Caregiving: Levels, Daily Rates and How It Works",
  metaTitle: "Indiana Structured Family Caregiving (SFC): Daily Rates, Levels and Eligibility",
  description:
    "How Indiana’s Structured Family Caregiving service pays a caregiver who lives with a loved one: the three levels, the daily rates paid to the agency, respite, and how to start with your care manager.",
  category: "Indiana",
  locationSlug: "indiana",
  published: "2026-11-09",
  verified: "2026-11-09",
  facts: [
    { label: "Program", value: "Structured Family Caregiving (SFC), an Indiana Medicaid waiver service" },
    { label: "Paid how", value: "A daily rate, by level of need, paid to the SFC agency" },
    { label: "Caregiver must", value: "Live in the same home as the person" },
    { label: "Respite included", value: "Up to 15 days of unskilled respite a year" },
  ],
  intro:
    "Structured Family Caregiving, usually called SFC, lets a caregiver who lives with a person be paid for daily care and support. The caregiver can be a family member. Unlike hourly attendant care, the state pays a daily rate that depends on how much care the person needs.{3}",
  takeaways: [
    "SFC allows a caregiver living with an individual to be paid for providing daily care and support. The caregiver may be a family member or a non-family member, and must live in the home.{3}",
    "SFC is offered under Indiana’s Health and Wellness (formerly Aged & Disabled), Traumatic Brain Injury and PathWays for Aging waivers.{1}",
    "The care manager sets the level (1, 2 or 3) from a needs-based assessment. The state’s daily rates for the three levels are $77.54, $99.71 and $133.44, and they are paid to the provider agency, not straight to the family.{1,2}",
    "How much of the daily rate reaches the caregiver depends on the agency, so ask each SFC provider before you choose one.{1,2}",
    "Up to 15 days of unskilled respite a year are built into SFC, so the caregiver can take a break.{1}",
  ],
  sections: [
    {
      id: "what-is-sfc",
      title: "What Structured Family Caregiving is",
      blocks: [
        {
          type: "p",
          text: "SFC is a Medicaid waiver service. The caregiver, who may be a relative, lives with the person receiving care and is paid for daily care and support. The SFC provider agency trains the caregiver based on the individual’s needs and makes sure the caregiver meets qualifications.{3}",
        },
        {
          type: "p",
          text: "The agency supports the household with visits from a caregiver coach or nurse. These occasional in-person home visits give person-centered support and training on relevant care needs. The coach and nursing staff do not provide skilled care themselves.{1,3}",
        },
        {
          type: "p",
          text: "SFC is available on the Health and Wellness (formerly Aged & Disabled), Traumatic Brain Injury and Indiana PathWays for Aging waivers.{1}",
        },
      ],
    },
    {
      id: "levels-and-rates",
      title: "The three levels and the daily rates",
      blocks: [
        {
          type: "p",
          text: "The state pays a daily rate to the SFC provider on days when services are delivered under an approved service plan. The rate depends on the level of need, which the care manager decides from a needs-based assessment.{1}",
        },
        {
          type: "table",
          head: ["Level", "Daily rate paid to the agency", "Who decides"],
          rows: [
            ["Level 1", "$77.54 a day", "Care manager, through a needs-based assessment{1,2}"],
            ["Level 2", "$99.71 a day", "Care manager, through a needs-based assessment{1,2}"],
            ["Level 3", "$133.44 a day", "Care manager, through a needs-based assessment{1,2}"],
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "These are agency rates, not caregiver paychecks",
          text: "The figures above are what the state pays the provider agency. How the agency shares that with the caregiver varies from agency to agency, so get the caregiver’s share in writing before you sign.{1,2}",
        },
      ],
    },
    {
      id: "sfc-vs-attendant-care",
      title: "SFC compared with hourly attendant care",
      blocks: [
        {
          type: "p",
          text: "FSSA publishes a side-by-side overview of the Aged & Disabled waiver’s attendant care and SFC services. The key difference is how each is paid.{2}",
        },
        {
          type: "table",
          head: ["", "Attendant care", "Structured Family Caregiving"],
          rows: [
            ["Rate structure", "An hourly rate, the same regardless of assessed need", "A daily rate based on the assessed level of need{2}"],
            ["State pays the agency", "$34.36 per hour of direct service", "$77.54, $99.71 or $133.44 a day by level{2}"],
          ],
        },
        {
          type: "p",
          text: "The two cannot be stacked. While a person receives SFC, separate payment may not be made for home and community assistance, assisted living, attendant care or adult family care. Other waiver or Medicaid services can still be added unless they are duplicative.{1}",
        },
      ],
    },
    {
      id: "who-can-be-paid",
      title: "Who can be the paid caregiver",
      blocks: [
        {
          type: "p",
          text: "The principal caregiver can be a family member or a non-family member, but must live in the home.{3} FSSA also confirms a waiver recipient who is supported by a spouse can work with their care manager at any time to consider including SFC in the service plan.{1}",
        },
        {
          type: "p",
          text: "One rule trips up families. A person cannot be both the paid principal caregiver under SFC and paid to deliver prior-authorized home health aide or nursing services for the same recipient. Another household member can serve as the home health aide as long as it is not the same person and the services are not at the same moment.{1}",
        },
        {
          type: "p",
          text: "SFC does not prohibit a family from continuing skilled tasks taught by a physician or at hospital discharge. Those are not part of the daily SFC service.{1}",
        },
      ],
    },
    {
      id: "respite",
      title: "Respite for the caregiver",
      blocks: [
        {
          type: "p",
          text: "Up to 15 days of unskilled respite a year are included in SFC, and the agency must provide them. Funding is included in the daily rate paid to the agency, and the respite caregiver must be someone qualified who is familiar with the participant’s needs.{1}",
        },
        {
          type: "p",
          text: "Skilled respite is not part of SFC but can be requested separately as a waiver service. Whether the family caregiver gets a daily payment on respite days varies by provider, which is another good question to ask each agency.{1}",
        },
      ],
    },
    {
      id: "how-to-start",
      title: "How to get started",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Confirm the person is on a qualifying waiver",
              text: "SFC is a waiver service. It is offered through the Health and Wellness, Traumatic Brain Injury and PathWays for Aging waivers.{1} If your loved one is not on one yet, getting that started comes first. We can help you work out the right next step.",
            },
            {
              title: "Ask the care manager about SFC",
              text: "The care manager completes a needs-based assessment, decides the level and adds SFC to the service plan.{1}",
            },
            {
              title: "Choose an SFC provider agency",
              text: "Ask your care manager for SFC providers in your area.{1} Compare how each handles the caregiver’s share of the daily rate, respite and training.",
            },
            {
              title: "Complete training and settle into the visit schedule",
              text: "The provider trains the caregiver based on the individual’s needs and ensures the caregiver meets qualifications. The caregiver coach or nurse then visits the home.{3}",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I be paid for caring for a family member in Indiana?",
      a: "Yes, through Structured Family Caregiving, if your loved one is on a qualifying waiver, you live in the same home, and an SFC provider agency enrolls you as the caregiver.{1,3}",
    },
    {
      q: "Does the family caregiver get the whole daily rate?",
      a: "Not necessarily. FSSA pays the daily rate to the provider agency. How it is shared with the caregiver depends on the provider, so ask about it before choosing an agency.{1,2}",
    },
    {
      q: "Can a spouse be the paid caregiver under SFC?",
      a: "FSSA says a waiver recipient who is supported by a spouse can work with their care manager at any time to consider adding SFC to their service plan.{1}",
    },
    {
      q: "What does SFC include besides the daily payment?",
      a: "Training for the caregiver, home visits from a caregiver coach or nurse, and up to 15 days of unskilled respite a year.{1,3}",
    },
    {
      q: "Can SFC be combined with home health?",
      a: "Yes, if the person qualifies for state plan home health, which needs prior authorization. The services cannot be delivered at the same time or by the same paid caregiver.{1}",
    },
  ],
  sources: [
    {
      org: "Indiana Family and Social Services Administration",
      title: "Structured Family Caregiving Frequently Asked Questions for Waiver Individuals and Families",
      url: "https://www.in.gov/fssa/files/SFC-FAQ-Families-FINAL.pdf",
    },
    {
      org: "Indiana Family and Social Services Administration",
      title: "Aged & Disabled (A&D) Waiver Attendant Care and Structured Family Care Overview",
      url: "https://www.in.gov/fssa/files/SFC-ATTC-side-by-side.pdf",
    },
    {
      org: "Indiana Family and Social Services Administration",
      title: "Structured Family Caregiving",
      url: "https://www.in.gov/fssa/ompp/files/Structured-Family-Caregiving.pdf",
    },
  ],
  related: ["get-paid-to-care-for-a-family-member", "michigan-home-help-program"],
};
