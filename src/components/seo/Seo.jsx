import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import projects from "../../data/projects";
import { getPageTitle, notFoundMetadata, pageMetadata } from "../../data/seo";
import site from "../../data/site";

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function getPageMetadata(pathname) {
  const project = projects.find((item) => `/work/${item.slug}` === pathname);

  if (project) {
    return {
      title: getPageTitle(project.title),
      description: project.description,
      image: project.image,
      project,
    };
  }

  if (pageMetadata[pathname]) {
    return {
      ...pageMetadata[pathname],
      title: getPageTitle(pageMetadata[pathname].title),
    };
  }

  return { ...notFoundMetadata, title: getPageTitle(notFoundMetadata.title) };
}

function getStructuredData(metadata, canonicalUrl, imageUrl) {
  if (metadata.project) {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: metadata.project.title,
      description: metadata.description,
      creator: {
        "@type": "Person",
        name: site.name,
      },
      ...(canonicalUrl && { url: canonicalUrl }),
      ...(imageUrl && { image: imageUrl }),
    };
  }

  if (metadata.noIndex) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    sameAs: [site.socialLinks.linkedin, site.socialLinks.github],
    ...(site.url && { url: site.url }),
  };
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getPageMetadata(pathname);
    const canonicalUrl = site.url ? new URL(pathname, site.url).href : null;
    const imageUrl =
      metadata.image && site.url
        ? new URL(metadata.image, site.url).href
        : null;

    document.title = metadata.title;

    setMeta('meta[name="description"]', {
      name: "description",
      content: metadata.description,
    });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: metadata.title,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: metadata.description,
    });
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: metadata.project ? "article" : "website",
    });
    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: imageUrl ? "summary_large_image" : "summary",
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: metadata.title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: metadata.description,
    });

    if (canonicalUrl) {
      setLink('link[rel="canonical"]', {
        rel: "canonical",
        href: canonicalUrl,
      });
      setMeta('meta[property="og:url"]', {
        property: "og:url",
        content: canonicalUrl,
      });
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    if (imageUrl) {
      setMeta('meta[property="og:image"]', {
        property: "og:image",
        content: imageUrl,
      });
      setMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: imageUrl,
      });
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove();
      document.head.querySelector('meta[name="twitter:image"]')?.remove();
    }

    setMeta('meta[name="robots"]', {
      name: "robots",
      content: metadata.noIndex ? "noindex, nofollow" : "index, follow",
    });

    let structuredData = document.head.querySelector("#structured-data");

    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }

    const structuredDataValue = getStructuredData(
      metadata,
      canonicalUrl,
      imageUrl,
    );

    if (structuredDataValue) {
      structuredData.textContent = JSON.stringify(structuredDataValue);
    } else {
      structuredData.remove();
    }
  }, [pathname]);

  return null;
}

export default Seo;
