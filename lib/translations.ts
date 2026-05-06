export type Lang = 'nl' | 'en'

// ─── Date helpers ────────────────────────────────────────────────────────────
export const DAYS: Record<Lang, string[]> = {
  nl: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
}

export const MONTHS: Record<Lang, string[]> = {
  nl: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

// ─── Booking data ────────────────────────────────────────────────────────────
export const SERVICES_T = [
  { id: 'haircut', nl: 'Knippen',      en: 'Haircut',    price: '€25', duration: '30 min' },
  { id: 'fade',    nl: 'Skin Fade',    en: 'Skin Fade',  price: '€30', duration: '45 min', popular: true },
  { id: 'beard',   nl: 'Baard trimmen',en: 'Beard Trim', price: '€15', duration: '20 min' },
  { id: 'combo',   nl: 'Combi Deal',   en: 'Combo Deal', price: '€40', duration: '60 min' },
]

export const BARBERS_T = [
  { id: 'any',    nl: 'Geen voorkeur', en: 'No preference', subNl: 'Eerste beschikbare kapper', subEn: 'First available barber' },
  { id: 'ismail', nl: 'Ismail',        en: 'Ismail',        subNl: '12+ jaar ervaring',         subEn: '12+ years experience' },
  { id: 'karim',  nl: 'Karim',         en: 'Karim',         subNl: '8+ jaar ervaring',          subEn: '8+ years experience' },
]

// ─── UI strings ───────────────────────────────────────────────────────────────
export const t = {
  nav: {
    links: {
      nl: ['Diensten', 'Over ons', 'Recensies', 'Galerij', 'Contact'],
      en: ['Services', 'About',    'Reviews',   'Gallery', 'Contact'],
    },
    cta: { nl: 'Afspraak Maken', en: 'Book Appointment' },
  },

  hero: {
    eyebrow:   { nl: "5-sterren kapper · Rijswijk", en: "5-star barber · Rijswijk" },
    line1:     { nl: 'Precisie Knippen.', en: 'Precision Cuts.' },
    line2:     { nl: 'Ervaring.',         en: 'Experience.' },
    sub:       {
      nl: "Rijswijk's best beoordeelde kapper met 5-sterren service. Uw look, geperfectioneerd.",
      en: "Rijswijk's highest-rated barber with 5-star service. Your look, perfected.",
    },
    rating:    { nl: '5.0 · Google recensies', en: '5.0 · Google reviews' },
    cta:       { nl: 'Afspraak Maken',  en: 'Book Appointment' },
    secondary: { nl: 'Onze Diensten',   en: 'Our Services' },
    scroll:    { nl: 'Scroll',           en: 'Scroll' },
  },

  services: {
    heading: { nl: 'Onze Diensten', en: 'Our Services' },
    sub: {
      nl: 'Elke dienst is een ambacht. We nemen de tijd om uw stijl te begrijpen en resultaten te leveren die voor zichzelf spreken.',
      en: 'Every service is a craft. We take the time to understand your style and deliver results that speak for themselves.',
    },
    from: { nl: 'Vanaf', en: 'From' },
  },

  about: {
    heading1:     { nl: 'Meer dan een',     en: 'More than a' },
    heading2:     { nl: 'Kapperbezoek.',    en: 'Haircut.' },
    reviews:      { nl: 'Recensies',        en: 'Reviews' },
    satisfaction: { nl: 'Tevredenheid',     en: 'Satisfaction' },
    p1: {
      nl: 'Bij Two in One Barberstudio draait het om vakmanschap. Geen snelle transacties, maar de tijd en aandacht die nodig is voor de perfecte look.',
      en: "At Two in One Barberstudio, it's all about craftsmanship. No quick transactions, just the time and attention needed for the perfect look.",
    },
    p2: {
      nl: 'Onze barbers Ismail en Karim hebben samen meer dan 20 jaar ervaring. Of je nu komt voor een strakke skin fade of een klassieke baardtrim, je bent bij ons in de beste handen.',
      en: 'Our barbers Ismail and Karim have over 20 years of combined experience. Whether you come for a clean skin fade or a classic beard trim, you are in the best hands.',
    },
    barbers: [
      {
        name: 'Ismail',
        title: { nl: 'Master Barber', en: 'Master Barber' },
        desc: { 
          nl: '12+ jaar ervaring. Specialist in klassieke kapsels en precisie baardwerk. Kent elke stijl tot in de puntjes.',
          en: '12+ years experience. Specialist in classic cuts and precision beard work. Knows every style inside out.'
        }
      },
      {
        name: 'Karim',
        title: { nl: 'Skin Fade Expert', en: 'Skin Fade Expert' },
        desc: {
          nl: '8+ jaar ervaring. De koning van de skin fades en moderne urban stijlen. Altijd scherp en gedetailleerd.',
          en: '8+ years experience. The king of skin fades and modern urban styles. Always sharp and detailed.'
        }
      }
    ],
  },

  reviews: {
    heading: { nl: 'Wat Klanten Zeggen', en: 'What Clients Say' },
    sub: {
      nl: 'Neem niet ons woord ervoor — luister naar de mensen die wekelijks in onze stoel zitten.',
      en: "Don't take our word for it — hear from the people who sit in our chair every week.",
    },
    count: { nl: 'recensies', en: 'reviews' },
    prev:  { nl: 'Vorige',    en: 'Previous' },
    next:  { nl: 'Volgende',  en: 'Next' },
  },

  gallery: {
    heading: { nl: 'Ons Werk', en: 'Our Work' },
    sub: {
      nl: 'Elke foto vertelt een verhaal van vakmanschap. Van strakke skin fades tot scherpe lijnen — dit is hoe precisie eruitziet.',
      en: 'Every photo tells a story of craft. From clean skin fades to sharp line-ups — this is what precision looks like.',
    },
  },

  booking: {
    eyebrow:  { nl: 'Rijswijk weet het.',   en: 'Locals know.' },
    heading1: { nl: 'De locals weten',       en: 'Locals know' },
    heading2: { nl: 'waar ze heen gaan.',    en: 'where to go.' },
    sub: {
      nl: '5.0 · 45 reviews · Visseringlaan 19 · Ma–Vr 09–19 · Za 09–17',
      en:  '5.0 · 45 reviews · Visseringlaan 19 · Mon–Fri 09–19 · Sat 09–17',
    },
    cta:   { nl: 'Afspraak Maken',  en: 'Book Appointment' },
    phone: { nl: 'Of bel ons direct op', en: 'Or call us directly at' },
  },

  contact: {
    heading:    { nl: 'Vind ons',         en: 'Find Us' },
    sub:        { nl: 'In het hart van Rijswijk — gemakkelijk bereikbaar, onvergetelijk.', en: 'In the heart of Rijswijk — easy to reach, impossible to forget.' },
    address:    { nl: 'Adres',            en: 'Address' },
    directions: { nl: 'Route plannen',    en: 'Get directions' },
    phone:      { nl: 'Telefoon',         en: 'Phone' },
    hours:      { nl: 'Openingstijden',   en: 'Opening Hours' },
    open:       { nl: 'Nu geopend',       en: 'Open now' },
    closed:     { nl: 'Nu gesloten',      en: 'Closed now' },
  },

  footer: {
    rights: { nl: 'Alle rechten voorbehouden.', en: 'All rights reserved.' },
    links: {
      nl: ['Diensten', 'Over ons', 'Recensies', 'Galerij', 'Contact'],
      en: ['Services', 'About',    'Reviews',   'Gallery', 'Contact'],
    },
  },

  sticky: {
    title:   { nl: 'Klaar voor uw look?',  en: 'Ready for your look?' },
    sub:     { nl: 'Maak nu een afspraak', en: 'Book your appointment' },
    cta:     { nl: 'Boek nu',             en: 'Book now' },
    desktop: { nl: 'Afspraak maken',      en: 'Book appointment' },
  },

  modal: {
    title:     { nl: 'Afspraak Maken',    en: 'Book Appointment' },
    confirmed: { nl: 'Afspraak bevestigd', en: 'Appointment confirmed' },
    close:     { nl: 'Sluiten',           en: 'Close' },
    cancel:    { nl: 'Annuleren',         en: 'Cancel' },
    back:      { nl: 'Terug',             en: 'Back' },
    next:      { nl: 'Volgende',          en: 'Next' },
    confirm:   { nl: 'Bevestig Afspraak', en: 'Confirm Appointment' },
    steps: {
      service:  { nl: 'Dienst',       en: 'Service' },
      barber:   { nl: 'Kapper',       en: 'Barber' },
      datetime: { nl: 'Datum & Tijd', en: 'Date & Time' },
      details:  { nl: 'Uw gegevens',  en: 'Your details' },
    },
    step1: {
      heading: { nl: 'Kies uw dienst', en: 'Choose your service' },
      popular: { nl: 'Populair',       en: 'Popular' },
    },
    step2: {
      heading: { nl: 'Kies uw kapper', en: 'Choose your barber' },
    },
    step3: {
      heading:   { nl: 'Datum & Tijd',        en: 'Date & Time' },
      chooseDay: { nl: 'Kies een dag',        en: 'Choose a day' },
      times:     { nl: 'Beschikbare tijden',  en: 'Available times' },
    },
    step4: {
      heading:  { nl: 'Uw gegevens',           en: 'Your details' },
      name:     { nl: 'Naam *',                en: 'Name *' },
      namePh:   { nl: 'Uw volledige naam',     en: 'Your full name' },
      phone:    { nl: 'Telefoonnummer *',      en: 'Phone number *' },
      phonePh:  { nl: '+31 6 ...',             en: '+31 6 ...' },
      email:    { nl: 'E-mailadres',           en: 'Email address' },
      emailPh:  { nl: 'uw@email.com',          en: 'your@email.com' },
      note:     { nl: 'Opmerking',             en: 'Note' },
      notePh:   { nl: 'Eventuele wensen of opmerkingen...', en: 'Any wishes or comments...' },
    },
    summary: {
      service:  { nl: 'Dienst',       en: 'Service' },
      barber:   { nl: 'Kapper',       en: 'Barber' },
      date:     { nl: 'Datum',        en: 'Date' },
      time:     { nl: 'Tijd',         en: 'Time' },
      name:     { nl: 'Naam',         en: 'Name' },
      datetime: { nl: 'Datum & Tijd', en: 'Date & Time' },
    },
    success: {
      title:   { nl: 'Afspraak aangevraagd!', en: 'Appointment requested!' },
      sub:     { nl: 'We nemen spoedig contact met u op ter bevestiging.', en: "We'll be in touch shortly to confirm your appointment." },
      phone:   { nl: 'Of bel ons direct op',  en: 'Or call us directly at' },
    },
  },
}
