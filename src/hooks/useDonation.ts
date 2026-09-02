import { BACKEND_URL } from "./apiConfig";

export interface DonationInitializePayload {
  name: string;
  email: string;
  amount: number;
  cause: string;
  type: string;
}

export interface DonationInitializeResponse {
  authorization_url: string;
  message?: string;
  [key: string]: unknown;
}

export function useDonation() {
  const initializeDonation = async (
    payload: DonationInitializePayload
  ): Promise<DonationInitializeResponse> => {
    const response = await fetch(`${BACKEND_URL}/donations/initialize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.authorization_url) {
      throw new Error(data.message || "Unable to initialize payment.");
    }

    return data;
  };

  return { initializeDonation };
}
