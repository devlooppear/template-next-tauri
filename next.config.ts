import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
import { Environment } from "@/enum/environment";

const currentEnv = (process.env.NEXT_PUBLIC_ENVIRONMENT as Environment) || Environment.LOCAL;

const withPWA = withPWAInit({
  dest: "public/build-pwa",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  workboxOptions: {
    disableDevLogs: currentEnv != Environment.LOCAL,
  },
});

const isTauri = process.env.IS_TAURI === "true";

const nextConfig: NextConfig = {
  output: isTauri ? "export" : undefined,
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 960,
};

export default withPWA(nextConfig);
