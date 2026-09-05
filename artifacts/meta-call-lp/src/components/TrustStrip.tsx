const POINTS = [
  {
    label: "No custody",
    body: "We never take possession of raw operational data. Representation, not warehousing.",
  },
  {
    label: "Seller authority",
    body: "You stay the principal. We represent owners licensing data to AI buyers.",
  },
  {
    label: "Not valuation theater",
    body: "A confidential assessment is a fit and readiness review, not a staged number.",
  },
] as const;

export function TrustStrip() {
  return (
    <section className="border-b-4 border-black bg-cream">
      <div className="bg-grid-neo relative">
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="mb-6 text-xs font-bold tracking-widest uppercase">How this works</p>
          <div className="grid gap-4 lg:grid-cols-3">
            {POINTS.map((point) => (
              <article
                key={point.label}
                className="border-4 border-black bg-white p-5 shadow-neo-md"
              >
                <h2 className="text-lg leading-tight font-bold tracking-tight break-words uppercase sm:text-xl">
                  {point.label}
                </h2>
                <p className="mt-3 text-sm leading-snug font-bold break-words text-ink/80">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
