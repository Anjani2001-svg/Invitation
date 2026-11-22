/** Wedding-date-aware US time conversion; includes daylight saving automatically. */
export const US_TIME_ZONES = [
  { id: "America/New_York", label: "Eastern", example: "New York" },
  { id: "America/Chicago", label: "Central", example: "Chicago" },
  { id: "America/Denver", label: "Mountain", example: "Denver" },
  { id: "America/Los_Angeles", label: "Pacific", example: "Los Angeles" },
] as const;

export type UsTimeZone = (typeof US_TIME_ZONES)[number]["id"];

/** Format the event instant using the selected US time zone, not the visitor's device time. */
export function getUsWeddingTime(iso: string, zone: UsTimeZone): {
  time: string;
  date: string;
} {
  const instant = new Date(iso);
  if (Number.isNaN(instant.getTime())) throw new Error("Invalid wedding event date");

  return {
    time: new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(instant),
    date: new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(instant),
  };
}
