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

type DonationType = "one_time" | "recurring";

const DonateOptions: React.FC<DonateOptionsProps> = ({ onBack }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("general");

  const [donationType, setDonationType] =
    useState<DonationType>("one_time");

  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const donationAmounts = [
    5000,
    10000,
    25000,
    50000,
  ];

  const causes = [
    {
      id: "general",
      name: "Where Most Needed",
      icon: Heart,
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
    },
    {
      id: "feeding",
      name: "Food & Nutrition",
      icon: Utensils,
    },
    {
      id: "community",
      name: "Community Support",
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
        // "http://127.0.0.1:5000/donations/initialize",
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
            type: donationType,
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

  const currentAmount = getCurrentAmount();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-purple via-earth-green to-warm-yellow py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Heart className="mx-auto mb-4 h-10 w-10 text-white" />

          <h1 className="font-montserrat text-3xl font-bold text-white md:text-5xl">
            Make a{" "}
            <span className="text-warm-yellow">
              Difference
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/90 md:text-lg">
            Your generosity helps us provide essential support,
            create opportunities, and restore dignity to vulnerable
            individuals and communities across Africa.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4">
          {/* Back */}
          {onBack && (
            <button
              onClick={onBack}
              className="mb-8 flex items-center gap-2 font-montserrat font-semibold text-deep-purple transition-all hover:gap-3"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
              Back
            </button>
          )}

          

          {/* Header */}
          <div className="mb-8 text-center">
            <Gift className="mx-auto mb-3 h-9 w-9 text-burnt-red" />

            <h2 className="font-montserrat text-2xl font-bold text-charcoal md:text-3xl">
              Make Your Donation
            </h2>

            <p className="mx-auto mt-2 max-w-xl font-lato text-sm text-gray-600 md:text-base">
              Choose how much you'd like to give and where you'd
              like your support to go.
            </p>
          </div>

          {/* Donation Type */}
          <div className="mb-8">
            <div className="mx-auto grid max-w-md grid-cols-2 rounded-2xl bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => setDonationType("one_time")}
                disabled={isProcessing}
                className={`rounded-xl px-5 py-3 font-montserrat text-sm font-semibold transition-all ${
                  donationType === "one_time"
                    ? "bg-white text-deep-purple shadow-sm"
                    : "text-gray-500 hover:text-charcoal"
                }`}
              >
                One-time
              </button>

              <button
                type="button"
                onClick={() => setDonationType("recurring")}
                disabled={isProcessing}
                className={`rounded-xl px-5 py-3 font-montserrat text-sm font-semibold transition-all ${
                  donationType === "recurring"
                    ? "bg-deep-purple text-white shadow-sm"
                    : "text-gray-500 hover:text-charcoal"
                }`}
              >
                Monthly
              </button>
            </div>

            {donationType === "recurring" && (
              <p className="mt-3 text-center font-lato text-sm text-gray-500">
                Your card will be charged this amount automatically
                every month.
              </p>
            )}
          </div>

          {/* Amount */}
          <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5">
              <h3 className="font-montserrat text-lg font-bold text-charcoal">
                How much would you like to give?
              </h3>

              <p className="mt-1 font-lato text-sm text-gray-500">
                {donationType === "recurring"
                  ? "Choose your monthly contribution."
                  : "Every contribution makes a difference."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {donationAmounts.map((amount) => {
                const isSelected =
                  selectedAmount === amount && !customAmount;

                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    disabled={isProcessing}
                    className={`rounded-xl border-2 px-4 py-4 font-montserrat text-lg font-bold transition-all ${
                      isSelected
                        ? "border-deep-purple bg-deep-purple text-white shadow-md"
                        : "border-gray-200 bg-white text-charcoal hover:border-deep-purple"
                    }`}
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                );
              })}
            </div>

            {/* Custom Amount */}
            <div className="mt-5">
              <label
                htmlFor="custom-amount"
                className="mb-2 block font-montserrat text-sm font-semibold text-charcoal"
              >
                Or enter a custom amount
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-montserrat font-bold text-gray-500">
                  ₦
                </span>

                <input
                  id="custom-amount"
                  type="text"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  disabled={isProcessing}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 pl-9 font-lato text-lg outline-none transition-colors focus:border-deep-purple disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Current Amount */}
            {currentAmount > 0 && (
              <div className="mt-5 text-center">
                <p className="font-lato text-xs text-gray-500">
                  You're giving
                </p>

                <p className="mt-1 font-montserrat text-3xl font-bold text-deep-purple">
                  ₦{currentAmount.toLocaleString()}
                  {donationType === "recurring" && (
                    <span className="ml-1 text-base font-semibold text-gray-500">
                      / month
                    </span>
                  )}
                </p>

                <p className="mt-1 font-lato text-sm text-gray-500">
                  {getCurrentImpact()}
                </p>
              </div>
            )}
          </div>

          {/* Cause */}
          <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5">
              <h3 className="font-montserrat text-lg font-bold text-charcoal">
                Where should your donation go?
              </h3>

              <p className="mt-1 font-lato text-sm text-gray-500">
                Choose a specific cause or let us direct it where it
                is needed most.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {causes.map((cause) => {
                const Icon = cause.icon;
                const isSelected = selectedCause === cause.id;

                return (
                  <button
                    key={cause.id}
                    type="button"
                    onClick={() => setSelectedCause(cause.id)}
                    disabled={isProcessing}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? "border-deep-purple bg-deep-purple text-white shadow-md"
                        : "border-gray-200 bg-white text-charcoal hover:border-deep-purple"
                    }`}
                  >
                    <div
                      className={`rounded-lg p-2 ${
                        isSelected
                          ? "bg-white/20"
                          : "bg-deep-purple/10"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isSelected
                            ? "text-white"
                            : "text-deep-purple"
                        }`}
                      />
                    </div>

                    <span className="font-montserrat text-sm font-semibold">
                      {cause.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Donor Information */}
          <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5">
              <h3 className="font-montserrat text-lg font-bold text-charcoal">
                Your Information
              </h3>

              <p className="mt-1 font-lato text-sm text-gray-500">
                We'll use these details for your payment confirmation.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="donor-name"
                  className="mb-2 block font-montserrat text-sm font-semibold text-charcoal"
                >
                  Full Name
                </label>

                <input
                  id="donor-name"
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Your full name"
                  disabled={isProcessing}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-lato outline-none transition-colors focus:border-deep-purple disabled:bg-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="donor-email"
                  className="mb-2 block font-montserrat text-sm font-semibold text-charcoal"
                >
                  Email Address
                </label>

                <input
                  id="donor-email"
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={isProcessing}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-lato outline-none transition-colors focus:border-deep-purple disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <ShieldCheck className="h-4 w-4 text-earth-green" />
              <span>Secure payment powered by Paystack</span>
            </div>

            <button
              type="button"
              onClick={handleDonate}
              disabled={currentAmount < 100 || isProcessing}
              className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 font-montserrat text-lg font-bold shadow-lg transition-all md:w-auto md:px-12 ${
                currentAmount >= 100 && !isProcessing
                  ? "bg-deep-purple text-white hover:scale-[1.02] hover:bg-opacity-90"
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
                  <Heart className="h-5 w-5" />

                  {donationType === "recurring"
                    ? `Give ₦${currentAmount.toLocaleString()} / month`
                    : `Donate ₦${currentAmount.toLocaleString()}`}
                </>
              )}
            </button>

            <p className="mt-3 font-lato text-xs text-gray-500">
              You'll be redirected to Paystack to securely complete
              your donation.
            </p>

            {donationType === "recurring" && (
              <p className="mx-auto mt-2 max-w-md font-lato text-xs text-gray-500">
                By continuing, you authorize Paystack to charge your
                selected amount automatically each month.
              </p>
            )}
          </div>

          
        </div>

        {/* Bank Transfer */}
          <div className="mb-10 mt-20 rounded-2xl bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-deep-purple/10 p-3">
                <CreditCard className="h-6 w-6 text-deep-purple" />
              </div>

              <div className="flex-1">
                <h3 className="font-montserrat text-lg font-bold text-charcoal">
                  Donate via Bank Transfer
                </h3>

                <p className="mt-1 font-lato text-sm text-gray-500">
                  Prefer a direct transfer? You can send your donation
                  to our account.
                </p>

                <div className="mt-5 grid gap-4 rounded-xl bg-cream p-4 sm:grid-cols-3">
                  <div>
                    <p className="font-lato text-xs text-gray-500">
                      Account Name
                    </p>
                    <p className="mt-1 font-montserrat text-sm font-bold text-charcoal">
                      Needy Relief Africa
                    </p>
                  </div>

                  <div>
                    <p className="font-lato text-xs text-gray-500">
                      Account Number
                    </p>
                    <p className="mt-1 font-montserrat text-lg font-bold tracking-wide text-deep-purple">
                      0127752220
                    </p>
                  </div>

                  <div>
                    <p className="font-lato text-xs text-gray-500">
                      Bank
                    </p>
                    <p className="mt-1 font-montserrat text-sm font-bold text-charcoal">
                      Wema Bank
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 font-lato text-xs text-gray-500">
              After making a transfer, please keep your transaction
              receipt for your records.
            </p>
          </div>
      </section>
    </div>
  );
};

export default DonateOptions;
