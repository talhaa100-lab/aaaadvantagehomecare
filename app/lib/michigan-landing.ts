// Copy for /michigan-landing, taken from the live landing page
// (aaaadvantagehomecare.com/michigan-landing). This page runs on its own
// tracking number, so the phone differs from the main site on purpose.

export const landing = {
  phone: "302-335-6779",
  phoneHref: "tel:3023356779",
  email: "hello@aaaadvantagehomecare.com",
  hours: "Mon-Fri, 9:00AM - 5:00PM",
  googleReviews: "https://share.google/7Rr0MJd4UYdXcSo5t",
};

export const hero = {
  perks: [
    "Get paid for care you already provide",
    "Help your loved one remain at home",
    "Get guidance through the process",
  ],
  caregivers: "Over 200 caregivers",
};

export const support = {
  heading: "Caregivers deserve support they can count on.",
  quote:
    "The communication is phenomenal, you keep me up to date, and every transition is smooth. You make me feel like I’m part of a team.",
  author: "Kallela",
};

export const whoCards = {
  heading: "Could You Get Paid for the Care You Already Provide?",
  intro:
    "If you care for a qualifying Medicaid recipient, you may be eligible to receive compensation.",
  cards: [
    { title: "Caring for a Parent", image: "/michigan-landing/parents-caring.webp" },
    { title: "Caring for someone 18+", image: "/michigan-landing/adult-cariing.webp" },
    { title: "Caring for Family or a Friend", image: "/michigan-landing/family-caring.webp" },
  ],
};

export const alone = {
  heading: "You Don’t Have to",
  accent: "Figure It Out Alone.",
  intro:
    "Understanding caregiver eligibility can feel complicated. Our team helps make the process easier to navigate.",
  items: [
    {
      icon: "guide",
      title: "Guidance Through the Process",
      text: "We help determine whether your caregiving situation may qualify.",
    },
    {
      icon: "support",
      title: "Responsive Support",
      text: "A team available when questions come up.",
    },
    {
      icon: "comms",
      title: "Clear Communication",
      text: "Stay informed throughout the process.",
    },
    {
      icon: "approval",
      title: "Application-to-Approval Support",
      text: "Guidance from initial eligibility through the required steps.",
    },
  ],
} as const;

export const qualify = {
  heading: "Your Loved One",
  accent: "May Qualify",
  headingEnd: "If They",
  intro:
    "Eligibility depends on a few key requirements. Our team can help you understand whether your loved one’s situation may qualify.",
  items: [
    {
      icon: "medical",
      title: "Have a Certified Medical Need",
      text: "The care recipient needs to have a qualifying or certified medical need for services.",
    },
    {
      icon: "medicaid",
      title: "Have Medicaid Coverage",
      text: "The care recipient must currently be covered under Medicaid.",
    },
    {
      icon: "enrollment",
      title: "Meet Enrollment Requirements",
      text: "The care recipient should not be enrolled in MI Choice, MI Health Link, or PACE.",
    },
  ],
} as const;

export const process = {
  heading: "From Eligibility to Getting Started",
  intro: "AAA Advantage Home Care helps guide you through each step.",
  steps: [
    {
      title: "Check Your Eligibility",
      text: "We help determine whether your caregiving situation may qualify.",
    },
    {
      title: "Complete the Required Forms",
      text: "The team helps collect the necessary information and paperwork.",
    },
    {
      title: "Complete the Assessment",
      text: "The team supports you through the assessment.",
    },
    {
      title: "Get Approved & Start Getting Paid",
      text: "Once approved, you can begin receiving compensation for eligible care.",
    },
  ],
};

export const closing = {
  heading: "You’re Already Giving Your Time, Energy and Care.",
  text: "Caring for someone you love is a real responsibility. If your loved one qualifies, you may be able to receive compensation for care you are already providing.",
  tagline: "Get the pay you deserve for the care you provide.",
};

export const reviews = {
  heading: "Support That Families and Caregivers Appreciate",
  items: [
    {
      quote:
        "This company is the best company ever. Highly recommended for working. Management is great and very punctual.",
      author: "Aryiele",
    },
    {
      quote:
        "This place is incredibly helpful. They guided me through everything, answered my questions, and made the entire process feel seamless from start to finish.",
      author: "Bill",
    },
    {
      quote:
        "I’ve had a great experience with this company. I never have any problems, the support is reliable, and I would absolutely recommend them.",
      author: "Angela",
    },
  ],
};

export const faqs = [
  {
    q: "How much do caregivers get paid?",
    a: "Caregivers are paid $17.50 per hour, with bi-weekly direct deposit payments every other Friday.",
  },
  {
    q: "Can I get paid to care for my spouse?",
    a: "Currently paid spousal care is not supported in Michigan.",
  },
  {
    q: "Does my loved one qualify?",
    a: "If your loved one is on Medicaid and needs help with at least 1 Activity of Daily Living they may qualify.",
  },
  {
    q: "How long until I start getting paid?",
    // The live page repeats the pay answer here. Replaced with the decision time from
    // our Michigan guide (MDHHS, up to 45 days) plus the pay schedule from the live page.
    a: "Michigan can take up to 45 days to send a written decision on the application. Once you are approved, caregivers are paid by bi-weekly direct deposit every other Friday.",
  },
  {
    q: "Do I need any certification or training?",
    a: "Usually not, but depending on the program, we will help you get the training/certification needed.",
  },
  {
    q: "Is this legit?",
    a: "Yes! Michigan allows family caregiving through several of their programs such as Home Help, the Choices Waiver, and HIDESNP programs.",
  },
];

export const form = {
  heading: "See If You May Qualify",
  intro:
    "Complete the form and the AAA Advantage Home Care team can help determine your next steps.",
  // Wording is the live page's consent text; "Terms of Use" and "Privacy Policy" become links.
  consentLead:
    "By selecting “Submit”, you agree to the AAA Advantage Home Care, Inc.",
  consentTail:
    "You also consent to receive and interact with calls, texts and emails from us, which may use automation, prerecorded messages or AI-generated voice technology. Message frequency may vary; message and data rates may apply. Reply STOP to unsubscribe. Consent is not required to use our services",
};
