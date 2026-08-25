export const site = {
  name: "Adhikram Maitra",
  shortName: "Adhikram",
  initials: "am",
  mark: "am. my initials. sit in the seat, then ship.",
  title: "Adhikram Maitra · production GenAI with operators",
  description:
    "Founding engineer at ANAX. Founder of TechPrufer (~2k uniques/day). Data platforms at Media.net. Side products: Equal Collective and GripGrams.",
  role: "Founding engineer · founder",
  tagline:
    "I embed with the people who run the workflow, then take agents and RAG from a messy desk to something that moves a number: deal flow, latency, or MRR.",
  about:
    "I'm a founding engineer in India. I sit with ANAX brokers and ship the agentic layer on a commercial real-estate dashboard. TechPrufer is the public product: job intel, a tailoring workbench, and an MCP other IDEs can call. GripGrams is the mobile product I am shipping now. Equal Collective is the seller-ops loop that went to paid revenue. Before that I spent four years on Media.net's ad-tech data plane, streaming and checking billions of rows. I am open to relocate for a forward-deployed / AI deployment seat.",
  aboutParts: [
    { t: "I'm a founding engineer in India. I sit with " },
    { t: "ANAX", id: "anax" },
    {
      t: " brokers and ship the agentic layer on a commercial real-estate dashboard. ",
    },
    { t: "TechPrufer", id: "techprufer" },
    {
      t: " is the public product: job intel, a tailoring workbench, and an MCP other IDEs can call. ",
    },
    { t: "GripGrams", id: "gripgrams" },
    { t: " is the mobile product I am shipping now. " },
    { t: "Equal Collective", id: "equal-collective" },
    { t: " is the seller-ops loop that went to paid revenue. Before that I spent four years on " },
    { t: "Media.net", id: "media-net" },
    {
      t: "'s ad-tech data plane, streaming and checking billions of rows. I am open to relocate for a forward-deployed / AI deployment seat.",
    },
  ] as { t: string; id?: string }[],
  location: "India — UTC+5:30",
  locationShort: "India, IST",
  email: "adhikrammaitra@gmail.com",
  github: "https://github.com/Adhikram",
  githubUser: "Adhikram",
  linkedin: "https://www.linkedin.com/in/adhikram-maitra/",
  resume: "https://creator.techprufer.com/",
  currentWork: {
    label: "Working at anaxrep.com",
    href: "https://anaxrep.com/",
    note: "Founding engineer",
  },
  currentStack: [
    "TypeScript",
    "Next.js",
    "Python",
    "PostgreSQL",
    "RAG",
    "MCP",
    "Expo",
  ],
  focus: [
    "Sit with the operator",
    "Move a number, not a demo",
    "Agentic RAG in the product",
    "MCP in the editor",
    "Data platforms at billions of rows",
    "Live GenAI with a user loop",
    "Mobile that actually ships",
  ],
};

export type ProductKind = "work" | "founder" | "side";
export type WorkBucket = "experience" | "product";

export type Product = {
  id: string;
  name: string;
  kind: ProductKind;
  kindLabel: string;
  bucket: WorkBucket;
  role: string;
  period: string;
  url?: string;
  summary: string;
  detail: string[];
  metrics: { label: string; value: string }[];
  shipped: string[];
  stack: string[];
};

export const loop = [
  {
    n: "01",
    title: "Sit in the seat",
    body: "Brokers, sellers, job seekers. I work from their screen, not a backlog they never open.",
  },
  {
    n: "02",
    title: "Name the number",
    body: "Deal flow, latency, MRR, applications sent. If it does not move, it is not the job.",
  },
  {
    n: "03",
    title: "Ship on their stack",
    body: "Next.js, Python, MCP, Spark: whatever they already run. Agents and RAG only where they pay rent.",
  },
  {
    n: "04",
    title: "Leave the loop",
    body: "MCP, evals, docs. The next person should ship faster than I did on day one.",
  },
] as const;

export const stackGroups = [
  {
    title: "Daily drivers",
    items: [
      { name: "TypeScript", featured: true },
      { name: "Next.js", featured: true },
      { name: "Python", featured: true },
      { name: "PostgreSQL", featured: true },
      { name: "Drizzle", featured: true },
      { name: "Astro", featured: false },
    ],
  },
  {
    title: "Agents in the product",
    items: [
      { name: "RAG", featured: true },
      { name: "MCP", featured: true },
      { name: "Cursor", featured: true },
      { name: "Claude Code", featured: true },
      { name: "Python agents", featured: true },
      { name: "evals", featured: false },
    ],
  },
  {
    title: "Data plane",
    items: [
      { name: "Scala", featured: true },
      { name: "Spark", featured: true },
      { name: "Kafka", featured: true },
      { name: "Hive", featured: true },
      { name: "Java", featured: false },
    ],
  },
  {
    title: "Mobile & ops",
    items: [
      { name: "Expo", featured: true },
      { name: "React Native", featured: true },
      { name: "Firebase", featured: true },
      { name: "Linux", featured: false },
      { name: "pm2 / VPS", featured: false },
    ],
  },
] as const;

export const products: Product[] = [
  {
    id: "anax",
    name: "ANAX",
    kind: "work",
    kindLabel: "Work",
    bucket: "experience",
    role: "Founding engineer",
    period: "Apr 2025 - present",
    url: "https://anaxrep.com/",
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
    detail: [
      "ANAX is the commercial real-estate dashboard I sit in as founding engineer. I work next to brokers, then ship the agentic layer they actually use: retrieval over deal documents, outreach, and ops in one product.",
    ],
  },
  {
    id: "gripgrams",
    name: "GripGrams",
    kind: "founder",
    kindLabel: "Building now",
    bucket: "product",
    role: "Founder",
    period: "2025 - present",
    url: "https://gripgrams.com/",
    summary:
      "Currently shipping. Nutrition and strength-training app: kitchen, barcode, gym, family tracker. Expo / React Native with Firebase. Fully free.",
    metrics: [
      { value: "iOS + Android", label: "Expo / EAS" },
      { value: "Free", label: "no paywall at launch" },
    ],
    shipped: [
      "Shipped a real mobile product: meals, workouts, and household tracking on a TypeScript monorepo.",
      "Firebase auth and Cloud Functions for the live backend.",
    ],
    stack: ["Expo", "React Native", "Firebase", "TypeScript"],
    detail: [
      "GripGrams is the product I am shipping now. It is a nutrition and strength-training app for a household, not a single gym log: kitchen, barcode, workouts, and a family tracker on the same graph.",
      "The app is Expo / React Native with a TypeScript monorepo. Auth and live backend sit on Firebase, including Cloud Functions. It is free at launch. No paywall.",
      "I built it as a complete mobile product, not a demo: meals, gym sessions, and household tracking that have to work on both iOS and Android through EAS. The constraint is the same as my other products: operators in a real kitchen or gym, not a slide about health tech.",
    ],
  },
  {
    id: "techprufer",
    name: "TechPrufer",
    kind: "founder",
    kindLabel: "Product",
    bucket: "product",
    role: "Founder",
    period: "Jan 2026 - present",
    url: "https://techprufer.com/",
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
    detail: [
      "TechPrufer is the public product I own. It is job intel plus a tailoring workbench: company blogs, interview trails, an MCP that other IDEs can call, Chrome capture, and a LaTeX resume engine.",
      "The data side is a scraper and clustering pipeline over open interview and blog sources. That bank now covers 400+ companies. The product side is a live site at about 2,000 unique users a day.",
      "The MCP server is the piece other agents use. Cursor, Claude, Codex, and Antigravity can tailor a profile against a JD without leaving the editor. I ran the same loop for 150+ role-specific resumes, which is how I know the PDF path is production, not a template dump.",
      "Stack is Next.js, Drizzle, PostgreSQL, Python, and MCP. I operate it as a GenAI product with a real user loop, not a portfolio toy.",
    ],
  },
  {
    id: "equal-collective",
    name: "Equal Collective",
    kind: "side",
    kindLabel: "Product",
    bucket: "product",
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
    detail: [
      "Equal Collective is seller-ops SaaS. I was founding engineer from January 2024 through December 2025. The job was to take AI outreach, listing enrichment, and analytics from zero to paid revenue.",
      "The outreach and Metabase loops carried the product to $20K+ monthly revenue. That is the number that mattered: sellers paying because the funnel moved listings, not because a dashboard looked busy.",
      "On the data side I ingested Amazon reviews and listing data at scale, then pushed enrichment back into seller reach. That covered 30K+ sellers and listings. Playwright handled capture. Python sat under the pipelines. Smartlead ran the send path.",
      "This is the product that proved I can sit with an operator workflow, ship the messy middle, and leave a number behind.",
    ],
  },
  {
    id: "media-net",
    name: "Media.net",
    kind: "work",
    kindLabel: "Work",
    bucket: "experience",
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
    detail: [
      "Ad-tech data plane at Directi. Streaming, batch, and data quality on billions of rows.",
    ],
  },
  {
    id: "devsnest",
    name: "Devsnest",
    kind: "work",
    kindLabel: "Work",
    bucket: "experience",
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
    detail: [
      "Ed-tech community backend. Discord automation, notifications, and a product that hit 10K users in three months.",
    ],
  },
];

export const experience = products.filter((item) => item.bucket === "experience");
export const ownedProducts = products.filter((item) => item.bucket === "product");

export function productPath(id: string) {
  return `/products/${id}`;
}

export const ossRepos = [
  {
    name: "firecrawl-cre",
    url: "https://github.com/Adhikram/firecrawl-cre",
    upstream: "firecrawl/firecrawl",
    upstreamUrl: "https://github.com/firecrawl/firecrawl",
    note: "Firecrawl fork. Web data API, adapted for CRE scrape and extract.",
  },
  {
    name: "crawl4ai-cre",
    url: "https://github.com/Adhikram/crawl4ai-cre",
    upstream: "unclecode/crawl4ai",
    upstreamUrl: "https://github.com/unclecode/crawl4ai",
    note: "Crawl4AI fork. LLM-ready crawler with CRE crawler enhancements.",
  },
  {
    name: "linkedin_scraper",
    url: "https://github.com/Adhikram/linkedin_scraper",
    upstream: "joeyism/linkedin_scraper",
    upstreamUrl: "https://github.com/joeyism/linkedin_scraper",
    note: "LinkedIn scraper fork. Async Playwright for profiles, companies, and jobs.",
  },
] as const;
