import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, Smartphone, CreditCard, MessageSquare, Banknote } from 'lucide-react';

interface DonationData {
  total: number;
  goal: number;
  channels: {
    paystack: number;
    sms: number;
    whatsapp: number;
    other: number;
  };
  recentDonations: Array<{
    id: string;
    amount: number;
    donor: string;
    channel: string;
    timestamp: Date;
    showName: boolean;
  }>;
  lastUpdated: Date;
  isLoading: boolean;
}

const LiveDonationTicker: React.FC = () => {
  const [donationData, setDonationData] = useState<DonationData>({
    total: 2534000,
    goal: 10000000,
    channels: {
      paystack: 1800000,
      sms: 450000,
      whatsapp: 184000,
      other: 100000
    },
    recentDonations: [
      { id: '1', amount: 25000, donor: 'Anonymous', channel: 'Paystack', timestamp: new Date(Date.now() - 300000), showName: false },
      { id: '2', amount: 10000, donor: 'Adebayo M.', channel: 'SMS', timestamp: new Date(Date.now() - 600000), showName: true },
      { id: '3', amount: 5000, donor: 'Anonymous', channel: 'WhatsApp', timestamp: new Date(Date.now() - 900000), showName: false },
      { id: '4', amount: 15000, donor: 'Anonymous', channel: 'Transfer', timestamp: new Date(Date.now() - 1200000), showName: false },
      { id: '5', amount: 50000, donor: 'Grace O.', channel: 'Paystack', timestamp: new Date(Date.now() - 1500000), showName: true }
    ],
    lastUpdated: new Date(),
    isLoading: false
  });

  const [displayTotal, setDisplayTotal] = useState(donationData.total);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new donations (in real implementation, this would fetch from API)
      const randomIncrease = Math.floor(Math.random() * 50000) + 1000;
      const channels = ['paystack', 'sms', 'whatsapp', 'other'];
      const randomChannel = channels[Math.floor(Math.random() * channels.length)] as keyof typeof donationData.channels;
      
      setDonationData(prev => ({
        ...prev,
        total: prev.total + randomIncrease,
        channels: {
          ...prev.channels,
          [randomChannel]: prev.channels[randomChannel] + randomIncrease
        },
        lastUpdated: new Date()
      }));
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate total counter
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = (donationData.total - displayTotal) / steps;
    
    if (Math.abs(donationData.total - displayTotal) > 0) {
      const timer = setInterval(() => {
        setDisplayTotal(prev => {
          const next = prev + increment;
          if (increment > 0 ? next >= donationData.total : next <= donationData.total) {
            clearInterval(timer);
            return donationData.total;
          }
          return next;
        });
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [donationData.total, displayTotal]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-NG', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  const progressPercentage = (displayTotal / donationData.goal) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-earth-green bg-opacity-10 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-earth-green" />
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-xl text-charcoal">Live Donations</h3>
            <p className="font-lato text-sm text-gray-600">Real-time fundraising progress</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>Updated {formatTime(donationData.lastUpdated)}</span>
          {donationData.isLoading && <span className="text-warm-yellow">syncing...</span>}
        </div>
      </div>

      {/* Main Total */}
      <div className="text-center mb-6">
        <div className="text-4xl md:text-5xl font-montserrat font-bold text-earth-green mb-2">
          {formatCurrency(displayTotal)}
        </div>
        <p className="font-lato text-gray-600">Total Raised</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-lato text-sm text-gray-600">Progress to Goal</span>
          <span className="font-montserrat font-semibold text-sm text-charcoal">
            {formatCurrency(donationData.goal)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-earth-green to-warm-yellow h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        <p className="font-lato text-xs text-gray-500 mt-1 text-center">
          {progressPercentage.toFixed(1)}% of goal reached
        </p>
      </div>

      {/* Channel Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-cream rounded-lg">
          <CreditCard className="h-5 w-5 text-deep-purple mx-auto mb-1" />
          <div className="font-montserrat font-semibold text-sm text-charcoal">
            {formatCurrency(donationData.channels.paystack)}
          </div>
          <p className="font-lato text-xs text-gray-600">Cards/Transfer</p>
        </div>
        <div className="text-center p-3 bg-cream rounded-lg">
          <Smartphone className="h-5 w-5 text-burnt-red mx-auto mb-1" />
          <div className="font-montserrat font-semibold text-sm text-charcoal">
            {formatCurrency(donationData.channels.sms)}
          </div>
          <p className="font-lato text-xs text-gray-600">SMS</p>
        </div>
        <div className="text-center p-3 bg-cream rounded-lg">
          <MessageSquare className="h-5 w-5 text-earth-green mx-auto mb-1" />
          <div className="font-montserrat font-semibold text-sm text-charcoal">
            {formatCurrency(donationData.channels.whatsapp)}
          </div>
          <p className="font-lato text-xs text-gray-600">WhatsApp</p>
        </div>
        <div className="text-center p-3 bg-cream rounded-lg">
          <Banknote className="h-5 w-5 text-warm-yellow mx-auto mb-1" />
          <div className="font-montserrat font-semibold text-sm text-charcoal">
            {formatCurrency(donationData.channels.other)}
          </div>
          <p className="font-lato text-xs text-gray-600">Other</p>
        </div>
      </div>

      {/* Recent Donations */}
      <div>
        <h4 className="font-montserrat font-semibold text-sm text-charcoal mb-3 flex items-center">
          <Users className="h-4 w-4 mr-2" />
          Recent Donations
        </h4>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {donationData.recentDonations.map((donation) => (
            <div key={donation.id} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-earth-green rounded-full animate-pulse"></div>
                <div>
                  <span className="font-lato font-semibold text-sm text-charcoal">
                    {donation.showName ? donation.donor : 'Anonymous'}
                  </span>
                  <p className="font-lato text-xs text-gray-500">
                    {donation.channel} • {getTimeAgo(donation.timestamp)}
                  </p>
                </div>
              </div>
              <span className="font-montserrat font-semibold text-sm text-earth-green">
                {formatCurrency(donation.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveDonationTicker;