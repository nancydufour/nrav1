import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Users, Heart } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCard from '../components/AnimatedCard';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';

const ImpactStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stories = [
    {
      id: 1,
      title: "Feeding Hope in Lagos Schools",
      location: "Lagos, Nigeria",
      date: "December 2024",
      beneficiaries: "500+ children",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "In the heart of Lagos, we launched our school feeding program at three primary schools in underserved communities. What started as a simple meal distribution became a transformation story.",
      impact: [
        "500+ children now receive daily nutritious meals",
        "School attendance increased by 40%",
        "Teachers report improved concentration and learning",
        "Parents can focus on work knowing their children are fed"
      ],
      quote: {
        text: "Before the feeding program, my daughter would come home from school crying because she was hungry. Now she comes home excited about what she learned. This program didn't just feed her body, it fed her dreams.",
        author: "Amina, Parent"
      }
    },
    {
      id: 2,
      title: "Bringing Joy to Sick Children",
      location: "Accra, Ghana",
      date: "November 2024",
      beneficiaries: "200+ patients",
      image: "https://images.pexels.com/photos/6647047/pexels-photo-6647047.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "Our hospital outreach program brought care packages, toys, and most importantly, human connection to children battling illness in Accra's largest public hospital.",
      impact: [
        "200+ children received care packages",
        "50+ families got emotional support",
        "Hospital staff received supplies and encouragement",
        "Smiles returned to faces that had forgotten how to hope"
      ],
      quote: {
        text: "When the volunteers came with toys and spent time playing with my son, I saw him smile for the first time in months. They didn't just bring gifts, they brought love.",
        author: "Kwame, Father"
      }
    },
    {
      id: 3,
      title: "Building Dreams: New Playground Opens",
      location: "Nairobi, Kenya",
      date: "October 2024",
      beneficiaries: "1,000+ children",
      image: "https://unsplash.com/photos/NlMGyYADWBA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fFBsYXlncm91bmQlMjBvcGVuaW5nfGVufDB8fHx8MTc1NTY0MzA3NXww&force=true",
      description: "In a community where children played in dangerous streets, we built a safe playground that became the heart of the neighborhood. The opening day was pure magic.",
      impact: [
        "1,000+ children now have a safe place to play",
        "Community gatherings and events increased",
        "Local crime rates decreased by 30%",
        "Parents feel safer letting children play outside"
      ],
      quote: {
        text: "This playground is more than swings and slides. It's where our children dream, laugh, and believe in a better tomorrow. Thank you for giving us back our childhood.",
        author: "Grace, Community Leader"
      }
    },
    {
      id: 4,
      title: "Shelter from the Storm",
      location: "Cape Town, South Africa",
      date: "September 2024",
      beneficiaries: "150+ individuals",
      image: "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "When winter hit Cape Town hard, we mobilized quickly to provide emergency shelter, warm clothing, and hot meals to homeless individuals living on the streets.",
      impact: [
        "150+ people received emergency shelter",
        "300+ warm meals served daily",
        "50+ individuals connected to social services",
        "20+ people found permanent housing solutions"
      ],
      quote: {
        text: "I had been sleeping on the streets for two years. When they gave me a warm bed and treated me like a human being, I remembered that I matter. Now I have a job and my own place.",
        author: "Michael, Beneficiary"
      }
    },
    {
      id: 5,
      title: "Community Kitchen Transforms Lives",
      location: "Kampala, Uganda",
      date: "August 2024",
      beneficiaries: "800+ families",
      image: "https://images.pexels.com/photos/6646971/pexels-photo-6646971.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "We established a community kitchen in one of Kampala's largest slums, providing not just meals but a gathering place where hope is served alongside food.",
      impact: [
        "800+ families receive regular meals",
        "Local women trained in food preparation and nutrition",
        "Community meetings and support groups formed",
        "Children's malnutrition rates dropped by 60%"
      ],
      quote: {
        text: "This kitchen saved my family. When my husband lost his job, we didn't know where our next meal would come from. Now my children are healthy and I've learned skills to help other families too.",
        author: "Sarah, Community Member"
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStory(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStory = (index: number) => {
    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-screen bg-gradient-to-br from-burnt-red to-deep-purple"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Impact <span className="text-warm-yellow">Stories</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Real stories of transformation from the communities we serve. Every story represents lives changed, hope restored, and dignity reclaimed.
          </p>
        </div>
      </ParallaxSection>

      {/* Stories Sections */}
      {stories.map((story, index) => (
        <section
          key={story.id}
          ref={(el) => (sectionRefs.current[index] = el as HTMLDivElement | null)}
          className="relative min-h-screen flex items-center"
        >
          {/* Background Image with Parallax */}
          <div 
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              backgroundImage: `url(${story.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              filter: activeStory === index ? 'brightness(0.7)' : 'brightness(0.5)',
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Story Content */}
                <div className={`transition-all duration-1000 ${
                  activeStory === index 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[-50px] opacity-70'
                }`}>
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-warm-yellow bg-opacity-20 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-warm-yellow" />
                      </div>
                      <span className="font-lato text-gray-600">{story.location}</span>
                      <div className="bg-earth-green bg-opacity-20 p-2 rounded-full">
                        <Calendar className="h-5 w-5 text-earth-green" />
                      </div>
                      <span className="font-lato text-gray-600">{story.date}</span>
                    </div>

                    <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
                      {story.title}
                    </h2>

                    <div className="flex items-center space-x-2 mb-6">
                      <Users className="h-5 w-5 text-deep-purple" />
                      <span className="font-lato font-semibold text-deep-purple">
                        {story.beneficiaries}
                      </span>
                    </div>

                    <p className="font-lato text-lg text-gray-700 leading-relaxed mb-6">
                      {story.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-3">
                        Impact Achieved:
                      </h4>
                      <ul className="space-y-2">
                        {story.impact.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-burnt-red rounded-full mt-2 flex-shrink-0"></div>
                            <span className="font-lato text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-cream rounded-xl p-6 border-l-4 border-burnt-red">
                      <p className="font-lato text-lg text-gray-700 italic mb-3">
                        "{story.quote.text}"
                      </p>
                      <p className="font-montserrat font-semibold text-burnt-red">
                        — {story.quote.author}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Story Stats */}
                <div className={`transition-all duration-1000 delay-300 ${
                  activeStory === index 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-[50px] opacity-70'
                }`}>
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                    <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6 text-center">
                      Story #{story.id}
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-montserrat font-bold text-warm-yellow mb-2">
                          {story.beneficiaries.split(' ')[0]}
                        </div>
                        <p className="font-lato text-gray-600">
                          {story.beneficiaries.split(' ').slice(1).join(' ')}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center bg-cream rounded-xl p-4">
                          <div className="text-2xl font-montserrat font-bold text-earth-green mb-1">
                            {story.impact.length}
                          </div>
                          <p className="font-lato text-sm text-gray-600">Key Impacts</p>
                        </div>
                        <div className="text-center bg-cream rounded-xl p-4">
                          <div className="text-2xl font-montserrat font-bold text-burnt-red mb-1">
                            100%
                          </div>
                          <p className="font-lato text-sm text-gray-600">Success Rate</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <Heart className="h-8 w-8 text-burnt-red mx-auto mb-3" />
                        <p className="font-lato text-gray-700 font-semibold">
                          Lives Transformed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Story Navigation */}
      <ScrollProgressIndicator
        stories={stories}
        activeStory={activeStory}
        onStorySelect={scrollToStory}
      />

      {/* Summary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-deep-purple">Collective Impact</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              These stories represent just a fraction of the lives we've touched together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCard delay={0} className="text-center">
              <div className="bg-warm-yellow bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-montserrat font-bold text-warm-yellow">
                  5
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-2">
                Major Projects
              </h3>
              <p className="font-lato text-gray-600">
                Completed across 5 countries
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="text-center">
              <div className="bg-earth-green bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-montserrat font-bold text-earth-green">
                  2K+
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-2">
                Lives Touched
              </h3>
              <p className="font-lato text-gray-600">
                Direct beneficiaries served
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="text-center">
              <div className="bg-burnt-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-montserrat font-bold text-burnt-red">
                  100%
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-2">
                Success Rate
              </h3>
              <p className="font-lato text-gray-600">
                Projects completed successfully
              </p>
            </AnimatedCard>

            <AnimatedCard delay={450} className="text-center">
              <div className="bg-deep-purple bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl font-montserrat font-bold text-deep-purple">
                  ∞
                </div>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-2">
                Hope Restored
              </h3>
              <p className="font-lato text-gray-600">
                Immeasurable impact on dignity
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Be Part of the Next <span className="text-warm-yellow">Story</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Your support helps us write new chapters of hope, healing, and transformation across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <a
              href="/donate-options"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 animate-float"
            >
              Donate Now
            </a>
            <a
              href="/get-involved"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-500 transform hover:scale-105"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactStories;