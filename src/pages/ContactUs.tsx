import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send, Clock, Globe } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-burnt-red">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-7xl pt-[10rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6">
            Contact <span className="text-warm-yellow">Us</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team. We'd love to hear from you and explore how we can work together to transform lives across Africa.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-montserrat font-bold text-3xl text-charcoal mb-6">
                  Get in <span className="text-burnt-red">Touch</span>
                </h2>
                <p className="font-lato text-lg text-gray-600 mb-8">
                  Whether you want to volunteer, partner with us, or just learn more about our work, we're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-yellow bg-opacity-10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">Email</h3>
                    <a href='mailto:info@needyreliefafrica.org' className="font-lato text-gray-600">info@needyreliefafrica.org</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-earth-green bg-opacity-10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-earth-green" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">Phone</h3>
                    <a href='tel:+234XXXYYYZZZZ' className="font-lato text-gray-600">+234 XXX XXX XXXX</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-burnt-red bg-opacity-10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-burnt-red" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">Location</h3>
                    <p className="font-lato text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-deep-purple bg-opacity-10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-deep-purple" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-charcoal">Office Hours</h3>
                    <p className="font-lato text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-warm-yellow bg-opacity-10 p-3 rounded-full hover:bg-warm-yellow hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="h-6 w-6 text-warm-yellow hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-earth-green bg-opacity-10 p-3 rounded-full hover:bg-earth-green hover:text-white transition-colors duration-300"
                  >
                    <Facebook className="h-6 w-6 text-earth-green hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-burnt-red bg-opacity-10 p-3 rounded-full hover:bg-burnt-red hover:text-white transition-colors duration-300"
                  >
                    <Twitter className="h-6 w-6 text-burnt-red hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-lato font-semibold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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

                <div>
                  <label htmlFor="subject" className="block font-lato font-semibold text-charcoal mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="donation">Donation Questions</option>
                    <option value="media">Media & Press</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-lato font-semibold text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-deep-purple text-white py-3 px-6 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-charcoal mb-4">
              Find <span className="text-earth-green">Us</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Our headquarters in Lagos, Nigeria
            </p>
          </div>

          {/* Placeholder for Google Map */}
          <div className="bg-gray-300 md:w-fit mx-auto rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d654.6542322092911!2d3.4134133676955476!3d6.457672673804566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b365e68643d%3A0x4e785353d86fd9c0!2s54B%20Itafaji%20Rd%2C%20Dolphin%20Estate%2C%20Lagos%20106104%2C%20Lagos!5e1!3m2!1sen!2sng!4v1755644994653!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}}  loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-burnt-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
            Emergency or Urgent <span className="text-warm-yellow">Support?</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8">
            If you're in immediate need of assistance or know someone who is, please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+234XXXXXXX"
              className="bg-white text-burnt-red px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency Hotline</span>
            </a>
            <a
              href="mailto:urgent@needyreliefafrica.org"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-burnt-red transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Urgent Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;