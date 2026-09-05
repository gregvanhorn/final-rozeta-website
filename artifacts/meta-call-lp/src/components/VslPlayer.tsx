import { useCallback, useEffect, useId, useRef, useState } from "react";

import { FunnelTracking } from "@/lib/FunnelTracking";
import { VslQuartileWatcher, VslSource } from "@/lib/VslSource";

type YtPlayer = {
  getCurrentTime: () => number;
  getDuration: () => number;
  playVideo: () => void;
};

type VslPlayerProps = {
  src: string;
  chapter: string;
  variant: string;
};

export function VslPlayer({ src, chapter, variant }: VslPlayerProps) {
  const resolved = VslSource.resolve(src);
  const [playing, setPlaying] = useState(false);
  const seen = useRef(new Set<number>());
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameId = useId().replace(/:/g, "");

  useEffect(() => {
    seen.current = new Set();
    setPlaying(false);
  }, [src]);

  const markTime = useCallback(
    (elapsed: number, duration: number) => {
      const quartile = VslQuartileWatcher.next(elapsed, duration, seen.current);
      if (quartile) {
        FunnelTracking.vslQuartile(quartile, { variant, kind: resolved.kind });
      }
    },
    [resolved.kind, variant],
  );

  function startPlayback() {
    setPlaying(true);
    FunnelTracking.vslPlay({ variant, kind: resolved.kind });
  }

  return (
    <section className="border-b-4 border-black bg-yellow">
      <div className="bg-halftone relative">
        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase">Video sales letter</p>
              <p className="mt-1 text-sm font-bold sm:text-base">{chapter}</p>
            </div>
            <div className="border-4 border-black bg-white px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-neo-sm">
              60-90s open
            </div>
          </div>

          <div className="overflow-hidden border-4 border-black bg-black shadow-neo-lg">
            <div className="relative aspect-video w-full">
              {!playing && (
                <button
                  type="button"
                  onClick={startPlayback}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black text-white"
                >
                  <span className="flex h-16 w-16 items-center justify-center border-4 border-black bg-yellow text-2xl text-ink shadow-neo-md sm:h-20 sm:w-20">
                    ▶
                  </span>
                  <span className="px-4 text-center text-xs font-bold tracking-widest uppercase sm:text-sm">
                    {resolved.kind === "empty" ? "Play summary (placeholder)" : "Play the 90-second open"}
                  </span>
                </button>
              )}

              {playing && resolved.kind === "empty" && <PlaceholderStage />}

              {playing && resolved.kind === "file" && (
                <video
                  ref={videoRef}
                  className="h-full w-full"
                  src={resolved.src}
                  controls
                  playsInline
                  autoPlay
                  onTimeUpdate={() => {
                    const video = videoRef.current;
                    if (video) {
                      markTime(video.currentTime, video.duration);
                    }
                  }}
                  onEnded={() => markTime(1, 1)}
                />
              )}

              {playing && resolved.kind === "youtube" && resolved.youtubeId && (
                <YoutubeStage
                  frameId={`yt-${frameId}`}
                  videoId={resolved.youtubeId}
                  onTick={markTime}
                />
              )}

              {playing && resolved.kind === "vimeo" && resolved.vimeoId && (
                <iframe
                  title="Rozeta VSL"
                  src={`${VslSource.vimeoEmbed(resolved.vimeoId)}&autoplay=1`}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}

              {playing && resolved.kind === "embed" && (
                <iframe
                  title="Rozeta VSL"
                  src={resolved.src}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderStage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-ink px-6 text-center text-white">
      <p className="text-xs font-bold tracking-widest uppercase">VSL slot</p>
      <p className="max-w-md text-lg font-bold tracking-tight uppercase sm:text-2xl">
        Set VITE_VSL_URL to drop in the real video
      </p>
      <p className="max-w-sm text-sm font-bold text-white/70">
        Designed for a 60-90 second summary open. Quartile beacons fire on HTML5 and YouTube sources.
      </p>
    </div>
  );
}

function YoutubeStage({
  frameId,
  videoId,
  onTick,
}: {
  frameId: string;
  videoId: string;
  onTick: (elapsed: number, duration: number) => void;
}) {
  const playerRef = useRef<YtPlayer | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    let cancelled = false;

    function poll() {
      const player = playerRef.current;
      if (player) {
        onTick(player.getCurrentTime(), player.getDuration());
      }
    }

    function attach() {
      const YT = (window as Window & { YT?: { Player: new (id: string, opts: object) => YtPlayer } }).YT;
      if (!YT || cancelled) {
        return;
      }
      playerRef.current = new YT.Player(frameId, {
        events: {
          onReady: (event: { target: YtPlayer }) => {
            playerRef.current = event.target;
            event.target.playVideo();
            timer = window.setInterval(poll, 1000);
          },
        },
      });
    }

    const existing = document.getElementById("rozeta-youtube-api");
    const apiWindow = window as Window & { onYouTubeIframeAPIReady?: () => void };
    if ((window as Window & { YT?: { Player?: unknown } }).YT?.Player) {
      attach();
    } else {
      const previous = apiWindow.onYouTubeIframeAPIReady;
      apiWindow.onYouTubeIframeAPIReady = () => {
        previous?.();
        attach();
      };
      if (!existing) {
        const script = document.createElement("script");
        script.id = "rozeta-youtube-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, [frameId, onTick]);

  return (
    <iframe
      id={frameId}
      title="Rozeta VSL"
      src={VslSource.youtubeEmbed(videoId)}
      className="h-full w-full border-0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  );
}
