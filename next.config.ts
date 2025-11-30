import type { NextConfig } from "next";

// Cloudflare Pages configuration
// basePath must be empty ("") for Cloudflare Pages to work correctly
const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;