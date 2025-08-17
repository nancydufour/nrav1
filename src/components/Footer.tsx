import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-10 w-10 text-burnt-red" />
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-2xl">
                  Needy Relief
                </span>
                <span className="font-montserrat font-semibold text-warm-yellow">
                  AFRICA
                </span>
              </div>
            </Link>
            <p className="font-lato text-gray-300 mb-6 max-w-md">
              Restoring dignity, feeding hope, and changing Africa — one meal, one child, one village at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-warm-yellow transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-yellow transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-lato">
              <li><Link to="/about" className="text-gray-300 hover:text-warm-yellow transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-gray-300 hover:text-warm-yellow transition-colors">Our Work</Link></li>
              <li><Link to="/stories" className="text-gray-300 hover:text-warm-yellow transition-colors">Impact Stories</Link></li>
              <li><Link to="/green-nose-day" className="text-gray-300 hover:text-warm-yellow transition-colors">Green Nose Day</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-warm-yellow transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 font-lato text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm-yellow" />
                <span>info@needyreliefafrica.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm-yellow" />
                <span>+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-warm-yellow" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-lato text-gray-300">
            © 2025 Needy Relief Africa. All rights reserved. | Powered by dignity, hope, and love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;