import fs from "node:fs/promises";
import path from "node:path";
import manifest from "../src/content/page-manifest.json" with { type: "json" };

const publicDir = path.resolve(import.meta.dirname, "..", "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");
const robotsPath = path.join(publicDir, "robots.txt");

const urls = manifest.pages.map((page) => page.path);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url><loc>${manifest.site.baseUrl}${url}</loc></url>`)
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${manifest.site.baseUrl}/sitemap.xml
`;

await fs.writeFile(sitemapPath, sitemap, "utf8");
await fs.writeFile(robotsPath, robots, "utf8");
