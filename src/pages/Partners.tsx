import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from "sonner";
import { Handshake, Building, Users, Heart, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCard from '../components/AnimatedCard';

// Validation schema
const validationSchema = Yup.object().shape({
  organizationName: Yup.string()
    .min(2, "Organization name must be at least 2 characters")
    .required("Organization name is required"),
  contactPerson: Yup.string()
    .min(2, "Contact person name must be at least 2 characters")
    .required("Contact person name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Invalid phone number format")
    .required("Phone number is required"),
  organizationType: Yup.string()
    .required("Organization type is required"),
  partnershipType: Yup.string()
    .required("Partnership interest is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters")
    .required("Message is required"),
});

const Partners: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      organizationType: '',
      partnershipType: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Ensure values are properly serialized
        const formData = JSON.stringify(values);
        
        const response = await axios.post(
          "https://backend-long-frog-8592.fly.dev/partnership",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 30000, // 30 second timeout
          }
        );

        // Check if response was successful
        if (response.status >= 200 && response.status < 300) {
          toast.success("Partnership inquiry submitted successfully! We will get back to you soon.");
          // Reset form after successful submission
          setTimeout(() => {
            formik.resetForm();
          }, 100);
        }
      } catch (error) {
        let errorMessage = "Please try again later.";
        
        if (axios.isAxiosError(error)) {
          if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
          } else if (error.response?.status) {
            errorMessage = `Server error (${error.response.status}). Please try again later.`;
          } else if (error.message === "Network Error") {
            errorMessage = "Network error. Please check your connection and try again.";
          } else if (error.code === "ECONNABORTED") {
            errorMessage = "Request timeout. Please try again.";
          }
        } else if (error instanceof Error) {
          errorMessage = error.message;
        }
        
        toast.error(`Submission failed: ${errorMessage}`);
        console.error("❌ Error submitting partnership form:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const getFieldError = (fieldName: keyof typeof formik.values): string => {
    return formik.touched[fieldName] && formik.errors[fieldName]
      ? formik.errors[fieldName]
      : "";
  };

  const partnershipTypes = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Corporate Partnership",
      description: "CSR initiatives, employee engagement, and strategic collaboration",
      benefits: ["Brand visibility", "Employee volunteering", "Impact reporting", "Tax benefits"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "NGO Collaboration",
      description: "Joint programs, resource sharing, and community impact",
      benefits: ["Shared expertise", "Resource pooling", "Wider reach", "Joint funding"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Faith-Based Partnership",
      description: "Church and religious organization partnerships",
      benefits: ["Community access", "Volunteer base", "Spiritual support", "Local knowledge"]
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Government Partnership",
      description: "Policy alignment, resource sharing, and systemic change",
      benefits: ["Policy influence", "Scale impact", "Sustainability", "Official support"]
    }
  ];

  const currentPartners = [
    {
      name: "H.E.R. Foundation",
      type: "Founding Partner",
      description: "Our parent organization providing strategic oversight and support",
      logo: "https://cdn.needyreliefafrica.org/1_d3ksez.png"
    },
    {
      name: "Community Health Partners",
      type: "Healthcare Partner",
      description: "Supporting our hospital outreach and medical supply programs",
      logo: null
    },
    {
      name: "Education First Initiative",
      type: "Education Partner", 
      description: "Collaborating on school feeding and educational support programs",
      logo: null
    },
    {
      name: "Local Government Areas",
      type: "Government Partner",
      description: "Multiple LGA partnerships across Nigeria for community development",
      logo: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.4}
        className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-earth-green"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Partner <span className="text-warm-yellow">With Us</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Join us in creating lasting change across Africa. Together, we can multiply our impact and reach more communities in need.
          </p>
        </div>
      </ParallaxSection>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Partnership <span className="text-deep-purple">Opportunities</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome partnerships that align with our mission to restore dignity and hope across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <AnimatedCard key={index} delay={index * 150} className="bg-cream rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 text-deep-purple">
                  {type.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                  {type.title}
                </h3>
                <p className="font-lato text-gray-600 mb-6">
                  {type.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-montserrat font-semibold text-charcoal">Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-earth-green" />
                        <span className="font-lato text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our <span className="text-burnt-red">Partners</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Working together to create sustainable change across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPartners.map((partner, index) => (
              <AnimatedCard key={index} delay={index * 100} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="h-20 w-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="h-16 w-16 object-contain" />
                  ) : (
                    <Building className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-charcoal mb-2">
                  {partner.name}
                </h3>
                <p className="font-lato text-sm text-warm-yellow font-semibold mb-3">
                  {partner.type}
                </p>
                <p className="font-lato text-gray-600 text-sm">
                  {partner.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-[90vw] mx-[2rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Start a <span className="text-deep-purple">Partnership</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Ready to make a difference together? Fill out the form below and let's discuss how we can collaborate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Contact Information */}
            <div className="space-y-8 animate-fadeInUp stagger-2">
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6">
                  Get in Touch
                </h3>
                <p className="font-lato text-lg text-gray-600 mb-8">
                  We're excited to explore partnership opportunities that align with our mission.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-warm-yellow bg-opacity-10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-charcoal">Email</h4>
                    <a href='mailto:info@needyreliefafrica.org' className="font-lato text-gray-600 hover:underline">info@needyreliefafrica.org</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-earth-green bg-opacity-10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-earth-green" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-charcoal">Phone</h4>
                    <div className="font-lato text-gray-600 space-y-1">
                      <a href='tel:+2348165289455' className="block hover:underline">+234 816 528 9455</a>
                      <a href='tel:+2347080921501' className="block hover:underline">+234 708 092 1501</a>
                      <a href='tel:+2347047771945' className="block hover:underline">+234 704 777 1945</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-burnt-red bg-opacity-10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-burnt-red" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg text-charcoal">Location</h4>
                    <div className="font-lato text-gray-600">
                      <p className="text-sm mt-1 mb-2 ">
                        <span className="font-semibold">LAGOS:</span> Brown Street Soluyi-Gbagada Lagos
                      </p>
                      <p className="text-sm mt-1">
                        <span className="font-semibold">IBADAN:</span> No. 10 Animashaun street, off Akala express, Ibadan, Oyo
                      </p>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Form */}
            <div className="bg-cream rounded-2xl p-8 animate-fadeInUp stagger-3">
              <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6">
                Partnership Inquiry
              </h3>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                formik.handleSubmit(e);
              }} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="organizationName" className="block font-lato font-semibold text-charcoal mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formik.values.organizationName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("organizationName")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter your organization name"
                  />
                  {getFieldError("organizationName") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("organizationName")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block font-lato font-semibold text-charcoal mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formik.values.contactPerson}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("contactPerson")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter contact person name"
                  />
                  {getFieldError("contactPerson") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("contactPerson")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-lato font-semibold text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("email")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter email address"
                  />
                  {getFieldError("email") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("email")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block font-lato font-semibold text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("phone")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter phone number"
                  />
                  {getFieldError("phone") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("phone")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="organizationType" className="block font-lato font-semibold text-charcoal mb-2">
                    Organization Type *
                  </label>
                  <select
                    id="organizationType"
                    {...formik.getFieldProps("organizationType")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("organizationType")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select organization type</option>
                    <option value="corporate">Corporate/Business</option>
                    <option value="ngo">NGO/Non-profit</option>
                    <option value="government">Government Agency</option>
                    <option value="faith">Faith-based Organization</option>
                    <option value="educational">Educational Institution</option>
                    <option value="other">Other</option>
                  </select>
                  {getFieldError("organizationType") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("organizationType")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block font-lato font-semibold text-charcoal mb-2">
                    Partnership Interest *
                  </label>
                  <select
                    id="partnershipType"
                    {...formik.getFieldProps("partnershipType")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("partnershipType")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select partnership type</option>
                    <option value="funding">Funding/Sponsorship</option>
                    <option value="collaboration">Program Collaboration</option>
                    <option value="resource">Resource Sharing</option>
                    <option value="volunteer">Volunteer Programs</option>
                    <option value="advocacy">Advocacy Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {getFieldError("partnershipType") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("partnershipType")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-lato font-semibold text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...formik.getFieldProps("message")}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato resize-none ${
                      getFieldError("message")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Tell us about your organization and partnership interests..."
                  ></textarea>
                  {getFieldError("message") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("message")}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-deep-purple text-white py-3 px-6 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{formik.isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 animate-fadeInUp">
            Ready to Create <span className="text-warm-yellow">Impact Together?</span>
          </h2>
          <p className="font-lato text-xl text-gray-200 mb-8 animate-fadeInUp stagger-2">
            Join us in building a future where every person in Africa lives with dignity, hope, and opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn stagger-3">
            <a
              href="mailto:partnerships@needyreliefafrica.org"
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-500 transform hover:scale-110 hover:rotate-1 animate-float"
            >
              Email Us Today
            </a>
            <a
              href="tel:+2348165289455"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-500 transform hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;