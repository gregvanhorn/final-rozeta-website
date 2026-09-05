import type { VariantCopy } from "@/config/VariantCatalog";
import { PrimaryCta } from "@/components/PrimaryCta";

type HeroHeaderProps = {
  copy: VariantCopy;
  onCta: () => void;
};

export function HeroHeader({ copy, onCta }: HeroHeaderProps) {
  return (
    <section className="relative border-b-4 border-black bg-black text-white">
      <div className="bg-dots-neo absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-6 inline-block border-4 border-white bg-yellow px-3 py-1 text-xs font-bold tracking-widest text-ink uppercase shadow-neo-sm">
          {copy.kicker}
        </div>
        <h1 className="text-4xl leading-[0.95] font-bold tracking-tighter uppercase sm:text-6xl lg:text-7xl">
          {copy.headlineLead}{" "}
          <span className="mt-2 inline-block -rotate-1 border-4 border-black bg-yellow px-2 text-ink shadow-neo-md sm:px-3">
            {copy.highlight}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base font-bold text-white/90 sm:text-lg">
          {copy.promise}
        </p>
        <div className="mt-8">
          <PrimaryCta onClick={onCta} />
        </div>
      </div>
    </section>
  );
}
