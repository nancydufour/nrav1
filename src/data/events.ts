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
      'https://cdn.needyreliefafrica.org/WhatsApp_Image_2025-10-12_at_13.45.02_0bbd7979_vfglst.jpg',
    buttonText: 'Please Register',
    buttonLink: 'https://www.eventbrite.com/e/the-healing-session-by-needy-relief-africa-tickets-1797473494609'
  },
  {
    id: 2,
    title: 'Green Nose Day Community',
    date: '2027-05-25T08:00:00',
    time: '8:00 AM - 12:00 PM WAT',
    location: 'UNILAG Main Auditorium, University Of Lagos, Akoka, Lagos',
    shortDescription:
      'Join Green Nose Day and help drive real change in local communities. Show up, give what you can, and make your impact visible.',
    longDescription:
      "Green Nose Day is a vibrant fundraising event that brings people together to support meaningful community projects. Simply wear your green nose, show up with friends or family, and take part in a day dedicated to generosity and impact. Every contribution goes directly into initiatives that strengthen education, healthcare, and essential services for vulnerable communities. No running, no pressure, just a collective effort to make a visible difference.",
    image:
      'https://cdn.needyreliefafrica.org/Thumbnail_skeovv.jpg',
    buttonText: 'Register Now',
    buttonLink: 'https://www.eventbrite.com/e/the-healing-session-by-needy-relief-africa-tickets-1797473494609'
  },
  {
    id: 3,
    title: 'The Big Pot Project',
    date: '2026-03-28T10:00:00',
    time: '10:00 AM WAT',
    location: 'Agege Stadium, Lagos',
    shortDescription:
      'The Big Pot is more than a meal—it is a symbol of care, dignity, and togetherness.',
    longDescription:
      "The Big Pot is a humanitarian feeding outreach designed to serve, support, and restore hope within our community through the simple but powerful act of sharing food and love. This outreach will bring together volunteers, partners, and well-meaning individuals to feed 5,000 people in one day, demonstrating compassion, unity, and social responsibility.",
    image:
      'https://cdn.needyreliefafrica.org/WhatsApp_Image_2026-02-15_at_4.57.13_PM_o5hgzp.jpg',
    buttonText: 'Register Now',
    buttonLink: '#'
  },
];