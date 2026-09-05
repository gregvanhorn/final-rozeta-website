export type VslKind = "empty" | "youtube" | "vimeo" | "file" | "embed";

export type ResolvedVsl = {
  kind: VslKind;
  src: string;
  youtubeId?: string;
  vimeoId?: string;
};

export class VslSource {
  static resolve(rawUrl: string): ResolvedVsl {
    const src = rawUrl.trim();
    if (!src) {
      return { kind: "empty", src: "" };
    }

    const youtubeId = VslSource.youtubeId(src);
    if (youtubeId) {
      return { kind: "youtube", src, youtubeId };
    }

    const vimeoId = VslSource.vimeoId(src);
    if (vimeoId) {
      return { kind: "vimeo", src, vimeoId };
    }

    if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(src)) {
      return { kind: "file", src };
    }

    return { kind: "embed", src };
  }

  static youtubeEmbed(id: string): string {
    const params = new URLSearchParams({
      enablejsapi: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }

  static vimeoEmbed(id: string): string {
    return `https://player.vimeo.com/video/${id}?dnt=1`;
  }

  static youtubeId(src: string): string | undefined {
    try {
      const url = new URL(src, "https://example.com");
      const host = url.hostname.replace(/^www\./, "");
      if (host === "youtu.be") {
        const id = url.pathname.split("/").filter(Boolean)[0];
        return id || undefined;
      }
      if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
        if (url.searchParams.get("v")) {
          return url.searchParams.get("v") ?? undefined;
        }
        const parts = url.pathname.split("/").filter(Boolean);
        if ((parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") && parts[1]) {
          return parts[1];
        }
      }
    } catch {
      return undefined;
    }
    return undefined;
  }

  static vimeoId(src: string): string | undefined {
    try {
      const url = new URL(src, "https://example.com");
      const host = url.hostname.replace(/^www\./, "");
      if (host === "vimeo.com" || host === "player.vimeo.com") {
        const parts = url.pathname.split("/").filter(Boolean);
        const id = parts[0] === "video" ? parts[1] : parts[0];
        return id && /^\d+$/.test(id) ? id : undefined;
      }
    } catch {
      return undefined;
    }
    return undefined;
  }
}

export class VslQuartileWatcher {
  static readonly MARKS = [25, 50, 75, 100] as const;

  static next(
    elapsed: number,
    duration: number,
    seen: Set<number>,
  ): (typeof VslQuartileWatcher.MARKS)[number] | null {
    if (duration <= 0) {
      return null;
    }
    const pct = (elapsed / duration) * 100;
    for (const mark of VslQuartileWatcher.MARKS) {
      if (pct >= mark && !seen.has(mark)) {
        seen.add(mark);
        return mark;
      }
    }
    return null;
  }
}
