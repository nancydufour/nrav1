import { BACKEND_URL } from "./apiConfig";

export interface DonationVerifyResult {
  ok: boolean;
  data: any;
}

export function useDonationVerify() {
  const verifyDonation = async (
    reference: string
  ): Promise<DonationVerifyResult> => {
    const response = await fetch(
      `${BACKEND_URL}/donations/verify/${encodeURIComponent(reference)}`
    );

    const data = await response.json();

    return { ok: response.ok, data };
  };

  return { verifyDonation };
}
