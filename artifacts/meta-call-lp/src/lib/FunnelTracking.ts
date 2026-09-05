import { LpEnv } from "@/config/LpEnv";

export type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export class FunnelTracking {
  private static installed = false;
  private static fired = new Set<string>();

  static install(): void {
    if (FunnelTracking.installed || typeof document === "undefined") {
      return;
    }
    FunnelTracking.installed = true;
    FunnelTracking.installMetaPixel();
    FunnelTracking.installGtag();
  }

  static viewContent(props: TrackProps = {}): void {
    FunnelTracking.emit("ViewContent", props, { metaStandard: true, onceKey: "ViewContent" });
  }

  static vslPlay(props: TrackProps = {}): void {
    FunnelTracking.emit("VSLPlay", props, { metaStandard: false });
  }

  static vslQuartile(quartile: 25 | 50 | 75 | 100, props: TrackProps = {}): void {
    FunnelTracking.emit(
      "VSLQuartile",
      { ...props, quartile },
      { metaStandard: false, onceKey: `VSLQuartile:${quartile}` },
    );
  }

  static formStart(props: TrackProps = {}): void {
    FunnelTracking.emit("FormStart", props, { metaStandard: false, onceKey: "FormStart" });
  }

  static lead(props: TrackProps = {}): void {
    FunnelTracking.emit("Lead", props, { metaStandard: true });
  }

  static schedule(props: TrackProps = {}): void {
    FunnelTracking.emit("Schedule", props, { metaStandard: false });
  }

  private static emit(
    name: string,
    props: TrackProps,
    options: { metaStandard: boolean; onceKey?: string },
  ): void {
    if (options.onceKey) {
      if (FunnelTracking.fired.has(options.onceKey)) {
        return;
      }
      FunnelTracking.fired.add(options.onceKey);
    }

    const payload = FunnelTracking.clean(props);

    if (typeof window.fbq === "function") {
      if (options.metaStandard) {
        window.fbq("track", name, payload);
      } else {
        window.fbq("trackCustom", name, payload);
      }
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", FunnelTracking.toGtagName(name), payload);
    }

    if (import.meta.env.DEV) {
      console.info(`[funnel] ${name}`, payload);
    }
  }

  private static clean(props: TrackProps): Record<string, string | number | boolean> {
    const next: Record<string, string | number | boolean> = {};
    for (const [key, value] of Object.entries(props)) {
      if (value !== undefined) {
        next[key] = value;
      }
    }
    return next;
  }

  private static toGtagName(name: string): string {
    return name
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/[\s-]+/g, "_")
      .toLowerCase();
  }

  private static installMetaPixel(): void {
    const pixelId = LpEnv.metaPixelId();
    if (!pixelId) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    type FbqFn = ((...args: unknown[]) => void) & { q?: unknown[] };
    const existing = window.fbq as FbqFn | undefined;
    const fbq: FbqFn =
      existing ??
      function fbqStub(...args: unknown[]) {
        fbq.q = fbq.q ?? [];
        fbq.q.push(args);
      };
    window.fbq = fbq;
    window._fbq = fbq;
    fbq("init", pixelId);
    fbq("track", "PageView");
  }

  private static installGtag(): void {
    const measurementId = LpEnv.gtagId();
    if (!measurementId) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
  }
}
