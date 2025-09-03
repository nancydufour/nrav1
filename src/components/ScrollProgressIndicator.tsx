import React, { useEffect, useState } from 'react';

interface ScrollProgressIndicatorProps {
  stories: any[];
  activeStory: number;
  onStorySelect: (index: number) => void;
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  stories,
  activeStory,
  onStorySelect
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      {/* Progress Bar */}
      <div className="w-1 h-32 bg-white bg-opacity-30 rounded-full mb-4 overflow-hidden">
        <div 
          className="w-full bg-warm-yellow transition-all duration-300 rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Story Indicators */}
      <div className="space-y-3">
        {stories.map((story, index) => (
          <button
            key={index}
            onClick={() => onStorySelect(index)}
            className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
              activeStory === index
                ? 'bg-warm-yellow scale-125 shadow-lg'
                : 'bg-white bg-opacity-50 hover:bg-warm-yellow hover:scale-110'
            }`}
          >
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm font-lato whitespace-nowrap">
                {story.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;