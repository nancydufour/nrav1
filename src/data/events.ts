export interface EventType {
  id: number;
  title: string;
  date: string; // ISO string format: "YYYY-MM-DDTHH:mm:ss"
  time: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  buttonText: string;
  buttonLink?: string | null
}

export const events: EventType[] = [
  {
    id: 5,
    title: 'Healing Session',
    date: '2025-12-05T14:00:00',
    time: '2:00 PM - 7:00 PM WAT',
    location: 'UNILAG TV Studio, University Of Lagos, Akoka, Lagos',
    shortDescription:
      'Join us for a heartfelt roundtable with survivors, pastors, doctors & therapists. Find comfort, strength and restoration in a safe, faith filled space',
    longDescription:
      "Get ready for an uplifting in-person experience with Needy Relief Africa. This event is all about bringing people together for healing, connection, and positive vibes. Whether you're seeking some peace, support, or just a great atmosphere, The Healing Session is the perfect place to be. Don’t miss out on this chance to recharge and be part of something truly special!",
    image:
      'https://res.cloudinary.com/drnwxb8cm/image/upload/v1762551383/WhatsApp_Image_2025-10-12_at_13.45.02_0bbd7979_vfglst.jpg',
    buttonText: 'Please Register',
    buttonLink: 'https://www.eventbrite.com/e/the-healing-session-by-needy-relief-africa-tickets-1797473494609'
  },
//   {
//     id: 4,
//     title: 'Hospital Outreach Day',
//     date: '2025-11-30T09:00:00',
//     time: '9:00 AM - 1:00 PM WAT',
//     location: 'LUTH, Idi-Araba, Lagos',
//     shortDescription:
//       'Volunteer with us as we distribute care packages to patients and hospital staff.',
//     longDescription:
//       'We believe in healing with dignity. Join our team of volunteers as we visit Lagos University Teaching Hospital to distribute essential care packages, spend time with patients, and show our appreciation for the hardworking medical staff.',
//     image:
//       'https://images.pexels.com/photos/6647047/pexels-photo-6647047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//     buttonText: 'Sign Up to Volunteer',
//   },
  {
    id: 1,
    title: 'Annual Charity Gala 2025',
    date: '2025-12-20T19:00:00',
    time: '7:00 PM - 11:00 PM WAT',
    location: 'Eko Hotel & Suites, Lagos, Nigeria',
    shortDescription:
      'Join us for an unforgettable night of elegance, inspiration, and giving.',
    longDescription:
      'Our most anticipated event of the year, the Annual Charity Gala, brings together philanthropists, community leaders, and supporters for a night dedicated to raising crucial funds for our programs. Enjoy a gourmet dinner, live auction, and inspiring stories from the field.',
    image:
      'https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg',
    buttonText: 'Purchase Tickets',
  },
  {
    id: 3,
    title: 'Community Bake Sale & Food Drive',
    date: '2026-02-14T10:00:00',
    time: '10:00 AM - 4:00 PM WAT',
    location: 'Ndubuisi Kanu Park, Ikeja, Lagos',
    shortDescription:
      'Support our hunger alleviation programs by buying a treat or donating food items.',
    longDescription:
      "Join us for a day of delicious treats and community spirit. Our volunteer-led bake sale raises funds for our school feeding programs. We will also be collecting non-perishable food items for our community kitchen.",
    image:
      'https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    title: 'Green Nose Day Community Fun Run',
    date: '2026-05-25T08:00:00',
    time: '8:00 AM - 12:00 PM WAT',
    location: 'National Stadium, Surulere, Lagos',
    shortDescription:
      'Run, walk, or jog with us to raise funds for Green Nose Day projects!',
    longDescription:
      "Be part of Africa's biggest day of giving! The 5K Fun Run is open to all ages and fitness levels. Wear your green nose, bring your family, and let's make a visible impact together. All proceeds go directly to community projects.",
    image:
      'https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg',
    buttonText: 'Register to Run',
  },
];