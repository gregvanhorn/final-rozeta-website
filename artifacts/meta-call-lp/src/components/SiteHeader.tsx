import { SignalLogo } from "@/components/SignalLogo";
import { PrimaryCta } from "@/components/PrimaryCta";

type SiteHeaderProps = {
  onCta: () => void;
};

export function SiteHeader({ onCta }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <a href="#top" aria-label="Rozeta Labs" className="flex min-w-0 items-center gap-3">
          <SignalLogo />
          <span className="hidden text-lg font-bold tracking-tight uppercase sm:inline sm:text-xl">
            Rozeta Labs
          </span>
        </a>
        <PrimaryCta size="sm" onClick={onCta} className="max-w-[12.5rem] shrink sm:max-w-none" />
      </div>
    </header>
  );
}
