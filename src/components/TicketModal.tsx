import React, { useState } from 'react';
import { X, Ticket, Mail, Phone, User, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    attendeeType: '',
    dietaryRequirements: '',
    accessibilityNeeds: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        attendeeType: '',
        dietaryRequirements: '',
        accessibilityNeeds: ''
      });
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-deep-purple to-burnt-red p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white bg-opacity-20 p-3 rounded-full">
                        <Ticket className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-montserrat font-bold text-2xl">Get Your Free Ticket</h2>
                        <p className="font-lato text-gray-200">Needy Relief Africa Live Event 2026</p>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 bg-cream">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-5 w-5 text-deep-purple" />
                      <div>
                        <p className="font-montserrat font-semibold text-charcoal">May 23, 2026</p>
                        <p className="font-lato text-sm text-gray-600">10:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-5 w-5 text-earth-green" />
                      <div>
                        <p className="font-montserrat font-semibold text-charcoal">UNILAG</p>
                        <p className="font-lato text-sm text-gray-600">Hall TBA</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Ticket className="h-5 w-5 text-warm-yellow" />
                      <div>
                        <p className="font-montserrat font-semibold text-charcoal">Free Entry</p>
                        <p className="font-lato text-sm text-gray-600">Registration Required</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block font-lato font-semibold text-charcoal mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-lato font-semibold text-charcoal mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-lato font-semibold text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block font-lato font-semibold text-charcoal mb-2">
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                        placeholder="Company/Organization name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="attendeeType" className="block font-lato font-semibold text-charcoal mb-2">
                      I am attending as *
                    </label>
                    <select
                      id="attendeeType"
                      name="attendeeType"
                      value={formData.attendeeType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                    >
                      <option value="">Select attendee type</option>
                      <option value="individual">Individual Supporter</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="donor">Donor</option>
                      <option value="partner">Partner Organization</option>
                      <option value="media">Media/Press</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dietaryRequirements" className="block font-lato font-semibold text-charcoal mb-2">
                        Dietary Requirements
                      </label>
                      <input
                        type="text"
                        id="dietaryRequirements"
                        name="dietaryRequirements"
                        value={formData.dietaryRequirements}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                        placeholder="e.g., Vegetarian, Halal, None"
                      />
                    </div>

                    <div>
                      <label htmlFor="accessibilityNeeds" className="block font-lato font-semibold text-charcoal mb-2">
                        Accessibility Needs
                      </label>
                      <input
                        type="text"
                        id="accessibilityNeeds"
                        name="accessibilityNeeds"
                        value={formData.accessibilityNeeds}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato"
                        placeholder="e.g., Wheelchair access, None"
                      />
                    </div>
                  </div>

                  <div className="bg-warm-yellow bg-opacity-10 border border-warm-yellow rounded-lg p-4">
                    <p className="font-lato text-sm text-charcoal">
                      <strong>Note:</strong> Your free ticket will be sent to your email address within 24 hours. 
                      Please bring a printed copy or show the digital ticket on your phone for entry.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-deep-purple text-white py-4 px-6 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Registering...</span>
                      </>
                    ) : (
                      <>
                        <Ticket className="h-5 w-5" />
                        <span>Get My Free Ticket</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="p-12 text-center">
                <div className="bg-earth-green bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ticket className="h-10 w-10 text-earth-green" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                  Registration Successful!
                </h3>
                <p className="font-lato text-gray-600 mb-6">
                  Thank you for registering! Your free ticket will be sent to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <div className="bg-cream rounded-lg p-4 mb-6">
                  <p className="font-lato text-sm text-charcoal">
                    <strong>What's next?</strong><br />
                    • Check your email for the ticket<br />
                    • Save the date: May 23, 2026 at 10:00 AM<br />
                    • Bring your ticket (printed or digital) for entry
                  </p>
                </div>
                <p className="font-lato text-sm text-gray-500">
                  This window will close automatically...
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketModal;