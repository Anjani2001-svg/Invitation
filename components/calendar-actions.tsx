'use client';

import { CalendarPlus2, Download } from 'lucide-react';
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
    <div className="calendar-actions-container mt-auto border-t border-line pt-7">
      <p className="text-xs font-semibold uppercase tracking-[.13em] text-rose-dark">
        Save this moment to your calendar
      </p>
      <div className="calendar-actions-grid mt-4 grid grid-cols-1 items-stretch gap-2">
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-rose px-3 py-3 text-center text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-rose-dark"
        >
          <CalendarPlus2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Google Calendar</span>
        </a>
        <button
          type="button"
          onClick={downloadCalendarFile}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-rose/30 bg-white px-3 py-3 text-center text-[11px] font-semibold tracking-wide text-rose-dark transition-colors hover:bg-blush"
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Apple / Outlook</span>
        </button>
      </div>
      <p className="mt-3 text-[11px] leading-5 text-muted">
      
        For Google Calendar, select a reminder when saving the event.
      </p>
    </div>
  );
}
