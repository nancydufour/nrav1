import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

const Footer: React.FC = () => {
  const quickLinks = [
    { to: "/about", text: "About Us" },
    { to: "/work", text: "Our Work" },
    { to: "/stories", text: "Impact Stories" },
    { to: "/green-nose-day", text: "Green Nose Day" },
    { to: "/clinic", text: "Needy Relief Clinic" },
    { to: "/partners", text: "Partner With Us" },
  ];
  return (
    <footer className="bg-deep-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-[2rem] mb-4 w-fit"
            >
              <img
                src="https://cdn.needyreliefafrica.org/2_rgkois.png"
                className="object-contain h-[3.5rem] min-[400px]:h-[4.9rem]"
                alt="NRA logo"
              />
              <div className="text-sm opacity-70 font-montserrat max-[400px]:hidden text-warm-yellow">
                powered&nbsp;by
              </div>
              <img
                src="https://cdn.needyreliefafrica.org/1_d3ksez.png"
                className="object-contain h-[3.5rem] min-[400px]:h-[4.9rem]"
                alt="Her logo"
              />
            </Link>
            <p className="font-lato text-gray-300 mb-6 max-w-md">
              Restoring dignity, feeding hope, and changing Africa — one meal,
              one child, one village at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/needyreliefafrica/"
                className="text-gray-300 hover:text-warm-yellow transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/+2347047771945"
                className="text-gray-300 hover:text-warm-yellow transition-colors"
              >
                <SiWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@needreliefafrica/"
                className="text-gray-300 hover:text-warm-yellow transition-colors"
              >
                <SiTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-lato">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-warm-yellow transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <div className="space-y-3  font-lato text-gray-300">
              <a
                href="mailto:info@needyreliefafrica.org"
                className="flex items-center space-x-3 hover:underline"
              >
                <Mail className="h-5 w-5 text-warm-yellow" />
                <span>info@needyreliefafrica.org</span>
              </a>
              <div className="flex items-start justify-start">
                <Phone className="h-5 w-5 text-warm-yellow" />
                <div className="ml-3">
                  <a
                    href="tel:+2348165289455"
                    className="block hover:underline"
                  >
                    +234 816 528 9455
                  </a>
                  <a
                    href="tel:+2347080921501"
                    className="block hover:underline"
                  >
                    +234 708 092 1501
                  </a>
                  <a
                    href="tel:+2347047771945"
                    className="block hover:underline"
                  >
                    +234 704 777 1945
                  </a>
                </div>
              </div>
              <div className="flex items-start justify-start">
                <MapPin className="h-5 w-10 text-warm-yellow" />
                <div>
                  <p className="text-sm mb-2">
                    LAGOS: Brown Street Soluyi-Gbagada Lagos.
                  </p>
                  <p className="text-sm">
                    IBADAN: No. 10 Animashaun Street Ibadan, Oyo.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-6">
              <Link to="/partners" className="text-warm-yellow hover:underline font-montserrat font-semibold">
                Partner With Us
              </Link>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-lato text-gray-300">
            © 2025 Needy Relief Africa. All rights reserved. | Powered by
            dignity, hope, and love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
