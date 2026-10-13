# Church entrance video (optional)

When a guest taps **Open our invitation**, the invitation shows a closed church.
They tap it, and the church doors open and the couple walk in.

- **No video file** -> the illustrated version plays (works out of the box).
- **Video file present** -> your real video replaces it. Nothing else to change.

## How to add your video

1. Save the file as `public/church-walk.mp4` (exact name).
2. Run `npm run dev` and tap through the opening to preview it.

The **first frame** is shown as the closed church before the tap, so the video
should START on the closed church doors. The invitation opens automatically when
the video ends, so it works best if the last frames fade to white / ivory.

## Recommended specs

- Portrait 9:16 (1080x1920 or 720x1280); landscape also works (it is cropped to fill).
- H.264 `.mp4`, 8-12 seconds, ideally under 8 MB (guests open this on mobile data).
- No audio needed: it plays muted over the wedding music.
- Compress with HandBrake or: `ffmpeg -i in.mp4 -vf scale=720:-2 -c:v libx264 -crf 28 -an -movflags +faststart church-walk.mp4`

## Making the video

Two realistic options:

1. **Film it** at the real church: a locked-off shot from the church gate, doors opening,
   then you both walking slowly toward and through the doors (hand in hand, from behind).
2. **AI image-to-video** (Kling, Runway, Veo, etc.): upload a photo of the church as the first
   frame, then use a prompt like the one below. Generate a few takes and pick the best.

> Cinematic, realistic wedding film shot. Static camera at the gate of a white Catholic church
> at golden hour, soft warm light. The heavy wooden church doors slowly swing open, glowing
> warm light spilling out. A bride in a white gown with a long veil and a groom in a dark suit
> walk slowly, hand in hand, away from the camera along a stone path and into the church.
> Gentle rose petals drifting. Slow, graceful pace, shallow depth of field, 35mm film look.
> The final frames fade to bright white light.

Tip: AI tools can't reliably keep your exact faces. If it matters, film it for real, or
walk them from behind (faces are not visible in this shot, which avoids the problem).
