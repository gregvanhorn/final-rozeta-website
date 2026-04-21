import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = "G-B46ZH66P8V";

export default function GoogleAnalytics() {
  const [location] = useLocation();
  const hasTrackedInitialRoute = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) {
      return;
    }

    if (!hasTrackedInitialRoute.current) {
      hasTrackedInitialRoute.current = true;
      return;
    }

    window.gtag("config", measurementId, {
      page_location: window.location.href,
      page_path: location,
      page_title: document.title,
    });
  }, [location]);

  return null;
}
