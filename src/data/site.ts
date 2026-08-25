export const site = {
  name: "Adhikram Maitra",
  title: "Adhikram Maitra: production GenAI with operators",
  description:
    "Founding engineer at ANAX. Founder of TechPrufer (~2k uniques/day). Data platforms at Media.net. Side products: Equal Collective and GripGrams.",
  email: "adhikrammaitra@gmail.com",
  github: "https://github.com/Adhikram",
  githubUser: "Adhikram",
  linkedin: "https://www.linkedin.com/in/adhikram-maitra/",
  resume: "https://creator.techprufer.com/",
};

export type ProductKind = "work" | "founder" | "side";

export type Product = {
  id: string;
  name: string;
  kind: ProductKind;
  kindLabel: string;
  role: string;
  period: string;
  url?: string;
  summary: string;
  metrics: { label: string; value: string }[];
  shipped: string[];
  stack: string[];
  featured?: boolean;
};

export const loop = [
  { n: "01", title: "Discover", body: "Sit with operators. Find the workflow that actually moves revenue or time." },
  { n: "02", title: "Prototype", body: "Python and TypeScript PoCs on their stack: agents, tools, RAG, evals." },
  { n: "03", title: "Productionize", body: "Queues, data plumbing, reliability. Measure deal flow, latency, or MRR." },
  { n: "04", title: "Codify", body: "Write the pattern down so the next deploy is faster than the first." },
] as const;

export const products: Product[] = [
  {
    id: "anax",
    name: "ANAX",
    kind: "work",
    kindLabel: "Work",
    role: "Founding engineer",
    period: "Apr 2025 - present",
    url: "https://anaxrep.com/",
    featured: true,
    summary:
      "Commercial real-estate dashboard. I embed with brokers and ship the agentic layer: grounded retrieval, outreach, and deal ops in one product.",
    metrics: [
      { value: "20K+", label: "financial docs in RAG" },
      { value: "~10x", label: "qualified deal flow / month" },
      { value: "1,000+", label: "deals on the platform" },
    ],
    shipped: [
      "Agentic RAG over 20K+ financial docs so brokers get grounded answers, not a PDF dump.",
      "AI outreach funnel that lifted monthly qualified deal flow ~10x.",
      "Lead ETL and broker velocity tools for a team running 1,000+ deals.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "RAG", "Python"],
  },
  {
    id: "techprufer",
    name: "TechPrufer",
    kind: "founder",
    kindLabel: "Founder · side product",
    role: "Founder",
    period: "Jan 2026 - present",
    url: "https://techprufer.com/",
    featured: true,
    summary:
      "Public job intel plus a tailoring workbench: company blogs, interview trails, MCP across IDEs, Chrome capture, LaTeX resumes. I run this as a live GenAI product.",
    metrics: [
      { value: "~2,000", label: "unique users / day" },
      { value: "400+", label: "companies in the bank" },
      { value: "150+", label: "resumes through my pipeline" },
    ],
    shipped: [
      "Scraper and clustering pipeline that turns open interview and blog sources into trails for 400+ companies.",
      "MCP server so Cursor, Claude, Codex, and Antigravity can tailor a profile against any JD.",
      "Chrome extension plus LaTeX PDF engine. I used the same loop for 150+ role-specific resumes.",
    ],
    stack: ["Next.js", "Drizzle", "PostgreSQL", "MCP", "Python"],
  },
  {
    id: "gripgrams",
    name: "GripGrams",
    kind: "founder",
    kindLabel: "Founder · side product",
    role: "Founder",
    period: "2025 - present",
    url: "https://gripgrams.com/",
    summary:
      "Nutrition and strength-training app: kitchen, barcode, gym, family tracker. Expo / React Native with Firebase. Fully free.",
    metrics: [
      { value: "iOS + Android", label: "Expo / EAS" },
      { value: "Free", label: "no paywall at launch" },
    ],
    shipped: [
      "Shipped a real mobile product: meals, workouts, and household tracking on a TypeScript monorepo.",
      "Firebase auth and Cloud Functions for the live backend.",
    ],
    stack: ["Expo", "React Native", "Firebase", "TypeScript"],
  },
  {
    id: "equal-collective",
    name: "Equal Collective",
    kind: "side",
    kindLabel: "Side hustle",
    role: "Founding engineer",
    period: "Jan 2024 - Dec 2025",
    url: "https://www.linkedin.com/company/equal-collective/",
    summary:
      "Seller-ops SaaS. I took AI outreach, listing enrichment, and analytics from zero to paid revenue.",
    metrics: [
      { value: "0 → $20K+", label: "MRR" },
      { value: "30K+", label: "sellers / listings enriched" },
    ],
    shipped: [
      "AI outreach and Metabase loops that carried the product to $20K+ monthly revenue.",
      "Amazon ingestion at scale: reviews and listing data for 30K+ products, then enrichment back into seller reach.",
    ],
    stack: ["Python", "Smartlead", "Metabase", "Playwright"],
  },
  {
    id: "media-net",
    name: "Media.net",
    kind: "work",
    kindLabel: "Work",
    role: "Data Application Developer 2",
    period: "Oct 2021 - Mar 2025",
    url: "https://www.media.net/",
    summary:
      "Ad-tech data plane at Directi. Streaming, batch, and data quality on billions of rows. This is why I will not drown in an enterprise warehouse.",
    metrics: [
      { value: "50k/s", label: "Kafka ingest" },
      { value: "~50%", label: "streaming latency cut" },
      { value: "~60%", label: "DQ workload time cut" },
    ],
    shipped: [
      "StopLoss-style streaming: 50k records/s from Kafka, ~50% latency down, ~15% loss down.",
      "DANTE data-quality tools: >100GB parallel reads, ~60% faster, comparisons on ~3B rows in 30 minutes.",
    ],
    stack: ["Scala", "Spark", "Kafka", "Hive", "Java"],
  },
  {
    id: "devsnest",
    name: "Devsnest",
    kind: "work",
    kindLabel: "Work",
    role: "Backend engineer",
    period: "Oct 2020 - Oct 2021",
    url: "https://devsnest.in",
    summary:
      "Ed-tech community backend. First founding-adjacent backend seat: Discord automation, notifications, and a product that hit 10K users in three months.",
    metrics: [
      { value: "10K", label: "users in 3 months" },
      { value: "2K/day", label: "notification messages" },
    ],
    shipped: [
      "Discord moderation automation that cut ops overhead for peer learning groups.",
      "Notification system at 2K messages/day as the community scaled to 10K users.",
    ],
    stack: ["Ruby on Rails", "Python", "Redis", "SQS"],
  },
];
