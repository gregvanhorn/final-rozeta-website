import { SignalLogo } from "@/components/SignalLogo";

export function SiteFooter() {
  return (
    <footer className="bg-tan">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <SignalLogo size="sm" />
          <span className="text-sm font-bold tracking-tight uppercase">Rozeta Labs</span>
        </div>
        <p className="text-sm font-bold text-ink/70">
          Representation, not custody. Confidential assessment is not a valuation.
        </p>
      </div>
    </footer>
  );
}
