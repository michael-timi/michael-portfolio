import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile in the home directory was making Turbopack treat
  // /Users/user as the workspace root, so Tailwind could not resolve.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Use the raw image file from `/public` in all environments
    // so hosting platforms like Firebase don't need Next's
    // built-in image optimization pipeline.
    unoptimized: true,
  },
};

export default nextConfig;
