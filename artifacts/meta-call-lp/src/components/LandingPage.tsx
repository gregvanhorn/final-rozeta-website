import { useEffect, type MouseEvent } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { AssessmentForm } from "@/components/AssessmentForm";
import { HeroHeader } from "@/components/HeroHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrustStrip } from "@/components/TrustStrip";
import { VslPlayer } from "@/components/VslPlayer";
import { LpEnv } from "@/config/LpEnv";
import { VariantCatalog } from "@/config/VariantCatalog";
import { FunnelTracking } from "@/lib/FunnelTracking";
import { UtmPassthrough } from "@/lib/UtmPassthrough";

export function LandingPage() {
  const { variant: pathVariant } = useParams();
  const [params] = useSearchParams();
  const copy = VariantCatalog.resolve({
    pathVariant,
    queryVariant: params.get("v") ?? undefined,
  });
  const search = params.toString();
  const utm = UtmPassthrough.merge(UtmPassthrough.fromSearchParams(params), {
    variant: copy.id,
  });

  useEffect(() => {
    const next = UtmPassthrough.merge(
      UtmPassthrough.fromSearchParams(new URLSearchParams(search)),
      { variant: copy.id },
    );
    UtmPassthrough.persist(next);
    document.title = `${copy.headlineLead} ${copy.highlight} | Rozeta Labs`;
    FunnelTracking.viewContent({
      content_name: "meta-call-lp",
      content_category: "call_funnel",
      variant: copy.id,
    });
  }, [copy.headlineLead, copy.highlight, copy.id, search]);

  function openAssessment(event?: MouseEvent<HTMLAnchorElement>) {
    event?.preventDefault();
    FunnelTracking.formStart({ variant: copy.id, source: "cta" });
    document.getElementById("assessment")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="top" className="min-h-screen bg-cream text-ink">
      <SiteHeader onCta={openAssessment} />
      <main>
        <HeroHeader copy={copy} onCta={openAssessment} />
        <VslPlayer src={LpEnv.vslUrl()} chapter={copy.vslChapter} variant={copy.id} />
        <TrustStrip />
        <AssessmentForm formUrl={LpEnv.jotformUrl()} utm={utm} variant={copy.id} />
      </main>
      <SiteFooter />
    </div>
  );
}
