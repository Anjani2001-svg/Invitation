/** Shared browser/server validation; the server remains authoritative. */
export type Attendance = "Yes" | "No";

export type ValidRsvp = {
  name: string;
  phone: string;
  attending: Attendance;
  guests: number;
  message: string;
};

export type RsvpErrors = Partial<Record<keyof ValidRsvp, string>>;

type ValidationResult =
  | { success: true; data: ValidRsvp }
  | { success: false; errors: RsvpErrors };

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function validateRsvp(input: unknown): ValidationResult {
  if (!isRecord(input)) {
    return { success: false, errors: { name: "Please enter your details." } };
  }

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const attending = input.attending;
  const guests = input.guests;
  const errors: RsvpErrors = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "Please enter your full name (2–100 characters).";
  }
  if (phone.length > 30 || (phone && (!/^\+?[\d\s()\-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15))) {
    errors.phone = "Please enter a valid phone number (up to 30 characters).";
  }
  if (attending !== "Yes" && attending !== "No") {
    errors.attending = "Please choose whether you can attend.";
  }
  if (attending === "Yes" && (typeof guests !== "number" || !Number.isInteger(guests) || guests < 1 || guests > 5)) {
    errors.guests = "Please select between 1 and 5 guests.";
  }
  if (message.length > 500) {
    errors.message = "Please keep your message under 500 characters.";
  }

  if (Object.keys(errors).length > 0) return { success: false, errors };

  return {
    success: true,
    data: {
      name,
      phone,
      attending: attending as Attendance,
      guests: attending === "Yes" ? (guests as number) : 0,
      message,
    },
  };
}

/** Excel treats cells beginning with =, +, -, or @ as formulas; write them as text. */
export function asExcelText(value: string): string {
  const safe = value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
  return /^[\s]*[=+\-@]/.test(safe) ? `'${safe}` : safe;
}
