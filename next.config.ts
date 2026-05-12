import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use the raw image file from `/public` in all environments
    // so hosting platforms like Firebase don't need Next's
    // built-in image optimization pipeline.
    unoptimized: true,
  },
};

export default nextConfig;
