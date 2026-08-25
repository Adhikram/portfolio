import { blogTrails, likedDesigns, solvedDesigns } from "../data/reading";
import { loop, ossRepos, products, site } from "../data/site";

export const starterPrompts = [
  "Who is Adhikram?",
  "What did you ship at ANAX?",
  "What is TechPrufer?",
  "Are you open to roles?",
];

type Chunk = { id: string; text: string; keywords: string[] };

function productChunk(product: (typeof products)[number]): Chunk {
  return {
    id: product.id,
    keywords: [
      product.id,
      product.name.toLowerCase(),
      product.role.toLowerCase(),
      ...product.stack.map((s) => s.toLowerCase()),
    ],
    text: [
      `${product.name}. ${product.role}, ${product.period}.`,
      product.summary,
      ...product.detail,
      ...product.metrics.map((m) => `${m.value} ${m.label}.`),
      ...product.shipped,
      `Stack: ${product.stack.join(", ")}.`,
      product.url ? `URL: ${product.url}` : "",
    ]
      .filter(Boolean)
      .join(" "),
  };
}

const chunks: Chunk[] = [
  {
    id: "about",
    keywords: ["who", "adhikram", "about", "bio", "background"],
    text: `${site.name}. ${site.role}. ${site.about} ${site.tagline} Based in ${site.location}.`,
  },
  {
    id: "contact",
    keywords: ["email", "contact", "linkedin", "hire", "reach", "available", "open"],
    text: `Email ${site.email}. LinkedIn ${site.linkedin}. GitHub ${site.github}. Twitter ${site.twitter}. Looking forward to forward-deployment opportunities.`,
  },
  {
    id: "loop",
    keywords: ["loop", "how", "work", "fde", "method", "process"],
    text: loop.map((s) => `${s.title}: ${s.body}`).join(" "),
  },
  ...products.map(productChunk),
  {
    id: "oss",
    keywords: [
      "github",
      "open source",
      "opensource",
      "fork",
      "firecrawl",
      "crawl4ai",
      "linkedin",
      "scraper",
    ],
    text: `Open-source software I forked and used: ${ossRepos
      .map((r) => `${r.name} (${r.url}), fork of ${r.upstream}. ${r.note}`)
      .join(" ")}`,
  },
  {
    id: "reading",
    keywords: [
      "reading",
      "blog",
      "blogs",
      "design",
      "system design",
      "techprufer",
      "rag",
      "crawler",
    ],
    text: [
      "Reading on TechPrufer.",
      `Starred feature trails: ${blogTrails.map((t) => `${t.company} — ${t.feature}`).join("; ")}.`,
      `System designs marked solved: ${solvedDesigns.map((d) => `${d.title} (${d.company})`).join("; ")}.`,
      `Also saved: ${likedDesigns.map((d) => `${d.title} (${d.company})`).join("; ")}.`,
    ].join(" "),
  },
];

function score(query: string, chunk: Chunk): number {
  const q = query.toLowerCase();
  const tokens = q.split(/[^a-z0-9+]+/).filter((t) => t.length > 2);
  let n = 0;
  for (const token of tokens) {
    if (chunk.keywords.some((k) => k.includes(token) || token.includes(k))) n += 3;
    if (chunk.text.toLowerCase().includes(token)) n += 1;
  }
  return n;
}

function sentencesFrom(text: string, limit = 4): string {
  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.slice(0, limit).join(" ");
}

export function answerQuestion(query: string): string {
  const q = query.trim();
  if (!q) return "Ask something about my work, stack, or whether I am open to a seat.";

  const lower = q.toLowerCase();

  if (/\b(email|contact|linkedin|reach|hire)\b/.test(lower)) {
    return `Fastest path is email: ${site.email}. LinkedIn is ${site.linkedin}. Twitter is ${site.twitter}.`;
  }

  if (/\b(open|available|reloc|fde|role|job|hiring)\b/.test(lower)) {
    return `Yes. I am based in ${site.locationShort} and looking forward to forward-deployment opportunities. Write to ${site.email} with the JD if you want me to check fit.`;
  }

  if (/\b(who|about|bio)\b/.test(lower) || lower === "who is adhikram?") {
    return `${site.about}`;
  }

  if (/\b(stack|tech|typescript|python|next)\b/.test(lower) && !/\banax|techprufer|grip\b/.test(lower)) {
    return `Day to day: TypeScript, Next.js, Python, PostgreSQL, RAG, and MCP. Expo for GripGrams. Earlier: Scala, Spark, Kafka, Hive at Media.net. Current stack chips on the site: ${site.currentStack.join(", ")}.`;
  }

  const ranked = chunks
    .map((chunk) => ({ chunk, n: score(q, chunk) }))
    .sort((a, b) => b.n - a.n);

  if (ranked[0].n === 0) {
    return `I only answer from this site. Try ANAX, TechPrufer, GripGrams, Media.net, stack, or how I work. Or email ${site.email}.`;
  }

  const top = ranked.filter((r) => r.n >= ranked[0].n * 0.6).slice(0, 2);
  return top.map((r) => sentencesFrom(r.chunk.text, 5)).join("\n\n");
}
