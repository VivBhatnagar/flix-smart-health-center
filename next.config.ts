import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn-cf.cms.flixbus.com"
      }

    ]
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
  }
};

export default nextConfig;
