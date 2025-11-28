import React from 'react';
import { ArrowLeft, Users, MapPin, Home, Shirt, Heart, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedCard from '../../components/AnimatedCard';

const ShelterProgram: React.FC = () => {
  const programs = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Emergency Shelters",
      description: "Temporary shelter spaces for displaced individuals and homeless families",
      impact: "150+ people sheltered",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299435/1214_shelter-devens01_kag0ce.jpg"
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Care Kit Distribution",
      description: "Blankets, clothes, and essential items for those living on the streets",
      impact: "500+ care kits distributed",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299531/FAK.jpg_svsduk.jpg  "
    },
    {
      icon: <HandHeart className="h-8 w-8" />,
      title: "Reintegration Support",
      description: "Working with social workers to help vulnerable people reintegrate into society",
      impact: "80+ people reintegrated",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734791/About2_lyz7bp.jpg"
    }
  ];

  const impactStats = [
    { number: "300+", label: "People Sheltered", icon: <Home className="h-6 w-6" /> },
    { number: "500+", label: "Care Kits Distributed", icon: <Shirt className="h-6 w-6" /> },
    { number: "20+", label: "Shelter Locations", icon: <MapPin className="h-6 w-6" /> },
    { number: "80+", label: "Successfully Reintegrated", icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-br from-earth-green to-deep-purple"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/work" 
            className="inline-flex items-center text-white hover:text-warm-yellow transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Our Work
          </Link>
          
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Shelter & <span className="text-warm-yellow">Support</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl animate-fadeInUp stagger-2">
            Providing safe shelter and support for the homeless and displaced, helping them rebuild their lives with dignity.
          </p>
        </div>
      </ParallaxSection>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-earth-green">Impact</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Creating safe spaces and pathways to stability for vulnerable individuals and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 150} className="text-center bg-cream rounded-2xl p-8">
                <div className="bg-earth-green bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-earth-green">
                  {stat.icon}
                </div>
                <div className="text-3xl font-montserrat font-bold text-charcoal mb-2">
                  {stat.number}
                </div>
                <p className="font-lato text-gray-600">{stat.label}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-burnt-red">Programs</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Comprehensive support from emergency shelter to long-term reintegration.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <AnimatedCard key={index} delay={index * 200} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="bg-earth-green bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-earth-green">
                      {program.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                      {program.title}
                    </h3>
                    <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="bg-warm-yellow bg-opacity-10 rounded-lg p-4">
                      <p className="font-montserrat font-semibold text-warm-yellow">
                        Impact: {program.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-deep-purple">Approach</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in dignity-centered support that addresses immediate needs while building long-term stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0} className="text-center">
              <div className="bg-earth-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-earth-green">1</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Immediate Relief
              </h3>
              <p className="font-lato text-gray-600">
                Providing emergency shelter, food, and basic necessities to those in crisis.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="text-center">
              <div className="bg-earth-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-earth-green">2</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Assessment & Planning
              </h3>
              <p className="font-lato text-gray-600">
                Understanding individual circumstances and creating personalized support plans.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="text-center">
              <div className="bg-earth-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-earth-green">3</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Skills & Support
              </h3>
              <p className="font-lato text-gray-600">
                Providing job training, counseling, and life skills to build independence.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={450} className="text-center">
              <div className="bg-earth-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-earth-green">4</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Reintegration
              </h3>
              <p className="font-lato text-gray-600">
                Supporting transition to permanent housing and sustainable employment.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-8 animate-fadeInUp">
            Success Story
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 animate-scaleIn stagger-2">
            <p className="font-lato text-xl text-gray-200 italic mb-6 leading-relaxed">
              "I was living under a bridge for two years after losing my job. Needy Relief Africa didn't just give me a bed - they helped me get back on my feet. Now I have my own apartment and a steady job. They showed me that I still had value when I had forgotten it myself."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-deep-purple">JO</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-white">John Okafor</p>
                <p className="font-lato text-gray-300 text-sm">Program Beneficiary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-earth-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Help Us Shelter <span className="text-warm-yellow">More People</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Your support provides safe shelter and a pathway to stability for vulnerable individuals and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <Link
              to="/donate-options"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-earth-green transition-all duration-500 transform hover:scale-105"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShelterProgram;