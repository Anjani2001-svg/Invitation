'use client';

import { CalendarPlus2, Download, ExternalLink } from 'lucide-react';
import { getWeddingCalendarEvent, type WeddingCalendarKind } from '@/lib/calendar';
import { googleCalendarUrl, weddingIcs } from '@/lib/calendar-core';

/** Guests choose whether to add the date; no account credentials are requested. */
export function CalendarActions({ kind }: { kind: WeddingCalendarKind }) {
  const event = getWeddingCalendarEvent(kind);
  const googleUrl = googleCalendarUrl(event);

  function downloadCalendarFile() {
    const icsFile = new Blob([weddingIcs([event])], {
      type: 'text/calendar;charset=utf-8',
    });
    const url = URL.createObjectURL(icsFile);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wedding-${kind}-reminder.ics`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="mt-auto border-t border-line pt-7">
      <p className="text-xs font-semibold uppercase tracking-[.13em] text-sage-dark">
        Save this moment to your calendar
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sage-dark px-5 py-3 text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-charcoal"
        >
          <CalendarPlus2 className="h-4 w-4" aria-hidden="true" />
          Google Calendar
          <ExternalLink className="h-3 w-3 opacity-75" aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={downloadCalendarFile}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sage/50 bg-white px-5 py-3 text-[11px] font-semibold tracking-wide text-sage-dark transition-colors hover:bg-sage-light"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Apple / Outlook (.ics)
        </button>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-muted">
        The calendar file requests a reminder one day before. For Google Calendar,
        select a reminder when saving the event.
      </p>
    </div>
  );
}
