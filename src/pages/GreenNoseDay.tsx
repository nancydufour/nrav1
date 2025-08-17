import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Heart, Users, Camera, Gift } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCard from '../components/AnimatedCard';

const GreenNoseDay: React.FC = () => {
  const pastEvents = [
    {
      image: "https://images.pexels.com/photos/6995265/pexels-photo-6995265.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Children's Playground Opening",
      location: "Lagos, Nigeria"
    },
    {
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Community Kitchen Launch",
      location: "Accra, Ghana"
    },
    {
      image: "https://images.pexels.com/photos/6646971/pexels-photo-6646971.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Hospital Care Package Distribution",
      location: "Nairobi, Kenya"
    },
    {
      image: "https://images.pexels.com/photos/6647047/pexels-photo-6647047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "School Feeding Program",
      location: "Johannesburg, South Africa"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative py-20 bg-gradient-to-br from-earth-green via-warm-yellow to-earth-green"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fadeInUp">
            <span className="inline-block text-6xl mb-4 animate-float">🎈</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft stagger-1">
              Green Nose Day <span className="text-deep-purple">Africa</span>
            </h1>
            <p className="font-montserrat text-2xl md:text-3xl text-white font-semibold mb-8 animate-scaleIn stagger-2">
              One Day. One Africa. One Big Difference.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="font-lato text-lg text-gray-100 mb-8 leading-relaxed animate-fadeInUp stagger-3">
              Every May 25th — Africa Day — the entire continent will unite for Green Nose Day Africa, raising funds for community projects in every country. From school feeding to playground construction, each country keeps the money it raises to transform its own communities.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-white mb-8 animate-fadeInUp stagger-4">
              <Calendar className="h-6 w-6" />
              <span className="font-montserrat font-semibold text-xl">May 25th, 2025</span>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Countdown Timer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Countdown to <span className="text-earth-green">Green Nose Day</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Get ready for Africa's biggest day of giving!
            </p>
          </div>

          <CountdownTimer 
            targetDate="2025-05-25" 
            className="max-w-4xl mx-auto mb-12" 
          />

          <div className="text-center animate-scaleIn stagger-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate-options"
                className="bg-earth-green text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 flex items-center space-x-2 animate-float"
              >
                <Gift className="h-5 w-5" />
                <span>Get Your Green Nose</span>
              </Link>
              <Link
                to="/donate-options"
                className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 flex items-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Green Noses Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Why <span className="text-earth-green">Green Noses?</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-lato text-xl text-gray-700 leading-relaxed">
                Because we believe kindness should be visible — and fun. On May 25th, wear your green nose, share your photos, and donate to change lives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-4 animate-float">👃</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Wear It Proud
              </h3>
              <p className="font-lato text-gray-600">
                Your green nose shows the world that you care about Africa and its people.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-4 animate-float">📸</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Share Your Story
              </h3>
              <p className="font-lato text-gray-600">
                Post your green nose photos and inspire others to join the movement.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-6xl mb-4 animate-float">💚</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Make Change Happen
              </h3>
              <p className="font-lato text-gray-600">
                Every donation stays in your country to fund local community projects.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Past <span className="text-burnt-red">Events</span> & Impact
            </h2>
            <p className="font-lato text-lg text-gray-600">
              See how communities across Africa have benefited from Green Nose Day initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <AnimatedCard key={index} delay={index * 100} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-montserrat font-semibold text-lg mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-earth-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Ready to Join <span className="text-warm-yellow">Africa's Biggest Day of Giving?</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Get your green nose, spread the word, and help us transform communities across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <Link
              to="/get-involved"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 flex items-center space-x-2 animate-float"
            >
              <Users className="h-5 w-5" />
              <span>Join the Movement</span>
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-earth-green transition-all duration-500 transform hover:scale-105 flex items-center space-x-2"
            >
              <Camera className="h-5 w-5" />
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenNoseDay;