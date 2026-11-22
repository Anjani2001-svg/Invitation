# Champagne gold & sage green — Catholic wedding redesign

## Theme

- **Palette:** Champagne gold (`#b69861`), deep foil gold (`#896e40`), sage (`#829d87`), deep sage (`#476751`) and lighter tints. Warm ivory (`#fcfbf5`) is the neutral background. There are no pink, rose or peach accent colours.
- **Catholic character:** A bespoke cross-and-interlocking-rings emblem with olive leaves welcomes guests; a smaller emblem appears in the favicon and footer. The sacred promise is reinforced by references to the **Sacrament of Matrimony**, **Nuptial Mass**, **Matthew 19:6** and **1 Corinthians 13:4**. Original wedding details remain intact.
- **Photo:** A lightly tilted rectangular wedding keepsake with champagne trim, cream mat, sage/gold florals and the caption *“together, by God's grace”*. The original couple portrait is unchanged; no memorial-like photo arch is used.
- **Controls:** Sage-green primary buttons and tabs, gold borders and highlights, cream/sage section gradients, elegant headings, and matching RSVP inputs, countdown and calendar controls.

## Added motion

1. **Opening:** The Catholic wedding seal gently reveals; the names enter one after the other, followed by the invitation transition.
2. **Foliage & gold details:** The illustrated leaves move almost imperceptibly, and small foil stars glimmer.
3. **Buttons & photo:** Gold light sweeps across main buttons on hover/focus; the photo keepsake lifts slightly on hover.
4. **Countdown:** Changes in the live numbers ease into place rather than visually jumping.
5. **Scroll:** Existing motion-reveal components continue to introduce sections and cards as they enter view.

All movement is decorative and deliberately subtle. `prefers-reduced-motion: reduce` disables continuous CSS animations; Framer Motion entrance/countdown animations honour the same system setting.

## Edit the theme

- Colour tokens and animations: `app/globals.css`.
- Wedding flower artwork / sacred emblem: `components/ornaments.tsx` (SVG uses matching explicit gold/sage shades).
- Opening, couple photo, wording, map UI and footer: `components/wedding-experience.tsx`.
- Names, event date, ceremony/reception details, maps, invitation and RSVP wording: `config/wedding.ts`.
- To change the photograph, replace `public/couple.jpg` without renaming it.

## Unchanged functionality

The invitation retains background music with pause/resume, RSVP submission endpoint, Google Sheets / Apps Script integration, venue maps and directions, US time conversions, live countdown, and Google/Apple/Outlook calendar links/downloads. Confirm the reception venue and your domain before publishing, and configure the Google Sheets credentials before collecting real RSVPs.

## Verification

- `npm test`: **15 passed** (RSVP validation, rate limiting, Apps Script, time zone and calendar logic).
- **13 TS/TSX files** parsed/transpiled with the TypeScript compiler without syntax diagnostics.
- Live Next.js browser and production-build verification could not run in this editing environment: `npm install` could not reach the npm registry (`EAI_AGAIN`). On your machine, run `npm install`, `npm run build` and `npm run dev` to preview and deploy.
