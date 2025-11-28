import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { EventType } from '../data/events'; // Import the EventType

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface EventCountdownProps {
  event: EventType; // Accept the event object as a prop
  onGetTicket: () => void;
}

const EventCountdown: React.FC<EventCountdownProps> = ({
  event,
  onGetTicket,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Use the event's date as the target
  const targetDate = new Date(event.date).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Event has passed or is happening
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'bg-deep-purple' },
    { label: 'Hours', value: timeLeft.hours, color: 'bg-burnt-red' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'bg-earth-green' },
    {
      label: 'Seconds',
      value: timeLeft.seconds,
      color: 'bg-warm-yellow text-deep-purple',
    },
  ];

  // Format the date for display
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-gradient-to-br from-deep-purple to-burnt-red rounded-2xl p-8 text-white shadow-2xl h-full flex flex-col">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calendar className="h-6 w-6 text-warm-yellow" />
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl">
            Live Event Countdown
          </h3>
        </div>
        <p className="font-lato text-lg text-gray-200 mb-2">
          {event.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-300">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className={`
              text-center rounded-xl p-4 text-white transform transition-all duration-500
              hover:scale-105 hover:rotate-1
              ${unit.color}
            `}
          >
            <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="font-lato text-sm uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to push button to the bottom */}
      <div className="flex-grow"></div>

      {/* Get Ticket Button */}
      <div className="text-center">
        <button
          onClick={onGetTicket}
          className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center space-x-3 mx-auto shadow-lg"
        >
          <Ticket className="h-6 w-6" />
          <span>{event.buttonText}</span>
        </button>
        <p className="font-lato text-sm text-gray-300 mt-3">
          {event.buttonLink
            ? 'Click to register on Eventbrite'
            : 'Registration required for entry'}
        </p>
      </div>
    </div>
  );
};

export default EventCountdown;