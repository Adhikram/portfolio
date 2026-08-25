export const site = {
  name: "Adhikram Maitra",
  shortName: "Adhikram",
  initials: "am",
  mark: "am. my initials. sit in the seat, then ship.",
  title: "Adhikram Maitra · production GenAI with operators",
  description:
    "Founding engineer at ANAX ($100K+ deal revenue, ~10x deal flow). Founder of TechPrufer (~2k uniques/day). Data platforms at Media.net (3B-row checks). Side products: Equal Collective ($20K+ MRR) and GripGrams.",
  role: "Founding engineer · founder",
  tagline:
    "I embed with the people who run the workflow, then take agents and RAG from a messy desk to something that moves a number: deal flow, latency, or MRR.",
  about:
    "I'm a founding engineer in India. I sit with ANAX brokers and ship the agentic layer on a commercial real-estate dashboard: RAG over 20K+ docs, ~10x deal flow, $100K+ through the loop. TechPrufer is the public product: job intel, a tailoring workbench, and an MCP other IDEs can call. GripGrams is the mobile product I am shipping now. Equal Collective is the seller-ops loop that went to $20K+ MRR. Before that I spent four years on Media.net's ad-tech data plane, streaming and checking billions of rows, including ~3B-row compares in 30 minutes. I am open to relocate for a forward-deployed / AI deployment seat.",
  aboutParts: [
    { t: "I'm a founding engineer in India. I sit with " },
    { t: "ANAX", id: "anax" },
    {
      t: " brokers and ship the agentic layer on a commercial real-estate dashboard: RAG over 20K+ docs, ~10x deal flow, $100K+ through the loop. ",
    },
    { t: "TechPrufer", id: "techprufer" },
    {
      t: " is the public product: job intel, a tailoring workbench, and an MCP other IDEs can call. ",
    },
    { t: "GripGrams", id: "gripgrams" },
    { t: " is the mobile product I am shipping now. " },
    { t: "Equal Collective", id: "equal-collective" },
    { t: " is the seller-ops loop that went to $20K+ MRR. Before that I spent four years on " },
    { t: "Media.net", id: "media-net" },
    {
      t: "'s ad-tech data plane, streaming and checking billions of rows, including ~3B-row compares in 30 minutes. I am open to relocate for a forward-deployed / AI deployment seat.",
    },
  ] as { t: string; id?: string }[],
  location: "India — UTC+5:30",
  locationShort: "India, IST",
  email: "adhikrammaitra@gmail.com",
  github: "https://github.com/Adhikram",
  githubUser: "Adhikram",
  githubOrgs: [
    {
      login: "Anax-Codex",
      href: "https://github.com/Anax-Codex",
      avatar: "/orgs/anax-codex.png",
    },
    {
      login: "indi-codex",
      href: "https://github.com/indi-codex",
      avatar: "/orgs/indi-codex.png",
    },
    {
      login: "Intellish-Inc",
      href: "https://github.com/Intellish-Inc",
      avatar: "/orgs/intellish-inc.png",
    },
  ],
  linkedin: "https://www.linkedin.com/in/adhikram-maitra/",
  resume: "https://creator.techprufer.com/",
  currentWork: {
    label: "Working at anaxrep.com",
    href: "https://anaxrep.com/",
    note: "Founding engineer",
  },
  currentStack: [
    "TypeScript",
    "Node.js",
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
  logo: string;
  picture?: string;
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
    title: "AI & agents",
    items: [
      { name: "Agentic AI", featured: true },
      { name: "Agent Orchestration", featured: true },
      { name: "RAG", featured: true },
      { name: "MCP", featured: true },
      { name: "Gemini", featured: true },
      { name: "Harness", featured: true },
      { name: "Agent Eval", featured: true },
      { name: "Multi-LLM Integration", featured: false },
      { name: "LLM Fine-Tuning", featured: false },
      { name: "Vector Databases", featured: false },
      { name: "Cursor", featured: false },
      { name: "Claude Code", featured: false },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "TypeScript", featured: true },
      { name: "Python", featured: true },
      { name: "JavaScript", featured: true },
      { name: "SQL", featured: true },
      { name: "Scala", featured: true },
      { name: "Java", featured: false },
      { name: "Ruby", featured: false },
      { name: "C++", featured: false },
    ],
  },
  {
    title: "Backend & frameworks",
    items: [
      { name: "Next.js", featured: true },
      { name: "Node.js", featured: true },
      { name: "PostgreSQL", featured: true },
      { name: "Drizzle", featured: true },
      { name: "Express", featured: false },
      { name: "REST APIs", featured: false },
      { name: "Ruby on Rails", featured: false },
      { name: "Microservices", featured: false },
      { name: "Astro", featured: false },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", featured: true },
      { name: "Docker", featured: true },
      { name: "Redis", featured: true },
      { name: "SQS", featured: true },
      { name: "Git", featured: false },
      { name: "Nginx", featured: false },
      { name: "Jenkins", featured: false },
      { name: "EC2", featured: false },
      { name: "EMR", featured: false },
      { name: "Azure", featured: false },
    ],
  },
  {
    title: "Data engineering",
    items: [
      { name: "Spark", featured: true },
      { name: "Kafka", featured: true },
      { name: "Hive", featured: true },
      { name: "Structured Streaming", featured: true },
      { name: "PySpark", featured: false },
      { name: "HDFS", featured: false },
      { name: "ETL", featured: false },
      { name: "Data Modeling", featured: false },
      { name: "MySQL", featured: false },
    ],
  },
  {
    title: "Analytics",
    items: [
      { name: "Metabase", featured: true },
      { name: "A/B Testing", featured: true },
      { name: "Data Pipelines", featured: true },
      { name: "Real-time Analytics", featured: false },
      { name: "Performance Monitoring", featured: false },
    ],
  },
  {
    title: "Systems",
    items: [
      { name: "System Architecture", featured: true },
      { name: "Distributed Systems", featured: true },
      { name: "Design Patterns", featured: false },
      { name: "OOP", featured: false },
      { name: "Algorithms", featured: false },
    ],
  },
  {
    title: "Mobile",
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
    logo: "/brands/anax.svg",
    summary:
      "Commercial real-estate dashboard in New York. I sit with brokers and ship against live desk data: RAG, Broker Buddy chat, AI outreach, and a velocity engine they run the same week.",
    metrics: [
      { value: "20K+", label: "financial docs in RAG" },
      { value: "~10x", label: "qualified deal flow / month" },
      { value: "$100K+", label: "deal revenue through the loop" },
    ],
    shipped: [
      "Shipped agentic layers against live broker data and undocumented internal REST APIs, not a sandbox. RAG over 20K+ financial docs so Gemini-backed agents answer from real files.",
      "Broker Buddy: a chat assistant for the full deal lifecycle. Brokers stay in conversation instead of clicking through the product. I tuned a stable version with evals and a harness.",
      "AI outreach funnel lifted qualified deal flow ~10x by iterating targeting with brokers. Lead generation scaled 50K → 800K with Playwright, Gemini, and RAG on messy newsletter data.",
      "Broker Velocity Engine plus ETL for 10+ brokers on 1,000+ deals and $100K+ revenue, so the desk still runs after handoff.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "RAG", "Python", "Redis"],
    detail: [
      "ANAX is the commercial real-estate dashboard I sit in as founding engineer, remote to New York. I wire agents into the product against live broker data and internal REST APIs that were never documented, then brokers can run it the same week.",
      "The RAG layer sits on more than 20,000 financial documents. Broker Buddy is the chat surface for the full deal lifecycle: every interaction in conversation instead of hunting through screens. I shipped it, then used evals and a harness to keep a stable version in production.",
      "Outreach is niche and filtered with the brokers, not a spec in a drawer: deal flow went from about one qualified deal a month to double digits. Automated lead gen grew the pool from 50K to 800K, then 10K+ leads a month from a 500K+ newsletter ingest.",
      "The Broker Velocity Engine and lead ETL sit on PostgreSQL, Redis, and BullMQ. Ten-plus brokers now run 1,000+ deals. That is the $100K+ revenue number: a system someone else can operate after I leave the seat.",
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
    logo: "/brands/gripgrams.svg",
    picture: "/products/gripgrams.svg",
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
    logo: "/brands/techprufer.png",
    picture: "/products/techprufer.png",
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
      "Chrome extension for job capture, autofill, and LinkedIn, plus a LaTeX PDF engine. I ran 150+ role-specific resumes through the same loop.",
    ],
    stack: ["Next.js", "Drizzle", "PostgreSQL", "MCP", "Python", "TypeScript"],
    detail: [
      "TechPrufer is the public product I own. It is job intel plus a tailoring workbench: company blogs, interview trails, an MCP that other IDEs can call, Chrome capture, and a LaTeX resume engine.",
      "The data side is a scraper and clustering pipeline over open interview and blog sources. That bank now covers 400+ companies. The product side is a live site at about 2,000 unique users a day.",
      "The MCP server is the piece other agents use. Cursor, Claude, Codex, and Antigravity can tailor a profile against a JD without leaving the editor. The Chrome extension captures jobs, helps autofill, and renders a pixel-perfect LaTeX PDF. I ran the same loop for 150+ role-specific resumes.",
      "Stack is Next.js, TypeScript, Drizzle, PostgreSQL, Python, and MCP. I operate it as a GenAI product with a real user loop, not a portfolio toy.",
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
    logo: "/brands/equal-collective.png",
    summary:
      "Seller-ops SaaS. I took AI outreach, listing enrichment, and analytics from zero to paid, self-sustaining revenue.",
    metrics: [
      { value: "0 → $20K+", label: "MRR" },
      { value: "30K+", label: "sellers / listings enriched" },
    ],
    shipped: [
      "Led the product from inception to a self-sustaining loop: AI outreach and Metabase carried it to $20K+ monthly revenue.",
      "Advanced outreach funnel with AI-powered send and integrated analytics so the next campaign was better than the last.",
      "Amazon ingestion at scale: reviews and listing data for 30K+ products, then enrichment back into seller reach for 30K+ sellers.",
    ],
    stack: ["Python", "Smartlead", "Metabase", "Playwright"],
    detail: [
      "Equal Collective is seller-ops SaaS. I was founding engineer from January 2024 through December 2025. The job was to take AI outreach, listing enrichment, and analytics from zero to paid revenue.",
      "I led it from inception to a self-sustaining state. Outreach and Metabase loops carried the product to $20K+ monthly revenue. Sellers paid because listings moved, not because a dashboard looked busy.",
      "On the data side I ingested Amazon reviews and listing data at scale, past the usual scrape defenses, then pushed enrichment back into seller reach. That covered 30K+ products and 30K+ sellers. Playwright handled capture. Python sat under the pipelines. Smartlead ran the send path.",
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
    logo: "/brands/media-net.png",
    summary:
      "Ad-tech data plane at Directi. Streaming, batch, and data quality on billions of rows: DANTE for integrity, StopLoss for real-time audit. This is why I will not drown in an enterprise warehouse.",
    metrics: [
      { value: "50k/s", label: "Kafka ingest" },
      { value: "~50%", label: "streaming latency cut" },
      { value: "~3B rows", label: "compared in 30 minutes" },
    ],
    shipped: [
      "DANTE, our first configurable data-quality suite: 60% faster on >100GB reads. EQ, Ratio, and PM tracers for metric trends, outliers, and mismatch coverage.",
      "StopLoss: Spark Streaming to Structured Streaming, exactly-once semantics, ~50% latency down. A/B tests cut overall loss ~15%.",
      "Compared nearly 3 billion and 200 million rows in 30 minutes. Kafka ingest at 50k records/s, processed in 5-minute buckets.",
    ],
    stack: ["Scala", "Spark", "Kafka", "Hive", "Java"],
    detail: [
      "Ad-tech data plane at Directi, October 2021 to March 2025. Streaming, batch, and data quality on billions of rows.",
      "DANTE was the first configurable data-quality toolkit I conceptualized there. Parallel reads on >100GB workloads dropped about 60% in time. EQ Tracer watched summative metrics across hierarchies with alerting that filtered noise. Ratio Tracer caught outliers on percentile thresholds. PM Tracer aggregated logs for coverage and mismatch analysis. The hard check: nearly 3 billion rows and 200 million rows compared in 30 minutes.",
      "StopLoss was the streaming audit path. I moved Spark Streaming to Structured Streaming for exactly-once semantics and about 50% less latency, ingesting 50k Kafka records a second into 5-minute buckets. A/B tests on traffic and loss thresholds cut overall losses about 15%.",
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
    logo: "/brands/devsnest.png",
    summary:
      "Ed-tech community backend. First founding-adjacent backend seat: Discord automation and a notification path that held as the product hit 10K users in three months.",
    metrics: [
      { value: "10K", label: "users in 3 months" },
      { value: "2K/day", label: "notification messages" },
    ],
    shipped: [
      "Discord group-moderation automation through the web app so peer learning could run with less ops overhead.",
      "Notification system at 2K messages/day as the community scaled to 10K users in three months.",
    ],
    stack: ["Ruby on Rails", "Python", "Redis", "SQS"],
    detail: [
      "Ed-tech community backend, October 2020 to October 2021. I was the founding-adjacent backend hire: Discord automation, notifications, and a product that hit 10K users in three months.",
      "Moderation ran through the web app into Discord so peer groups could learn without a full-time ops desk. The notification path sent 2K messages a day on Rails, Python, Redis, and SQS and stayed up as the community grew.",
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
