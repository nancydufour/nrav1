import React from 'react';
import { ArrowLeft, Users, MapPin, Gamepad2, Heart, Shield, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedCard from '../../components/AnimatedCard';

const ChildrenProgram: React.FC = () => {
  const programs = [
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Safe Playgrounds",
      description: "Child-friendly parks and recreational areas in low-income communities",
      impact: "15+ playgrounds built",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734797/SO2_jufv7j.jpg"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Green Nose Day Africa",
      description: "Annual fundraising event for child-focused projects across the continent",
      impact: "1000+ children benefited",
      image: "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trauma Support",
      description: "Psychosocial support for children who have experienced trauma or abandonment",
      impact: "200+ children supported",
      image: "https://images.pexels.com/photos/6646971/pexels-photo-6646971.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const impactStats = [
    { number: "15+", label: "Playgrounds Built", icon: <Gamepad2 className="h-6 w-6" /> },
    { number: "1,000+", label: "Children Served", icon: <Users className="h-6 w-6" /> },
    { number: "25+", label: "Communities Reached", icon: <MapPin className="h-6 w-6" /> },
    { number: "200+", label: "Trauma Support Cases", icon: <Heart className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-warm-yellow"
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
            Safe Spaces for <span className="text-warm-yellow">Children</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl animate-fadeInUp stagger-2">
            Creating safe, joyful spaces where children can play, learn, and heal while building a foundation for their future.
          </p>
        </div>
      </ParallaxSection>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-deep-purple">Impact</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Creating safe havens where children can be children, regardless of their circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 150} className="text-center bg-cream rounded-2xl p-8">
                <div className="bg-deep-purple bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-deep-purple">
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
              Comprehensive support for children's physical, emotional, and social development.
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
                    <div className="bg-deep-purple bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-deep-purple">
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

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Creating <span className="text-earth-green">Safe Spaces</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Every child deserves a place to play, learn, and grow in safety and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🏞️</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Playground Equipment
              </h3>
              <p className="font-lato text-gray-600">
                Safe, age-appropriate play equipment including swings, slides, and climbing structures.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Creative Spaces
              </h3>
              <p className="font-lato text-gray-600">
                Art and craft areas where children can express themselves and develop creativity.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Learning Centers
              </h3>
              <p className="font-lato text-gray-600">
                Educational spaces with books, games, and learning materials for skill development.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={450} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Counseling Support
              </h3>
              <p className="font-lato text-gray-600">
                Professional counseling and therapy for children dealing with trauma or difficult circumstances.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={600} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Sports Programs
              </h3>
              <p className="font-lato text-gray-600">
                Organized sports activities that promote teamwork, fitness, and healthy competition.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={750} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Cultural Activities
              </h3>
              <p className="font-lato text-gray-600">
                Music, dance, and cultural programs that celebrate heritage and build confidence.
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
              "Before the playground was built, our children had nowhere safe to play. They would play in the streets, which was dangerous. Now they have a beautiful, safe place to be children. You can hear their laughter from blocks away. This playground has brought our whole community together."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-deep-purple">MA</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-white">Mrs. Adunni</p>
                <p className="font-lato text-gray-300 text-sm">Community Leader & Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-warm-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-deep-purple mb-6 animate-fadeInUp">
            Help Us Create More <span className="text-burnt-red">Safe Spaces</span>
          </h2>
          <p className="font-lato text-xl text-deep-purple mb-8 animate-fadeInUp stagger-2">
            Every child deserves a place to play, learn, and grow. Your support helps us build more safe spaces for children across Africa.
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

export default ChildrenProgram;