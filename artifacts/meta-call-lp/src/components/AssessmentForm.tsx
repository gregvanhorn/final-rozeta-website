import { useEffect } from "react";

import { FunnelTracking } from "@/lib/FunnelTracking";
import { JotformBridge } from "@/lib/JotformBridge";
import type { UtmBag } from "@/lib/UtmPassthrough";
import { UtmPassthrough } from "@/lib/UtmPassthrough";

type AssessmentFormProps = {
  formUrl: string;
  utm: UtmBag;
  variant: string;
};

export function AssessmentForm({ formUrl, utm, variant }: AssessmentFormProps) {
  const src = formUrl ? UtmPassthrough.applyToFormUrl(formUrl, utm) : "";

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (!JotformBridge.isOrigin(event.origin)) {
        return;
      }
      if (JotformBridge.isSubmit(event.data)) {
        FunnelTracking.lead({ variant, source: "jotform" });
        return;
      }
      if (JotformBridge.isInteraction(event.data)) {
        FunnelTracking.formStart({ variant, source: "jotform" });
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [variant]);

  return (
    <section id="assessment" className="scroll-mt-20 border-b-4 border-black bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-6 inline-block border-4 border-black bg-black px-4 py-2 text-xs font-bold tracking-widest text-yellow uppercase shadow-neo-sm">
          Application
        </div>
        <h2 className="text-3xl font-bold tracking-tighter uppercase sm:text-5xl">
          Request a confidential assessment
        </h2>
        <p className="mt-4 max-w-2xl text-sm font-bold text-ink/80 sm:text-base">
          Fit and readiness only. No raw-data dump. If we take the mandate, we represent you to AI
          buyers. Calendly booking can land in-form later.
        </p>

        <div className="mt-8 border-4 border-black bg-white shadow-neo-lg">
          {src ? (
            <iframe
              title="Request a confidential assessment"
              src={src}
              className="block min-h-[720px] w-full border-0"
              onFocus={() => FunnelTracking.formStart({ variant, source: "iframe-focus" })}
            />
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="text-xs font-bold tracking-widest uppercase">Form slot</p>
              <p className="mt-3 text-2xl font-bold tracking-tight break-all uppercase">
                Set VITE_JOTFORM_URL
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm font-bold text-ink/70">
                Paste the confidential assessment JotForm URL at deploy time. Hidden fields should
                match utm_source, utm_medium, utm_campaign, utm_term, utm_content, fbclid, gclid,
                and variant.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
