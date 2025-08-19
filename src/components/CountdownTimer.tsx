import React, { useEffect, useState } from 'react';
import { difference } from 'three/tsl';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = '' 
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      // console.log(target)
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(Math.abs(difference) / (1000 * 60 * 60 * 24)),
          hours: Math.floor((Math.abs(difference) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((Math.abs(difference) % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((Math.abs(difference) % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'bg-earth-green' },
    { label: 'Hours', value: timeLeft.hours, color: 'bg-warm-yellow text-deep-purple' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'bg-burnt-red' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'bg-deep-purple' }
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className={`
            text-center rounded-2xl p-6 text-white transform transition-all duration-500
            hover:scale-110 hover:rotate-3
            ${unit.color}
          `}
          style={{
            animationDelay: `${index * 100}ms`,
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          <div className="text-4xl md:text-5xl font-montserrat font-bold mb-2 animate-pulse">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="font-lato text-sm uppercase tracking-wide">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;