import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  staticPageGenerationTimeout: 960,
};

export default nextConfig;
