import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Heart, Target, Users, Globe } from 'lucide-react';
import { X } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';
import ParallaxSection from '../components/ParallaxSection';

const AimsObjectivesCards: React.FC = () => {
  const [selectedObjective, setSelectedObjective] = useState<number | null>(null);

  const objectives = [
    {
      id: 1,
      title: "Alleviate Hunger and Malnutrition",
      summary: "Establishing sustainable feeding programs and community kitchens to ensure no child learns on an empty stomach.",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734813/SO1_juzm58.jpg",
      color: "bg-warm-yellow",
      details: [
        "Establish sustainable feeding programs, starting with primary school children in underserved communities.",
        "Set up community kitchens, food banks, and mobile food trucks to reach those in slums, IDP camps, hospitals, orphanages, and rural villages.",
        "Reduce child starvation and promote school attendance by ensuring no child learns on an empty stomach."
      ]
    },
    {
      id: 2,
      title: "Support the Sick, Elderly, and Forgotten",
      summary: "Providing medical supplies, transportation, and dignity visits to those who need care most.",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734793/About4_uzfjoe.jpg",
      color: "bg-burnt-red",
      details: [
        "Organize regular outreach to hospitals, care homes, and psychiatric facilities with medical supplies, hygiene packs, and emotional support.",
        "Provide free transportation for rural patients in need of urgent care.",
        "Offer dignity visits and care support to the elderly and neglected in society."
      ]
    },
    {
      id: 3,
      title: "Provide Shelter and Support for the Homeless",
      summary: "Building temporary shelters and distributing care kits to help vulnerable individuals reintegrate into society.",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758299435/1214_shelter-devens01_kag0ce.jpg",
      color: "bg-earth-green",
      details: [
        "Partner with local communities to build temporary shelter spaces for displaced individuals and homeless families.",
        "Distribute blankets, clothes, and care kits to those living under bridges, on the streets, or in abandoned areas.",
        "Collaborate with social workers to reintegrate vulnerable people into society with dignity."
      ]
    },
    {
      id: 4,
      title: "Build Safe Spaces for Children",
      summary: "Creating child-friendly parks and recreational areas while providing psychosocial support for traumatized children.",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734808/Image1_yjmcae.jpg",
      color: "bg-deep-purple",
      details: [
        "Construct child-friendly parks, playgrounds, and recreational areas in low-income communities.",
        "Launch \"Green Nose Day Africa\" as an annual event to raise funds across the continent for child-focused projects.",
        "Provide psychosocial support and safe spaces for children who have experienced trauma, abuse, or abandonment."
      ]
    },
    {
      id: 5,
      title: "Inspire a Culture of Giving Across Africa",
      summary: "Mobilizing celebrities, influencers, and communities to participate in acts of kindness and donation campaigns.",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1758298730/8D4A0426_rs62tr.jpg",
      color: "bg-warm-yellow",
      details: [
        "Mobilize celebrities, influencers, schools, and individuals to participate in acts of kindness and donation campaigns.",
        "Launch community volunteer programs and empower citizens to become agents of relief and restoration in their own villages.",
        "Promote transparency, impact tracking, and public trust through honest reporting and real-time storytelling."
      ]
    },
    {
      id: 6,
      title: "Heal, Rebuild and Reform Through Grassroots Action",
      summary: "Addressing root causes of poverty through education, entrepreneurship, and faith-based healing programs.",
      image: "https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734813/SO1_juzm58.jpg",
      color: "bg-burnt-red",
      details: [
        "Provide emotional, spiritual, and psychological support through faith-based healing programs and storytelling initiatives.",
        "Address root causes of poverty by partnering on education, entrepreneurship, and employment opportunities.",
        "Ensure every intervention reflects dignity, not pity — and that every life touched knows: you matter, you are seen, and you are not forgotten."
      ]
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {objectives.map((objective, index) => (
          <AnimatedCard 
            key={objective.id} 
            delay={index * 100} 
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            onClick={() => setSelectedObjective(objective.id)}
          >
            <div className={`w-12 h-12 ${objective.color} bg-opacity-20 rounded-full flex items-center justify-center mb-4`}>
              <div className={`w-6 h-6 ${objective.color} rounded-full`}></div>
            </div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-3">
              {objective.title}
            </h3>
            <p className="font-lato text-gray-600 mb-4 leading-relaxed">
              {objective.summary}
            </p>
            <button className="text-deep-purple font-montserrat font-semibold hover:underline transition-colors duration-300">
              Learn More →
            </button>
          </AnimatedCard>
        ))}
      </div>

      {/* Modal */}
      {selectedObjective && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="h-64 lg:h-full">
                <img 
                  src={objectives.find(obj => obj.id === selectedObjective)?.image} 
                  alt={objectives.find(obj => obj.id === selectedObjective)?.title}
                  className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-montserrat font-bold text-2xl text-charcoal">
                    {objectives.find(obj => obj.id === selectedObjective)?.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedObjective(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {objectives.find(obj => obj.id === selectedObjective)?.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-deep-purple rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-lato text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/donate-options"
                    className="bg-deep-purple text-white px-6 py-3 rounded-full font-montserrat font-semibold text-center hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    Support This Cause
                  </a>
                  <button
                    onClick={() => setSelectedObjective(null)}
                    className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-montserrat font-semibold hover:border-deep-purple hover:text-deep-purple transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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
                src="https://res.cloudinary.com/drnwxb8cm/image/upload/v1756734802/SO6_gssywc.jpg"
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
                  Needy Relief Africa exists to restore dignity, hope, and healing to communities across Africa by meeting urgent humanitarian needs and building long-term solutions — one meal, one child, one village at a time.

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

      {/* Aims and Objectives Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Our <span className="text-deep-purple">Aims & Objectives</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-lato text-lg text-gray-700 leading-relaxed mb-8">
                Needy Relief Africa exists to restore dignity, hope, and healing to communities across Africa by meeting urgent humanitarian needs and building long-term solutions — one meal, one child, one village at a time.
              </p>
              <p className="font-montserrat font-semibold text-xl text-burnt-red">
                Our aims and objectives are as follows:
              </p>
            </div>
          </div>

          <AimsObjectivesCards/>

          {/* Green Nose Day Special Section */}
          <div className="mt-16">
            <AnimatedCard delay={900} className="bg-gradient-to-r from-earth-green to-warm-yellow rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="font-montserrat font-bold text-2xl mb-4">
                  Green Nose Day Africa - Special Initiatives
                </h3>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold mb-3">A Continent-Wide Movement</h4>
                    <ul className="space-y-2 font-lato text-sm">
                      <li>• The Date: On May 25th (Africa Day), we unite to wear a Green Nose, sparking joy and raising life-changing funds for our children.</li>
                      <li>• The Meaning: Green symbolizes growth, hope, and potential. Wearing a nose isn't just playful—it’s planting a seed of change across the continent.</li>
                      <li>• The Impact: Every donation stays within the country it was raised. Your purchase directly funds local projects and impacts your own community.  </li>
                    </ul>
                  </div>
                  {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-montserrat font-semibold mb-3">Donation & Merchandise</h4>
                    <ul className="space-y-2 font-lato text-sm">
                      <li>• Simple donation rails: web cards, phone/text donations</li>
                      <li>• Text "TEN" to 70702 to give ₦100</li>
                      <li>• Merch drops: green noses, T-shirts via e-shop</li>
                    </ul>
                  </div> */}
                </div>
              </div>
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