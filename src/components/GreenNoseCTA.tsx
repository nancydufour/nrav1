// src/pages/GreenNoseCTA.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';

const GreenNoseCTA: React.FC = () => {
  return (
    <section className="py-20 bg-burnt-red">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
          Can't Buy Merch? <span className="text-warm-yellow">Donate!</span>
        </h2>
        <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
          You can still make a huge impact by donating directly to the Green
          Nose Day fund.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
          <Link
            to="/donate-options"
            className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 flex items-center space-x-2 animate-float"
          >
            <Gift className="h-5 w-5" />
            <span>Donate to the Fund</span>
          </Link>
          <Link
            to="/events"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-burnt-red transition-all duration-500 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>See Our Events</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreenNoseCTA;
