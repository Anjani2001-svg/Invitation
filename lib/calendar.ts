import { coupleNames, wedding } from '@/config/wedding';
import {
  addMinutesIso,
  sameDayStartIso,
  type WeddingCalendarKind,
  type WeddingCalendarEvent,
} from '@/lib/calendar-core';

export type { WeddingCalendarKind } from '@/lib/calendar-core';

// Change these EXAMPLE durations if your Mass or reception is a different length.
// No changes are needed in the wedding details configuration for this feature.
const CEREMONY_DURATION_MINUTES = 120;
const RECEPTION_DURATION_MINUTES = 240;
const CALENDAR_TIMEZONE = 'Asia/Colombo';

/**
 * Calendar dates are derived from the existing invitation date and event times.
 * There are NO hard-coded guest dates in this file: change config/wedding.ts.
 */
export function getWeddingCalendarEvent(kind: WeddingCalendarKind): WeddingCalendarEvent {
  const isCeremony = kind === 'ceremony';
  const details = isCeremony ? wedding.ceremony : wedding.reception;
  const startIso = isCeremony
    ? wedding.date.iso
    : sameDayStartIso(wedding.date.iso, wedding.reception.time);
  const duration = isCeremony
    ? CEREMONY_DURATION_MINUTES
    : RECEPTION_DURATION_MINUTES;

  return {
    id: kind,
    title: `${isCeremony ? 'Holy Matrimony' : 'Wedding Reception'} - ${coupleNames}`,
    startIso,
    endIso: addMinutesIso(startIso, duration),
    location: `${details.venue}, ${details.address}`,
    description: [
      details.note,
      `Celebrating ${coupleNames}.`,
      `Wedding invitation: ${wedding.siteUrl}`,
      'Please check that the date, time and venue match your invitation.',
    ].join('\n'),
    timezone: CALENDAR_TIMEZONE,
  };
}
