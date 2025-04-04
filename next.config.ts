import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    "@react-email/render",
    "prettier",
    "@prettier/plugin-html",
    "resend", // ¡Añade esto!
  ],
};

export default nextConfig;
