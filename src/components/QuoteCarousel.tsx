import { useState, useEffect } from "react";

const QuoteCarousel = ({ quotes }: { quotes: { text: string; author: string }[] }) => {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative w-full bg-cream rounded-xl p-6 border-l-4 border-burnt-red overflow-hidden ">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 40}%)`, width: `${quotes.length * 100}%` }}
            >
            {quotes.map((quote, index) => (
          <div key={index} className="w-[40%] flex-shrink-0 px-2">
            <p className="font-lato text-lg text-gray-700 italic w-[80%] mb-3">
              "{quote.text}"
            </p>
            <p className="font-montserrat font-semibold text-sm md:text-md text-burnt-red">
              — {quote.author}
            </p>
          </div>
        ))}
        </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-burnt-red scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


export default QuoteCarousel;