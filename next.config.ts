import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
import { Environment } from "@/enum/environment";

const currentEnv = (process.env.NEXT_PUBLIC_ENVIRONMENT as Environment) || Environment.LOCAL;

const withPWA = withPWAInit({
  dest: "public/build-pwa",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: currentEnv != Environment.LOCAL,
  workboxOptions: {
    disableDevLogs: true,
  },
});

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

export default withPWA(nextConfig);
