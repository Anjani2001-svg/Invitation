import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { wedding } from "@/config/wedding";
import { CalendarActions } from "@/components/calendar-actions";
import type { WeddingCalendarKind } from "@/lib/calendar";

type EventData = {
  title: string;
  label: string;
  venue: string;
  address: string;
  time: string;
  note: string;
  directionsUrl?: string;
};

export function EventCard({
  number,
  icon,
  event,
  eventKind,
}: {
  number: string;
  icon: ReactNode;
  event: EventData;
  eventKind: WeddingCalendarKind;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/85 px-6 pb-9 pt-10 shadow-[0_8px_24px_rgba(40,59,43,.035)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(40,59,43,.09)] motion-reduce:transform-none sm:px-11 sm:pb-12 sm:pt-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sage-light via-sage/75 to-sage-light" aria-hidden="true" />
      <span className="absolute right-7 top-8 display-serif text-3xl text-sage/30 sm:right-10">{number}</span>
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sage/25 bg-sage-light/70 text-sage-dark">
        {icon}
      </div>
      <p className="kicker mt-9 text-gold">{event.label}</p>
      <h3 className="display-serif mt-3 text-[2.75rem] leading-[.98] text-charcoal sm:text-5xl">{event.title}</h3>
      <div className="my-8 h-px w-full bg-line" />
      <div className="space-y-5 text-sm leading-6">
        <div className="flex items-start gap-4">
          <Clock3 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-sage-dark" strokeWidth={1.5} aria-hidden="true" />
          <div><p className="font-semibold text-charcoal">{wedding.date.display}</p><p className="mt-1 font-semibold text-sage-dark">{event.time} <span className="font-normal text-muted">(Sri Lanka time)</span></p></div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="mt-0.5 h-[17px] w-[17px] shrink-0 text-sage-dark" strokeWidth={1.5} aria-hidden="true" />
          <div><p className="font-semibold text-charcoal">{event.venue}</p><p className="mt-1 text-muted">{event.address}</p></div>
        </div>
      </div>
      <p className="mt-8 text-sm italic leading-7 text-muted">{event.note}</p>
      {event.directionsUrl ? (
        <a
          className="mt-6 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-wider text-sage-dark underline-offset-4 hover:underline"
          href={event.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : null}
      <CalendarActions kind={eventKind} />
    </article>
  );
}
