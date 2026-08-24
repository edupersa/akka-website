"use client";

import { useEffect } from "react";
import { pushDataLayerEvent } from "@/lib/gtm";

const THRESHOLDS = [25, 50, 75, 100];

export default function ScrollDepthTracker() {
  useEffect(() => {
    const reached = new Set<number>();
    let ticking = false;

    const checkDepth = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent =
        scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 100;

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          pushDataLayerEvent({ event: "scroll_profundidad", profundidad: threshold });
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(checkDepth);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkDepth();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
