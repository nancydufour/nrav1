import React from 'react';
import { ArrowLeft, Users, MapPin, Calendar, Heart, Utensils, School, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedCard from '../../components/AnimatedCard';

const HungerProgram: React.FC = () => {
  const programs = [
    {
      icon: <School className="h-8 w-8" />,
      title: "School Feeding Programs",
      description: "Daily nutritious meals for children in underserved schools",
      impact: "500+ children fed daily",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734811/SO8_u3nil8.jpg"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Community Kitchens",
      description: "Permanent cooking facilities in high-need communities",
      impact: "800+ families served weekly",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734815/SO10_i9fimz.jpg"
    },
    // {
    //   icon: <Truck className="h-8 w-8" />,
    //   title: "Mobile Food Trucks",
    //   description: "Reaching remote areas and emergency situations",
    //   impact: "200+ locations visited monthly",
    //   image: "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    // }
  ];

  const impactStats = [
    { number: "1,500+", label: "Children Fed Daily", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Schools Reached", icon: <School className="h-6 w-6" /> },
    { number: "25+", label: "Communities Served", icon: <MapPin className="h-6 w-6" /> },
    { number: "40%", label: "Attendance Increase", icon: <Heart className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-br from-warm-yellow to-earth-green"
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
            Alleviating <span className="text-warm-yellow">Hunger</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl animate-fadeInUp stagger-2">
            Fighting hunger where it starts — ensuring no child learns on an empty stomach and no family goes to bed hungry.
          </p>
        </div>
      </ParallaxSection>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-warm-yellow">Impact</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Real numbers showing the difference we're making in fighting hunger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 150} className="text-center bg-cream rounded-2xl p-8">
                <div className="bg-warm-yellow bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-warm-yellow">
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
              Multiple approaches to ensure sustainable food security for communities.
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
                    <div className="bg-warm-yellow bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-warm-yellow">
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

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              How We <span className="text-burnt-red">Work</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures sustainable impact and community ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="text-center">
              <div className="bg-burnt-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-burnt-red">1</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Community Assessment
              </h3>
              <p className="font-lato text-gray-600">
                We work with local leaders to identify the most vulnerable families and understand specific needs.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="text-center">
              <div className="bg-burnt-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-burnt-red">2</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Program Implementation
              </h3>
              <p className="font-lato text-gray-600">
                We establish feeding programs with local participation, ensuring cultural appropriateness and sustainability.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="text-center">
              <div className="bg-burnt-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-burnt-red">3</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Monitoring & Growth
              </h3>
              <p className="font-lato text-gray-600">
                We track impact, gather feedback, and gradually transfer ownership to the community for long-term success.
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
              "Before the feeding program started at our school, many children would come to class hungry and couldn't concentrate. Now, attendance has increased by 40% and our students are performing much better. The community kitchen has also helped many families during difficult times."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-deep-purple">MO</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-white">Mrs. Olumide</p>
                <p className="font-lato text-gray-300 text-sm">Head Teacher, Community Primary School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-warm-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-deep-purple mb-6 animate-fadeInUp">
            Help Us Feed More <span className="text-burnt-red">Children</span>
          </h2>
          <p className="font-lato text-xl text-deep-purple mb-8 animate-fadeInUp stagger-2">
            Your support can provide nutritious meals and hope to children and families across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <Link
              to="/donate-options"
              className="bg-deep-purple text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="bg-transparent border-2 border-deep-purple text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-deep-purple hover:text-white transition-all duration-500 transform hover:scale-105"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HungerProgram;