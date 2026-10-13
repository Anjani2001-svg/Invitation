"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Church,
  Heart,
  MapPin,
  Navigation,
  Pause,
  Play,
} from "lucide-react";
import { wedding, coupleNames } from "@/config/wedding";
import { Countdown } from "@/components/countdown";
import { EventCard } from "@/components/event-card";
import { BotanicalSprig, DividerOrnament, TinyCross } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";
import { SectionTitle } from "@/components/section-title";
import { UsaTimeSelector } from "@/components/usa-time-selector";
import { type UsTimeZone } from "@/lib/us-time";

const MUSIC_PREF = "wedding-music-preference";

export function WeddingExperience() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [opened, setOpened] = useState(false);
  const [musicPreferred, setMusicPreferred] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const [usZone, setUsZone] = useState<UsTimeZone>("America/New_York");
  const [activeVenue, setActiveVenue] = useState<"ceremony" | "reception">("ceremony");
  const locationDetails = activeVenue === "ceremony" ? wedding.ceremony : wedding.location;
  const isCeremonyLocation = activeVenue === "ceremony";
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      if (window.localStorage.getItem(MUSIC_PREF) === "paused") setMusicPreferred(false);
    } catch {
      // Browsers with private-storage restrictions can still play music.
    }
    if (audioRef.current) audioRef.current.volume = 0.4;
  }, []);

  useEffect(() => {
    if (opened) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = originalOverflow; };
  }, [opened]);

  function persistMusic(enabled: boolean) {
    setMusicPreferred(enabled);
    try { window.localStorage.setItem(MUSIC_PREF, enabled ? "playing" : "paused"); } catch { /* no storage */ }
  }

  function playMusic(savePreference = false) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    // Called DIRECTLY inside the user's button tap to satisfy autoplay policies.
    void audio.play().then(() => {
      setIsPlaying(true);
      setAudioFailed(false);
      if (savePreference) persistMusic(true);
    }).catch(() => {
      setIsPlaying(false);
      setAudioFailed(true);
    });
  }

  function openInvitation() {
    setOpened(true);
    if (musicPreferred) playMusic();
  }

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      persistMusic(false);
    } else {
      playMusic(true);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        preload="metadata"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-hidden="true"
      />

      <AnimatePresence>
        {!opened ? (
          <motion.div
            key="splash"
            role="dialog"
            aria-modal="true"
            aria-label="Open your wedding invitation"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -28 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.8, ease: "easeInOut" }}
            className="wedding-splash fixed inset-0 z-[100] flex min-h-[100svh] flex-col items-center justify-start overflow-y-auto bg-ivory px-5 py-8 text-center sm:px-6 sm:py-12"
          >
            <div className="intro-texture pointer-events-none absolute inset-0 opacity-35" />
            <div className="pointer-events-none absolute inset-5 rounded-[180px_180px_18px_18px] border border-gold/25 sm:inset-9" />
            <BotanicalSprig className="pointer-events-none absolute -bottom-10 -left-8 h-60 w-40 -rotate-12 text-sage/25 sm:bottom-0 sm:left-6 sm:h-78" />
            <BotanicalSprig className="pointer-events-none absolute -right-8 -top-12 h-60 w-40 rotate-170 text-sage/25 sm:right-5 sm:top-0 sm:h-78" />
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="relative z-10 my-auto flex w-full max-w-2xl flex-col items-center"
            >
              <TinyCross className="h-8 w-8 text-gold" />
              <p className="kicker mt-6 text-sage-dark sm:mt-10">The wedding invitation</p>
              <div className="mt-6 w-full sm:mt-7">
                <h1 className="display-serif text-[clamp(3rem,9vw,6.4rem)] leading-[.83] tracking-[-.055em]">
                  <span className="block">{wedding.bride}</span>
                  <span className="my-2 block text-[.65em] italic text-gold sm:my-4">&</span>
                  <span className="block">{wedding.groom}</span>
                </h1>
              </div>
              <div className="mt-7 flex items-center gap-5 text-gold sm:mt-10">
                <span className="h-px w-9 bg-gold/60" />
                <span className="text-xs tracking-[.22em] text-sage-dark">{wedding.date.short}</span>
                <span className="h-px w-9 bg-gold/60" />
              </div>
              <p className="mt-4 max-w-sm text-[11px] leading-relaxed tracking-wide text-sage-dark sm:text-xs">
                Nuptial Mass at {wedding.ceremony.time} <span className="mx-1.5 text-gold" aria-hidden="true">&bull;</span> Reception at {wedding.reception.time} <span className="text-muted">(Sri Lanka)</span>
              </p>
              <button
                type="button"
                onClick={openInvitation}
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-sage-dark px-8 text-xs font-semibold uppercase tracking-[.17em] text-white shadow-[0_12px_30px_rgba(65,83,65,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal hover:shadow-[0_18px_36px_rgba(65,83,65,.23)] active:scale-[.98] motion-reduce:transform-none sm:mt-11"
              >
                Open invitation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-5 text-[11px] tracking-wide text-muted">Tap to enter · Gentle background music</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {opened ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 }}
          type="button"
          onClick={toggleMusic}
          className="music-toggle fixed bottom-5 right-5 z-50 flex h-11 items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 text-sage-dark shadow-[0_10px_28px_rgba(44,55,42,.12)] backdrop-blur-md transition-colors hover:bg-sage-light sm:bottom-7 sm:right-7 sm:h-12 sm:px-4"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          aria-pressed={isPlaying}
          title={audioFailed ? "Tap to try playing music again" : undefined}
        >
          {isPlaying ? <Pause className="h-4 w-4 fill-current" aria-hidden="true" /> : <Play className="h-4 w-4 fill-current" aria-hidden="true" />}
          <span className="text-[10px] font-semibold uppercase tracking-[.13em]">{isPlaying ? "Music on" : "Music off"}</span>
        </motion.button>
      ) : null}

      <div id="top" inert={!opened} className="overflow-x-clip">
        <header className="sticky top-0 z-30 border-b border-line/65 bg-ivory/85 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-17 sm:px-10">
            <a href="#top" aria-label="Back to the beginning" className="flex items-center gap-3">
              <span className="display-serif text-2xl leading-none tracking-tight text-sage-dark">
                {wedding.bride.charAt(0)} <span className="italic text-gold">&</span> {wedding.groom.charAt(0)}
              </span>
              <TinyCross className="h-4 w-4 text-gold" />
            </a>
            <nav aria-label="Wedding sections" className="hidden items-center gap-9 md:flex">
              <a href="#story" className="text-[11px] font-medium uppercase tracking-[.14em] text-muted transition-colors hover:text-sage-dark">Our story</a>
              <a href="#events" className="text-[11px] font-medium uppercase tracking-[.14em] text-muted transition-colors hover:text-sage-dark">The day</a>
              <a href="#location" className="text-[11px] font-medium uppercase tracking-[.14em] text-muted transition-colors hover:text-sage-dark">Location</a>
            </nav>
            <a href="#rsvp" className="rounded-full border border-sage/60 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[.16em] text-sage-dark transition-colors hover:bg-sage-light">RSVP <span className="ml-1">↗</span></a>
          </div>
          <nav aria-label="Wedding sections on mobile" className="flex min-h-11 items-center justify-center gap-7 border-t border-line/60 px-4 md:hidden">
            <a href="#story" className="text-[10px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:text-charcoal">Our story</a>
            <a href="#events" className="text-[10px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:text-charcoal">The day</a>
            <a href="#location" className="text-[10px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:text-charcoal">Location</a>
          </nav>
        </header>

        <main>
          <section id="home" className="relative isolate overflow-hidden px-5 pb-20 pt-13 sm:px-10 sm:pt-16 lg:pb-31 lg:pt-21">
            <div className="hero-halo pointer-events-none absolute -right-[10%] top-[-5%] -z-10 h-[750px] w-[800px]" />
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-17">
              <Reveal className="order-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center gap-4 text-sage-dark lg:justify-start">
                  <span className="h-px w-8 bg-gold" />
                  <p className="kicker">United in love and faith</p>
                </div>
                <h1 className="display-serif mt-8 text-[clamp(3rem,9vw,6.8rem)] leading-[.83] tracking-[-.065em]">
                  <span className="block">{wedding.bride}</span>
                  <span className="my-3 block text-[.68em] italic text-gold">&</span>
                  <span className="block">{wedding.groom}</span>
                </h1>
                <div className="mt-9 flex items-center justify-center gap-4 lg:justify-start">
                  <TinyCross className="h-5 w-5 text-gold" />
                  <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-sage-dark">{wedding.date.display}</p>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start" aria-label="Wedding schedule">
                  <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-sage/30 bg-white/80 px-4 py-2 text-[11px] text-muted shadow-[0_4px_16px_rgba(65,83,65,.04)]">
                    <TinyCross className="h-3.5 w-3.5 text-gold" /> Holy Mass <strong className="font-semibold text-sage-dark">{wedding.ceremony.time}</strong>
                  </span>
                  <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-sage/30 bg-white/80 px-4 py-2 text-[11px] text-muted shadow-[0_4px_16px_rgba(65,83,65,.04)]">
                    <Heart className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" /> Reception <strong className="font-semibold text-sage-dark">{wedding.reception.time}</strong>
                  </span>
                </div>
                <p className="display-serif mt-7 text-[1.85rem] italic leading-snug text-charcoal/85 sm:mt-9 sm:text-[2.05rem]">
                  “{wedding.verse.text}”
                </p>
                <p className="mt-2 text-xs uppercase tracking-[.17em] text-gold">{wedding.verse.reference}</p>
                <a href="#events" className="mt-7 inline-flex items-center gap-2 rounded-full border border-sage/25 bg-white/70 px-4 py-2.5 text-[11px] font-medium text-sage-dark transition-colors hover:bg-sage-light">
                  Joining from the USA? Check your time zone <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a href="#story" className="mt-12 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.14em] text-sage-dark transition-colors hover:text-charcoal">
                  Discover our invitation <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </Reveal>

              <Reveal delay={0.15} className="order-2 relative mx-auto w-full max-w-[530px] py-4 lg:ml-auto">
                <div className="photo-arch absolute -inset-0 border border-gold/50" aria-hidden="true" />
                <div className="photo-arch relative mx-3 mt-3 aspect-[4/5] overflow-hidden bg-sage-light shadow-[0_25px_70px_rgba(54,73,55,.13)] sm:mx-5 sm:mt-5">
                  <Image
                    src="/couple.jpg"
                    alt={`Portrait of ${coupleNames}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 520px, 44vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sage-dark/13 via-transparent to-transparent" />
                </div>
                <BotanicalSprig className="flower-shadow pointer-events-none absolute -bottom-18 -left-12 h-62 w-41 -rotate-15 text-sage/65 sm:-left-16 sm:h-80 sm:w-54" />
                <div className="pointer-events-none absolute -right-5 bottom-7 flex h-22 w-22 items-center justify-center rounded-full border border-gold/50 bg-ivory/95 text-center sm:h-26 sm:w-26">
                  <div className="display-serif text-xl italic leading-tight text-sage-dark sm:text-2xl">forever<br />begins</div>
                </div>
              </Reveal>
            </div>
          </section>

          <Countdown />

          <section id="story" className="relative overflow-hidden px-6 py-26 sm:py-35">
            <BotanicalSprig className="pointer-events-none absolute -right-18 top-11 h-58 w-40 rotate-170 text-sage/13" />
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTitle eyebrow={wedding.invitation.eyebrow} title={wedding.invitation.heading} />
              <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[2.15] text-muted sm:text-base">
                {wedding.invitation.body}
              </p>
              <p className="display-serif mt-7 text-[1.65rem] italic leading-relaxed text-sage-dark">{wedding.invitation.signoff}</p>
            </Reveal>
          </section>

          <section id="events" className="bg-paper px-6 py-24 sm:px-10 sm:py-32">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <SectionTitle eyebrow="Save the date" title="The wedding day" description="One sacred promise, followed by an evening of joy. We hope you'll join us for both beautiful moments." />
              </Reveal>
              <UsaTimeSelector value={usZone} onChange={setUsZone} />
              <div className="mt-7 grid gap-6 md:grid-cols-2 md:gap-7">
                <Reveal className="h-full" delay={0.05}>
                  <EventCard number="01" eventKind="ceremony" usZone={usZone} icon={<Church className="h-6 w-6" strokeWidth={1.35} aria-hidden="true" />} event={wedding.ceremony} />
                </Reveal>
                <Reveal className="h-full" delay={0.17}>
                  <EventCard number="02" eventKind="reception" usZone={usZone} icon={<Heart className="h-6 w-6" strokeWidth={1.35} aria-hidden="true" />} event={wedding.reception} />
                </Reveal>
              </div>
              {wedding.dressCode ? (
                <Reveal className="mt-9 flex flex-wrap items-center justify-center gap-3 text-center text-xs text-muted">
                  <span className="font-semibold uppercase tracking-[.16em] text-sage-dark">Dress code</span>
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  <span>{wedding.dressCode}</span>
                </Reveal>
              ) : null}
            </div>
          </section>

          <section id="location" className="px-6 py-26 sm:px-10 sm:py-34">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <SectionTitle eyebrow="Where to find us" title={wedding.location.title} />
              </Reveal>
              <div className="mt-12 rounded-2xl border border-line bg-white p-2 shadow-[0_14px_50px_rgba(55,75,57,.05)] sm:p-3">
                <div role="group" aria-label="Choose a wedding venue to view on the map" className="grid grid-cols-2 gap-2 p-1 sm:gap-3 sm:p-2">
                  <button
                    type="button"
                    aria-pressed={isCeremonyLocation}
                    onClick={() => setActiveVenue("ceremony")}
                    className={`flex min-h-14 items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-colors sm:gap-3 sm:text-sm ${isCeremonyLocation ? "border-sage-dark bg-sage-dark text-white" : "border-line bg-ivory text-sage-dark hover:bg-sage-light"}`}
                  >
                    <Church className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span>Nuptial Mass <span className="hidden sm:inline">· 4:00 PM</span></span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={!isCeremonyLocation}
                    onClick={() => setActiveVenue("reception")}
                    className={`flex min-h-14 items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-colors sm:gap-3 sm:text-sm ${!isCeremonyLocation ? "border-sage-dark bg-sage-dark text-white" : "border-line bg-ivory text-sage-dark hover:bg-sage-light"}`}
                  >
                    <Heart className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span>Reception <span className="hidden sm:inline">· 7:00 PM</span></span>
                  </button>
                </div>
                <div className="grid overflow-hidden rounded-xl bg-white lg:grid-cols-[.82fr_1.18fr]">
                  <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
                    <span className="flex h-13 w-13 items-center justify-center rounded-full bg-sage-light text-sage-dark"><MapPin className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" /></span>
                    <p className="kicker mt-7 text-gold">{isCeremonyLocation ? "The sacred ceremony" : "Our reception venue"}</p>
                    <h3 className="display-serif mt-3 text-[clamp(2.75rem,6vw,4rem)] leading-[.98]">{locationDetails.venue}</h3>
                    <p className="mt-6 text-sm leading-7 text-muted">{locationDetails.address}</p>
                    <p className="mt-1 text-sm leading-7 text-sage-dark">{wedding.date.display} · {isCeremonyLocation ? wedding.ceremony.time : wedding.reception.time} <span className="text-muted">(Sri Lanka)</span></p>
                    <a
                      href={locationDetails.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-sage-dark px-6 text-[11px] font-semibold uppercase tracking-[.13em] text-white transition-colors hover:bg-charcoal"
                    >
                      <Navigation className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                      Open Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="relative min-h-[310px] overflow-hidden bg-sage-light sm:min-h-[390px]">
                    <iframe
                      key={activeVenue}
                      title={`Google Maps: ${locationDetails.venue}`}
                      src={locationDetails.mapEmbedUrl}
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="rsvp" className="relative overflow-hidden bg-sage-light/50 px-6 py-24 sm:py-34">
            <BotanicalSprig className="pointer-events-none absolute -left-14 bottom-0 h-80 w-51 text-sage/15" />
            <div className="relative mx-auto max-w-[740px]">
              <Reveal>
                <SectionTitle eyebrow="The pleasure of your company" title="Kindly RSVP" description={wedding.rsvp.deadline} />
              </Reveal>
              <Reveal delay={0.1} className="mt-11 rounded-2xl border border-line bg-white p-5 shadow-[0_22px_75px_rgba(44,63,45,.07)] sm:p-11 md:p-13">
                <RsvpForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="relative overflow-hidden bg-ivory px-6 pb-26 pt-24 text-center sm:pt-29">
          <TinyCross className="mx-auto h-6 w-6 text-gold" />
          <p className="kicker mt-6 text-sage-dark">With all our love</p>
          <p className="display-serif mt-4 text-[clamp(2.5rem,9vw,3.75rem)] leading-tight">{coupleNames}</p>
          <DividerOrnament className="mt-6" />
          <p className="mt-7 text-xs tracking-[.12em] text-sage-dark">{wedding.hashtag}</p>
          <p className="mt-9 text-[10px] uppercase tracking-[.16em] text-muted">Made with love, faith and gratitude</p>
        </footer>
      </div>
    </>
  );
}
