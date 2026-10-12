import assert from "node:assert/strict";
import test from "node:test";
import { asExcelText, validateRsvp } from "../lib/rsvp.ts";
import { checkRateLimit } from "../lib/rate-limit.ts";

const base = {
  name: "A Guest",
  phone: "+94 77 123 4567",
  attending: "Yes",
  guests: 2,
  message: "With prayers and blessings",
};

test("accepts a normal Yes RSVP", () => {
  const response = validateRsvp(base);
  assert.equal(response.success, true);
  if (response.success) {
    assert.equal(response.data.guests, 2);
    assert.equal(response.data.attending, "Yes");
  }
});

test("accepts No RSVPs with zero guests", () => {
  const response = validateRsvp({ ...base, attending: "No", guests: 0 });
  assert.equal(response.success, true);
  if (response.success) assert.equal(response.data.guests, 0);
});

test("rejects missing attendance, invalid guest counts and bad phone", () => {
  const response = validateRsvp({ ...base, name: "X", attending: "", guests: 6, phone: "not a phone" });
  assert.equal(response.success, false);
  if (!response.success) {
    assert.ok(response.errors.name);
    assert.ok(response.errors.attending);
    assert.ok(response.errors.phone);
  }
  const invalidGuests = validateRsvp({ ...base, guests: 6 });
  assert.equal(invalidGuests.success, false);
  if (!invalidGuests.success) assert.ok(invalidGuests.errors.guests);
});

test("escapes Excel formulas so RSVP inputs are stored as text", () => {
  assert.equal(asExcelText("=HYPERLINK(\"bad\")"), "'=HYPERLINK(\"bad\")");
  assert.equal(asExcelText("+94771234567"), "'+94771234567");
  assert.equal(asExcelText("Congratulations!"), "Congratulations!");
});

test("limits requests to five per fifteen-minute window per key", () => {
  const key = "test-unique-wedding-guest";
  for (let i = 0; i < 5; i += 1) assert.equal(checkRateLimit(key, 1000).allowed, true);
  assert.equal(checkRateLimit(key, 1000).allowed, false);
  assert.equal(checkRateLimit(key, 1000 + 15 * 60 * 1000).allowed, true);
});
