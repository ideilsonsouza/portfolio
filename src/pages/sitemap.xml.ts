import type { APIRoute } from "astro";
import { siteUrl } from "../lib/site";
import { demos } from "../lib/demos";

export const GET: APIRoute = () => {
  const pages = [
    {
      loc: siteUrl.toString(),
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "1.0",
    },
    ...Object.keys(demos).map((slug) => ({
      loc: new URL(`/demos/${slug}`, siteUrl).toString(),
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
