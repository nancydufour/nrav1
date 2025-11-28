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
    id: 1,
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
  {
    id: 2,
    title: 'Green Nose Day Community',
    date: '2026-05-25T08:00:00',
    time: '8:00 AM - 12:00 PM WAT',
    location: 'UNILAG Main Auditorium, University Of Lagos, Akoka, Lagos',
    shortDescription:
      'Join Green Nose Day and help drive real change in local communities. Show up, give what you can, and make your impact visible.',
    longDescription:
      "Green Nose Day is a vibrant fundraising event that brings people together to support meaningful community projects. Simply wear your green nose, show up with friends or family, and take part in a day dedicated to generosity and impact. Every contribution goes directly into initiatives that strengthen education, healthcare, and essential services for vulnerable communities. No running, no pressure, just a collective effort to make a visible difference.",
    image:
      'https://res.cloudinary.com/drnwxb8cm/image/upload/v1759421336/Thumbnail_skeovv.jpg',
    buttonText: 'Register to Run',
  },
];