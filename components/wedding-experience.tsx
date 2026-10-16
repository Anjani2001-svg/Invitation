"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarDays, Church, Heart, MapPin, Navigation, Pause, Phone, Play } from "lucide-react";
import { wedding, coupleNames } from "@/config/wedding";
import { Countdown } from "@/components/countdown";
import { EventCard } from "@/components/event-card";
import { BotanicalSprig, DividerOrnament, SacredSeal, TinyCross, WeddingFlorals } from "@/components/ornaments";
import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";
import { SectionTitle } from "@/components/section-title";
import { UsaTimeSelector } from "@/components/usa-time-selector";
import { type UsTimeZone } from "@/lib/us-time";

const MUSIC_PREF = "wedding-music-preference";
const NAV = [["#home", "Home"], ["#details", "Details"], ["#rsvp", "RSVP"], ["#location", "Location"]] as const;

export function WeddingExperience() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const reduced = useReducedMotion();
  const [opened, setOpened] = useState(false);
  const [entering, setEntering] = useState(false);
  const [guest, setGuest] = useState("");
  const [musicPreferred, setMusicPreferred] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const [usZone, setUsZone] = useState<UsTimeZone>("America/New_York");
  const [venue, setVenue] = useState<"ceremony" | "reception">("ceremony");
  const isMass = venue === "ceremony";
  const place = isMass ? wedding.ceremony : wedding.location;

  useEffect(() => {
    // Personalised greeting: share the link as ?guest=Mr.%20and%20Mrs.%20Silva
    const q = new URLSearchParams(window.location.search);
    setGuest((q.get("guest") ?? q.get("to") ?? "").slice(0, 80));
    try { if (window.localStorage.getItem(MUSIC_PREF) === "paused") setMusicPreferred(false); } catch { /* no storage */ }
    if (audioRef.current) audioRef.current.volume = 0.4;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (opened) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [opened]);

  function persistMusic(on: boolean) {
    setMusicPreferred(on);
    try { window.localStorage.setItem(MUSIC_PREF, on ? "playing" : "paused"); } catch { /* no storage */ }
  }
  function playMusic(save = false) {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.4;
    void a.play().then(() => { setIsPlaying(true); setAudioFailed(false); if (save) persistMusic(true); }).catch(() => { setIsPlaying(false); setAudioFailed(true); });
  }
  function openInvitation() {
    if (musicPreferred) playMusic(); // must run inside the tap
    if (reduced) setOpened(true); else setEntering(true);
  }
  // Never trap a guest if the video is slow or blocked.
  useEffect(() => {
    if (!entering || opened) return;
    const id = window.setTimeout(() => setOpened(true), 9000);
    return () => window.clearTimeout(id);
  }, [entering, opened]);
  const finishSoon = () => window.setTimeout(() => setOpened(true), 1100);
  function toggleMusic() {
    const a = audioRef.current;
    if (!a) return;
    if (!a.paused) { a.pause(); setIsPlaying(false); persistMusic(false); } else playMusic(true);
  }

  const btn = "gilded-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage-dark px-7 text-[11px] font-semibold uppercase tracking-[.14em] text-white transition-colors hover:bg-sage-deep";

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="metadata" loop onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} aria-hidden="true" />

      <AnimatePresence>
        {!entering && !opened ? (
          <motion.div key="gate" role="dialog" aria-modal="true" aria-label="Open your wedding invitation" exit={{ opacity: 0 }} transition={{ duration: 0.9 }}
            className="catholic-splash fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto px-6 py-10 text-center">
            <div className="paper-texture pointer-events-none absolute inset-0 opacity-25" />
            <div className="pointer-events-none absolute inset-4 rounded-[32px] border border-gold/30 sm:inset-8 sm:rounded-[44px]" />
            <div className="pointer-events-none absolute inset-6 rounded-[26px] border border-white/70 sm:inset-11 sm:rounded-[38px]" />
            <div className="botanical-sway pointer-events-none absolute -bottom-10 -left-14 h-60 w-60 opacity-80 sm:h-80 sm:w-80"><WeddingFlorals className="flower-shadow h-full w-full" /></div>
            <div className="botanical-sway botanical-sway-late pointer-events-none absolute -bottom-10 -right-14 h-60 w-60 opacity-80 sm:h-80 sm:w-80"><WeddingFlorals className="flower-shadow h-full w-full -scale-x-100" /></div>
            <div className="relative z-10 flex max-w-md flex-col items-center">
              <div className="sacred-glow"><SacredSeal className="h-24 w-24" /></div>
              <p className="display-serif mt-7 text-[clamp(1.7rem,6vw,2.3rem)] italic text-sage-dark">{guest ? `Dear ${guest},` : "You are invited"}</p>
              <p className="kicker mt-3 text-gold-deep">to the wedding of</p>
              <h1 className="display-serif mt-4 text-[clamp(2.8rem,10vw,4.6rem)] leading-[.9] text-charcoal">{wedding.bride}<span className="mx-2 italic text-gold">&</span>{wedding.groom}</h1>
              <p className="mt-4 text-[11px] font-semibold tracking-[.24em] text-sage-dark">{wedding.date.short}</p>
              <button type="button" onClick={openInvitation} className={`${btn} mt-9`}>Open invitation <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          </motion.div>
        ) : null}
        {entering && !opened ? (
          <motion.div key="stage" role="dialog" aria-modal="true" aria-label="Wedding invitation opening" exit={{ opacity: 0 }} transition={{ duration: 1 }}
            className="catholic-splash fixed inset-0 z-[100] overflow-hidden">
            <video className="absolute inset-0 h-full w-full object-cover" src="/church-entrance.mp4" poster="/church-entrance-poster.jpg" autoPlay muted playsInline preload="auto" onEnded={finishSoon} onError={() => setOpened(true)} aria-label="The couple walking to the altar" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/0 to-ivory/95" />
            <div className="paper-texture pointer-events-none absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute inset-4 rounded-[32px] border border-gold/45 sm:inset-8 sm:rounded-[44px]" />
            <div className="pointer-events-none absolute inset-6 rounded-[26px] border border-white/70 sm:inset-11 sm:rounded-[38px]" />
            <div className="botanical-sway pointer-events-none absolute -bottom-10 -left-14 h-56 w-56 sm:h-80 sm:w-80"><WeddingFlorals className="flower-shadow h-full w-full" /></div>
            <div className="botanical-sway botanical-sway-late pointer-events-none absolute -bottom-10 -right-14 h-56 w-56 sm:h-80 sm:w-80"><WeddingFlorals className="flower-shadow h-full w-full -scale-x-100" /></div>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="absolute inset-x-0 top-[max(3.2rem,8vh)] px-8 text-center">
              <TinyCross className="mx-auto h-6 w-6 text-gold" />
              <p className="display-serif mt-3 text-[clamp(1.5rem,5vw,2.2rem)] italic text-sage-dark">{guest ? `Dear ${guest},` : "You are invited"}</p>
              <p className="kicker mt-2 text-gold-deep">United in faith & love</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="absolute inset-x-0 bottom-[max(3.2rem,8vh)] px-8 text-center">
              <h1 className="display-serif text-[clamp(2.8rem,10vw,5rem)] leading-none text-charcoal">{wedding.bride}<span className="mx-3 italic text-gold">&</span>{wedding.groom}</h1>
              <p className="mt-3 text-[11px] font-semibold tracking-[.24em] text-sage-dark">{wedding.date.short}</p>
              <button type="button" onClick={() => setOpened(true)} className="mt-4 text-[10px] uppercase tracking-[.2em] text-muted underline-offset-4 hover:text-sage-dark hover:underline">Skip</button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {(
        <button type="button" onClick={toggleMusic} aria-label={isPlaying ? "Pause background music" : "Play background music"} aria-pressed={isPlaying}
          title={audioFailed ? "Tap to try playing music again" : undefined}
          className="music-toggle fixed bottom-5 right-5 z-[120] flex h-11 items-center gap-2 rounded-full border border-gold/30 bg-white/95 px-4 text-sage-dark shadow-lg backdrop-blur-md hover:bg-sage-light">
          {isPlaying ? <Pause className="h-4 w-4 fill-current" aria-hidden="true" /> : <Play className="h-4 w-4 fill-current" aria-hidden="true" />}
          <span className="text-[10px] font-semibold uppercase tracking-[.13em]">{isPlaying ? "Music on" : "Music off"}</span>
        </button>
      )}

      <div id="top" inert={!opened} className="overflow-x-clip">
        <header className="sticky top-0 z-30 border-b border-gold/20 bg-ivory/90 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
            <a href="#home" className="flex items-center gap-2 display-serif text-2xl text-sage-dark" aria-label="Back to top">
              {wedding.bride[0]}<span className="italic text-gold">&</span>{wedding.groom[0]}<TinyCross className="h-4 w-4 text-gold" />
            </a>
            <nav aria-label="Wedding sections" className="flex items-center gap-4 sm:gap-8">
              {NAV.map(([href, label]) => <a key={href} href={href} className="text-[10px] font-semibold uppercase tracking-[.14em] text-muted hover:text-sage-dark sm:text-[11px]">{label}</a>)}
            </nav>
          </div>
        </header>

        <main>
          <section id="home" className="catholic-hero relative isolate flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
            <div className="paper-texture pointer-events-none absolute inset-0 opacity-25" />
            <div className="botanical-sway pointer-events-none absolute -bottom-12 -left-16 h-60 w-60 opacity-80 sm:h-80 sm:w-80"><WeddingFlorals className="flower-shadow h-full w-full" /></div>
            <div className="botanical-sway botanical-sway-late pointer-events-none absolute -right-16 -top-12 h-60 w-60 opacity-80 sm:h-80 sm:w-80"><WeddingFlorals className="flower-shadow h-full w-full rotate-180" /></div>
            <Reveal className="relative">
              <TinyCross className="mx-auto h-7 w-7 text-gold" />
              <p className="kicker mt-4 text-gold-deep">The Wedding of</p>
              <h1 className="display-serif mt-6 text-[clamp(3.8rem,15vw,8rem)] leading-[.85] tracking-[-.05em] text-charcoal">
                {wedding.bride}<span className="my-2 block text-[.5em] italic text-gold">and</span>{wedding.groom}
              </h1>
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[.22em] text-sage-dark">{wedding.date.display}</p>
              <a href="#invitation" className="mt-12 inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[.2em] text-muted hover:text-sage-dark">
                Scroll down <ArrowRight className="scroll-cue h-4 w-4 rotate-90 text-gold" aria-hidden="true" />
              </a>
            </Reveal>
          </section>

          <section id="invitation" className="story-bloom relative overflow-hidden px-6 py-20 text-center sm:py-28">
            <BotanicalSprig className="pointer-events-none absolute -right-18 top-11 h-58 w-40 rotate-170 text-sage/25" />
            <Reveal className="mx-auto max-w-2xl">
              {guest ? <p className="display-serif text-2xl italic text-sage-dark">Dear {guest},</p> : null}
              <p className="display-serif mt-5 text-2xl italic leading-relaxed text-sage-dark">With joy and the blessings of our families,</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[wedding.families.bride, wedding.families.groom].map((f) => <p key={f} className="display-serif text-2xl text-charcoal">{f}</p>)}
              </div>
              <p className="mt-6 text-sm leading-7 text-muted">invite you to celebrate the marriage of their beloved children</p>
              <div className="wedding-photo-wrap relative mx-auto my-10 w-full max-w-[340px] py-8">
                <div className="wedding-photo-card relative mx-auto w-[84%]">
                  <div className="wedding-photo-image relative aspect-[4/4.95] overflow-hidden bg-sage-light">
                    <Image src="/couple.jpg" alt={`Portrait of ${coupleNames}`} fill priority sizes="340px" className="object-cover object-[center_48%]" />
                  </div>
                  <div className="flex h-14 items-center justify-center"><span className="wedding-photo-note">together, by God&apos;s grace</span></div>
                </div>
              </div>
              <p className="display-serif text-5xl text-charcoal">{wedding.bride}<span className="mx-3 italic text-gold">&</span>{wedding.groom}</p>
              <a href="#rsvp" className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[.2em] text-sage-dark underline-offset-4 hover:underline">{wedding.date.display}</a>
              <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[2] text-muted">{wedding.invitation.body}</p>
              <div className="blessing-wash relative mt-10 rounded-[28px] border border-gold/30 px-7 py-9">
                <span className="gold-foil-line absolute inset-x-8 top-0 h-px" aria-hidden="true" />
                <TinyCross className="mx-auto h-7 w-7 text-gold" />
                <p className="display-serif mt-3 text-[clamp(1.5rem,4vw,2.1rem)] italic leading-snug text-sage-dark">“What God has joined together, let no one separate.”</p>
                <p className="kicker mt-4 text-gold-deep">Matthew 19:6</p>
              </div>
              <a href="#details" className="mt-10 inline-flex flex-col items-center gap-2 text-[10px] uppercase tracking-[.2em] text-muted hover:text-sage-dark">Explore <ArrowRight className="scroll-cue h-4 w-4 rotate-90 text-gold" aria-hidden="true" /></a>
            </Reveal>
          </section>

          <section id="details" className="bg-paper px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <Reveal><SectionTitle eyebrow="Our celebration" title="The Details" description="The day's programme, from the Nuptial Mass to the evening reception." /></Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[["#programme", "The Programme", "Order of the day", Church], ["#location", "The Venues", "Church & reception", MapPin], ["#rsvp", "Kindly RSVP", "Let us know", Heart]].map(([href, t, d, Icon]) => {
                  const I = Icon as typeof Church;
                  return <a key={href as string} href={href as string} className="tab-card rounded-2xl border border-gold/25 bg-ivory p-6 text-center">
                    <I className="mx-auto h-6 w-6 text-gold" strokeWidth={1.4} aria-hidden="true" /><p className="display-serif mt-3 text-2xl text-charcoal">{t as string}</p><p className="mt-1 text-xs text-muted">{d as string}</p>
                  </a>;
                })}
              </div>
            </div>
          </section>

          <Countdown />

          <section id="programme" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <Reveal><SectionTitle eyebrow={wedding.date.display} title="The Programme" /></Reveal>
              <ol className="relative mx-auto mt-12 max-w-xl border-l border-gold/40 pl-8">
                {wedding.programme.map((p) => (
                  <Reveal key={p.time} className="relative pb-9 last:pb-0">
                    <span className="timeline-dot absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                    <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-gold-deep">{p.time}</p>
                    <p className="display-serif text-2xl text-charcoal">{p.title}</p><p className="text-sm text-muted">{p.note}</p>
                  </Reveal>
                ))}
              </ol>
              <UsaTimeSelector value={usZone} onChange={setUsZone} />
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Reveal className="h-full"><EventCard number="01" eventKind="ceremony" usZone={usZone} icon={<Church className="h-6 w-6" strokeWidth={1.35} aria-hidden="true" />} event={wedding.ceremony} /></Reveal>
                <Reveal className="h-full" delay={0.12}><EventCard number="02" eventKind="reception" usZone={usZone} icon={<Heart className="h-6 w-6" strokeWidth={1.35} aria-hidden="true" />} event={wedding.reception} /></Reveal>
              </div>
              {wedding.dressCode ? <p className="mt-8 text-center text-xs text-muted"><span className="font-semibold uppercase tracking-[.16em] text-sage-dark">Dress code</span> · {wedding.dressCode}</p> : null}
            </div>
          </section>

          <section id="location" className="bg-paper px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
              <Reveal><SectionTitle eyebrow="Where to find us" title={wedding.location.title} /></Reveal>
              <div className="mt-10 overflow-hidden rounded-3xl border border-gold/25 bg-white">
                <div role="group" aria-label="Choose a venue" className="grid grid-cols-2 gap-2 p-2">
                  {([["ceremony", "Nuptial Mass", Church], ["reception", "Reception", Heart]] as const).map(([k, label, I]) => (
                    <button key={k} type="button" aria-pressed={venue === k} onClick={() => setVenue(k)}
                      className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border text-xs font-semibold transition-colors ${venue === k ? "border-gold bg-sage-dark text-white" : "border-line bg-ivory text-sage-dark hover:bg-sage-light"}`}>
                      <I className="h-4 w-4" aria-hidden="true" />{label}
                    </button>
                  ))}
                </div>
                <div className="grid lg:grid-cols-[.85fr_1.15fr]">
                  <div className="flex flex-col justify-center px-7 py-10 sm:px-10">
                    <p className="kicker text-gold-deep">{isMass ? "The sacred ceremony" : "Our reception venue"}</p>
                    <h3 className="display-serif mt-3 text-4xl leading-tight">{place.venue}</h3>
                    <p className="mt-4 text-sm text-muted">{place.address}</p>
                    <p className="mt-1 text-sm text-sage-dark">{wedding.date.display} · {isMass ? wedding.ceremony.time : wedding.reception.time} <span className="text-muted">(Sri Lanka)</span></p>
                    <a href={place.directionsUrl} target="_blank" rel="noopener noreferrer" className={`${btn} mt-7 self-start`}><Navigation className="h-4 w-4" aria-hidden="true" />Open Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                  </div>
                  <div className="relative min-h-[300px] bg-sage-light/50">
                    <iframe key={venue} title={`Google Maps: ${place.venue}`} src={place.mapEmbedUrl} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="rsvp" className="rsvp-wash relative overflow-hidden px-6 py-20 sm:py-28">
            <div className="relative mx-auto max-w-[740px]">
              <Reveal><SectionTitle eyebrow="The pleasure of your company" title="Kindly RSVP" description={wedding.rsvp.deadline} /></Reveal>
              <Reveal delay={0.1} className="mt-10 rounded-3xl border border-gold/25 bg-white p-5 shadow-[0_22px_75px_rgba(60,80,60,.09)] sm:p-11"><RsvpForm /></Reveal>
            </div>
          </section>
        </main>

        <footer className="footer-wash px-6 pb-24 pt-20 text-center">
          <div className="sacred-glow mx-auto w-fit"><SacredSeal className="h-20 w-20" /></div>
          <p className="kicker mt-6 text-gold-deep">Save the date</p>
          <p className="display-serif mt-3 text-5xl text-charcoal">{wedding.date.short}</p>
          <p className="mx-auto mt-4 max-w-sm text-sm text-muted">{wedding.invitation.signoff}</p>
          <DividerOrnament className="mt-6" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#programme" className={btn}><CalendarDays className="h-4 w-4" aria-hidden="true" />Add to calendar</a>
            {wedding.contacts.map((c) => <a key={c.tel} href={`tel:${c.tel}`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-6 text-[11px] font-semibold uppercase tracking-[.12em] text-sage-dark hover:bg-sage-light"><Phone className="h-4 w-4" aria-hidden="true" />{c.label}</a>)}
          </div>
          <p className="display-serif mt-10 text-3xl text-charcoal">{coupleNames}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[.16em] text-muted">With God&apos;s grace and all our love</p>
        </footer>
      </div>
    </>
  );
}
