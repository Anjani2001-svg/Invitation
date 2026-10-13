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
  CalendarDays,
  MapPin,
  Navigation,
  Pause,
  Play,
} from "lucide-react";
import { wedding, coupleNames } from "@/config/wedding";
import { ChurchEntrance } from "@/components/church-entrance";
import { Countdown } from "@/components/countdown";
import { EventCard } from "@/components/event-card";
import { BotanicalSprig, DividerOrnament, SacredSeal, TinyCross, TinyHeart, WeddingFlorals } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";
import { SectionTitle } from "@/components/section-title";
import { UsaTimeSelector } from "@/components/usa-time-selector";
import { type UsTimeZone } from "@/lib/us-time";

const MUSIC_PREF = "wedding-music-preference";

export function WeddingExperience() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [opened, setOpened] = useState(false);
  const [entering, setEntering] = useState(false);
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
    if (entering) return;
    // Music must start inside the tap itself to satisfy browser autoplay rules.
    if (musicPreferred) playMusic();
    // Guests who prefer reduced motion skip the church-doors scene.
    if (reducedMotion) setOpened(true);
    else setEntering(true);
  }

  function finishEntrance() {
    setEntering(false);
    setOpened(true);
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
            exit={{ opacity: 0, y: reducedMotion ? 0 : -24 }}
            transition={{ duration: reducedMotion ? 0.1 : 0.75, ease: "easeInOut" }}
            className="catholic-splash fixed inset-0 z-[100] flex min-h-[100svh] flex-col items-center overflow-y-auto px-5 py-7 text-center sm:px-6 sm:py-10"
          >
            <div className="paper-texture pointer-events-none absolute inset-0 opacity-25" />
            <div className="pointer-events-none absolute inset-4 rounded-[32px] border border-gold/20 sm:inset-9 sm:rounded-[44px]" />
            <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-white/60 sm:inset-12 sm:rounded-[40px]" />
            <div className="botanical-sway pointer-events-none absolute -bottom-12 -left-18 h-55 w-60 opacity-80 sm:-bottom-9 sm:-left-8 sm:h-80 sm:w-80" aria-hidden="true">
              <WeddingFlorals className="flower-shadow h-full w-full" />
            </div>
            <div className="botanical-sway botanical-sway-late pointer-events-none absolute -right-20 -top-15 h-53 w-59 opacity-80 sm:-right-8 sm:-top-10 sm:h-80 sm:w-80" aria-hidden="true">
              <WeddingFlorals className="flower-shadow h-full w-full rotate-180" />
            </div>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative z-10 my-auto flex w-full max-w-2xl flex-col items-center py-12 sm:py-16"
            >
              <motion.div
                className="sacred-glow relative mb-3"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.82, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <SacredSeal className="relative h-24 w-24 sm:h-28 sm:w-28" />
              </motion.div>
              <p className="kicker mt-4 text-gold-deep">United in faith & love</p>
              <p className="display-serif mt-3 text-[clamp(1.5rem,4vw,2rem)] italic text-sage-dark">we joyfully invite you to our wedding</p>
              <h1 className="display-serif mt-7 text-[clamp(3.55rem,11vw,7.5rem)] leading-[.83] tracking-[-.055em] text-charcoal sm:mt-9">
                <motion.span className="block" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.18 }}>{wedding.bride}</motion.span>
                <motion.span className="my-1.5 block text-[.65em] italic text-gold sm:my-2" initial={reducedMotion ? false : { opacity: 0, scale: 0.72 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.43 }}>&</motion.span>
                <motion.span className="block" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.58 }}>{wedding.groom}</motion.span>
              </h1>
              <div className="mt-7 flex items-center gap-5 text-gold sm:mt-9">
                <span className="h-px w-9 bg-gold/50" />
                <span className="text-[11px] font-semibold tracking-[.23em] text-sage-dark">{wedding.date.short}</span>
                <span className="h-px w-9 bg-gold/50" />
              </div>
              <p className="mt-4 max-w-md text-xs leading-relaxed text-muted sm:text-sm">
                The Sacrament of Matrimony at {wedding.ceremony.time} <span className="mx-1.5 text-gold" aria-hidden="true">✦</span> Reception at {wedding.reception.time} <span className="whitespace-nowrap">(Sri Lanka)</span>
              </p>
              <button
                type="button"
                onClick={openInvitation}
                className="gilded-button mt-8 inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-sage-dark px-9 text-xs font-semibold uppercase tracking-[.15em] text-white shadow-[0_13px_30px_rgba(65,98,75,.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-deep hover:shadow-[0_17px_35px_rgba(65,98,75,.3)] active:scale-[.98] motion-reduce:transform-none sm:mt-10"
              >
                Open our invitation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-5 text-[11px] tracking-wide text-muted">Tap to enter · Gentle background music</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {entering ? <ChurchEntrance key="church-entrance" onComplete={finishEntrance} /> : null}
      </AnimatePresence>

      {opened ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 }}
          type="button"
          onClick={toggleMusic}
          className="music-toggle fixed bottom-5 right-5 z-50 flex h-11 items-center gap-2 rounded-full border border-gold/25 bg-white/95 px-3.5 text-sage-dark shadow-[0_10px_28px_rgba(54,82,62,.12)] backdrop-blur-md transition-colors hover:bg-sage-light sm:bottom-7 sm:right-7 sm:h-12 sm:px-4"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
          aria-pressed={isPlaying}
          title={audioFailed ? "Tap to try playing music again" : undefined}
        >
          {isPlaying ? <Pause className="h-4 w-4 fill-current" aria-hidden="true" /> : <Play className="h-4 w-4 fill-current" aria-hidden="true" />}
          <span className="text-[10px] font-semibold uppercase tracking-[.13em]">{isPlaying ? "Music on" : "Music off"}</span>
        </motion.button>
      ) : null}

      <div id="top" inert={!opened} className="overflow-x-clip">
        <header className="sticky top-0 z-30 border-b border-gold/15 bg-ivory/90 shadow-[0_2px_20px_rgba(60,91,70,.035)] backdrop-blur-xl">
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
            <a href="#rsvp" className="gilded-button rounded-full bg-sage-dark px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white shadow-[0_5px_16px_rgba(65,98,75,.14)] transition-colors hover:bg-sage-deep">RSVP <span className="ml-1">↗</span></a>
          </div>
          <nav aria-label="Wedding sections on mobile" className="flex min-h-11 items-center justify-center gap-7 border-t border-gold/10 px-4 md:hidden">
            <a href="#story" className="text-[10px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:text-charcoal">Our story</a>
            <a href="#events" className="text-[10px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:text-charcoal">The day</a>
            <a href="#location" className="text-[10px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:text-charcoal">Location</a>
          </nav>
        </header>

        <main>
          <section id="home" className="catholic-hero relative isolate overflow-hidden px-5 pb-20 pt-14 sm:px-10 sm:pb-25 sm:pt-20 lg:pb-30 lg:pt-22">
            <div className="pointer-events-none absolute -left-22 top-40 h-70 w-70 rounded-full border border-gold/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-30 top-48 h-70 w-70 rounded-full border border-gold/10" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-13 lg:grid-cols-[.94fr_1.06fr] lg:gap-17">
              <Reveal className="order-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center gap-3 text-gold lg:justify-start">
                  <TinyCross className="h-5 w-5" />
                  <p className="kicker text-sage-dark">By the grace of God</p>
                </div>
                <h1 className="display-serif mt-7 text-[clamp(3.5rem,10vw,7.1rem)] leading-[.85] tracking-[-.065em] text-charcoal">
                  <span className="block">{wedding.bride}</span>
                  <span className="my-1 block text-[.62em] italic text-gold sm:my-2">&</span>
                  <span className="block">{wedding.groom}</span>
                </h1>
                <p className="mt-7 max-w-lg text-sm leading-7 text-muted lg:mx-0">
                  With thankful hearts, we invite you to witness our vows before God, and share in the joy of our beginning together.
                </p>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-white/80 px-5 py-3 text-sage-dark shadow-[0_6px_20px_rgba(82,102,74,.07)]">
                  <CalendarDays className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.7} aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[.13em]">{wedding.date.display}</span>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start" aria-label="Wedding schedule">
                  <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-sage/25 bg-sage-light/90 px-4 py-2 text-[11px] text-sage-dark">
                    <TinyCross className="h-3.5 w-3.5 text-gold" /> Nuptial Mass <strong className="font-semibold">{wedding.ceremony.time}</strong>
                  </span>
                  <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-gold/25 bg-sage-light/80 px-4 py-2 text-[11px] text-sage-dark">
                    <Heart className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} aria-hidden="true" /> Reception <strong className="font-semibold">{wedding.reception.time}</strong>
                  </span>
                </div>
                <div className="mx-auto mt-8 max-w-md border-t border-gold/15 pt-7 lg:mx-0">
                  <p className="display-serif text-[1.85rem] italic leading-snug text-charcoal sm:text-[2.1rem]">
                    “{wedding.verse.text}”
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-gold-deep">{wedding.verse.reference}</p>
                </div>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <a href="#events" className="gilded-button inline-flex min-h-12 items-center gap-2 rounded-full bg-sage-dark px-6 text-[11px] font-semibold uppercase tracking-[.12em] text-white shadow-[0_10px_24px_rgba(65,98,75,.18)] transition-all hover:-translate-y-0.5 hover:bg-sage-deep motion-reduce:transform-none">
                    The wedding day <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href="#story" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/25 bg-white/70 px-5 text-[11px] font-semibold uppercase tracking-[.12em] text-sage-dark transition-colors hover:bg-sage-light">
                    Our invitation <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <a href="#events" className="mt-6 inline-flex items-center gap-2 text-[11px] text-muted underline-offset-4 hover:text-sage-dark hover:underline">
                  Joining from the USA? Check your local time <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </Reveal>

              <Reveal delay={0.15} className="order-2 relative mx-auto w-full max-w-[560px] lg:ml-auto">
                <div className="wedding-photo-wrap relative mx-auto w-full py-9 sm:py-12">
                  <span className="wedding-sparkle pointer-events-none absolute left-[6%] top-[8%] z-10 text-2xl text-gold/70 sm:text-4xl" aria-hidden="true">✧</span>
                  <div className="wedding-photo-card relative mx-auto w-[84%] max-w-[430px]">
                    <div className="wedding-photo-image relative aspect-[4/4.95] overflow-hidden bg-sage-light">
                      <Image
                        src="/couple.jpg"
                        alt={`Portrait of ${coupleNames}`}
                        fill
                        priority
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 440px, 37vw"
                        className="object-cover object-[center_48%]"
                      />
                    </div>
                    <div className="flex h-14 items-center justify-center gap-2.5 sm:h-18">
                      <span className="wedding-photo-note">together, by God&apos;s grace</span>
                      <TinyHeart className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                  <div className="botanical-sway pointer-events-none absolute -bottom-8 -left-9 z-10 h-43 w-47 sm:-bottom-13 sm:-left-13 sm:h-65 sm:w-65" aria-hidden="true">
                    <WeddingFlorals className="flower-shadow h-full w-full -rotate-6" />
                  </div>
                  <div className="botanical-sway botanical-sway-late pointer-events-none absolute -right-6 -top-8 z-10 h-34 w-34 sm:-right-12 sm:-top-8 sm:h-50 sm:w-50" aria-hidden="true">
                    <WeddingFlorals className="flower-shadow h-full w-full rotate-175" />
                  </div>
                  <span className="wedding-sparkle pointer-events-none absolute bottom-[15%] right-[0%] text-3xl text-gold/65 sm:text-4xl" aria-hidden="true">✧</span>
                </div>
              </Reveal>
            </div>
          </section>

          <Countdown />

          <section id="story" className="story-bloom relative overflow-hidden px-6 py-24 sm:py-32">
            <BotanicalSprig className="pointer-events-none absolute -right-18 top-11 h-58 w-40 rotate-170 text-sage/25" />
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTitle eyebrow={wedding.invitation.eyebrow} title={wedding.invitation.heading} />
              <p className="mx-auto mt-9 max-w-2xl text-[15px] leading-[2.1] text-muted sm:text-base">
                {wedding.invitation.body}
              </p>
              <p className="display-serif mt-8 text-[1.8rem] italic leading-relaxed text-sage-dark">{wedding.invitation.signoff}</p>
            </Reveal>
            <Reveal delay={0.16} className="mx-auto mt-14 max-w-2xl">
              <div className="blessing-wash relative overflow-hidden rounded-[30px] border border-gold/30 px-7 py-10 text-center shadow-[0_15px_55px_rgba(73,99,67,.07)] sm:px-14 sm:py-12">
                <span className="gold-foil-line pointer-events-none absolute inset-x-8 top-0 h-px" aria-hidden="true" />
                <TinyCross className="mx-auto h-8 w-8 text-gold" />
                <p className="display-serif mt-4 text-[clamp(1.6rem,4vw,2.35rem)] italic leading-snug text-sage-dark">“What God has joined together, let no one separate.”</p>
                <p className="kicker mt-5 text-gold-deep">Matthew 19:6</p>
              </div>
            </Reveal>
          </section>

          <section id="events" className="relative bg-paper px-6 py-24 sm:px-10 sm:py-32">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <SectionTitle eyebrow="With God&apos;s blessing" title="The wedding day" description="First, the joy of the Nuptial Mass and our marriage before God. Then, a beautiful evening of celebration together." />
              </Reveal>
              <UsaTimeSelector value={usZone} onChange={setUsZone} />
              <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-7">
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
              <div className="mt-12 rounded-3xl border border-gold/15 bg-white p-2 shadow-[0_18px_58px_rgba(76,103,79,.075)] sm:p-3">
                <div role="group" aria-label="Choose a wedding venue to view on the map" className="grid grid-cols-2 gap-2 p-1 sm:gap-3 sm:p-2">
                  <button
                    type="button"
                    aria-pressed={isCeremonyLocation}
                    onClick={() => setActiveVenue("ceremony")}
                    className={`flex min-h-14 items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-colors sm:gap-3 sm:text-sm ${isCeremonyLocation ? "border-gold bg-sage-dark text-white" : "border-line bg-ivory text-sage-dark hover:border-gold/40 hover:bg-sage-light"}`}
                  >
                    <Church className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span>Nuptial Mass <span className="hidden sm:inline">· {wedding.ceremony.time}</span></span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={!isCeremonyLocation}
                    onClick={() => setActiveVenue("reception")}
                    className={`flex min-h-14 items-center justify-center gap-2 rounded-xl border px-2 py-3 text-center text-xs font-semibold transition-colors sm:gap-3 sm:text-sm ${!isCeremonyLocation ? "border-gold bg-sage-dark text-white" : "border-line bg-ivory text-sage-dark hover:border-gold/40 hover:bg-sage-light"}`}
                  >
                    <Heart className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span>Reception <span className="hidden sm:inline">· {wedding.reception.time}</span></span>
                  </button>
                </div>
                <div className="grid overflow-hidden rounded-xl bg-white lg:grid-cols-[.82fr_1.18fr]">
                  <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
                    <span className="flex h-13 w-13 items-center justify-center rounded-full bg-sage-light text-gold"><MapPin className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" /></span>
                    <p className="kicker mt-7 text-gold-deep">{isCeremonyLocation ? "The sacred ceremony" : "Our reception venue"}</p>
                    <h3 className="display-serif mt-3 text-[clamp(2.75rem,6vw,4rem)] leading-[.98]">{locationDetails.venue}</h3>
                    <p className="mt-6 text-sm leading-7 text-muted">{locationDetails.address}</p>
                    <p className="mt-1 text-sm leading-7 text-sage-dark">{wedding.date.display} · {isCeremonyLocation ? wedding.ceremony.time : wedding.reception.time} <span className="text-muted">(Sri Lanka)</span></p>
                    <a
                      href={locationDetails.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gilded-button mt-9 inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-sage-dark px-6 text-[11px] font-semibold uppercase tracking-[.13em] text-white transition-colors hover:bg-sage-deep"
                    >
                      <Navigation className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                      Open Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="relative min-h-[310px] overflow-hidden bg-sage-light/50 sm:min-h-[390px]">
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

          <section id="rsvp" className="rsvp-wash relative overflow-hidden px-6 py-24 sm:py-34">
            <WeddingFlorals className="pointer-events-none absolute -bottom-12 -left-15 h-72 w-72 opacity-30" />
            <div className="relative mx-auto max-w-[740px]">
              <Reveal>
                <SectionTitle eyebrow="The pleasure of your company" title="Kindly RSVP" description={wedding.rsvp.deadline} />
              </Reveal>
              <Reveal delay={0.1} className="mt-11 rounded-3xl border border-gold/15 bg-white p-5 shadow-[0_22px_75px_rgba(67,96,74,.09)] sm:p-11 md:p-13">
                <RsvpForm />
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="footer-wash relative overflow-hidden px-6 pb-26 pt-24 text-center sm:pt-29">
          <div className="sacred-glow relative mx-auto w-fit"><SacredSeal className="h-19 w-19" /></div>
          <p className="kicker mt-6 text-gold-deep">With faith, hope and love</p>
          <p className="display-serif mt-4 text-[clamp(2.5rem,9vw,3.75rem)] leading-tight">{coupleNames}</p>
          <DividerOrnament className="mt-6" />
         
          <p className="mt-9 text-[10px] uppercase tracking-[.16em] text-muted">With God&apos;s grace and all our love</p>
        </footer>
      </div>
    </>
  );
}
