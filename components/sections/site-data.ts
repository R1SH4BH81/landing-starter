export interface Service {
  index: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  year: string;
}

export interface Step {
  index: string;
  title: string;
  description: string;
}

export interface EngagementModel {
  name: string;
  price: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    index: "01",
    title: "Brand Identity",
    description:
      "Logos, type systems, and guidelines that make a company recognizable at a glance — and hard to forget.",
  },
  {
    index: "02",
    title: "Web Design",
    description:
      "Marketing sites and landing pages built to be read, remembered, and acted on. Every section earns its place.",
  },
  {
    index: "03",
    title: "Product Design",
    description:
      "Interfaces for web and mobile products, from first wireframe to the UI your engineers ship.",
  },
];

export const projects: Project[] = [
  { title: "Northwind Bank", category: "Brand Identity", year: "2025" },
  { title: "Fieldnotes", category: "Web Design", year: "2025" },
  { title: "Parcel", category: "Product Design", year: "2024" },
  { title: "Alder & Co.", category: "Brand Identity", year: "2024" },
];

export const steps: Step[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We start with your business, your customers, and what has to change. Two weeks of research before a single pixel.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Concepts in the open, reviewed weekly. You see everything as it takes shape — nothing arrives as a surprise.",
  },
  {
    index: "03",
    title: "Deliver",
    description:
      "Final files, guidelines, and handoff docs — plus support while your team ships it.",
  },
];

export const testimonial = {
  quote:
    "Unfold rebuilt our brand and site in eight weeks. Inquiries doubled the quarter after launch.",
  name: "Maya Chen",
  role: "Founder, Fieldnotes",
};

export const engagementModels: EngagementModel[] = [
  {
    name: "Project",
    price: "from $12k",
    description:
      "Fixed scope, fixed price. A brand, a site, or a product screen set — delivered in 4–8 weeks.",
    points: ["Defined deliverables", "Weekly reviews", "Two revision rounds"],
  },
  {
    name: "Retainer",
    price: "from $6k/mo",
    description:
      "A design team on tap. Steady output, monthly planning, pause whenever you need.",
    points: ["Senior designer lead", "Async + weekly calls", "Pause anytime"],
  },
  {
    name: "Advisory",
    price: "from $2.5k/mo",
    description:
      "Direction for your in-house team. Audits, critiques, and systems thinking on demand.",
    points: ["Design audits", "Team critiques", "Hiring guidance"],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Brand identities run 4–6 weeks. Marketing sites 6–8. Product design engagements are scoped by milestone, not by the hour.",
  },
  {
    question: "Who will I actually work with?",
    answer:
      "A senior designer leads every project. No hand-offs to juniors, no account-manager telephone game.",
  },
  {
    question: "Do you write code too?",
    answer:
      "Yes. We design and build marketing sites in-house — Next.js, Webflow, or your team's stack.",
  },
  {
    question: "What do you need from us to start?",
    answer:
      "A kickoff call, access to your team, and honest answers about what's not working.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "That's the Advisory model. We set the direction and review the work; your team executes.",
  },
];

export const contactEmail = "hello@unfold.studio";
