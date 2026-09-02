import axios from "axios";
import { BACKEND_URL } from "./apiConfig";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

export function useContactForm() {
  const submitContactForm = (values: ContactFormValues) =>
    axios.post(`${BACKEND_URL}/contact`, values);

  return { submitContactForm };
}
