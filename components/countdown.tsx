"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";
import { Reveal } from "@/components/reveal";

function remaining(target: number, now: number) {
  const totalSeconds = Math.max(0, Math.floor((target - now) / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

type Remaining = ReturnType<typeof remaining>;

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<Remaining | null>(null);
  const target = Date.parse(wedding.date.iso);

  useEffect(() => {
    if (Number.isNaN(target)) return;
    const update = () => setTimeLeft(remaining(target, Date.now()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const isPast = timeLeft && Object.values(timeLeft).every((value) => value === 0);

  return (
    <section id="countdown" className="relative overflow-hidden bg-gradient-to-r from-[#f7dbe0] via-[#fff0e4] to-[#edf2e5] px-6 py-20 sm:py-26">
      <div className="pointer-events-none absolute -left-28 top-4 h-72 w-72 rounded-full border border-rose/20" />
      <div className="pointer-events-none absolute -right-26 bottom-3 h-72 w-72 rounded-full border border-gold/20" />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="kicker text-rose-dark">Counting down the moments</p>
        <h2 className="display-serif mt-5 text-5xl tracking-tight text-charcoal sm:text-6xl">Until we say “I do”</h2>
        {Number.isNaN(target) ? (
          <p className="mt-8 text-sm text-sage-dark">Our special day is on its way.</p>
        ) : isPast ? (
          <p className="display-serif mt-9 text-4xl text-rose-dark">Our forever has begun ♡</p>
        ) : (
          <div className="mx-auto mt-11 grid max-w-[650px] grid-cols-4 gap-2 sm:gap-4" role="timer" aria-label="Time until the wedding">
            {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
              <div key={unit} className="flex min-w-0 flex-col items-center rounded-2xl border border-white/60 bg-white/45 px-1 py-5 shadow-[0_8px_24px_rgba(117,68,80,.05)] sm:px-4 sm:py-6">
                <span className="display-serif text-[clamp(1.9rem,8vw,3.5rem)] leading-none tabular-nums text-rose-dark sm:text-7xl">
                  {String(timeLeft?.[unit] ?? 0).padStart(2, "0")}
                </span>
                <span className="mt-3 text-[9px] font-semibold uppercase tracking-[.13em] text-muted sm:tracking-[.2em] sm:text-xs">{unit}</span>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
