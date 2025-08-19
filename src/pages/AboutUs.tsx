import React, { useEffect, useRef } from 'react';
import { Heart, Target, Users, Globe } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import ParallaxSection from '../components/ParallaxSection';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-r from-deep-purple to-burnt-red"
      >
        {/* <div className="absolute h-[30rem] inset-0 bg-black bg-opacity-20"></div> */}
        <div className="relative pt-[10rem] z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            About <span className="text-warm-yellow">Needy Relief Africa</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Born from a simple but urgent truth: no one should have to beg for dignity.
          </p>
        </div>
      </ParallaxSection>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-image animate-slideInLeft">
              <img
                src="https://unsplash.com/photos/Glt7d_fofLQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fEElMjB2b2x1bnRlZXIlMjBrbmVlbGluZyUyMHRvJTIwc2VydmUlMjBmb29kJTIwdG8lMjBhJTIwc21pbGluZyUyMGNoaWxkfGVufDB8fHx8MTc1NTYzNDM3Nnww&force=true"
                alt="Children in Africa"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="story-content animate-slideInRight">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6 animate-fadeInUp">
                Our <span className="text-burnt-red border-b-4 border-warm-yellow">Story</span>
              </h2>
              <div className="space-y-6 font-lato text-lg text-gray-700 leading-relaxed animate-fadeInUp stagger-1">
                <p className="animate-fadeInUp stagger-2">
                  Needy Relief Africa was born from a simple but urgent truth: no one should have to beg for dignity. Across Africa, millions of children go to bed hungry, elderly people die unseen, and entire communities suffer in silence.
                </p>
                <p className="font-semibold text-deep-purple animate-fadeInUp stagger-3">
                  We are here to change that.
                </p>
                <div className="space-y-4 animate-fadeInUp stagger-4">
                  <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-burnt-red mt-1 flex-shrink-0" />
                    <p>We don't just hand out food — we build sustainable feeding programs.</p>
                  </div>
                  <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Target className="h-6 w-6 text-earth-green mt-1 flex-shrink-0" />
                    <p>We don't just visit hospitals — we show up consistently with love, supplies, and emotional care.</p>
                  </div>
                  <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Users className="h-6 w-6 text-warm-yellow mt-1 flex-shrink-0" />
                    <p>We don't just talk about change — we create it, one act of kindness at a time.</p>
                  </div>
                </div>
                <p className="animate-fadeInUp stagger-5">
                  Founded under the H.E.R. Foundation, Needy Relief Africa is a grassroots-driven humanitarian movement dedicated to feeding, healing, sheltering, and rebuilding communities across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Belief Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            {/* <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our Core <span className="text-deep-purple border-b-4 border-warm-yellow">Belief</span>
            </h2> */}
            <div className="max-w-4xl mx-auto">
              <p className="font-montserrat font-semibold text-2xl md:text-3xl text-burnt-red leading-relaxed animate-scaleIn stagger-2">
                Every life matters. Every person deserves to be seen. And together, we can create an Africa where dignity is a right, not a privilege.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-burnt-red bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-12 transition-transform duration-500">
                <Heart className="h-8 w-8 text-burnt-red" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Every Life Matters
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                We believe that every person, regardless of their circumstances, has inherent worth and deserves to live with dignity and hope.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-earth-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-12 transition-transform duration-500">
                <Users className="h-8 w-8 text-earth-green" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Community First
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                We work with communities, not for them, ensuring that our interventions are sustainable and driven by local needs and wisdom.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-warm-yellow bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:rotate-12 transition-transform duration-500">
                <Globe className="h-8 w-8 text-warm-yellow" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Dignity Over Charity
              </h3>
              <p className="font-lato text-gray-600 leading-relaxed">
                We don't give handouts; we restore dignity. Every intervention is designed to empower, uplift, and honor the people we serve.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Ready to Make a <span className="text-warm-yellow">Difference?</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Join us in creating an Africa where every person is seen, valued, and empowered to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <a
              href="/get-involved"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 animate-float"
            >
              Get Involved Today
            </a>
            <a
              href="/donate-options"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-500 transform hover:scale-105"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;