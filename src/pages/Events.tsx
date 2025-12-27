import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Ticket, X } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import { events as allEvents } from '../data/events'; // Import the events data
import AnimatedCard from '../components/AnimatedCard';
import TicketModal from '../components/TicketModal';

// Define the event type, matching the data structure
interface EventType {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  buttonText: string;
  buttonLink?: string | null;
}

// --- Event Modal Component ---
interface EventModalProps {
  event: EventType;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  // Format the date for display
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handlebuttonClick = (event: EventType) =>{
    if (event.buttonLink) {
      window.open(event.buttonLink, '_blank');
    } else{
      setIsTicketModalOpen(true);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm animate-fadeInUp"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full m-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-70 text-charcoal rounded-full p-2 hover:bg-opacity-100 transition-all"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          <h2 className="font-montserrat font-bold text-3xl text-deep-purple mb-4">
            {event.title}
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 mb-6 font-lato">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-burnt-red" />
              <span>
                {formattedDate} at {event.time}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-earth-green" />
              <span>{event.location}</span>
            </div>
          </div>
          <p className="font-lato text-lg text-gray-700 leading-relaxed">
            {event.longDescription}
          </p>
          <button onClick={()=>{handlebuttonClick(event)}} className="mt-8 bg-warm-yellow text-deep-purple px-8 py-3 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Ticket className="h-5 w-5" />
            <span>{event.buttonText}</span>
          </button>
        </div>
      </div>
      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        event={event.title}
      />
    </div>
  );
};

// --- Event Card Component ---
interface EventCardProps {
  event: EventType;
  onSelect: (event: EventType) => void;
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSelect, delay }) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });
  const formattedYear = eventDate.getFullYear();

  return (
    <AnimatedCard
      delay={delay}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-warm-yellow text-deep-purple rounded-lg px-3 py-1 text-center shadow-lg">
          <span className="block font-montserrat font-bold text-2xl">
            {formattedDate}
          </span>
          <span className="block font-lato text-xs">{formattedYear}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-deep-purple mb-2">
          {event.title}
        </h3>
        <div className="flex items-center space-x-2 text-gray-500 mb-3 font-lato text-sm">
          <MapPin className="h-4 w-4 text-earth-green" />
          <span>{event.location}</span>
        </div>
        <p className="font-lato text-gray-600 mb-6">
          {event.shortDescription}
        </p>
        <button
          onClick={() => onSelect(event)}
          className="font-montserrat font-semibold text-burnt-red hover:underline"
        >
          Learn More
        </button>
      </div>
    </AnimatedCard>
  );
};

// --- Main Events Page ---
const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const now = new Date();
    const sortedEvents = allEvents
      .map((event) => ({
        ...event,
        dateObj: new Date(event.date),
      }))
      .filter((event) => event.dateObj > now) // Filter out past events
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime()); // Sort by nearest date first
    setUpcomingEvents(sortedEvents);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-r from-earth-green to-deep-purple"
      >
        <div className="absolute h-[30rem] inset-0 bg-black bg-opacity-20"></div>
        <div className="relative pt-[10rem] z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Upcoming <span className="text-warm-yellow">Events</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Join us, get involved, and be part of the change.
          </p>
        </div>
      </ParallaxSection>

      {/* Events Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onSelect={setSelectedEvent}
                  delay={index * 100}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                No upcoming events right now.
              </h2>
              <p className="font-lato text-lg text-gray-600">
                Please check back soon or{' '}
                <Link to="/contact" className="text-deep-purple hover:underline">
                  contact us
                </Link>{' '}
                to see how you can help.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;