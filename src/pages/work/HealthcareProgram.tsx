import React from 'react';
import { ArrowLeft, Users, MapPin, Calendar, Heart, Guitar as Hospital, Truck, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedCard from '../../components/AnimatedCard';

const HealthcareProgram: React.FC = () => {
  const programs = [
    {
      icon: <Hospital className="h-8 w-8" />,
      title: "Hospital Outreach",
      description: "Regular visits to hospitals with medical supplies, hygiene packs, and emotional support",
      impact: "50+ hospitals visited",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299088/8D4A0404_c50ikf.jpg"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Medical Transport",
      description: "Free transportation for rural patients in need of urgent medical care",
      impact: "50+ patients transported",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734793/About4_uzfjoe.jpg"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Elderly Care Visits",
      description: "Dignity visits and care support to elderly and neglected members of society",
      impact: "100+ elderly visited",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299169/8D4A0511_t4ucem.jpg"
    }
  ];

  const impactStats = [
    { number: "50+", label: "Healthcare Facilities", icon: <Hospital className="h-6 w-6" /> },
    { number: "200+", label: "Patients Supported", icon: <Users className="h-6 w-6" /> },
    { number: "15+", label: "Cities Reached", icon: <MapPin className="h-6 w-6" /> },
    { number: "40+", label: "Emergency Transports", icon: <Truck className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-br from-burnt-red to-deep-purple"
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
            Supporting the <span className="text-warm-yellow">Sick & Elderly</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl animate-fadeInUp stagger-2">
            Bringing comfort, care, and dignity to those who need it most in hospitals, care homes, and communities.
          </p>
        </div>
      </ParallaxSection>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-burnt-red">Impact</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Reaching the most vulnerable with care, compassion, and practical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 150} className="text-center bg-cream rounded-2xl p-8">
                <div className="bg-burnt-red bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-burnt-red">
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
              Our <span className="text-earth-green">Programs</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Comprehensive support for healthcare and elderly care across communities.
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
                    <div className="bg-burnt-red bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-burnt-red">
                      {program.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                      {program.title}
                    </h3>
                    <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="bg-earth-green bg-opacity-10 rounded-lg p-4">
                      <p className="font-montserrat font-semibold text-earth-green">
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

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              What We <span className="text-deep-purple">Provide</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support packages designed to meet immediate needs and restore dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Medical Supplies
              </h3>
              <p className="font-lato text-gray-600">
                Essential medical supplies, medications, and equipment for healthcare facilities.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🧴</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Hygiene Packs
              </h3>
              <p className="font-lato text-gray-600">
                Personal hygiene items, toiletries, and sanitation supplies for patients and families.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Emotional Support
              </h3>
              <p className="font-lato text-gray-600">
                Counseling, companionship, and spiritual care for patients and their families.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={450} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Transportation
              </h3>
              <p className="font-lato text-gray-600">
                Free transport for emergency cases and regular medical appointments.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={600} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🍲</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Nutritional Support
              </h3>
              <p className="font-lato text-gray-600">
                Nutritious meals and supplements for patients and elderly in care facilities.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={750} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Family Support
              </h3>
              <p className="font-lato text-gray-600">
                Assistance and guidance for families caring for sick or elderly relatives.
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
              "When my mother was admitted to the hospital, we had no money for her medications. The Needy Relief Africa team not only provided the medicines but also arranged free transport for her follow-up visits. Their care and compassion gave us hope during our darkest time."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-deep-purple">FA</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-white">Fatima Abubakar</p>
                <p className="font-lato text-gray-300 text-sm">Beneficiary Family Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-burnt-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Help Us Care for <span className="text-warm-yellow">More People</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Your support enables us to reach more hospitals, care for more patients, and bring dignity to the forgotten.
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
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-burnt-red transition-all duration-500 transform hover:scale-105"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareProgram;