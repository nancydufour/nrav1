"use client";

import React, { useState } from "react";
import {
  Heart,
  GraduationCap,
  Utensils,
  Users,
  Gift,
  CreditCard,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface DonateOptionsProps {
  onBack?: () => void;
}

const DonateOptions: React.FC<DonateOptionsProps> = ({ onBack }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("general");

  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const donationAmounts = [
    {
      amount: 5000,
      impact: "Provides meals for children",
    },
    {
      amount: 10000,
      impact: "Supports educational materials",
    },
    {
      amount: 25000,
      impact: "Provides essential family support",
    },
    {
      amount: 50000,
      impact: "Supports community development",
    },
  ];

  const causes = [
    {
      id: "general",
      name: "Where Most Needed",
      description: "Let us direct your donation where it can make the greatest impact.",
      icon: Heart,
    },
    {
      id: "education",
      name: "Education",
      description: "Support educational opportunities and resources for children and young people.",
      icon: GraduationCap,
    },
    {
      id: "feeding",
      name: "Food & Nutrition",
      description: "Help provide nutritious meals and essential food supplies to vulnerable families.",
      icon: Utensils,
    },
    {
      id: "community",
      name: "Community Support",
      description: "Support programmes designed to strengthen and empower local communities.",
      icon: Users,
    },
  ];

  const getCurrentAmount = () => {
    if (customAmount) {
      const amount = Number(customAmount.replace(/,/g, ""));
      return Number.isFinite(amount) ? amount : 0;
    }

    return selectedAmount || 0;
  };

  const getCurrentImpact = () => {
    const amount = getCurrentAmount();

    if (amount >= 50000) {
      return "Supports community development";
    }

    if (amount >= 25000) {
      return "Provides essential family support";
    }

    if (amount >= 10000) {
      return "Supports educational materials";
    }

    if (amount >= 5000) {
      return "Provides meals for children";
    }

    return "Every contribution makes a difference";
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = async () => {
    const amount = getCurrentAmount();

    if (!amount || amount < 100) {
      alert("Please enter a donation amount of at least ₦100.");
      return;
    }

    if (!donorName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!donorEmail.trim()) {
      alert("Please enter your email address.");
      return;
    }

    try {
      setIsProcessing(true);

      const response = await fetch(
        "https://backend-long-frog-8592.fly.dev/donations/initialize",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: donorName.trim(),
            email: donorEmail.trim(),
            amount,
            cause: selectedCause,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.authorization_url) {
        throw new Error(
          data.message || "Unable to initialize payment."
        );
      }

      window.location.href = data.authorization_url;
    } catch (error) {
      console.error("Donation initialization error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to start payment. Please try again."
      );

      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-earth-green to-warm-yellow py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white blur-2xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-5 backdrop-blur-sm">
            <Gift className="h-12 w-12 text-white" />
          </div>

          <h1 className="mb-6 font-montserrat text-4xl font-bold text-white md:text-6xl">
            Make a{" "}
            <span className="text-warm-yellow">Difference</span>
          </h1>

          <p className="mx-auto max-w-3xl font-lato text-lg leading-relaxed text-white/90 md:text-xl">
            Your generosity helps us provide essential support,
            create opportunities, and restore dignity to vulnerable
            individuals and communities across Africa.
          </p>
        </div>
      </section>

      {/* Donation Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          {/* Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="mb-8 flex items-center gap-2 font-montserrat font-semibold text-deep-purple transition-all hover:gap-3"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
              Back
            </button>
          )}

          {/* Intro */}
          {/* Bank Transfer */}
          <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-deep-purple/10 p-3">
                <CreditCard className="h-7 w-7 text-deep-purple" />
              </div>

              <div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal">
                  Donate via Bank Transfer
                </h3>

                <p className="font-lato text-sm text-gray-500">
                  You can make a direct transfer to our account.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-cream p-6">
              <div className="mb-4">
                <p className="font-lato text-sm text-gray-500">
                  Account Name
                </p>

                <p className="font-montserrat text-lg font-bold text-charcoal">
                  Needy Relief Africa
                </p>
              </div>

              <div className="mb-4">
                <p className="font-lato text-sm text-gray-500">
                  Account Number
                </p>

                <p className="font-montserrat text-2xl font-bold tracking-wider text-deep-purple">
                  0127752220
                </p>
              </div>

              <div>
                <p className="font-lato text-sm text-gray-500">
                  Bank
                </p>

                <p className="font-montserrat text-lg font-bold text-charcoal">
                  Wema Bank
                </p>
              </div>
            </div>

            <p className="mt-4 font-lato text-sm text-gray-500">
              After making a transfer, please keep your transaction receipt
              for your records.
            </p>
          </div>
          <div className="mb-12 text-center">
            <Heart className="mx-auto mb-4 h-10 w-10 text-burnt-red" />

            <h2 className="mb-4 font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
              Choose Your Donation
            </h2>

            <p className="mx-auto max-w-2xl font-lato text-lg text-gray-600">
              Select an amount and cause below. Every donation,
              regardless of size, contributes towards creating a
              better future.
            </p>
          </div>

          {/* Donation Amount */}
          <div className="mb-12 animate-fadeInUp">
            <h3 className="mb-6 text-center font-montserrat text-2xl font-bold text-charcoal">
              Choose Your Donation Amount
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {donationAmounts.map((item) => (
                <button
                  key={item.amount}
                  type="button"
                  onClick={() => handleAmountSelect(item.amount)}
                  className={`rounded-2xl border-2 p-5 text-center transition-all duration-300 hover:-translate-y-1 ${
                    selectedAmount === item.amount &&
                    !customAmount
                      ? "border-deep-purple bg-deep-purple text-white shadow-lg"
                      : "border-gray-200 bg-white text-charcoal hover:border-deep-purple"
                  }`}
                >
                  <div className="mb-2 font-montserrat text-2xl font-bold">
                    ₦{item.amount.toLocaleString()}
                  </div>

                  <div
                    className={`font-lato text-sm ${
                      selectedAmount === item.amount &&
                      !customAmount
                        ? "text-white/80"
                        : "text-gray-500"
                    }`}
                  >
                    {item.impact}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mx-auto mt-6 max-w-md">
              <label className="mb-2 block font-montserrat font-semibold text-charcoal">
                Or enter a custom amount
              </label>

              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 font-montserrat text-lg font-bold text-gray-500">
                  ₦
                </span>

                <input
                  type="text"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 pl-10 font-lato text-lg outline-none transition-colors focus:border-deep-purple"
                />
              </div>
            </div>

            {/* Current Amount */}
            <div className="mx-auto mt-6 max-w-md rounded-2xl bg-earth-green/10 p-5 text-center">
              <p className="mb-1 font-lato text-sm text-gray-500">
                Your donation
              </p>

              <p className="font-montserrat text-3xl font-bold text-deep-purple">
                ₦{getCurrentAmount().toLocaleString()}
              </p>

              <p className="mt-1 font-lato text-sm text-gray-600">
                {getCurrentImpact()}
              </p>
            </div>
          </div>

          {/* Cause Selection */}
          <div className="mb-12 animate-fadeInUp">
            <h3 className="mb-6 text-center font-montserrat text-2xl font-bold text-charcoal">
              Choose Where Your Donation Goes
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {causes.map((cause) => {
                const Icon = cause.icon;
                const isSelected = selectedCause === cause.id;

                return (
                  <button
                    key={cause.id}
                    type="button"
                    onClick={() => setSelectedCause(cause.id)}
                    className={`rounded-2xl border-2 p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "border-deep-purple bg-deep-purple text-white shadow-lg"
                        : "border-gray-200 bg-white text-charcoal hover:border-deep-purple"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`rounded-xl p-3 ${
                          isSelected
                            ? "bg-white/20"
                            : "bg-deep-purple/10"
                        }`}
                      >
                        <Icon
                          className={`h-7 w-7 ${
                            isSelected
                              ? "text-white"
                              : "text-deep-purple"
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="mb-2 font-montserrat text-lg font-bold">
                          {cause.name}
                        </h4>

                        <p
                          className={`font-lato text-sm leading-relaxed ${
                            isSelected
                              ? "text-white/80"
                              : "text-gray-600"
                          }`}
                        >
                          {cause.description}
                        </p>
                      </div>

                      {isSelected && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                          <div className="h-3 w-3 rounded-full bg-deep-purple" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Donor Information */}
          <div className="mb-12 animate-fadeInUp">
            <h3 className="mb-6 text-center font-montserrat text-2xl font-bold text-charcoal">
              Your Information
            </h3>

            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="donor-name"
                    className="mb-2 block font-montserrat font-semibold text-charcoal"
                  >
                    Full Name
                  </label>

                  <input
                    id="donor-name"
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Enter your full name"
                    disabled={isProcessing}
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 font-lato text-lg outline-none transition-colors focus:border-deep-purple disabled:cursor-not-allowed disabled:bg-gray-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="donor-email"
                    className="mb-2 block font-montserrat font-semibold text-charcoal"
                  >
                    Email Address
                  </label>

                  <input
                    id="donor-email"
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="Enter your email address"
                    disabled={isProcessing}
                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 font-lato text-lg outline-none transition-colors focus:border-deep-purple disabled:cursor-not-allowed disabled:bg-gray-100"
                  />
                </div>
              </div>

              <p className="mt-4 font-lato text-sm text-gray-500">
                Your email will be used to send your donation
                confirmation and payment receipt.
              </p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-deep-purple/10 p-3">
                <CreditCard className="h-7 w-7 text-deep-purple" />
              </div>

              <div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal">
                  Secure Payment
                </h3>

                <p className="font-lato text-sm text-gray-500">
                  Your payment is securely processed by Paystack.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-earth-green/10 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-earth-green" />

              <p className="font-lato text-sm leading-relaxed text-gray-600">
                Your payment information is handled securely by
                Paystack. We do not store your card details on our
                servers.
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleDonate}
              disabled={
                getCurrentAmount() < 100 || isProcessing
              }
              className={`inline-flex items-center justify-center gap-3 rounded-full px-12 py-4 font-montserrat text-xl font-bold shadow-lg transition-all duration-300 ${
                getCurrentAmount() >= 100 && !isProcessing
                  ? "bg-deep-purple text-white hover:scale-105 hover:bg-opacity-90"
                  : "cursor-not-allowed bg-gray-300 text-gray-500"
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Processing...
                </>
              ) : (
                <>
                  <Heart className="h-6 w-6" />
                  Donate ₦{getCurrentAmount().toLocaleString()} Now
                </>
              )}
            </button>

            <p className="mt-4 font-lato text-sm text-gray-500">
              You will be redirected to Paystack to securely
              complete your donation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateOptions;