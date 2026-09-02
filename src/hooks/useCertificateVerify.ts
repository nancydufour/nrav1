import { BACKEND_URL } from "./apiConfig";

export interface CertificateVerifyResult {
  ok: boolean;
  data: any;
}

export function useCertificateVerify() {
  const verifyCertificate = async (
    certificateId: string
  ): Promise<CertificateVerifyResult> => {
    const response = await fetch(
      `${BACKEND_URL}/certificates/verify/${encodeURIComponent(
        certificateId
      )}`
    );

    const data = await response.json();

    return { ok: response.ok, data };
  };

  return { verifyCertificate };
}
