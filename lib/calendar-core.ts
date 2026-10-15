/** Pure calendar helpers; no credentials or access to guest calendars are needed. */
export type WeddingCalendarKind = 'ceremony' | 'reception';

export type WeddingCalendarEvent = {
  id: WeddingCalendarKind;
  title: string;
  startIso: string;
  endIso: string;
  location: string;
  description: string;
  timezone: string;
};

export function parseClockTime(value: string): { hour: number; minute: number } {
  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(value.trim());
  if (!match) throw new Error(`Invalid time format: ${value}. Use e.g. 6:00 PM.`);
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 1 || hour > 12 || minute > 59) {
    throw new Error(`Invalid time value: ${value}`);
  }
  return { hour: hour % 12 + (match[3].toUpperCase() === 'PM' ? 12 : 0), minute };
}

export function sameDayStartIso(ceremonyStartIso: string, displayTime: string): string {
  const offset = ceremonyStartIso.match(/(?:Z|[+-]\d{2}:\d{2})$/)?.[0];
  if (!offset || !/^\d{4}-\d{2}-\d{2}T/.test(ceremonyStartIso)) {
    throw new Error('Ceremony date must contain an ISO time and time zone');
  }
  const { hour, minute } = parseClockTime(displayTime);
  const hourPart = String(hour).padStart(2, '0');
  const minutePart = String(minute).padStart(2, '0');
  return `${ceremonyStartIso.slice(0, 10)}T${hourPart}:${minutePart}:00${offset}`;
}

export function addMinutesIso(startIso: string, durationMinutes: number): string {
  const start = new Date(startIso);
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(durationMinutes) || durationMinutes <= 0) {
    throw new Error('Invalid calendar date or duration');
  }
  return new Date(start.getTime() + durationMinutes * 60000).toISOString();
}

export function calendarUtcStamp(iso: string): string {
  const date = new Date(iso);
  if (!Number.isFinite(date.getTime())) throw new Error('Invalid calendar event time');
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function assertEvent(event: WeddingCalendarEvent): void {
  const start = new Date(event.startIso).getTime();
  const end = new Date(event.endIso).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    throw new Error('The calendar event must have a valid start and later end time');
  }
}

export function googleCalendarUrl(event: WeddingCalendarEvent): string {
  assertEvent(event);
  const query = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${calendarUtcStamp(event.startIso)}/${calendarUtcStamp(event.endIso)}`,
    stz: event.timezone,
    etz: event.timezone,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/r/eventedit?${query.toString()}`;
}

function escapeIcs(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
}

// RFC 5545 lines need folding at a maximum of 75 UTF-8 octets.
function foldIcsLine(line: string): string {
  const encoder = new TextEncoder();
  const lines: string[] = [];
  let segment = '';
  let length = 0;
  for (const char of line) {
    const size = encoder.encode(char).length;
    if (length + size > 75) {
      lines.push(segment);
      segment = ' ' + char;
      length = 1 + size;
    } else {
      segment += char;
      length += size;
    }
  }
  lines.push(segment);
  return lines.join('\r\n');
}

export function weddingIcs(events: WeddingCalendarEvent[]): string {
  if (events.length === 0) throw new Error('At least one calendar event is required');
  const stamp = calendarUtcStamp(new Date().toISOString());
  const raw: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//Guest Calendar Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  for (const event of events) {
    assertEvent(event);
    const dateOnly = event.startIso.slice(0, 10).replace(/-/g, '');
    raw.push(
      'BEGIN:VEVENT',
      `UID:wedding-${event.id}-${dateOnly}@guest-wedding-calendar.local`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${calendarUtcStamp(event.startIso)}`,
      `DTEND:${calendarUtcStamp(event.endIso)}`,
      `SUMMARY:${escapeIcs(event.title)}`,
      `DESCRIPTION:${escapeIcs(event.description)}`,
      `LOCATION:${escapeIcs(event.location)}`,
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      'TRIGGER:-P1D',
      `DESCRIPTION:${escapeIcs('Wedding reminder: ' + event.title)}`,
      'END:VALARM',
      'END:VEVENT',
    );
  }
  raw.push('END:VCALENDAR');
  return raw.map(foldIcsLine).join('\r\n') + '\r\n';
}
