// src/pages/GreenNoseAbout.tsx
import React from 'react';

const GreenNoseAbout: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
              What is <span className="text-earth-green">Green Nose Day?</span>
            </h2>
            <div className="space-y-6 font-lato text-lg text-gray-700 leading-relaxed">
              <p>
                Green Nose Day is more than just a fundraiser; it's a
                continent-wide movement. On May 25th (Africa Day), we unite
                to wear a Green Nose, sparking conversations, spreading joy,
                and raising life-changing funds for children and communities.
              </p>
              <p>
                <span className="font-bold text-deep-purple">Why "Green"?</span>{' '}
                Green represents growth, hope, and the rich potential of
                Africa. When you buy and wear a green nose, you're not just
                being playful—you're planting a seed of change.
              </p>
              <p>
                Every naira, shilling, and cedi raised from merchandise and
                donations stays within the country it was raised to fund
                local projects. Your purchase directly impacts your own
                community.
              </p>
            </div>
          </div>
          <div className="animate-slideInRight">
            <img
              src="https://images.pexels.com/photos/1153976/pexels-photo-1153976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Happy children in Africa"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenNoseAbout;
