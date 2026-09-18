import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blogs.ts content to extract slugs
const blogsFilePath = path.resolve(__dirname, '../src/lib/blogs.ts');
const blogsContent = fs.readFileSync(blogsFilePath, 'utf-8');

const slugRegex = /slug:\s*["']([^"']+)["']/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(blogsContent)) !== null) {
  slugs.push(match[1]);
}

const uniqueSlugs = [...new Set(slugs)];
console.log(`Extracted ${uniqueSlugs.length} unique blog slugs.`);

const today = new Date().toISOString().split('T')[0];
const baseUrl = "https://nehamam.com";

const corePages = [
  { url: "", priority: "1.0", changefreq: "daily" },
  { url: "/profiles", priority: "0.9", changefreq: "daily" },
  { url: "/blog", priority: "0.85", changefreq: "daily" },
  { url: "/terms", priority: "0.5", changefreq: "monthly" },
  { url: "/privacy", priority: "0.5", changefreq: "monthly" }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Core pages
for (const p of corePages) {
  xml += `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/images/udaipur-escort-service.jpg</image:loc>
      <image:title>#1 Udaipur Escort Service - Neha Mam</image:title>
    </image:image>
  </url>
`;
}

// Blog pages
for (const slug of uniqueSlugs) {
  xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
}

xml += `</urlset>\n`;

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`Successfully generated valid public/sitemap.xml with ${corePages.length + uniqueSlugs.length} URLs for ${baseUrl}.`);
