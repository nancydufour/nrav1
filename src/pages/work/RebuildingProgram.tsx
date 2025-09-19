import React from 'react';
import { ArrowLeft, Users, MapPin, Lightbulb, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedCard from '../../components/AnimatedCard';

const RebuildingProgram: React.FC = () => {
  const programs = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healing Programs",
      description: "Faith-based and psychological support through storytelling and counseling initiatives",
      impact: "300+ people supported",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299826/8D4A0346_civ5o2.jpg"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education Support",
      description: "Scholarships, school supplies, and educational infrastructure development",
      impact: "500+ students supported",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299689/_DSC0696_yrkiud.jpg"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Economic Empowerment",
      description: "Entrepreneurship training, microfinance, and employment opportunities",
      impact: "200+ businesses started",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299931/Womens-Economic-Empowerment-Website-1-e1591292184244_kavm9c.jpg"
    }
  ];

  const impactStats = [
    { number: "300+", label: "People Healed", icon: <Heart className="h-6 w-6" /> },
    { number: "500+", label: "Students Supported", icon: <GraduationCap className="h-6 w-6" /> },
    { number: "200+", label: "Businesses Started", icon: <Briefcase className="h-6 w-6" /> },
    { number: "50+", label: "Communities Transformed", icon: <MapPin className="h-6 w-6" /> }
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
            Healing & <span className="text-warm-yellow">Rebuilding</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl animate-fadeInUp stagger-2">
            Addressing root causes of poverty through education, entrepreneurship, and healing programs that restore dignity and hope.
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
              Creating lasting change by addressing the root causes of poverty and despair.
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
              Comprehensive approach to healing, education, and economic empowerment.
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

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-deep-purple">Philosophy</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Every intervention reflects dignity, not pity — ensuring every life touched knows: you matter, you are seen, and you are not forgotten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Dignity First
              </h3>
              <p className="font-lato text-gray-600">
                Every program is designed to restore dignity and self-worth, not create dependency.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Sustainable Solutions
              </h3>
              <p className="font-lato text-gray-600">
                Focusing on long-term solutions that address root causes rather than just symptoms.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Community Partnership
              </h3>
              <p className="font-lato text-gray-600">
                Working with communities as partners, not beneficiaries, to ensure local ownership.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={450} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Holistic Approach
              </h3>
              <p className="font-lato text-gray-600">
                Addressing physical, emotional, spiritual, and economic needs simultaneously.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={600} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Measurable Impact
              </h3>
              <p className="font-lato text-gray-600">
                Tracking progress and outcomes to ensure programs create real, lasting change.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={750} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Empowerment Focus
              </h3>
              <p className="font-lato text-gray-600">
                Building capacity and skills so individuals can become self-reliant and help others.
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
              "I lost everything in a fire and fell into deep depression. Through the healing program, I found hope again. The business training helped me start a small tailoring shop. Now I employ three other women and we're all supporting our families. They didn't just give me money - they gave me back my life and dignity."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-deep-purple">BI</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-white">Blessing Ikechukwu</p>
                <p className="font-lato text-gray-300 text-sm">Entrepreneur & Program Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-warm-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-deep-purple mb-6 animate-fadeInUp">
            Help Us <span className="text-burnt-red">Rebuild Lives</span>
          </h2>
          <p className="font-lato text-xl text-deep-purple mb-8 animate-fadeInUp stagger-2">
            Your support helps us address the root causes of poverty and create lasting transformation in communities across Africa.
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

export default RebuildingProgram;