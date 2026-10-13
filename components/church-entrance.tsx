"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ChurchEntrance({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries.some((entry) => entry.isIntersecting));
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      void video.play().catch((error: Error) => {
        console.warn("Autoplay was prevented:", error);
      });
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 overflow-hidden bg-background flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 text-center mb-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-primary mb-3 block"
        >
          Sacred Moments
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-foreground"
        >
          The Church Entrance
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl mx-auto px-4 aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-primary/10 bg-black/5"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover transform-gpu transition-transform duration-700 hover:scale-105"
          playsInline
          muted
          loop
          preload="metadata"
          poster="/couple.jpg"
        >
          <source src="/church-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}