import type { APIRoute } from "astro";
import { ownedProducts } from "../data/site";
import { techpruferSurfaces } from "../data/techprufer";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://adhikram.com");
  const paths = [
    "/",
    "/llms.txt",
    ...ownedProducts.map((product) => `/products/${product.id}`),
    ...techpruferSurfaces.map((surface) => `/products/techprufer/${surface.slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${new URL(path, origin).toString()}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
