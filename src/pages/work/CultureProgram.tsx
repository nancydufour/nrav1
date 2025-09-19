import React from 'react';
import { ArrowLeft, Users, MapPin, Heart, Megaphone, HandHeart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../../components/ParallaxSection';
import AnimatedCard from '../../components/AnimatedCard';

const CultureProgram: React.FC = () => {
  const programs = [
    // {
    //   icon: <Megaphone className="h-8 w-8" />,
    //   title: "Celebrity Mobilization",
    //   description: "Engaging celebrities and influencers to amplify our message and inspire giving",
    //   impact: "50+ influencers engaged",
    //   image: "https://images.pexels.com/photos/6646971/pexels-photo-6646971.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    // },
    {
      icon: <HandHeart className="h-8 w-8" />,
      title: "Community Volunteer Programs",
      description: "Training and empowering local volunteers to become agents of change in their communities",
      impact: "500+ volunteers trained",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758300435/8D4A0475_rprohx.jpg"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Transparency Initiative",
      description: "Real-time impact tracking and storytelling to build public trust and accountability",
      impact: "100% transparency rate",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758300678/Transparency_zxywsx.jpg"
    }
  ];

  const impactStats = [
    { number: "50+", label: "Influencers Engaged", icon: <Star className="h-6 w-6" /> },
    { number: "500+", label: "Volunteers Trained", icon: <Users className="h-6 w-6" /> },
    { number: "100+", label: "Schools Participating", icon: <MapPin className="h-6 w-6" /> },
    { number: "1M+", label: "People Reached", icon: <Megaphone className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-br from-burnt-red to-warm-yellow"
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
            Culture of <span className="text-warm-yellow">Giving</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl animate-fadeInUp stagger-2">
            Inspiring a movement of generosity across Africa by mobilizing communities, celebrities, and individuals to create lasting change.
          </p>
        </div>
      </ParallaxSection>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-burnt-red">Reach</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Building a continent-wide movement of compassion and action.
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
              Our <span className="text-earth-green">Initiatives</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Multi-faceted approach to building a sustainable culture of giving.
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

      {/* How We Build Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Building a <span className="text-deep-purple">Movement</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to creating lasting change in how Africa gives and cares for its own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Social Media Campaigns
              </h3>
              <p className="font-lato text-gray-600">
                Leveraging digital platforms to spread awareness and inspire action across the continent.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Educational Programs
              </h3>
              <p className="font-lato text-gray-600">
                Teaching the importance of giving and community support in schools and universities.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Community Partnerships
              </h3>
              <p className="font-lato text-gray-600">
                Working with local leaders and organizations to embed giving into community culture.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={450} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Storytelling Initiatives
              </h3>
              <p className="font-lato text-gray-600">
                Sharing powerful stories of transformation to inspire others to take action.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={600} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Recognition Programs
              </h3>
              <p className="font-lato text-gray-600">
                Celebrating and recognizing individuals and organizations that exemplify giving.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={750} className="bg-cream rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Impact Transparency
              </h3>
              <p className="font-lato text-gray-600">
                Providing clear, real-time reporting on how donations create change and build trust.
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
              "When I first heard about Needy Relief Africa, I was inspired by their transparency and genuine care for people. As a musician, I wanted to use my platform to help. Now, through our partnership, we've raised funds for three new playgrounds and inspired thousands of my fans to start giving back to their communities."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-deep-purple">DA</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-semibold text-white">David Adeleke</p>
                <p className="font-lato text-gray-300 text-sm">Celebrity Partner & Advocate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-burnt-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Join the <span className="text-warm-yellow">Movement</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Help us build a culture where giving is not just an act, but a way of life across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <Link
              to="/donate-options"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1"
            >
              Start Giving Today
            </Link>
            <Link
              to="/get-involved"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-burnt-red transition-all duration-500 transform hover:scale-105"
            >
              Become an Advocate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureProgram;