// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // avatars/logos from arbitrary CDNs
    ],
  },
};

export default nextConfig;
