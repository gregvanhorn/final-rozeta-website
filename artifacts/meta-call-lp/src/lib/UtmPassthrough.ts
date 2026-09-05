export type UtmBag = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
  variant?: string;
};

export class UtmPassthrough {
  static readonly KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "fbclid",
    "gclid",
    "variant",
  ] as const;

  static readonly STORAGE_KEY = "rozeta_meta_lp_utm";

  static fromSearchParams(params: URLSearchParams): UtmBag {
    const bag: UtmBag = {};
    for (const key of UtmPassthrough.KEYS) {
      const value = params.get(key)?.trim();
      if (value) {
        bag[key] = value;
      }
    }
    return bag;
  }

  static persist(bag: UtmBag): void {
    if (typeof sessionStorage === "undefined") {
      return;
    }
    const compact = UtmPassthrough.compact(bag);
    if (Object.keys(compact).length === 0) {
      return;
    }
    sessionStorage.setItem(UtmPassthrough.STORAGE_KEY, JSON.stringify(compact));
  }

  static recall(): UtmBag {
    if (typeof sessionStorage === "undefined") {
      return {};
    }
    try {
      const raw = sessionStorage.getItem(UtmPassthrough.STORAGE_KEY);
      if (!raw) {
        return {};
      }
      const parsed = JSON.parse(raw) as unknown;
      if (!parsed || typeof parsed !== "object") {
        return {};
      }
      return UtmPassthrough.compact(parsed as UtmBag);
    } catch {
      return {};
    }
  }

  static merge(fromUrl: UtmBag, extras: UtmBag = {}): UtmBag {
    return UtmPassthrough.compact({
      ...UtmPassthrough.recall(),
      ...fromUrl,
      ...extras,
    });
  }

  static applyToFormUrl(formUrl: string, bag: UtmBag): string {
    if (!formUrl) {
      return "";
    }
    const url = new URL(formUrl, window.location.origin);
    for (const key of UtmPassthrough.KEYS) {
      const value = bag[key];
      if (value) {
        url.searchParams.set(key, value);
      }
    }
    return url.toString();
  }

  static compact(bag: UtmBag): UtmBag {
    const next: UtmBag = {};
    for (const key of UtmPassthrough.KEYS) {
      const value = bag[key]?.trim();
      if (value) {
        next[key] = value;
      }
    }
    return next;
  }
}
