import React, { useEffect, useRef, useState } from 'react';
import KenBurnsCarousel from './KenBurnsCarousel';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      setOffsetY(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Layer: Carousel that moves UP */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offsetY}px)`,
          willChange: 'transform',
        }}
      >
        <KenBurnsCarousel />
      </div>

      {/* Overlay gradients if needed */}
      <div style={{transform: `translateY(${offsetY}px)`}} className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-burnt-red to-earth-green opacity-70 pointer-events-none" /> */}

      {/* Foreground Content Layer: Children move DOWN */}
      <div
        className="relative w-screen h-auto lg:h-screen z-10"
        style={{
          transform: `translateY(${offsetY * -0.2}px)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
