import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Who We Are',
      children: [
        { name: 'About', path: '/about' },
        { name: 'Our Work', path: '/work' },
      ],
    },
    {
      name: 'Get Involved',
      children: [
        { name: 'Get Involved', path: '/get-involved' },
        { name: 'Green Nose Day', path: '/green-nose-day' },
      ],
    },
    { name: 'Stories', path: '/stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-35 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/2.png"
              className="object-contain h-[4rem]"
              alt="NRA logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden mmd:flex items-center space-x-8">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <span
                    className={`cursor-pointer font-lato font-medium transition-colors duration-200 ${
                      scrolled
                        ? 'text-charcoal hover:text-deep-purple'
                        : 'text-white hover:text-warm-yellow'
                    }`}
                  >
                    {item.name}
                  </span>
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-4 py-2 text-charcoal hover:text-deep-purple hover:bg-cream ${
                          location.pathname === child.path
                            ? 'bg-cream text-burnt-red'
                            : ''
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-lato font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-burnt-red border-b-2 border-burnt-red'
                      : scrolled
                      ? 'text-charcoal hover:text-deep-purple'
                      : 'text-white hover:text-warm-yellow'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            <Link
              to="/donate-options"
              className="bg-warm-yellow text-deep-purple px-6 py-2 rounded-full font-montserrat font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="mmd:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mmd:hidden bg-white shadow-lg rounded-lg mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Flattened mobile nav (can group later if needed) */}
              {navItems.map((item) =>
                item.children ? (
                  item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md font-lato font-medium ${
                        location.pathname === child.path
                          ? 'text-burnt-red bg-cream'
                          : 'text-charcoal hover:text-deep-purple hover:bg-cream'
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md font-lato font-medium ${
                      location.pathname === item.path
                        ? 'text-burnt-red bg-cream'
                        : 'text-charcoal hover:text-deep-purple hover:bg-cream'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                to="/donate-options"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-4 bg-warm-yellow text-deep-purple px-6 py-2 rounded-full font-montserrat font-semibold text-center"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
