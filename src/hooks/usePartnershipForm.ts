import axios from "axios";
import { BACKEND_URL } from "./apiConfig";

export interface PartnershipFormValues {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  organizationType: string;
  partnershipType: string;
  message: string;
}

export function usePartnershipForm() {
  const submitPartnershipInquiry = (values: PartnershipFormValues) =>
    axios.post(`${BACKEND_URL}/partnership`, values, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30000,
    });

  return { submitPartnershipInquiry };
}
