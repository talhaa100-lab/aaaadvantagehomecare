import type { Guide } from "../guides";

export const arizona: Guide = {
  slug: "arizona-altcs-paid-family-caregiver",
  title: "Arizona ALTCS: How Family Caregivers Can Be Paid, Including Spouses and Parents",
  metaTitle: "Arizona ALTCS Paid Family Caregiver Rules: Self-Directed Care, Spouse and Parent Options",
  description:
    "How family members can be paid through Arizona’s ALTCS program: Self-Directed Attendant Care, the Spouse and Parent as Paid Caregiver models, the 40-hour weekly limit and how to start with your case manager.",
  category: "Arizona",
  locationSlug: "arizona",
  published: "2026-11-09",
  verified: "2026-11-09",
  facts: [
    { label: "Program", value: "ALTCS, run by AHCCCS (Arizona’s Medicaid agency)" },
    { label: "Family routes", value: "Self-Directed Attendant Care, or agency-employed spouse or parent" },
    { label: "Spouse / parent limit", value: "40 hours in any seven-day period" },
    { label: "Hours set by", value: "The ALTCS case manager’s assessment" },
  ],
  intro:
    "Arizona has more than one way for a family member to be paid for attendant care through ALTCS. Which one fits depends on who the caregiver is: an adult child or other relative, a spouse, or the parent of a minor child. The rules for each are different, and the limits are specific.{1,2}",
  takeaways: [
    "In Self-Directed Attendant Care (SDAC), the member recruits, hires, manages and can dismiss the direct care worker of their choice, including family members.{1}",
    "SDAC does not allow a parent of a minor child to be the paid worker, and a spouse as paid caregiver cannot be reimbursed under SDAC.{1}",
    "A spouse can be paid under a separate model only for extraordinary care, through an agency, and for no more than 40 hours in a seven-day period.{2,3}",
    "A parent of a minor child can be paid under the Parent as Paid Caregiver model, with a 40-hour weekly limit and other conditions.{2,4}",
    "The number of hours is set from an assessment by the ALTCS case manager, not by the family.{1}",
  ],
  sections: [
    {
      id: "two-routes",
      title: "Two main routes to paid family care",
      blocks: [
        {
          type: "table",
          head: ["Route", "Who can be the paid family caregiver", "Key limits"],
          rows: [
            [
              "Self-Directed Attendant Care (SDAC)",
              "Family members chosen by the member, such as an adult child or other relative{1}",
              "Parents of minor children cannot be paid workers, a spouse as paid caregiver cannot be reimbursed under SDAC, and a legal guardian cannot be the worker. Member must live in their own home.{1}",
            ],
            [
              "Spouse as Paid Caregiver",
              "The member’s spouse{2,3}",
              "Only for extraordinary care, employed or contracted through an agency, at most 40 hours in seven days, and paid no more than a non-spouse would be.{2,3}",
            ],
            [
              "Parent as Paid Caregiver",
              "A parent of a minor child, meaning someone with formal physical or legal custody{2,4}",
              "Extraordinary care, agency employment or contract, and a 40-hour weekly limit that also applies if the parent is an independent contractor with an agency.{2,4}",
            ],
          ],
        },
      ],
    },
    {
      id: "sdac",
      title: "Self-Directed Attendant Care",
      blocks: [
        {
          type: "p",
          text: "SDAC is a member-directed option. The member chooses which tasks to receive within the service plan, selects the days and times, and recruits, hires, manages, supervises and terminates the direct care worker, including family members.{1}",
        },
        {
          type: "p",
          text: "It is available to ALTCS members who live in their own home, not to members in an alternative residential setting or a nursing facility.{1}",
        },
        {
          type: "p",
          text: "Because the worker is the member’s employee, a qualified Fiscal Employer Agent (FEA) is required for members who choose SDAC. The FEA handles payroll-related work and procures workers’ compensation insurance for the member’s worker.{1}",
        },
        {
          type: "p",
          text: "Workers must complete Universal Precautions and HIPAA training. Either the member or a provider agency can provide it, and the worker must keep proof that it was completed. AHCCCS recommends, but does not require, background checks.{1}",
        },
        {
          type: "p",
          text: "If a member has a legal guardian, the guardian can decide on the member’s behalf to choose SDAC, but may not be the member’s direct care worker once SDAC is selected.{1}",
        },
      ],
    },
    {
      id: "spouse-parent",
      title: "When a spouse or a parent is the caregiver",
      blocks: [
        {
          type: "p",
          text: "A spouse and a parent of a minor child are “legally responsible” relatives, so Arizona sets stricter rules. The care must be extraordinary, meaning care that exceeds the range of activities a spouse or legally responsible parent would ordinarily perform in the household if the member did not have a disability or chronic illness, and that is necessary for the member’s health and welfare.{2}",
        },
        {
          type: "p",
          text: "Under the Spouse as Paid Caregiver rule, all of the following apply:{2,3}",
        },
        {
          type: "ul",
          items: [
            "The member lives in their own home and is offered a choice of providers other than the spouse.{3}",
            "The care is described in the plan of care and the case manager records the member’s choice at least once a year.{3}",
            "The spouse is employed or contracted through an agency that subcontracts with the member’s program contractor, and meets the same training and qualifications as other providers.{2,3}",
            "The spouse is not paid more than a non-spouse would be.{3}",
            "The spouse is not paid for more than 40 hours of services in a seven-day period. If the spouse provides fewer hours, another caregiver can cover the rest, but the combined total cannot go over 40 hours in a seven-day period.{2,3}",
          ],
        },
        {
          type: "p",
          text: "The Parent as Paid Caregiver model for minor children also requires the ALTCS case manager to record the election in the plan and sets a 40-hour weekly limit.{2,4} AHCCCS defines a parent for this purpose as someone with formal physical or legal custody, so a stepparent does not count unless they legally adopt the child.{4}",
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
              title: "Become an ALTCS member",
              text: "Paid family care happens inside the member’s ALTCS plan, so the person receiving care needs to be enrolled first. We can help you work out whether your loved one is likely to qualify.",
            },
            {
              title: "Have the case manager assess needs",
              text: "The ALTCS case manager assesses the member’s needs with the member and family to decide the number and frequency of authorized services. If more hours are needed later, the member should contact the case manager in advance and request a reassessment.{1}",
            },
            {
              title: "Choose the route that fits the caregiver",
              text: "An adult child or other relative usually points to SDAC. A spouse or a parent of a minor needs the specific model above, with its extraordinary-care test and 40-hour limit.{1,2}",
            },
            {
              title: "Complete training and set up employment",
              text: "Arrange the required training and either an agency employment or contract, or a Fiscal Employer Agent for SDAC.{1,2}",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can an adult child be paid to care for a parent through ALTCS?",
      a: "Yes. Under Self-Directed Attendant Care, the member can hire the direct care worker of their choice, including family members, as long as the member lives in their own home and the worker is not a spouse, a parent of a minor child or a legal guardian.{1}",
    },
    {
      q: "Can a spouse be paid under ALTCS?",
      a: "Yes, under the Spouse as Paid Caregiver model, but only for extraordinary care, through an agency, and for no more than 40 hours in any seven-day period.{2,3}",
    },
    {
      q: "Can a parent be paid to care for their minor child?",
      a: "Yes, under the Parent as Paid Caregiver model, with a 40-hour weekly limit. Parents of minor children cannot be paid workers under SDAC.{1,2,4}",
    },
    {
      q: "What does extraordinary care mean?",
      a: "Care that exceeds what a spouse or legally responsible parent would ordinarily do in the household for the member if they did not have a disability or chronic illness, and that is necessary for the member’s health and welfare.{2}",
    },
    {
      q: "Who decides how many hours are authorized?",
      a: "The ALTCS case manager, through an assessment of the member’s needs.{1}",
    },
  ],
  sources: [
    {
      org: "Arizona Health Care Cost Containment System (AHCCCS)",
      title: "AMPM Policy 1320-A: Self-Directed Attendant Care",
      url: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/1300/1320-A.pdf",
    },
    {
      org: "Arizona Health Care Cost Containment System (AHCCCS)",
      title: "AMPM Policy 1240-A: Direct Care Services (Attendant Care, Personal Care, and Homemaker Services)",
      url: "https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/1200/1240-A.pdf",
    },
    {
      org: "Arizona Administrative Code",
      title: "R9-28-506: Requirements for Spouse as Paid Caregiver",
      url: "https://www.law.cornell.edu/regulations/arizona/Ariz-Admin-Code-SS-R9-28-506",
    },
    {
      org: "Arizona Health Care Cost Containment System (AHCCCS)",
      title: "Parents as Paid Caregivers of Minor Children: Frequently Asked Questions",
      url: "https://www.azahcccs.gov/AHCCCS/Downloads/COVID19/FAQ_ParentsAsPaidCaregivers.pdf",
    },
  ],
  related: ["get-paid-to-care-for-a-family-member", "missouri-consumer-directed-services"],
};
