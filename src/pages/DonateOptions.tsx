import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Building, Users, Gift, Star, Shield, CheckCircle } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCard from '../components/AnimatedCard';

const DonateOptions: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedCause, setSelectedCause] = useState<string>('general');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const quickAmounts = [10500, 50000, 100500, 200000, 300000, 500000];
  
  const causes = [
    {
      id: 'general',
      title: 'Where Most Needed',
      description: 'Support our most urgent priorities',
      icon: <Heart className="h-6 w-6" />,
      color: 'bg-warm-yellow'
    },
    {
      id: 'feeding',
      title: 'School Feeding Program',
      description: 'Feed hungry children in schools',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-earth-green'
    },
    {
      id: 'healthcare',
      title: 'Hospital Support',
      description: 'Care packages for patients',
      icon: <Shield className="h-6 w-6" />,
      color: 'bg-burnt-red'
    },
    {
      id: 'shelter',
      title: 'Emergency Shelter',
      description: 'Shelter for the homeless',
      icon: <Building className="h-6 w-6" />,
      color: 'bg-deep-purple'
    }
  ];

  const impactExamples = [
    { amount: '₦10,500', impact: 'Provides a nutritious meal for 2 children' },
    { amount: '₦50,000', impact: 'Feeds a child for a week' },
    { amount: '₦100,500', impact: 'Provides care packages for 5 hospital patients' },
    { amount: '₦200,000', impact: 'Feeds 10 children for a week' },
    { amount: '₦300,000', impact: 'Provides emergency shelter supplies for a family' },
    { amount: '₦500,000', impact: 'Funds a community kitchen for a month' }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  const getCurrentImpact = () => {
    const amount = getCurrentAmount();
    // Find the highest amount that is less than or equal to the selected amount
    const impact = impactExamples
        .filter(example => parseInt(example.amount.replace('₦', '').replace(',', '')) <= amount)
        .reduce((highest, current) => {
            const currentAmount = parseInt(current.amount.replace('₦', '').replace(',', ''));
            const highestAmount = parseInt(highest.amount.replace('₦', '').replace(',', ''));
            return currentAmount > highestAmount ? current : highest;
        }, impactExamples[0]);

    return impact?.impact || 'Every donation makes a difference';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        speed={0.4}
        className="relative h-[30rem] bg-gradient-to-br from-warm-yellow to-earth-green"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 pt-[10rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6 animate-slideInLeft">
            Make a <span className="text-warm-yellow">Donation</span>
          </h1>
          <p className="font-lato text-xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Your generosity transforms lives across Africa. Every donation, no matter the size, helps restore dignity and hope.
          </p>
        </div>
      </ParallaxSection>

      {/* Main Donation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donation Type Toggle */}
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-flex bg-cream rounded-full p-2 mb-8">
              <button
                onClick={() => setDonationType('one-time')}
                className={`px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 ${
                  donationType === 'one-time'
                    ? 'bg-deep-purple text-white shadow-lg'
                    : 'text-deep-purple hover:bg-white'
                }`}
              >
                One-time Donation
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 ${
                  donationType === 'monthly'
                    ? 'bg-deep-purple text-white shadow-lg'
                    : 'text-deep-purple hover:bg-white'
                }`}
              >
                Monthly Giving
              </button>
            </div>
            
            {donationType === 'monthly' && (
              <div className="bg-earth-green bg-opacity-10 border border-earth-green rounded-lg p-4 max-w-md mx-auto">
                <p className="font-lato text-earth-green font-semibold">
                  Monthly donors provide sustainable support that helps us plan long-term programs
                </p>
              </div>
            )}
          </div>

          {/* Amount Selection */}
          <div className="mb-12 animate-fadeInUp stagger-2">
            <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6 text-center">
              Choose Your {donationType === 'monthly' ? 'Monthly ' : ''}Donation Amount
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-4 rounded-xl border-2 font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedAmount === amount
                      ? 'border-deep-purple bg-deep-purple text-white shadow-lg'
                      : 'border-gray-300 text-charcoal hover:border-deep-purple hover:bg-deep-purple hover:text-white'
                  }`}
                >
                  ₦{amount.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount"
                className="w-full pl-20 pr-6 py-4 border-2 border-gray-300 rounded-xl font-lato text-lg focus:border-deep-purple focus:outline-none transition-colors duration-300"
              />
              <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-lato text-lg pointer-events-none">
                ₦
              </span>
            </div>
          </div>

          {/* Impact Display */}
          {getCurrentAmount() > 0 && (
            <div className="bg-warm-yellow bg-opacity-10 border border-warm-yellow rounded-xl p-6 mb-12 text-center animate-scaleIn">
              <h4 className="font-montserrat font-bold text-xl text-charcoal mb-2">
                Your Impact
              </h4>
              <p className="font-lato text-lg text-gray-700">
                ₦{getCurrentAmount().toLocaleString()} {donationType === 'monthly' ? 'per month ' : ''}
                {getCurrentImpact()}
              </p>
            </div>
          )}

          {/* Cause Selection */}
          <div className="mb-12 animate-fadeInUp stagger-3">
            <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6 text-center">
              Choose Your Cause
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {causes.map((cause) => (
                <button
                  key={cause.id}
                  onClick={() => setSelectedCause(cause.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                    selectedCause === cause.id
                      ? 'border-deep-purple bg-deep-purple text-white shadow-lg'
                      : 'border-gray-300 hover:border-deep-purple hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      selectedCause === cause.id ? 'bg-white bg-opacity-20' : cause.color + ' bg-opacity-10'
                    }`}>
                      <div className={selectedCause === cause.id ? 'text-white' : 'text-gray-700'}>
                        {cause.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-lg mb-2">
                        {cause.title}
                      </h4>
                      <p className={`font-lato ${
                        selectedCause === cause.id ? 'text-gray-200' : 'text-gray-600'
                      }`}>
                        {cause.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-12 animate-fadeInUp stagger-4">
            <h3 className="font-montserrat font-bold text-2xl text-charcoal mb-6 text-center">
              Payment Methods
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CreditCard className="h-12 w-12 text-deep-purple mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                  Card Payment
                </h4>
                <p className="font-lato text-gray-600 text-sm">
                  Visa, Mastercard, Verve
                </p>
              </div>
              
              <div className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Smartphone className="h-12 w-12 text-earth-green mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                  SMS Payement
                </h4>
                <p className="font-lato text-gray-600 text-sm">
                  MTN, Airtel, 9mobile
                </p>
              </div>
              
              <div className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Building className="h-12 w-12 text-burnt-red mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                  Bank Transfer
                </h4>
                <p className="font-lato text-gray-600 text-sm">
                  Direct bank transfer
                </p>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <div className="text-center animate-scaleIn stagger-5">
            <button
              disabled={getCurrentAmount() === 0}
              className={`px-12 py-4 rounded-full font-montserrat font-bold text-xl transition-all duration-300 transform ${
                getCurrentAmount() > 0
                  ? 'bg-deep-purple text-white hover:bg-opacity-90 hover:scale-110 hover:rotate-1 shadow-lg animate-pulse-glow'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Donate ₦{getCurrentAmount().toLocaleString()} {donationType === 'monthly' ? 'Monthly' : 'Now'}
            </button>
            
            {getCurrentAmount() > 0 && (
              <p className="font-lato text-gray-600 mt-4">
                Secure payment powered by industry-leading encryption
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Why Your <span className="text-burnt-red">Donation</span> Matters
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Every amount you give goes directly to transforming lives and restoring dignity across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-warm-yellow bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-warm-yellow" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                100% Transparency
              </h3>
              <p className="font-lato text-gray-600">
                Every donation is tracked and reported. You'll see exactly how your money creates change.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={150} className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-earth-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-earth-green" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Direct Impact
              </h3>
              <p className="font-lato text-gray-600">
                Your donation goes straight to the communities that need it most, with minimal administrative costs.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={300} className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-burnt-red bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-burnt-red" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Secure & Safe
              </h3>
              <p className="font-lato text-gray-600">
                All transactions are encrypted and secure. Your personal information is protected.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Other Ways to <span className="text-deep-purple">Give</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              Choose the giving method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard delay={0} className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Gift className="h-12 w-12 text-warm-yellow mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                In-Kind Donations
              </h4>
              <p className="font-lato text-gray-600 text-sm mb-4">
                Donate food, clothing, or medical supplies
              </p>
              <button className="text-warm-yellow font-montserrat font-semibold hover:underline">
                Learn More
              </button>
            </AnimatedCard>

            <AnimatedCard delay={150} className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-12 w-12 text-earth-green mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                Corporate Giving
              </h4>
              <p className="font-lato text-gray-600 text-sm mb-4">
                Partner with us for CSR initiatives
              </p>
              <button className="text-earth-green font-montserrat font-semibold hover:underline">
                Partner With Us
              </button>
            </AnimatedCard>

            <AnimatedCard delay={300} className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Star className="h-12 w-12 text-burnt-red mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                Legacy Giving
              </h4>
              <p className="font-lato text-gray-600 text-sm mb-4">
                Leave a lasting impact through your will
              </p>
              <button className="text-burnt-red font-montserrat font-semibold hover:underline">
                Learn More
              </button>
            </AnimatedCard>

            <AnimatedCard delay={450} className="bg-cream rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Heart className="h-12 w-12 text-deep-purple mx-auto mb-4" />
              <h4 className="font-montserrat font-semibold text-lg text-charcoal mb-2">
                Fundraise for Us
              </h4>
              <p className="font-lato text-gray-600 text-sm mb-4">
                Start your own fundraising campaign
              </p>
              <button className="text-deep-purple font-montserrat font-semibold hover:underline">
                Get Started
              </button>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="py-20 bg-deep-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">
              Direct Bank <span className="text-warm-yellow">Transfer</span>
            </h2>
            <p className="font-lato text-xl text-gray-200">
              Prefer to donate via bank transfer? Use these details:
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 animate-scaleIn stagger-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-white mb-4">
                  Nigerian Naira Account
                </h4>
                <div className="space-y-3 font-lato text-gray-200">
                  <div>
                    <span className="text-warm-yellow font-semibold">Bank Name:</span> Access Bank
                  </div>
                  <div>
                    <span className="text-warm-yellow font-semibold">Account Name:</span> Needy Relief Africa
                  </div>
                  <div>
                    <span className="text-warm-yellow font-semibold">Account Number:</span> 1234567890
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-white mb-4">
                  International Donations
                </h4>
                <div className="space-y-3 font-lato text-gray-200">
                  <div>
                    <span className="text-warm-yellow font-semibold">SWIFT Code:</span> ABNGNGLA
                  </div>
                  <div>
                    <span className="text-warm-yellow font-semibold">USD Account:</span> 0987654321
                  </div>
                  <div>
                    <span className="text-warm-yellow font-semibold">Routing:</span> Available on request
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-warm-yellow bg-opacity-20 rounded-lg">
              <p className="font-lato text-white text-center">
                <strong>Important:</strong> Please email us at info@needyreliefafrica.org after making a transfer so we can acknowledge your donation and send you a receipt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Your Donation is <span className="text-earth-green">Safe</span>
            </h2>
            <p className="font-lato text-lg text-gray-600">
              We're committed to transparency and accountability in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fadeInUp stagger-1">
              <div className="bg-earth-green bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-earth-green" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Registered NGO
              </h3>
              <p className="font-lato text-gray-600">
                Officially registered and compliant with all regulatory requirements.
              </p>
            </div>

            <div className="text-center animate-fadeInUp stagger-2">
              <div className="bg-warm-yellow bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-warm-yellow" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Annual Reports
              </h3>
              <p className="font-lato text-gray-600">
                Detailed financial reports showing exactly how donations are used.
              </p>
            </div>

            <div className="text-center animate-fadeInUp stagger-3">
              <div className="bg-burnt-red bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-burnt-red" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-charcoal mb-4">
                Impact Updates
              </h3>
              <p className="font-lato text-gray-600">
                Regular updates on how your donations are creating real change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Frequently Asked <span className="text-deep-purple">Questions</span>
            </h2>
          </div>

          <div className="space-y-4 animate-fadeInUp stagger-2">
            {/*
            {
              id: 'tax',
              question: 'Is my donation tax-deductible?',
              answer: 'Yes, as a registered NGO, all donations are tax-deductible. We'll provide you with a receipt for your records.'
            },
            {
              id: 'programs',
              question: 'How much of my donation goes to programs?',
              answer: 'Over 85% of every donation goes directly to our programs. Administrative costs are kept to a minimum.'
            },
            {
              id: 'cancel',
              question: 'Can I cancel my monthly donation?',
              answer: 'Absolutely. You can modify or cancel your monthly donation at any time by contacting us.'
            },
            {
              id: 'updates',
              question: 'Will I receive updates on my donation's impact?',
              answer: 'Yes! We send regular impact reports and stories showing how your donation is making a difference.'
            }
          */}
            { [
                {
                  id: 'tax',
                  question: 'Is my donation tax-deductible?',
                  answer: 'Yes, as a registered NGO, all donations are tax-deductible. We\'ll provide you with a receipt for your records.'
                },
                {
                  id: 'programs',
                  question: 'How much of my donation goes to programs?',
                  answer: 'Over 85% of every donation goes directly to our programs. Administrative costs are kept to a minimum.'
                },
                {
                  id: 'cancel',
                  question: 'Can I cancel my monthly donation?',
                  answer: 'Absolutely. You can modify or cancel your monthly donation at any time by contacting us.'
                },
                {
                  id: 'updates',
                  question: 'Will I receive updates on my donation\'s impact?',
                  answer: 'Yes! We send regular impact reports and stories showing how your donation is making a difference.'
                }
              ].map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <h4 className="font-montserrat font-semibold text-lg text-charcoal">
                      {faq.question}
                    </h4>
                    <span className={`transform transition-transform duration-300 ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`}>
                      <svg 
                        className="w-5 h-5 text-deep-purple"
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedFaq === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="px-6 pb-4 font-lato text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )) }
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateOptions;