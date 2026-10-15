import type { SVGProps } from "react";

export function TinyCross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M12 2v20M5 9h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Catholic wedding emblem: a gilded cross, joined rings and sage olive leaves. */
export function SacredSeal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 152 152" fill="none" aria-hidden="true" className={className}>
      <circle cx="76" cy="76" r="66" stroke="#b69861" strokeWidth="1" opacity=".68" />
      <circle cx="76" cy="76" r="60" stroke="#b69861" strokeWidth=".6" opacity=".32" strokeDasharray="1.5 5.5" />
      <path d="M76 31v47M60 47h32" stroke="#896e40" strokeWidth="2.7" strokeLinecap="round" />
      <path d="M76 24v3M76 82v3M53 47h3M96 47h3" stroke="#b69861" strokeWidth="1" strokeLinecap="round" />
      <circle cx="67" cy="100" r="13" stroke="#b69861" strokeWidth="2.2" />
      <circle cx="85" cy="100" r="13" stroke="#896e40" strokeWidth="2.2" />
      <path d="M45 111C31 98 27 77 39 57M107 111c14-13 18-34 6-54" stroke="#829d87" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="#e9f0e6" stroke="#829d87" strokeWidth="1">
        <path d="M40 66c-12-1-15-9-14-15 9 0 14 6 14 15Z" />
        <path d="M36 82c-12 0-15-7-15-14 9-1 14 5 15 14Z" />
        <path d="M42 98c-11 2-16-4-18-11 9-3 16 2 18 11Z" />
        <path d="M112 66c12-1 15-9 14-15-9 0-14 6-14 15Z" />
        <path d="M116 82c12 0 15-7 15-14-9-1-14 5-15 14Z" />
        <path d="M110 98c11 2 16-4 18-11-9-3-16 2-18 11Z" />
      </g>
      <path d="M51 119q25 15 50 0" stroke="#b69861" strokeWidth=".8" opacity=".85" />
      <circle cx="76" cy="124" r="2" fill="#b69861" />
    </svg>
  );
}

export function TinyHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M20.7 8.1c0 4.3-6.1 8.9-8.7 11-2.6-2.1-8.7-6.7-8.7-11a4.7 4.7 0 0 1 8.7-2.4 4.7 4.7 0 0 1 8.7 2.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BotanicalSprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 176 270" fill="none" aria-hidden="true" {...props}>
      <path d="M86 259C66 218 61 185 87 152c18-23 27-49 12-89" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M82 233C56 212 40 213 22 219c8 20 31 22 59 13ZM76 201c-9-25-30-38-52-35 2 24 20 36 50 36ZM87 157c-27-10-48-5-63 12 17 12 37 9 63-10ZM94 129c1-29 13-47 31-54 8 21-2 39-31 54ZM99 86c-22-13-31-29-30-50 18 4 29 20 30 50Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M87 155c21-22 43-24 59-13-10 19-29 23-59 15ZM71 208c18-24 35-30 58-24-6 21-27 30-58 25ZM100 57C101 34 113 19 129 13c8 17-2 35-29 44Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M13 221c-6-10-4-23 5-31m114-176c14-3 26 2 32 12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="95" cy="127" r="2" fill="currentColor" opacity=".65" />
      <circle cx="76" cy="200" r="2" fill="currentColor" opacity=".65" />
    </svg>
  );
}

/** Champagne-gold blossoms and sage foliage, illustrated in lightweight SVG. */
export function WeddingFlorals(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 310" fill="none" aria-hidden="true" {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 277c90-12 143-65 193-158M68 295c33-77 104-127 197-168M39 230c41-36 77-40 121-39" stroke="#789178" strokeWidth="2.6" />
        <path d="M92 225c-27-30-50-30-67-19 5 25 32 29 67 19ZM111 210c4-37 19-58 46-68 9 30-12 54-46 68ZM160 177c-5-30 9-58 29-67 13 25 0 54-29 67ZM195 150c32-30 61-31 81-20-6 27-38 36-81 20ZM74 259c-34-9-53-3-68 17 24 12 48 8 68-17ZM146 238c24-33 50-38 69-27-6 26-32 38-69 27ZM119 266c-10-30-3-49 17-62 16 21 10 45-17 62Z" fill="#a1b6a0" stroke="#66866e" strokeWidth="1.7" />
        <path d="M51 202c-20-26-34-31-48-32M241 147c18-18 30-23 45-21" stroke="#789178" strokeWidth="2" />
        <path d="M54 195c-21 0-36-11-41-26 21-5 36 3 41 26ZM223 157c7-29 21-41 41-42 2 21-12 36-41 42Z" fill="#ccdac7" stroke="#7e9e81" strokeWidth="1.5" />
        <g transform="translate(190 108)">
          <ellipse cx="-23" cy="-10" rx="31" ry="18" fill="#e8d7b3" transform="rotate(-38 -23 -10)" />
          <ellipse cx="21" cy="-9" rx="31" ry="20" fill="#e2ca9a" transform="rotate(43 21 -9)" />
          <ellipse cx="-12" cy="22" rx="31" ry="20" fill="#d9bc84" transform="rotate(32 -12 22)" />
          <ellipse cx="18" cy="20" rx="27" ry="18" fill="#f4e7cc" transform="rotate(-37 18 20)" />
          <ellipse cx="0" cy="0" rx="23" ry="23" fill="#fcf7e9" />
          <path d="M-11-2c5-14 22-14 24-1 1 9-13 16-18 6-5-9 7-15 12-7" stroke="#b69457" strokeWidth="3" />
          <circle cx="3" cy="0" r="3" fill="#977440" />
        </g>
        <g transform="translate(88 166) rotate(-17)">
          <ellipse cx="0" cy="-23" rx="19" ry="27" fill="#e3d1a6" />
          <ellipse cx="22" cy="-7" rx="20" ry="25" fill="#f2e5c8" transform="rotate(75 22 -7)" />
          <ellipse cx="15" cy="20" rx="20" ry="25" fill="#d8c08e" transform="rotate(140 15 20)" />
          <ellipse cx="-16" cy="18" rx="20" ry="25" fill="#f7eed9" transform="rotate(-140 -16 18)" />
          <ellipse cx="-23" cy="-5" rx="19" ry="25" fill="#e8d5a7" transform="rotate(-70 -23 -5)" />
          <circle r="13" fill="#fcf5e2" />
          <circle r="5" fill="#a88647" />
          <circle cx="-5" cy="-3" r="1.4" fill="#fff" /><circle cx="5" cy="2" r="1.4" fill="#fff" />
        </g>
        <g transform="translate(254 56) rotate(18)">
          <ellipse cy="-14" rx="13" ry="19" fill="#e5d5ae" />
          <ellipse cx="13" cy="7" rx="13" ry="19" fill="#f8eed9" transform="rotate(80 13 7)" />
          <ellipse cx="-13" cy="7" rx="13" ry="19" fill="#d4b57c" transform="rotate(-80 -13 7)" />
          <circle r="10" fill="#f4e5c4" /><circle r="4" fill="#977643" />
        </g>
        <g fill="#b99b5e">
          <circle cx="42" cy="155" r="4" /><circle cx="37" cy="140" r="3" /><circle cx="56" cy="143" r="3" /><circle cx="33" cy="184" r="3" />
          <circle cx="274" cy="172" r="3.5" /><circle cx="290" cy="165" r="3" /><circle cx="279" cy="190" r="3" />
        </g>
      </g>
    </svg>
  );
}

export function DividerOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-15 bg-gradient-to-r from-transparent to-gold/55" />
      <span className="h-1 w-1 rounded-full bg-sage/70" />
      <TinyCross className="h-5 w-5" />
      <span className="h-1 w-1 rounded-full bg-sage/70" />
      <span className="h-px w-15 bg-gradient-to-l from-transparent to-gold/55" />
    </div>
  );
}
