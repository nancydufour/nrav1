import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Home, Guitar as Hospital, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import WebGLBackground from '../components/WebGLBackground';
import AnimatedCard from '../components/AnimatedCard';
import ParallaxSection from '../components/ParallaxSection';

const Homepage: React.FC = () => {
  const impactHighlights = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      stat: "1,000+",
      text: "Meals Served",
      description: "and counting, to children in underserved schools",
      link: "/work"
    },
    {
      icon: <Hospital className="h-8 w-8" />,
      stat: "50+",
      text: "Hospitals Reached",
      description: "delivering care packs, medical supplies, and emotional support",
      link: "/work"
    },
    {
      icon: <Home className="h-8 w-8" />,
      stat: "200+",
      text: "Shelter for the Homeless",
      description: "providing blankets, clothing, and reintegration programs",
      link: "/work"
    },
    {
      icon: <Users className="h-8 w-8" />,
      stat: "15+",
      text: "Safe Playgrounds Built",
      description: "giving children joy, hope, and a future worth dreaming of",
      link: "/work"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundImage="https://images.pexels.com/photos/6995122/pexels-photo-6995122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        speed={0.5}
        className="relative min-h-screen flex items-center justify-center"
      >
        <WebGLBackground />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-burnt-red to-earth-green opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-content">
            <div className="mb-8 animate-fadeInUp">
              <span className="inline-block bg-warm-yellow text-deep-purple px-4 py-2 rounded-full font-montserrat font-semibold text-sm mb-4 animate-pulse-glow">
                🌍 Transforming Lives Across Africa
              </span>
            </div>
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-slideInLeft stagger-1">
              Restoring Dignity.<br />
              <span className="text-warm-yellow">Feeding Hope.</span><br />
              <span className="text-earth-green">Changing Africa</span>
            </h1>
            <p className="font-lato text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fadeInUp stagger-2">
              One Meal, One Child, One Village at a Time
            </p>
            <p className="font-lato text-lg text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeInUp stagger-3">
              Needy Relief Africa exists to meet urgent humanitarian needs while building long-term solutions that restore dignity and hope to the most vulnerable communities across Africa.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scaleIn stagger-4">
              <Link 
                to="/donate-options"
                className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center space-x-2 animate-float"
              >
                <Heart className="h-5 w-5" />
                <span>Donate Now 💚</span>
              </Link>
              <Link 
                to="/get-involved"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Volunteer With Us 🙌</span>
              </Link>
              <Link 
                to="/get-involved"
                className="bg-earth-green text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Partner With Us 🤝</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-white transform rotate-90" />
        </div>
      </ParallaxSection>

      {/* Mission Statement */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-8">
            Fighting for the <span className="text-burnt-red">Invisible</span>
          </h2>
          <p className="font-lato text-lg text-gray-700 leading-relaxed">
            In slums, rural villages, hospitals, and forgotten corners of Africa, too many people are living unseen, unheard, and unsupported. At Needy Relief Africa, we believe no one should be invisible. We are here to fight hunger, heal wounds, create safe spaces, and rebuild lives — with dignity at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-deep-purple">Impact</span> So Far
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Every number represents a life touched, a hope restored, and a future made brighter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactHighlights.map((item, index) => (
              <AnimatedCard key={index} delay={index * 150}>
                <Link
                to={item.link}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 block"
              >
                  <div className="text-warm-yellow mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                  <div className="text-3xl font-montserrat font-bold text-deep-purple mb-2 group-hover:text-burnt-red transition-colors duration-300">
                  {item.stat}
                </div>
                  <div className="font-montserrat font-semibold text-lg text-charcoal mb-3 group-hover:text-deep-purple transition-colors duration-300">
                  {item.text}
                </div>
                <p className="font-lato text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                  <div className="mt-4 flex items-center text-burnt-red font-semibold text-sm group-hover:translate-x-4 transition-transform duration-500">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Teasers */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <Link
              to="/about"
                className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 block"
            >
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                Our Story
              </h3>
              <p className="font-lato text-gray-200 mb-6">
                Learn about our mission to restore dignity and hope across Africa.
              </p>
                <div className="flex items-center text-warm-yellow font-semibold group-hover:translate-x-4 transition-transform duration-500">
                <span>Discover More</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </div>
              </Link>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <Link
              to="/stories"
                className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-500 transform hover:scale-110 hover:rotate-1 block"
            >
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                Impact Stories
              </h3>
              <p className="font-lato text-gray-200 mb-6">
                Real stories of transformation from the communities we serve.
              </p>
                <div className="flex items-center text-warm-yellow font-semibold group-hover:translate-x-4 transition-transform duration-500">
                <span>Read Stories</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </div>
              </Link>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <Link
              to="/green-nose-day"
                className="group bg-earth-green bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-30 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 block"
            >
              <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                Green Nose Day Africa 🎈
              </h3>
              <p className="font-lato text-gray-200 mb-6">
                Join Africa's biggest day of giving on May 25th, 2025.
              </p>
                <div className="flex items-center text-warm-yellow font-semibold group-hover:translate-x-4 transition-transform duration-500">
                <span>Get Involved</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </div>
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;