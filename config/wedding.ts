/**
 * EDIT THIS FILE to personalise the entire invitation.
 * Names, date, times, copy, venue details, maps and SEO URL live here.
 * Church, names, date and times are set for Anjani and Vihan. Confirm reception venue and site URL before sharing.
 */
export const wedding = {
  bride: "Anjani",
  groom: "Vihan",
  hashtag: "#AnjaniAndVihan2027",

  // Set this to the actual HTTPS URL after deploying (also used for social previews).
  siteUrl: "https://your-wedding-site.vercel.app",

  date: {
    // IMPORTANT: ISO 8601 WITH Sri Lanka's UTC+05:30 offset.
    // Countdown targets this exact instant (normally the start of the Mass).
    iso: "2027-05-22T16:00:00+05:30",
    display: "Saturday, 22 May 2027",
    short: "22 . 05 . 2027",
  },

  // Families named in the parents' invitation block. EDIT to the real names.
  families: {
    bride: "Mr. & Mrs. (De Silva)",
    groom: "Mr. & Mrs. (Vithanage)",
  },

  // Order of the day shown as the programme timeline.
  programme: [
    { time: "3:30 PM", title: "Arrival of guests", note: "Kindly be seated before the Mass begins" },
    { time: "4:00 PM", title: "The Nuptial Mass", note: "Exchange of vows and rings at St. Paul's" },
    { time: "6:30 PM", title: "Welcome & photographs", note: "Reception hall opens" },
    { time: "7:00 PM", title: "Wedding reception", note: "Blessing, toasts, dinner and dancing" },
  ],

  // Phone numbers for the call buttons (international format). EDIT.
  contacts: [
    { label: "Call the bride", tel: "+94763794742" },
    { label: "Call the groom", tel: "+94770807813" },
  ],

  verse: {
    text: "Love is patient, love is kind.",
    reference: "1 Corinthians 13:4",
  },

  invitation: {
    eyebrow: "Together with our families",
    heading: "Our sacred promise",
    body: "With grateful hearts and God's abundant blessings, we joyfully invite you to witness our marriage in the presence of the Lord and celebrate this new chapter with us. Your prayers and presence would make our day even more meaningful.",
    signoff: "We would be honoured to share this beautiful day with you.",
  },

  ceremony: {
    title: "The Nuptial Mass",
    label: "Holy Matrimony",
    venue: "St. Paul's Church",
    address: "Waragoda, Kelaniya, Sri Lanka",
    time: "4:00 PM",
    note: "Please join us in prayer as we receive the Sacrament of Matrimony.",
    // Google Maps place ID points to the Waragoda church, not similarly named churches elsewhere.
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=St.%20Paul%27s%20Church%2C%20Waragoda%2C%20Kelaniya%2C%20Sri%20Lanka&destination_place_id=ChIJEUKF2T1Y4joROz17YzpIHjs",
    mapEmbedUrl:
      "https://www.google.com/maps?q=St.%20Paul%27s%20Church%2C%20Waragoda%2C%20Kelaniya%2C%20Sri%20Lanka&z=16&output=embed",
  },

  reception: {
    title: "The Wedding Reception",
    label: "Dinner & Celebration",
    venue: "Royal Ramsess Wedding Hall",
    address: "Negombo, Sri Lanka",
    time: "7:00 PM",
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
