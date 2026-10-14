export const company = {
  name: "Land CoPilot",
  tagline: "Your trusted partner in real estate",
  eyebrow: "Clear deals, solid foundation",
  motto: "Elevating living. Defining luxury.",
  phone: "+91 85900 11033",
  phoneHref: "tel:+918590011033",
  email: "landcopilot@gmail.com",
  emailHref: "mailto:landcopilot@gmail.com",
  instagram: "land_co_pilot",
  instagramHref: "https://www.instagram.com/land_co_pilot",
  address: [
    "Pullurssanghattil Building,",
    "Opposite Tvs Show Room,",
    "Angadippuram, Pin: 679321",
    "Malappuram, Kerala",
  ],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Pullurssanghattil+Building+Opposite+Tvs+Show+Room+Angadippuram+Malappuram+679321",
  about:
    "Premium real estate consulting for buyers, sellers, and developers. We handle property transactions, joint ventures, and strategic land deals with complete legal and operational support.",
  servicesIntro:
    "We guide you through real estate with clarity and confidence, handling the legal, financial, and operational side of the deal.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Land transactions",
    text: "Buying and selling land with legal, financial, and operational support from the first conversation through to completion.",
  },
  {
    title: "Verified building plots",
    text: "Residential plots checked for clear records, so you can decide with a straightforward picture of the property.",
  },
  {
    title: "Joint ventures",
    text: "Partnerships between landowners and developers, set out with clear terms and support on both sides.",
  },
  {
    title: "Real estate partnerships",
    text: "Structured partnerships for buyers, sellers, and developers who want a deal built on trust and local knowledge.",
  },
  {
    title: "Property development consulting",
    text: "Practical advice for landowners and developers taking a site from an idea toward a workable project.",
  },
] as const;

export const reasons = [
  "Complete legal and financial support from start to finish",
  "Built on ethics, trust, and local expertise",
  "Digital marketing that reaches qualified buyers",
  "Verified data for smooth and secure transactions",
  "Streamlined communication and fewer delays",
  "Transparency and long-term value for every client",
  "A dedicated app is planned for easier property dealing",
  "Access to trusted legal and financial experts",
] as const;

export const steps = [
  {
    title: "Tell us what you need",
    text: "A plot, a land deal, a joint venture, or advice on a development.",
  },
  {
    title: "We review the details",
    text: "Verified information, local context, and a clear view of the transaction.",
  },
  {
    title: "Support through the close",
    text: "Legal and financial guidance so the deal stays smooth and secure.",
  },
] as const;

export type ProjectImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  area: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  points: string[];
  body: string[];
  gallery?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "three-storey-residence",
    title: "Three-storey residence",
    category: "Homes",
    area: "Malappuram, Kerala",
    summary: "A three-floor home with balconies, a timber screen, and covered parking.",
    image: "/images/project1.jpeg",
    imageAlt: "A white three-storey house with a timber screen and a carport",
    points: [
      "Balconies on the upper floors",
      "Shaded timber screen on the front",
      "Covered parking beside the house",
    ],
    body: [
      "This residence is planned over three floors, with a simple white front, wood-framed windows, and a tall timber screen. A carport sits to one side of the entrance.",
      "Ask us about homes of this kind in Malappuram. We will tell you what is open and handle the paperwork with you.",
    ],
  },
  {
    slug: "two-storey-villa",
    title: "Two-storey villa",
    category: "Homes",
    area: "Malappuram, Kerala",
    summary: "A compact villa with a porch, a garden, and an upper floor that opens onto terraces.",
    image: "/images/project3.jpeg",
    imageAlt: "A white two-storey villa with a wooden front door and a garden",
    points: [
      "Ground floor with two bedrooms, living, dining, and kitchen",
      "Upper bedroom opening onto terraces",
      "Porch, garden, and space for a car",
    ],
    body: [
      "The villa is a two-floor house: a shaded porch, a wooden door, and a small garden in front. The evening view shows the same house with the porch and windows lit.",
      "The ground-floor plan has two bedrooms, a living room, dining, a kitchen, and a deck. Upstairs is a bedroom with open terraces. Share the size and place you want, and we will see what matches.",
    ],
    gallery: [
      {
        src: "/images/project2.jpeg",
        alt: "The same villa in the evening, with the porch lights on",
      },
      {
        src: "/images/floor-ground.jpeg",
        alt: "Ground floor plan with two bedrooms, living, dining, kitchen, and a deck",
        fit: "contain",
      },
      {
        src: "/images/floor-upper.jpeg",
        alt: "Upper floor plan with a bedroom, toilet, and open terraces",
        fit: "contain",
      },
    ],
  },
  {
    slug: "plotted-development",
    title: "Plotted development",
    category: "Plots",
    area: "Malappuram, Kerala",
    summary: "Laid-out plots with internal roads, set among palms.",
    image: "/images/plots.jpeg",
    imageAlt: "An aerial view of plotted land with roads and palm trees",
    imagePosition: "object-right",
    points: [
      "Internal roads through the layout",
      "Plots marked out on the ground",
      "Title and record checks before you decide",
    ],
    body: [
      "This is the kind of plotted layout we work with: roads in place, plots marked, and a clear picture of the land before anyone commits.",
      "Current plots change. Tell us the location and size you have in mind, and we will say what is open.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
