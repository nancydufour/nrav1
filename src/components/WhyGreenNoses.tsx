import { HiUserCircle, HiCamera, HiHeart } from 'react-icons/hi';
import AnimatedCard from '../components/AnimatedCard';

// ... your other imports
// Make sure you have your AnimatedCard component available

const WhyGreenNoses = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
            Why <span className="text-earth-green">Green Noses?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* --- Updated, more engaging copy --- */}
            <p className="font-lato text-xl text-gray-700 leading-relaxed">
              It's more than just a green nose—it's a symbol. A fun, visible way to show you care.
              On May 23rd, join the movement: wear the nose, share your story, and help fund vital projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* --- CARD 1: Wear It Proud --- */}
          <AnimatedCard delay={0} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            {/* --- Modern Icon Replacement --- */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-earth-green/10 mx-auto mb-6">
              <HiUserCircle className="h-8 w-8 text-earth-green" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
              Wear It Proud
            </h3>
            <p className="font-lato text-gray-600">
              Your green nose shows the world that you care about Africa and its people.
            </p>
          </AnimatedCard>

          {/* --- CARD 2: Share Your Story --- */}
          <AnimatedCard delay={150} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            {/* --- Modern Icon Replacement --- */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-earth-green/10 mx-auto mb-6">
              <HiCamera className="h-8 w-8 text-earth-green" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
              Share Your Story
            </h3>
            <p className="font-lato text-gray-600">
              Post your green nose photos and inspire others to join the movement.
            </p>
          </AnimatedCard>

          {/* --- CARD 3: Make Change Happen --- */}
          <AnimatedCard delay={300} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            {/* --- Modern Icon Replacement --- */}
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-earth-green/10 mx-auto mb-6">
              <HiHeart className="h-8 w-8 text-earth-green" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
              Make Change Happen
            </h3>
            <p className="font-lato text-gray-600">
              Every donation stays in your country to fund local community projects.
            </p>
          </AnimatedCard>

        </div>
      </div>
    </section>
  );
};

export default WhyGreenNoses;