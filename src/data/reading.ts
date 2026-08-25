/** Snapshot from TechPrufer user adhikrammaitra@gmail.com (ADMIN), 2026-08-25. */

export const TECHPRUFER = "https://techprufer.com";

export type ReadingTrail = {
  company: string;
  companySlug: string;
  feature: string;
  featureSlug: string;
};

export type ReadingDesign = {
  slug: string;
  title: string;
  company: string;
  companySlug: string;
  category: "System Design" | "ML System Design";
  status: "solved" | "liked";
};

/** Feature trails starred on that account. Blog post bookmarks are empty (0 rows). */
export const blogTrails: ReadingTrail[] = [
  {
    company: "Cloudflare",
    companySlug: "cloudflare",
    feature: "Artificial Intelligence Integration & Impact",
    featureSlug: "artificial-intelligence-integration-impact",
  },
];

export const designs: ReadingDesign[] = [
  {
    slug: "design-a-rag-system-with-evaluation",
    title: "Design a RAG system with evaluation",
    company: "OpenAI",
    companySlug: "openai",
    category: "ML System Design",
    status: "solved",
  },
  {
    slug: "design-and-optimize-a-rag-system",
    title: "Design and optimize a RAG system",
    company: "OpenAI",
    companySlug: "openai",
    category: "ML System Design",
    status: "solved",
  },
  {
    slug: "design-a-distributed-rate-limiter-2",
    title: "Design a Distributed Rate Limiter",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "design-a-sandboxed-cloud-ide",
    title: "Design a sandboxed cloud IDE",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "how-to-stream-a-large-file-to-1000-hosts-fastest",
    title: "How to stream a large file to 1000 hosts fastest",
    company: "Anthropic",
    companySlug: "anthropic",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "design-a-distributed-web-crawler-2",
    title: "Design a distributed web crawler",
    company: "Anthropic",
    companySlug: "anthropic",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "design-a-concurrent-web-crawler-2",
    title: "Design a concurrent web crawler",
    company: "Anthropic",
    companySlug: "anthropic",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "design-an-online-coding-judge-platform",
    title: "Design an Online Coding Judge Platform",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "lc-google-sd-google-calendar",
    title: "Google Calendar",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "lc-google-sd-concurrent-real-time-notification-system",
    title: "Concurrent real-time notification system",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "design-scalable-notification-rate-limiter",
    title: "Design Scalable Notification Rate Limiter",
    company: "Cursor",
    companySlug: "cursor",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "design-a-scalable-tagging-system",
    title: "Design a scalable tagging system",
    company: "Atlassian",
    companySlug: "atlassian",
    category: "System Design",
    status: "solved",
  },
  {
    slug: "build-and-design-a-mistral-rag-agent",
    title: "Build and design a Mistral RAG agent",
    company: "Mistral AI",
    companySlug: "mistral-ai",
    category: "ML System Design",
    status: "solved",
  },
  {
    slug: "lc-google-sd-message-logger",
    title: "Message Logger",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-detect-cycle-in-spreadsheet",
    title: "Detect Cycle in Spreadsheet",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-design-an-ad-serving-system",
    title: "Design an Ad Serving System",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-calendar-event-conflict-handling",
    title: "Design Calendar Event Conflict Handling",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-global-real-time-notification-system",
    title: "Design a global real-time notification system",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-twitter-hashtag-metrics-aggregator",
    title: "Design a Twitter hashtag metrics aggregator",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-deduplicated-file-storage-on-filesystem",
    title: "Design deduplicated file storage on filesystem",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-design-a-url-shortener-for-100m-users",
    title: "Design a URL shortener for 100M users",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-design-twitter",
    title: "Design Twitter",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-design-facebook",
    title: "Design Facebook",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-google-photos",
    title: "Google Photos",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "lc-google-sd-design-a-ride-sharing-application",
    title: "Design a ride-sharing application",
    company: "Google",
    companySlug: "google",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-payment-system-with-holds-and-batching",
    title: "Design a payment system with holds and batching",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-scalable-payment-processor",
    title: "Design a scalable payment processor",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-multi-tenant-online-ide",
    title: "Design a Multi-Tenant Online IDE",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-distributed-crossword-solving-service",
    title: "Design a distributed crossword solving service",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "liked",
  },
  {
    slug: "design-a-crossword-puzzle-solver-system",
    title: "Design a crossword puzzle solver system",
    company: "OpenAI",
    companySlug: "openai",
    category: "System Design",
    status: "liked",
  },
];

export const solvedDesigns = designs.filter((item) => item.status === "solved");
export const likedDesigns = designs.filter((item) => item.status === "liked");

export function trailHref(trail: ReadingTrail) {
  return `${TECHPRUFER}/blogs/${trail.companySlug}/${trail.featureSlug}`;
}

export function designHref(item: ReadingDesign) {
  return `${TECHPRUFER}/companies/${item.companySlug}/${item.slug}`;
}
