import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCard from '../components/AnimatedCard';
import { Package, Gift, ArrowRight } from 'lucide-react';
import ShippingModal from '../components/ShippingModal';

const GreenNoseDetails: React.FC = () => {
  // const merchItems = [
  //   {
  //     id: 1,
  //     name: 'Official Green Nose',
  //     price: '₦1,000',
  //     image:
  //       'https://images.pexels.com/photos/1509194/pexels-photo-1509194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder, replace with actual green nose
  //     description: 'The iconic foam nose. Wear it to show your support!',
  //   },
  //   {
  //     id: 2,
  //     name: 'Green Nose Day 2026 T-Shirt',
  //     price: '₦5,000',
  //     image:
  //       'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
  //     description: 'Limited edition 100% cotton tee for the event.',
  //   },
  //   {
  //     id: 3,
  //     name: 'NRA Supporter Wristband',
  //     price: '₦500',
  //     image:
  //       'https://images.pexels.com/photos/1781603/pexels-photo-1781603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
  //     description: 'A stylish green wristband to show your support year-round.',
  //   },
  //   {
  //     id: 4,
  //     name: 'NRA Supporter Cap',
  //     price: '₦3,500',
  //     image:
  //       'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Placeholder
  //     description: 'Keep the sun off and the kindness on.',
  //   },
  // ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1762592193/WhatsApp_Image_2025-10-03_at_13.45.46_b52053b5_czxxub.jpg',
      alt: 'Person wearing a green nose',
      position:
        'absolute top-0 -left-16 w-48 h-64 lg:w-64 lg:h-80',
      rotation: 'transform -rotate-12',
    },
    {
      src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1762592198/WhatsApp_Image_2025-10-03_at_13.45.47_cc5b6f5e_nlvob3.jpg',
      alt: 'Child smiling with a green nose',
      position:
        'absolute bottom-0 -left-10 w-48 h-48 lg:w-56 lg:h-56',
      rotation: 'transform rotate-6',
    },
    {
      src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1762592245/WhatsApp_Image_2025-10-03_at_13.45.47_b4c486da_nexdbv.jpg',
      alt: 'Group with green noses',
      position:
        'absolute top-0 -right-16 w-56 h-40 lg:w-72 lg:h-56',
      rotation: 'transform rotate-3',
    },
    {
      src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1762592302/WhatsApp_Image_2025-10-03_at_13.45.46_85562f3a_dwopw2.jpg',
      alt: 'Woman laughing with a green nose',
      position:
        'absolute bottom-0 -right-10 w-48 h-64 lg:w-64 lg:h-72',
      rotation: 'transform -rotate-3',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.3}
        className="relative h-[30rem] bg-gradient-to-br from-earth-green to-warm-yellow"
      >
        <div className="absolute h-[30rem] inset-0 bg-black bg-opacity-30"></div>
        <div className="relative pt-[10rem] z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Get Your <span className="text-earth-green">Green Nose</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Wear the fun. Share the kindness. Change a life.
          </p>
        </div>
      </ParallaxSection>

      {/* What is Green Nose Day? */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
                What is{' '}
                <span className="text-earth-green">Green Nose Day?</span>
              </h2>
              <div className="space-y-6 font-lato text-lg text-gray-700 leading-relaxed">
                <p>
                  Green Nose Day is more than just a fundraiser; it's a
                  continent-wide movement. On May 25th (Africa Day), we unite
                  to wear a Green Nose, sparking conversations, spreading joy,
                  and raising life-changing funds for children and communities.
                </p>
                <p>
                  <span className="font-bold text-deep-purple">
                    Why "Green"?
                  </span>{' '}
                  Green represents growth, hope, and the rich potential of
                  Africa. When you buy and wear a green nose, you're not just
                  being playful—you're planting a seed of change.
                </p>
                <p>
                  Every naira, shilling, and cedi raised from merchandise and
                  donations stays within the country it was raised to fund
                  local projects. Your purchase directly impacts your own
                  community.
                </p>
              </div>
            </div>
            <div className="animate-slideInRight">
              <img
                src="https://images.pexels.com/photos/1153976/pexels-photo-1153976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Happy children in Africa"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              How to <span className="text-deep-purple">Join</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard
              delay={0}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-6xl mb-4 animate-float">1.</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Get Your Merch
              </h3>
              <p className="font-lato text-gray-600">
                Buy an official Green Nose, T-shirt, or wristband from our shop
                below. All profits fund local projects.
              </p>
            </AnimatedCard>
            <AnimatedCard
              delay={150}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-6xl mb-4 animate-float">2.</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Wear & Share
              </h3>
              <p className="font-lato text-gray-600">
                On May 25th, wear your nose proudly! Post a selfie with the
                hashtag #GreenNoseDayAfrica to spread the word.
              </p>
            </AnimatedCard>
            <AnimatedCard
              delay={300}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-6xl mb-4 animate-float">3.</div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Give or Fundraise
              </h3>
              <p className="font-lato text-gray-600">
                Make a direct donation or start your own Green Nose Day
                fundraising event at your school, office, or church.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Get Your <span className="text-earth-green">Official Merch</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              100% of profits go directly to funding projects in your country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {merchItems.map((item, index) => (
              <AnimatedCard
                key={item.id}
                delay={index * 100}
                className="group bg-cream rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-deep-purple mb-2">
                    {item.name}
                  </h3>
                  <p className="font-lato text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-montserrat font-bold text-lg text-earth-green">
                      {item.price}
                    </span>
                    <button className="bg-earth-green text-white px-4 py-2 rounded-full font-montserrat font-semibold text-sm hover:bg-opacity-80 transition-all transform hover:scale-105">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* NEW "Get Your Nose" Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-cream rounded-3xl shadow-2xl min-h-[600px] lg:min-h-[500px] flex items-center justify-center p-8">
            {/* Background Images Collage */}
            {images.map((img, index) => (
              <AnimatedCard
                key={index}
                delay={index * 150}
                className={`${img.position} ${img.rotation} hidden md:block opacity-60 md:opacity-100 rounded-lg shadow-xl overflow-hidden`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </AnimatedCard>
            ))}

            {/* Central CTA Content */}
            <div className="relative z-10 text-center max-w-lg p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Get Your <span className="text-earth-green">Official Nose</span>
              </h2>
              <p className="font-lato text-lg text-gray-700 mb-8">
                100% of profits go directly to funding projects in your country.
                Wear the fun, share the kindness, and be the change.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-earth-green text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 mx-auto"
              >
                <Package className="h-6 w-6" />
                <span>Order Your Nose Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-burnt-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Can't Buy Merch? <span className="text-warm-yellow">Donate!</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            You can still make a huge impact by donating directly to the Green
            Nose Day fund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <Link
              to="/donate-options"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 flex items-center space-x-2 animate-float"
            >
              <Gift className="h-5 w-5" />
              <span>Donate to the Fund</span>
            </Link>
            <Link
              to="/events"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-burnt-red transition-all duration-500 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>See Our Events</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {isModalOpen && <ShippingModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default GreenNoseDetails;