import { useEffect } from "react";
import { getBreadcrumbs, siteConfig, type PageDefinition } from "@/lib/site-manifest";

interface SeoHeadProps {
  page?: PageDefinition;
  canonicalPath?: string;
  noindex?: boolean;
}

function upsertMeta(key: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function buildSchemas(page: PageDefinition, canonicalUrl: string) {
  const breadcrumbs = getBreadcrumbs(page.path);
  const schemas: object[] = [];

  if (page.path === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      logo: `${siteConfig.baseUrl}/rozeta-icon-512.png`,
    });
  }

  const pageType = page.type === "blog" ? "Article" : page.hubFor ? "CollectionPage" : "WebPage";
  schemas.push({
    "@context": "https://schema.org",
    "@type": pageType,
    name: page.title,
    headline: page.h1,
    description: page.metaDescription,
    url: canonicalUrl,
    about: page.primaryKeyword,
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.label,
      item: `${siteConfig.baseUrl}${breadcrumb.path}`,
    })),
  });

  if (page.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}

export default function SeoHead({ page, canonicalPath, noindex = false }: SeoHeadProps) {
  useEffect(() => {
    if (!page) return;

    const canonicalUrl = `${siteConfig.baseUrl}${canonicalPath ?? page.path}`;
    document.title = page.title;
    upsertMeta("description", page.metaDescription);
    upsertMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", canonicalUrl);

    upsertMeta("og:title", page.title, "property");
    upsertMeta("og:description", page.metaDescription, "property");
    upsertMeta("og:type", page.type === "blog" ? "article" : "website", "property");
    upsertMeta("og:url", canonicalUrl, "property");
    upsertMeta("og:image", `${siteConfig.baseUrl}${siteConfig.defaultOgImage}`, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", page.title);
    upsertMeta("twitter:description", page.metaDescription);
    upsertMeta("twitter:image", `${siteConfig.baseUrl}${siteConfig.defaultOgImage}`);

    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((element) => {
      element.remove();
    });

    for (const schema of buildSchemas(page, canonicalUrl)) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [canonicalPath, noindex, page]);

  return null;
}
