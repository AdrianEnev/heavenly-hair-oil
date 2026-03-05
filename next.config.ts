import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SES_SMTP_HOST: process.env.SES_SMTP_HOST,
    SES_SMTP_PORT: process.env.SES_SMTP_PORT,
    SES_SMTP_USER: process.env.SES_SMTP_USER,
    SES_SMTP_PASS: process.env.SES_SMTP_PASS,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    EMAIL_SUPPORT: process.env.EMAIL_SUPPORT,
  },
};

export default nextConfig;
