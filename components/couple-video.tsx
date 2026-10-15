"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Couple video that sits inside the invitation frame: muted, looping, plays only while visible. */
export function CoupleVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) void video.play().catch(() => {}); else video.pause(); },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      className={className}
      src="/church-entrance.mp4"
      poster="/church-entrance-poster.jpg"
      muted
      loop
      playsInline
      preload="metadata"
      controls={!!reduced}
      aria-label="The couple walking to the altar"
    />
  );
}
