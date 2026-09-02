import { mkdir, readFile, writeFile } from "node:fs/promises";

import {
  getPageTitle,
  notFoundMetadata,
  pageMetadata,
  siteIdentity,
} from "../src/data/seo.js";

const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, "");

if (!siteUrl) {
  console.info("Skipping sitemap generation: VITE_SITE_URL is not configured.");
  process.exit(0);
}

let origin;

try {
  origin = new URL(siteUrl).origin;
} catch {
  throw new Error("VITE_SITE_URL must be a valid absolute URL.");
}

const projectData = await readFile(
  new URL("../src/data/projects.js", import.meta.url),
  "utf8",
);
const projects = [
  ...projectData.matchAll(
    /\bid:\s*"[^"]+",\s*slug:\s*"(?<slug>[^"]+)",\s*title:\s*"(?<title>[^"]+)",[\s\S]*?\bdescription:\s*"(?<description>[^"]+)",/g,
  ),
].map(({ groups }) => groups);

if (!projects.length) {
  throw new Error("No project metadata was found for static SEO generation.");
}

const routes = [
  "/",
  "/work",
  "/about",
  "/resume",
  "/contact",
  ...projects.map(({ slug }) => `/work/${slug}`),
];
const sitemapUrls = routes
  .map(
    (route) => `  <url><loc>${new URL(route, `${origin}/`).href}</loc></url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", `${origin}/`).href}
`;

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
    return entities[character];
  });
}

function getStructuredData(metadata, canonicalUrl) {
  if (metadata.noIndex) {
    return null;
  }

  if (metadata.project) {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: metadata.title,
      description: metadata.description,
      creator: { "@type": "Person", name: siteIdentity.name },
      url: canonicalUrl,
      ...(metadata.imageUrl && { image: metadata.imageUrl }),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteIdentity.name,
    jobTitle: siteIdentity.title,
    sameAs: [
      "https://www.linkedin.com/in/syniahpeterson",
      "https://github.com/syniahpeterson",
    ],
    url: origin,
  };
}

function getHead(metadata, canonicalUrl) {
  const title = getPageTitle(metadata.title);
  const type = metadata.project ? "article" : "website";
  const structuredDataValue = getStructuredData(metadata, canonicalUrl);
  const structuredData = structuredDataValue
    ? JSON.stringify(structuredDataValue).replace(/</g, "\\u003c")
    : "";
  const canonicalMeta = metadata.noIndex
    ? ""
    : `\n    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:url" content="${canonicalUrl}" />`;
  const imageMeta = metadata.imageUrl
    ? `\n    <meta property="og:image" content="${metadata.imageUrl}" />
    <meta name="twitter:image" content="${metadata.imageUrl}" />`
    : "";

  return `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="robots" content="${metadata.noIndex ? "noindex, nofollow" : "index, follow"}" />${canonicalMeta}
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:type" content="${type}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />${imageMeta}
    ${structuredData ? `<script id="structured-data" type="application/ld+json">${structuredData}</script>` : ""}`;
}

const indexPath = new URL("../dist/index.html", import.meta.url);
const indexHtml = await readFile(indexPath, "utf8");
const manifest = JSON.parse(
  await readFile(
    new URL("../dist/.vite/manifest.json", import.meta.url),
    "utf8",
  ),
);

await Promise.all(
  routes.map(async (route) => {
    const project = projects.find(({ slug }) => route === `/work/${slug}`);
    const image = project
      ? manifest[`src/assets/projects/${project.slug}/desktop.webp`]?.file
      : null;
    const metadata = project
      ? {
          title: project.title,
          description: project.description,
          project: true,
          ...(image && { imageUrl: new URL(image, `${origin}/`).href }),
        }
      : pageMetadata[route];
    const outputPath =
      route === "/"
        ? indexPath
        : new URL(`../dist${route}.html`, import.meta.url);
    const html = indexHtml.replace(
      /<title>[\s\S]*?<\/title>/,
      getHead(metadata, new URL(route, `${origin}/`).href),
    );

    await mkdir(new URL(".", outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }),
);

const notFoundHtml = indexHtml.replace(
  /<title>[\s\S]*?<\/title>/,
  getHead(notFoundMetadata, new URL("/404.html", `${origin}/`).href),
);
await writeFile(new URL("../dist/404.html", import.meta.url), notFoundHtml);

await Promise.all([
  writeFile(new URL("../dist/sitemap.xml", import.meta.url), sitemap),
  writeFile(new URL("../dist/robots.txt", import.meta.url), robots),
]);
