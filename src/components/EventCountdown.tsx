import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface EventCountdownProps {
  onGetTicket: () => void;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ onGetTicket }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2026-05-23T10:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'bg-deep-purple' },
    { label: 'Hours', value: timeLeft.hours, color: 'bg-burnt-red' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'bg-earth-green' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'bg-warm-yellow text-deep-purple' }
  ];

  return (
    <div className="bg-gradient-to-br from-deep-purple to-burnt-red rounded-2xl p-8 text-white shadow-2xl h-full">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calendar className="h-6 w-6 text-warm-yellow" />
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl">
            Live Event Countdown
          </h3>
        </div>
        <p className="font-lato text-lg text-gray-200 mb-2">
          Join us for our biggest fundraising event of the year!
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>May 23rd, 2026</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>10:00 AM</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>UNILAG (Hall TBA)</span>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {timeUnits.map((unit, index) => (
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

      <img src="/logoUnilag.png" alt="Unilag's Logo" className='object-contain h-[8rem] flex justify-self-center mb-5' />

      {/* Get Ticket Button */}
      <div className="text-center">
        <button
          onClick={onGetTicket}
          className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center space-x-3 mx-auto shadow-lg"
        >
          <Ticket className="h-6 w-6" />
          <span>Get Free Ticket</span>
        </button>
        <p className="font-lato text-sm text-gray-300 mt-3">
          Free admission • Registration required for entry
        </p>
      </div>
    </div>
  );
};

export default EventCountdown;