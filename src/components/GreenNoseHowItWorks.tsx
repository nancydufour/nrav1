// src/pages/GreenNoseHowItWorks.tsx
import React from 'react';
import AnimatedCard from '../components/AnimatedCard';

const GreenNoseHowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
            How to <span className="text-deep-purple">Join</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard delay={0} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl mb-4 animate-float">1.</div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
              Get Your Merch
            </h3>
            <p className="font-lato text-gray-600">
              Buy an official Green Nose, T-shirt, or wristband from our shop below.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={150} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl mb-4 animate-float">2.</div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
              Wear & Share
            </h3>
            <p className="font-lato text-gray-600">
              On May 25th, wear your nose proudly! Post a selfie with #GreenNoseDayAfrica.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={300} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl mb-4 animate-float">3.</div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
              Give or Fundraise
            </h3>
            <p className="font-lato text-gray-600">
              Make a direct donation or host your own fundraising event.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default GreenNoseHowItWorks;
