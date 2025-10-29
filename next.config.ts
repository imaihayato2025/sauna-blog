import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
    };
    return config;
  },
};

export default nextConfig;
