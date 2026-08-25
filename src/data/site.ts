export const site = {
  name: "Adhikram Maitra",
  title: "Adhikram Maitra",
  description:
    "Forward-deployed AI engineer. Production agentic and RAG systems with operators, 5+ years data and backend at scale, founder who shipped 0 to $20K MRR and TechPrufer.",
  email: "adhikrammaitra@gmail.com",
  github: "https://github.com/Adhikram",
  githubUser: "Adhikram",
  linkedin: "https://www.linkedin.com/in/adhikram-maitra/",
  resume: "https://creator.techprufer.com/",
  techprufer: "https://techprufer.com/",
  anax: "https://anaxrep.com/",
  mediaNet: "https://www.media.net/",
  gripgrams: "https://gripgrams.com/",
  equalCollective: "https://www.linkedin.com/company/equal-collective/",
};

export const timeline = [
  {
    era: "GPT-4",
    body: `Data platforms at <a href="${site.mediaNet}">Media.net</a>. Billions of rows, Kafka streaming at 50k events/s, latency down ~50%, data-quality work that cut workload time ~60%.`,
  },
  {
    era: "Sonnet 3.5",
    body: `Founding engineer at <a href="${site.equalCollective}">Equal Collective</a>. AI outreach and seller ops from zero to $20K+ MRR, 30K+ sellers.`,
  },
  {
    era: "o-series",
    body: `Founding engineer at <a href="${site.anax}">ANAX</a>. Embedded with brokers. Agentic RAG over 20K+ financial docs. ~10x monthly qualified deal flow.`,
  },
  {
    era: "Opus",
    body: `Founder of <a href="${site.techprufer}">TechPrufer</a>. Job intel and tailor agents in production: ~2,000 unique users/day, 400+ companies, MCP hub, 150+ tailored resumes through my own pipeline.`,
  },
  {
    era: "Now",
    body: `<a href="${site.gripgrams}">GripGrams</a>: nutrition and strength-training app on Expo / React Native and Firebase. Shipped as a real product, fully free.`,
  },
] as const;
