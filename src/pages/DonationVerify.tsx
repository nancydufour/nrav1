"use client";

import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  XCircle,
  Loader2,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BACKEND_URL = "https://backend-long-frog-8592.fly.dev";

const DonationVerify: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [certificateUrl, setCertificateUrl] =
  useState<string | null>(null);

  const [status, setStatus] = useState<
    "loading" | "success" | "failed"
  >("loading");

  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState<number | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const ref = searchParams.get("reference");

      if (!ref) {
        setStatus("failed");
        return;
      }

      setReference(ref);

      try {
        const response = await fetch(
          `${BACKEND_URL}/donations/verify/${encodeURIComponent(ref)}`
        );

        const data = await response.json();

        if (
          response.ok &&
          data.payment_status === "success"
        ) {
          setAmount(
            typeof data.amount === "number"
              ? data.amount / 100
              : null
          );
          setCertificateUrl(
            data.certificate_url || null
          );

          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error(
          "Payment verification failed:",
          error
        );

        setStatus("failed");
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-purple via-earth-green to-warm-yellow py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white blur-2xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-flex rounded-full bg-white/20 p-5 backdrop-blur-sm">
            <Heart className="h-12 w-12 text-white" />
          </div>

          <h1 className="font-montserrat text-4xl font-bold text-white md:text-5xl">
            Donation{" "}
            <span className="text-warm-yellow">
              Confirmation
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-lato text-lg text-white/90">
            Thank you for supporting Needy Relief Africa.
          </p>
        </div>
      </section>

      {/* Verification Result */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
            {/* Loading */}
            {status === "loading" && (
              <>
                <Loader2 className="mx-auto mb-6 h-20 w-20 animate-spin text-deep-purple" />

                <h2 className="mb-4 font-montserrat text-2xl font-bold text-charcoal md:text-3xl">
                  Verifying Your Donation
                </h2>

                <p className="font-lato leading-relaxed text-gray-600">
                  Please wait while we confirm your payment
                  with Paystack.
                </p>
              </>
            )}

            {/* Success */}
            {status === "success" && (
              <>
                <CheckCircle className="mx-auto mb-6 h-20 w-20 text-earth-green" />

                <h2 className="mb-4 font-montserrat text-3xl font-bold text-charcoal">
                  Thank You!
                </h2>

                <p className="mb-6 font-lato text-lg leading-relaxed text-gray-600">
                  Your donation has been received successfully.
                  Your generosity is helping Needy Relief Africa
                  support vulnerable individuals and communities.
                </p>

                {amount !== null && (
                  <div className="mb-6 rounded-2xl bg-earth-green/10 p-5">
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Donation Amount
                    </p>

                    <p className="font-montserrat text-3xl font-bold text-earth-green">
                      ₦{amount.toLocaleString()}
                    </p>
                  </div>
                )}

                <div className="mb-8 rounded-2xl bg-gray-50 p-5">
                  <p className="mb-1 font-lato text-sm text-gray-500">
                    Transaction Reference
                  </p>

                  <p className="break-all font-montserrat text-sm font-semibold text-charcoal">
                    {reference}
                  </p>
                </div>

                {certificateUrl && (
                <a  
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 inline-flex items-center justify-center rounded-full bg-earth-green px-8 py-3 font-montserrat font-semibold text-white transition-all hover:scale-105"
                >
                  Download Certificate
                </a>
              )}

                <p className="mb-8 font-lato text-sm text-gray-500">
                  A payment receipt will be sent to your email
                  address by Paystack.
                </p>

                <button
                  onClick={() => navigate("/donate-options")}
                  className="inline-flex items-center gap-2 rounded-full bg-deep-purple px-8 py-3 font-montserrat font-semibold text-white transition-all hover:scale-105 hover:bg-opacity-90"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Donations
                </button>
              </>
            )}

            {/* Failed */}
            {status === "failed" && (
              <>
                <XCircle className="mx-auto mb-6 h-20 w-20 text-burnt-red" />

                <h2 className="mb-4 font-montserrat text-3xl font-bold text-charcoal">
                  Payment Not Confirmed
                </h2>

                <p className="mb-6 font-lato text-lg leading-relaxed text-gray-600">
                  We couldn't confirm your donation at this
                  time.
                </p>

                <p className="mb-8 font-lato text-sm leading-relaxed text-gray-500">
                  If money was deducted from your account, please
                  do not make another payment immediately.
                  Contact us and provide your transaction
                  reference so we can assist you.
                </p>

                {reference && (
                  <div className="mb-8 rounded-2xl bg-burnt-red/10 p-5">
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Transaction Reference
                    </p>

                    <p className="break-all font-montserrat text-sm font-semibold text-charcoal">
                      {reference}
                    </p>
                  </div>
                )}

                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <button
                    onClick={() => navigate("/donate-options")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-purple px-8 py-3 font-montserrat font-semibold text-white transition-all hover:scale-105"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Try Again
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="rounded-full border-2 border-deep-purple px-8 py-3 font-montserrat font-semibold text-deep-purple transition-all hover:bg-deep-purple hover:text-white"
                  >
                    Contact Us
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationVerify;