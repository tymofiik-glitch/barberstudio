export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    id: 'haircut',
    name: 'Classic Haircut',
    description: 'Precision cut tailored to your face shape. From textured crops to sleek side parts — executed with expert detail.',
    price: '€25',
    duration: '30 min',
    icon: '✂',
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    description: 'Our signature low-to-high fade with seamless blending. Clean lines, sharp edges, flawless gradient.',
    price: '€30',
    duration: '45 min',
    icon: '◈',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Sculpted, shaped and refined. Whether a full beard or sharp stubble — we craft it to perfection.',
    price: '€15',
    duration: '20 min',
    icon: '⬡',
  },
  {
    id: 'combo',
    name: 'Combo Deal',
    description: 'Haircut + beard trim in one premium session. The full grooming experience at an unbeatable value.',
    price: '€40',
    duration: '60 min',
    icon: '◆',
  },
]

export const REVIEWS = [
  {
    id: 1,
    name: 'Cinderella',
    rating: 5,
    text: 'Super goede kapper neemt de tijd en maakt het gemakkelijk voor kinderen 👍',
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Metin',
    rating: 5,
    text: 'Top service, erg vriendelijk en vakkundig. De beste in de buurt!',
    date: 'February 2025',
  },
  {
    id: 3,
    name: 'David',
    rating: 5,
    text: 'Professional service and great atmosphere. Highly recommended for a clean fade.',
    date: 'January 2025',
  },
  {
    id: 4,
    name: 'Anonym',
    rating: 5,
    text: 'Beste kapper van Rijswijk, altijd tevreden met het resultaat!',
    date: 'April 2025',
  },
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    alt: 'Classic haircut precision styling',
    label: { nl: 'Klassiek Kapsel', en: 'Classic Haircut' }
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    alt: 'Skin fade barber technique',
    label: { nl: 'Skin Fade', en: 'Skin Fade' }
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
    alt: 'Modern barbershop interior',
    label: { nl: 'Onze Studio', en: 'Our Studio' }
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80',
    alt: 'Beard trim and grooming',
    label: { nl: 'Baard & Grooming', en: 'Beard & Grooming' }
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&q=80',
    alt: 'Sharp line up and edge work',
    label: { nl: 'Lijnwerk', en: 'Line Up' }
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    alt: 'Professional barber at work',
    label: { nl: 'Combi Deal', en: 'Combo Deal' }
  },
]

export const SHOP_INFO = {
  name: 'Two in one barberstudio',
  address: 'Visseringlaan 19',
  city: 'Rijswijk, Netherlands',
  phone: '+31 647747131',
  whatsapp: 'https://wa.me/31647747131',
  instagram: 'https://www.instagram.com/two_in_one_barberstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  rating: 5.0,
  reviewCount: 45,
  hours: {
    weekdays: 'Mon – Fri: 09:00 – 19:00',
    saturday: 'Saturday: 09:00 – 17:00',
    sunday: 'Sunday: Closed',
  },
  googleMapsLink: 'https://maps.app.goo.gl/z98fqEv8CTQFwdkj8',
  mapUrl: 'https://maps.google.com/maps?q=Visseringlaan+19+Rijswijk+Netherlands&output=embed',
}
