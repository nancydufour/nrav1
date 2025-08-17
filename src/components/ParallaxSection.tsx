import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  speed = 0.5,
  className = ''
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffsetY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offsetY}px)`,
            willChange: 'transform'
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;