"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CalendarPlus2, Check, CheckCircle2, LoaderCircle } from "lucide-react";
import { validateRsvp, type Attendance, type RsvpErrors } from "@/lib/rsvp";
import { wedding } from "@/config/wedding";

type Status = "idle" | "submitting" | "success";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState<Attendance | "">("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<RsvpErrors>({});
  const [serverError, setServerError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [submittedAttendance, setSubmittedAttendance] = useState<Attendance>("Yes");

  function clearField(field: keyof RsvpErrors) {
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setServerError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setServerError("");
    setErrors({});

    const payload = { name, phone, attending, guests: attending === "Yes" ? guests : 0, message, website };
    const validation = validateRsvp(payload);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });
      const result: { ok?: boolean; error?: string; fields?: RsvpErrors } = await response.json();
      if (!response.ok || !result.ok) {
        setServerError(result.error || "We couldn't send your response. Please try again.");
        if (result.fields) setErrors(result.fields);
        setStatus("idle");
        return;
      }
      setSubmittedAttendance(validation.data.attending);
      setStatus("success");
    } catch {
      setServerError("We couldn't connect. Please check your internet and try again.");
      setStatus("idle");
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setAttending("");
    setGuests(1);
    setMessage("");
    setWebsite("");
    setErrors({});
    setServerError("");
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center px-5 py-16 text-center" role="status" aria-live="polite">
        <span className="flex h-18 w-18 items-center justify-center rounded-full bg-sage-light text-sage-dark">
          <CheckCircle2 className="h-9 w-9" strokeWidth={1.3} aria-hidden="true" />
        </span>
        <p className="kicker mt-9 text-sage-dark">Response received</p>
        <h3 className="display-serif mt-4 max-w-lg text-5xl leading-none sm:text-6xl">
          {submittedAttendance === "Yes" ? "Thank you, from our hearts" : "Thank you for letting us know"}
        </h3>
        <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
          {submittedAttendance === "Yes"
            ? "Thank you! We can't wait to celebrate with you. See you on our special day!"
            : "We'll miss celebrating with you, but we're grateful for your love and prayers."}
        </p>
        {submittedAttendance === "Yes" ? (
          <a
            href="#events"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage-dark px-6 text-[11px] font-semibold uppercase tracking-[.1em] text-white hover:bg-charcoal"
          >
            <CalendarPlus2 className="h-4 w-4" aria-hidden="true" />
            Save the wedding date to your calendar
          </a>
        ) : null}
        <button type="button" onClick={reset} className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-sage-dark underline underline-offset-5">
          Send another response
        </button>
      </div>
    );
  }

  const loading = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={loading} className="grid gap-6 sm:gap-7">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor="rsvp-name" className="mb-2.5 block text-xs font-semibold tracking-wide text-charcoal">
            Full name <span className="text-gold" aria-label="required">*</span>
          </label>
          <input
            id="rsvp-name"
            className="input-field"
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your full name"
            value={name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(e) => { setName(e.target.value); clearField("name"); }}
            disabled={loading}
          />
          {errors.name ? <p id="name-error" className="mt-2 text-xs text-red-700">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="rsvp-phone" className="mb-2.5 block text-xs font-semibold tracking-wide text-charcoal">Phone number <span className="font-normal text-muted">(optional)</span></label>
          <input
            id="rsvp-phone"
            className="input-field"
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="+94 ..."
            value={phone}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={(e) => { setPhone(e.target.value); clearField("phone"); }}
            disabled={loading}
          />
          {errors.phone ? <p id="phone-error" className="mt-2 text-xs text-red-700">{errors.phone}</p> : null}
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-xs font-semibold tracking-wide text-charcoal">Will you be joining us? <span className="text-gold">*</span></legend>
        <div className="grid grid-cols-2 gap-3">
          {(["Yes", "No"] as const).map((option) => (
            <label
              key={option}
              className={`flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-sage-dark focus-within:ring-offset-2 ${attending === option ? "border-sage-dark bg-sage-dark text-white" : "border-line bg-white text-charcoal hover:border-sage"}`}
            >
              <input
                className="sr-only"
                type="radio"
                name="attending"
                value={option}
                checked={attending === option}
                onChange={() => { setAttending(option); clearField("attending"); }}
                disabled={loading}
                required
              />
              {attending === option ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
              {option === "Yes" ? "Joyfully accepts" : "Regretfully declines"}
            </label>
          ))}
        </div>
        {errors.attending ? <p className="mt-2 text-xs text-red-700" role="alert">{errors.attending}</p> : null}
      </fieldset>

      {attending === "Yes" ? (
        <div>
          <label htmlFor="rsvp-guests" className="mb-2.5 block text-xs font-semibold tracking-wide text-charcoal">Number of guests <span className="text-gold">*</span></label>
          <select
            id="rsvp-guests"
            className="input-field cursor-pointer appearance-auto"
            name="guests"
            value={guests}
            onChange={(e) => { setGuests(Number(e.target.value)); clearField("guests"); }}
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? "guests-error" : undefined}
            disabled={loading}
          >
            {[1, 2, 3, 4, 5].map((count) => (
              <option value={count} key={count}>{count} {count === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
          {errors.guests ? <p id="guests-error" className="mt-2 text-xs text-red-700">{errors.guests}</p> : null}
        </div>
      ) : null}

      <div>
        <label htmlFor="rsvp-message" className="mb-2.5 block text-xs font-semibold tracking-wide text-charcoal">A note to the couple <span className="font-normal text-muted">(optional)</span></label>
        <textarea
          id="rsvp-message"
          className="input-field min-h-32 resize-y"
          name="message"
          rows={4}
          maxLength={500}
          placeholder="Your wishes, blessings or a little message..."
          value={message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(e) => { setMessage(e.target.value); clearField("message"); }}
          disabled={loading}
        />
        <p className="mt-2 text-right text-[11px] text-muted">{message.length}/500</p>
        {errors.message ? <p id="message-error" className="text-xs text-red-700">{errors.message}</p> : null}
      </div>

      {/* Invisible to real guests but commonly filled by bots. */}
      <div className="absolute -left-[10000px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="rsvp-website">Website</label>
        <input id="rsvp-website" type="text" name="website" autoComplete="off" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {serverError ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800" role="alert">{serverError}</p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-sage-dark px-8 text-xs font-semibold uppercase tracking-[.19em] text-white transition-colors hover:bg-charcoal disabled:cursor-wait disabled:opacity-70"
      >
        {loading ? <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending your RSVP...</> : <>Send my RSVP <ArrowRight className="h-4 w-4" aria-hidden="true" /></>}
      </button>
      <p className="text-center text-xs leading-5 text-muted">{wedding.rsvp.note}</p>
    </form>
  );
}
