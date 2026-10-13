"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function ChurchEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  // Handle smooth play/pause based on scroll visibility to optimize performance
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isInView) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was prevented:", error);
      });
    } else {
      videoRef.current.pause();
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

      {/* Smooth Animated Video Container */}
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
          {/* Ensure your video file is placed inside public/ with this filename or update path */}
          <source src="/church-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}