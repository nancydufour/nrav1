import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  Heart, 
  Home, 
  Gamepad2, 
  Users, 
  Lightbulb,
  ChevronRight 
} from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import ParallaxSection from '../components/ParallaxSection';

const OurWork: React.FC = () => {
  const programs = [
    {
      icon: <Utensils className="h-12 w-12" />,
      title: "Alleviating Hunger & Malnutrition",
      description: "We fight hunger where it starts — in schools, villages, and communities where children and families struggle to get a single daily meal. Through school feeding programs, mobile food trucks, and community kitchens, we make sure that no child learns on an empty stomach.",
      color: "bg-warm-yellow",
      textColor: "text-warm-yellow",
      bgColor: "bg-warm-yellow bg-opacity-10",
      link: "/work/hunger"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Supporting the Sick, Elderly & Forgotten",
      description: "We bring comfort, care packs, and hope to those in hospitals, psychiatric facilities, and care homes. We also provide free transport for rural patients who can't access urgent treatment, and we carry out dignity visits to the elderly.",
      color: "bg-burnt-red",
      textColor: "text-burnt-red",
      bgColor: "bg-burnt-red bg-opacity-10",
      link: "/work/healthcare"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Shelter for the Homeless & Displaced",
      description: "From distributing blankets and clothing to building temporary shelters, we work to protect the vulnerable who are living in unsafe or abandoned spaces. We partner with social workers to help them reintegrate into society.",
      color: "bg-earth-green",
      textColor: "text-earth-green",
      bgColor: "bg-earth-green bg-opacity-10",
      link: "/work/shelter"
    },
    {
      icon: <Gamepad2 className="h-12 w-12" />,
      title: "Safe Spaces for Children",
      description: "Children deserve joy, play, and safety. We build playgrounds and parks in low-income communities, and we run Green Nose Day Africa every year to fund child-focused projects across the continent.",
      color: "bg-deep-purple",
      textColor: "text-deep-purple",
      bgColor: "bg-deep-purple bg-opacity-10",
      link: "/work/children"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Inspiring a Culture of Giving",
      description: "We mobilize celebrities, influencers, schools, and everyday people to be part of the solution — turning kindness into action through donation drives and volunteer programs.",
      color: "bg-burnt-red",
      textColor: "text-burnt-red",
      bgColor: "bg-burnt-red bg-opacity-10",
      link: "/work/culture"
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Healing, Rebuilding & Reform",
      description: "We tackle poverty at its root by supporting education, entrepreneurship, and employment initiatives. We also provide faith-based and emotional healing programs that remind people: you matter, you are seen, you are not forgotten.",
      color: "bg-warm-yellow",
      textColor: "text-warm-yellow",
      bgColor: "bg-warm-yellow bg-opacity-10",
      link: "/work/rebuilding"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.4}
        className="relative py-20 bg-gradient-to-br from-deep-purple to-earth-green"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Our <span className="text-warm-yellow">Work</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fadeInUp stagger-2">
            Six pillars of transformation, each designed to restore dignity and create lasting change across Africa.
          </p>
        </div>
      </ParallaxSection>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              How We're <span className="text-deep-purple">Making a Difference</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Every program is designed with one goal: to restore dignity and create sustainable change that lasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <AnimatedCard
                key={index}
                delay={index * 100}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100"
              >
                <div className={`${program.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500`}>
                  <div className={program.textColor}>
                    {program.icon}
                  </div>
                </div>
                
                <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                  {program.title}
                </h3>
                
                <p className="font-lato text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                
                <Link
                  to={program.link}
                  className={`inline-flex items-center ${program.textColor} font-montserrat font-semibold hover:underline group-hover:translate-x-4 transition-transform duration-500`}
                >
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-burnt-red">Impact</span> in Numbers
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Every statistic represents a life transformed, a hope restored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fadeInUp stagger-2">
            <div className="text-center transform hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-warm-yellow mb-2 animate-pulse">
                1,000+
              </div>
              <p className="font-lato text-gray-700">Meals Served</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-burnt-red mb-2 animate-pulse">
                50+
              </div>
              <p className="font-lato text-gray-700">Hospitals Reached</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-earth-green mb-2 animate-pulse">
                200+
              </div>
              <p className="font-lato text-gray-700">People Sheltered</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-500">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-deep-purple mb-2 animate-pulse">
                15+
              </div>
              <p className="font-lato text-gray-700">Playgrounds Built</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Be Part of the <span className="text-warm-yellow">Solution</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Every contribution, big or small, helps us reach more communities and restore more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <Link
              to="/donate-options"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 animate-float"
            >
              Support Our Work
            </Link>
            <Link
              to="/get-involved"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-500 transform hover:scale-105"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;