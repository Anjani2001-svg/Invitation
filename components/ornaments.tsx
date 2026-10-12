import type { SVGProps } from "react";

export function TinyCross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M12 2v20M5 9h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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

export function DividerOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-14 bg-line" />
      <TinyCross className="h-5 w-5" />
      <span className="h-px w-14 bg-line" />
    </div>
  );
}
