export type TechPruferSurface = {
  slug: string;
  label: string;
  headline: string;
  summary: string;
  href: string;
  features: { eyebrow: string; title: string; points: string[] }[];
};

export const techpruferSurfaces: TechPruferSurface[] = [
  {
    slug: "feature-trails",
    label: "Company feature trails",
    headline: "Read how a company actually ships.",
    summary:
      "Scraped engineering blogs clustered into feature threads: hub to company to trail to post. The public intel layer at /blogs.",
    href: "https://techprufer.com/blogs",
    features: [
      {
        eyebrow: "Hub",
        title: "Curated companies, live threads.",
        points: [
          "Company hubs with feature threads extracted from real engineering blogs",
          "Star a trail, watch a company, then follow it in the feed",
        ],
      },
      {
        eyebrow: "Extract",
        title: "Posts become a trail, not a dump.",
        points: [
          "LLM extract clusters posts into rolling feature summaries",
          "Pipeline: attach, scrape, extract, then publish the trail",
        ],
      },
    ],
  },
  {
    slug: "resume-editor",
    label: "Resume Editor",
    headline: "Build your source of truth.",
    summary:
      "Stop editing Word docs. Structured master profile with live LaTeX preview, variants, and ATS-ready PDF export.",
    href: "https://techprufer.com/product/resume-editor",
    features: [
      {
        eyebrow: "Master Profile",
        title: "One profile, every version.",
        points: [
          "Structured JSON for experience, projects, skills, and education",
          "Pick bullets per job from the master profile, or edit raw JSON",
        ],
      },
      {
        eyebrow: "Live LaTeX Preview",
        title: "See exactly what recruiters see.",
        points: [
          "Real LuaTeX engine, not HTML-to-PDF",
          "Layout controls beside a masked, LaTeX-rendered preview",
        ],
      },
      {
        eyebrow: "Variant Management",
        title: "Main, jobs, refs, masked.",
        points: [
          "Multiple variants from one profile",
          "Masked names for confidential employers, export any variant to PDF",
        ],
      },
    ],
  },
  {
    slug: "job-tailor",
    label: "Job Tailor",
    headline: "A resume that rewrites itself.",
    summary:
      "Bring your own AI key. Rewrite the master profile to the JD, then compile a LuaTeX PDF.",
    href: "https://techprufer.com/product/job-tailor",
    features: [
      {
        eyebrow: "Profile-First Matching",
        title: "Know your fit before you tailor.",
        points: [
          "Match score 0–100 from vocabulary intersection with the JD",
          "Rank resumes before spending credits",
        ],
      },
      {
        eyebrow: "AI Rewriting",
        title: "Highlight what the job actually wants.",
        points: [
          "Your OpenAI, Gemini, or Grok key",
          "Live cost estimate before every tailor run",
        ],
      },
      {
        eyebrow: "LaTeX Compilation",
        title: "No messy HTML exports.",
        points: [
          "LuaTeX for ATS parsing",
          "Pay cents per tailor, not a monthly LLM subscription",
        ],
      },
    ],
  },
  {
    slug: "application-tracker",
    label: "Application Tracker",
    headline: "Never forget what you sent.",
    summary:
      "Immutable resume snapshots, Kanban stages, JD analysis, and outreach in one pipeline.",
    href: "https://techprufer.com/product/application-tracker",
    features: [
      {
        eyebrow: "Immutable Snapshots",
        title: "Exactly what you sent, forever.",
        points: [
          "Every tailored resume and saved JD stored as a snapshot",
          "Match score and tailor history on each application",
        ],
      },
      {
        eyebrow: "Kanban Pipeline",
        title: "Visualize your hunt.",
        points: [
          "Applied, Screening, Interview, Offer, Rejected",
          "Notes and snapshots in one place",
        ],
      },
      {
        eyebrow: "JD Understanding",
        title: "Read between the lines.",
        points: [
          "Must-haves, soft-skill signals, gaps to address",
          "Application Q&A for screening questions",
        ],
      },
    ],
  },
  {
    slug: "linkedin-improver",
    label: "LinkedIn Improver",
    headline: "Your LinkedIn profile, perfected on the fly.",
    summary:
      "The extension detects LinkedIn profile edits and surfaces AI-tailored experience and project content to paste.",
    href: "https://techprufer.com/product/linkedin-improver",
    features: [
      {
        eyebrow: "Auto-Detection",
        title: "Detects LinkedIn edits the instant they open.",
        points: [
          "Watches experience and project section edits",
          "Surfaces matching resume content without tab switching",
        ],
      },
      {
        eyebrow: "AI-Structured Fill",
        title: "Fills with structured, job-tailored content.",
        points: [
          "Bullets formatted the way strong LinkedIn profiles look",
          "Edit wording inline before you paste",
        ],
      },
    ],
  },
  {
    slug: "chrome-extension",
    label: "Chrome Extension",
    headline: "Don't leave the page.",
    summary:
      "Copilot on LinkedIn, Greenhouse, Workday, and Lever: capture, rank, autofill, vault, track.",
    href: "https://techprufer.com/product/chrome-extension",
    features: [
      {
        eyebrow: "Capture",
        title: "Save any job in one click.",
        points: [
          "Parses the JD and extracts requirements",
          "Ranks which resume fits before you leave the posting",
        ],
      },
      {
        eyebrow: "Autofill",
        title: "Apply without tab switching.",
        points: [
          "Fills forms from your profile",
          "Injects the tailored PDF into file uploads",
        ],
      },
      {
        eyebrow: "Vault and tracker",
        title: "Resumes and pipeline in the popup.",
        points: [
          "Every tailored variant from the extension",
          "Status and match scores without opening the dashboard",
        ],
      },
    ],
  },
];

export function getTechPruferSurface(slug: string) {
  return techpruferSurfaces.find((item) => item.slug === slug);
}
