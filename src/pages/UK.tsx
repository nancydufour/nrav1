import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";
import {
  Heart,
  Users,
  Handshake,
  ShoppingBag,
  HomeIcon,
  CalendarHeart,
  PlayCircle,
  Mail,
  Send,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AnimatedCard from "../components/AnimatedCard";
import { useContactForm } from "../hooks/useContactForm";

const HERO_VIDEO_URL = import.meta.env.VITE_UK_HERO_VIDEO_URL;

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; caption: string };

const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: import.meta.env.VITE_UK_GALLERY_IMAGE_1_URL,
    alt: "Food basket support provided by Needy Relief Africa UK",
  },
  {
    type: "image",
    src: import.meta.env.VITE_UK_GALLERY_IMAGE_2_URL,
    alt: "Needy Relief Africa UK flyer",
  },
  {
    type: "video",
    src: import.meta.env.VITE_UK_GALLERY_VIDEO_1_URL,
    caption: "Needy Relief Africa UK",
  },
  {
    type: "video",
    src: import.meta.env.VITE_UK_GALLERY_VIDEO_2_URL,
    caption: "Needy Relief Africa UK",
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  subject: Yup.string().required("Please select a subject"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Invalid phone number format")
    .notRequired(),
});

const ukActivities = [
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    color: "bg-warm-yellow",
    title: "Food & Essentials Support",
    description:
      "Working with local communities to get food and everyday essentials to individuals and families going through hardship.",
  },
  {
    icon: <HomeIcon className="h-8 w-8" />,
    color: "bg-earth-green",
    title: "Family & Community Outreach",
    description:
      "Connecting with families across the UK to understand their needs and offer practical, dignified support.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    color: "bg-burnt-red",
    title: "Emergency Relief Support",
    description:
      "Responding where we can to urgent, short-term needs faced by people experiencing crisis or hardship.",
  },
  {
    icon: <CalendarHeart className="h-8 w-8" />,
    color: "bg-deep-purple",
    title: "Seasonal Appeals & Events",
    description:
      "Running community appeals and events throughout the year to bring people together in support of those in need.",
  },
];

const UK: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { submitContactForm } = useContactForm();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeGalleryModal = () => setSelectedIndex(null);
  const showPrevItem = () =>
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
    );
  const showNextItem = () =>
    setSelectedIndex((i) =>
      i === null ? null : (i + 1) % galleryItems.length
    );

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGalleryModal();
      if (e.key === "ArrowLeft") showPrevItem();
      if (e.key === "ArrowRight") showNextItem();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await submitContactForm(values);
        toast.success("Message sent successfully! We will get back to you soon.");
        formik.resetForm();
      } catch (error) {
        const errorMessage =
          axios.isAxiosError(error) && error.response?.data?.message
            ? error.response.data.message
            : "Please try again later.";
        toast.error(`Submission failed: ${errorMessage}`);
        console.error("Error submitting UK contact form:", error);
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

  const presetSubjectAndScroll = (subject: string) => {
    formik.setFieldValue("subject", subject);
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30rem] bg-gradient-to-br from-deep-purple to-earth-green overflow-hidden">
        {HERO_VIDEO_URL && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={HERO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-lato font-semibold text-warm-yellow tracking-wide uppercase mb-4 animate-fadeInUp">
            Needy Relief Africa UK
          </p>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Community <span className="text-warm-yellow">Support</span> Across the UK
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Needy Relief Africa UK is a community-led humanitarian initiative supporting
            individuals and families experiencing hardship across the United Kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-scaleIn stagger-3">
            <Link
              to="/donate-options"
              className="bg-burnt-red text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Heart className="h-5 w-5" />
              Donate
            </Link>
            <button
              onClick={() => presetSubjectAndScroll("volunteer-uk")}
              className="bg-warm-yellow text-deep-purple px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Volunteer With Us
            </button>
            <button
              onClick={() => presetSubjectAndScroll("partner-uk")}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-deep-purple transition-all duration-300"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-6">
            About <span className="text-deep-purple">Needy Relief Africa UK</span>
          </h2>
          <p className="font-lato text-lg text-gray-600 leading-relaxed mb-6">
            Needy Relief Africa UK is a community-led humanitarian initiative supporting
            individuals and families experiencing hardship across the United Kingdom. We
            operate under the same values that guide Needy Relief Africa globally — restoring
            dignity, offering practical support, and standing with communities in times of need.
          </p>
          <p className="font-lato text-lg text-gray-600 leading-relaxed">
            Our UK arm is community-driven, bringing together volunteers, supporters, and
            partners who want to make a direct, local difference for people facing hardship
            right here in the UK.
          </p>
        </div>
      </section>

      {/* Our UK Activities */}
      <section id="activities" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Our UK <span className="text-earth-green">Activities</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Here's where we're focusing our efforts as our UK community grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ukActivities.map((activity, index) => (
              <AnimatedCard
                key={activity.title}
                delay={index * 120}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div
                  className={`${activity.color} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-charcoal`}
                >
                  {activity.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-charcoal mb-3">
                  {activity.title}
                </h3>
                <p className="font-lato text-gray-600">{activity.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              UK <span className="text-burnt-red">Gallery</span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              A look at our activities and community support across the UK.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <AnimatedCard
                key={item.src}
                delay={i * 100}
                onClick={() => setSelectedIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedIndex(i);
                }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group bg-cream cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  {item.type === "video" && (
                    <PlayCircle className="h-10 w-10 text-white drop-shadow opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeGalleryModal}
        >
          <button
            onClick={closeGalleryModal}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full p-2 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevItem();
            }}
            aria-label="Previous"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full p-2 sm:p-3 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextItem();
            }}
            aria-label="Next"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full p-2 sm:p-3 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[selectedIndex].type === "image" ? (
              <img
                src={galleryItems[selectedIndex].src}
                alt={(galleryItems[selectedIndex] as { alt: string }).alt}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
              />
            ) : (
              <video
                src={galleryItems[selectedIndex].src}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-auto max-w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      {/* Volunteer & Partner */}
      <section id="get-involved" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Get <span className="text-deep-purple">Involved</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Two ways to help us grow our impact across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              onClick={() => presetSubjectAndScroll("volunteer-uk")}
              className="group text-left bg-gradient-to-r from-earth-green to-green-600 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-white bg-opacity-20 p-5 rounded-full inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-3">
                Volunteer With Us
              </h3>
              <p className="font-lato text-gray-100 mb-4">
                Give your time and skills to support people facing hardship in your local UK
                community.
              </p>
              <div className="flex items-center text-white font-montserrat font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Get in Touch</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </button>

            <button
              onClick={() => presetSubjectAndScroll("partner-uk")}
              className="group text-left bg-gradient-to-r from-burnt-red to-red-600 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-white bg-opacity-20 p-5 rounded-full inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-3">
                Partner With Us
              </h3>
              <p className="font-lato text-gray-100 mb-4">
                Organisations, businesses, and community groups — collaborate with us to reach
                more people in need across the UK.
              </p>
              <div className="flex items-center text-white font-montserrat font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Start a Conversation</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" ref={contactRef} className="py-20 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Contact <span className="text-deep-purple">Needy Relief Africa UK</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Have a question, want to volunteer, or interested in partnering with us?
              Send us a message below.
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-lato font-semibold text-charcoal mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...formik.getFieldProps("name")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("name") ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {getFieldError("name") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("name")}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-lato font-semibold text-charcoal mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                      getFieldError("email") ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {getFieldError("email") && (
                    <p className="text-red-500 text-sm mt-1 font-lato">
                      {getFieldError("email")}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-lato font-semibold text-charcoal mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  {...formik.getFieldProps("subject")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                    getFieldError("subject") ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="volunteer-uk">Volunteer With Us (UK)</option>
                  <option value="partner-uk">Partner With Us (UK)</option>
                  <option value="general-uk">General Enquiry (UK)</option>
                  <option value="support-uk">Support Request (UK)</option>
                </select>
                {getFieldError("subject") && (
                  <p className="text-red-500 text-sm mt-1 font-lato">
                    {getFieldError("subject")}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-lato font-semibold text-charcoal mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...formik.getFieldProps("phone")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato ${
                    getFieldError("phone") ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {getFieldError("phone") && (
                  <p className="text-red-500 text-sm mt-1 font-lato">
                    {getFieldError("phone")}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-lato font-semibold text-charcoal mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  {...formik.getFieldProps("message")}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-purple focus:border-transparent font-lato resize-none ${
                    getFieldError("message") ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell us how we can help..."
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
                <Send className="h-5 w-5" />
                <span>{formik.isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>

            <div className="flex items-center justify-center space-x-2 mt-6 text-gray-600 font-lato">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@needyreliefafrica.org" className="hover:underline">
                info@needyreliefafrica.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UK;
