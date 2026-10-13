import { ArrowUpRight, Clock3, Globe2, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { wedding } from "@/config/wedding";
import { CalendarActions } from "@/components/calendar-actions";
import { WeddingFlorals } from "@/components/ornaments";
import { getWeddingCalendarEvent, type WeddingCalendarKind } from "@/lib/calendar";
import { getUsWeddingTime, US_TIME_ZONES, type UsTimeZone } from "@/lib/us-time";

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
  usZone,
}: {
  number: string;
  icon: ReactNode;
  event: EventData;
  eventKind: WeddingCalendarKind;
  usZone: UsTimeZone;
}) {
  const usTime = getUsWeddingTime(getWeddingCalendarEvent(eventKind).startIso, usZone);
  const usZoneLabel = US_TIME_ZONES.find((zone) => zone.id === usZone)?.label;
  const directionsUrl = event.directionsUrl || (eventKind === "reception" ? wedding.location.directionsUrl : "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-rose/15 bg-white px-6 pb-9 pt-10 shadow-[0_11px_35px_rgba(124,67,77,.055)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(124,67,77,.13)] motion-reduce:transform-none sm:px-11 sm:pb-12 sm:pt-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-rose/60 via-gold/80 to-sage/65" aria-hidden="true" />
      <WeddingFlorals className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 opacity-[.09]" />
      <span className="absolute right-7 top-8 display-serif text-3xl text-rose/30 sm:right-10">{number}</span>
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-rose/20 bg-gradient-to-br from-blush to-peach text-rose-dark">
        {icon}
      </div>
      <p className="kicker mt-9 text-rose-dark">{event.label}</p>
      <h3 className="display-serif mt-3 text-[2.75rem] leading-[.98] text-charcoal sm:text-5xl">{event.title}</h3>
      <div className="my-8 h-px w-full bg-gradient-to-r from-rose/20 via-gold/35 to-transparent" />
      <div className="space-y-5 text-sm leading-6">
        <div className="flex items-start gap-4">
          <Clock3 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-sage-dark" strokeWidth={1.5} aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-charcoal">{wedding.date.display}</p>
            <p className="mt-1 font-semibold text-sage-dark">{event.time} <span className="font-normal text-muted">(Sri Lanka time)</span></p>
            <div className="mt-3 flex flex-wrap items-start gap-2 rounded-xl border border-sage/15 bg-sage-light/55 px-3.5 py-3">
              <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-sage-dark">USA · {usZoneLabel}</p>
                <p className="mt-1 font-semibold text-charcoal">{usTime.time} <span className="font-normal text-muted">· {usTime.date}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="mt-0.5 h-[17px] w-[17px] shrink-0 text-sage-dark" strokeWidth={1.5} aria-hidden="true" />
          <div><p className="font-semibold text-charcoal">{event.venue}</p><p className="mt-1 text-muted">{event.address}</p></div>
        </div>
      </div>
      <p className="mt-8 text-sm italic leading-7 text-muted">{event.note}</p>
      {directionsUrl ? (
        <a
          className="mt-6 inline-flex min-h-10 items-center gap-2 self-start text-xs font-semibold uppercase tracking-wider text-sage-dark underline-offset-4 hover:underline"
          href={directionsUrl}
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
