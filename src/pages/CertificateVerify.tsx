"use client";

import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  XCircle,
  Loader2,
  Award,
  ArrowLeft,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useCertificateVerify } from "../hooks/useCertificateVerify";

interface Certificate {
  certificate_id: string;
  donor_name: string;
  amount: number;
  currency: string;
  issued_at: string;
}

const CertificateVerify: React.FC = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();
  const { verifyCertificate } = useCertificateVerify();

  const [status, setStatus] = useState<
    "loading" | "success" | "failed"
  >("loading");

  const [certificate, setCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    const verifyCertificate = async () => {
      if (!certificateId) {
        setStatus("failed");
        return;
      }

      try {
        const { ok, data } = await verifyCertificate(certificateId);

        if (
          ok &&
          data.status === "success" &&
          data.valid === true &&
          data.certificate
        ) {
          setCertificate(data.certificate);
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error(
          "Certificate verification failed:",
          error
        );

        setStatus("failed");
      }
    };

    verifyCertificate();
  }, [certificateId]);

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
            <Award className="h-12 w-12 text-white" />
          </div>

          <h1 className="font-montserrat text-4xl font-bold text-white md:text-5xl">
            Certificate{" "}
            <span className="text-warm-yellow">
              Verification
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-lato text-lg text-white/90">
            Verify the authenticity of a Needy Relief Africa
            donation certificate.
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
                  Verifying Certificate
                </h2>

                <p className="font-lato leading-relaxed text-gray-600">
                  Please wait while we verify this certificate
                  with Needy Relief Africa's records.
                </p>
              </>
            )}

            {/* Success */}
            {status === "success" && certificate && (
              <>
                <CheckCircle className="mx-auto mb-6 h-20 w-20 text-earth-green" />

                <h2 className="mb-4 font-montserrat text-3xl font-bold text-charcoal">
                  Certificate Verified
                </h2>

                <p className="mb-8 font-lato text-lg leading-relaxed text-gray-600">
                  This certificate has been successfully verified
                  as an authentic certificate issued by Needy
                  Relief Africa.
                </p>

                {/* Certificate Details */}
                <div className="mb-6 space-y-4 rounded-2xl bg-gray-50 p-6 text-left">

                  <div>
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Certificate ID
                    </p>

                    <p className="break-all font-montserrat text-sm font-semibold text-charcoal">
                      {certificate.certificate_id}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Donor Name
                    </p>

                    <p className="font-montserrat text-lg font-semibold text-charcoal">
                      {certificate.donor_name}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Donation Amount
                    </p>

                    <p className="font-montserrat text-2xl font-bold text-earth-green">
                      {certificate.currency === "NGN"
                        ? `₦${certificate.amount.toLocaleString()}`
                        : `${certificate.currency} ${certificate.amount.toLocaleString()}`
                      }
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Date Issued
                    </p>

                    <p className="font-montserrat font-semibold text-charcoal">
                      {new Date(
                        certificate.issued_at
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="mb-8 rounded-2xl bg-earth-green/10 p-5">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5 text-earth-green" />

                    <p className="font-montserrat font-semibold text-earth-green">
                      Authentic Certificate
                    </p>
                  </div>

                  <p className="mt-2 font-lato text-sm text-gray-600">
                    This certificate matches the official
                    records of Needy Relief Africa.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center gap-2 rounded-full bg-deep-purple px-8 py-3 font-montserrat font-semibold text-white transition-all hover:scale-105 hover:bg-opacity-90"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to Home
                </button>
              </>
            )}

            {/* Failed */}
            {status === "failed" && (
              <>
                <XCircle className="mx-auto mb-6 h-20 w-20 text-burnt-red" />

                <h2 className="mb-4 font-montserrat text-3xl font-bold text-charcoal">
                  Certificate Not Verified
                </h2>

                <p className="mb-6 font-lato text-lg leading-relaxed text-gray-600">
                  We couldn't verify this certificate against
                  Needy Relief Africa's records.
                </p>

                {certificateId && (
                  <div className="mb-6 rounded-2xl bg-burnt-red/10 p-5 text-left">
                    <p className="mb-1 font-lato text-sm text-gray-500">
                      Certificate ID
                    </p>

                    <p className="break-all font-montserrat text-sm font-semibold text-charcoal">
                      {certificateId}
                    </p>
                  </div>
                )}

                <p className="mb-8 font-lato text-sm leading-relaxed text-gray-500">
                  Please ensure the certificate ID or QR code
                  is correct. If you believe this certificate
                  should be valid, please contact Needy Relief
                  Africa for assistance.
                </p>

                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-purple px-8 py-3 font-montserrat font-semibold text-white transition-all hover:scale-105"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Back to Home
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

export default CertificateVerify;