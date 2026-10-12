/**
 * EDIT THIS FILE to personalise the entire invitation.
 * Names, date, times, copy, venue details, maps and SEO URL live here.
 * The values supplied below are EXAMPLES, not confirmed wedding details.
 */
export const wedding = {
  bride: "Bride Name",
  groom: "Groom Name",
  hashtag: "#BrideAndGroom2027",

  // Set this to the actual HTTPS URL after deploying (also used for social previews).
  siteUrl: "https://your-wedding-site.vercel.app",

  date: {
    // IMPORTANT: ISO 8601 WITH Sri Lanka's UTC+05:30 offset.
    // Countdown targets this exact instant (normally the start of the Mass).
    iso: "2027-02-14T10:00:00+05:30",
    display: "Sunday, 14 February 2027",
    short: "14 . 02 . 2027",
  },

  verse: {
    text: "Love is patient, love is kind.",
    reference: "1 Corinthians 13:4",
  },

  invitation: {
    eyebrow: "Together with our families",
    heading: "A day written in love",
    body: "With grateful hearts and God's abundant blessings, we joyfully invite you to witness our marriage in the presence of the Lord and celebrate this new chapter with us. Your prayers and presence would make our day even more meaningful.",
    signoff: "We would be honoured to share this beautiful day with you.",
  },

  ceremony: {
    title: "The Nuptial Mass",
    label: "Holy Matrimony",
    venue: "Your Church Name",
    address: "Negombo, Sri Lanka",
    time: "10:00 AM",
    note: "Please join us in prayer as we receive the Sacrament of Matrimony.",
    // Optional; leave empty to hide the directions link on this card.
    directionsUrl: "",
  },

  reception: {
    title: "The Wedding Reception",
    label: "Dinner & Celebration",
    venue: "Royal Ramsess Wedding Hall",
    address: "Negombo, Sri Lanka",
    time: "6:00 PM",
    note: "An evening of wonderful company, heartfelt toasts and celebration.",
  },

  // Optional: set to an empty string to hide the dress-code line.
  dressCode: "Formal / Festive attire",

  location: {
    title: "Find your way to us",
    venue: "Royal Ramsess Wedding Hall",
    address: "Negombo, Sri Lanka",
    // Query-based URLs don't require a Google Maps API key.
    mapEmbedUrl:
      "https://www.google.com/maps?q=Royal%20Ramsess%20Wedding%20Hall%2C%20Negombo%2C%20Sri%20Lanka&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Royal%20Ramsess%20Wedding%20Hall%2C%20Negombo%2C%20Sri%20Lanka",
  },

  rsvp: {
    deadline: "Kindly respond at your earliest convenience.",
    note: "Please submit one response per invitation or household.",
  },
} as const;

export const coupleNames = `${wedding.bride} & ${wedding.groom}`;
