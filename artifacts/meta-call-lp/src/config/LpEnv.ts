export class LpEnv {
  static jotformUrl(): string {
    return (import.meta.env.VITE_JOTFORM_URL ?? "").trim();
  }

  static vslUrl(): string {
    return (import.meta.env.VITE_VSL_URL ?? "").trim();
  }

  static metaPixelId(): string {
    return (import.meta.env.VITE_META_PIXEL_ID ?? "").trim();
  }

  static gtagId(): string {
    return (import.meta.env.VITE_GTAG_ID ?? "").trim();
  }
}
