"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/** Full-screen couple video played once after the guest taps "Open invitation". */
export function ChurchEntrance({ onDone }: { onDone: () => void }) {
  const done = useRef(false);
  const finish = () => { if (!done.current) { done.current = true; onDone(); } };

  // Safety net: never trap a guest if the video is slow or blocked.
  useEffect(() => {
    const id = window.setTimeout(finish, 7000);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[110] bg-[#1f2a22]"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding entrance video"
    >
      <video
        className="h-full w-full object-cover"
        src="/church-entrance.mp4"
        poster="/church-entrance-poster.jpg"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
      <button
        type="button"
        onClick={finish}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-5 rounded-full border border-white/50 bg-black/30 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[.18em] text-white backdrop-blur-md hover:bg-black/50"
      >
        Skip
      </button>
    </motion.div>
  );
}
