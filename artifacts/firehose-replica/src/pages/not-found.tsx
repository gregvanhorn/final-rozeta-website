import MarketingLayout from "@/components/shared/MarketingLayout";
import SeoHead from "@/components/shared/SeoHead";
import { AlertCircle } from "lucide-react";
import { getPageByPath } from "@/lib/site-manifest";

const homePage = getPageByPath("/");

export default function NotFound() {
  return (
    <MarketingLayout>
      {homePage ? (
        <SeoHead
          page={{
            ...homePage,
            title: "Page Not Found | Rozeta Labs",
            h1: "Page not found",
            metaDescription: "The requested page could not be found on Rozeta Labs.",
          }}
          noindex
        />
      ) : null}
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-16">
        <div className="w-full border-4 border-black bg-white p-10 shadow-[8px_8px_0px_0px_#000]">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold uppercase">Page Not Found</h1>
          </div>
          <p className="mt-5 text-base leading-7">
            This route is not part of the live Rozeta sitemap yet. Use the main navigation to explore the current hubs or jump back to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/" className="inline-flex items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] px-5 py-3 text-sm font-bold uppercase tracking-wide shadow-neo-sm">
              Go Home
            </a>
            <a href="/guides" className="inline-flex items-center justify-center border-4 border-black bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide shadow-neo-sm">
              Browse Guides
            </a>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
