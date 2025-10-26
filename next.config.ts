import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;
