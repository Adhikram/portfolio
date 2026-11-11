import {
  TECHPRUFER,
  blogTrails,
  designHref,
  likedDesigns,
  solvedDesigns,
  trailHref,
} from "../data/reading";
import { loop, ossRepos, ownedProducts, products, site, stackGroups } from "../data/site";

export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Site: https://adhikram.com`,
    `- Location: ${site.location}`,
    `- Email: ${site.email}`,
    `- Profiles: ${site.github}, ${site.linkedin}, ${site.twitter}`,
    "",
    "## About",
    "",
    site.about,
    "",
    site.tagline,
    "",
    "## How I work",
    "",
  ];

  for (const step of loop) {
    lines.push(`- ${step.n} ${step.title}: ${step.body}`);
  }

  lines.push("", "## Experience", "");

  for (const item of products.filter((p) => p.bucket === "experience")) {
    lines.push(`### ${item.name} — ${item.role}`);
    lines.push("");
    lines.push(`${item.period}${item.url ? ` · ${item.url}` : ""}`);
    lines.push("");
    lines.push(item.summary);
    lines.push("");
    for (const metric of item.metrics) {
      lines.push(`- ${metric.value} ${metric.label}`);
    }
    for (const shipped of item.shipped) {
      lines.push(`- ${shipped}`);
    }
    lines.push("");
    lines.push(`Stack: ${item.stack.join(", ")}`);
    lines.push("");
  }

  lines.push("## Products", "");
  lines.push(
    "Owned products, most recent first: GripGrams (live on Google Play), TechPrufer, Equal Collective. Detail pages live at /products/<id>.",
  );
  lines.push("");

  for (const item of ownedProducts) {
    lines.push(`### ${item.name} — ${item.role}`);
    lines.push("");
    lines.push(`${item.period}${item.url ? ` · ${item.url}` : ""}`);
    lines.push(`Page: https://adhikram.com/products/${item.id}`);
    lines.push("");
    if (item.id === "techprufer") {
      lines.push(
        "Feature trail of TechPrufer surfaces (copy from the live product pages): company feature trails, Resume Editor, Job Tailor, Application Tracker, LinkedIn Improver, Chrome Extension. Local pages at /products/techprufer/<slug>.",
      );
      lines.push("");
    }
    lines.push(item.summary);
    lines.push("");
    for (const para of item.detail) {
      lines.push(para);
      lines.push("");
    }
    for (const metric of item.metrics) {
      lines.push(`- ${metric.value} ${metric.label}`);
    }
    for (const shipped of item.shipped) {
      lines.push(`- ${shipped}`);
    }
    lines.push("");
    lines.push(`Stack: ${item.stack.join(", ")}`);
    lines.push("");
  }

  lines.push("## Reading (TechPrufer)", "");
  lines.push(
    `Attached from the live TechPrufer account. Feature trails I follow, then system designs I mark solved or save. Source: ${TECHPRUFER}.`,
  );
  lines.push("");
  lines.push("### Feature trails", "");
  for (const trail of blogTrails) {
    lines.push(`- [${trail.company} — ${trail.feature}](${trailHref(trail)})`);
  }
  lines.push("");
  lines.push("### Designs I worked through", "");
  for (const item of solvedDesigns) {
    lines.push(`- [${item.title}](${designHref(item)}) — ${item.company}, ${item.category}`);
  }
  lines.push("");
  lines.push("### Also saved", "");
  for (const item of likedDesigns) {
    lines.push(`- [${item.title}](${designHref(item)}) — ${item.company}`);
  }
  lines.push("");

  lines.push("## Open-source forks", "");
  lines.push(
    "Public GitHub forks of open-source software I used: Firecrawl, Crawl4AI, and LinkedIn Scraper.",
  );
  lines.push("");
  for (const repo of ossRepos) {
    lines.push(`- [${repo.name}](${repo.url}) — ${repo.note} Upstream: ${repo.upstream} (${repo.upstreamUrl}).`);
  }
  lines.push("");

  lines.push("## Stack", "");
  for (const group of stackGroups) {
    lines.push(`### ${group.title}`);
    lines.push("");
    lines.push(group.items.map((item) => item.name).join(", "));
    lines.push("");
  }

  lines.push("## Areas of focus", "");
  lines.push(site.focus.join(", "));
  lines.push("");
  lines.push("## Common questions", "");
  lines.push("");
  lines.push("### Who is Adhikram Maitra?");
  lines.push("");
  lines.push(site.about);
  lines.push("");
  lines.push("### What is ANAX?");
  lines.push("");
  lines.push(
    products.find((p) => p.id === "anax")?.summary ??
      "Commercial real-estate dashboard. Founding engineer.",
  );
  lines.push("");
  lines.push("### What is TechPrufer?");
  lines.push("");
  lines.push(
    products.find((p) => p.id === "techprufer")?.summary ??
      "Public job intel and a tailoring workbench.",
  );
  lines.push("");
  lines.push("### Is Adhikram available for work?");
  lines.push("");
  lines.push(
    "Yes. Looking forward to forward-deployment opportunities. Fastest contact: adhikrammaitra@gmail.com.",
  );
  lines.push("");
  lines.push("### What timezone is Adhikram in?");
  lines.push("");
  lines.push(site.location);
  lines.push("");

  return lines.join("\n");
}
