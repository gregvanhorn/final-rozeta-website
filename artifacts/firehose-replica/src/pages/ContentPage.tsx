import { useLocation } from "wouter";
import MarketingLayout from "@/components/shared/MarketingLayout";
import SeoHead from "@/components/shared/SeoHead";
import { getBreadcrumbs, getHubChildren, getPageByPath, getRelatedPages } from "@/lib/site-manifest";

function SectionCard({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <section className="border-4 border-black bg-white p-6 shadow-neo-sm">
      <h2 className="text-xl font-bold tracking-tight uppercase">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="border-l-4 border-black pl-4 text-sm leading-6 sm:text-base">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ContentPage() {
  const [location] = useLocation();
  const page = getPageByPath(location);

  if (!page) {
    return null;
  }

  const breadcrumbs = getBreadcrumbs(page.path);
  const relatedPages = getRelatedPages(page);
  const hubChildren = getHubChildren(page);

  return (
    <MarketingLayout>
      <SeoHead page={page} />

      <section className="border-b-4 border-black bg-[hsl(46,50%,88%)]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs font-bold uppercase tracking-[0.22em] text-black/70">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={breadcrumb.path}>
              <a href={breadcrumb.path} className="hover:underline">
                {breadcrumb.label}
              </a>
              {index < breadcrumbs.length - 1 ? " / " : ""}
            </span>
          ))}
        </div>
      </section>

      <section className="border-b-4 border-black bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/60">{page.heroEyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight uppercase sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">{page.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] px-5 py-3 text-sm font-bold uppercase tracking-wide shadow-neo-sm transition-all duration-100 hover:bg-yellow-400"
              >
                Book a Discovery Call
              </a>
              <a
                href="/guides/ai-implementation-roadmap"
                className="inline-flex items-center justify-center border-4 border-black bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide shadow-neo-sm transition-all duration-100 hover:bg-[hsl(46,100%,96%)]"
              >
                See the Roadmap
              </a>
            </div>
          </div>

          <aside className="border-4 border-black bg-[hsl(47,100%,50%)] p-5 shadow-neo-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em]">SEO target</p>
            <p className="mt-3 text-lg font-bold">{page.primaryKeyword}</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em]">Intent</p>
            <p className="mt-3 text-lg font-bold">{page.intent}</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="border-4 border-black bg-white p-6 shadow-neo-sm">
            <h2 className="text-xl font-bold tracking-tight uppercase">Overview</h2>
            <p className="mt-4 text-sm leading-7 sm:text-base">{page.intro}</p>
          </section>
          <SectionCard title="What This Page Covers" items={page.deliverables} />
          <SectionCard title="Where Operators Get Stuck" items={page.problemPoints} />
          <SectionCard title="How Rozeta Approaches It" items={page.solutionPoints} />
        </div>
      </section>

      {hubChildren.length > 0 && (
        <section className="border-y-4 border-black bg-[hsl(46,50%,88%)]">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <h2 className="text-2xl font-bold tracking-tight uppercase">Live Pages In This Hub</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hubChildren.map((child) => (
                <a key={child.path} href={child.path} className="border-4 border-black bg-white p-5 shadow-neo-sm transition-transform hover:-translate-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">{child.type}</p>
                  <h3 className="mt-3 text-lg font-bold uppercase">{child.h1}</h3>
                  <p className="mt-3 text-sm leading-6">{child.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.faqs?.length ? (
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="border-4 border-black bg-white p-6 shadow-neo-sm">
            <h2 className="text-2xl font-bold tracking-tight uppercase">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-5">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="border-t-2 border-black pt-5 first:border-t-0 first:pt-0">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-2xl font-bold tracking-tight uppercase">Related Paths</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedPages.map((relatedPage) => (
              <a key={relatedPage.path} href={relatedPage.path} className="border-4 border-black bg-white p-5 shadow-neo-sm transition-transform hover:-translate-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">{relatedPage.type}</p>
                <h3 className="mt-3 text-lg font-bold uppercase">{relatedPage.title}</h3>
                <p className="mt-3 text-sm leading-6">{relatedPage.summary}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="border-t-4 border-black bg-black">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/60">Next step</p>
          <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
            Turn the sitemap into an implementation plan for your business.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
            Rozeta uses this content architecture to help operators move from abstract AI interest into real workflows, timeline clarity, and shipped systems.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center border-4 border-white bg-[hsl(47,100%,50%)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-[6px_6px_0px_0px_#fff] transition-all duration-100 hover:bg-yellow-400"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </MarketingLayout>
  );
}
