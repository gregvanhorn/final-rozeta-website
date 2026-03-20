import manifest from "@/content/page-manifest.json";

export type PageType = "core" | "industry" | "automation" | "compare" | "guide" | "blog";

export type PageIntent = "Transactional" | "Consideration" | "Informational" | "Navigational";

export interface PageFaq {
  question: string;
  answer: string;
}

export interface PageDefinition {
  path: string;
  slug: string;
  type: PageType;
  status: "live";
  title: string;
  h1: string;
  metaDescription: string;
  primaryKeyword: string;
  intent: PageIntent;
  heroEyebrow: string;
  summary: string;
  intro: string;
  problemPoints?: string[];
  solutionPoints?: string[];
  deliverables?: string[];
  faqs?: PageFaq[];
  relatedPaths?: string[];
  schemaTypes?: string[];
  hubFor?: PageType;
}

interface SiteManifest {
  site: {
    name: string;
    baseUrl: string;
    defaultOgImage: string;
  };
  pages: PageDefinition[];
}

const siteManifest = manifest as SiteManifest;

export const siteConfig = siteManifest.site;
export const sitePages = siteManifest.pages;

export function getPageByPath(pathname: string): PageDefinition | undefined {
  return sitePages.find((page) => page.path === pathname);
}

export function getPagesByType(type: PageType): PageDefinition[] {
  return sitePages.filter((page) => page.type === type);
}

export function getRelatedPages(page: PageDefinition): PageDefinition[] {
  if (!page.relatedPaths?.length) return [];
  return page.relatedPaths
    .map((path) => getPageByPath(path))
    .filter((value): value is PageDefinition => Boolean(value));
}

export function getHubChildren(page: PageDefinition): PageDefinition[] {
  if (!page.hubFor) return [];
  return getPagesByType(page.hubFor).sort((a, b) => a.title.localeCompare(b.title));
}

export function getBreadcrumbs(pathname: string): Array<{ label: string; path: string }> {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Home", path: "/" }];

  if (segments.length === 0) {
    return breadcrumbs;
  }

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const page = getPageByPath(currentPath);
    breadcrumbs.push({
      label: page?.h1 ?? segment.replace(/-/g, " "),
      path: currentPath,
    });
  }

  return breadcrumbs;
}

export function getLivePaths(): string[] {
  return sitePages.map((page) => page.path);
}
