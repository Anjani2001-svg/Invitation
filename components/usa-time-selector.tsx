import { Globe2 } from "lucide-react";
import { US_TIME_ZONES, type UsTimeZone } from "@/lib/us-time";

/** Keep the fixed Sri Lanka event times; US guests can preview their own region. */
export function UsaTimeSelector({
  value,
  onChange,
}: {
  value: UsTimeZone;
  onChange: (zone: UsTimeZone) => void;
}) {
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-sage/25 bg-white/90 p-5 shadow-[0_12px_32px_rgba(57,79,57,.045)] sm:p-7 lg:p-8">
      <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold/80 via-sage to-sage-light" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-9">
        <div className="flex items-start gap-3.5 lg:max-w-xs">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage/25 bg-sage-light text-sage-dark">
            <Globe2 className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div>
            <p className="kicker text-gold">For our guests in the USA</p>
            <h3 className="display-serif mt-1.5 text-[1.8rem] leading-none text-charcoal sm:text-[2rem]">Your local time</h3>
            <p className="mt-2 text-xs leading-5 text-muted">Select your time zone to see both wedding events in US time.</p>
          </div>
        </div>
        <div className="min-w-0 flex-1 lg:max-w-[610px]">
          <div role="group" aria-label="Choose a United States time zone" className="grid grid-cols-2 gap-2 rounded-xl bg-sage-light/70 p-1.5 sm:grid-cols-4">
            {US_TIME_ZONES.map((zone) => (
              <button
                key={zone.id}
                type="button"
                aria-pressed={value === zone.id}
                onClick={() => onChange(zone.id)}
                className={`flex min-h-12 min-w-0 flex-col items-center justify-center rounded-lg border px-2 py-2 text-center transition-all duration-200 motion-reduce:transition-none ${value === zone.id
                  ? "border-sage/35 bg-sage-dark text-white shadow-[0_4px_15px_rgba(50,76,53,.12)]"
                  : "border-transparent bg-transparent text-sage-dark hover:border-sage/20 hover:bg-white/75"
                }`}
              >
                <span className="text-[11px] font-semibold tracking-wide">{zone.label}</span>
                <span className={`mt-0.5 text-[10px] ${value === zone.id ? "text-white/80" : "text-muted"}`}>{zone.example}</span>
              </button>
            ))}
          </div>
          <p className="mt-2.5 text-[11px] leading-5 text-muted">Times account for US daylight saving on 22 May 2027. Calendar events adjust to your device&apos;s local time.</p>
        </div>
      </div>
    </div>
  );
}
