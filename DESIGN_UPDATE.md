# Wedding invitation – romantic visual refresh

## What changed

- **Photo frame:** Replaced the tall memorial-like arch with a softly rotated rectangular *wedding keepsake* frame, cream-white mat, handwritten-style caption, blush-pink blossoms and a champagne backdrop.
- **Colour palette:** Warm ivory, dusty rose, blush, peach, champagne gold and eucalyptus green. The palette is controlled centrally in `app/globals.css`.
- **Landing screen:** Gentler floral corners, romantic names, wedding heart details and a stronger rose-coloured invitation button.
- **Main page:** New warm gradient hero, decorative details, clearer call-to-action buttons, lively countdown cards, refreshed event/location cards and matching RSVP form.
- **Website icon:** Changed from a solitary cross to a small rose wedding heart. The appropriate religious imagery remains at the Nuptial Mass.
- **Information and functionality:** Wedding details, date, times, couple's photo, invitation copy, music, countdown, time-zone converter, calendar downloads, maps and the existing RSVP integration remain in place.

## To customise the look

- Replace `public/couple.jpg` with another real photo, keeping the **same filename**. A full-colour photo is an optional way to make the page even brighter; the current photograph is kept unchanged.
- The main photo-card styles are in `app/globals.css` under `.wedding-photo-*`, and the flowers are vector artwork in `components/ornaments.tsx` (`WeddingFlorals`).
- Choose new accents by editing `--color-rose`, `--color-blush`, `--color-peach`, `--color-sage` and `--color-gold` in `app/globals.css`.

## Run the invitation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open `http://localhost:3000` and press **Open our invitation**. The Google Sheets RSVP connection must be set up before genuine RSVP submissions can be stored. See `README.md`.

All 15 existing RSVP, Apps Script, time-zone and calendar tests passed after the visual changes. Note that package installation, a Next.js production build and live-browser visual QA could not be completed in the editing environment because external npm package retrieval was unavailable.
