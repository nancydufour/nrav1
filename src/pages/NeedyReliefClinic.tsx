import React, { useState } from 'react';
import { MapPin, Clock, Heart, Shield, Pill, Calendar } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCard from '../components/AnimatedCard';

const NeedyReliefClinic: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requestType: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Clinic request submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      requestType: '',
      description: ''
    });
  };

  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Free Sanitary Pads",
      description: "Supporting girls and women with free menstrual hygiene products to maintain dignity and health.",
      color: "bg-burnt-red"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe Sex Education & Condoms",
      description: "Promoting sexual health awareness and providing free condoms for safe practices.",
      color: "bg-earth-green"
    },
    {
      icon: <Pill className="h-8 w-8" />,
      title: "Prescription Drug Assistance",
      description: "Helping individuals access essential medications they cannot afford.",
      color: "bg-deep-purple"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.4}
        className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-burnt-red"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Needy Relief <span className="text-warm-yellow">Clinic</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Providing essential healthcare services, sanitary products, and medical assistance to those who need it most.
          </p>
        </div>
      </ParallaxSection>

      {/* Clinic Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
                Healthcare for <span className="text-burnt-red">Everyone</span>
              </h2>
              <p className="font-lato text-lg text-gray-700 leading-relaxed mb-8">
                Our clinic provides essential healthcare services and products to ensure everyone has access to basic health needs, regardless of their financial situation. We believe healthcare is a human right, not a privilege.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-yellow bg-opacity-10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">Operating Hours</h3>
                    <p className="font-lato text-gray-600">Tuesdays</p>
                    {/* <p className="font-lato text-gray-600 text-sm">Mobile outreach services available on request</p> */}
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="bg-earth-green bg-opacity-10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-earth-green" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">Location</h3>
                    <p className="font-lato text-gray-600">Brown Street Soluyi-Gbagada Lagos</p>
                    <p className="font-lato text-gray-600 text-sm">Mobile services reach surrounding communities</p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="bg-burnt-red bg-opacity-10 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-burnt-red" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">How to Access</h3>
                    <p className="font-lato text-gray-600 text-sm">Submit request form below for assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeInUp stagger-2">
              <img
                src="https://cdn.needyreliefafrica.org/raw_gt5arn.png"
                alt="Healthcare services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-deep-purple">Services</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare support addressing essential needs in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 150} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className={`${service.color} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <div className={`${service.color.replace('bg-', 'text-')}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="font-lato text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Request <span className="text-burnt-red">Assistance</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Submit your request for healthcare assistance, sanitary products, or prescription drug support.
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8 animate-fadeInUp stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block font-lato font-semibold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-lato font-semibold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-lato font-semibold text-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="requestType" className="block font-lato font-semibold text-charcoal mb-2">
                  Type of Request *
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                >
                  <option value="">Select request type</option>
                  <option value="sanitary-pads">Request for Sanitary Pads</option>
                  <option value="healthcare-assistance">Healthcare Assistance</option>
                  <option value="prescription-drugs">Help with Prescribed Drugs</option>
                  <option value="safe-sex-education">Safe Sex Education & Condoms</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block font-lato font-semibold text-charcoal mb-2">
                  Additional Information *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato resize-none"
                  placeholder="Please provide more details about your request, including any specific needs, urgency, or circumstances that would help us assist you better..."
                ></textarea>
              </div>

              <div className="bg-warm-yellow bg-opacity-10 border border-warm-yellow rounded-lg p-4">
                <p className="font-lato text-sm text-charcoal">
                  <strong>Privacy Notice:</strong> Your information will be kept confidential and used only to provide the requested assistance. We respect your privacy and dignity.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-deep-purple text-white py-3 px-6 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Need Immediate <span className="text-warm-yellow">Help?</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            For urgent healthcare needs or emergency assistance, contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <a
              href="tel:+2348165289455"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Call Emergency Line
            </a>
            <a
              href="mailto:clinic@needyreliefafrica.org"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-300"
            >
              Email Clinic
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeedyReliefClinic;