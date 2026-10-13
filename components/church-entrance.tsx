"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { wedding } from "@/config/wedding";
import { WeddingFlorals } from "@/components/ornaments";

/**
 * "Open the church doors" scene.
 * Plays after the guest taps "Open our invitation":
 *   1. the church doors swing open and warm light spills out,
 *   2. doves fly up from the doorway,
 *   3. the bride & groom walk hand-in-hand up the path and into the church,
 *   4. the light blooms and melts into the invitation.
 *
 * Everything is drawn with SVG + CSS keyframes (see "Church entrance scene" in
 * app/globals.css) so it needs no video file and stays crisp on every screen.
 * Timings below must stay in sync with the animation delays in globals.css.
 */
export const CHURCH_ENTRANCE_MS = 8700;

const PETALS = [
  { x: 40, drift: 60, dur: 10, delay: 0.3, fill: "#ffffff" },
  { x: 95, drift: -40, dur: 12, delay: 2.6, fill: "#f3e6bf" },
  { x: 150, drift: 70, dur: 9, delay: 1.2, fill: "#ffffff" },
  { x: 215, drift: -60, dur: 11, delay: 4, fill: "#e9d9b4" },
  { x: 270, drift: 45, dur: 10.5, delay: 0.9, fill: "#ffffff" },
  { x: 330, drift: -50, dur: 9.5, delay: 3.2, fill: "#f3e6bf" },
  { x: 365, drift: 35, dur: 12, delay: 5.4, fill: "#ffffff" },
  { x: 120, drift: 30, dur: 11.5, delay: 6.5, fill: "#e9d9b4" },
];

const TWINKLES = [
  { x: 118, y: 150, d: 0 },
  { x: 288, y: 118, d: 0.9 },
  { x: 62, y: 250, d: 1.6 },
  { x: 342, y: 232, d: 0.5 },
  { x: 232, y: 82, d: 2.1 },
];

const DOVES = [
  { cls: "ce-dove-1", ex: "58px", ey: "74px" },
  { cls: "ce-dove-2", ex: "352px", ey: "46px" },
];

export function ChurchEntrance({ onComplete }: { onComplete: () => void }) {
  const onCompleteRef = useRef(onComplete);
  const skipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    skipRef.current?.focus({ preventScroll: true });
    const timer = window.setTimeout(() => onCompleteRef.current(), CHURCH_ENTRANCE_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="The bride and groom walk into the church"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="ce-scene fixed inset-0 z-[110] overflow-hidden bg-[#faf6e6]"
    >
      <svg
        viewBox="0 0 400 700"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ce-sky" gradientUnits="userSpaceOnUse" x1="0" y1="-200" x2="0" y2="440">
            <stop offset="0" stopColor="#efe5c4" />
            <stop offset=".55" stopColor="#f8f2dc" />
            <stop offset="1" stopColor="#fcfbf3" />
          </linearGradient>
          <linearGradient id="ce-ground" gradientUnits="userSpaceOnUse" x1="0" y1="440" x2="0" y2="780">
            <stop offset="0" stopColor="#d6e2cf" />
            <stop offset="1" stopColor="#9fbaa1" />
          </linearGradient>
          <radialGradient id="ce-sun" gradientUnits="userSpaceOnUse" cx="200" cy="300" r="290">
            <stop offset="0" stopColor="#f6dfa0" stopOpacity=".72" />
            <stop offset="1" stopColor="#f6dfa0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ce-interior" cx=".5" cy=".62" r=".7">
            <stop offset="0" stopColor="#fffbe6" />
            <stop offset=".55" stopColor="#f6dd93" />
            <stop offset="1" stopColor="#d6b062" />
          </radialGradient>
          <radialGradient id="ce-altar-glow" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset="1" stopColor="#fff3c4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ce-ray" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff0b8" stopOpacity=".8" />
            <stop offset="1" stopColor="#fff0b8" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ce-bloom" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#fffdf2" />
            <stop offset=".6" stopColor="#fdf8e4" />
            <stop offset="1" stopColor="#fcfbf5" stopOpacity="0" />
          </radialGradient>
          <clipPath id="ce-door-clip">
            <path d="M165 470V398A35 35 0 0 1 235 398V470Z" />
          </clipPath>
        </defs>

        {/* Sky, sun glow and ground (oversized so any screen shape is filled) */}
        <rect x="-3000" y="-3000" width="6400" height="3440" fill="url(#ce-sky)" />
        <circle cx="200" cy="300" r="290" fill="url(#ce-sun)" />
        <rect x="-3000" y="440" width="6400" height="3000" fill="url(#ce-ground)" />

        {/* Distant hills */}
        <rect x="-3000" y="424" width="6400" height="20" fill="#d1ddcc" />
        <ellipse cx="-30" cy="442" rx="170" ry="40" fill="#c4d4c0" />
        <ellipse cx="430" cy="442" rx="170" ry="36" fill="#c4d4c0" />
        <ellipse cx="210" cy="446" rx="135" ry="20" fill="#cddac9" />

        {/* Garden trees */}
        {[
          { x: 18, h: 112, w: 36, c: "#6f9677" },
          { x: 54, h: 152, w: 46, c: "#5d8566" },
          { x: 346, h: 152, w: 46, c: "#5d8566" },
          { x: 382, h: 112, w: 36, c: "#6f9677" },
        ].map((t) => (
          <g key={t.x}>
            <rect x={t.x - 2} y="462" width="4" height="12" fill="#6b5a3f" />
            <ellipse cx={t.x} cy={470 - t.h / 2} rx={t.w / 2} ry={t.h / 2} fill={t.c} />
            <ellipse cx={t.x - t.w / 7} cy={470 - t.h / 2 - 6} rx={t.w / 4} ry={t.h / 2.6} fill="#fff" opacity=".1" />
          </g>
        ))}

        {/* Church shadow */}
        <ellipse cx="200" cy="473" rx="150" ry="7" fill="rgba(60,80,60,.14)" />

        {/* Tower, spire and cross */}
        <rect x="176" y="190" width="48" height="104" fill="#f7f1dc" stroke="#c9b27f" strokeWidth="1.4" />
        <polygon points="170,192 200,134 230,192" fill="#7a9a82" stroke="#476751" strokeWidth="1.2" />
        <path d="M190 246V220A10 10 0 0 1 210 220V246Z" fill="#476751" />
        <g className="ce-bell">
          <path d="M200 214V220" stroke="#896e40" strokeWidth="1.2" />
          <path d="M194 234Q194 222 200 220Q206 222 206 234L208 237H192Z" fill="#b69861" />
        </g>
        <path d="M200 134V110M191 120H209" stroke="#b69861" strokeWidth="3" strokeLinecap="round" />

        {/* Side wings */}
        <rect x="68" y="388" width="40" height="82" fill="#f5eed8" stroke="#c9b27f" strokeWidth="1.3" />
        <rect x="292" y="388" width="40" height="82" fill="#f5eed8" stroke="#c9b27f" strokeWidth="1.3" />
        <polygon points="64,390 88,368 112,390" fill="#e9dfc0" stroke="#c9b27f" strokeWidth="1.2" />
        <polygon points="288,390 312,368 336,390" fill="#e9dfc0" stroke="#c9b27f" strokeWidth="1.2" />
        <path d="M82 436V420A6 6 0 0 1 94 420V436Z" fill="#f3dd9d" stroke="#b69861" strokeWidth="1" />
        <path d="M306 436V420A6 6 0 0 1 318 420V436Z" fill="#f3dd9d" stroke="#b69861" strokeWidth="1" />

        {/* Main body and gable */}
        <rect x="105" y="330" width="190" height="140" fill="#fbf7ea" stroke="#d4c294" strokeWidth="1.5" />
        <polygon points="100,332 200,262 300,332" fill="#f2e9cc" stroke="#c9b27f" strokeWidth="1.6" />
        <polyline points="112,330 200,269 288,330" fill="none" stroke="#b69861" strokeWidth=".8" opacity=".6" />

        {/* Rose window */}
        <circle cx="200" cy="302" r="14" fill="#fff6d6" stroke="#b69861" strokeWidth="1.5" />
        <circle cx="200" cy="302" r="6" fill="none" stroke="#b69861" strokeWidth=".8" />
        <path d="M200 288V316M186 302H214M190 292L210 312M210 292L190 312" stroke="#b69861" strokeWidth=".7" />

        {/* Nave windows */}
        <path d="M118 405V375A8 8 0 0 1 134 375V405Z" fill="#f3dd9d" stroke="#b69861" strokeWidth="1.1" />
        <path d="M266 405V375A8 8 0 0 1 282 375V405Z" fill="#f3dd9d" stroke="#b69861" strokeWidth="1.1" />

        {/* Steps */}
        <rect x="146" y="462" width="108" height="8" fill="#ebe3c8" stroke="#d4c294" strokeWidth=".8" />
        <rect x="138" y="468" width="124" height="6" fill="#e4dbbd" stroke="#d4c294" strokeWidth=".8" />

        {/* Inside the church (visible once the doors open) */}
        <g clipPath="url(#ce-door-clip)">
          <rect x="159" y="355" width="82" height="120" fill="url(#ce-interior)" />
          <polygon points="159,470 241,470 214,430 186,430" fill="#f1dc9e" opacity=".8" />
          <polygon points="188,470 212,470 204,430 196,430" fill="#b69861" opacity=".55" />
          <path d="M172 470L190 430M228 470L210 430" stroke="#d6bc7c" strokeWidth="1" opacity=".7" />
          <ellipse cx="200" cy="414" rx="18" ry="22" fill="url(#ce-altar-glow)" />
          <rect x="190" y="424" width="20" height="7" fill="#fffaf0" />
          <path d="M200 400V421M194 407H206" stroke="#896e40" strokeWidth="1.6" strokeLinecap="round" />
          <circle className="ce-flicker" cx="191" cy="421" r="1.8" fill="#fff" />
          <circle className="ce-flicker ce-flicker-late" cx="209" cy="421" r="1.8" fill="#fff" />
        </g>

        {/* The doors */}
        <g clipPath="url(#ce-door-clip)">
          <g className="ce-door-left">
            <rect x="165" y="360" width="35.5" height="112" fill="#476751" />
            <rect x="169" y="372" width="27" height="40" rx="2" fill="none" stroke="#b69861" strokeWidth="1" />
            <rect x="169" y="418" width="27" height="40" rx="2" fill="none" stroke="#b69861" strokeWidth="1" />
            <circle cx="196.5" cy="420" r="1.8" fill="#e9d9b4" />
          </g>
          <g className="ce-door-right">
            <rect x="199.5" y="360" width="35.5" height="112" fill="#476751" />
            <rect x="204" y="372" width="27" height="40" rx="2" fill="none" stroke="#b69861" strokeWidth="1" />
            <rect x="204" y="418" width="27" height="40" rx="2" fill="none" stroke="#b69861" strokeWidth="1" />
            <circle cx="203.5" cy="420" r="1.8" fill="#e9d9b4" />
          </g>
        </g>
        <path d="M163 470V398A37 37 0 0 1 237 398V470" fill="none" stroke="#b69861" strokeWidth="3" />
        <path d="M159 470V398A41 41 0 0 1 241 398V470" fill="none" stroke="#d6c394" strokeWidth="1" />

        {/* Path, runner and light spilling from the doorway */}
        <polygon points="168,470 232,470 952,1400 -552,1400" fill="#efe6cd" stroke="#d9c89b" strokeWidth="1.2" />
        <polygon points="186,470 214,470 521,1400 -121,1400" fill="#e6d4a3" opacity=".85" />
        <path d="M186 470L-121 1400M214 470L521 1400" stroke="#b69861" strokeWidth="1.4" opacity=".7" />
        <polygon className="ce-rays" points="165,470 235,470 360,700 40,700" fill="url(#ce-ray)" />
        <ellipse className="ce-rays" cx="200" cy="472" rx="64" ry="12" fill="#fff3c4" opacity=".8" />

        {/* Hedges with blossoms */}
        {[
          { x: 122, rx: 34 },
          { x: 278, rx: 34 },
        ].map((h) => (
          <g key={h.x}>
            <ellipse cx={h.x} cy="470" rx={h.rx} ry="16" fill="#6f9677" />
            <ellipse cx={h.x - 6} cy="466" rx={h.rx - 10} ry="10" fill="#86ab8c" />
            <circle cx={h.x - 16} cy="464" r="2.2" fill="#fffdf4" />
            <circle cx={h.x + 4} cy="460" r="2.2" fill="#e9d9b4" />
            <circle cx={h.x + 18} cy="467" r="2.2" fill="#fffdf4" />
          </g>
        ))}

        {/* Twinkling stars of light */}
        {TWINKLES.map((s) => (
          <path
            key={`${s.x}-${s.y}`}
            className="ce-twinkle"
            style={{ animationDelay: `${s.d}s` }}
            transform={`translate(${s.x} ${s.y})`}
            d="M0 -6L1.6 -1.6L6 0L1.6 1.6L0 6L-1.6 1.6L-6 0L-1.6 -1.6Z"
            fill="#e9d9b4"
          />
        ))}

        {/* Doves rising from the church */}
        {DOVES.map((d) => (
          <g key={d.cls} className={`ce-dove ${d.cls}`} style={{ "--ex": d.ex, "--ey": d.ey } as CSSProperties}>
            <g className="ce-flap">
              <path
                d="M-13 -3Q-7 -12 0 -2Q7 -12 13 -3Q7 -2 3 2L0 6L-3 2Q-7 -2 -13 -3Z"
                fill="#ffffff"
                stroke="#d9cfae"
                strokeWidth=".8"
                strokeLinejoin="round"
              />
            </g>
          </g>
        ))}

        {/* The bride and groom, walking away from us towards the church */}
        <g className="ce-couple">
          <g className="ce-bob">
            <ellipse cx="-8" cy="3" rx="54" ry="6" fill="rgba(35,58,42,.22)" />

            {/* Bride */}
            <g className="ce-hem">
              <path
                d="M-32 -100C-44 -62 -52 -26 -58 4Q-22 14 12 4C8 -26 -2 -62 -12 -100Z"
                fill="#fffdf8"
                stroke="#e6dbbd"
                strokeWidth="1"
              />
              <path
                d="M-30 -92C-36 -56 -42 -24 -46 2M-22 -92V6M-14 -92C-12 -56 -6 -24 0 3"
                stroke="#efe7d0"
                strokeWidth="1"
                fill="none"
              />
            </g>
            <path d="M-33 -126Q-22 -133 -11 -126L-12 -98L-32 -98Z" fill="#fffdf8" stroke="#e6dbbd" strokeWidth="1" />
            <path d="M-32 -99H-12" stroke="#b69861" strokeWidth="1.6" />
            <path d="M-13 -122L1 -75" stroke="#f6efdc" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M-33 -122L-36 -82" stroke="#f6efdc" strokeWidth="6" strokeLinecap="round" fill="none" />
            <g>
              <circle cx="-36" cy="-76" r="6.5" fill="#fff" stroke="#e6dbbd" strokeWidth=".8" />
              <circle cx="-38" cy="-78" r="1.6" fill="#b69861" />
              <circle cx="-34" cy="-74" r="1.6" fill="#b69861" />
              <ellipse cx="-36" cy="-68" rx="2" ry="4.5" fill="#829d87" />
            </g>
            <circle cx="-22" cy="-139" r="9.5" fill="#3a2a22" />
            <circle cx="-22" cy="-149" r="4.5" fill="#3a2a22" />
            <path
              d="M-22 -152C-40 -144 -46 -88 -43 -24Q-22 -16 -1 -24C2 -88 -4 -144 -22 -152Z"
              fill="rgba(255,255,255,.62)"
              stroke="rgba(190,170,120,.55)"
              strokeWidth=".8"
            />
            <circle cx="-22" cy="-151" r="1.6" fill="#b69861" />

            {/* Groom */}
            <g className="ce-leg-a">
              <rect x="15" y="-70" width="8.5" height="68" rx="3" fill="#2c4636" />
              <ellipse cx="19" cy="0" rx="6" ry="2.6" fill="#1b2b21" />
            </g>
            <g className="ce-leg-b">
              <rect x="25.5" y="-70" width="8.5" height="68" rx="3" fill="#2c4636" />
              <ellipse cx="30" cy="0" rx="6" ry="2.6" fill="#1b2b21" />
            </g>
            <rect x="21" y="-132" width="6" height="7" fill="#c79b78" />
            <path d="M9 -124Q24 -134 39 -124L41 -60Q24 -55 7 -60Z" fill="#3b5a46" />
            <path d="M24 -128V-58" stroke="#2c4636" strokeWidth="1" />
            <path d="M11 -120L3 -73" stroke="#3b5a46" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M37 -120L40 -68" stroke="#3b5a46" strokeWidth="7" strokeLinecap="round" fill="none" />
            <circle cx="40" cy="-65" r="3.2" fill="#d8ab8b" />
            <circle cx="24" cy="-139" r="9.5" fill="#2a1f1a" />

            {/* Joined hands */}
            <circle cx="1" cy="-73" r="3.6" fill="#d8ab8b" />
          </g>
        </g>

        {/* Falling petals */}
        {PETALS.map((p) => (
          <ellipse
            key={`${p.x}-${p.delay}`}
            className="ce-petal"
            rx="3.4"
            ry="1.9"
            fill={p.fill}
            stroke="#e0d3ae"
            strokeWidth=".4"
            style={
              {
                "--x": `${p.x}px`,
                "--drift": `${p.drift}px`,
                "--dur": `${p.dur}s`,
                "--delay": `${p.delay}s`,
              } as CSSProperties
            }
          />
        ))}

        {/* Light blooms as they step inside, then melts into the invitation */}
        <circle className="ce-bloom" cx="200" cy="430" r="60" fill="url(#ce-bloom)" />
        <rect className="ce-flash" x="-3000" y="-3000" width="6400" height="6400" fill="#fcfbf5" />
      </svg>

      {/* Same botanical corners as the opening screen */}
      <div
        className="botanical-sway pointer-events-none absolute -bottom-12 -left-18 h-55 w-60 opacity-70 sm:-bottom-9 sm:-left-8 sm:h-80 sm:w-80"
        aria-hidden="true"
      >
        <WeddingFlorals className="flower-shadow h-full w-full" />
      </div>
      <div
        className="botanical-sway botanical-sway-late pointer-events-none absolute -right-20 -top-15 h-53 w-59 opacity-70 sm:-right-8 sm:-top-10 sm:h-80 sm:w-80"
        aria-hidden="true"
      >
        <WeddingFlorals className="flower-shadow h-full w-full rotate-180" />
      </div>

      <div className="ce-caption pointer-events-none absolute inset-x-0 top-[7svh] z-10 px-6 text-center [@media(max-height:480px)]:hidden">
        <p className="kicker text-gold-deep">
          {wedding.ceremony.venue} <span aria-hidden="true">·</span> {wedding.ceremony.time}
        </p>
        <p className="display-serif mt-2 text-[clamp(1.35rem,4vw,1.9rem)] italic text-sage-dark">
          Together, by God&apos;s grace
        </p>
      </div>

      <button
        ref={skipRef}
        type="button"
        onClick={onComplete}
        className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-20 inline-flex min-h-10 items-center gap-1.5 rounded-full border border-gold/30 bg-white/80 px-4 text-[10px] font-semibold uppercase tracking-[.16em] text-sage-dark shadow-[0_6px_18px_rgba(54,82,62,.1)] backdrop-blur transition-colors hover:bg-sage-light sm:right-7 sm:top-7"
      >
        Skip <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </motion.div>
  );
}
