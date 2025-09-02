import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Handshake, ArrowRight, DollarSign, Calendar, Building } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const GetInvolved: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.4}
        className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-earth-green"
      >
        <section className="relative h-[30rem]  bg-transparent">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6">
              Get <span className="text-cream">Involved</span>
            </h1>
            <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto">
              Join the movement to restore dignity and hope across Africa. Every action matters, every voice counts.
            </p>
          </div>
        </section>
      </ParallaxSection>

      {/* Three Main Ways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Three Ways to <span className="text-deep-purple">Make a Difference</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the path that resonates with your heart and your capacity to create change.
            </p>
          </div>

          <div className="space-y-8">
            {/* Donate Banner */}
            <Link
              to="/donate-options"
              className="group block bg-gradient-to-r from-warm-yellow to-yellow-400 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-16 w-16 text-deep-purple" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-deep-purple mb-4">
                    Donate
                  </h3>
                  <p className="font-lato text-xl text-deep-purple mb-6">
                    Your giving changes lives — literally. Whether it's ₦5,000 or $50, every contribution helps us feed, shelter, and restore dignity to someone in need.
                  </p>
                  <div className="flex items-center text-deep-purple font-montserrat font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Start Giving Today</span>
                    <ArrowRight className="h-6 w-6 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Volunteer Banner */}
            <Link
              to="/contact"
              className="group block bg-gradient-to-r from-earth-green to-green-600 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
                    Volunteer
                  </h3>
                  <p className="font-lato text-xl text-gray-100 mb-6">
                    Be part of the movement. Join our on-ground projects, from food distribution to hospital outreach, and witness the impact first-hand.
                  </p>
                  <div className="flex items-center text-white font-montserrat font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Join Our Team</span>
                    <ArrowRight className="h-6 w-6 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Partner Banner */}
            <Link
              to="/contact"
              className="group block bg-gradient-to-r from-burnt-red to-red-600 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="h-16 w-16 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
                    Partner
                  </h3>
                  <p className="font-lato text-xl text-gray-100 mb-6">
                    Businesses, NGOs, schools, and faith communities — we invite you to collaborate with us. Together, we can multiply our reach and impact.
                  </p>
                  <div className="flex items-center text-white font-montserrat font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    <span>Let's Collaborate</span>
                    <ArrowRight className="h-6 w-6 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Ways to Help */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              More Ways to <span className="text-burnt-red">Help</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Every form of support makes a difference in someone's life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-warm-yellow bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-warm-yellow" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Monthly Giving
              </h3>
              <p className="font-lato text-gray-600 mb-6">
                Set up recurring donations to provide consistent support for our ongoing programs.
              </p>
              <Link
                to="/donate-options"
                className="text-warm-yellow font-montserrat font-semibold hover:underline"
              >
                Set Up Monthly Giving →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-earth-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-earth-green" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Event Planning
              </h3>
              <p className="font-lato text-gray-600 mb-6">
                Organize fundraising events in your community to support our mission.
              </p>
              <Link
                to="/contact"
                className="text-earth-green font-montserrat font-semibold hover:underline"
              >
                Plan an Event →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-burnt-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-burnt-red" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Corporate Partnership
              </h3>
              <p className="font-lato text-gray-600 mb-6">
                Partner with us for CSR initiatives and employee engagement programs.
              </p>
              <Link
                to="/contact"
                className="text-burnt-red font-montserrat font-semibold hover:underline"
              >
                Explore Partnership →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Volunteer <span className="text-deep-purple">Opportunities</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Find the perfect way to contribute your time and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6">
                On-Ground Volunteers
              </h3>
              <ul className="space-y-4 font-lato text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-burnt-red rounded-full mt-2 flex-shrink-0"></div>
                  <span>Food distribution in schools and communities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-burnt-red rounded-full mt-2 flex-shrink-0"></div>
                  <span>Hospital and care home visits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-burnt-red rounded-full mt-2 flex-shrink-0"></div>
                  <span>Playground and shelter construction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-burnt-red rounded-full mt-2 flex-shrink-0"></div>
                  <span>Event planning and coordination</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6">
                Remote Support
              </h3>
              <ul className="space-y-4 font-lato text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social media content creation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Grant writing and research</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Web design and technical support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Translation and documentation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-deep-purple text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Change <span className="text-warm-yellow">Lives?</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8">
            Your involvement, no matter how big or small, makes a real difference in the lives of vulnerable people across Africa.
          </p>
          <Link
            to="/contact"
            className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;